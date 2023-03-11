import { NextFunction, Request,Response } from "express";
import Users from "../../Model/UsersModel/schema";
import logger from "../../Middleware/logger";
import * as bcrypt from "bcrypt"
import * as jwt from "jsonwebtoken"
import { statusCode } from "../../utils/Constent";

export default class UsersController{
    public async PostUsers(req:Request,res:Response){
     
        try{      
            
              const getUserName = await Users.findOne({userName:req.body.userName})
            if(getUserName){
                res.status(statusCode.badRequest).json({message:"UserName already exist"})
            }else{
            const hashPassword = await bcrypt.hash(req.body.password,10)
            const postUsersData = await Users.create({
                userName:req.body.userName,
                password:hashPassword,
                role:req.body.role,
                isPermission:req.body.isPermission
            })
            const saveUserData = await postUsersData.save()
            res.status(statusCode.success).json({message:"Userdata added SuccessFully",saveUserData})
        }
           
        }catch(err){
            logger.error(err)
            res.status(statusCode.internalServerError).json({message:"Internal server error"})
        }

    }
    public async getUserData(req:Request,res:Response){
        try{
            const getuserData = await Users.find()
            if(getuserData){
                res.status(statusCode.success).json({message:"Data Fetch SuccessFully",data:getuserData})
            }else{
                res.status(statusCode.badRequest).json({message:"Data not Fetched"})
            }

        }catch(err){
            logger.error(err)
            res.status(statusCode.internalServerError).json({message:"Internel server error"})
        }
    }
    public async deleteuserData(req:Request,res:Response){
        try{
            const deleteUserDatas = await Users.findByIdAndDelete(req.params.id)
            if(deleteUserDatas) res.status(statusCode.success).json({message:"Data deleted SuccessFully",data:deleteUserDatas})

        }catch(err){
            logger.error(err)
            res.status(statusCode.internalServerError).json({message:"Internal server error"})

        }
    }
    public async userLogin(req:Request,res:Response,next:NextFunction){
        try{
            const {userName,password}=req.body
           
            if(!(userName && password)) res.status(statusCode.badRequest).json({message:"All inputs are required"})
            const getUserName = await Users.findOne({userName})
            if(getUserName && (await bcrypt.compare(password, getUserName.password))){
                const getToken =  jwt.sign({userName},process.env.JWT_SECROT_KET, {
                    expiresIn: "2h",
                  })
            
               res.status(statusCode.success).json({message:"loggin SuccessFully",data:{userName:userName,role:getUserName?.role,permission:getUserName?.isPermission,token:getToken}})     

            }else{
                return res.status(statusCode.badRequest).json({message:"loggin error"})
            }
           
        }catch(err){
            logger.error(err)
            return res.status(statusCode.internalServerError).json({messsage:"Internel server error"})
        }
    }

}