import mongoose from "mongoose";

const Schema = mongoose.Schema
const supplierSchema = new Schema({
    supplierName:{type:String,require:true},
    phone:{type:Number,require:true},
    email:{type:String,require:true},
    address:{type:String,require:true}
},{timestamps:true})

export default mongoose.model("suppliers",supplierSchema)