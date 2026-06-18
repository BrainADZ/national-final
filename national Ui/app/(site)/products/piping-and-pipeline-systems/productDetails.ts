import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import type { ProductDetail } from "../pressure-vessels-and-storage/productDetails";

export const CATEGORY_NAME = "Piping & Pipeline Systems";

export const pipingPipelineNav = [
  {
    label: "Pig Launcher / Pig Receiver Systems",
    href: "/products/pig-launcher-pig-receiver-systems",
  },
  {
    label: "Pipeline Spools & Fabrication",
    href: "/products/pipeline-spools-fabrication",
  },
  {
    label: "Headers, Manifolds & Special Piping",
    href: "/products/headers-manifolds-special-piping",
  },
  {
    label: "Compressor Suction / Discharge Ducting",
    href: "/products/compressor-suction-discharge-ducting",
  },
  {
    label: "Piping Supports",
    href: "/products/piping-supports",
  },
];

export const productDetails = {
  "pig-launcher-pig-receiver-systems": {
    title: "Pig Launcher / Pig Receiver Systems",
    headline: "Engineered Pig Traps for Safe Pipeline Operations",
    description:
      "Pressure-containing pig launcher and receiver systems engineered for pipeline cleaning, batching, dewatering, and inline inspection activities.",
    pagePath:
      "/products/pig-launcher-pig-receiver-systems",
    image: "/product/26.jpeg",
    imageAlt:
      "Pig launcher and pig receiver system fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Application", value: "Cleaning, batching, and inspection" },
      { label: "Configuration", value: "Standalone or skid-mounted trap" },
      { label: "Build Basis", value: "Pipeline data sheet and pig type" },
      { label: "Documentation", value: "QA/QC and traceability records" },
    ],
    overview: [
      "Pig launchers and pig receivers, often called pig traps, are engineered pipeline assemblies used to insert and retrieve pipeline pigs for cleaning, batching, dewatering, and inline inspection activities.",
      "These pressure-containing units are integrated into pipeline networks and designed around pipeline diameter, pressure rating, isolation philosophy, and pig type.",
    ],
    sections: [
      {
        title: "What NESF Manufactures",
        body: [
          "NESF designs and fabricates pig launcher and receiver packages as standalone traps or skid-mounted systems, complete with the required appurtenances for safe operation and maintenance access.",
          "We support project-specific material of construction, corrosion allowance, closure type, and tie-in orientation as per client data sheets and pipeline code requirements.",
        ],
      },
      {
        title: "Typical Scope",
        bullets: [
          "Barrel, reducer, and spool integration for launcher or receiver body fabrication.",
          "Quick-opening closure or end closure arrangement as specified.",
          "Kicker line and bypass philosophy provisions as per piping design.",
          "Drain, vent, bleed connections, and instrumentation tappings.",
          "Supports, lifting lugs, fabrication documentation, and traceability.",
        ],
      },
      {
        title: "Materials & Standards",
        body: [
          "Manufacturing is executed as per project specifications and the pipeline or pressure equipment codes defined by the client.",
        ],
        bullets: [
          "Carbon steel, alloy steel, or stainless steel construction as required.",
          "Project-specific corrosion allowance and material traceability.",
          "Alignment with applicable ASME piping and pressure design frameworks where specified.",
          "Qualified welding, inspection, and testing practices.",
        ],
      },
      {
        title: "Applications",
        bullets: [
          "Oil and gas transmission lines.",
          "Refinery interconnects and process plant pipelines.",
          "Product pipelines and batching networks.",
          "Pipeline systems requiring routine pigging, inspection, or dewatering.",
        ],
      },
      {
        title: "Why NESF",
        bullets: [
          "End-to-end engineered steel fabrication.",
          "Disciplined QA/QC and qualified welding practices.",
          "Full material and fabrication traceability.",
          "Fabrication planned for reliable site integration.",
          "Schedule-focused execution and project documentation support.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Pipeline diameter, design pressure, and design temperature.",
          "Pig type, dimensions, and operating philosophy.",
          "Material of construction and corrosion allowance.",
          "Closure type, tie-in orientation, and nozzle requirements.",
          "Applicable codes, inspection plan, testing, and documentation requirements.",
        ],
      },
    ],
    note:
      "Share your pipeline data sheet, diameter, pressure rating, pig type, closure preference, and tie-in details. NESF will propose a fabrication-ready pig launcher or receiver scope.",
    enquiry: {
      title: "Request a quote for a Pig Launcher / Pig Receiver System",
      subtitle:
        "Share your pipeline data sheet, pig details, pressure rating, closure type, and inspection requirements.",
      productName: "Pig Launcher / Pig Receiver System",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Pig Launcher & Pig Receiver Systems | Pipeline Fabrication by NESF",
      description:
        "Engineered pig launcher and receiver systems fabricated for pipeline cleaning, batching, dewatering, and inline inspection with disciplined QA/QC and traceability.",
      keywords: [
        "pig launcher manufacturer",
        "pig receiver manufacturer",
        "pig trap fabrication",
        "pipeline pigging system",
        "pig launcher receiver india",
      ],
    },
  },
  "pipeline-spools-fabrication": {
    title: "Pipeline Spools & Fabrication",
    headline: "Shop-Fabricated Pipeline Spools for Accurate, Faster Site Erection",
    description:
      "Pipeline spools fabricated under controlled shop conditions to improve fit-up accuracy, reduce site welding, and support reliable project execution.",
    pagePath:
      "/products/pipeline-spools-fabrication",
    image: "/product/8.jpg",
    imageAlt:
      "Fabricated industrial pipeline section by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Build Basis", value: "Isometric drawings and spool numbers" },
      { label: "Scope", value: "Cutting, fit-up, welding, and coating" },
      { label: "Materials", value: "Carbon, stainless, or alloy steel" },
      { label: "QA", value: "Dimensional control and NDT coordination" },
    ],
    overview: [
      "Pipeline spools are shop-fabricated sections of piping manufactured under controlled conditions to reduce site welding time, improve fit-up accuracy, and enhance overall construction quality.",
      "Prefabrication and modular piping approaches are widely adopted across industrial projects to reduce shutdown duration, improve repeatability, and lower project risk.",
    ],
    sections: [
      {
        title: "What NESF Delivers",
        body: [
          "NESF fabricates pipeline spools for new projects, revamps, and shutdown jobs, covering straight runs, offsets, complex tie-ins, and specialty connections.",
        ],
      },
      {
        title: "Typical Deliverables",
        bullets: [
          "Spools fabricated as per isometric drawings with spool numbering and match-marks.",
          "Pipe cutting, bevelling, fit-up, welding, and dimensional control.",
          "NDT coordination as per client-defined QAP and ITP.",
          "Surface preparation and painting or coating readiness as specified.",
          "Packing for safe transport and easy site handling.",
        ],
      },
      {
        title: "Integrated Plant Capabilities",
        body: [
          "Our fabrication ecosystem supports process piping skids, ducting systems, and heavy engineered steel components, enabling coordinated execution where piping, supports, and accessories are delivered as one scope.",
        ],
        bullets: [
          "Shop fabrication planned around site erection sequences.",
          "Coordinated piping, supports, and accessory fabrication.",
          "Dimensional control for smoother site tie-ins.",
          "Project documentation and identification support.",
        ],
      },
      {
        title: "Materials",
        bullets: [
          "Carbon steel as per project material specifications.",
          "Stainless steel for corrosive or process-specific service.",
          "Alloy steel based on operating temperature, pressure, corrosion, and media.",
        ],
      },
      {
        title: "Applications",
        bullets: [
          "Chemical and petrochemical plants.",
          "Refineries, steel plants, and utility systems.",
          "ETP facilities and process industries.",
          "Projects where erection speed and quality consistency are critical.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Approved isometric drawings and spool list.",
          "Material specifications and applicable piping class.",
          "Welding, NDT, QAP, and ITP requirements.",
          "Painting, coating, identification, and packing requirements.",
          "Site sequence, delivery schedule, and transport constraints.",
        ],
      },
    ],
    note:
      "Share your isometric drawings, spool list, piping class, inspection requirements, and delivery sequence. NESF will respond with a clear fabrication scope and execution plan.",
    enquiry: {
      title: "Request a quote for Pipeline Spools & Fabrication",
      subtitle:
        "Share your isometric drawings, spool list, materials, inspection requirements, and delivery schedule.",
      productName: "Pipeline Spools & Fabrication",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Pipeline Spools & Fabrication | Industrial Piping by NESF",
      description:
        "Shop-fabricated pipeline spools with controlled fit-up, welding, dimensional inspection, NDT coordination, coating readiness, and project documentation.",
      keywords: [
        "pipeline spool fabrication",
        "pipe spool manufacturer",
        "industrial piping fabrication",
        "prefabricated pipe spools",
        "pipeline fabrication india",
      ],
    },
  },
  "headers-manifolds-special-piping": {
    title: "Headers, Manifolds & Special Piping",
    headline: "Engineered Flow Distribution Assemblies for Industrial Systems",
    description:
      "Custom headers, manifolds, and special piping assemblies fabricated for controlled flow distribution, pressure integrity, and reliable plant integration.",
    pagePath:
      "/products/headers-manifolds-special-piping",
    image: "/product/26.jpeg",
    imageAlt:
      "Custom header manifold and special piping assembly fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Application", value: "Flow collection and distribution" },
      { label: "Build Scope", value: "Headers, branches, and special sections" },
      { label: "Accuracy", value: "Controlled geometry and orientation" },
      { label: "Documentation", value: "QA/QC and traceability package" },
    ],
    overview: [
      "Headers and manifolds are engineered piping assemblies used to collect, distribute, or balance flow across multiple lines.",
      "They are critical in utility systems, process distribution, compressor stations, filtration and separation networks, and skid packages where controlled routing and pressure integrity are essential.",
    ],
    sections: [
      {
        title: "What NESF Manufactures",
        body: [
          "NESF fabricates headers and manifolds built to project drawings and operating parameters, including specialty branch arrangements and tight geometry control.",
        ],
      },
      {
        title: "Typical Scope",
        bullets: [
          "Main header fabrication with multiple nozzles and branches.",
          "Reducers, laterals, and reinforcement as required by design.",
          "Special piping items and custom fabricated sections where standard fittings are not feasible.",
          "Integrated supports and handling lugs for safe installation.",
          "Documentation package supporting traceability and QA/QC requirements.",
        ],
      },
      {
        title: "Design & Execution Focus",
        bullets: [
          "Flow distribution intent, including equalized take-offs where specified.",
          "Maintainability through drains, vents, and instrument points as per design philosophy.",
          "Dimensional accuracy for skid integration and tight site envelopes.",
          "Code and project compliance as per client specifications.",
          "Controlled branch orientation and connection geometry.",
        ],
      },
      {
        title: "Materials & Quality",
        bullets: [
          "Carbon steel, stainless steel, or alloy steel as per service requirements.",
          "Qualified welding and controlled fit-up practices.",
          "NDT, pressure testing, and leak checks as specified.",
          "Material and fabrication traceability aligned to project requirements.",
        ],
      },
      {
        title: "Applications",
        bullets: [
          "Process plants and refinery units.",
          "Power and utility piping systems.",
          "Compressed air and gas distribution.",
          "Filtration and separation networks.",
          "Chemical injection and collection systems.",
        ],
      },
      {
        title: "Why NESF",
        body: [
          "With decades of engineered fabrication across pressure equipment and plant piping packages, NESF delivers headers and manifolds that install cleanly, operate reliably, and remain service-friendly over long life cycles.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Project drawings, piping class, and operating conditions.",
          "Flow distribution philosophy and branch arrangement.",
          "Material of construction and corrosion requirements.",
          "Support, handling, and site-envelope constraints.",
          "Inspection, testing, documentation, and delivery requirements.",
        ],
      },
    ],
    note:
      "Share your drawings, piping class, branch arrangement, operating conditions, and inspection requirements. NESF will propose a fabrication-ready header or manifold scope.",
    enquiry: {
      title: "Request a quote for Headers, Manifolds & Special Piping",
      subtitle:
        "Share your drawings, operating parameters, branch arrangement, material requirements, and inspection plan.",
      productName: "Headers, Manifolds & Special Piping",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Headers, Manifolds & Special Piping | Fabrication by NESF",
      description:
        "Custom headers, manifolds, and special piping assemblies fabricated for controlled flow distribution, pressure integrity, dimensional accuracy, and plant integration.",
      keywords: [
        "piping header manufacturer",
        "industrial manifold fabrication",
        "special piping fabrication",
        "custom piping header",
        "process piping manifold india",
      ],
    },
  },
  "compressor-suction-discharge-ducting": {
    title: "Compressor Suction / Discharge Ducting",
    headline: "Heavy-Duty Ducting for Reliable Compressor Interfaces",
    description:
      "Compressor suction and discharge ducting fabricated for accurate equipment tie-ins, robust airflow handling, dimensional stability, and safe plant integration.",
    pagePath:
      "/products/compressor-suction-discharge-ducting",
    image: "/product/13.jpg",
    imageAlt:
      "Industrial compressor suction and discharge ducting fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Application", value: "Compressor air and gas handling" },
      { label: "Build Scope", value: "Duct spools, transitions, interfaces" },
      { label: "Accuracy", value: "Controlled equipment tie-in geometry" },
      { label: "Installation", value: "Supports and lifting provisions" },
    ],
    overview: [
      "Compressor suction and discharge ducting connects rotating equipment to upstream and downstream systems while managing airflow, pressure, vibration influence, and space constraints.",
      "The ducting arrangement must consider alignment, movement, maintenance access, equipment interfaces, and plant safety.",
    ],
    sections: [
      {
        title: "What NESF Delivers",
        body: [
          "NESF fabricates heavy-duty industrial ducting assemblies for compressor packages and plant air or gas handling systems, including transition pieces and equipment interfacing sections.",
        ],
      },
      {
        title: "Typical Scope",
        bullets: [
          "Suction and discharge duct spools and transitions as per layout and GA.",
          "Flanged or welded end connections per project requirement.",
          "Stiffeners, reinforcements, and access provisions where specified.",
          "Supports and lifting provisions for safe installation.",
          "Integration with broader HVAC and industrial ducting scope.",
        ],
      },
      {
        title: "Fabrication Approach",
        bullets: [
          "Clean fit-up and dimensional stability for accurate equipment tie-ins.",
          "Controlled geometry across spools, transitions, and connection interfaces.",
          "Welding quality and inspection discipline aligned with industrial QA/QC practices.",
          "Packing and dispatch planning to reduce site handling damage.",
        ],
      },
      {
        title: "Design & Integration Focus",
        bullets: [
          "Alignment and movement considerations around rotating equipment.",
          "Maintainable access around flanges, inspection points, and equipment interfaces.",
          "Reinforcement and support arrangements based on project drawings.",
          "Site-envelope and installation-sequence requirements.",
        ],
      },
      {
        title: "Applications",
        bullets: [
          "Compressor stations and compressor packages.",
          "Process plants and utility systems.",
          "Industrial ventilation and gas handling lines.",
          "Systems requiring robust ducting and accurate equipment interfaces.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Approved GA, layout, and equipment interface drawings.",
          "Operating conditions, airflow or gas service, and pressure requirements.",
          "Material, thickness, reinforcement, and connection specifications.",
          "Support, lifting, inspection, and access requirements.",
          "Packing, transport, and delivery-sequence requirements.",
        ],
      },
    ],
    note:
      "Share your layout, equipment interface drawings, operating conditions, and connection requirements. NESF will propose a fabrication-ready compressor ducting scope.",
    enquiry: {
      title: "Request a quote for Compressor Suction / Discharge Ducting",
      subtitle:
        "Share your GA, operating conditions, equipment interfaces, materials, and inspection requirements.",
      productName: "Compressor Suction / Discharge Ducting",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Compressor Suction & Discharge Ducting | Fabrication by NESF",
      description:
        "Heavy-duty compressor suction and discharge ducting fabricated for accurate equipment tie-ins, dimensional stability, airflow handling, and safe installation.",
      keywords: [
        "compressor suction ducting",
        "compressor discharge ducting",
        "industrial ducting fabrication",
        "compressor duct manufacturer",
        "gas handling ducting india",
      ],
    },
  },
  "piping-supports": {
    title: "Piping Supports",
    headline: "Reliable Piping Support Assemblies for Long-Term Plant Integrity",
    description:
      "Custom piping supports and structural support assemblies fabricated to maintain alignment, transfer loads, manage movement, and support reliable plant operation.",
    pagePath: "/products/piping-supports",
    image: "/product/17.jpg",
    imageAlt:
      "Industrial piping support assembly fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Function", value: "Alignment, load, and movement control" },
      { label: "Support Types", value: "Shoes, saddles, clamps, and guides" },
      { label: "Build Basis", value: "Client drawings and specifications" },
      { label: "Quality", value: "Qualified welding and documentation" },
    ],
    overview: [
      "Piping supports are essential to maintain pipeline alignment, transfer loads, control thermal movement, and manage vibration.",
      "Correct design intent and disciplined fabrication directly influence piping integrity, equipment nozzle loads, and long-term system reliability.",
    ],
    sections: [
      {
        title: "What NESF Manufactures",
        body: [
          "NESF fabricates piping supports and support assemblies to client drawings and specifications for both shop and site requirements.",
        ],
      },
      {
        title: "Typical Support Types",
        bullets: [
          "Pipe shoes, saddles, clamps, and guides.",
          "Trunnions and dummy supports.",
          "Base frames and structural assemblies for pipe racks and skids.",
          "Hold-downs and restraint supports for vibration or thermal considerations.",
          "Custom-built supports for non-standard routing and tight spaces.",
        ],
      },
      {
        title: "Fabrication Focus",
        bullets: [
          "Dimensional accuracy and repeatable fit-up.",
          "Controlled welding and structural reinforcement.",
          "Hole, slot, base plate, and attachment orientation as per drawings.",
          "Surface preparation, painting, or coating as specified.",
          "Identification and packing for efficient site installation.",
        ],
      },
      {
        title: "Quality & Traceability",
        body: [
          "Our fabrication culture emphasizes disciplined QA/QC, qualified welding procedures, and documentation control, supporting site confidence and repeatable installation quality.",
        ],
        bullets: [
          "Material and fabrication traceability as required.",
          "Dimensional and visual inspection.",
          "NDT where specified by the project.",
          "Inspection records and documentation support.",
        ],
      },
      {
        title: "Applications",
        bullets: [
          "Chemical and process plants.",
          "Oil and gas packages.",
          "Utility piping and ETP lines.",
          "Pipe racks, skids, and industrial projects requiring continuous operation.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Support drawings, schedules, and quantities.",
          "Pipe sizes, loads, and movement requirements.",
          "Material, welding, and coating specifications.",
          "Inspection and documentation requirements.",
          "Site identification, packing, and delivery sequence.",
        ],
      },
    ],
    note:
      "Share your support drawings, schedules, quantities, materials, and coating requirements. NESF will respond with a clear fabrication and delivery scope.",
    enquiry: {
      title: "Request a quote for Piping Supports",
      subtitle:
        "Share your support drawings, schedule, quantities, materials, coating, and inspection requirements.",
      productName: "Piping Supports",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Piping Supports & Support Assemblies | Fabrication by NESF",
      description:
        "Custom piping supports and structural support assemblies fabricated for pipeline alignment, load transfer, thermal movement control, and reliable installation.",
      keywords: [
        "piping support manufacturer",
        "pipe shoe fabrication",
        "pipe saddle manufacturer",
        "industrial pipe supports",
        "custom piping support fabrication",
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
