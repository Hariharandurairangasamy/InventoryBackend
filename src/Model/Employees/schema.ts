import mongoose from "mongoose";

const employeesSchema = new mongoose.Schema({
    name:{type:String,require:true},
    phone:{type:Number,require:true},
    email:{type:String,require:true},
    address1:{type:String,require:true},
    address2:{type:String,require:true},
    district:{type:String,require:true},
    customerPicture:{type:String,require:true},
    cloudineryId:{type:String,require:true},
    blopodGroup:{type:String,require:true},
    designation:{type:String,require:true},
    date:{type:String,require:true}
},{timestamps:true})

export default mongoose.model("employeesSchema",employeesSchema)