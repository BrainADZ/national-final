/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useRef, useState } from "react";
import {
  ArrowRight,
  Building2,
  CheckCircle2,
  ClipboardList,
  Clock,
  Factory,
  Gauge,
  Instagram,
  Linkedin,
  Mail,
  Paperclip,
  Phone,
  Send,
  ShieldCheck,
  User,
  Youtube,
} from "lucide-react";

const PRODUCTS = [
  {
    title: "Dowtherm Boiler",
    image: "/product/boiler.jpeg",
    description:
      "Thermal oil heating systems for stable, uniform process heating with precise temperature control and reliable continuous operation.",
  },
  {
    title: "Surge Tanks",
    image: "/product/surgeTank.jpeg",
    description:
      "Surge tanks built to stabilize pressure and flow, reduce water hammer, protect pumps, and improve plant reliability.",
  },
  {
    title: "Silos & Storage Tanks",
    image: "/product/soilTank.jpeg",
    description:
      "Durable silos and storage tanks for liquids and bulk materials with custom access, venting, filling, and discharge connections.",
  },
  {
    title: "Immersion Coil / Jacketed Vessel",
    image: "/product/Final_half_coil_vessel.jpeg",
    description:
      "Heating and cooling vessels designed for mixing, batching, holding, and process operations with controlled temperature performance.",
  },
];

const trustPoints = [
  "35+ Years of Fabrication Excellence",
  "Custom Engineered to Your Specifications",
  "Certified Materials & Rigorous QA/QC",
  "Global Industrial Project Support",
];

const capabilities = [
  {
    icon: Factory,
    title: "Integrated Fabrication Capability",
    text: "Complete fabrication of pressure vessels, tanks, process equipment, structural assemblies, and custom-engineered systems under one roof.",
  },
  {
    icon: ShieldCheck,
    title: "Rigorous Quality Assurance",
    text: "Certified materials, welding procedures, dimensional verification, inspection records, and stage-wise quality control throughout fabrication.",
  },
  {
    icon: Clock,
    title: "Committed Project Delivery",
    text: "Structured project planning, manufacturing discipline, and proactive coordination to support project timelines.",
  },
];

const faqs = [
  {
    question: "Can you fabricate equipment as per our drawing?",
    answer:
      "Yes. NESF can review client drawings, MOC, dimensions, duty conditions, and inspection requirements to prepare a suitable fabrication scope.",
  },
  {
    question: "Which products can we enquire for from this page?",
    answer:
      "You can enquire for dowtherm boilers, surge tanks, silos, storage tanks, jacketed vessels, and custom fabrication requirements.",
  },
  {
    question: "Do you support custom material and sizes?",
    answer:
      "Yes. Material, thickness, nozzle layout, supports, coating, and dimensions can be planned around the application and project requirements.",
  },
  {
    question: "How fast will your team respond?",
    answer:
      "Our team will review your enquiry and contact you to discuss the most suitable fabrication approach for your project.",
  },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/national-engineers-steel-fabricators/",
    icon: Linkedin,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/nationalengrs",
    icon: Instagram,
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@National_Engineers",
    icon: Youtube,
  },
];

type LeadFormProps = {
  title: string;
  subtitle: string;
  source: string;
  compact?: boolean;
};

