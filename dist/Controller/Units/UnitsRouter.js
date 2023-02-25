"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UnitsController_1 = require("./UnitsController");
class UnitsRoutes {
    constructor() {
        this.UnitsController = new UnitsController_1.default();
        this.route = (0, express_1.Router)();
        this.init();
    }
    init() {
        this.route.post("/createUnits", this.UnitsController.postUnits);
        this.route.get("/getunitsdata", this.UnitsController.getUnitsData);
        this.route.get("/getUniqueData/:id", this.UnitsController.findUnitData);
        this.route.patch("/updateUnitsData/:id", this.UnitsController.updateUnitsData);
        this.route.delete("/deleteUnitsData/:id", this.UnitsController.deleteUnitsData);
    }
}
const UnitsRoutesData = new UnitsRoutes();
UnitsRoutesData.init();
exports.default = UnitsRoutesData.route;
//# sourceMappingURL=UnitsRouter.js.map