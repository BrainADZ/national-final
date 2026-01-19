/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useState } from "react";
import { Paperclip, Send } from "lucide-react";

export default function ContactFormClient() {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  // form states
  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // attachment
  const [attachment, setAttachment] = useState<File | null>(null);

  // submit state
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);

  const resetForm = () => {
    setFullName("");
    setCompany("");
    setEmail("");
    setPhone("");
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
      email: email.trim(),
      phone: phone.trim(),
      message: message.trim(),
    };

    if (!payload.fullName || !payload.email || !payload.phone || !payload.message) {
      setErrorMsg("Please fill all required fields.");
      return;
    }

    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email);
    if (!emailOk) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      const fd = new FormData();
      fd.append("fullName", payload.fullName);
      if (payload.company) fd.append("company", payload.company);
      fd.append("email", payload.email);
      fd.append("phone", payload.phone);
      fd.append("message", payload.message);
      if (attachment) fd.append("attachment", attachment); // ✅ must match backend: upload.single("attachment")

      const res = await fetch(`${API}/enquiry`, {
        method: "POST",
        body: fd,
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setErrorMsg(data?.message || "Unable to submit enquiry. Please try again.");
        return;
      }

     setSuccessMsg("Thanks! Your enquiry has been submitted.");

      resetForm();
    } catch {
      setErrorMsg("Server not reachable. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="text-xs font-semibold text-gray-700">
            Full Name <span className="text-[#ee9d54]">*</span>
          </label>
          <input
            required
            name="name"
            placeholder="Your name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-700">Company</label>
          <input
            name="company"
            placeholder="Company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-700">
            Email <span className="text-[#ee9d54]">*</span>
          </label>
          <input
            required
            type="email"
            name="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
          />
        </div>

        <div>
          <label className="text-xs font-semibold text-gray-700">
            Phone <span className="text-[#ee9d54]">*</span>
          </label>
          <input
            required
            type="tel"
            name="phone"
            placeholder="+91 XXXXX XXXXX"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="mt-1 w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
          />
        </div>
      </div>

      {/* ✅ Attachment field */}
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
            Selected: <span className="font-semibold">{attachment.name}</span>
          </p>
        )}
      </div>

      <div>
        <label className="text-xs font-semibold text-gray-700">
          Requirement / Message <span className="text-[#ee9d54]">*</span>
        </label>
        <textarea
          required
          name="message"
          rows={5}
          placeholder="Please share brief details of your requirement, including equipment type, material of construction, operating conditions, and delivery timeline."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="mt-1 w-full resize-none rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none placeholder:text-gray-400 focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
        />
      </div>

      {/* status messages */}
      {errorMsg ? <p className="text-xs text-red-600">{errorMsg}</p> : null}
      {successMsg ? <p className="text-xs text-green-600">{successMsg}</p> : null}

      <button
        type="submit"
        disabled={loading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#ee9d54] px-5 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#ee9d54]"
      >
        {loading ? "Submitting..." : "Submit Enquiry"} <Send className="h-4 w-4" />
      </button>

      <p className="text-xs text-gray-500">
        By submitting, you agree to be contacted regarding your enquiry. We do not spam.
      </p>
    </form>
  );
}
