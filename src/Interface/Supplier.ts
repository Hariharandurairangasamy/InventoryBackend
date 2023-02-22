import {ObjectId} from "mongoose"

export interface ISuppliers{
    _id?:ObjectId 
    supplierName:string
    phone:number
    email:string
    address:string
}