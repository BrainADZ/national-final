import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const CATEGORY_NAME = "Pressure Vessels & Storage";

export type ProductSection = {
  title: string;
  body?: string[];
  bullets?: string[];
};

export type ProductDetail = {
  title: string;
  headline: string;
  description: string;
  pagePath: string;
  image: string;
  imageAlt: string;
  imagePosition?: string;
  quickFacts: { label: string; value: string }[];
  overview: string[];
  sections: ProductSection[];
  note: string;
  enquiry: {
    title: string;
    subtitle: string;
    productName: string;
    buttonText: string;
  };
  seo: {
    title: string;
    description: string;
    keywords?: string[];
  };
};

export const pressureVesselNav = [
  {
    label: "Air Receiver Vessels",
    href: "/products/air-receiver-vessels",
  },
  {
    label: "Nitrogen Buffer / Gas Storage Tanks",
    href: "/products/nitrogen-buffer-gas-storage-tanks",
  },
  {
    label: "Horizontal Storage Tanks",
    href: "/products/horizontal-storage-tanks",
  },
  {
    label: "Vertical Storage Tanks",
    href: "/products/vertical-storage-tanks",
  },
  {
    label: "Blowdown / Flash Tanks",
    href: "/products/blowdown-flash-tanks",
  },
  {
    label: "Water Holding / Utility Vessels",
    href: "/products/water-holding-utility-vessels",
  },
  {
    label: "Filter Vessels (Activated Carbon / Softener)",
    href: "/products/filter-vessels",
  },
  {
    label: "Custom Pressure Vessels (As per drawing/spec)",
    href: "/products/custom-pressure-vessels",
  },
];

