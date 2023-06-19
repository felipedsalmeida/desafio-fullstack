import { Repository } from "typeorm"
import { Contact } from "../../entities/contact.entity"
import { AppDataSource } from "../../data-source"
import { AppError } from "../../errors/AppError"


const deleteContactService = async (contactId: string): Promise<void>=> {
    const contactsRepository: Repository<Contact> = AppDataSource.getRepository(Contact)
    const contact: Contact | null = await contactsRepository.findOneBy({
        id: contactId
    })
    if(!contact) {
        throw new AppError("Contact not found", 404)
    }

    await contactsRepository.remove(contact)
}
export {deleteContactService}