import { Router } from "express";
import { createClientController } from "../controllers/client.controller";
import { ensureDataIsValidMiddleware } from "../middlewares/ensureDataIsValid.middleware";
import { clientSchemaRequest } from "../schemas/clients.schemas";

const clientsRoutes = Router()

clientsRoutes.post("", ensureDataIsValidMiddleware(clientSchemaRequest), createClientController)

export default clientsRoutes