export const productDetails = {
  "air-receiver-vessels": {
    title: "Air Receiver Vessels",
    headline: "Industrial Compressed Air Storage Solutions",
    description:
      "Air receiver vessels built to stabilize pressure, reduce compressor cycling, and support reliable plant air systems.",
    pagePath: "/products/air-receiver-vessels",
    image: "/product/7.jpg",
    imageAlt: "Air receiver vessel fabricated by National Engineers",
    imagePosition: "center",
    quickFacts: [
      { label: "Application", value: "Compressed air storage" },
      { label: "Configuration", value: "Vertical or horizontal" },
      { label: "Materials", value: "Carbon steel / stainless steel" },
      { label: "Documentation", value: "QAP, ITP, test reports" },
    ],
    overview: [
      "NESF manufactures air receiver vessels for compressed air systems to stabilize pressure, reduce compressor cycling, and improve plant air quality and reliability.",
      "Each vessel is fabricated for industrial duty with robust welding, traceable materials, and disciplined QA/QC practices from fit-up to final inspection.",
    ],
    sections: [
      {
        title: "What it's used for",
        bullets: [
          "Buffer storage to handle peak air demand.",
          "Pressure stabilization to protect downstream tools and equipment.",
          "Moisture separation when supplied with drain and accessories.",
          "Improved compressor efficiency and longer equipment lifecycle.",
        ],
      },
      {
        title: "Typical Construction & Options",
        bullets: [
          "Vertical or horizontal orientation.",
          "Inlet, outlet, drain, vent, manhole, or handhole nozzles.",
          "Supports such as saddles, legs, or skirt as required.",
          "Safety valve, pressure gauge, moisture drain, NRV, and isolation valves.",
          "Optional internal lining or coating based on service conditions.",
        ],
      },
      {
        title: "Materials of Construction",
        bullets: [
          "Carbon steel or stainless steel as per service requirement.",
          "Internals and nozzles designed for corrosion and temperature conditions.",
        ],
      },
      {
        title: "Fabrication & Quality Controls",
        bullets: [
          "Qualified welding procedures and controlled fit-up.",
          "Stage-wise inspection and quality monitoring.",
          "NDT as specified, including DPT, MPT, UT, or RT where required.",
          "Hydro or pneumatic testing as applicable.",
          "Dimensional checks and final documentation package.",
        ],
      },
      {
        title: "Scope of Supply",
        bullets: [
          "Complete vessel with nozzles and supports.",
          "Surface preparation with primer, paint, or coating system.",
          "QAP, ITP, test certificates, and inspection reports as agreed.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Design pressure and temperature with operating conditions.",
          "Required capacity, volume, or airflow demand.",
          "Material preference, corrosion allowance, and painting system.",
          "Code, inspection requirements, and accessories list.",
        ],
      },
    ],
    note:
      "Share your compressed air duty details and NESF will size the vessel around your plant requirement.",
    enquiry: {
      title: "Request a quote for an Air Receiver Vessel",
      subtitle:
        "Custom sizes and configurations available based on your plant requirements.",
      productName: "Air Receiver Vessel",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Air Receiver Vessels | National Engineers",
      description:
        "Explore industrial air receiver vessels by National Engineers for compressed air storage, pressure stabilization, and reliable plant performance.",
      keywords: [
        "air receiver vessel manufacturer",
        "compressed air storage vessel",
        "industrial air receiver tank",
        "pressure vessel fabrication india",
      ],
    },
  },
  "nitrogen-buffer-gas-storage-tanks": {
    title: "Nitrogen Buffer / Gas Storage Tanks",
    headline: "Stable Gas Availability for Demanding Plant Operations",
    description:
      "Nitrogen buffer and gas storage tanks fabricated for demand fluctuation control, line stability, and uninterrupted operations.",
    pagePath:
      "/products/nitrogen-buffer-gas-storage-tanks",
    image: "/product/6.jpg",
    imageAlt: "Nitrogen buffer gas storage tank fabricated by National Engineers",
    imagePosition: "center",
    quickFacts: [
      { label: "Application", value: "N2 and gas buffering" },
      { label: "Integration", value: "Cylinder bank, PSA, or vaporizer outlet" },
      { label: "Safety", value: "PSV, PRV, gauges, rupture disc options" },
      { label: "Inputs", value: "P&ID, gas data, storage capacity" },
    ],
    overview: [
      "NESF fabricates nitrogen buffer and gas storage tanks to ensure stable gas availability, manage demand fluctuations, and support uninterrupted plant operations.",
      "The build can be adapted for cylinder banks, PSA systems, or liquid nitrogen vaporizer outlets depending on the plant layout and duty cycle.",
    ],
    sections: [
      {
        title: "What it's used for",
        bullets: [
          "Buffering N2 supply for purging, blanketing, and inerting.",
          "Managing demand spikes in process lines.",
          "Improving regulator and line stability while reducing pressure drop issues.",
        ],
      },
      {
        title: "Typical Construction & Options",
        bullets: [
          "Vertical or horizontal storage configuration.",
          "Nozzle arrangements as per P&ID.",
          "PSV, PRV, pressure gauges, and rupture disc if required.",
          "Earthing lug, lifting lugs, nameplate, and inspection openings.",
          "Skid mounting option with buffer vessel and valve station.",
        ],
      },
      {
        title: "Materials of Construction",
        bullets: [
          "Carbon steel or stainless steel selected as per gas purity, environment, and corrosion conditions.",
        ],
      },
      {
        title: "Fabrication & Quality Controls",
        bullets: [
          "Controlled welding and full traceability aligned with NESF QA/QC systems.",
          "Pressure testing and leakage checks as applicable.",
          "Documentation pack for audits and maintenance.",
        ],
      },
      {
        title: "Scope of Supply",
        bullets: [
          "Tank with supports, standard fittings, and paint or coating system.",
          "Testing, marking, and documentation as agreed.",
          "Optional skid-mounted valve station and accessories.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Gas type and purity.",
          "Design and operating pressure / temperature.",
          "Required storage capacity in Nm3 and duty cycle.",
          "Accessories, instrumentation, line requirements, and site conditions.",
        ],
      },
    ],
    note:
      "Share your P&ID or specification to get a compliant nitrogen buffer tank.",
    enquiry: {
      title: "Request a quote for a Nitrogen Buffer Tank",
      subtitle:
        "Share your P&ID, gas data, storage capacity, and site requirements for a compliant solution.",
      productName: "Nitrogen Buffer / Gas Storage Tank",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Nitrogen Buffer & Gas Storage Tanks | National Engineers",
      description:
        "NESF fabricates nitrogen buffer and gas storage tanks for stable gas availability, demand fluctuation control, and uninterrupted plant operations.",
      keywords: [
        "nitrogen buffer tank manufacturer",
        "gas storage tank manufacturer",
        "nitrogen storage tank fabrication",
        "industrial gas buffer vessel",
        "pressure vessel fabrication india",
      ],
    },
  },
  "horizontal-storage-tanks": {
    title: "Horizontal Storage Tanks",
    headline: "Low-Height Storage Tanks for Process and Utility Duties",
    description:
      "Horizontal tanks engineered for process liquids, utility fluids, chemical storage, safe handling, and long service life.",
    pagePath: "/products/horizontal-storage-tanks",
    image: "/product/14.jpg",
    imageAlt: "Horizontal storage tank fabricated by National Engineers",
    imagePosition: "center",
    quickFacts: [
      { label: "Application", value: "Liquid and utility storage" },
      { label: "Support", value: "Saddles with base plates" },
      { label: "Protection", value: "Coating or lining options" },
      { label: "Testing", value: "Leak checks and hydro testing" },
    ],
    overview: [
      "NESF manufactures horizontal storage tanks for process liquids, utility fluids, and chemical storage, engineered for safe handling, easy maintenance, and long service life.",
      "The layout is practical for sites where lower height, stable foundation design, and easy nozzle access matter.",
    ],
    sections: [
      {
        title: "What it's used for",
        bullets: [
          "Water, fuel, chemicals, and process liquids as per compatibility.",
          "Day tanks, intermediate storage, and bulk storage.",
          "Systems requiring low height and a stable foundation layout.",
        ],
      },
      {
        title: "Typical Construction & Options",
        bullets: [
          "Single-wall construction with manhole, vent, drain, and overflow.",
          "Saddle supports with base plates and anchor provisions.",
          "Internal baffles for surge control if required.",
          "Float, DP, radar, level gauge, and sampling point options.",
          "Lining and coating options for corrosion protection.",
        ],
      },
      {
        title: "Materials of Construction",
        bullets: [
          "Carbon steel or stainless steel.",
          "Optional rubber lining, FRP lining, or epoxy coating as per service requirement.",
        ],
      },
      {
        title: "Fabrication & Quality Controls",
        bullets: [
          "Fit-up control, weld traceability, and inspection discipline.",
          "Vacuum box or leak checks where applicable.",
          "Hydro testing as per requirement.",
          "Dimensional and nozzle orientation checks.",
        ],
      },
      {
        title: "Scope of Supply",
        bullets: [
          "Tank with supports and nozzles.",
          "Surface preparation and painting system.",
          "Documentation pack as agreed.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Media stored, specific gravity, temperature, and corrosion considerations.",
          "Capacity, plot dimensions, and nozzle / P&ID details.",
          "MOC and coating / lining requirement.",
          "Installation location and exposure conditions.",
        ],
      },
    ],
    note:
      "Tell us your capacity and service to get a tank optimized for your site.",
    enquiry: {
      title: "Request a quote for a Horizontal Storage Tank",
      subtitle:
        "Share your capacity, media, MOC, coating, and site requirements for a tank optimized to your layout.",
      productName: "Horizontal Storage Tank",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Horizontal Storage Tanks | National Engineers",
      description:
        "NESF manufactures horizontal storage tanks for process liquids, utility fluids, and chemical storage with safe handling, easy maintenance, and long service life.",
      keywords: [
        "horizontal storage tank manufacturer",
        "industrial storage tank fabrication",
        "chemical storage tank manufacturer",
        "process liquid storage tanks",
        "horizontal tank fabrication india",
      ],
    },
  },
  "vertical-storage-tanks": {
    title: "Vertical Storage Tanks",
    headline: "Bulk Storage Tanks with Optimized Plant Footprint",
    description:
      "Vertical storage tanks fabricated for bulk and utility storage with safe access, maintainable nozzles, and configurable roof designs.",
    pagePath: "/products/vertical-storage-tanks",
    image: "/product/2.jpg",
    imageAlt: "Vertical storage tank fabricated by National Engineers",
    imagePosition: "center",
    quickFacts: [
      { label: "Application", value: "Bulk and utility storage" },
      { label: "Roof Options", value: "Cone, dome, or open-top" },
      { label: "Access", value: "Ladder, platform, handrail" },
      { label: "Fitment", value: "Custom nozzle orientation" },
    ],
    overview: [
      "NESF fabricates vertical storage tanks for bulk and utility storage with optimized footprint, safe access, and configurable nozzle and instrument arrangements.",
      "Each tank can be adapted for site constraints, roof type, media compatibility, access platforms, and project documentation needs.",
    ],
    sections: [
      {
        title: "What it's used for",
        bullets: [
          "Bulk storage where floor space is limited.",
          "Water, utility, process, or chemical storage as per service compatibility.",
          "Gravity feed applications and stable head requirements.",
        ],
      },
      {
        title: "Typical Construction & Options",
        bullets: [
          "Cone roof, dome roof, or open-top design as required.",
          "Inlet, outlet, vent, overflow, drain, and manhole nozzles.",
          "Ladder, platform, handrail, and level indication.",
          "Mixing or recirculation nozzles as optional provisions.",
          "Internal lining or coating for corrosion service.",
        ],
      },
      {
        title: "Materials of Construction",
        bullets: [
          "Carbon steel or stainless steel.",
          "Internals and fittings as per media compatibility.",
        ],
      },
      {
        title: "Fabrication & Quality Controls",
        bullets: [
          "Controlled fabrication with QA/QC and safety-first execution.",
          "Weld inspection stages and testing as specified.",
          "Dimensional checks for roundness, verticality, and nozzle orientation.",
        ],
      },
      {
        title: "Scope of Supply",
        bullets: [
          "Tank shell, roof, and supports.",
          "Platforms and ladders if required.",
          "Painting / coating and documentation as agreed.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Capacity, diameter / height constraints, and media details.",
          "Roof type preference and access requirements.",
          "Instrumentation / nozzle list and P&ID.",
          "Coating / lining and corrosion allowance requirement.",
        ],
      },
    ],
    note:
      "Send your layout and nozzle list, and NESF will engineer the right build.",
    enquiry: {
      title: "Request a quote for a Vertical Storage Tank",
      subtitle:
        "Share your layout, capacity, roof type, nozzle list, and corrosion requirements for the right build.",
      productName: "Vertical Storage Tank",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Vertical Storage Tanks | National Engineers",
      description:
        "NESF fabricates vertical storage tanks for bulk and utility storage with optimized footprint, safe access, and configurable nozzle and instrument arrangements.",
      keywords: [
        "vertical storage tank manufacturer",
        "bulk storage tank fabrication",
        "industrial vertical tanks",
        "chemical storage tank manufacturer",
        "utility storage tank fabrication",
      ],
    },
  },
  "blowdown-flash-tanks": {
    title: "Blowdown / Flash Tanks",
    headline: "Safe Pressure Release and Flash Steam Separation",
    description:
      "Blowdown and flash tanks manufactured to handle sudden pressure release, flash steam separation, and downstream protection.",
    pagePath: "/products/blowdown-flash-tanks",
    image: "/product/11.jpg",
    imageAlt: "Blowdown flash tank fabricated by National Engineers",
    imagePosition: "center",
    quickFacts: [
      { label: "Application", value: "Boiler blowdown handling" },
      { label: "Internals", value: "Diffusers or baffles" },
      { label: "Interface", value: "Steam and condensate lines" },
      { label: "Testing", value: "Pressure and nozzle alignment checks" },
    ],
    overview: [
      "NESF manufactures blowdown and flash tanks to safely handle sudden pressure release, separate flash steam, and protect downstream drainage and recovery systems.",
      "The fabrication is planned around flow, inlet pressure, venting arrangement, nozzle interface, and testing requirements.",
    ],
    sections: [
      {
        title: "What it's used for",
        bullets: [
          "Boiler blowdown handling and energy recovery systems.",
          "Flash steam separation and condensate management.",
          "Reducing thermal shock and controlling discharge safely.",
        ],
      },
      {
        title: "Typical Construction & Options",
        bullets: [
          "Inlet diffuser or baffle arrangements.",
          "Vent / steam outlet, condensate outlet, drain, and manhole.",
          "Level control, pressure gauge, and temperature point instrumentation.",
          "Safety valves and steam piping interface provisions.",
          "Optional skid integration with valves and control stations.",
        ],
      },
      {
        title: "Materials of Construction",
        bullets: [
          "Carbon steel or stainless steel selected based on water chemistry, temperature, and corrosion conditions.",
        ],
      },
      {
        title: "Fabrication & Quality Controls",
        bullets: [
          "Welding procedures and inspection traceability per NESF systems.",
          "Pressure testing as applicable.",
          "Dimensional and nozzle alignment checks to match site piping.",
        ],
      },
      {
        title: "Scope of Supply",
        bullets: [
          "Flash tank vessel with internals if required.",
          "Supports, nozzles, and painting system.",
          "Documentation pack and inspection records.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Flow rate, inlet pressure / temperature, and discharge requirements.",
          "P&ID and desired separation / vent arrangement.",
          "Space constraints and interface nozzle details.",
          "Inspection and testing requirements.",
        ],
      },
    ],
    note:
      "Share your blowdown conditions, and NESF will size and fabricate accordingly.",
    enquiry: {
      title: "Request a quote for a Blowdown / Flash Tank",
      subtitle:
        "Share flow rate, pressure, temperature, P&ID, vent arrangement, and inspection requirements.",
      productName: "Blowdown / Flash Tank",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Blowdown & Flash Tanks | National Engineers",
      description:
        "NESF manufactures blowdown and flash tanks to handle sudden pressure release, separate flash steam, and protect drainage and recovery systems.",
      keywords: [
        "blowdown tank manufacturer",
        "flash tank manufacturer",
        "boiler blowdown tank",
        "flash steam separation tank",
        "industrial pressure vessel fabrication",
      ],
    },
  },
  "water-holding-utility-vessels": {
    title: "Water Holding / Utility Vessels",
    headline: "Reliable Utility Vessels for Industrial Plant Support",
    description:
      "Water holding and utility vessels built for durability, maintainability, and dependable plant utility distribution.",
    pagePath:
      "/products/water-holding-utility-vessels",
    image: "/product/9.jpg",
    imageAlt: "Water holding utility vessel fabricated by National Engineers",
    imagePosition: "center",
    quickFacts: [
      { label: "Application", value: "Utility and process water" },
      { label: "Design", value: "Vertical or horizontal" },
      { label: "Coating", value: "Epoxy or bituminous systems" },
      { label: "Validation", value: "Hydro and leak checks" },
    ],
    overview: [
      "NESF fabricates water holding and utility vessels for industrial plants, built for durability, maintainability, and reliable utility distribution.",
      "The vessels can support raw water, DM water, soft water, service water, cooling water, and buffer duties as per system design.",
    ],
    sections: [
      {
        title: "What it's used for",
        bullets: [
          "Utility water storage, buffer tanks, and process water holding.",
          "Cooling water or service water reservoirs as per system design.",
          "Stabilizing supply for utility pumps and pipelines.",
        ],
      },
      {
        title: "Typical Construction & Options",
        bullets: [
          "Vertical or horizontal designs.",
          "Manhole, vent, overflow, drain, and level connections.",
          "Internal coating for corrosion, such as epoxy or bituminous systems as specified.",
          "Platforms and ladders for vertical tanks.",
          "Skid option with pumps and accessories, project dependent.",
        ],
      },
      {
        title: "Materials of Construction",
        bullets: ["Carbon steel or stainless steel, service dependent."],
      },
      {
        title: "Fabrication & Quality Controls",
        bullets: [
          "Controlled fabrication with QA/QC, welding qualification, and traceability.",
          "Hydro testing and leak checks as specified.",
          "Surface preparation and coating DFT checks if coated.",
        ],
      },
      {
        title: "Scope of Supply",
        bullets: [
          "Vessel, supports, and nozzles.",
          "Painting / coating and documentation as agreed.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Capacity, temperature, and water type such as raw, DM, soft, or service water.",
          "Corrosion allowance and coating specification.",
          "Nozzle list / P&ID and site constraints.",
        ],
      },
    ],
    note:
      "Get a utility vessel that matches your plant's maintenance and uptime needs.",
    enquiry: {
      title: "Request a quote for a Water Holding / Utility Vessel",
      subtitle:
        "Share capacity, water type, corrosion allowance, coating spec, nozzle list, and site constraints.",
      productName: "Water Holding / Utility Vessel",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Water Holding & Utility Vessels | National Engineers",
      description:
        "NESF fabricates water holding and utility vessels for industrial plants with durable construction, maintainable layouts, and reliable utility distribution.",
      keywords: [
        "water holding vessel manufacturer",
        "utility vessel fabrication",
        "process water tank manufacturer",
        "industrial water storage vessel",
        "utility water buffer tank",
      ],
    },
  },
  "filter-vessels": {
    title: "Filter Vessels (Activated Carbon / Softener)",
    headline: "Filtration Vessels for Water Treatment and Process Skids",
    description:
      "Filter vessels built for activated carbon, softener, and media filtration duties with reliable backwash cycles.",
    pagePath: "/products/filter-vessels",
    image: "/product/12.jpg",
    imageAlt: "Filter vessel and softener tank fabricated by National Engineers",
    imagePosition: "center",
    quickFacts: [
      { label: "Application", value: "Water treatment vessels" },
      { label: "Internals", value: "Distributor / collector options" },
      { label: "Operation", value: "Service and backwash nozzles" },
      { label: "Scope", value: "Vessel, internals, coating" },
    ],
    overview: [
      "NESF manufactures filter vessels for activated carbon, softener, and media filtration duties, engineered for safe pressure containment, reliable backwash cycles, and easy media maintenance.",
      "The vessels can be supplied as standalone units or as part of multi-vessel skid arrangements based on the P&ID and flow requirement.",
    ],
    sections: [
      {
        title: "What it's used for",
        bullets: [
          "Activated carbon filtration for odor, color, and organic removal.",
          "Softener vessels for hardness reduction.",
          "Multimedia filtration and pre-treatment systems.",
          "Industrial water treatment skids.",
        ],
      },
      {
        title: "Typical Construction & Options",
        bullets: [
          "Top and bottom nozzles for service and backwash.",
          "Internal distributor / collector arrangements as specified.",
          "Manhole for media loading and unloading.",
          "Vent, drain, sampling, and pressure tapping.",
          "Multi-vessel skids for parallel operation if required.",
        ],
      },
      {
        title: "Materials of Construction",
        bullets: [
          "Carbon steel with internal lining or coating is common.",
          "Stainless steel for corrosive environments or hygiene requirements.",
        ],
      },
      {
        title: "Fabrication & Quality Controls",
        bullets: [
          "Welding, inspection, and traceability as per NESF QA/QC discipline.",
          "Pressure testing and leak validation.",
          "Dimensional checks for internals fitment and nozzle orientation.",
        ],
      },
      {
        title: "Scope of Supply",
        bullets: [
          "Vessel body, supports, and nozzles.",
          "Internals if included in scope.",
          "Coating / lining and documentation pack.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Flow rate, filtration media type, and operating pressure / temperature.",
          "Vessel count, backwash requirement, and P&ID.",
          "MOC / coating requirement and accessories list.",
        ],
      },
    ],
    note:
      "Send your water treatment P&ID, and NESF will build vessels to match it.",
    enquiry: {
      title: "Request a quote for Filter Vessels",
      subtitle:
        "Share flow rate, media type, vessel count, backwash requirement, P&ID, MOC, and accessories list.",
      productName: "Filter Vessel / Softener Tank",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Filter Vessels & Softener Tanks | National Engineers",
      description:
        "NESF manufactures filter vessels for activated carbon, softener, and media filtration duties with safe pressure containment and reliable backwash cycles.",
      keywords: [
        "filter vessel manufacturer",
        "activated carbon filter vessel",
        "softener vessel manufacturer",
        "media filtration vessel",
        "industrial water treatment vessel",
      ],
    },
  },
  "custom-pressure-vessels": {
    title: "Custom Pressure Vessels",
    headline: "Custom-Engineered Vessels Built to Client Drawings",
    description:
      "Custom pressure vessels manufactured as per client drawings, datasheets, and project specifications for industrial applications.",
    pagePath: "/products/custom-pressure-vessels",
    image: "/product/23.jpeg",
    imageAlt: "Custom pressure vessel fabricated by National Engineers",
    imagePosition: "center",
    quickFacts: [
      { label: "Build Basis", value: "Drawings, datasheets, BOM" },
      { label: "Controls", value: "NDT, PWHT, hold points" },
      { label: "Records", value: "MDR and inspection documents" },
      { label: "Industries", value: "Oil & gas, chemicals, utilities" },
    ],
    overview: [
      "NESF specializes in custom-engineered pressure vessels manufactured strictly as per client drawings, datasheets, and project specifications, covering vessels, reactors, air receivers, and process equipment.",
      "When code compliance is required, pressure vessel construction rules commonly reference recognized standards such as ASME BPVC Section VIII, as applicable.",
    ],
    sections: [
      {
        title: "What We Build",
        bullets: [
          "Process vessels, separators, and buffer vessels.",
          "Specialized nozzle-heavy vessels for skids.",
          "High-temperature or corrosive-service vessels, MOC dependent.",
          "Package units for oil & gas, chemicals, and utilities.",
        ],
      },
      {
        title: "Build-To Specifications",
        bullets: [
          "Client drawings, datasheets, and BOM.",
          "MOC, corrosion allowance, PWHT, and NDT requirements.",
          "Code / inspection requirements and documentation format.",
          "Painting / coating, insulation supports, and instrumentation nozzles.",
        ],
      },
      {
        title: "Fabrication & Quality Controls",
        bullets: [
          "Engineering-to-commissioning capability and disciplined QA/QC.",
          "Weld traceability, inspection hold points, and stage-wise checks.",
          "Hydro / pneumatic testing as applicable.",
          "Complete MDR compilation as agreed.",
        ],
      },
      {
        title: "Scope of Supply",
        bullets: [
          "Fabrication, testing, and surface protection.",
          "Optional accessories and project-specific fittings.",
          "Documentation pack aligned to your project requirement.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Drawings / datasheets and design conditions.",
          "NDT / PWHT requirements and acceptance criteria.",
          "Third-party inspection requirement, if any.",
          "Delivery location, timeline, and packaging expectations.",
        ],
      },
    ],
    note:
      "Upload your drawing or specification, and NESF will respond with a technical and commercial proposal.",
    enquiry: {
      title: "Request a quote for a Custom Pressure Vessel",
      subtitle:
        "Upload drawings, datasheets, design conditions, NDT/PWHT requirements, and inspection expectations.",
      productName: "Custom Pressure Vessel",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Custom Pressure Vessels | National Engineers",
      description:
        "NESF manufactures custom-engineered pressure vessels as per client drawings, datasheets, and project specifications for industrial applications.",
      keywords: [
        "custom pressure vessel manufacturer",
        "pressure vessel fabrication as per drawing",
        "process vessel manufacturer",
        "custom engineered pressure vessels",
        "industrial pressure vessel fabrication",
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
