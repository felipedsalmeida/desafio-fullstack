import { Repository } from "typeorm";
import { TContactsResponse } from "../../interfaces/constacts.interfaces";
import { Contact } from "../../entities/contact.entity";
import { Client } from "../../entities/client.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { contactsSchemaResponse } from "../../schemas/contacts.schemas";


const listContactsService = async (clientId:string): Promise<TContactsResponse> => {
    const contactsRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const clientsRepository: Repository<Client> = AppDataSource.getRepository(Client)

    const client: Client | null = await clientsRepository.findOneBy({
        id: clientId
    })

    if(!client) {
        throw new AppError("Client not found", 404)
    }
    const contacts: Contact[] = await contactsRepository.find({
        where: {
            client: client
        }
    })
    console.log(contacts)
    
    return contactsSchemaResponse.parse(contacts)
}

export {listContactsService}
