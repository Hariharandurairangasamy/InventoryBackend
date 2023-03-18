import { Router } from "express";
import Attendence from "./attendenceController";

class AttendenceRouter{
    router:Router
    Attendence:Attendence = new Attendence()

    constructor(){
        this.router = Router()
        this.init()
    }
    init():void{
        this.router.post("/postAttendence",this.Attendence.addAttendence)
        this.router.get("/getAttendenceData",this.Attendence.getAttendence)
        this.router.patch("/updateAttendence/:id",this.Attendence.updateAttendence)
        this.router.get("/getUniqueAttendence/:id",this.Attendence.getUnqieData)
        this.router.delete("/deleteAttendence/:id",this.Attendence.deleteAttendence)
    }
}

const getAttendence = new AttendenceRouter()
getAttendence.init()
export default getAttendence.router
