"use client";

import { useState } from "react";
import { Building2, Mail, Paperclip, Phone } from "lucide-react";

type ProductEnquiryFormProps = {
  title?: string;
  subtitle?: string;
  productName?: string;
  className?: string;
  buttonText?: string;
};

export default function ProductEnquiryForm({
  title = "Request a Quote",
  subtitle = "Share your requirement and our team will get back to you.",
  productName = "",
  className = "",
  buttonText = "Submit Enquiry",
}: ProductEnquiryFormProps) {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(
    productName ? `I am interested in ${productName}. Please share more details.` : ""
  );
  const [attachment, setAttachment] = useState<File | null>(null);

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const resetForm = () => {
    setFullName("");
    setCompany("");
    setPhone("");
    setEmail("");
    setMessage(
      productName ? `I am interested in ${productName}. Please share more details.` : ""
    );
    setAttachment(null);
    setErrorMsg(null);
    setSuccessMsg(null);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      resetForm();
    } catch {
      setErrorMsg("Server not reachable. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8 ${className}`}
    >
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#f0a14a]">
          Enquiry Form
        </p>
        <h3 className="mt-2 text-2xl font-bold text-[#0f223d]">{title}</h3>
        <p className="mt-2 text-sm leading-7 text-[#5b6472]">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="text-xs font-semibold text-[#0f223d]">
              Full Name
            </label>
            <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5 focus-within:border-[#f0a14a] focus-within:ring-1 focus-within:ring-[#f0a14a]">
              <Building2 className="h-4 w-4 text-gray-400" />
              <input
                required
                type="text"
                placeholder="Your name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-[#0f223d]">
              Company
            </label>
            <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5 focus-within:border-[#f0a14a] focus-within:ring-1 focus-within:ring-[#f0a14a]">
              <Building2 className="h-4 w-4 text-gray-400" />
              <input
                type="text"
                placeholder="Company name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-[#0f223d]">
              Phone
            </label>
            <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5 focus-within:border-[#f0a14a] focus-within:ring-1 focus-within:ring-[#f0a14a]">
              <Phone className="h-4 w-4 text-gray-400" />
              <input
                required
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          <div>
            <label className="text-xs font-semibold text-[#0f223d]">
              Email
            </label>
            <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5 focus-within:border-[#f0a14a] focus-within:ring-1 focus-within:ring-[#f0a14a]">
              <Mail className="h-4 w-4 text-gray-400" />
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label className="text-xs font-semibold text-[#0f223d]">
              Attachment (optional)
            </label>

            <div className="mt-1 flex items-center gap-2 rounded-lg border border-gray-300 px-3 py-2.5 focus-within:border-[#f0a14a] focus-within:ring-1 focus-within:ring-[#f0a14a]">
              <Paperclip className="h-4 w-4 text-gray-400" />
              <input
                type="file"
                className="w-full text-sm outline-none file:mr-3 file:rounded-md file:border-0 file:bg-gray-100 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-gray-800 hover:file:bg-gray-200"
                accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.webp"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;

                  if (file && file.size > 5 * 1024 * 1024) {
                    setErrorMsg("File size should be less than 5MB.");
                    e.currentTarget.value = "";
                    setAttachment(null);
                    return;
                  }

                  setAttachment(file);
                  setErrorMsg(null);
                }}
              />
            </div>

            {attachment && (
              <p className="mt-1 text-xs text-[#5b6472]">
                Selected: <span className="font-semibold">{attachment.name}</span>
              </p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <label className="text-xs font-semibold text-[#0f223d]">
            Requirement / Message
          </label>
          <textarea
            required
            rows={5}
            placeholder="Please share brief details of your requirement."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="mt-1 w-full resize-none rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none placeholder:text-gray-400 focus:border-[#f0a14a] focus:ring-1 focus:ring-[#f0a14a]"
          />
        </div>

        {errorMsg ? (
          <p className="mt-3 text-xs text-red-600">{errorMsg}</p>
        ) : null}

        {successMsg ? (
          <p className="mt-3 text-xs text-green-600">{successMsg}</p>
        ) : null}

        <div className="mt-6 flex flex-wrap gap-3">
          <button
            type="submit"
            disabled={loading}
            className="rounded-md bg-[#f0a14a] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#de8f38] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {loading ? "Submitting..." : buttonText}
          </button>

          <button
            type="button"
            onClick={resetForm}
            className="rounded-md border border-gray-300 px-5 py-3 text-sm font-semibold text-[#0f223d] transition hover:bg-gray-50"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}