import mongoose from "mongoose";

const usersSchema = new mongoose.Schema({
    userName:{type:String,require:true},
    password:{type:String,require:true},
    role:{type:String,require:true},
    isPermission:[{type:String}]
},{timestamps:true})
export default mongoose.model("usersSchema",usersSchema)