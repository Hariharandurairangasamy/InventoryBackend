"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const UnitsSchema = new mongoose_1.default.Schema({
    unitsName: { type: String, require: true }
}, { timestamps: true });
exports.default = mongoose_1.default.model("UnitsSchema", UnitsSchema);
//# sourceMappingURL=schema.js.map