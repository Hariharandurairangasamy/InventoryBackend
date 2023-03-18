import { Request,Response } from "express";
import { statusCode } from "../../utils/Constent";
import logger from "../../Middleware/logger"
import AttendenceData from "../../Model/Attendence/schema"

export default class Attendence{
    public async addAttendence(req:Request,res:Response){
        try{
            const getAttendenceDetails = await AttendenceData.create(req.body)
            const saveAttendenceData = await getAttendenceDetails.save()
            if(saveAttendenceData){
                res.status(statusCode.success).json({message:"Request Added",data:saveAttendenceData})
            }else{
                res.status(statusCode.badRequest).json({message:"Request not added"})
            }
        }catch(err){
            logger.error(err)
            console.log(err)
        }
    }
    public async getAttendence(req:Request,res:Response){
        try{
            const getAttendence = await AttendenceData.find()
            if(getAttendence){
                res.status(statusCode.success).json({message:"Data Fetched SuccessFully",data:getAttendence})
            }else{
                res.status(statusCode.badRequest).json({message:"Data not Fetched"})
            }
        }catch(err){
            logger.error(err)
            console.log(err)
        }
    }
    public async updateAttendence(req:Request,res:Response){
        try{
            const updateAttendenceData = await AttendenceData.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
            if(updateAttendenceData){
                res.status(statusCode.success).json({message:"Data is Updated SuccessFully",data:updateAttendenceData})
            }else{
                res.status(statusCode.badRequest).json({message:"Data is not Fetched"})
            }

        }catch(err){
            logger.error(err)
            console.log(err)
        }
    }
    public async getUnqieData(req:Request,res:Response){
        try{
            const getUniqueAttendence = await AttendenceData.findById(req.params.id)
            if(getUniqueAttendence){
                res.status(statusCode.success).json({message:"Data is Fetched",data:getUniqueAttendence})
            }else{
                res.status(statusCode.badRequest).json({message:"Data is not Fetched"})
            }

        }catch(err){
            logger.error(err)
            console.log(err)
        }
    }
    public async deleteAttendence(req:Request,res:Response){
        try{
            const deleteAttendence = await AttendenceData.findByIdAndDelete(req.params.id)
            if(deleteAttendence){
                res.status(statusCode.success).json({message:"Data is Deleted SuccessFully"})
            }else{
                res.status(statusCode.badRequest).json({message:"Data is nOt Deleted"})
            }

        }catch(err){
            logger.error(err)
            console.log(err)

        }
    }
}