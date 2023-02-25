"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const postCustomerSchema = new mongoose_1.default.Schema({
    customerName: { type: String, require: true },
    phone: { type: Number, require: true },
    email: { type: String, require: true },
    address: { type: String, require: true },
    customerPicture: { type: String, require: true },
    cloudineryId: { type: String, require: true }
}, { timestamps: true });
exports.default = mongoose_1.default.model("postCustomerSchema", postCustomerSchema);
//# sourceMappingURL=schema.js.map