import jwt from "jsonwebtoken"
import { Request, Response, NextFunction } from "express"
import "dotenv/config"


const ensureAuthMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers.authorization

    if(!token) {
        return res.status(401).json({
            message: "Invalid Token"
        })
    }

    const splitToken = token.split(" ")[1]
    jwt.verify(splitToken, process.env.SECRET_KEY!, (error:any, decoded: any) => {
        if(error){
            return res.status(401).json({
                message: "Invalid Token"
            })
        }
        res.locals.client_id = decoded.sub
        res.locals.client_first_name = decoded.clientFirstName
        res.locals.client_last_name = decoded.clientLastName
        res.locals.client_email = decoded.clientEmail
        return next()
    })
}

export {ensureAuthMiddleware}