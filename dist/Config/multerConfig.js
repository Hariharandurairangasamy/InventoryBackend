"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require("multer");
const upload = multer({
    dest: "../Images",
    storage: multer.diskStorage({}),
    limits: { fileSize: 1024 * 1024 * 5 },
});
exports.default = upload;
//# sourceMappingURL=multerConfig.js.map