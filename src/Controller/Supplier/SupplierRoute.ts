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
        this.router.post("/createSupplier",this.SupplierRouter.supplierPost)
        this.router.get("/fetchSupplier",this.SupplierRouter.getSupplierRoute)
        this.router.get("/fetchUniqueDataSupplier/:id",this.SupplierRouter.getUniqueSupplierData)
        this.router.delete("/deletSuppliers/:id",this.SupplierRouter.deleteSuppliersData)
        this.router.patch("/editSupplier/:id",this.SupplierRouter.editSuppliersData)
    }
}
const SuppliersData = new SuppliersRoute()
SuppliersData.init()
export default SuppliersData.router