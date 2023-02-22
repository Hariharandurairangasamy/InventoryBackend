import mongoose from "mongoose";

const ProductsSchema = new mongoose.Schema({
    productName:{type:String,require:true},
    supplierName:{type:String,require:true},
    unitName:{type:String,require:true},
    categoryName:{type:String,require:true}
},{timestamps:true})

export default mongoose.model("ProductsSchema",ProductsSchema)