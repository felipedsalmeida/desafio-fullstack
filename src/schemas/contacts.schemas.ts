import {z} from "zod"

const contactSchema = z.object({
    id: z.string(),
    username: z.string(),
    first_name: z.string(),
    last_name: z.string(),
    email: z.string().email(),
    birthdate: z.string(),
    telephone: z.string().min(10).max(11),
    profile_img: z.string(),
    created_at: z.string(),
    updated_at: z.string()
})

const contactSchemaRequest = contactSchema.omit({
    id: true,
    created_at: true,
    updated_at: true
})

const contactsSchemaResponse = z.array(contactSchema)

const contactSchemaUpdate = contactSchema.omit({
    id: true
}).partial()



export {contactSchema, contactSchemaRequest, contactsSchemaResponse, contactSchemaUpdate}