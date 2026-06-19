import { Request, Response } from "express";
import mongoose from "mongoose";
import { AdsEnquiry } from "../models/AdsEnquiry.model";
import { sendAdsEnquiryMail } from "../services/mail.service";

function readBodyString(value: unknown) {
  return String(value || "").trim();
}

export const createAdsEnquiry = async (req: Request, res: Response) => {
  try {
    const fullName = readBodyString(req.body.fullName);
    const company = readBodyString(req.body.company);
    const phone = readBodyString(req.body.phone);
    const email = readBodyString(req.body.email).toLowerCase();
    const productInterest = readBodyString(req.body.productInterest);
    const technicalSpecifications = readBodyString(req.body.technicalSpecifications);
    const operatingParameters = readBodyString(req.body.operatingParameters);
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

    const enquiry = await AdsEnquiry.create({
      fullName,
      company: company || undefined,
      phone,
      email: email || undefined,
      productInterest,
      technicalSpecifications,
      operatingParameters: operatingParameters || undefined,
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

    sendAdsEnquiryMail({
      fullName,
      company: company || undefined,
      phone,
      email: email || undefined,
      productInterest,
      technicalSpecifications,
      operatingParameters: operatingParameters || undefined,
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
  } catch (err: any) {
    if (err instanceof mongoose.Error.ValidationError) {
      return res.status(400).json({
        success: false,
        message: "Validation failed. Please check your inputs.",
      });
    }

    const message =
      typeof err?.message === "string"
        ? err.message
        : "Server error. Please try again later.";

    console.error("createAdsEnquiry error:", err);
    return res.status(500).json({ success: false, message });
  }
};

export const listAdsEnquiries = async (_req: Request, res: Response) => {
  try {
    const items = await AdsEnquiry.find().sort({ createdAt: -1 }).limit(300);
    return res.json({ success: true, message: "OK", data: items });
  } catch (err) {
    console.error("listAdsEnquiries error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};

export const deleteAdsEnquiry = async (req: Request, res: Response) => {
  try {
    const id = String(req.params.id || "").trim();

    if (!id || !mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid ads enquiry id.",
      });
    }

    const deleted = await AdsEnquiry.findByIdAndDelete(id);

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
  } catch (err) {
    console.error("deleteAdsEnquiry error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error. Please try again later.",
    });
  }
};
