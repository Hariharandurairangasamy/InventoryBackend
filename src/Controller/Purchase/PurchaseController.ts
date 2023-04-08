import {Request,Response} from "express"
import { statusCode } from "../../utils/Constent";
import logger from "../../Middleware/logger"
import Purchase from "../../Model/Purchase/schema"

export default class PurchaseController{

    public async PostPurchaseController(req:Request,res:Response){
        try{
           const postPurchaseData = await Purchase.create(req.body)
           const savePurchaseData = await postPurchaseData.save()
           if (savePurchaseData){ 
            res.status(statusCode.success).json({message:"PurchaseData added sucessfully",data:savePurchaseData})
        }else{
            res.status(statusCode.badRequest).json({message:"Purchase data is not added"})
        }

        }catch(err){
            logger.error(err)
            res.status(statusCode.internalServerError)
            console.log(err)
        }
    }
    public async getPurchaseData(req:Request,res:Response){
        try{
            const getPurchaseData = await Purchase.find()
            if(getPurchaseData){
                res.status(statusCode.success).json({message:"Data fetched successFully",data:getPurchaseData})
            }else{
                res.status(statusCode.badRequest).json({message:"Data not fetched"})
            }

        }catch(err){
            logger.error(err)
            res.status(statusCode.internalServerError)
        }
    }
    public async updatePurchase(req:Request,res:Response){
        try{
            const updateData = await Purchase.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
            if(updateData) {
                res.status(statusCode.success).json({message:"Data updated SuceesFully",data:updateData})
            }else{
                res.status(statusCode.badRequest).json({message:"Data is not Updated"})
            }
            
        }catch(err){
            logger.error(err)
            console.log(err)
            res.status(statusCode.internalServerError)
        }
    }
    public async getUniquePurchaseData(req:Request,res:Response){
        try{
            const getUniqueData = await Purchase.findById(req.params.id)
            if(getUniqueData){
                res.status(statusCode.success).json({message:"Data Fetch SucessFully",data:getUniqueData})
            }else{
                res.status(statusCode.badRequest).json({message:"Data Fetched Fail"})
            }

        }catch(err){
            logger.error(err)
            console.log(err)
            res.status(statusCode.internalServerError)
        }
    }
    public async dletePurchase(req:Request,res:Response){
        try{
            const deletePurchaseData = await Purchase.findByIdAndDelete(req.params.id)
            if(deletePurchaseData){
                res.status(statusCode.success).json({message:"Data delete SuccessFully"})
            }else{
                res.status(statusCode.badRequest).json({message:"Data id not Deleted"})
            }

        }catch(err){
            logger.error(err)
            console.log(err)
            res.status(statusCode.internalServerError)
        }
    }
    public async updateManyDatas(req:Request,res:Response,next){
   try{
    
    const getPurchasedatas = await Purchase.find()
    const getReqBodyData  =  req.body
 const updateSalesProductsDatas =  getPurchasedatas?.map((getPurchaseData:any)=>{
        getReqBodyData?.forEach((values:any)=>{
           if(getPurchaseData?.customerName === values?.customerName){
            getPurchaseData?.isPurchaseProducts?.forEach(async(val:any,idx:number)=>{
                const getProducts:any = await values?.isPurchaseProducts[idx]
                const reduceQty = await val?.qty + getProducts?.QTY
               return await Purchase.updateMany({"isPurchaseProducts.category":getProducts.category,"isPurchaseProducts.productName":getProducts.productName},{$set:{"isPurchaseProducts.$.qty":reduceQty}},{})
              
            })
           }
        })
        
         
    })
    if(!updateSalesProductsDatas){
        return  res.status(statusCode.badRequest).json({message:"Datas are not uploading"})
     
    }
    return  res.status(statusCode.success).json({message:"Datas Updated SuccessFully"})
   
   }catch(err){
    logger.error(err)
    console.log(err)
    res.status(statusCode.internalServerError)
   }

    }

}