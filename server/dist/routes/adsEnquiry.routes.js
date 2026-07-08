"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const adsEnquiry_controller_1 = require("../controllers/adsEnquiry.controller");
const upload_middleware_1 = require("../middleware/upload.middleware");
const router = (0, express_1.Router)();
router.post("/", upload_middleware_1.upload.single("drawing"), adsEnquiry_controller_1.createAdsEnquiry);
exports.default = router;
