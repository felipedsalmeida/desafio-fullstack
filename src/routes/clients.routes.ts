import { Router } from "express";
import { createClientController, deleteClientController, retrieveClientController, updateClientController } from "../controllers/client.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { clientSchemaRequest, clientSchemaUpdate } from "../schemas/clients.schemas";
import { ensureAuthMiddleware } from "../middlewares/ensureAuth.middleware";

const clientsRoutes = Router()

clientsRoutes.post("", ensureDataIsValidMiddleware(clientSchemaRequest), createClientController)
clientsRoutes.get("", ensureAuthMiddleware, retrieveClientController)
clientsRoutes.patch("", ensureAuthMiddleware, ensureDataIsValidMiddleware(clientSchemaUpdate), updateClientController)
clientsRoutes.delete("", ensureAuthMiddleware, deleteClientController)

export default clientsRoutes