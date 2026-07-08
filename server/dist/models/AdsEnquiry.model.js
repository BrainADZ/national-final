"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdsEnquiry = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const AdsEnquiryDrawingSchema = new mongoose_1.default.Schema({
    originalName: { type: String, required: true },
    fileName: { type: String, required: true },
    mimeType: { type: String, required: true },
    size: { type: Number, required: true },
    path: { type: String, required: true },
}, { _id: false });
const AdsEnquirySchema = new mongoose_1.default.Schema({
    fullName: { type: String, required: true, trim: true, minlength: 2, maxlength: 80 },
    company: { type: String, trim: true, maxlength: 120 },
    phone: { type: String, required: true, trim: true, minlength: 7, maxlength: 25 },
    email: { type: String, trim: true, lowercase: true, maxlength: 120 },
    productInterest: { type: String, required: true, trim: true, minlength: 2, maxlength: 160 },
    technicalSpecifications: {
        type: String,
        required: true,
        trim: true,
        minlength: 1,
        maxlength: 4000,
    },
    drawingAvailability: { type: String, trim: true, maxlength: 80 },
    source: { type: String, trim: true, maxlength: 120 },
    pageUrl: { type: String, trim: true, maxlength: 500 },
    drawing: { type: AdsEnquiryDrawingSchema, default: null },
}, { timestamps: true });
AdsEnquirySchema.index({ createdAt: -1 });
AdsEnquirySchema.index({ phone: 1 });
AdsEnquirySchema.index({ email: 1 });
AdsEnquirySchema.index({ productInterest: 1 });
exports.AdsEnquiry = mongoose_1.default.model("AdsEnquiry", AdsEnquirySchema);
