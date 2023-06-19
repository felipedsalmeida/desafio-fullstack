import { Response, Request } from "express";
import { TClientRequest, TClientUpdateRequest } from "../interfaces/clients.interfaces";
import { createClientService } from "../services/clients/createClient.service";
import { deleteClientService } from "../services/clients/deleteClient.service";
import { retrieveClientService } from "../services/clients/retrieveClient.service";
import { updateClientService } from "../services/clients/updateClient.service";

const createClientController = async(req: Request, res: Response) => {

    const data = req.body
    const newClient = await createClientService(data)
    
    return res.status(201).json(newClient)
}

const retrieveClientController = async (req: Request, res: Response) => {
    const clientId = res.locals.client_id

    const client = await retrieveClientService(clientId)
   
    return res.json(client)
}

const updateClientController = async(req: Request, res: Response) => {
    const clientId = res.locals.client_id
    
    const updatedValues: TClientUpdateRequest = req.body

    const updateClient = await updateClientService(updatedValues, clientId)
    return res.json(updateClient)
}

const deleteClientController = async (req: Request, res: Response) => {
    const clientId = res.locals.client_id

    await deleteClientService(clientId)
    res.status(204).send()
}

export {createClientController, retrieveClientController, updateClientController, deleteClientController}