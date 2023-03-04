import {Request,Response} from "express"
import { statusCode } from "../../utils/Constent";
import logger from "../../Middleware/logger"
import CategoriesSchema from "../../Model/CategoriesModel/schema"

export default class CategoriesController{
    public async postCategoriesData(req:Request,res:Response){
        try{
            const getCategoriesData = await CategoriesSchema.findOne({categoriesName:req.body.categoriesName})
            if(getCategoriesData){
                res.status(statusCode.badRequest).json({message:"CategoriesName are Already exist"})
            }else{
        const postCategoriesData = await CategoriesSchema.create(req.body)
        const saveCategoriesData = await postCategoriesData.save()
        if(saveCategoriesData){
            res.status(statusCode.success).json({message:"Date created SuccessFully",data:saveCategoriesData})
        }else{
            res.status(statusCode.badRequest).json({message:"Data not Created"})
        }
    }
    }catch(err){
        logger.error(err)

    }
}
public async getCategoriesData(req:Request,res:Response){
    try{
        const getCategoriesdata = await CategoriesSchema.find()
        if(getCategoriesdata){
            res.status(statusCode.success).json({message:"Data fetched successFully",data:getCategoriesdata})
        }else{
            res.status(statusCode.badRequest).json({message:"Data Not Fetched"})
        }
    }catch(err){
        logger.error(err)
    }
}
public async getUniqeCategoriesData(req:Request,res:Response){
    try{
        const getCategoriesData = await CategoriesSchema.findById(req.params.id)
        if(getCategoriesData){
            res.status(statusCode.success).json({message:"Data Fetched SuccessFully",getCategoriesData})
        }else{
            res.status(statusCode.badRequest).json({mesaage:"Datas are not fecthed"})
        }
    }catch(err){
        logger.error(err)
    }
}
public async editCateCoriesData(req:Request,res:Response){
    try{
        const editCategories = await CategoriesSchema.findByIdAndUpdate(req.params.id,{$set:req.body})
        if(editCategories){
            res.status(statusCode.success).json({message:"Data updated Successfully",data:editCategories})
        }else{
            res.status(statusCode.badRequest).json({message:"Data not Updated"})
        }
    }catch(err){
        logger.error(err)
    }
}
public async deleteCategories(req:Request,res:Response){
    try{
        const deletCategories = await CategoriesSchema.findByIdAndDelete(req.params.id)
        if(deletCategories){
res.status(statusCode.success).json({message:"Data Deleted SuccessFully",data:deletCategories})
        }else{
            res.status(statusCode.badRequest).json({message:"Data not Deleted"})
        }
    }catch(err){
        logger.error(err)
    }
}
}