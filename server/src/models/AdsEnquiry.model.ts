import mongoose from "mongoose";

export type AdsEnquiryDrawing = {
  originalName: string;
  fileName: string;
  mimeType: string;
  size: number;
  path: string;
};

export interface IAdsEnquiry extends mongoose.Document {
  fullName: string;
  company?: string;
  phone: string;
  email?: string;
  productInterest: string;
  technicalSpecifications: string;
  operatingParameters?: string;
  drawingAvailability?: string;
  source?: string;
  pageUrl?: string;
  drawing?: AdsEnquiryDrawing | null;
  createdAt: Date;
  updatedAt: Date;
}

const AdsEnquiryDrawingSchema = new mongoose.Schema<AdsEnquiryDrawing>(
  {
    originalName: { type: String, required: true },
    fileName: { type: String, required: true },
    mimeType: { type: String, required: true },
    size: { type: Number, required: true },
    path: { type: String, required: true },
  },
  { _id: false }
);

const AdsEnquirySchema = new mongoose.Schema<IAdsEnquiry>(
  {
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
    operatingParameters: { type: String, trim: true, maxlength: 2000 },
    drawingAvailability: { type: String, trim: true, maxlength: 80 },
    source: { type: String, trim: true, maxlength: 120 },
    pageUrl: { type: String, trim: true, maxlength: 500 },
    drawing: { type: AdsEnquiryDrawingSchema, default: null },
  },
  { timestamps: true }
);

AdsEnquirySchema.index({ createdAt: -1 });
AdsEnquirySchema.index({ phone: 1 });
AdsEnquirySchema.index({ email: 1 });
AdsEnquirySchema.index({ productInterest: 1 });

export const AdsEnquiry = mongoose.model<IAdsEnquiry>("AdsEnquiry", AdsEnquirySchema);
