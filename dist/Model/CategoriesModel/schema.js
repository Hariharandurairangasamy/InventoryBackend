"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const categoriesSchema = new mongoose_1.default.Schema({
    categoriesName: { type: String, require: true }
}, { timestamps: true });
exports.default = mongoose_1.default.model("categoriesSchema", categoriesSchema);
//# sourceMappingURL=schema.js.map