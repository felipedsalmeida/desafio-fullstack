import {z} from "zod"

const clientSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    telephone: z.string().min(10).max(11),
    img: z.string(),
    password: z.string()
})

const clientSchemaRequest = clientSchema.omit({
    id: true
})

const clientSchemaResponse = clientSchema.extend({
    createdAt: z.string(),
}).omit({
    password: true
})

export {clientSchema, clientSchemaRequest, clientSchemaResponse}