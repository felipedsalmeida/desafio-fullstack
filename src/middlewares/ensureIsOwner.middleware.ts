import { Request, Response, NextFunction } from "express"
import { AppDataSource } from "../data-source"
import { Contact } from "../entities/contact.entitie"

const ensureIsOwnerMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    const contactsRepository = AppDataSource.getRepository(Contact)

    const contactId: string = req.params.id
    const clientId: string = res.locals.clientId

    const contact = await contactsRepository.findOne({
        where: {
            id: contactId
        },
        relations: {
            client: true
        }
    })

    if(!contact) {
        return res.status(404).json({
            message: "Contact not found"
        })
    }
    if(contact.client.id !== clientId){
        return res.status(403).json({
            message: "You don't have permissions"
        })
    }
    return next()
}

export {ensureIsOwnerMiddleware}