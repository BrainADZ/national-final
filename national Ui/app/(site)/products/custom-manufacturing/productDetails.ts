import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import type { ProductDetail } from "../pressure-vessels-and-storage/productDetails";

export const CATEGORY_NAME = "Custom Manufacturing (As per Client Drawing)";

export const customManufacturingNav = [
  {
    label: "Heavy Plate Fabrication",
    href: "/products/heavy-plate-fabrication",
  },
  {
    label: "SS / CS / Alloy Steel Fabrication",
    href: "/products/ss-cs-alloy-steel-fabrication",
  },
  {
    label: "On-site Erection Support",
    href: "/products/on-site-erection-support",
  },
  {
    label: "Repair / Modification Jobs",
    href: "/products/repair-modification-jobs",
  },
];

export const productDetails = {
  "heavy-plate-fabrication": {
    title: "Heavy Plate Fabrication",
    headline: "Heavy Plate Fabrication as per Client Drawing",
    description:
      "Heavy plate shells, formed sections, and large welded assemblies fabricated for strength, alignment, weld integrity, and demanding industrial service.",
    pagePath: "/products/heavy-plate-fabrication",
    image: "/product/16.jpg",
    imageAlt: "Heavy plate fabrication by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Scope", value: "Shells, housings, frames, and assemblies" },
      { label: "Capabilities", value: "Cutting, forming, rolling, and welding" },
      { label: "Accuracy", value: "Match-marking and trial assembly" },
      { label: "Quality", value: "Project ITP and documented QA/QC" },
    ],
    overview: [
      "NESF delivers heavy plate fabrication for industrial equipment where strength, alignment, and weld integrity matter.",
      "From rolled shells and formed sections to large welded assemblies, we manufacture to client drawings, specifications, and inspection requirements for safe service in demanding plant environments.",
    ],
    sections: [
      {
        title: "What We Fabricate",
        bullets: [
          "Heavy plate shells, drums, casings, and large fabricated housings.",
          "Base frames, beams, lifting structures, and heavy-duty supports.",
          "Plate-built ducts, hoppers, bins, and industrial structural assemblies.",
          "Built-up sections, stiffeners, gussets, and reinforcement work.",
        ],
      },
      {
        title: "Capabilities",
        bullets: [
          "Plate cutting, fit-up, rolling or forming support, and high-accuracy assembly.",
          "Welded fabrication with documented welding procedures and QA/QC practices.",
          "Dimensional control, match-marking, and trial assembly where required.",
          "Surface preparation and finishing as per project requirements.",
        ],
      },
      {
        title: "Quality & Compliance",
        bullets: [
          "Fabrication aligned to applicable codes, standards, and client specifications.",
          "Project-specific inspection plans and hold points.",
          "Material and fabrication traceability.",
          "Dimensional, weld, NDT, and final checks as specified before dispatch.",
        ],
      },
      {
        title: "Why NESF",
        bullets: [
          "More than 35 years of fabrication execution and repeat-client deliveries.",
          "Practical manufacturing planning for large and heavy assemblies.",
          "End-to-end support from engineering detailing to manufacturing.",
          "Erection support where included in project scope.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Approved drawings, specifications, plate grades, and thicknesses.",
          "Forming, rolling, machining, and dimensional requirements.",
          "Welding, NDT, inspection-plan, and documentation requirements.",
          "Surface finish, module size, transport, and erection constraints.",
        ],
      },
    ],
    note:
      "Share your drawings, specifications, material grades, and required tests. NESF will propose a practical fabrication and delivery plan.",
    enquiry: {
      title: "Request a quote for Heavy Plate Fabrication",
      subtitle: "Share your drawings, plate grades, forming, welding, inspection, and delivery requirements.",
      productName: "Heavy Plate Fabrication",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Heavy Plate Fabrication | Build-to-Drawing by NESF",
      description:
        "Heavy plate shells, housings, frames, ducts, and welded assemblies fabricated to client drawings with controlled fit-up, welding, inspection, and documentation.",
      keywords: [
        "heavy plate fabrication",
        "plate fabrication manufacturer",
        "large welded assemblies",
        "heavy steel fabrication",
        "custom plate fabrication india",
      ],
    },
  },
  "ss-cs-alloy-steel-fabrication": {
    title: "SS / CS / Alloy Steel Fabrication",
    headline: "Stainless Steel, Carbon Steel & Alloy Steel Fabrication",
    description:
      "Equipment and assemblies fabricated in stainless, carbon, and alloy steels with controlled welding, material traceability, and precise fit-up.",
    pagePath: "/products/ss-cs-alloy-steel-fabrication",
    image: "/product/24.jpeg",
    imageAlt: "Stainless steel carbon steel and alloy steel fabrication by National Engineers",
    imagePosition: "center",
    quickFacts: [
      { label: "Materials", value: "SS, CS, pressure grade, and alloys" },
      { label: "Build Basis", value: "Client drawings and datasheets" },
      { label: "Quality", value: "Qualified welding and traceability" },
      { label: "Inspection", value: "Project ITP and client requirements" },
    ],
    overview: [
      "NESF fabricates equipment and assemblies in stainless steel, carbon steel, and alloy steels as per client drawings for process plants, utilities, and heavy industry.",
      "We focus on weld quality, material traceability, and fit-up precision so fabricated items install smoothly and perform reliably.",
    ],
    sections: [
      {
        title: "Materials We Work With",
        bullets: [
          "Stainless steels such as SS 304L and other specified grades.",
          "Carbon and pressure-grade steels such as SA-516 Gr.70.",
          "Structural carbon steels such as IS 2062.",
          "Special alloys and multi-material combinations as specified.",
        ],
      },
      {
        title: "Typical Fabrication Scope",
        bullets: [
          "Process-equipment shells, supports, platforms, and welded assemblies.",
          "Plant structural steelwork and heavy-machinery base frames.",
          "Ducting, large fabricated sections, and custom-built items.",
          "Multi-material assemblies such as stainless and carbon-steel combinations.",
        ],
      },
      {
        title: "QA/QC & Weld Integrity",
        bullets: [
          "Qualified welding procedures and disciplined QA/QC workflow.",
          "Material identification and fabrication traceability.",
          "Visual, dimensional, NDT, and other inspections as required by the project ITP.",
          "Documentation aligned to client and project requirements.",
        ],
      },
      {
        title: "Industries Served",
        bullets: [
          "Oil and gas, chemicals, and petrochemicals.",
          "Fertilizers, effluent treatment, and utilities.",
          "Steel, shipbuilding, and heavy industry.",
          "Other process industries requiring build-to-drawing fabrication.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Drawings, datasheets, material of construction, and quantities.",
          "Service conditions and corrosion requirements.",
          "Welding, NDT, inspection, and documentation requirements.",
          "Surface finish, packing, schedule, and delivery requirements.",
        ],
      },
    ],
    note:
      "Send your drawings, material of construction, and inspection requirements. NESF will confirm manufacturability, schedule, and documentation scope.",
    enquiry: {
      title: "Request a quote for SS / CS / Alloy Steel Fabrication",
      subtitle: "Share your drawings, MOC, quantities, welding, inspection, and schedule requirements.",
      productName: "SS / CS / Alloy Steel Fabrication",
      buttonText: "Request Quote",
    },
    seo: {
      title: "SS, CS & Alloy Steel Fabrication | Custom Builds by NESF",
      description:
        "Custom stainless steel, carbon steel, and alloy-steel equipment and assemblies fabricated with qualified welding, traceability, and project inspection.",
      keywords: [
        "stainless steel fabrication",
        "carbon steel fabrication",
        "alloy steel fabrication",
        "custom industrial fabrication",
        "steel fabrication india",
      ],
    },
  },
  "on-site-erection-support": {
    title: "On-site Erection Support",
    headline: "On-site Erection Support & Installation Assistance",
    description:
      "On-site erection and installation assistance for safe positioning, alignment, fit-up, interface checks, and efficient integration of fabricated equipment.",
    pagePath: "/products/on-site-erection-support",
    image: "/gallery/Work in progress (46).JPG",
    imageAlt: "Industrial fabrication and erection support by National Engineers",
    imagePosition: "center",
    quickFacts: [
      { label: "Support", value: "Positioning, alignment, and fit-up" },
      { label: "Planning", value: "Lifting and erection sequencing" },
      { label: "Risk Control", value: "Interface and site checks" },
      { label: "Scope", value: "Installation and readiness assistance" },
    ],
    overview: [
      "When fabrication is only half the job, NESF provides on-site erection support to help clients install fabricated equipment safely and correctly.",
      "We coordinate fit-up, alignment, interface validation, and practical site execution so fabricated items integrate smoothly with existing plant systems.",
    ],
    sections: [
      {
        title: "What We Support On Site",
        bullets: [
          "Positioning, alignment, and fit-up support for heavy fabricated items.",
          "Site-measurement validation and interface checks before final installation.",
          "Coordination assistance for lifting plans, safe handling, and erection sequencing.",
          "Punch-list closure support and final readiness checks as per scope.",
        ],
      },
      {
        title: "How This Reduces Project Risk",
        bullets: [
          "Fewer rework cycles caused by interface mismatches.",
          "Faster handover through planned installation steps.",
          "Improved control for heavy or awkward assemblies.",
          "Better coordination around access, lifting, and shutdown constraints.",
        ],
      },
      {
        title: "End-to-End Delivery",
        bullets: [
          "Support from engineering and manufacturing through site installation.",
          "Fabrication splits and match-marking planned for erection.",
          "Coordination with client teams and site contractors as agreed.",
          "Commissioning-readiness assistance where included in scope.",
        ],
      },
      {
        title: "Information Required",
        bullets: [
          "Site access, available work areas, and interface details.",
          "Crane limits, lifting constraints, and handling requirements.",
          "Shutdown window, erection sequence, and safety requirements.",
          "Drawings, existing-plant details, and expected support scope.",
        ],
      },
    ],
    note:
      "Share your site constraints, access, crane limits, shutdown window, and installation scope. NESF will plan support around your schedule.",
    enquiry: {
      title: "Request On-site Erection Support",
      subtitle: "Share your site constraints, access, lifting limits, schedule, and installation requirements.",
      productName: "On-site Erection Support",
      buttonText: "Request Support",
    },
    seo: {
      title: "On-site Erection Support & Installation Assistance | NESF",
      description:
        "On-site erection support for fabricated industrial equipment, including positioning, alignment, fit-up, interface checks, lifting coordination, and readiness checks.",
      keywords: [
        "industrial erection support",
        "equipment installation assistance",
        "on site fabrication support",
        "heavy equipment erection",
        "plant erection support india",
      ],
    },
  },
  "repair-modification-jobs": {
    title: "Repair / Modification Jobs",
    headline: "Repair & Modification Jobs for Plant Shutdowns and Maintenance",
    description:
      "Repair, reinforcement, retrofit, and modification work executed to restore integrity, extend equipment life, and adapt plant systems to new requirements.",
    pagePath: "/products/repair-modification-jobs",
    image: "/gallery/Work in progress (38).jpg",
    imageAlt: "Industrial repair and modification fabrication work by National Engineers",
    imagePosition: "center",
    quickFacts: [
      { label: "Scope", value: "Repair, reinforcement, and retrofit" },
      { label: "Planning", value: "Shutdown and access coordination" },
      { label: "Execution", value: "Controlled fabrication and fit-up" },
      { label: "Quality", value: "Job-specific inspection and documentation" },
    ],
    overview: [
      "NESF executes repair and modification work to extend equipment life, restore integrity, or adapt systems to new process requirements.",
      "Whether it is a controlled shutdown job or a planned modification, we work to updated drawings and inspection requirements with a safety-first approach.",
    ],
    sections: [
      {
        title: "Common Repair & Modification Scopes",
        bullets: [
          "Section replacement, reinforcement, and fabrication add-ons.",
          "Nozzle additions or relocations, support upgrades, brackets, and structural corrections.",
          "Ducting and heavy fabricated assembly repairs.",
          "Alignment, strengthening, and replacement-part fabrication.",
          "Retrofit fabrication to match revised drawings and site conditions.",
        ],
      },
      {
        title: "How We Execute",
        bullets: [
          "Confirm interfaces, access constraints, operating conditions, and schedule windows.",
          "Manufacture replacement parts and match existing interfaces.",
          "Perform controlled fabrication, fit-up, reinforcement, and modification work.",
          "Complete QA/QC checks and documentation aligned to the inspection plan.",
        ],
      },
      {
        title: "Where It Helps",
        bullets: [
          "Reduced downtime through planned fabrication and fast site integration.",
          "Extended equipment life and restored structural integrity.",
          "Adaptation to revised process or layout requirements.",
          "Improved life-cycle cost by repairing instead of replacing entire assemblies.",
        ],
      },
      {
        title: "Information Required",
        bullets: [
          "Current photographs, drawings, and revised requirements.",
          "Operating conditions and service history.",
          "Access, lifting, shutdown, and site-work constraints.",
          "Inspection, testing, documentation, and completion requirements.",
        ],
      },
    ],
    note:
      "Share photographs, drawings, operating conditions, and shutdown constraints. NESF will propose the safest and quickest repair or modification route.",
    enquiry: {
      title: "Request Support for a Repair / Modification Job",
      subtitle: "Share photos, drawings, operating conditions, site constraints, and inspection requirements.",
      productName: "Repair / Modification Job",
      buttonText: "Request Assessment",
    },
    seo: {
      title: "Industrial Repair & Modification Jobs | Shutdown Support by NESF",
      description:
        "Industrial repair, reinforcement, retrofit, and modification jobs for shutdowns and maintenance, with controlled fabrication, fit-up, inspection, and documentation.",
      keywords: [
        "industrial repair fabrication",
        "plant modification jobs",
        "shutdown fabrication support",
        "equipment repair and retrofit",
        "industrial maintenance fabrication",
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
