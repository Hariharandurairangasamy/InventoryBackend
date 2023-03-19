import mongoose from "mongoose";

const saleProduct = new mongoose.Schema({
    data:{type:String,require:true},
    invoiceNumber:{type:String,require:true},
    paidStatus:{type:String,require:true},
    isInvoiceProduct:[{category:{type:String},
        productName:{type:String},
        price:{type:String},
        qty:{type:String},
        gst:{type:String},
        total:{type:String}}]
    
},{timestamps:true})

export default mongoose.model("saleProduct",saleProduct)