"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Schema = mongoose_1.default.Schema;
const supplierSchema = new Schema({
    supplierName: { type: String, require: true },
    phone: { type: Number, require: true },
    email: { type: String, require: true },
    address: { type: String, require: true }
}, { timestamps: true });
exports.default = mongoose_1.default.model("suppliers", supplierSchema);
//# sourceMappingURL=schema.js.map