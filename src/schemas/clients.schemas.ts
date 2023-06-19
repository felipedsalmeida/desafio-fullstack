import {z} from "zod"

const clientSchema = z.object({
    id: z.string(),
    username: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    birthdate: z.string(),
    telephone: z.string().min(10).max(11),
    profile_img: z.string(),
    password: z.string(),
    created_at: z.string(),
    updated_at: z.string()
})

const clientSchemaRequest = clientSchema.omit({
    id: true,
    created_at: true,
    updated_at: true
})

const clientSchemaResponse = clientSchema.omit({
    password: true
})

const clientSchemaUpdate = clientSchema.omit({
    id: true,
    password: true
}).partial()

export {clientSchema, clientSchemaRequest, clientSchemaResponse, clientSchemaUpdate}