import { Repository } from "typeorm";
import { TContactRequest, TContactResponse } from "../../interfaces/constacts.interfaces";
import { Contact } from "../../entities/contact.entitie";
import { AppDataSource } from "../../data-source";
import { Client } from "../../entities/client.entitie";
import { AppError } from "../../errors/AppError";
import { contactSchema } from "../../schemas/contacts.schemas";


const createContactService = 
    async (data: TContactRequest, clientId: string): Promise<TContactResponse> => {
        const {email} = data
        const contactsRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
        const clientsRepository: Repository<Client> = AppDataSource.getRepository(Client)

        const findContact = await contactsRepository.findOne({
            where: {
                email
            }
        })
    
        if (findContact) {
            throw new AppError("Contact already exists", 409)
        }
        const client: Client | null = await clientsRepository.findOneBy({
            id: clientId
        })

        if(!client) {
            throw new AppError("Client not found", 404)
        }

        const contact : Contact = contactsRepository.create({
            ...data,
            client
        })

        await contactsRepository.save(contact)

        return contactSchema.parse(contact)
}

export {createContactService}