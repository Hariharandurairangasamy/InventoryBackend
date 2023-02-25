"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProductsConttroller_1 = require("./ProductsConttroller");
class ProductAppRoutes {
    constructor() {
        this.ProductControllers = new ProductsConttroller_1.default();
        this.router = (0, express_1.Router)();
        this.init();
    }
    init() {
        this.router.post('/createProducts', this.ProductControllers.PostProducts);
        this.router.get("/getProductData", this.ProductControllers.getProductsData);
        this.router.patch("/updateData/:id", this.ProductControllers.editProductData);
        this.router.get("/getUniqueProductsData/:id", this.ProductControllers.getUniqueProductsData);
        this.router.delete("/productsDeleted/:id", this.ProductControllers.deleteProductData);
    }
}
const postRouter = new ProductAppRoutes();
postRouter.init();
exports.default = postRouter.router;
//# sourceMappingURL=ProductRoutes.js.map