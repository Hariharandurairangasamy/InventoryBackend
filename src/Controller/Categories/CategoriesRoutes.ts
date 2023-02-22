import {Router} from "express"
import CategoriesController from "./CategoriesController"


class CategoriesAppRoutes{
    router:Router
    public CategoriesController = new CategoriesController()
    constructor(){
            this.router = Router()
            this.init()
    }
    init():void{
   this.router.post("/createcategories",this.CategoriesController.postCategoriesData)
   this.router.get("/getCategoriesData",this.CategoriesController.getCategoriesData)
   this.router.patch("/editCategories/:id",this.CategoriesController.editCateCoriesData)
   this.router.delete("/deleteCategories/:id",this.CategoriesController.deleteCategories)
    }
}
const getCategoriesRouter =  new CategoriesAppRoutes()
getCategoriesRouter.init()
export default getCategoriesRouter.router