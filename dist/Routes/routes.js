"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const SupplierRoute_1 = require("../Controller/Supplier/SupplierRoute");
const UnitsRouter_1 = require("../Controller/Units/UnitsRouter");
const CategoriesRoutes_1 = require("../Controller/Categories/CategoriesRoutes");
const ProductRoutes_1 = require("../Controller/Products/ProductRoutes");
const CustomerRoute_1 = require("../Controller/Customers/CustomerRoute");
class AppRoutes {
    SupplierAppRoute(app) {
        app.use("/api/inventory", SupplierRoute_1.default);
    }
    UnitsRouterData(app) {
        app.use("/api/inventory", UnitsRouter_1.default);
    }
    CategoriesData(app) {
        app.use("/api/inventory", CategoriesRoutes_1.default);
    }
    ProductRoutes(app) {
        app.use("/api/inventory", ProductRoutes_1.default);
    }
    CustomerRoutes(app) {
        app.use("/api/inventory", CustomerRoute_1.default);
    }
}
exports.AppRoutes = AppRoutes;
//# sourceMappingURL=routes.js.map