import { Router } from "express";
import SupplierController from "./SupplierController";


class SuppliersRoute{ 
    router:Router
    public SupplierRouter = new SupplierController()
    constructor(){
        this.router = Router()
        this.init()
    }
    init():void{
        this.router.post("/create",this.SupplierRouter.supplierPost)
        this.router.get("/fetch",this.SupplierRouter.getSupplierRoute)
        this.router.get("/fetchUniqueData/:id",this.SupplierRouter.getUniqueSupplierData)
        this.router.delete("/deletSuppliers/:id",this.SupplierRouter.deleteSuppliersData)
        this.router.patch("/editsupplier/:id",this.SupplierRouter.editSuppliersData)
    }
}
const SuppliersData = new SuppliersRoute()
SuppliersData.init()
export default SuppliersData.router