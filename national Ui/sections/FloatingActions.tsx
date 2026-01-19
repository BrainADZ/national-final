/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect, useState } from "react";
import { X, Phone, Mail, Building2, Paperclip } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

type Props = {
  whatsappNumber?: string;
  whatsappMessage?: string;
  linkedinUrl?: string;
};

export default function FloatingActions({
  whatsappNumber = "919574011132",
  whatsappMessage = "Hi National Engineers, I’d like to enquire about your products/services.",
  linkedinUrl = "https://www.linkedin.com/company/national-engineers-steel-fabricators/",
}: Props) {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [open, setOpen] = useState(false);

  // form state
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // attachment state
  const [attachment, setAttachment] = useState<File | null>(null);

  // submit state
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const waLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const normalizeUrl = (url?: string) => {
    if (!url) return "";
    const trimmed = url.trim();
    if (trimmed.startsWith("http://") || trimmed.startsWith("https://"))
      return trimmed;
    return `https://${trimmed}`;
  };

  const linkedinHref = normalizeUrl(linkedinUrl);

  // AOS init
  useEffect(() => {
    AOS.init({
      duration: 500,
      once: true,
      easing: "ease-out",
      offset: 10,
    });
  }, []);

  // ESC to close modal
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // prevent background scroll when modal open
  useEffect(() => {
    if (!open) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [open]);

  // modal open/close pe AOS refresh
  useEffect(() => {
    AOS.refreshHard();
  }, [open]);

  const resetForm = () => {
    setFullName("");
    setCompany("");
    setPhone("");
    setEmail("");
    setMessage("");
    setAttachment(null);
    setErrorMsg(null);
    setSuccessMsg(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSuccessMsg(null);

    const payload = {
      fullName: fullName.trim(),
      company: company.trim(),
      phone: phone.trim(),
      email: email.trim(),
      message: message.trim(),
    };

    if (!payload.fullName || !payload.phone || !payload.message) {
      setErrorMsg("Full Name, Phone and Requirement/Message are required.");
      return;
    }

    // optional email validation (backend also validates)
    if (payload.email) {
      const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);
      if (!emailOk) {
        setErrorMsg("Please enter a valid email address.");
        return;
      }
    }

    try {
      setLoading(true);

      const fd = new FormData();
      fd.append("fullName", payload.fullName);
      if (payload.company) fd.append("company", payload.company);
      fd.append("phone", payload.phone);
      if (payload.email) fd.append("email", payload.email);
      fd.append("message", payload.message);
      if (attachment) fd.append("attachment", attachment);

      const res = await fetch(`${API}/enquiry`, {
        method: "POST",
        body: fd,
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setErrorMsg(data?.message || "Unable to submit enquiry. Please try again.");
        return;
      }

      setSuccessMsg("Enquiry submitted successfully.");
      setTimeout(() => {
        setOpen(false);
        resetForm();
      }, 700);
    } catch {
      setErrorMsg("Server not reachable. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  // sizing constants
  const ROW_H = "h-12";
  const ICON_W = "w-12";
  const STRIP_W = "w-56";

  return (
    <>
      {/* DESKTOP FLOATING (right side flush, only icons + hover strip) */}
      <div
        className="fixed right-0 top-1/2 z-60 hidden -translate-y-1/2 md:flex"
        data-aos="fade-left"
        data-aos-delay="100"
      >
        <div className="flex flex-col gap-3 pr-2">
          {/* WhatsApp */}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center"
            aria-label="WhatsApp"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <span
              className={`pointer-events-none absolute right-12 top-0 ${ROW_H} ${STRIP_W}
              translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100`}
            >
              <span
                className={`flex ${ROW_H} w-full items-center border border-gray-200 bg-white px-4 shadow-lg`}
              >
                <span className="text-sm font-semibold text-gray-900">WhatsApp</span>
                <span className="ml-2 text-xs text-gray-500">Quick chat</span>
              </span>
            </span>

            <span
              className={`flex ${ROW_H} ${ICON_W} items-center justify-center border border-gray-200 bg-white shadow-lg transition hover:shadow-xl`}
            >
              <img src="/icons/whatsapp.svg" alt="WhatsApp" className="h-7 w-7" />
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href={linkedinHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center"
            aria-label="LinkedIn"
            data-aos="fade-up"
            data-aos-delay="220"
          >
            <span
              className={`pointer-events-none absolute right-12 top-0 ${ROW_H} ${STRIP_W}
              translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100`}
            >
              <span
                className={`flex ${ROW_H} w-full items-center border border-gray-200 bg-white px-4 shadow-lg`}
              >
                <span className="text-sm font-semibold text-gray-900">LinkedIn</span>
                <span className="ml-2 text-xs text-gray-500">Follow updates</span>
              </span>
            </span>

            <span
              className={`flex ${ROW_H} ${ICON_W} items-center justify-center border border-gray-200 bg-white shadow-lg transition hover:shadow-xl`}
            >
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-7 w-7" />
            </span>
          </a>

          {/* Enquiry */}
          <button
            type="button"
            onClick={() => {
              setOpen(true);
              setErrorMsg(null);
              setSuccessMsg(null);
            }}
            className="group relative flex items-center"
            aria-label="Enquiry"
            data-aos="fade-up"
            data-aos-delay="290"
          >
            <span
              className={`pointer-events-none absolute right-12 top-0 ${ROW_H} ${STRIP_W}
              translate-x-2 opacity-0 transition-all duration-200 group-hover:translate-x-0 group-hover:opacity-100`}
            >
              <span
                className={`flex ${ROW_H} w-full items-center border border-[#ee9d54]/30 bg-white px-4 shadow-lg`}
              >
                <span className="text-sm font-semibold text-gray-900">Enquiry</span>
                <span className="ml-2 text-xs text-gray-500">Get a callback</span>
              </span>
            </span>

            <span
              className={`flex ${ROW_H} ${ICON_W} items-center justify-center bg-[#ee9d54] shadow-lg transition hover:shadow-xl`}
            >
              <img src="/icons/sms.svg" alt="Enquiry" className="h-7 w-7" />
            </span>
          </button>
        </div>
      </div>

      {/* MOBILE STICKY BAR (bottom full width) */}
      <div
        className="fixed inset-x-0 bottom-0 z-60 md:hidden"
        data-aos="fade-up"
        data-aos-delay="120"
      >
        <div className="mx-auto max-w-350 border-t border-gray-200 bg-white/95 backdrop-blur">
          <div className="grid grid-cols-3">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-gray-900"
            >
              <img src="/icons/whatsapp.svg" alt="WhatsApp" className="h-5 w-5" />
              WhatsApp
            </a>

            <a
              href={linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-3 text-sm font-semibold text-gray-900"
            >
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="h-5 w-5" />
              LinkedIn
            </a>

            <button
              type="button"
              onClick={() => {
                setOpen(true);
                setErrorMsg(null);
                setSuccessMsg(null);
              }}
              className="flex items-center justify-center gap-2 bg-[#ee9d54] py-3 text-sm font-semibold text-white"
            >
              <img src="/icons/sms.svg" alt="Enquiry" className="h-5 w-5" />
              Enquiry
            </button>
          </div>
        </div>
      </div>

      {/* MODAL FORM */}
      {open && (
        <div className="fixed inset-0 z-9999 overflow-y-auto">
          {/* overlay */}
          <button
            type="button"
            aria-label="Close enquiry form"
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/55"
          />

          {/* modal */}
          <div
            className="
              relative mx-auto my-6 w-[92vw] max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl
              md:absolute md:left-1/2 md:top-1/2 md:my-0 md:-translate-x-1/2 md:-translate-y-1/2
            "
            style={{ maxHeight: "calc(100vh - 3rem)" }}
            data-aos="zoom-in"
            data-aos-duration="250"
          >
            <div className="h-1.5 w-full bg-[#ee9d54]" />

            {/* Header */}
            <div className="flex items-start justify-between gap-4 px-6 py-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ee9d54]">
                  Enquiry
                </p>
                <h3 className="mt-1 text-xl font-bold text-gray-900">
                  Share your requirement
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  We’ll get back to you within 24 hours.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-lg border border-gray-200 p-2 text-gray-700 hover:bg-gray-50"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable body (fix for short height screens) */}
            <div
              className="px-6 pb-6 overflow-y-auto"
              style={{ maxHeight: "calc(100vh - 12rem)" }}
            >
              <form onSubmit={handleSubmit}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="text-xs font-semibold text-gray-700">
                      Full Name
                    </label>
                    <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
                      <Building2 className="h-4 w-4 text-gray-400" />
                      <input
                        required
                        type="text"
                        placeholder="Your name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full text-sm outline-none placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-700">
                      Company
                    </label>
                    <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
                      <Building2 className="h-4 w-4 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Company name"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        className="w-full text-sm outline-none placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-700">
                      Phone
                    </label>
                    <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <input
                        required
                        type="tel"
                        placeholder="+91 XXXXX XXXXX"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full text-sm outline-none placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-gray-700">
                      Email
                    </label>
                    <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <input
                        type="email"
                        placeholder="you@company.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full text-sm outline-none placeholder:text-gray-400"
                      />
                    </div>
                  </div>

                  {/* Attachment */}
                  <div className="sm:col-span-2">
                    <label className="text-xs font-semibold text-gray-700">
                      Attachment (optional)
                    </label>

                    <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
                      <Paperclip className="h-4 w-4 text-gray-400" />

                      <input
                        type="file"
                        className="w-full text-sm outline-none file:mr-3 file:rounded-md file:border-0 file:bg-gray-100 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-gray-800 hover:file:bg-gray-200"
                        accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.webp"
                        onChange={(e) => {
                          const file = e.target.files?.[0] || null;

                          if (file && file.size > 5 * 1024 * 1024) {
                            alert("File size should be less than 5MB.");
                            e.currentTarget.value = "";
                            setAttachment(null);
                            return;
                          }

                          setAttachment(file);
                        }}
                      />
                    </div>

                    {attachment && (
                      <p className="mt-1 text-xs text-gray-600">
                        Selected:{" "}
                        <span className="font-semibold">{attachment.name}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="mt-4">
                  <label className="text-xs font-semibold text-gray-700">
                    Requirement / Message
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Please share brief details of your requirement."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="mt-1 w-full resize-none rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none placeholder:text-gray-400 focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
                  />
                </div>

                {/* messages */}
                {errorMsg ? (
                  <p className="mt-3 text-xs text-red-600">{errorMsg}</p>
                ) : null}
                {successMsg ? (
                  <p className="mt-3 text-xs text-green-600">{successMsg}</p>
                ) : null}

                <div className="mt-5 flex flex-col-reverse gap-3 sm:flex-row sm:items-center sm:justify-end">
                  <button
                    type="button"
                    onClick={() => {
                      setOpen(false);
                      resetForm();
                    }}
                    className="rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-semibold text-gray-800 hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="rounded-lg bg-[#ee9d54] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#ee9d54]"
                  >
                    {loading ? "Submitting..." : "Submit Enquiry"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
