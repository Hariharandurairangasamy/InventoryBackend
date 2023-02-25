"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const CategoriesController_1 = require("./CategoriesController");
class CategoriesAppRoutes {
    constructor() {
        this.CategoriesController = new CategoriesController_1.default();
        this.router = (0, express_1.Router)();
        this.init();
    }
    init() {
        this.router.post("/createcategories", this.CategoriesController.postCategoriesData);
        this.router.get("/getCategoriesData", this.CategoriesController.getCategoriesData);
        this.router.patch("/editCategories/:id", this.CategoriesController.editCateCoriesData);
        this.router.delete("/deleteCategories/:id", this.CategoriesController.deleteCategories);
    }
}
const getCategoriesRouter = new CategoriesAppRoutes();
getCategoriesRouter.init();
exports.default = getCategoriesRouter.router;
//# sourceMappingURL=CategoriesRoutes.js.map