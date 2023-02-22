import { Request,Response } from "express";
import { statusCode } from "../../utils/Constent";
import logger from "../../Middleware/logger"
import {get} from "lodash"
import CustomerModel from "../../Model/CustomerModel/schema";
import { cloudinary } from "../../Config/CloudineryConfig";

export default class CustomerController{
    public async postCustomerData(req:Request,res:Response){
      
        try{
            const getUploadImagePath = get(req.file,"path","")?.replace(/\\/g, '/')
           const uploadCloudinery = await cloudinary.uploader.upload(getUploadImagePath)
           const findCustomerName = await CustomerModel.findOne({customerName:req.body.customerName})
           if(findCustomerName){
            res.status(statusCode.badRequest).json({message:"Customer name is Already Inserted"})
           }else{
            const postCustomerData = await CustomerModel.create({
                customerName:req.body.customerName,
                phone:req.body.phone,
                email:req.body.email,
                address:req.body.address,
                customerPicture:uploadCloudinery?.secure_url,
                cloudineryId:uploadCloudinery?.public_id
               })
               const postCustomersData = await postCustomerData.save()
               if(postCustomersData){
                res.status(statusCode.success).json({message:"Data is created SuccessFully",data:postCustomerData})
               }else{
                res.status(statusCode.badRequest).json({message:"Data is Not Created"})
               }
           }
           
           
        }catch(err){
            logger.error(err)
            res.status(statusCode.internalServerError)
        }
    }
    public async getCustomerData(req:Request,res:Response){
        try{
            const getAllCustomerData = await CustomerModel.find()
            if(getAllCustomerData){
                res.status(statusCode.success).json({message:"CustomerData successFully fetched",data:getAllCustomerData})
            }else{
                res.status(statusCode.badRequest).json({message:"Data Not fetched"})
            }
        }catch(err){
            logger.error(err)
            res.status(statusCode.internalServerError).json({message:"Internal server Error"})
        }
    }
    public async updateCustomerData(req:Request,res:Response){
        try{
            const findCloudineryData = await CustomerModel.findById(req.params.id)
            // Delete image from cloudinery
            await cloudinary.uploader.destroy(findCloudineryData?.cloudineryId)
            // Update images in Cloudinery
            const getUploadImagePath = get(req.file,"path","")?.replace(/\\/g, '/')
            const result = await cloudinary.uploader.upload(getUploadImagePath);
            const data = {
                customerName:req.body.customerName,
                phone:req.body.phone,
                email:req.body.email,
                address:req.body.address,
                customerPicture:result?.secure_url,
                cloudineryId:result?.public_id

            }
            const updateCustomersData = await CustomerModel.findByIdAndUpdate(req.params.id,data,{new:true})
            if(updateCustomersData){
                res.status(statusCode.success).json({message:"Data is Updated",data:updateCustomersData})
            }else{
                res.status(statusCode.badRequest).json({message:"Data is Not Updated"})
            }

        }catch(err){
            logger.error(err)
            res.status(statusCode.internalServerError).json({message:"Internal server Error"})

        }
    }
    public async getUniqueCustomerData(req:Request,res:Response){
        try{
            const getUniqueData = await CustomerModel.findById(req.params.id)
            if(getUniqueData){
                res.status(statusCode.success).json({message:"Data is Fetched",data:getUniqueData})
            }else{
                res.status(statusCode.badRequest).json({message:"Data is Not Fetched"})
            }
        }catch(err){
            logger.error(err)
            res.status(statusCode.internalServerError).json({message:"Internel Server Error"})
        }

    }
    public async deleteCustomerData(req:Request,res:Response){
        try{
            const findCloudineryIdAndDelete = await CustomerModel.findById(req.params.id)
            await cloudinary.uploader.destroy(findCloudineryIdAndDelete?.cloudineryId)
            const deletCategory = await CustomerModel.findByIdAndDelete(findCloudineryIdAndDelete)
            if(deletCategory){
                res.status(statusCode.success).json({message:"Data is Deleted SuccessFully",data:deletCategory})
            }else{
                res.status(statusCode.badRequest).json({message:"Data is Not deleted"})
            }

        }catch(err){
            logger.error(err)
            res.status(statusCode.internalServerError).json({message:"Internal server error"})
        }
    }
}