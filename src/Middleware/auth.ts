import { NextFunction, Request,Response } from "express";
import logger from "./logger";
import { statusCode } from "utils/Constent";


export default class AuthMiddleware{
    public async routeAuthMiddleware(req:Request,res:Response,next:NextFunction){
        try{
            

        }catch(err){
            logger.error(err)
            res.status(statusCode.badRequest).json({message:"Auth feild"})
        }
    }
}