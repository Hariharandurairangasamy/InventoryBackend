import {Application} from "express"
import SupplierRoute from "../Controller/Supplier/SupplierRoute"
import UnitsRouter from "../Controller/Units/UnitsRouter"
import CategoriesRoutes from "../Controller/Categories/CategoriesRoutes"
import ProductRoutes from "../Controller/Products/ProductRoutes"
import CustomerRoute from "../Controller/Customers/CustomerRoute"
import UsersRoute from "../Controller/Users/UsersRoute"
import PurchaseController from "../Controller/Purchase/PurchaseRouter"
import EmployeesController from "../Controller/Employees/EmployeesRouter"
import attendenceRouter from "../Controller/Attendence/attendenceRouter"
import SalseProduct from "../Controller/SaleProduct/SalseRouter"

export class AppRoutes{
    public SupplierAppRoute(app:Application){
        app.use("/api/inventory",SupplierRoute)
    }
    public UnitsRouterData(app:Application){
        app.use("/api/inventory",UnitsRouter)
    }
    public CategoriesData(app:Application){
        app.use("/api/inventory",CategoriesRoutes)
    }
    public ProductRoutes(app:Application){
        app.use("/api/inventory",ProductRoutes)
    }
    public CustomerRoutes(app:Application){
        app.use("/api/inventory",CustomerRoute)
    }
    public UserRouters(app:Application)
   {
    app.use("/api/inventory",UsersRoute)
   }
   public purchaseRouter(app:Application)
   {
    app.use("/api/inventory",PurchaseController)
   }
   public EmployeesRouter(app:Application)
   {
    app.use("/api/inventory",EmployeesController)
   }
   public AttendenceRouter(app:Application)
   {
    app.use("/api/inventory",attendenceRouter)
   }
   public SalesRouter(app:Application)
   {
    app.use("/api/inventory",SalseProduct)
   }
}