"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdminDashboard = void 0;
const Job_model_1 = require("../models/Job.model");
const Application_model_1 = require("../models/Application.model");
const Enquiry_model_1 = require("../models/Enquiry.model");
const AdsEnquiry_model_1 = require("../models/AdsEnquiry.model");
const Feedback_model_1 = require("../models/Feedback.model");
const getAdminDashboard = async (_req, res) => {
    try {
        // counts
        const [activeJobs, applications, enquiries, adsEnquiries, feedback] = await Promise.all([
            Job_model_1.Job.countDocuments({ isActive: true }),
            Application_model_1.Application.countDocuments({}),
            Enquiry_model_1.Enquiry.countDocuments({}),
            AdsEnquiry_model_1.AdsEnquiry.countDocuments({}),
            Feedback_model_1.Feedback.countDocuments({}),
        ]);
        // latest (fetch separately then merge + sort)
        const [latestApps, latestEnqs, latestAdsEnqs, latestFbs, latestJobs] = await Promise.all([
            Application_model_1.Application.find({})
                .sort({ createdAt: -1 })
                .limit(3)
                .select("fullName jobTitle createdAt"),
            Enquiry_model_1.Enquiry.find({})
                .sort({ createdAt: -1 })
                .limit(3)
                .select("fullName email phone createdAt"),
            AdsEnquiry_model_1.AdsEnquiry.find({})
                .sort({ createdAt: -1 })
                .limit(3)
                .select("fullName productInterest phone createdAt"),
            Feedback_model_1.Feedback.find({})
                .sort({ createdAt: -1 })
                .limit(3)
                .select("fullName email message createdAt"),
            Job_model_1.Job.find({})
                .sort({ createdAt: -1 })
                .limit(3)
                .select("title type location createdAt"),
        ]);
        const activity = [];
        latestApps.forEach((a) => {
            activity.push({
                type: "application",
                title: `New application: ${a.fullName || "Candidate"}`,
                meta: a.jobTitle ? `${a.jobTitle}` : "Job application",
                createdAt: a.createdAt,
            });
        });
        latestEnqs.forEach((e) => {
            activity.push({
                type: "enquiry",
                title: `New enquiry: ${e.fullName || "Visitor"}`,
                meta: e.email ? `${e.email}` : e.phone ? `${e.phone}` : "Website enquiry",
                createdAt: e.createdAt,
            });
        });
        latestAdsEnqs.forEach((e) => {
            activity.push({
                type: "adsEnquiry",
                title: `New ads enquiry: ${e.fullName || "Visitor"}`,
                meta: e.productInterest ? `${e.productInterest}` : e.phone ? `${e.phone}` : "Ads enquiry",
                createdAt: e.createdAt,
            });
        });
        latestFbs.forEach((f) => {
            activity.push({
                type: "feedback",
                title: `New feedback: ${f.fullName || "User"}`,
                meta: f.message ? `${String(f.message).slice(0, 60)}...` : "Feedback submitted",
                createdAt: f.createdAt,
            });
        });
        latestJobs.forEach((j) => {
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
    }
    catch (err) {
        return res.status(500).json({ message: "Dashboard fetch failed." });
    }
};
exports.getAdminDashboard = getAdminDashboard;
