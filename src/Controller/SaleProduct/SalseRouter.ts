import { Router } from "express";
import SalseProductController from "./SalseProductController";

class saleRouter{
    router:Router
    SalseProductController:SalseProductController = new SalseProductController()
    constructor(){
        this.router = Router()
        this.init()
    }
    init():void{
        this.router.post("/postProductData",this.SalseProductController.postSalseData)
        this.router.get("/getProductSalseData",this.SalseProductController.getSalseProductData)
        this.router.get("/getUniqueProductSales/:id",this.SalseProductController.getUniqeData)
        this.router.delete("/deleteSalseProduct/:id",this.SalseProductController.deletedSalseProductsData)
    }
}
const salseData = new saleRouter()
//salseData.init()
export default salseData.router