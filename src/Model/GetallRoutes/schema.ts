import mongoose from "mongoose";

const getAllRoutes = new mongoose.Schema({
    getPurchase:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"puchaseschemas"
    },
    getSales:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"saleProduct"
    },
    getCustomersData:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"postCustomerSchema"
    }
},{timestamps:true})

export default mongoose.model("getAllRoutes",getAllRoutes)