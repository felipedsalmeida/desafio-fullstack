import { Router } from "express";
import { createContactController, deleteContactController, listContactsController, updateContactController } from "../controllers/contact.controller";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { contactSchemaRequest, contactSchemaUpdate } from "../schemas/contacts.schemas";
import { ensureIsOwnerMiddleware } from "../middlewares/ensureIsOwner.middleware";

const contactsRoutes = Router()

contactsRoutes.use(ensureAuthMiddleware)

contactsRoutes.post("", ensureDataIsValidMiddleware(contactSchemaRequest), createContactController)
contactsRoutes.get("", listContactsController)
contactsRoutes.patch("/:id", ensureIsOwnerMiddleware, ensureDataIsValidMiddleware(contactSchemaUpdate), updateContactController)
contactsRoutes.delete("/:id", ensureIsOwnerMiddleware, deleteContactController)

export {contactsRoutes}