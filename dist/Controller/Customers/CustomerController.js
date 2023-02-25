"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Constent_1 = require("../../utils/Constent");
const logger_1 = require("../../Middleware/logger");
const lodash_1 = require("lodash");
const schema_1 = require("../../Model/CustomerModel/schema");
const CloudineryConfig_1 = require("../../Config/CloudineryConfig");
class CustomerController {
    async postCustomerData(req, res) {
        try {
            const getUploadImagePath = (0, lodash_1.get)(req.file, "path", "")?.replace(/\\/g, '/');
            const uploadCloudinery = await CloudineryConfig_1.cloudinary.uploader.upload(getUploadImagePath);
            const findCustomerName = await schema_1.default.findOne({ customerName: req.body.customerName });
            if (findCustomerName) {
                res.status(Constent_1.statusCode.badRequest).json({ message: "Customer name is Already Inserted" });
            }
            else {
                const postCustomerData = await schema_1.default.create({
                    customerName: req.body.customerName,
                    phone: req.body.phone,
                    email: req.body.email,
                    address: req.body.address,
                    customerPicture: uploadCloudinery?.secure_url,
                    cloudineryId: uploadCloudinery?.public_id
                });
                const postCustomersData = await postCustomerData.save();
                if (postCustomersData) {
                    res.status(Constent_1.statusCode.success).json({ message: "Data is created SuccessFully", data: postCustomerData });
                }
                else {
                    res.status(Constent_1.statusCode.badRequest).json({ message: "Data is Not Created" });
                }
            }
        }
        catch (err) {
            logger_1.default.error(err);
            res.status(Constent_1.statusCode.internalServerError);
        }
    }
    async getCustomerData(req, res) {
        try {
            const getAllCustomerData = await schema_1.default.find();
            if (getAllCustomerData) {
                res.status(Constent_1.statusCode.success).json({ message: "CustomerData successFully fetched", data: getAllCustomerData });
            }
            else {
                res.status(Constent_1.statusCode.badRequest).json({ message: "Data Not fetched" });
            }
        }
        catch (err) {
            logger_1.default.error(err);
            res.status(Constent_1.statusCode.internalServerError).json({ message: "Internal server Error" });
        }
    }
    async updateCustomerData(req, res) {
        try {
            const findCloudineryData = await schema_1.default.findById(req.params.id);
            // Delete image from cloudinery
            await CloudineryConfig_1.cloudinary.uploader.destroy(findCloudineryData?.cloudineryId);
            // Update images in Cloudinery
            const getUploadImagePath = (0, lodash_1.get)(req.file, "path", "")?.replace(/\\/g, '/');
            const result = await CloudineryConfig_1.cloudinary.uploader.upload(getUploadImagePath);
            const data = {
                customerName: req.body.customerName,
                phone: req.body.phone,
                email: req.body.email,
                address: req.body.address,
                customerPicture: result?.secure_url,
                cloudineryId: result?.public_id
            };
            const updateCustomersData = await schema_1.default.findByIdAndUpdate(req.params.id, data, { new: true });
            if (updateCustomersData) {
                res.status(Constent_1.statusCode.success).json({ message: "Data is Updated", data: updateCustomersData });
            }
            else {
                res.status(Constent_1.statusCode.badRequest).json({ message: "Data is Not Updated" });
            }
        }
        catch (err) {
            logger_1.default.error(err);
            res.status(Constent_1.statusCode.internalServerError).json({ message: "Internal server Error" });
        }
    }
    async getUniqueCustomerData(req, res) {
        try {
            const getUniqueData = await schema_1.default.findById(req.params.id);
            if (getUniqueData) {
                res.status(Constent_1.statusCode.success).json({ message: "Data is Fetched", data: getUniqueData });
            }
            else {
                res.status(Constent_1.statusCode.badRequest).json({ message: "Data is Not Fetched" });
            }
        }
        catch (err) {
            logger_1.default.error(err);
            res.status(Constent_1.statusCode.internalServerError).json({ message: "Internel Server Error" });
        }
    }
    async deleteCustomerData(req, res) {
        try {
            const findCloudineryIdAndDelete = await schema_1.default.findById(req.params.id);
            await CloudineryConfig_1.cloudinary.uploader.destroy(findCloudineryIdAndDelete?.cloudineryId);
            const deletCategory = await schema_1.default.findByIdAndDelete(findCloudineryIdAndDelete);
            if (deletCategory) {
                res.status(Constent_1.statusCode.success).json({ message: "Data is Deleted SuccessFully", data: deletCategory });
            }
            else {
                res.status(Constent_1.statusCode.badRequest).json({ message: "Data is Not deleted" });
            }
        }
        catch (err) {
            logger_1.default.error(err);
            res.status(Constent_1.statusCode.internalServerError).json({ message: "Internal server error" });
        }
    }
}
exports.default = CustomerController;
//# sourceMappingURL=CustomerController.js.map