import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import type { ProductDetail } from "../pressure-vessels-and-storage/productDetails";

export const CATEGORY_NAME = "Fabrication Components & Structural";

export const fabricationStructuralNav = [
  {
    label: "Base Plates",
    href: "/products/base-plates",
  },
  {
    label: "Pipe Saddles & Supports",
    href: "/products/pipe-saddles-supports",
  },
  {
    label: "Jack Stools / Temporary Supports",
    href: "/products/jack-stools-temporary-supports",
  },
  {
    label: "Liners (Hard Plate / Wear Plate)",
    href: "/products/liners-hard-wear-plate",
  },
  {
    label: "Heavy Structural Fabrication (Custom)",
    href: "/products/custom-heavy-structural-fabrication",
  },
];

export const productDetails = {
  "base-plates": {
    title: "Base Plates",
    headline: "Precision Base Plates for Stable Equipment and Structural Installation",
    description:
      "Fabricated steel base plates, sole plates, and mounting plates built for accurate load transfer, anchoring, leveling, and alignment.",
    pagePath: "/products/base-plates",
    image: "/product/18.jpg",
    imageAlt: "Industrial base plates fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Applications", value: "Equipment, columns, skids, and structures" },
      { label: "Features", value: "Anchor holes, stiffeners, and grout pockets" },
      { label: "Materials", value: "Carbon, alloy, or stainless steel" },
      { label: "QA", value: "Flatness, hole, and dimensional checks" },
    ],
    overview: [
      "Base plates are fabricated steel plates used to distribute loads from equipment, columns, pipe racks, or structures onto foundations.",
      "They provide a stable interface for bolting, leveling, grouting, and accurate alignment during site installation.",
    ],
    sections: [
      {
        title: "What We Fabricate",
        bullets: [
          "Equipment and skid base plates with anchor-bolt slots or holes.",
          "Structural column base plates as per drawings.",
          "Base frames, sole plates, and mounting plates.",
          "Base plates with stiffeners, gussets, lifting lugs, and grout pockets.",
          "Machined flatness faces where required.",
        ],
      },
      {
        title: "Materials & Build Options",
        bullets: [
          "Carbon steel and alloy steels as specified.",
          "Stainless-steel grades for corrosive environments.",
          "Primer and paint, epoxy, or galvanizing systems as required.",
          "Custom thicknesses, profiles, holes, slots, and reinforcement.",
        ],
      },
      {
        title: "Fabrication & QA",
        bullets: [
          "CNC, plasma, or oxy profile cutting with drilling and machining as required.",
          "Controlled fit-up and welding of stiffeners and attachments.",
          "Hole PCD, diagonal, flatness, and level-reference checks.",
          "Part marking and packing for easy site identification.",
        ],
      },
      {
        title: "Typical Applications",
        bullets: [
          "Process skids, pumps, compressors, tanks, and vessels.",
          "Pipe racks, platforms, access structures, and columns.",
          "Industrial equipment foundations and structural interfaces.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "GA drawing, dimensions, thickness, and steel grade.",
          "Bolt pattern, anchor layout, and hole or slot requirements.",
          "Load data and flatness or machining requirements where available.",
          "Coating system, site environment, marking, and delivery needs.",
        ],
      },
    ],
    note:
      "Share your GA drawing, bolt pattern, anchor layout, load data, and coating requirements. NESF will propose a fabrication-ready base-plate scope.",
    enquiry: {
      title: "Request a quote for Base Plates",
      subtitle: "Share your drawings, dimensions, anchor layout, steel grade, machining, and coating requirements.",
      productName: "Base Plates",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Industrial Base Plates | Precision Fabrication by NESF",
      description:
        "Equipment, skid, and structural base plates fabricated with accurate anchor patterns, flatness checks, stiffeners, machining, and protective coatings.",
      keywords: [
        "industrial base plate manufacturer",
        "equipment base plate fabrication",
        "structural base plates",
        "skid base plate",
        "steel base plate india",
      ],
    },
  },
  "pipe-saddles-supports": {
    title: "Pipe Saddles & Supports",
    headline: "Custom Pipe Saddles and Supports for Reliable Load Control",
    description:
      "Pipe saddles and support assemblies fabricated to carry piping loads, maintain elevation, control movement, and protect piping and equipment nozzles.",
    pagePath: "/products/pipe-saddles-supports",
    image: "/product/17.jpg",
    imageAlt: "Industrial pipe saddles and supports fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Types", value: "Saddles, shoes, guides, and line stops" },
      { label: "Movement", value: "Sliding and restraint options" },
      { label: "Materials", value: "CS, SS, alloys, and slide materials" },
      { label: "Accuracy", value: "Radius, alignment, and hole checks" },
    ],
    overview: [
      "Pipe saddles and supports carry piping loads, maintain pipeline elevation, reduce vibration, and protect piping and equipment nozzles by controlling sagging and stress at critical points.",
      "Project support requirements can reference standards such as MSS SP-58 for support types, materials, and acceptance levels where specified.",
    ],
    sections: [
      {
        title: "What We Fabricate",
        bullets: [
          "Resting pipe saddles for horizontal piping.",
          "Shoe, dummy, and trunnion supports as per drawings.",
          "Sliding supports with wear plates or PTFE pads.",
          "Guides, line stops, and hold-down clamps.",
          "Custom support assemblies for skids, pipe racks, and plant piping.",
        ],
      },
      {
        title: "Materials & Build Options",
        bullets: [
          "Carbon steel, stainless steel, or special alloys as per piping class.",
          "Stainless wear plates, hardfacing, PTFE, and slide materials.",
          "Project-specific reinforcement, clamps, and base plates.",
          "Paint, coating, or galvanizing as specified.",
        ],
      },
      {
        title: "Fabrication & QA",
        bullets: [
          "Templates and jigs for repeat fabrication accuracy.",
          "Qualified welding procedures and visual inspection.",
          "Radius match, clamp spacing, base-hole PCD, and alignment checks.",
          "Identification and packing for installation sequencing.",
        ],
      },
      {
        title: "Typical Applications",
        bullets: [
          "Chemical plants, refineries, utilities, and power plants.",
          "Water systems and industrial piping packages.",
          "Large-diameter lines, hot lines, and high-vibration services.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Pipe OD or NB, piping class, and temperature range.",
          "Load and movement data where available.",
          "Required support type, slide material, and restraint philosophy.",
          "Drawings, quantity, coating, inspection, and delivery requirements.",
        ],
      },
    ],
    note:
      "Share your pipe size, support drawings, loads, movement requirements, materials, and coating specification. NESF will propose a fabrication-ready support scope.",
    enquiry: {
      title: "Request a quote for Pipe Saddles & Supports",
      subtitle: "Share pipe sizes, support drawings, loads, movement, materials, and coating requirements.",
      productName: "Pipe Saddles & Supports",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Pipe Saddles & Supports | Custom Fabrication by NESF",
      description:
        "Custom pipe saddles, shoes, guides, line stops, and sliding supports fabricated for accurate load control, movement, and reliable installation.",
      keywords: [
        "pipe saddle manufacturer",
        "pipe support fabrication",
        "sliding pipe support",
        "pipe shoe manufacturer",
        "custom piping supports india",
      ],
    },
  },
  "jack-stools-temporary-supports": {
    title: "Jack Stools / Temporary Supports",
    headline: "Rugged Temporary Supports for Erection and Maintenance Work",
    description:
      "Jack stools and temporary support frames fabricated for safe spool, piping, and equipment support during erection, alignment, testing, and shutdown activities.",
    pagePath: "/products/jack-stools-temporary-supports",
    image: "/product/19.jpeg",
    imageAlt: "Industrial jack stool temporary support fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Use", value: "Erection, alignment, testing, and shutdowns" },
      { label: "Types", value: "Adjustable, fixed, and saddle-top stools" },
      { label: "Stability", value: "Wide bases and reinforced load paths" },
      { label: "Build Basis", value: "Required load and height range" },
    ],
    overview: [
      "Jack stools and temporary supports are used during erection, maintenance, hydrotesting, shutdowns, and alignment activities.",
      "They safely hold piping, spools, and equipment at the required elevation until permanent supports are installed or maintenance work is completed.",
    ],
    sections: [
      {
        title: "What We Fabricate",
        bullets: [
          "Adjustable threaded or pin-type jack stools.",
          "Fixed-height, cut-to-length temporary stools.",
          "Wide-base stools for stable site placement.",
          "Saddle-top stools with pipe-radius contact.",
          "Special temporary support frames for shutdown jobs.",
        ],
      },
      {
        title: "Key Features",
        bullets: [
          "Fast deployment and rugged construction for site handling.",
          "Load-rated designs based on working load and required safety factor.",
          "Optional base plates, gusset stiffeners, and anti-slip pads.",
          "Custom height, adjustment, saddle, and lifting arrangements.",
        ],
      },
      {
        title: "Fabrication & QA",
        bullets: [
          "Straightness and fit checks for a stable vertical load path.",
          "Weld inspection and reinforcement verification.",
          "Dimensional checks across height, base, and saddle interfaces.",
          "Load-path verification aligned to client requirements.",
        ],
      },
      {
        title: "Typical Applications",
        bullets: [
          "Pipe-rack erection and spool alignment.",
          "Valve replacement and maintenance jobs.",
          "Hydrotesting and temporary equipment support.",
          "Turnaround and shutdown maintenance.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Required height or adjustment range.",
          "Estimated load and required safety factor.",
          "Pipe size or saddle radius.",
          "Quantity, site conditions, finish, and delivery requirements.",
        ],
      },
    ],
    note:
      "Share the required height range, estimated load, pipe size, quantity, and site conditions. NESF will propose a robust temporary-support configuration.",
    enquiry: {
      title: "Request a quote for Jack Stools / Temporary Supports",
      subtitle: "Share your load, height range, pipe size, quantity, and site-condition requirements.",
      productName: "Jack Stools / Temporary Supports",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Jack Stools & Temporary Supports | Fabrication by NESF",
      description:
        "Adjustable and fixed jack stools and temporary support frames fabricated for erection, maintenance, hydrotesting, alignment, and shutdown work.",
      keywords: [
        "jack stool manufacturer",
        "temporary pipe supports",
        "adjustable jack stool",
        "shutdown support fabrication",
        "industrial temporary supports",
      ],
    },
  },
  "liners-hard-wear-plate": {
    title: "Liners (Hard Plate / Wear Plate)",
    headline: "Replaceable Wear Liners for Abrasion and Impact Protection",
    description:
      "Hard plate and wear-plate liners fabricated for chutes, hoppers, bins, ducts, and abrasive zones to extend equipment life and reduce downtime.",
    pagePath: "/products/liners-hard-wear-plate",
    image: "/product/21.jpeg",
    imageAlt: "Hard plate and wear plate liners fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Applications", value: "Chutes, hoppers, bins, and ducts" },
      { label: "Options", value: "AR, stainless, overlay, and bimetal" },
      { label: "Mounting", value: "Bolt-on or weld-on panels" },
      { label: "Maintenance", value: "Part-marked replacement kits" },
    ],
    overview: [
      "Wear liners are sacrificial plates installed inside chutes, hoppers, bins, ducts, and high-abrasion zones to extend equipment life and reduce maintenance downtime.",
      "They are commonly used where abrasive material flow, repeated impact, or combined corrosion and wear can quickly damage the parent equipment.",
    ],
    sections: [
      {
        title: "What We Fabricate",
        bullets: [
          "Wear liners for chutes, hoppers, transfer points, bins, cyclones, and ducts.",
          "Replaceable liner panels with bolt holes and countersinks.",
          "Rolled or segmented curved liners for pipes and bends.",
          "Liner assemblies with backing plates and stiffeners.",
          "Hardfacing build-up on critical wear zones where specified.",
        ],
      },
      {
        title: "Material Options",
        bullets: [
          "Abrasion-resistant AR and Hardox-type wear plates.",
          "Stainless liners for combined corrosion and wear duties.",
          "Overlay and bimetal liner options based on project requirements.",
          "Service-specific thickness and backing arrangements.",
        ],
      },
      {
        title: "Fabrication & QA",
        bullets: [
          "Accurate profiling for tight fit-up and quick replacement.",
          "Hole and countersink accuracy for bolt-on liner kits.",
          "Curving, segmentation, and assembly checks.",
          "Part-number marking and packing for shutdown readiness.",
        ],
      },
      {
        title: "Typical Applications",
        bullets: [
          "Cement and mineral-processing equipment.",
          "Mining and recycling systems.",
          "Bulk-material handling chutes, bins, and transfer points.",
          "High-abrasion and impact zones.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Base-equipment drawings and wear-zone geometry.",
          "Required thickness and material grade.",
          "Bolt-on or weld-on attachment method.",
          "Expected abrasion, impact severity, and replacement strategy.",
        ],
      },
    ],
    note:
      "Share your equipment drawings, wear zones, material grade, thickness, and attachment method. NESF will propose a replacement-ready liner package.",
    enquiry: {
      title: "Request a quote for Hard Plate / Wear Plate Liners",
      subtitle: "Share your equipment drawings, wear severity, liner grade, thickness, and attachment requirements.",
      productName: "Hard Plate / Wear Plate Liners",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Hard Plate & Wear Plate Liners | Fabrication by NESF",
      description:
        "Replaceable hard plate and wear-plate liners fabricated for abrasive chutes, hoppers, bins, pipes, bends, ducts, and transfer points.",
      keywords: [
        "wear plate liner fabrication",
        "hard plate liner",
        "replaceable wear liners",
        "AR plate fabrication",
        "industrial wear liners india",
      ],
    },
  },
  "custom-heavy-structural-fabrication": {
    title: "Heavy Structural Fabrication (Custom)",
    headline: "Build-to-Drawing Heavy Structural Fabrication for Industrial Projects",
    description:
      "Custom heavy structural assemblies fabricated with controlled fit-up, dimensional accuracy, site-friendly modules, and project documentation.",
    pagePath: "/products/custom-heavy-structural-fabrication",
    image: "/product/16.jpg",
    imageAlt: "Custom heavy structural fabrication by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Scope", value: "Frames, racks, platforms, and modules" },
      { label: "Execution", value: "Cutting, forming, welding, and assembly" },
      { label: "Installation", value: "Match-marked site-friendly modules" },
      { label: "QA", value: "Dimensional, weld, and traceability records" },
    ],
    overview: [
      "NESF undertakes custom heavy structural fabrication for industrial projects, built to drawings and specifications with consistent dimensional control.",
      "Assemblies can be modularized, match-marked, coated, and packed to support efficient transport and site erection.",
    ],
    sections: [
      {
        title: "What We Fabricate",
        bullets: [
          "Pipe racks, equipment-support frames, platforms, walkways, ladders, and handrails.",
          "Heavy equipment frames, skids, base frames, and lifting beams.",
          "Bracing frames, columns, beams, built-up sections, and stiffened structures.",
          "Customized structural modules for fast site erection.",
        ],
      },
      {
        title: "Capabilities",
        bullets: [
          "Cutting, drilling, forming, rolling, welding, and assembly.",
          "Fit-up in jigs and match-marking for site assembly.",
          "Surface preparation, painting, and coating as required.",
          "Packing suitable for safe transport and erection sequencing.",
        ],
      },
      {
        title: "Inspection & Documentation",
        bullets: [
          "Dimensional and connection-interface inspection.",
          "Weld visual inspection and NDT where specified.",
          "Material traceability and QA documentation.",
          "Part identification, match-marking, and dispatch records.",
        ],
      },
      {
        title: "Typical Industries",
        bullets: [
          "Chemical and process plants.",
          "Utilities, power, and oil and gas projects.",
          "Bulk-material handling facilities.",
          "General industrial and heavy-engineering projects.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Structural drawings and connection details.",
          "Steel grade, section schedule, and fabrication quantities.",
          "Coating system and site-environment requirements.",
          "Erection constraints, module sizes, inspection, and NDT requirements.",
        ],
      },
    ],
    note:
      "Share your structural drawings, steel grade, connection details, coating system, and erection constraints. NESF will propose a clear fabrication and delivery plan.",
    enquiry: {
      title: "Request a quote for Heavy Structural Fabrication",
      subtitle: "Share your structural drawings, steel grade, quantities, coating, erection, and inspection requirements.",
      productName: "Heavy Structural Fabrication",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Heavy Structural Fabrication | Custom Industrial Builds by NESF",
      description:
        "Custom heavy structural fabrication for pipe racks, platforms, frames, skids, lifting beams, built-up sections, and site-ready modules.",
      keywords: [
        "heavy structural fabrication",
        "industrial structural fabrication",
        "pipe rack fabrication",
        "custom steel structures",
        "heavy fabrication india",
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
