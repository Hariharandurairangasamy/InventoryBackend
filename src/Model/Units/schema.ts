import mongoose from "mongoose"

const UnitsSchema = new mongoose.Schema({
    unitsName:{type:String,require:true}
},{timestamps:true})

export default mongoose.model("UnitsSchema",UnitsSchema)