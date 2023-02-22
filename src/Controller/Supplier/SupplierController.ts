import { Request,Response } from "express";
import Suppliers from "../../Model/SupplierModel/schema";
import { statusCode } from "../../utils/Constent";
import logger from "../../Middleware/logger";

export default class SupplierController{
    public async supplierPost(req:Request,res:Response){
        try{
            const getSupplierName = await Suppliers.findOne({supplierName:req.body.supplierName})
            if(getSupplierName){
                    res.status(statusCode.badRequest).json({message:"SupplierName Already Exisit"})
            } else{
            const postSupplierData = await Suppliers.create(req.body)
            const savedatasSuppliers = await postSupplierData.save()
            if(savedatasSuppliers){
                res.status(statusCode.success).json({message:"Data Added SuccessFully",data:postSupplierData})
            }else{
               res.status(statusCode.badRequest).json({message:"Data not Added"})
            }
        }
        

        }catch(err){
              logger.error(err)
        }
    }
    public async getSupplierRoute(req:Request,res:Response){
        try{
            const getServiceData =await Suppliers.find()
            if(getServiceData){
                res.status(statusCode.success).json({message:"Data Fetched Successfully",data:getServiceData})
            }else{
                res.status(statusCode.badRequest).json({message:"Data Not Fetched"})
            }
        }catch(err){
            logger.error(err)
        }

    }
    public async getUniqueSupplierData(req:Request,res:Response){
        try{
            const getUniqueData = await Suppliers.findById(req.params.id)
            if(getUniqueData){
                res.status(statusCode.success).json({message:"Data Feched SuccessFully",data:getUniqueData})
            }else{
                res.status(statusCode.badRequest).json({message:"Data Not Fetched"})
            }
        }catch(err){
            logger.error(err)
        }
    }
    public async deleteSuppliersData(req:Request,res:Response){
        try{
            const deletSupplierData =await Suppliers.deleteOne({_id:req.params.id})
            if(deletSupplierData){
                res.status(statusCode.success).json({
                    message:"Data Deleted SuccessFully",data:deletSupplierData
                })
            }else{
                res.status(statusCode.badRequest).json({message:"Data not deleted"})
            }
            
        }catch(err){
            logger.error(err)
        }
    }
    public async editSuppliersData(req:Request,res:Response){
        try{
            const getIdFromParamsandDelete = await Suppliers.findByIdAndUpdate(req.params.id,{$set:req.body}) 
            if(getIdFromParamsandDelete){
                res.status(statusCode.success).json({message:"Supplier Data Updated Successfully"})
            }else{
                res.status(statusCode.badRequest).json({message:"Data not "})
            }
        }catch(err){
            logger.error(err)
        }
    }
   
}