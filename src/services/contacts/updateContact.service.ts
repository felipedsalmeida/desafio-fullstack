import { Repository } from "typeorm";
import { TContactResponse, TContactUpdateRequest } from "../../interfaces/constacts.interfaces";
import { Contact } from "../../entities/contact.entity";
import { AppDataSource } from "../../data-source";
import { AppError } from "../../errors/AppError";
import { contactSchema } from "../../schemas/contacts.schemas";

const updateContactService = async (data: TContactUpdateRequest, contactId:string): Promise<TContactResponse> => {
    const contactsRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const oldContact: Contact | null = await contactsRepository.findOneBy({
        id: contactId
    })
    if(!oldContact) {
        throw new AppError("Contact not found", 404)
    }

    const newContactData = contactsRepository.create({
        ...oldContact,
        ...data
    })

    await contactsRepository.save(newContactData)

    return contactSchema.parse(newContactData)
} 
export {updateContactService}