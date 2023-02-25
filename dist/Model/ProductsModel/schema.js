"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const ProductsSchema = new mongoose_1.default.Schema({
    productName: { type: String, require: true },
    supplierName: { type: String, require: true },
    unitName: { type: String, require: true },
    categoryName: { type: String, require: true }
}, { timestamps: true });
exports.default = mongoose_1.default.model("ProductsSchema", ProductsSchema);
//# sourceMappingURL=schema.js.map