import { Router } from "express";
import ProductControllers from "./ProductsConttroller";


class ProductAppRoutes{
    router:Router
    public ProductControllers:ProductControllers = new ProductControllers()

    constructor(){
        this.router = Router()
        this.init()
    }
    init():void{
        this.router.post('/createProducts',this.ProductControllers.PostProducts)
        this.router.get("/getProductData",this.ProductControllers.getProductsData)
        this.router.patch("/updateData/:id",this.ProductControllers.editProductData)
        this.router.get("/getUniqueProductsData/:id",this.ProductControllers.getUniqueProductsData)
        this.router.delete("/productsDeleted/:id",this.ProductControllers.deleteProductData)
    }

}
const postRouter = new ProductAppRoutes()
postRouter.init()
export default postRouter.router