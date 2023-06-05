import { Response, Request } from "express";
import { TClientRequest } from "../interfaces/clients.interfaces";
import { createClientService } from "../services/clients/createClient.service";

const createClientController = async(req: Request, res: Response) => {

    const data = req.body
    const newClient = await createClientService(data)
    
    return res.status(201).json(newClient)
}

export {createClientController}