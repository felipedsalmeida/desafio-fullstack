import { Repository } from "typeorm";
import { TClientResponse, TClientUpdateRequest } from "../../interfaces/clients.interfaces";
import { Client } from "../../entities/client.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { clientSchema, clientSchemaResponse } from "../../schemas/clients.schemas";
import { hash } from "bcryptjs";

const updateClientService =async (data:TClientUpdateRequest, clientId:string): Promise<TClientResponse> => {
    const {password} = data
    const clientsRepository: Repository<Client> = AppDataSource.getRepository(Client)
    const oldClient: Client | null = await clientsRepository.findOneBy({
        id: clientId
    })
    if(!oldClient) {
        throw new AppError("Client not found", 404)
    }
    if(password){
        data.password = await hash(password, 10)
    }
    
    const newClientData = clientsRepository.create({
        ...oldClient,
        ...data       
    })
    await clientsRepository.save(newClientData)

    return clientSchemaResponse.parse(newClientData)
}

export {updateClientService}
