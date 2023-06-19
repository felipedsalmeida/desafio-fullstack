import { Repository } from "typeorm"
import { Client } from "../../entities/client.entity"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors/AppError"

const deleteClientService = async (clientId: string): Promise<void> => {
    const clientsRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const client: Client | null = await clientsRepository.findOneBy({
        id: clientId
    })

    if(!client) {
        throw new AppError("Client not found", 404)
    }

    await clientsRepository.remove(client)
}

export {deleteClientService}