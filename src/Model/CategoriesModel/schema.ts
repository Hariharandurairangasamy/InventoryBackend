import mongoose from "mongoose"

const categoriesSchema = new mongoose.Schema({
    categoriesName:{type:String,require:true}
},{timestamps:true})
export default mongoose.model("categoriesSchema",categoriesSchema)