"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schema_1 = require("../../Model/Units/schema");
const Constent_1 = require("../../utils/Constent");
const logger_1 = require("../../Middleware/logger");
const console_1 = require("console");
class UnitsController {
    async postUnits(req, res) {
        try {
            const findUnitsName = await schema_1.default.findOne({ unitsName: req.body.unitsName });
            if (findUnitsName) {
                res.status(Constent_1.statusCode.badRequest).json({ message: "Units Name Are Already Exist" });
            }
            else {
                const postUnitsData = await schema_1.default.create(req.body);
                const createUnitsData = await postUnitsData.save();
                if (createUnitsData) {
                    res.status(Constent_1.statusCode.success).json({ message: "Units Created Successfully", data: createUnitsData });
                }
                else {
                    res.status(Constent_1.statusCode.badRequest).json({ message: "Units are not created" });
                }
            }
        }
        catch (err) {
            logger_1.default.error(err);
        }
    }
    async getUnitsData(req, res) {
        try {
            const getAllUnitsData = await schema_1.default.find();
            if (getAllUnitsData) {
                res.status(Constent_1.statusCode.success).json({ message: "Datas Fetched Successfully", data: getAllUnitsData });
            }
            else {
                res.status(Constent_1.statusCode.badRequest).json({ message: "Data not fetched" });
            }
        }
        catch (err) {
            logger_1.default.error(err);
        }
    }
    async findUnitData(req, res) {
        try {
            const getUniqueData = await schema_1.default.findById(req.params.id);
            if (getUniqueData) {
                res.status(Constent_1.statusCode.success).json({ message: "Data Fetched SuccesFully", data: getUniqueData });
            }
            else {
                res.status(Constent_1.statusCode.badRequest).json({ message: "Data not fetched" });
            }
        }
        catch (err) {
            logger_1.default.error(err);
        }
    }
    async updateUnitsData(req, res) {
        try {
            const eidtUnitsData = await schema_1.default.findByIdAndUpdate(req.params.id, { $set: req.body });
            if (eidtUnitsData) {
                res.status(Constent_1.statusCode.success).json({ message: "Data Updated Successfully", data: eidtUnitsData });
            }
            else {
                res.status(Constent_1.statusCode.badRequest).json({ message: "Data not Updated" });
            }
        }
        catch (err) {
            logger_1.default.error(console_1.error);
        }
    }
    async deleteUnitsData(req, res) {
        try {
            const deleteUnitsData = await schema_1.default.findByIdAndDelete(req.params.id);
            if (deleteUnitsData) {
                res.status(Constent_1.statusCode.success).json({ message: "Data deleted SuccesFully" });
            }
            else {
                res.status(Constent_1.statusCode.badRequest).json({ message: "Data not deleted" });
            }
        }
        catch (err) {
            logger_1.default.error(err);
        }
    }
}
exports.default = UnitsController;
//# sourceMappingURL=UnitsController.js.map