function LeadForm({ title, subtitle, source, compact = false }: LeadFormProps) {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const [fullName, setFullName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [productInterest, setProductInterest] = useState(PRODUCTS[0].title);
  const [technicalSpecifications, setTechnicalSpecifications] = useState("");
  const [operatingParameters, setOperatingParameters] = useState("");
  const [drawingAvailability, setDrawingAvailability] = useState("Drawings available");
  const [drawingFile, setDrawingFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const resetForm = () => {
    setFullName("");
    setCompany("");
    setPhone("");
    setEmail("");
    setProductInterest(PRODUCTS[0].title);
    setTechnicalSpecifications("");
    setOperatingParameters("");
    setDrawingAvailability("Drawings available");
    setDrawingFile(null);
    setErrorMsg(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setErrorMsg(null);

    if (file && file.size > 10 * 1024 * 1024) {
      setDrawingFile(null);
      event.target.value = "";
      setErrorMsg("Drawing file must be 10 MB or smaller.");
      return;
    }

    setDrawingFile(file);
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMsg(null);

    const payload = {
      fullName: fullName.trim(),
      company: company.trim(),
      phone: phone.trim(),
      email: email.trim(),
      productInterest: productInterest.trim(),
      technicalSpecifications: technicalSpecifications.trim(),
      operatingParameters: operatingParameters.trim(),
      drawingAvailability: drawingAvailability.trim(),
    };

    if (!API) {
      setErrorMsg("API URL is missing. Please configure NEXT_PUBLIC_API_BASE_URL.");
      return;
    }

    if (
      !payload.fullName ||
      !payload.phone ||
      !payload.productInterest ||
      !payload.technicalSpecifications
    ) {
      setErrorMsg("Please fill name, phone, product interest, and technical specifications.");
      return;
    }

    if (payload.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.email)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      const fd = new FormData();
      fd.append("fullName", payload.fullName);
      if (payload.company) fd.append("company", payload.company);
      fd.append("phone", payload.phone);
      if (payload.email) fd.append("email", payload.email);
      fd.append("productInterest", payload.productInterest);
      fd.append("technicalSpecifications", payload.technicalSpecifications);
      if (payload.operatingParameters) fd.append("operatingParameters", payload.operatingParameters);
      fd.append("drawingAvailability", payload.drawingAvailability);
      fd.append("source", source);
      if (typeof window !== "undefined") fd.append("pageUrl", window.location.href);
      if (drawingFile) fd.append("drawing", drawingFile);

      const res = await fetch(`${API}/ads-enquiry`, {
        method: "POST",
        body: fd,
      });

      const data = await res.json().catch(() => null);

      if (!res.ok) {
        setErrorMsg(data?.message || "Unable to submit enquiry. Please try again.");
        return;
      }

      resetForm();
      router.push("/industrial-fabrication/thank-you");
    } catch {
      setErrorMsg("Server not reachable. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`rounded-lg border border-white/20 bg-white p-5 shadow-2xl ${
        compact ? "sm:p-6" : "sm:p-7"
      }`}
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ee9d54]">
          QUICK INQUIRY
        </p>
        <h2 className="mt-2 text-2xl font-bold text-gray-950">{title}</h2>
        <p className="mt-2 text-sm leading-6 text-gray-600">{subtitle}</p>
      </div>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-semibold text-gray-700">Full Name</span>
          <div className="mt-1 flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2.5 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
            <User className="h-4 w-4 text-gray-400" />
            <input
              required
              value={fullName}
              onChange={(event) => setFullName(event.target.value)}
              placeholder="Your name"
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>
        </label>

        <label className="block">
          <span className="text-xs font-semibold text-gray-700">Phone</span>
          <div className="mt-1 flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2.5 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
            <Phone className="h-4 w-4 text-gray-400" />
            <input
              required
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="+91 XXXXX XXXXX"
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>
        </label>

        <label className="block">
          <span className="text-xs font-semibold text-gray-700">Company</span>
          <div className="mt-1 flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2.5 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
            <Building2 className="h-4 w-4 text-gray-400" />
            <input
              value={company}
              onChange={(event) => setCompany(event.target.value)}
              placeholder="Company name"
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>
        </label>

        <label className="block">
          <span className="text-xs font-semibold text-gray-700">Email</span>
          <div className="mt-1 flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2.5 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
            <Mail className="h-4 w-4 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@company.com"
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>
        </label>
      </div>

      <label className="mt-3 block">
        <span className="text-xs font-semibold text-gray-700">Product / Equipment Interest</span>
        <select
          value={productInterest}
          onChange={(event) => setProductInterest(event.target.value)}
          className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
        >
          {PRODUCTS.map((item) => (
            <option key={item.title} value={item.title}>
              {item.title}
            </option>
          ))}
          <option value="Pressure Vessel">Pressure Vessel</option>
          <option value="Storage Tank">Storage Tank</option>
          <option value="Custom Fabrication Requirement">Custom Fabrication Requirement</option>
        </select>
      </label>

      <label className="mt-3 block">
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-gray-700">
          <ClipboardList className="h-4 w-4 text-gray-400" />
          Technical Specifications
        </span>
        <textarea
          required
          rows={compact ? 3 : 4}
          value={technicalSpecifications}
          onChange={(event) => setTechnicalSpecifications(event.target.value)}
          placeholder="Share MOC, capacity, dimensions, thickness, quantity, standards, inspection needs, or site constraints."
          className="mt-1 w-full resize-none rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none placeholder:text-gray-400 focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
        />
      </label>

      <label className="mt-3 block">
        <span className="inline-flex items-center gap-2 text-xs font-semibold text-gray-700">
          <Gauge className="h-4 w-4 text-gray-400" />
          Operating Parameters
        </span>
        <textarea
          rows={compact ? 2 : 3}
          value={operatingParameters}
          onChange={(event) => setOperatingParameters(event.target.value)}
          placeholder="Pressure, temperature, flow rate, media handled, duty cycle, or other operating conditions."
          className="mt-1 w-full resize-none rounded-md border border-gray-300 px-3 py-2.5 text-sm outline-none placeholder:text-gray-400 focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
        />
      </label>

      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        <label className="block">
          <span className="text-xs font-semibold text-gray-700">Drawing Status</span>
          <select
            value={drawingAvailability}
            onChange={(event) => setDrawingAvailability(event.target.value)}
            className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-[#ee9d54] focus:ring-1 focus:ring-[#ee9d54]"
          >
            <option value="Drawings available">Drawings available</option>
            <option value="Drawings not available">Drawings not available</option>
            <option value="Will share later">Will share later</option>
          </select>
        </label>

        <label className="block">
          <span className="text-xs font-semibold text-gray-700">Upload Drawing</span>
          <div className="mt-1 flex items-center gap-2 rounded-md border border-gray-300 px-3 py-2.5 focus-within:border-[#ee9d54] focus-within:ring-1 focus-within:ring-[#ee9d54]">
            <Paperclip className="h-4 w-4 text-gray-400" />
            <input
              ref={fileInputRef}
              type="file"
              accept=".pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.webp"
              onChange={handleFileChange}
              className="w-full text-xs text-gray-600 file:mr-3 file:rounded-md file:border-0 file:bg-gray-100 file:px-3 file:py-1.5 file:text-xs file:font-semibold file:text-gray-700 hover:file:bg-orange-50"
            />
          </div>
        </label>
      </div>

      {drawingFile ? (
        <p className="mt-2 text-xs font-semibold text-gray-600">
          Attached: {drawingFile.name}
        </p>
      ) : (
        <p className="mt-2 text-xs text-gray-500">
          Accepted: PDF, DOC, DOCX, XLS, XLSX, PNG, JPG, WEBP up to 10 MB.
        </p>
      )}

      {errorMsg ? (
        <p className="mt-3 rounded-md bg-red-50 px-3 py-2 text-xs font-semibold text-red-700">
          {errorMsg}
        </p>
      ) : null}

      <button
        type="submit"
        disabled={loading}
        className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#ee9d54] px-5 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition hover:bg-[#d88c45] disabled:cursor-not-allowed disabled:opacity-70"
      >
        {loading ? "Submitting..." : "Submit Requirement"}
        <Send className="h-4 w-4" />
      </button>

      <p className="mt-3 text-center text-xs leading-5 text-gray-500">
        Your enquiry goes directly to the NESF engineering team for review.
      </p>
    </form>
  );
}

export default function GoogleAdsLandingClient() {
  return (
    <main className="bg-white text-gray-950">
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
        <div className="mx-auto flex max-w-425 flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <Link href="/industrial-fabrication" className="flex items-center gap-3">
            <img src="/logo222.png" alt="National Engineers" className="h-12 w-auto" />
            <span className="sr-only">National Engineers & Steel Fabricators</span>
          </Link>

          <div className="flex flex-wrap gap-3 text-sm font-semibold">
            <a
              href="tel:+919574011132"
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 px-4 py-2 text-gray-900 transition hover:border-[#ee9d54] hover:text-[#ee9d54]"
            >
              <Phone className="h-4 w-4" />
              +91 95740 11132
            </a>
            <a
              href="#lead-form"
              className="inline-flex items-center gap-2 rounded-full bg-[#ee9d54] px-4 py-2 text-white transition hover:bg-[#d88c45]"
            >
              Get Quote
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </header>

      <section className="relative isolate min-h-[calc(100vh-81px)] overflow-hidden bg-black">
        <img
          src="/DSCN2685.jpg"
          alt="Industrial fabrication facility"
          className="absolute inset-0 h-full w-full object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-linear-to-r from-black via-black/80 to-black/45" />
        <div className="absolute inset-0 bg-[#ee9d54]/10 mix-blend-overlay" />

        <div className="relative mx-auto max-w-425 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 py-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(380px,0.95fr)] lg:items-center lg:py-18">
            <div className="max-w-3xl text-white">
              <p className="text-xs font-semibold uppercase tracking-[0.28em] text-[#ee9d54]">
                Industrial Fabrication - Worldwide
              </p>
              <h1 className="mt-5 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                Get Custom Industrial Equipment Fabricated to Your Requirement
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-white/82 sm:text-lg">
                Pressure vessels, storage tanks, boilers, surge tanks, silos, jacketed vessels, and custom fabricated assemblies built with practical engineering and disciplined quality control.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {trustPoints.map((point) => (
                  <div key={point} className="flex items-start gap-3 rounded-md border border-white/15 bg-white/8 px-4 py-3 backdrop-blur">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#ee9d54]" />
                    <span className="text-sm leading-6 text-white/88">{point}</span>
                  </div>
                ))}
              </div>

              <div className="mt-9 flex flex-wrap gap-3">
                <a
                  href="#lead-form"
                  className="inline-flex items-center justify-center gap-2 rounded-md bg-[#ee9d54] px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-[#d88c45]"
                >
                  Request Quote
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/919574011132?text=Hi%20National%20Engineers%2C%20I%20need%20a%20quotation%20for%20industrial%20fabrication."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-md border border-white/25 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:border-white hover:bg-white hover:text-black"
                >
                  WhatsApp Now
                </a>
              </div>
            </div>

            <div id="lead-form" className="scroll-mt-8">
              <LeadForm
                title="Discuss Your Project Requirements"
                subtitle="Submit your project requirements, and our engineering team will evaluate the specifications and provide a tailored fabrication proposal. Share technical specifications, operating parameters, and available drawings."
                source="Hero Form"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-100 bg-white">
        <div className="mx-auto grid max-w-425 gap-4 px-4 py-8 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {[
            ["35+", " Years of Fabrication Excellence"],
            ["Worldwide", "Project supply and support"],
            // ["Custom", "Build as per drawing"],
            ["QA/QC", "Inspection-led manufacturing"],
          ].map(([value, label]) => (
            <div key={value} className="border-l-2 border-[#ee9d54] pl-4">
              <p className="text-2xl font-bold text-gray-950">{value}</p>
              <p className="mt-1 text-sm text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="mx-auto grid max-w-425 gap-9 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-100 shadow-sm">
            <img
              src="/Pho 0042.jpg"
              alt="National Engineers fabrication work"
              className="h-82 w-full object-cover sm:h-105"
            />
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ee9d54]">
              About NESF
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-950 sm:text-4xl">
              Custom Process Equipment Built with Engineering Precision
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              National Engineers & Steel Fabricators manufactures process equipment, tanks, vessels, heating systems, storage systems, and custom fabricated assemblies for demanding industrial applications.
            </p>
            <p className="mt-3 text-sm leading-7 text-gray-600 sm:text-base">
              The team works around client drawings, duty conditions, materials, inspection needs, and site requirements, so every quotation starts with the real application instead of a generic catalogue item.
            </p>

            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                "Engineered to Client Requirements",
                "Certified Materials & QA/QC",
                "Custom Design & Fabrication",
                "35+ Years of Industry Experience"
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-md border border-gray-200 bg-gray-50 px-4 py-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-[#ee9d54]" />
                  <span className="text-sm font-semibold text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="mx-auto max-w-425">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ee9d54]">
              Featured Equipment
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-950 sm:text-4xl">
              Custom Equipment for Industrial Applications
            </h2>
            <p className="mt-3 text-sm leading-7 text-gray-600">
              Explore our range of custom-fabricated process equipment engineered for demanding industrial applications.
            </p>
          </div>

          <div className="mt-9 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PRODUCTS.map((product) => (
              <article
                key={product.title}
                className="group flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-84 w-full bg-gray-100 object-contain p-3 transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/45 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h3 className="text-lg font-bold text-gray-950">{product.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-gray-600">{product.description}</p>
                  <a
                    href="#lead-form"
                    className="mt-auto inline-flex items-center gap-2 pt-5 text-sm font-semibold text-[#d88942]"
                  >
                    Enquire for this Product
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="mx-auto max-w-425">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ee9d54]">
              THE NESF ADVANTAGE
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-950 sm:text-4xl">
              Reliable Fabrication Solutions for Critical Industrial Applications
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-600">
              Every project begins with a thorough understanding of your process requirements, operating conditions, material specifications, inspection standards, and site constraints. This ensures equipment that performs reliably throughout its service life.
            </p>
          </div>

          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {capabilities.map((item) => (
              <div key={item.title} className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-gray-950 text-[#ee9d54]">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-lg font-bold text-gray-950">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
        <div className="mx-auto grid max-w-425 gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ee9d54]">
              FAQs
            </p>
            <h2 className="mt-3 text-3xl font-bold text-gray-950 sm:text-4xl">
              Everything You Need to Know Before Requesting A Quote
            </h2>

            <div className="mt-7 divide-y divide-gray-200">
              {faqs.map((faq) => (
                <details key={faq.question} className="group py-4">
                  <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-bold text-gray-950">
                    {faq.question}
                    <span className="mt-1 text-[#ee9d54] transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-gray-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>

          <div className="scroll-mt-8" id="faq-enquiry">
            <LeadForm
              title="Discuss Your Project Requirements"
              subtitle="Submit your project requirements, and our engineering team will evaluate the specifications and provide a tailored fabrication proposal. Share technical specifications, operating parameters, and available drawings."
              source="FAQ Section Form"
              compact
            />
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 bg-white px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-425">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <img src="/logo222.png" alt="National Engineers" className="h-12 w-auto" />
              <p className="mt-3 max-w-xl text-sm leading-6 text-gray-600">
                National Engineers & Steel Fabricators - industrial fabrication, tanks, vessels, process equipment, and custom manufacturing support.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 text-gray-700 transition hover:border-[#ee9d54] hover:bg-[#ee9d54] hover:text-white"
                >
                  <item.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="mt-7 flex flex-col gap-3 border-t border-gray-200 pt-5 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
            <p>
              Copyright © {new Date().getFullYear()} National Engineers & Steel Fabricators. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:+919574011132" className="font-semibold text-gray-800 hover:text-[#ee9d54]">
                Call Sales
              </a>
              <a href="#lead-form" className="font-semibold text-gray-800 hover:text-[#ee9d54]">
                Submit Enquiry
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
