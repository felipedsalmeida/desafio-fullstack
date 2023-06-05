import {z} from "zod"
import { clientSchema, clientSchemaRequest, clientSchemaResponse } from "../schemas/clients.schemas"

type TClient = z.infer<typeof clientSchema>
type TClientRequest = z.infer<typeof clientSchemaRequest>
type TClientResponse = z.infer<typeof clientSchemaResponse>


export {TClient, TClientRequest, TClientResponse}