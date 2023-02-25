"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CustomerController_1 = require("./CustomerController");
const multerConfig_1 = require("../../Config/multerConfig");
class CustomerRoutes {
    constructor() {
        this.CustomerController = new CustomerController_1.default();
        this.router = (0, express_1.Router)();
        this.init();
    }
    init() {
        this.router.post("/createCustomer", multerConfig_1.default.single("cloudineryId"), this.CustomerController.postCustomerData);
        this.router.get("/getCustomerData", this.CustomerController.getCustomerData);
        this.router.patch("/updateCutomers/:id", multerConfig_1.default.single("cloudineryId"), this.CustomerController.updateCustomerData);
        this.router.get("/getUniqueCustomerData/:id", this.CustomerController.getUniqueCustomerData);
        this.router.delete("/deleteCustomer/:id", this.CustomerController.deleteCustomerData);
    }
}
const postProductsData = new CustomerRoutes();
postProductsData.init();
exports.default = postProductsData.router;
//# sourceMappingURL=CustomerRoute.js.map