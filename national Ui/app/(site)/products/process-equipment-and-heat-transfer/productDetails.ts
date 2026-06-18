import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import type { ProductDetail } from "../pressure-vessels-and-storage/productDetails";

export const CATEGORY_NAME = "Process Equipment & Heat Transfer";

export const processEquipmentNav = [
  {
    label: "Condensers & Water Condensers",
    href: "/products/condensers-water-condensers",
  },
  {
    label: "Heat Exchanger Shells / Columns",
    href: "/products/heat-exchanger-shells-columns",
  },
  {
    label: "Process Skids & Packages",
    href: "/products/process-skids-packages",
  },
  {
    label: "Special Purpose Process Vessels",
    href: "/products/special-purpose-process-vessels",
  },
  {
    label: "Chemical Process Equipment (Custom)",
    href: "/products/custom-chemical-process-equipment",
  },
];

export const productDetails = {
  "condensers-water-condensers": {
    title: "Condensers & Water Condensers",
    headline: "Reliable Condensation and Cooling for Process Plants",
    description:
      "Industrial condensers and water condensers engineered for heat duty, corrosion resistance, serviceability, and reliable continuous-duty performance.",
    pagePath:
      "/products/condensers-water-condensers",
    image: "/product/25.png",
    imageAlt:
      "Industrial water condenser fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Application", value: "Process condensation and cooling" },
      { label: "Build Scope", value: "Shells, headers, nozzles, supports" },
      { label: "Materials", value: "Stainless, carbon, or alloy steel" },
      { label: "Documentation", value: "Drawings, test reports, traceability" },
    ],
    overview: [
      "NESF manufactures condensers and water condensers for industrial utilities and process services where dependable heat removal and stable operation are critical.",
      "Our builds focus on robust construction, serviceability, and consistent thermal performance across continuous-duty plant conditions.",
    ],
    sections: [
      {
        title: "What We Fabricate",
        bullets: [
          "Water condensers for process cooling and utility circuits.",
          "Condenser shells, headers, nozzles, and support structures.",
          "Custom inlet and outlet arrangements to match plant layouts.",
          "Skid-ready assemblies as required.",
        ],
      },
      {
        title: "Materials & Build Options",
        bullets: [
          "Stainless steel, carbon steel, or alloy steel as per service requirements.",
          "Corrosion allowance and lining or coating options where required.",
          "Fabrication optimized for ease of inspection and maintenance.",
        ],
      },
      {
        title: "Quality, Testing & Standards",
        body: [
          "Fabrication and inspection can be aligned to applicable project requirements.",
        ],
        bullets: [
          "Pressure and strength testing with leak checks.",
          "NDT as specified, including UT or RT where required.",
          "ASME BPVC-aligned practices for pressure equipment where applicable.",
        ],
      },
      {
        title: "Typical Applications",
        body: [
          "Chemical, pharmaceutical, water treatment, utility, and process industries requiring stable condensation and cooling duty.",
        ],
      },
      {
        title: "What You Receive",
        bullets: [
          "GA drawings as agreed.",
          "Fabrication documentation, test reports, and dispatch packing list.",
          "Traceability and inspection records as per project requirements.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Duty and service details.",
          "Operating pressure and temperature.",
          "Material preference and corrosion requirements.",
          "Connection sizes and plant layout requirements.",
        ],
      },
    ],
    note:
      "Share your duty and service details, operating pressure and temperature, material preference, and connection sizes. Our team will propose a fabrication-ready solution.",
    enquiry: {
      title: "Request a quote for Condensers & Water Condensers",
      subtitle:
        "Share your heat duty, service conditions, material preference, connection sizes, and testing requirements.",
      productName: "Condensers & Water Condensers",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Condensers & Water Condensers | Industrial Fabrication by NESF",
      description:
        "Industrial fabrication of condensers and water condensers for process plants, engineered for heat duty, corrosion resistance, and reliable performance with strict QA, testing, and documentation.",
      keywords: [
        "industrial condenser manufacturer",
        "water condenser manufacturer",
        "process condenser fabrication",
        "heat transfer equipment manufacturer",
        "condenser fabrication india",
      ],
    },
  },
  "heat-exchanger-shells-columns": {
    title: "Heat Exchanger Shells & Columns",
    headline: "Precision-Fabricated Shells and Columns for Industrial Projects",
    description:
      "Precision-fabricated heat exchanger shells and process columns with controlled fit-up, nozzle orientation accuracy, documented inspection, and project-ready deliverables.",
    pagePath:
      "/products/heat-exchanger-shells-columns",
    image: "/product/23.jpeg",
    imageAlt:
      "Heat exchanger shell and process column fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Build Scope", value: "Shells, channels, heads, columns" },
      { label: "Accuracy", value: "Fit-up and nozzle orientation checks" },
      { label: "Inspection", value: "NDT, pressure, and leak tests" },
      { label: "Deliverables", value: "Inspection and documentation pack" },
    ],
    overview: [
      "NESF fabricates heat exchanger shells and process columns for demanding industrial environments.",
      "We focus on dimensional accuracy, weld integrity, nozzle orientation accuracy, and inspection readiness so your equipment integrates smoothly with piping, instrumentation, and structural supports.",
    ],
    sections: [
      {
        title: "Scope of Fabrication",
        bullets: [
          "Shells, channels, covers, and heads as per design.",
          "Small to heavy-duty process columns with platforms and supports when required.",
          "Nozzles, manways, lifting lugs, supports, and saddles.",
          "Internals handling support as applicable to the project scope.",
        ],
      },
      {
        title: "Engineering & Compliance",
        body: [
          "Fabrication is aligned to client specifications and applicable project requirements.",
        ],
        bullets: [
          "TEMA expectations for shell-and-tube mechanical construction where applicable to the exchanger shell scope.",
          "ASME BPVC-aligned pressure equipment practices where specified by the client.",
          "Project-specific drawings, inspection plans, and acceptance criteria.",
        ],
      },
      {
        title: "QA / Inspection Readiness",
        bullets: [
          "Controlled welding and fit-up practices.",
          "NDT as specified, including UT or RT where required.",
          "Pressure and leak tests where applicable.",
          "Dimensional checks and nozzle orientation verification.",
          "Inspection records and documentation pack.",
        ],
      },
      {
        title: "Typical Industries",
        body: [
          "Chemical processing, petroleum-related processing, utilities, specialty manufacturing, and custom industrial projects.",
        ],
      },
      {
        title: "What You Receive",
        bullets: [
          "Fabricated exchanger shells or process columns as per agreed scope.",
          "Fit-up, dimensional, and nozzle orientation inspection records.",
          "NDT and pressure or leak test reports where applicable.",
          "Project-ready documentation aligned to the agreed format.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Client drawing, datasheet, or basic process data and layout.",
          "Material of construction and corrosion allowance.",
          "Design and operating pressure and temperature.",
          "Inspection plan, NDT, testing, and documentation requirements.",
          "Platform, support, internals handling, and delivery requirements.",
        ],
      },
    ],
    note:
      "Send your drawing or specification, or share your basic process data and layout. NESF can fabricate to your inspection plan and documentation format.",
    enquiry: {
      title: "Request a quote for Heat Exchanger Shells & Columns",
      subtitle:
        "Share your drawings, process data, material requirements, inspection plan, and documentation format.",
      productName: "Heat Exchanger Shells & Columns",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Heat Exchanger Shells & Columns | Heavy Fabrication by NESF",
      description:
        "Precision-fabricated exchanger shells and columns with documented inspection, fit-up accuracy, and project-ready deliverables.",
      keywords: [
        "heat exchanger shell manufacturer",
        "process column fabrication",
        "heavy fabrication india",
        "exchanger shell fabrication",
        "industrial process column manufacturer",
      ],
    },
  },
  "process-skids-packages": {
    title: "Process Skids & Packages",
    headline: "Modular Skid Packages Built for Faster Site Integration",
    description:
      "Skid-mounted process packages fabricated for fast installation with equipment mounting, piping provisions, structural supports, testing, and documentation included as per scope.",
    pagePath:
      "/products/process-skids-packages",
    image: "/product/22.jpeg",
    imageAlt:
      "Skid-mounted process package fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Build Scope", value: "Frames, supports, piping provisions" },
      { label: "Integration", value: "Modular and site-ready assemblies" },
      { label: "QA", value: "Alignment, NDT, and leak testing" },
      { label: "Dispatch", value: "Packing and transport preparation" },
    ],
    overview: [
      "NESF builds process skids and modular packages that reduce site work, improve installation speed, and enhance overall project control.",
      "Our skid fabrication is planned to ensure accessibility, maintainability, and stable structural rigidity during transport and operation.",
    ],
    sections: [
      {
        title: "What's Included",
        body: ["The final scope is aligned to the client's project requirements."],
        bullets: [
          "Skid base frames, equipment supports, and lifting points.",
          "Piping routing and mounting provisions.",
          "Modular assemblies designed for easier site integration.",
          "Packaging and dispatch preparation for safe transport.",
        ],
      },
      {
        title: "Why Skid Packages Work",
        bullets: [
          "Faster on-site installation.",
          "Better quality control through shop fabrication.",
          "Reduced rework and improved repeatability.",
          "Easier testing and inspection before dispatch.",
        ],
      },
      {
        title: "Fabrication & QA",
        bullets: [
          "Welded structural base with controlled fit-up.",
          "Dimensional and alignment checks.",
          "NDT as required with pressure and leak testing as specified.",
          "Inspection reports, test reports, and documentation pack.",
          "BOM and packing list where required.",
        ],
      },
      {
        title: "Typical Applications",
        body: [
          "Chemical process units, water treatment packages, utility skids, dosing systems, filtration packages, and plant retrofits.",
        ],
      },
      {
        title: "What You Receive",
        bullets: [
          "Fabricated skid base and equipment mounting provisions as agreed.",
          "Integrated modular assemblies aligned to the project scope.",
          "Inspection and test reports.",
          "BOM, packing list, and dispatch preparation where required.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Skid GA and overall dimensional constraints.",
          "Equipment list, weights, and mounting requirements.",
          "Nozzle list and piping interface details.",
          "Site access, lifting, transport, and installation constraints.",
          "Testing, inspection, and documentation requirements.",
        ],
      },
    ],
    note:
      "Share your skid GA, nozzle list, equipment list, and site constraints. NESF will respond with a clear scope, deliverables, and fabrication plan.",
    enquiry: {
      title: "Request a quote for Process Skids & Packages",
      subtitle:
        "Share your skid GA, equipment list, nozzle details, site constraints, and testing requirements.",
      productName: "Process Skids & Packages",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Process Skids & Packages | Modular Skid Fabrication by NESF",
      description:
        "Skid-mounted process packages fabricated for fast installation with piping, equipment mounting, supports, testing, and documentation included as per scope.",
      keywords: [
        "process skid manufacturer",
        "modular skid fabrication",
        "skid mounted process package",
        "industrial process skid",
        "utility skid fabrication india",
      ],
    },
  },
  "special-purpose-process-vessels": {
    title: "Special Purpose Process Vessels",
    headline: "Duty-Specific Process Vessels Built for Unique Plant Needs",
    description:
      "Industrial process vessels fabricated for specific duties with robust construction, inspection-ready welding, and project documentation.",
    pagePath:
      "/products/special-purpose-process-vessels",
    image: "/product/24.jpeg",
    imageAlt:
      "Special purpose industrial process vessel fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Build Basis", value: "Custom and duty-specific requirements" },
      { label: "Materials", value: "Stainless, carbon, or alloy steel" },
      { label: "Inspection", value: "NDT and testing per inspection plan" },
      { label: "Deliverables", value: "Traceability and test documentation" },
    ],
    overview: [
      "NESF fabricates special-purpose process vessels for applications where standard vessels do not fit operational needs.",
      "We support build requirements focused on duty-specific design intent, reliability, and safe long-term operation.",
    ],
    sections: [
      {
        title: "Vessel Types",
        body: ["Vessel configurations are customized around process duty and project requirements."],
        bullets: [
          "Mixing, holding, and process vessels as per requirement.",
          "Vessels with special nozzles, access, or mounting constraints.",
          "Application-specific reinforcement and support arrangements.",
          "Assemblies prepared for insulation, cladding, or external accessories.",
        ],
      },
      {
        title: "Materials & Build Configuration",
        bullets: [
          "Stainless steel, carbon steel, or alloy steel options as per service.",
          "Corrosion allowance and lining or coating provisions where required.",
          "Fabrication features designed for inspection and maintenance access.",
        ],
      },
      {
        title: "Standards & Inspection",
        body: [
          "Fabrication, testing, and documentation are aligned to the client specification and agreed inspection plan.",
        ],
        bullets: [
          "Pressure equipment compliance aligned to ASME BPVC where required.",
          "NDT as specified, including UT or RT where applicable.",
          "Pressure, strength, and leak testing as required.",
          "Dimensional, nozzle orientation, and final inspection checks.",
        ],
      },
      {
        title: "Typical Applications",
        body: [
          "Custom process duties across chemical processing, utilities, water treatment, specialty manufacturing, and industrial plant projects.",
        ],
      },
      {
        title: "Deliverables",
        bullets: [
          "Fabrication documentation as specified.",
          "Inspection and test reports.",
          "Material and fabrication traceability records.",
          "Packing and dispatch readiness for safe transportation.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Process duty and operating conditions.",
          "Material preference and corrosion requirements.",
          "Nozzle schedule, access, and mounting constraints.",
          "Inspection, testing, and documentation requirements.",
          "Insulation, cladding, accessories, and transport requirements.",
        ],
      },
    ],
    note:
      "Send your process duty, operating conditions, material preference, and nozzle schedule. NESF will propose a fabrication-ready plan and quotation basis.",
    enquiry: {
      title: "Request a quote for a Special Purpose Process Vessel",
      subtitle:
        "Share your process duty, operating conditions, material preference, nozzle schedule, and inspection requirements.",
      productName: "Special Purpose Process Vessel",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Special Purpose Process Vessels | Custom Fabrication by NESF",
      description:
        "Industrial process vessels fabricated for specific duty with robust construction, inspection-ready welding, and project documentation.",
      keywords: [
        "special purpose process vessel",
        "custom process vessel manufacturer",
        "industrial process vessel fabrication",
        "custom vessel fabrication india",
        "duty specific process vessel",
      ],
    },
  },
  "custom-chemical-process-equipment": {
    title: "Chemical Process Equipment (Custom)",
    headline: "Design-to-Fabrication Support for Chemical Process Equipment",
    description:
      "Custom-built chemical process equipment engineered for corrosion resistance, operational safety, maintainability, and smooth plant integration.",
    pagePath:
      "/products/custom-chemical-process-equipment",
    image: "/product/Final_half_coil_vessel.jpeg",
    imageAlt:
      "Custom chemical process equipment fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Build Scope", value: "Custom equipment and assemblies" },
      { label: "Integration", value: "Plant and retrofit-ready fabrication" },
      { label: "Protection", value: "Coating and lining options" },
      { label: "Documentation", value: "Inspection and traceability records" },
    ],
    overview: [
      "NESF delivers custom chemical process equipment tailored to your process duty, layout limitations, and operating environment.",
      "Our focus is to fabricate equipment that is safe, reliable, corrosion-aware, and installation-ready.",
    ],
    sections: [
      {
        title: "What We Can Build",
        body: ["The fabrication scope is customized around the process and project requirements."],
        bullets: [
          "Custom vessels, shells, housings, and fabricated assemblies.",
          "Process modules and equipment supports.",
          "Plant-integrated fabrication with controlled nozzle and orientation accuracy.",
          "Retrofit-friendly fabrication for brownfield projects.",
        ],
      },
      {
        title: "Fabrication Process Approach",
        body: ["A disciplined build flow typically includes:"],
        bullets: [
          "Material selection based on chemical compatibility and temperature or pressure duty.",
          "Controlled welding and fit-up.",
          "NDT as specified, including UT or RT where required.",
          "Surface protection, coating, or lining options where required.",
          "Final inspection, testing, documentation, and dispatch packing.",
        ],
      },
      {
        title: "Standards",
        body: ["Applicable standards and acceptance criteria are aligned to the client or project specification."],
        bullets: [
          "ASME BPVC-aligned requirements where pressure equipment is involved and specified.",
          "TEMA-aligned mechanical expectations for exchanger-related scope where applicable.",
          "Project-specific inspection plans, testing, and documentation formats.",
        ],
      },
      {
        title: "Why NESF",
        bullets: [
          "Industrial fabrication focused on buildability, maintainability, and inspection readiness.",
          "Clean documentation and traceability support.",
          "Customization without losing shop-floor practicality.",
          "Experience across varied industrial fabrication projects.",
        ],
      },
      {
        title: "What You Receive",
        bullets: [
          "Custom fabricated equipment aligned to the agreed scope.",
          "Inspection and test reports.",
          "Material and fabrication traceability records.",
          "Project documentation and dispatch packing as specified.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Service fluid and chemical compatibility requirements.",
          "Operating and design pressure and temperature.",
          "Material preference, coating, or lining requirements.",
          "Layout constraints, connection sizes, and nozzle orientation.",
          "Inspection, testing, documentation, and delivery requirements.",
        ],
      },
    ],
    note:
      "Tell us your duty and constraints, including service fluid, operating conditions, material, layout, and connection sizes. NESF will respond with a clear scope, assumptions, deliverables, and quotation basis.",
    enquiry: {
      title: "Request a quote for Custom Chemical Process Equipment",
      subtitle:
        "Share your service fluid, operating conditions, material requirements, layout constraints, and connection sizes.",
      productName: "Custom Chemical Process Equipment",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Custom Chemical Process Equipment | Design-to-Fabrication by NESF",
      description:
        "Custom-built chemical process equipment engineered for corrosion resistance, safety, and plant integration with fabrication, inspection, and documentation under one roof.",
      keywords: [
        "custom chemical process equipment",
        "chemical equipment manufacturer",
        "chemical process vessel fabrication",
        "custom industrial equipment fabrication",
        "chemical plant equipment manufacturer india",
      ],
    },
  },
} satisfies Record<string, ProductDetail>;

export function buildProductMetadata(product: ProductDetail): Metadata {
  return buildMetadata({
    title: product.seo.title,
    description: product.seo.description,
    path: product.pagePath,
    image: product.image,
    keywords: product.seo.keywords,
    robots: { index: false, follow: false },
  });
}
