"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose_1 = require("mongoose");
const routes_1 = require("./Routes/routes");
const dotenv = require('dotenv');
class App {
    constructor() {
        this.ENV = dotenv.config().env?.parsed;
        this.routeAppRoutes = new routes_1.AppRoutes();
        this.app = express();
        this.middleWareConfig();
        this.routeConfig();
        this.dbConnection();
        this.routeAppRoutes.SupplierAppRoute(this.app);
        this.routeAppRoutes.UnitsRouterData(this.app);
        this.routeAppRoutes.CategoriesData(this.app);
        this.routeAppRoutes.ProductRoutes(this.app);
        this.routeAppRoutes.CustomerRoutes(this.app);
    }
    middleWareConfig() {
        this.app.use(bodyParser.json());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
        this.app.use(cors());
    }
    routeConfig() {
        this.app.listen(process.env.PORT, () => {
            console.log("Server connected", `${process.env.PORT}`);
        });
    }
    dbConnection() {
        const configure = {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        };
        mongoose_1.default.set("strictQuery", false);
        mongoose_1.default.Promise = global.Promise;
        mongoose_1.default.connect(`${process.env.MONGO_DB_CONNECTION}`, configure, () => {
            console.log("database connected", `${process.env.MONGO_DB_CONNECTION}`);
        });
    }
}
exports.default = new App().app;
//# sourceMappingURL=server.js.map