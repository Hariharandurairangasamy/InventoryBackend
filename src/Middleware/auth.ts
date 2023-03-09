import { NextFunction, Request,Response } from "express";
import logger from "./logger";
import * as jwt from "jsonwebtoken";
import { statusCode } from "../utils/Constent";

export interface AuthRequest extends Request {
    user: any;
   }

export default class AuthMiddleware{
    public async routeAuthMiddleware(req:AuthRequest,res:Response,next:NextFunction){
        try{
            const authToken = req.headers["authorization"]
            const getAuthToken = authToken && authToken.split(" ")[1]
            if(!getAuthToken) res.status(statusCode.badRequest).json({message:"Auth token vot valid"})
            const decodeToken =  jwt.verify(getAuthToken,process.env.JWT_SECROT_KET)
            req.user = decodeToken
            next()
        }catch(err){
            logger.error(err)
            res.status(statusCode.badRequest).json({message:"Auth faild"})
        }
    }
}