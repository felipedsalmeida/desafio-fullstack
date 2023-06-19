import { Request, Response } from "express";
import { createContactService } from "../services/contacts/createContact.service";
import { listContactsService } from "../services/contacts/listContacts.service";
import { TContactUpdateRequest } from "../interfaces/constacts.interfaces";
import { updateContactService } from "../services/contacts/updateContact.service";
import { deleteContactService } from "../services/contacts/delete.service";


const createContactController = async (req: Request, res: Response) => {
    const clientId = res.locals.client_id

    const newContact = await createContactService(req.body, clientId)

    return res.status(201).json(newContact)
}

const listContactsController = async (req: Request, res: Response) => {
    const clientId = res.locals.client_id

    const contacts = await listContactsService(clientId)
   
    return res.json(contacts)
}

const updateContactController = async (req: Request, res: Response) => {
    const contactId = req.params.id
    const updatedValues: TContactUpdateRequest = req.body

    const updateContact = await updateContactService(updatedValues, contactId)

    return res.json(updateContact)
}

const deleteContactController = async (req: Request, res: Response) => {
    const contactId = req.params.id
    await deleteContactService(contactId)
    res.status(204).send()
}

export {createContactController, listContactsController, updateContactController, deleteContactController}