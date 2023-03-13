import mongoose from "mongoose";

const puchaseSchema =new mongoose.Schema({
    date:{type:String,require:true},
    invoiceNumber:{type:String,require:true},
    paidStatus:{type:String,require:true},
    customerName:{type:String,require:true},
    isPurchaseProducts:[{category:{type:String},productName:{type:String},price:{type:Number},qty:{type:Number},gst:{type:Number},total:{type:Number}}]
},{timestamps:true})

export default mongoose.model("puchaseSchema",puchaseSchema)