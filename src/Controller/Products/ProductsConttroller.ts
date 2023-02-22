import {Request,Response} from "express"
import { statusCode } from "../../utils/Constent"
import logger from "../../Middleware/logger"
import ProductSchema from "../../Model/ProductsModel/schema"

export default class ProductControllers{
    public async PostProducts(req:Request,res:Response){
        try{
            const findProductsName = await ProductSchema.findOne({productName:req.body.productName})
            if(findProductsName){
                res.status(statusCode.badRequest).json({message:"ProductName is Already Exist"})
            }else{
                const postProductData = await ProductSchema.create(req.body)
                 const saveProductData = await postProductData.save()
                 if(saveProductData){
                    res.status(statusCode.success).json({message:"Data Added SuccessFully",data:saveProductData})
                 }else{
                    res.status(statusCode.badRequest).json({message:"Data Not Created"})
                 }
            }
          

        }catch(err){
            logger.error(err)
        }

    }
    public async getProductsData(req:Request,res:Response){
        try{
            const handleGetData =await ProductSchema.find()
            if(handleGetData){
                res.status(statusCode.success).json({message:"Data Fetched SuccessFully",data:handleGetData})
            }else{
                res.status(statusCode.badRequest).json({message:"Data not feched"})
            }
        }catch(err){
            logger.error(err)
        }
    }
    public async editProductData(req:Request,res:Response){
        try{
            const handleEditProductsData = await ProductSchema.findByIdAndUpdate(req.params.id,{$set:req.body})
            if(handleEditProductsData){
                res.status(statusCode.success).json({message:"Data Updated SuccessFully",data:handleEditProductsData})
            }else{
                res.status(statusCode.badRequest).json({message:"Data Not Updated"})
            }
        }catch(err){
            logger.error(err)
        }
    }
    public async getUniqueProductsData(req:Request,res:Response){
        try{
            const getUniqueData =await ProductSchema.findById(req.params.id)
            if(getUniqueData){
                res.status(statusCode.success).json({message:"Data Fetched SuccessFully",data:getUniqueData})

            }else{
                res.status(statusCode.badRequest).json({message:"Data Not Fetched"})
            }
        }catch(err){
            logger.error(err)
        }
    }
    public async deleteProductData(req:Request,res:Response){
        try{
            const deletData =await ProductSchema.findByIdAndDelete(req.params.id)
            if(deletData){
                res.status(statusCode.success).json({message:"Products Data Deleted SuccessFully"})
            }else{
                res.status(statusCode.badRequest).json({message:"ProductData not Delleted"})
            }
        }catch(err){
            logger.error(err)
        }
    }
}