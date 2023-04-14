import { Request,Response } from "express";
import { statusCode } from "../../utils/Constent";
import purchaseSchema from "../../Model/Purchase/schema"
import logger from "../../Middleware/logger";

export class GetAllRoutesData{
    public async getRoutesData(req:Request,res:Response){
        try{
            const getAllDatas = await purchaseSchema.aggregate([
                {
                  $lookup: {
                    from: "saleproducts",
                    localField: "_v",
                    foreignField: "_v",
                    as: "salseData",
                  },
                },
                {
                  $lookup: {
                    from: "postcustomerschemas",
                    localField: "_v",
                    foreignField: "_v",
                    as: "customersData",
                  },
                },
              ])
            if(getAllDatas){
                res.status(statusCode.success).json({message:"Data Fetched SuccessFully",data:getAllDatas})
            }else{
                res.status(statusCode.badRequest).json({message:"Datas not fetched"})
            }

        }catch(err){
            
        }
    }

}