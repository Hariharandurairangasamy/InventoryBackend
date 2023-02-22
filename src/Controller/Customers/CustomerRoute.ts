import { Router } from "express";
import CustomerController from "./CustomerController";
import upload from "../../Config/multerConfig"

class CustomerRoutes{
    router:Router
    public CustomerController:CustomerController= new CustomerController()
    constructor(){
        this.router = Router()
        this.init()
    }
    init():void{
        this.router.post("/createCustomer",upload.single("cloudineryId"),this.CustomerController.postCustomerData)
        this.router.get("/getCustomerData",this.CustomerController.getCustomerData)
        this.router.patch("/updateCutomers/:id",upload.single("cloudineryId"),this.CustomerController.updateCustomerData)
        this.router.get("/getUniqueCustomerData/:id",this.CustomerController.getUniqueCustomerData)
        this.router.delete("/deleteCustomer/:id",this.CustomerController.deleteCustomerData)
    }
}
const postProductsData = new CustomerRoutes()
postProductsData.init()
export default postProductsData.router