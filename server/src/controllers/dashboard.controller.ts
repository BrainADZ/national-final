import type { Request, Response } from "express";
import { Job } from "../models/Job.model";
import { Application } from "../models/Application.model";
import { Enquiry } from "../models/Enquiry.model";
import { AdsEnquiry } from "../models/AdsEnquiry.model";
import { Feedback } from "../models/Feedback.model";

type ActivityItem = {
  type: "job" | "application" | "enquiry" | "adsEnquiry" | "feedback";
  title: string;
  meta: string;
  createdAt: Date;
};

export const getAdminDashboard = async (_req: Request, res: Response) => {
  try {
    // counts
    const [activeJobs, applications, enquiries, adsEnquiries, feedback] = await Promise.all([
      Job.countDocuments({ isActive: true }),
      Application.countDocuments({}),
      Enquiry.countDocuments({}),
      AdsEnquiry.countDocuments({}),
      Feedback.countDocuments({}),
    ]);

    // latest (fetch separately then merge + sort)
    const [latestApps, latestEnqs, latestAdsEnqs, latestFbs, latestJobs] = await Promise.all([
      Application.find({})
        .sort({ createdAt: -1 })
        .limit(3)
        .select("fullName jobTitle createdAt"),
      Enquiry.find({})
        .sort({ createdAt: -1 })
        .limit(3)
        .select("fullName email phone createdAt"),
      AdsEnquiry.find({})
        .sort({ createdAt: -1 })
        .limit(3)
        .select("fullName productInterest phone createdAt"),
      Feedback.find({})
        .sort({ createdAt: -1 })
        .limit(3)
        .select("fullName email message createdAt"),
      Job.find({})
        .sort({ createdAt: -1 })
        .limit(3)
        .select("title type location createdAt"),
    ]);

    const activity: ActivityItem[] = [];

    latestApps.forEach((a: any) => {
      activity.push({
        type: "application",
        title: `New application: ${a.fullName || "Candidate"}`,
        meta: a.jobTitle ? `${a.jobTitle}` : "Job application",
        createdAt: a.createdAt,
      });
    });

    latestEnqs.forEach((e: any) => {
      activity.push({
        type: "enquiry",
        title: `New enquiry: ${e.fullName || "Visitor"}`,
        meta: e.email ? `${e.email}` : e.phone ? `${e.phone}` : "Website enquiry",
        createdAt: e.createdAt,
      });
    });

    latestAdsEnqs.forEach((e: any) => {
      activity.push({
        type: "adsEnquiry",
        title: `New ads enquiry: ${e.fullName || "Visitor"}`,
        meta: e.productInterest ? `${e.productInterest}` : e.phone ? `${e.phone}` : "Ads enquiry",
        createdAt: e.createdAt,
      });
    });

    latestFbs.forEach((f: any) => {
      activity.push({
        type: "feedback",
        title: `New feedback: ${f.fullName || "User"}`,
        meta: f.message ? `${String(f.message).slice(0, 60)}...` : "Feedback submitted",
        createdAt: f.createdAt,
      });
    });

    latestJobs.forEach((j: any) => {
      activity.push({
        type: "job",
        title: `Job created: ${j.title}`,
        meta: `${j.type || ""}${j.location ? ` • ${j.location}` : ""}`.trim(),
        createdAt: j.createdAt,
      });
    });

    activity.sort((a, b) => +new Date(b.createdAt) - +new Date(a.createdAt));

    return res.json({
      message: "ok",
      data: {
        stats: {
          activeJobs,
          applications,
          enquiries,
          adsEnquiries,
          feedback,
        },
        latest: activity.slice(0, 6).map((x) => ({
          type: x.type,
          title: x.title,
          meta: x.meta,
          createdAt: x.createdAt,
        })),
      },
    });
  } catch (err) {
    return res.status(500).json({ message: "Dashboard fetch failed." });
  }
};
