import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entitie";
import { TClientRequest, TClientResponse } from "../../interfaces/clients.interfaces";
import {hash} from "bcryptjs"
import { clientSchemaResponse } from "../../schemas/clients.schemas";
import { AppError } from "../../errors/AppError";

const createClientService = async (data: TClientRequest): Promise<TClientResponse> => {
    const {name, email, password} = data
    const clientRepository = AppDataSource.getRepository(Client)
    const findClient = await clientRepository.findOne({
        where: {
            email
        }
    })

    if (findClient) {
        throw new AppError("Client already exists", 409)
    }

    const hashedPassword = await hash(password, 10)

    const client = clientRepository.create({
        ...data,
        password: hashedPassword,
    })
    await clientRepository.save(client)

    return clientSchemaResponse.parse(client)
}

export {createClientService}