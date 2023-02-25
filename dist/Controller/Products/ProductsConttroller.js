"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constent_1 = require("../../utils/Constent");
const logger_1 = require("../../Middleware/logger");
const schema_1 = require("../../Model/ProductsModel/schema");
class ProductControllers {
    async PostProducts(req, res) {
        try {
            const findProductsName = await schema_1.default.findOne({ productName: req.body.productName });
            if (findProductsName) {
                res.status(Constent_1.statusCode.badRequest).json({ message: "ProductName is Already Exist" });
            }
            else {
                const postProductData = await schema_1.default.create(req.body);
                const saveProductData = await postProductData.save();
                if (saveProductData) {
                    res.status(Constent_1.statusCode.success).json({ message: "Data Added SuccessFully", data: saveProductData });
                }
                else {
                    res.status(Constent_1.statusCode.badRequest).json({ message: "Data Not Created" });
                }
            }
        }
        catch (err) {
            logger_1.default.error(err);
        }
    }
    async getProductsData(req, res) {
        try {
            const handleGetData = await schema_1.default.find();
            if (handleGetData) {
                res.status(Constent_1.statusCode.success).json({ message: "Data Fetched SuccessFully", data: handleGetData });
            }
            else {
                res.status(Constent_1.statusCode.badRequest).json({ message: "Data not feched" });
            }
        }
        catch (err) {
            logger_1.default.error(err);
        }
    }
    async editProductData(req, res) {
        try {
            const handleEditProductsData = await schema_1.default.findByIdAndUpdate(req.params.id, { $set: req.body });
            if (handleEditProductsData) {
                res.status(Constent_1.statusCode.success).json({ message: "Data Updated SuccessFully", data: handleEditProductsData });
            }
            else {
                res.status(Constent_1.statusCode.badRequest).json({ message: "Data Not Updated" });
            }
        }
        catch (err) {
            logger_1.default.error(err);
        }
    }
    async getUniqueProductsData(req, res) {
        try {
            const getUniqueData = await schema_1.default.findById(req.params.id);
            if (getUniqueData) {
                res.status(Constent_1.statusCode.success).json({ message: "Data Fetched SuccessFully", data: getUniqueData });
            }
            else {
                res.status(Constent_1.statusCode.badRequest).json({ message: "Data Not Fetched" });
            }
        }
        catch (err) {
            logger_1.default.error(err);
        }
    }
    async deleteProductData(req, res) {
        try {
            const deletData = await schema_1.default.findByIdAndDelete(req.params.id);
            if (deletData) {
                res.status(Constent_1.statusCode.success).json({ message: "Products Data Deleted SuccessFully" });
            }
            else {
                res.status(Constent_1.statusCode.badRequest).json({ message: "ProductData not Delleted" });
            }
        }
        catch (err) {
            logger_1.default.error(err);
        }
    }
}
exports.default = ProductControllers;
//# sourceMappingURL=ProductsConttroller.js.map