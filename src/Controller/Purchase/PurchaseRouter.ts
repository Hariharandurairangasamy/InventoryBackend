import { Router } from "express";
import PurchaseController from "./PurchaseController";

class PurchaseRouter{
    router:Router
    public PurchaseController:PurchaseController = new PurchaseController()
    constructor(){
        this.router = Router()
       this.init()
    }
    init():void{
        this.router.post("/postPurchaseData",this.PurchaseController.PostPurchaseController)
        this.router.get("/getPurchaseData",this.PurchaseController.getPurchaseData)
        this.router.patch("/updatePurchaseData/:id",this.PurchaseController.updatePurchase)
        this.router.get("/getUniquePurchase/:id",this.PurchaseController.getUniquePurchaseData)
        this.router.delete("/deletePurchaseDtaa/:id",this.PurchaseController.dletePurchase)
    }
}
const postPurchaseData = new PurchaseRouter()
postPurchaseData.init()
export default postPurchaseData.router
