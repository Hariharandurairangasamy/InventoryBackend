"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constent_1 = require("../../utils/Constent");
const logger_1 = require("../../Middleware/logger");
const schema_1 = require("../../Model/CategoriesModel/schema");
class CategoriesController {
    async postCategoriesData(req, res) {
        try {
            const getCategoriesData = await schema_1.default.findOne({ categoriesName: req.body.categoriesName });
            if (getCategoriesData) {
                res.status(Constent_1.statusCode.badRequest).json({ message: "CategoriesName are Already exist" });
            }
            else {
                const postCategoriesData = await schema_1.default.create(req.body);
                const saveCategoriesData = await postCategoriesData.save();
                if (saveCategoriesData) {
                    res.status(Constent_1.statusCode.success).json({ message: "Date created SuccessFully", data: saveCategoriesData });
                }
                else {
                    res.status(Constent_1.statusCode.badRequest).json({ message: "Data not Created" });
                }
            }
        }
        catch (err) {
            logger_1.default.error(err);
        }
    }
    async getCategoriesData(req, res) {
        try {
            const getCategoriesdata = await schema_1.default.find();
            if (getCategoriesdata) {
                res.status(Constent_1.statusCode.success).json({ message: "Data fetched successFully", data: getCategoriesdata });
            }
            else {
                res.status(Constent_1.statusCode.badRequest).json({ message: "Data Not Fetched" });
            }
        }
        catch (err) {
            logger_1.default.error(err);
        }
    }
    async editCateCoriesData(req, res) {
        try {
            const editCategories = await schema_1.default.findByIdAndUpdate(req.params.id, { $set: req.body });
            if (editCategories) {
                res.status(Constent_1.statusCode.success).json({ message: "Data updated Successfully", data: editCategories });
            }
            else {
                res.status(Constent_1.statusCode.badRequest).json({ message: "Data not Updated" });
            }
        }
        catch (err) {
            logger_1.default.error(err);
        }
    }
    async deleteCategories(req, res) {
        try {
            const deletCategories = await schema_1.default.findByIdAndDelete(req.params.id);
            if (deletCategories) {
                res.status(Constent_1.statusCode.success).json({ message: "Data Deleted SuccessFully", data: deletCategories });
            }
            else {
                res.status(Constent_1.statusCode.badRequest).json({ message: "Data not Deleted" });
            }
        }
        catch (err) {
            logger_1.default.error(err);
        }
    }
}
exports.default = CategoriesController;
//# sourceMappingURL=CategoriesController.js.map