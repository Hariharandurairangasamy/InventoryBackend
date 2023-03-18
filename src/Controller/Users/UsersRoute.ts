import { Router } from "express";
import UsersController from "./Users";
import AuthMiddleware from "../../Middleware/auth"

class UsersRouotes{
    router:Router
    public UsersController :UsersController = new UsersController()
    public authMiddleware :AuthMiddleware = new AuthMiddleware()
    constructor(){
        this.router = Router()
        this.init()
    }
    init():void{
        this.router.post("/postUserData",this.UsersController.PostUsers)
        this.router.get("/getUsers",this.UsersController.getUserData)
        this.router.delete("/deleteUsers/:id",this.UsersController.deleteuserData)
        this.router.post("/userLogin",this.UsersController.userLogin)
    }
}
const getUsersControllerRoutes = new UsersRouotes()
getUsersControllerRoutes.router
export default getUsersControllerRoutes.router