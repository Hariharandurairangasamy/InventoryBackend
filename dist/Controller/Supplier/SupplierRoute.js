"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const SupplierController_1 = require("./SupplierController");
class SuppliersRoute {
    constructor() {
        this.SupplierRouter = new SupplierController_1.default();
        this.router = (0, express_1.Router)();
        this.init();
    }
    init() {
        this.router.post("/create", this.SupplierRouter.supplierPost);
        this.router.get("/fetch", this.SupplierRouter.getSupplierRoute);
        this.router.get("/fetchUniqueData/:id", this.SupplierRouter.getUniqueSupplierData);
        this.router.delete("/deletSuppliers/:id", this.SupplierRouter.deleteSuppliersData);
        this.router.patch("/editsupplier/:id", this.SupplierRouter.editSuppliersData);
    }
}
const SuppliersData = new SuppliersRoute();
SuppliersData.init();
exports.default = SuppliersData.router;
//# sourceMappingURL=SupplierRoute.js.map