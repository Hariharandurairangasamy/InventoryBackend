import { Router } from "express";
import { GetAllRoutesData } from "./AllRoutesController";

class AppGetAllRoutes{
    router:Router
    private GetAllRoutesData:GetAllRoutesData = new GetAllRoutesData()
    constructor(){
        this.router = Router()
        this.init()

    }
    init():void{
        this.router.get("/getAllDatas",this.GetAllRoutesData.getRoutesData)
        this.router.get("/getCallData",this.GetAllRoutesData.getCalls)
    }
}
const getallDatasRoute = new AppGetAllRoutes()

export default getallDatasRoute.router