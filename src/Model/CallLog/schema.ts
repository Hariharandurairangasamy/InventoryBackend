import mongoose, { mongo } from "mongoose"

const callLogsSchema = new mongoose.Schema({
    CallSid:{type:String},
    CallFrom:{type:String},
    CallTo:{type:String},
    CallStatus:{type:String},
    Direction:{type:String},
    Created:{type:String},
    DialCallDuration:{type:String},
    StartTime:{type:String},
    EndTime:{type:String},
    CallType:{type:String},
    DialWhomNumber:{type:String},
    flow_id:{type:String},
    tenant_id:{type:String},
    From:{type:String},
    To:{type:String},
    CurrentTime:{type:String},
    brand:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"productsschemas"
    },
    store:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"saleproducts"
    },
    ForwardedFrom:{
        type:String
    },
    RecordingUrl:{type:String},
    DialCallStatus:{
        type:String
    },
    ProcessStatus:{
        type:String
    },
    RecordingAvailableBy:{type:String},
    OutgoingPhoneNumber:{type:String},
    Legs:{type:Array},
    Insights:{type:Array},

},{timestamps:true})

export default mongoose.model("callLogsSchema",callLogsSchema)