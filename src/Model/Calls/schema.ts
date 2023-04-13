import mongoose from "mongoose";

const callsSchema = new mongoose.Schema(
    {
        uuid:{type:String},
        dispnumber:{
            type:String
        },
        business_call_type:{
            type:String
        },
        call_type:{
            type:String
        },
        call_status:{
            type:String
        },
        from:{
            type:String
        },
        mapping_number:{
            type:String
        },
        key_pressed:{
            type:String
        },
        agent_number:{
            type:String
        },
        start_time:{
            type:String
        },
        end_time:{
            type:String
        },
        call_duration:{
            type:String
        },
        resource_url:{
            type:String
        },
        timezone_offset:{
            type:String
        },
        store:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"saleproducts"
        },
        brand:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"productsschemas"
        }
        
    },{timestamps:true}
)

export default mongoose.model("callsSchema",callsSchema)