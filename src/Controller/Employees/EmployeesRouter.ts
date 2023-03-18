import { Router } from "express";
import EmployeesController from "./EmployeesController";
import upload from "../../Config/multerConfig"

class EmployeesRouter{
    router:Router
    EmployeesController:EmployeesController = new EmployeesController()
    constructor(){
        this.router = Router()
        this.init()
    }
    init():void{
        this.router.post("/postEmployees",upload.single("cloudineryId"),this.EmployeesController.addEmployees)
        this.router.get("/getEmployeesData",this.EmployeesController.getEmployeesData)
        this.router.get("/getUniqueEmployees/:id",this.EmployeesController.getUniqueEmployees)
        this.router.patch("/updateEmployeesData/:id",upload.single("cloudineryId"),this.EmployeesController.updateEmployeesData)
        this.router.delete("/deleteEmployees/:id",this.EmployeesController.deleteEmployeesData)
    }
}
const employeesRouterInstence = new EmployeesRouter()
employeesRouterInstence.init()
export default employeesRouterInstence.router