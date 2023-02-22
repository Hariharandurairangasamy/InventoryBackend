import mongoose from "mongoose"

const postCustomerSchema = new mongoose.Schema({
    customerName:{type:String,require:true},
    phone:{type:Number,require:true},
    email:{type:String,require:true},
    address:{type:String,require:true},
    customerPicture:{type:String,require:true},
    cloudineryId:{type:String,require:true}
},{timestamps:true})
export default mongoose.model("postCustomerSchema",postCustomerSchema)