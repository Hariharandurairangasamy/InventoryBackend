"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../Model/SupplierModel/schema");
const Constent_1 = require("../../utils/Constent");
const logger_1 = require("../../Middleware/logger");
class SupplierController {
    async supplierPost(req, res) {
        try {
            const getSupplierName = await schema_1.default.findOne({ supplierName: req.body.supplierName });
            if (getSupplierName) {
                res.status(Constent_1.statusCode.badRequest).json({ message: "SupplierName Already Exisit" });
            }
            else {
                const postSupplierData = await schema_1.default.create(req.body);
                const savedatasSuppliers = await postSupplierData.save();
                if (savedatasSuppliers) {
                    res.status(Constent_1.statusCode.success).json({ message: "Data Added SuccessFully", data: postSupplierData });
                }
                else {
                    res.status(Constent_1.statusCode.badRequest).json({ message: "Data not Added" });
                }
            }
        }
        catch (err) {
            logger_1.default.error(err);
        }
    }
    async getSupplierRoute(req, res) {
        try {
            const getServiceData = await schema_1.default.find();
            if (getServiceData) {
                res.status(Constent_1.statusCode.success).json({ message: "Data Fetched Successfully", data: getServiceData });
            }
            else {
                res.status(Constent_1.statusCode.badRequest).json({ message: "Data Not Fetched" });
            }
        }
        catch (err) {
            logger_1.default.error(err);
        }
    }
    async getUniqueSupplierData(req, res) {
        try {
            const getUniqueData = await schema_1.default.findById(req.params.id);
            if (getUniqueData) {
                res.status(Constent_1.statusCode.success).json({ message: "Data Feched SuccessFully", data: getUniqueData });
            }
            else {
                res.status(Constent_1.statusCode.badRequest).json({ message: "Data Not Fetched" });
            }
        }
        catch (err) {
            logger_1.default.error(err);
        }
    }
    async deleteSuppliersData(req, res) {
        try {
            const deletSupplierData = await schema_1.default.deleteOne({ _id: req.params.id });
            if (deletSupplierData) {
                res.status(Constent_1.statusCode.success).json({
                    message: "Data Deleted SuccessFully", data: deletSupplierData
                });
            }
            else {
                res.status(Constent_1.statusCode.badRequest).json({ message: "Data not deleted" });
            }
        }
        catch (err) {
            logger_1.default.error(err);
        }
    }
    async editSuppliersData(req, res) {
        try {
            const getIdFromParamsandDelete = await schema_1.default.findByIdAndUpdate(req.params.id, { $set: req.body });
            if (getIdFromParamsandDelete) {
                res.status(Constent_1.statusCode.success).json({ message: "Supplier Data Updated Successfully" });
            }
            else {
                res.status(Constent_1.statusCode.badRequest).json({ message: "Data not " });
            }
        }
        catch (err) {
            logger_1.default.error(err);
        }
    }
}
exports.default = SupplierController;
//# sourceMappingURL=SupplierController.js.map