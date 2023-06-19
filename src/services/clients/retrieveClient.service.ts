import { Repository } from "typeorm";
import { TClientResponse } from "../../interfaces/clients.interfaces";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entity";
import { AppError } from "../../errors/AppError";
import { clientSchemaResponse } from "../../schemas/clients.schemas";

const retrieveClientService = async (clientId:string): Promise<TClientResponse> => {
    const clientsRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const client: Client | null = await clientsRepository.findOneBy({
        id: clientId
    })

    if(!client) {
        throw new AppError("Client not found", 404)
    }

    return clientSchemaResponse.parse(client)
}

export {retrieveClientService}