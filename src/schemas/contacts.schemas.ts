import {z} from "zod"

const contactSchema = z.object({
    id: z.string(),
    name: z.string(),
    email: z.string().email(),
    telephone: z.string().min(10).max(11),
    img: z.string(),
    createdAt: z.string()
})

const contactSchemaRequest = contactSchema.omit({
    id: true,
    createdAt: true
})

const contactsSchemaResponse = z.array(contactSchema)

const contactSchemaUpdate = contactSchema.omit({
    id: true
}).partial()



export {contactSchema, contactSchemaRequest, contactsSchemaResponse, contactSchemaUpdate}