import { Request,Response } from "express";
import UnitsSchema from "../../Model/Units/schema";
import { statusCode } from "../../utils/Constent";
import logger from "../../Middleware/logger";
import { error } from "console";

export default class UnitsController{
    public async postUnits(req:Request,res:Response){
        try{
           
            const findUnitsName = await UnitsSchema.findOne({unitsName:req.body.unitsName})
            if(findUnitsName){
                res.status(statusCode.badRequest).json({message:"Units Name Are Already Exist"})
            }else{
                const postUnitsData = await UnitsSchema.create(req.body)
                const createUnitsData = await postUnitsData.save()
                if(createUnitsData){
                        res.status(statusCode.success).json({message:"Units Created Successfully",data:createUnitsData})
                }else{
                    res.status(statusCode.badRequest).json({message:"Units are not created"})
                }
            }
           
           
        }catch(err){
            logger.error(err)
        }
    }
    public async getUnitsData(req:Request,res:Response){
        try{
            const getAllUnitsData = await UnitsSchema.find()
            if(getAllUnitsData){
                res.status(statusCode.success).json({message:"Datas Fetched Successfully",data:getAllUnitsData})
            }else{
               
                res.status(statusCode.badRequest).json({message:"Data not fetched"})
            }
        }catch(err){
            logger.error(err)
        }
    }
    public async findUnitData(req:Request,res:Response){
        try{
            const getUniqueData = await UnitsSchema.findById(req.params.id)
            if(getUniqueData){
                res.status(statusCode.success).json({message:"Data Fetched SuccesFully",data:getUniqueData})
            }else{
                res.status(statusCode.badRequest).json({message:"Data not fetched"})
            }
        }catch(err){
            logger.error(err)
        }
    }
    public async updateUnitsData(req:Request,res:Response){
        try{
            const eidtUnitsData = await UnitsSchema.findByIdAndUpdate(req.params.id,{$set:req.body})
            if(eidtUnitsData){
                res.status(statusCode.success).json({message:"Data Updated Successfully",data:eidtUnitsData})
            }else{
                res.status(statusCode.badRequest).json({message:"Data not Updated"})
            }
        }catch(err){
            logger.error(error)
        }
    }
    public async deleteUnitsData(req:Request,res:Response){
        try{
            const deleteUnitsData = await UnitsSchema.findByIdAndDelete(req.params.id)
            if(deleteUnitsData){
                res.status(statusCode.success).json({message:"Data deleted SuccesFully"})
            }else{
                res.status(statusCode.badRequest).json({message:"Data not deleted"})
            }

        }catch(err){
            logger.error(err)
        }
    }
}