import { Request, Response } from "express";
import { Application } from "../models/Application.model";

const toPublicUrl = (filePath: string) => {
  // multer gives path like "uploads/abc.pdf" or "uploads\\abc.pdf"
  const normalized = filePath.replace(/\\/g, "/");
  return normalized.startsWith("/") ? normalized : `/${normalized}`;
};

export const createApplication = async (req: Request, res: Response) => {
  try {
    const {
      jobId,
      jobTitle,
      fullName,
      phone,
      email,
      experience,
      location,
      noticePeriod,
      message,
    } = req.body as Record<string, string>;

    const file = req.file;

    if (!jobTitle?.trim()) return res.status(400).json({ message: "jobTitle is required" });
    if (!fullName?.trim()) return res.status(400).json({ message: "fullName is required" });
    if (!phone?.trim()) return res.status(400).json({ message: "phone is required" });
    if (!email?.trim()) return res.status(400).json({ message: "email is required" });

    if (!file) return res.status(400).json({ message: "resume file is required" });

    // allow only resume formats here (tighten)
    const allowed = [
      "application/pdf",
      "application/msword",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    if (!allowed.includes(file.mimetype)) {
      return res.status(400).json({ message: "Invalid resume type. Allowed: PDF/DOC/DOCX" });
    }

    const doc = await Application.create({
      jobId: jobId || undefined,
      jobTitle: jobTitle.trim(),

      fullName: fullName.trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),

      experience: experience?.trim() || undefined,
      location: location?.trim() || undefined,
      noticePeriod: noticePeriod?.trim() || undefined,
      message: message?.trim() || undefined,

      resumeUrl: toPublicUrl(file.path),
      resumeName: file.originalname,
      resumeMime: file.mimetype,
      resumeSize: file.size,
    });

    return res.status(201).json({
      message: "Application submitted",
      data: {
        id: doc._id,
        createdAt: doc.createdAt,
      },
    });
  } catch (e: any) {
    return res.status(500).json({ message: "Failed to submit application" });
  }
};

export const listApplicationsAdmin = async (req: Request, res: Response) => {
  try {
    const { from, to, q, jobId, page = "1", limit = "20" } = req.query as Record<string, string>;

    const filter: any = {};

    // date filter
    if (from || to) {
      filter.createdAt = {};
      if (from) filter.createdAt.$gte = new Date(from);
      if (to) {
        const end = new Date(to);
        end.setHours(23, 59, 59, 999);
        filter.createdAt.$lte = end;
      }
    }

    if (jobId) filter.jobId = jobId;

    // search (name/email/phone/jobTitle)
    if (q?.trim()) {
      const rx = new RegExp(q.trim(), "i");
      filter.$or = [{ fullName: rx }, { email: rx }, { phone: rx }, { jobTitle: rx }];
    }

    const p = Math.max(parseInt(page, 10) || 1, 1);
    const l = Math.min(Math.max(parseInt(limit, 10) || 20, 1), 200);

    const [items, total] = await Promise.all([
      Application.find(filter).sort({ createdAt: -1 }).skip((p - 1) * l).limit(l),
      Application.countDocuments(filter),
    ]);

    res.json({
      message: "Applications fetched",
      data: items,
      meta: { page: p, limit: l, total },
    });
  } catch (e) {
    res.status(500).json({ message: "Failed to fetch applications" });
  }
};
