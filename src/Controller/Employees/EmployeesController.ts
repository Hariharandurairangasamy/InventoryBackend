import { Request,Response } from "express";
import { statusCode } from "../../utils/Constent";
import logger from "../../Middleware/logger"
import {get} from "lodash"
import { cloudinary } from "../../Config/CloudineryConfig";
import Employees from "../../Model/Employees/schema";


export default class EmployeesController{
    public async addEmployees(req:Request,res:Response){
        try{
            const getUploadImagePath = get(req.file,"path","")?.replace(/\\/g, '/')
            const uploadCloudinery = await cloudinary.uploader.upload(getUploadImagePath)
          const getEmployeesname = await Employees.findOne({name:req.body.name})
          if(getEmployeesname){
            res.status(statusCode.badRequest).json({message:"EmployeeName is ALready exist"})
          }else{
            const postEmployeesData = await Employees.create({
                name:req.body.name,
                phone:req.body.phone,
                email:req.body.email,
                address1:req.body.address1,
                address2:req.body.address2,
                district:req.body.district,
                customerPicture:uploadCloudinery?.secure_url,
                cloudineryId:uploadCloudinery?.public_id,
                bloodGroup:req.body.blopodGroup,
                designation:req.body.designation,
                date:req.body.date
            })
            const savePostedData = await postEmployeesData.save()
            if(savePostedData){
                res.status(statusCode.success).json({message:"Data added SuccessFully",data:savePostedData})
            }else{
                res.status(statusCode.badRequest).json({message:"Data not Added"})
            }
          }
        }catch(err){
            logger.error(statusCode.internalServerError)
            console.log(err)
        }
    }
    public async getEmployeesData(req:Request,res:Response){
        try{
            const getEmployeesData = await Employees.find()
            if(getEmployeesData){
                res.status(statusCode.success).json({message:"Data Fetched SuccessFully",data:getEmployeesData})
            }else{
                res.status(statusCode.badRequest).json({message:"Data not fetched"})
            }

        }catch(err){
            logger.error(err)
            console.log(err)
        }
    }
    public async getUniqueEmployees(req:Request,res:Response){
        try{
            const getUniqueEmployees = await Employees.findById(req.params.id)
            if(getUniqueEmployees){
                res.status(statusCode.success).json({message:"Data Fetched SuccessFully",data:getUniqueEmployees})
            }else{
                res.status(statusCode.badRequest).json({message:"Data not Fetched SuccessFully"})
            }
        }catch(err){
            logger.error(err)
            console.log(err)
        }
    }
    public async updateEmployeesData(req:Request,res:Response){
        try{
            const findCloudineryData = await Employees.findById(req.params.id)
            // Delete image from cloudinery
            await cloudinary.uploader.destroy(findCloudineryData?.cloudineryId)
            // Update images in Cloudinery
            const getUploadImagePath = get(req.file,"path","")?.replace(/\\/g, '/')
            const result = await cloudinary.uploader.upload(getUploadImagePath);
            const data = {
                name:req.body.name,
                phone:req.body.phone,
                email:req.body.email,
                address1:req.body.address1,
                address2:req.body.address2,
                district:req.body.district,
                customerPicture:result?.secure_url,
                cloudineryId:result?.public_id,
                bloodGroup:req.body.blopodGroup,
                designation:req.body.designation,
                date:req.body.date

            }
            const updateCustomersData = await Employees.findByIdAndUpdate(req.params.id,data,{new:true})
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
    public async deleteEmployeesData(req:Request,res:Response){
        try{
            const findCloudineryIdAndDelete = await Employees.findById(req.params.id)
            await cloudinary.uploader.destroy(findCloudineryIdAndDelete?.cloudineryId)
            const deletEmployees = await Employees.findByIdAndDelete(findCloudineryIdAndDelete)
            if(deletEmployees){
                res.status(statusCode.success).json({message:"Data is Deleted SuccessFully",data:deletEmployees})
            }else{
                res.status(statusCode.badRequest).json({message:"Data is Not deleted"})
            }

        }catch(err){
            logger.error(err)
            res.status(statusCode.internalServerError).json({message:"Internal server error"})
        }
    }
}