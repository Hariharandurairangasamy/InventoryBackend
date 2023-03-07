import * as express from 'express';
import * as bodyParser from "body-parser";
import * as cors from "cors"
import mongoose from "mongoose";
 import { AppRoutes } from "./Routes/routes";


const dotenv = require('dotenv');

class App{

    public app:express.Application;
    public ENV =dotenv.config().env?.parsed
     private routeAppRoutes:AppRoutes = new AppRoutes()
    constructor(){
        this.app = express();
        this.middleWareConfig();
        this.routeConfig();
         this.dbConnection();
      this.routeAppRoutes.SupplierAppRoute(this.app)
      this.routeAppRoutes.UnitsRouterData(this.app)
      this.routeAppRoutes.CategoriesData(this.app)
      this.routeAppRoutes.ProductRoutes(this.app)
      this.routeAppRoutes.CustomerRoutes(this.app)
      this.routeAppRoutes.UserRouters(this.app)
     
    }
 
private middleWareConfig():void{
   
    this.app.use(bodyParser.json());
    this.app.use(express.json())
    this.app.use(express.urlencoded({extended:true}))
    this.app.use(cors())
}
private routeConfig():void{
  this.app.listen(process.env.PORT,()=>{
    console.log("Server connected",`${process.env.PORT}`)
  })
}
private dbConnection(){   
      const configure:any={
        useNewUrlParser: true,
  useUnifiedTopology: true,
      }
        mongoose.set("strictQuery", false);
        mongoose.Promise = global.Promise
    mongoose.connect(`${process.env.MONGO_DB_CONNECTION}`,configure,()=>{
        console.log("database connected",`${process.env.MONGO_DB_CONNECTION}`)
    })
}

}

export default new App().app