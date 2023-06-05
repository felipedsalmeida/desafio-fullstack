import "reflect-metadata"
import "express-async-errors"
import express from "express"
import clientsRoutes from "./routes/clients.routes"
import { handleAppErrorMiddleware } from "./middlewares/handleAppError.middleware"
import { loginRoutes } from "./routes/login.routes"
import { contactsRoutes } from "./routes/contacts.routes"

const app = express()
app.use(express.json())
app.use("/clients", clientsRoutes)
app.use("/login", loginRoutes)
app.use("/contacts", contactsRoutes)

app.use(handleAppErrorMiddleware)

export default app