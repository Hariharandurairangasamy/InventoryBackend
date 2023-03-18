import mongoose from "mongoose";

const attendence = new mongoose.Schema({
    name:{type:String,require:true},
    designation:{type:String,require:true},
    date:{type:String,require},
    leavetype:{type:String,require:true},
    description:{type:String,require:true}

},{timestamps:true})

export default mongoose.model("attendence",attendence)