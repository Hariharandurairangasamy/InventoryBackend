import { Request,Response } from "express";
import { statusCode } from "../../utils/Constent";
import logger from "../../Middleware/logger"
import Purchase from "../../Model/Purchase/schema"
import productData from "../../Model/productSalse/schema"

export default class SalseProductController{
    public async postSalseData(req:Request,res:Response){
        try{
        // QTY Updated for Purchase Collection
            const getPurchaseData = await Purchase.find()
            const productDatas = req.body
            getPurchaseData?.map( (curr:any)=>{
            productDatas?.isInvoiceProduct?.filter((values:any)=>{
                   curr?.isPurchaseProducts?.forEach(async(getValues:any)=>{
                    if(getValues?.productName === values.productName){
                        const reduceQty = await getValues?.qty - values?.qty
                        const updateSaleProductsData = await Purchase.updateMany({"isPurchaseProducts.category":values.category,"isPurchaseProducts.productName":values.productName},{$set:{"isPurchaseProducts.$.qty":reduceQty}},{})
                        if(updateSaleProductsData){
                            res.status(statusCode.success).json({message:"Qty Updated SuccessFully",data:updateSaleProductsData})
                        }else{
                            res.status(statusCode.badRequest).json({message:"Qty is not Updated "})
                        }
                    }
                   })
            })
                   
          })
            const postProdcutsData = await productData.create(req.body)
            const saveProductData = await postProdcutsData.save()
            if(saveProductData){
                res.status(statusCode.success).json({message:"Data Added SuccessFully",data:saveProductData})
            }else{
                res.status(statusCode.badRequest).json({message:"Data is Not Added"})
            }

        }catch(err){
            logger.error(err)
            console.log(err)
        }
    }
    public async getSalseProductData(req:Request,res:Response){
        try{
            const getPurcahseProductsData = await productData.find()
            if(getPurcahseProductsData){
                res.status(statusCode.success).json({message:"Data fetched SuccessFully",data:getPurcahseProductsData})
            }else{
                res.status(statusCode.badRequest).json({message:"Data not Fetched"})
            }

        }catch(err){
            logger.error(err)
            console.log(err)
        }
    }
    public async getUniqeData(req:Request,res:Response){
        try{
            const getUniqueProductsData = await productData.findById(req.params.id)
            if(getUniqueProductsData){
                res.status(statusCode.success).json({message:"Data Fetched SuccessFully",data:getUniqueProductsData})
            }else{
                res.status(statusCode.badRequest).json({message:"Data not fetched"})
            }
        }catch(err){
            logger.error(err)
            console.log(err)
        }
    }
    public async deletedSalseProductsData(req:Request,res:Response){
        try{
            const deleteSalseProductsData = await productData.findByIdAndDelete(req.params.id)
            if(deleteSalseProductsData){
                res.status(statusCode.success).json({massage:"Data Deleted Successfully"})
            }else{
                res.status(statusCode.badRequest).json({message:"Data not deleted"})
            }
        }catch(err){
            logger.error(err)
            console.log(err)
        }
    }
}