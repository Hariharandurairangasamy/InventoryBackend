import {Router} from "express"
import UnitsController from "./UnitsController"

class UnitsRoutes{
    public route:Router
    public UnitsController= new UnitsController()
    constructor(){
            this.route = Router() 
            this.init()
    }
    init():void{
        this.route.post("/createUnits",this.UnitsController.postUnits)
        this.route.get("/getunitsdata",this.UnitsController.getUnitsData)
        this.route.get("/getUniqueData/:id",this.UnitsController.findUnitData)
        this.route.patch("/updateUnitsData/:id",this.UnitsController.updateUnitsData)
        this.route.delete("/deleteUnitsData/:id",this.UnitsController.deleteUnitsData)

    }
}

const UnitsRoutesData = new UnitsRoutes()
UnitsRoutesData.init()
export default UnitsRoutesData.route