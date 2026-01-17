/* eslint-disable @next/next/no-img-element */
/* eslint-disable @typescript-eslint/no-unused-vars */

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import {
  Briefcase,
  MapPin,
  Clock,
  GraduationCap,
  IndianRupee,
  CheckCircle2,
  Upload,
  Building2,
  Phone,
  Mail,
  User,
  FileText,
  ChevronDown,
  ArrowRight,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

type ApiJob = {
  _id: string;
  title: string;
  description: string;
  type: "full-time" | "part-time" | "internship";
  location: string;
  experienceMin: number;
  experienceMax: number;
  salaryLabel: string;
  responsibilities: string[];
  requirements: string[];
  goodToHave: string[];
  isActive: boolean;
  createdAt: string;
};

type Job = {
  id: string; // _id
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  salary: string;
  summary: string;
  responsibilities: string[];
  requirements: string[];
  skillsGoodToHave: string[];
};

function formatType(t: ApiJob["type"]) {
  if (t === "full-time") return "Full-time";
  if (t === "part-time") return "Part-time";
  return "Internship";
}

function formatExp(min: number, max: number) {
  if (min === max) return `${min} years`;
  return `${min}–${max} years`;
}

export default function CareersPage() {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  // ✅ consistent tick icon sizing everywhere
  const bulletIconClass = "h-3.5 w-3.5 shrink-0 text-[#ee9d54] mt-0.5";

  const [jobs, setJobs] = useState<Job[]>([]);
  const [jobsLoading, setJobsLoading] = useState(true);
  const [jobsError, setJobsError] = useState<string | null>(null);

  const [activeJobId, setActiveJobId] = useState<string | null>(null);

  // Apply form state
  const [jobAppliedFor, setJobAppliedFor] = useState<string>("");
  const [jobAppliedForId, setJobAppliedForId] = useState<string | null>(null);

  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [experience, setExperience] = useState("");
  const [location, setLocation] = useState("");
  const [noticePeriod, setNoticePeriod] = useState("");
  const [message, setMessage] = useState("");
  const [resume, setResume] = useState<File | null>(null);

  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formError, setFormError] = useState<string | null>(null);

  const resumeInputRef = useRef<HTMLInputElement | null>(null);

  const selectedJob = useMemo(() => {
    return jobs.find((j) => j.title === jobAppliedFor);
  }, [jobs, jobAppliedFor]);

  const resetForm = () => {
    setFullName("");
    setPhone("");
    setEmail("");
    setExperience("");
    setLocation("");
    setNoticePeriod("");
    setMessage("");
    setResume(null);
    setFormError(null);

    if (resumeInputRef.current) resumeInputRef.current.value = "";
  };

  const validatePhone = (value: string) => {
    const cleaned = value.replace(/\s/g, "");
    return /^[0-9+]{10,15}$/.test(cleaned);
  };

  const fetchJobs = async () => {
    setJobsLoading(true);
    setJobsError(null);

    try {
      if (!API) {
        setJobsError("NEXT_PUBLIC_API_BASE_URL is missing.");
        setJobsLoading(false);
        return;
      }

      const res = await fetch(`${API}/jobs`, { cache: "no-store" });
      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setJobsError(data?.message || "Failed to load jobs.");
        setJobsLoading(false);
        return;
      }

      const list: ApiJob[] = Array.isArray(data?.data) ? data.data : [];
      const active = list.filter((j) => j.isActive);

      const mapped: Job[] = active.map((j) => ({
        id: j._id,
        title: j.title,
        department: "General",
        location: j.location,
        type: formatType(j.type),
        experience: formatExp(j.experienceMin, j.experienceMax),
        salary: j.salaryLabel || "Not disclosed",
        summary: j.description,
        responsibilities: j.responsibilities || [],
        requirements: j.requirements || [],
        skillsGoodToHave: j.goodToHave || [],
      }));

      setJobs(mapped);

      // default selection
      if (mapped.length > 0) {
        setActiveJobId((prev) => prev ?? mapped[0].id);
        setJobAppliedFor((prev) => prev || mapped[0].title);
        setJobAppliedForId((prev) => prev ?? mapped[0].id);
      }
    } catch {
      setJobsError("Server not reachable.");
    } finally {
      setJobsLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(false);
    setFormError(null);

    if (!API) return setFormError("NEXT_PUBLIC_API_BASE_URL is missing.");
    if (!fullName.trim()) return setFormError("Please enter your full name.");
    if (!phone.trim() || !validatePhone(phone)) return setFormError("Please enter a valid phone number.");
    if (!email.trim() || !/^\S+@\S+\.\S+$/.test(email)) return setFormError("Please enter a valid email.");
    if (!resume) return setFormError("Please upload your resume.");
    if (resume.size > 5 * 1024 * 1024) return setFormError("Resume file must be under 5MB.");

    try {
      setSubmitting(true);

      const fd = new FormData();
      if (jobAppliedForId) fd.append("jobId", jobAppliedForId);
      fd.append("jobTitle", jobAppliedFor);

      fd.append("fullName", fullName);
      fd.append("phone", phone);
      fd.append("email", email);

      if (experience) fd.append("experience", experience);
      if (location) fd.append("location", location);
      if (noticePeriod) fd.append("noticePeriod", noticePeriod);
      if (message) fd.append("message", message);

      fd.append("resume", resume);

      const res = await fetch(`${API}/careers/`, {
        method: "POST",
        body: fd,
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setFormError(data?.message || "Failed to submit application.");
        return;
      }

      setSuccess(true);
      resetForm();

      document.getElementById("apply")?.scrollIntoView({ behavior: "smooth" });
    } catch {
      setFormError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src="/3.webp" alt="Gallery" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/45 to-black/15" />
          <div className="absolute inset-0 bg-orange-500/10 mix-blend-multiply" />
        </div>

        <div className="relative pt-16 md:pt-2">
          <div className="mx-auto max-w-425 px-2 py-1 lg:px-4 lg:py-24">
            <nav className="text-xs font-semibold uppercase tracking-[0.22em] text-white/80">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <Link href="/" className="hover:text-white">
                    Home
                  </Link>
                </li>
                <li className="text-white/40">/</li>
                <li className="text-orange-300">Gallery</li>
              </ol>
            </nav>

            <div className="mt-5 max-w-2xl">
              <h1 className="text-3xl font-bold text-white md:text-4xl">Gallery</h1>
              <p className="mt-3 text-sm leading-relaxed text-white/85 md:text-base">
                A quick look at our work, facilities, products, events, and on-ground execution.
              </p>
            </div>
          </div>
        </div>

        <div className="h-10 w-full bg-linear-to-b from-black/10 to-white" />
      </section>

      {/* CULTURE SECTION */}
      <section className="bg-white">
        <div className="mx-auto max-w-425 px-4 py-12 sm:py-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div className="relative">
              <div className="absolute -top-3 left-10 h-3 w-28 rounded-full bg-[#ee9d54]/90" />
              <div className="absolute -bottom-4 left-24 h-3 w-32 rounded-full bg-[#ee9d54]/90" />

              <div className="relative overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">
                <img src="/Team.jpg" alt="Team at National Engineers" className="h-80 w-full object-cover sm:h-105" />
                <div className="pointer-events-none absolute inset-0 bg-linear-to-tr from-black/10 via-transparent to-transparent" />
              </div>
            </div>

            <div>
              <p className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold text-[#ee9d54]">
                Culture & Growth
              </p>

              <h2 className="mt-4 text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">
                Be part of a workplace that values growth, discipline, and delivery.
              </h2>

              <p className="mt-4 text-sm leading-relaxed text-gray-600">
                At National Engineers, we focus on practical execution, quality standards, and responsibility. You will work
                on real customer requirements, learn directly from the field, and grow in a structured environment where
                timelines and professionalism matter.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                If you enjoy ownership-driven work, clear communication, and continuous improvement, you will fit in well with our team.
              </p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-xl bg-[#ee9d54] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95"
                >
                  Know More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-gray-100 bg-white p-4">
                  <p className="text-xs font-semibold text-gray-500">Environment</p>
                  <p className="mt-1 text-sm font-bold text-gray-900">Professional</p>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-white p-4">
                  <p className="text-xs font-semibold text-gray-500">Learning</p>
                  <p className="mt-1 text-sm font-bold text-gray-900">Hands-on</p>
                </div>
                <div className="rounded-2xl border border-gray-100 bg-white p-4">
                  <p className="text-xs font-semibold text-gray-500">Growth</p>
                  <p className="mt-1 text-sm font-bold text-gray-900">Performance-based</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY WORK WITH US */}
      <section className="mx-auto max-w-425 px-4 py-12">
        <h2 className="text-2xl font-extrabold text-gray-900">Why work with NESF</h2>
        <p className="mt-2 max-w-3xl text-sm leading-relaxed text-gray-600">
          We operate with a practical, delivery-driven approach. You will work on real requirements, improve professional
          skills, and grow in a team that values timelines, accuracy, and accountability.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Building2, title: "Professional environment", desc: "Structured work culture with clear reporting." },
            { icon: GraduationCap, title: "Learning & mentoring", desc: "On-the-job learning with guidance from seniors." },
            { icon: Clock, title: "Stable workflow", desc: "Defined processes for sales, service, and operations." },
            { icon: IndianRupee, title: "Performance rewards", desc: "Incentives and growth based on contribution." },
          ].map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm">
              <item.icon className="h-6 w-6 text-[#ee9d54]" />
              <p className="mt-3 text-sm font-bold text-gray-900">{item.title}</p>
              <p className="mt-2 text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* OPENINGS */}
      <section id="openings" className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto max-w-425 px-4 py-12">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900">Current Openings</h2>
              <p className="mt-2 text-sm text-gray-600">
                Browse roles and apply. If you don’t find a match, you can still submit your profile.
              </p>

              {jobsError && <p className="mt-2 text-sm font-semibold text-red-600">{jobsError}</p>}
              {jobsLoading && <p className="mt-2 text-sm text-gray-600">Loading jobs...</p>}
              {!jobsLoading && !jobsError && jobs.length === 0 && (
                <p className="mt-2 text-sm text-gray-600">No openings available right now.</p>
              )}
            </div>

            <a
              href="#apply"
              className="inline-flex items-center justify-center rounded-xl bg-[#ee9d54] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-95"
            >
              Apply Now
            </a>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            {/* Left: job list */}
            <div className="space-y-3">
              {jobs.map((job) => {
                const active = activeJobId === job.id;
                return (
                  <button
                    key={job.id}
                    type="button"
                    onClick={() => {
                      setActiveJobId(job.id);
                      setJobAppliedFor(job.title);
                      setJobAppliedForId(job.id);
                    }}
                    className={`w-full rounded-2xl border p-5 text-left shadow-sm transition ${active ? "border-orange-200 bg-white" : "border-gray-100 bg-white hover:border-gray-200"
                      }`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-extrabold text-gray-900">{job.title}</p>
                        <p className="mt-1 text-xs font-semibold text-gray-500">{job.department}</p>
                      </div>
                      <ChevronDown className={`h-5 w-5 text-gray-400 transition ${active ? "rotate-180" : ""}`} />
                    </div>

                    <div className="mt-4 grid grid-cols-2 gap-3 text-xs text-gray-600 sm:grid-cols-4">
                      <span className="inline-flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-gray-400" />
                        {job.location}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Clock className="h-4 w-4 text-gray-400" />
                        {job.type}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <Briefcase className="h-4 w-4 text-gray-400" />
                        {job.experience}
                      </span>
                      <span className="inline-flex items-center gap-2">
                        <IndianRupee className="h-4 w-4 text-gray-400" />
                        {job.salary}
                      </span>
                    </div>

                    {active && (
                      <div className="mt-4 rounded-xl bg-gray-50 p-4">
                        <p className="text-sm font-semibold text-gray-900">Role summary</p>
                        <p className="mt-2 text-sm text-gray-600">{job.summary}</p>
                      </div>
                    )}
                  </button>
                );
              })}
            </div>

            {/* Right: job detail */}
            <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              {selectedJob ? (
                <>
                  <h3 className="text-lg font-extrabold text-gray-900">{selectedJob.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{selectedJob.summary}</p>

                  <div className="mt-5 grid gap-3 text-sm text-gray-600 sm:grid-cols-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <span>{selectedJob.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <span>{selectedJob.type}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-gray-400" />
                      <span>{selectedJob.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <IndianRupee className="h-4 w-4 text-gray-400" />
                      <span>{selectedJob.salary}</span>
                    </div>
                  </div>

                  <div className="mt-6 grid gap-6 sm:grid-cols-2">
                    <div>
                      <p className="text-sm font-bold text-gray-900">Responsibilities</p>
                      <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        {selectedJob.responsibilities.map((r, i) => (
                          <li key={i} className="flex gap-2">
                            <CheckCircle2 className={bulletIconClass} strokeWidth={2} />
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <p className="text-sm font-bold text-gray-900">Requirements</p>
                      <ul className="mt-3 space-y-2 text-sm text-gray-600">
                        {selectedJob.requirements.map((r, i) => (
                          <li key={i} className="flex gap-2">
                            <CheckCircle2 className={bulletIconClass} strokeWidth={2} />
                            {r}
                          </li>
                        ))}
                      </ul>

                      {selectedJob.skillsGoodToHave?.length > 0 && (
                        <>
                          <p className="mt-6 text-sm font-bold text-gray-900">Good to have</p>
                          <ul className="mt-3 space-y-2 text-sm text-gray-600">
                            {selectedJob.skillsGoodToHave.map((r, i) => (
                              <li key={i} className="flex gap-2">
                                <CheckCircle2 className={bulletIconClass} strokeWidth={2} />
                                {r}
                              </li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="#apply"
                      onClick={() => {
                        setJobAppliedFor(selectedJob.title);
                        setJobAppliedForId(selectedJob.id);
                      }}
                      className="inline-flex w-full items-center justify-center rounded-xl bg-[#ee9d54] px-5 py-3 text-sm font-semibold text-white hover:opacity-95 sm:w-auto"
                    >
                      Apply for this role
                    </a>
                    <a
                      href="#apply"
                      onClick={() => {
                        setJobAppliedFor("General Application");
                        setJobAppliedForId(null);
                      }}
                      className="inline-flex w-full items-center justify-center rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 sm:w-auto"
                    >
                      Submit general profile
                    </a>
                  </div>
                </>
              ) : (
                <p className="text-sm text-gray-600">Select a role to view details.</p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* APPLY FORM */}
      <section id="apply" className="mx-auto max-w-425 px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-extrabold text-gray-900">Apply Now</h2>
            <p className="mt-2 text-sm leading-relaxed text-gray-600">
              Fill the form and upload your resume. Our HR team will review and contact you if your profile matches our
              current requirements.
            </p>

            <div className="mt-6 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
              <p className="text-sm font-bold text-gray-900">Application Guidelines</p>
              <ul className="mt-3 space-y-2 text-sm text-gray-600">
                <li className="flex gap-2">
                  <CheckCircle2 className={bulletIconClass} strokeWidth={2} />
                  Upload resume in PDF/DOC/DOCX (max 5MB).
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className={bulletIconClass} strokeWidth={2} />
                  Mention your current location and notice period (if applicable).
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className={bulletIconClass} strokeWidth={2} />
                  Add a short message about your experience and role interest.
                </li>
              </ul>
            </div>

            <div className="mt-6 rounded-3xl border border-gray-100 bg-gray-50 p-6">
              <p className="text-sm font-bold text-gray-900">HR Contact</p>
              <div className="mt-3 space-y-2 text-sm text-gray-600">
                <Link
                  href="https://wa.me/919574011132"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-gray-900"
                >
                  <MessageCircle className="h-4 w-4 text-gray-400" />
                  WhatsApp: +91 95740 11132
                </Link>
                <Link href="tel:919574011132" className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-400" />
                  Tel: +91 95740 11132
                </Link>
              </div>
              <p className="mt-3 text-xs text-gray-500">Response time may vary depending on openings and profile match.</p>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm">
            {success ? (
              <div className="rounded-2xl border border-green-200 bg-green-50 p-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="text-sm font-extrabold text-gray-900">Application submitted</p>
                    <p className="mt-1 text-sm text-gray-700">
                      Thank you. Our team will review your profile and connect with you if there is a suitable match.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSuccess(false)}
                      className="mt-4 rounded-xl bg-[#ee9d54] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-95"
                    >
                      Submit another application
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="space-y-4">
                {formError && (
                  <div className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                    {formError}
                  </div>
                )}

                <div>
                  <label className="text-xs font-semibold text-gray-700">Applying for</label>
                  <select
                    value={jobAppliedFor}
                    onChange={(e) => {
                      const val = e.target.value;
                      setJobAppliedFor(val);

                      if (val === "General Application") {
                        setJobAppliedForId(null);
                        return;
                      }

                      const found = jobs.find((x) => x.title === val);
                      setJobAppliedForId(found?.id ?? null);
                    }}
                    className="mt-1 w-full rounded-xl border border-gray-300 bg-white px-3 py-3 text-sm outline-none focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
                  >
                    {jobs.map((j) => (
                      <option key={j.id} value={j.title}>
                        {j.title}
                      </option>
                    ))}
                    <option value="General Application">General Application (Any Suitable Role)</option>
                  </select>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-gray-700">Full Name</label>
                    <div className="mt-1 flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-3 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
                      <User className="h-4 w-4 text-gray-400" />
                      <input
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        required
                        type="text"
                        placeholder="Your full name"
                        className="w-full text-sm outline-none placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-700">Phone</label>
                    <div className="mt-1 flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-3 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        className="w-full text-sm outline-none placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-700">Email</label>
                    <div className="mt-1 flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-3 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        type="email"
                        placeholder="you@domain.com"
                        className="w-full text-sm outline-none placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-700">Current Location</label>
                    <div className="mt-1 flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-3 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
                      <MapPin className="h-4 w-4 text-gray-400" />
                      <input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        type="text"
                        placeholder="e.g., Delhi NCR"
                        className="w-full text-sm outline-none placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-700">Experience</label>
                    <div className="mt-1 flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-3 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
                      <Briefcase className="h-4 w-4 text-gray-400" />
                      <input
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        type="text"
                        placeholder="e.g., 2 years"
                        className="w-full text-sm outline-none placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-700">Notice Period</label>
                    <div className="mt-1 flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-3 py-3 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
                      <Clock className="h-4 w-4 text-gray-400" />
                      <input
                        value={noticePeriod}
                        onChange={(e) => setNoticePeriod(e.target.value)}
                        type="text"
                        placeholder="e.g., Immediate / 15 days"
                        className="w-full text-sm outline-none placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700">Resume (required)</label>
                  <div className="mt-1 flex items-center gap-3 rounded-xl border border-gray-300 bg-white px-3 py-3 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
                    <Upload className="h-4 w-4 text-gray-400" />
                    <input
                      required
                      ref={resumeInputRef}
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="w-full text-sm outline-none file:mr-3 file:rounded-md file:border-0 file:bg-gray-100 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-gray-800 hover:file:bg-gray-200"
                      onChange={(e) => {
                        const file = e.target.files?.[0] || null;
                        if (file && file.size > 5 * 1024 * 1024) {
                          setFormError("Resume must be under 5MB.");
                          e.currentTarget.value = "";
                          setResume(null);
                          return;
                        }
                        setResume(file);
                      }}
                    />
                  </div>
                  {resume && (
                    <p className="mt-1 text-xs text-gray-600">
                      Selected: <span className="font-semibold">{resume.name}</span>
                    </p>
                  )}
                </div>

                <div>
                  <label className="text-xs font-semibold text-gray-700">Message</label>
                  <div className="mt-1 flex items-start gap-2 rounded-xl border border-gray-300 bg-white px-3 py-3 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
                    <FileText className="mt-0.5 h-4 w-4 text-gray-400" />
                    <textarea
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={5}
                      placeholder="Write a short note about your experience and role interest..."
                      className="w-full resize-none text-sm outline-none placeholder:text-gray-400"
                    />
                  </div>
                </div>

                <button
                  disabled={submitting}
                  type="submit"
                  className="w-full rounded-xl bg-[#ee9d54] px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {submitting ? "Submitting..." : "Submit Application"}
                </button>

                <p className="text-xs text-gray-500">
                  By submitting, you confirm the information shared is accurate and can be used for recruitment communication.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
