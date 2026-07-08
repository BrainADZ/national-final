"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAdsEnquiry = exports.listAdsEnquiries = exports.createAdsEnquiry = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const AdsEnquiry_model_1 = require("../models/AdsEnquiry.model");
const mail_service_1 = require("../services/mail.service");
function readBodyString(value) {
    return String(value || "").trim();
}
const createAdsEnquiry = async (req, res) => {
    try {
        const fullName = readBodyString(req.body.fullName);
        const company = readBodyString(req.body.company);
        const phone = readBodyString(req.body.phone);
        const email = readBodyString(req.body.email).toLowerCase();
        const productInterest = readBodyString(req.body.productInterest);
        const technicalSpecifications = readBodyString(req.body.technicalSpecifications);
        const drawingAvailability = readBodyString(req.body.drawingAvailability);
        const source = readBodyString(req.body.source);
        const pageUrl = readBodyString(req.body.pageUrl);
        if (!fullName || !phone || !productInterest || !technicalSpecifications) {
            return res.status(400).json({
                success: false,
                message: "Name, phone, product interest and technical specifications are required.",
            });
        }
        if (email) {
            const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            if (!emailOk) {
                return res.status(400).json({
                    success: false,
                    message: "Please enter a valid email address.",
                });
            }
        }
        const file = req.file;
        const enquiry = await AdsEnquiry_model_1.AdsEnquiry.create({
            fullName,
            company: company || undefined,
            phone,
            email: email || undefined,
            productInterest,
            technicalSpecifications,
            drawingAvailability: drawingAvailability || undefined,
            source: source || undefined,
            pageUrl: pageUrl || undefined,
            drawing: file
                ? {
                    originalName: file.originalname,
                    fileName: file.filename,
                    mimeType: file.mimetype,
                    size: file.size,
                    path: file.path,
                }
                : null,
        });
        (0, mail_service_1.sendAdsEnquiryMail)({
            fullName,
            company: company || undefined,
            phone,
            email: email || undefined,
            productInterest,
            technicalSpecifications,
            drawingAvailability: drawingAvailability || undefined,
            source: source || undefined,
            pageUrl: pageUrl || undefined,
            drawingPath: file?.path,
            drawingName: file?.originalname,
            drawingMime: file?.mimetype,
        }).catch((e) => console.error("Ads enquiry mail failed:", e));
        return res.status(201).json({
            success: true,
            message: "Ads enquiry submitted successfully.",
            data: { id: enquiry._id },
        });
    }
    catch (err) {
        if (err instanceof mongoose_1.default.Error.ValidationError) {
            return res.status(400).json({
                success: false,
                message: "Validation failed. Please check your inputs.",
            });
        }
        const message = typeof err?.message === "string"
            ? err.message
            : "Server error. Please try again later.";
        console.error("createAdsEnquiry error:", err);
        return res.status(500).json({ success: false, message });
    }
};
exports.createAdsEnquiry = createAdsEnquiry;
const listAdsEnquiries = async (_req, res) => {
    try {
        const items = await AdsEnquiry_model_1.AdsEnquiry.find().sort({ createdAt: -1 }).limit(300);
        return res.json({ success: true, message: "OK", data: items });
    }
    catch (err) {
        console.error("listAdsEnquiries error:", err);
        return res.status(500).json({
            success: false,
            message: "Server error. Please try again later.",
        });
    }
};
exports.listAdsEnquiries = listAdsEnquiries;
const deleteAdsEnquiry = async (req, res) => {
    try {
        const id = String(req.params.id || "").trim();
        if (!id || !mongoose_1.default.Types.ObjectId.isValid(id)) {
            return res.status(400).json({
                success: false,
                message: "Invalid ads enquiry id.",
            });
        }
        const deleted = await AdsEnquiry_model_1.AdsEnquiry.findByIdAndDelete(id);
        if (!deleted) {
            return res.status(404).json({
                success: false,
                message: "Ads enquiry not found.",
            });
        }
        return res.json({
            success: true,
            message: "Ads enquiry deleted successfully.",
            data: { id: deleted._id },
        });
    }
    catch (err) {
        console.error("deleteAdsEnquiry error:", err);
        return res.status(500).json({
            success: false,
            message: "Server error. Please try again later.",
        });
    }
};
exports.deleteAdsEnquiry = deleteAdsEnquiry;
