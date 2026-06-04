import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import type { ProductDetail } from "../pressure-vessels-and-storage/productDetails";

export const CATEGORY_NAME = "Material Handling & Storage (Bulk / Solid)";

export const materialHandlingNav = [
  {
    label: "Hoppers & Flakes Hoppers",
    href: "/products/material-handling-and-storage/hoppers-flakes-hoppers",
  },
  {
    label: "Silos & Storage Bins",
    href: "/products/material-handling-and-storage/silos-storage-bins",
  },
  {
    label: "Chutes & Transitions",
    href: "/products/material-handling-and-storage/chutes-transitions",
  },
  {
    label: "Tow Bin / Tow Can",
    href: "/products/material-handling-and-storage/tow-bin-tow-can",
  },
  {
    label: "Bulk Handling Fabrication (Custom)",
    href: "/products/material-handling-and-storage/custom-bulk-handling-fabrication",
  },
];

export const productDetails = {
  "hoppers-flakes-hoppers": {
    title: "Hoppers & Flakes Hoppers",
    headline: "Reliable Bulk-Solid Hoppers for Controlled Material Flow",
    description:
      "Custom bulk-solid and flakes hoppers fabricated for reliable gravity discharge, controlled feeding, and smooth handling of powders, granules, flakes, and chips.",
    pagePath: "/products/material-handling-and-storage/hoppers-flakes-hoppers",
    image: "/product/00.jpg",
    imageAlt: "Industrial flakes hopper fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Materials", value: "Mild steel or stainless steel" },
      { label: "Geometry", value: "Conical, pyramidal, wedge, or custom" },
      { label: "Flow Support", value: "Anti-bridging and flow-assist provisions" },
      { label: "Protection", value: "Replaceable wear-liner options" },
    ],
    overview: [
      "NESF fabricates bulk-solids hoppers designed for reliable gravity discharge, controlled feed, and smooth material flow for powders, granules, flakes, chips, and regrind.",
      "Hoppers can be supplied as standalone units or integrated below silos, bins, cyclone receivers, conveyors, and process equipment.",
    ],
    sections: [
      {
        title: "What We Fabricate",
        bullets: [
          "Rectangular, square, or round hoppers in mild steel or stainless steel.",
          "Conical, pyramidal, wedge, and custom geometries.",
          "Flake hoppers focused on reducing bridging and inconsistent discharge.",
          "Hopper frames, skirts, access doors, and mounting structures.",
        ],
      },
      {
        title: "Optional Design Features",
        bullets: [
          "Provisions for vibrators, air pads, and agitation mounts.",
          "Material-dependent hopper angles and outlet sizing to reduce arching and ratholing.",
          "Replaceable AR plate, ceramic, UHMWPE, or engineering-polymer liners.",
          "Clean-out doors, inspection ports, manholes, and level-switch brackets.",
        ],
      },
      {
        title: "Typical Applications",
        bullets: [
          "Plastic flakes and granules.",
          "Cement, fly ash, minerals, and chemicals.",
          "Biomass and recycling materials.",
          "Food and ingredient handling where material compatibility permits.",
        ],
      },
      {
        title: "Quality & Fabrication Scope",
        bullets: [
          "Fabrication, welding, controlled fit-up, and trial assembly.",
          "Dimensional inspection and outlet-orientation checks.",
          "Surface preparation and painting or finishing as specified.",
          "Build-to-drawing and custom configuration support.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Material handled, bulk density, particle size, moisture, and flow behavior.",
          "Required capacity, outlet size, and discharge equipment interface.",
          "Material of construction and wear-liner requirements.",
          "Access, support, level instrumentation, and flow-assist requirements.",
        ],
      },
    ],
    note:
      "Share your bulk material properties, capacity, outlet requirements, and equipment interfaces. NESF will propose a fabrication-ready hopper configuration.",
    enquiry: {
      title: "Request a quote for Hoppers & Flakes Hoppers",
      subtitle: "Share your material data, capacity, geometry, outlet, wear, and support requirements.",
      productName: "Hoppers & Flakes Hoppers",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Hoppers & Flakes Hoppers | Bulk Handling Fabrication by NESF",
      description:
        "Custom bulk-solid and flakes hoppers fabricated for reliable gravity discharge, anti-bridging performance, wear protection, and plant integration.",
      keywords: [
        "industrial hopper manufacturer",
        "flakes hopper fabrication",
        "bulk solid hopper",
        "custom hopper manufacturer",
        "material handling hopper india",
      ],
    },
  },
  "silos-storage-bins": {
    title: "Silos & Storage Bins",
    headline: "Space-Efficient Bulk Storage with Reliable Discharge",
    description:
      "Storage silos and bulk bins fabricated for safe dry-material storage, consistent discharge, maintenance access, and reliable plant integration.",
    pagePath: "/products/material-handling-and-storage/silos-storage-bins",
    image: "/product/soilTank.jpeg",
    imageAlt: "Industrial storage silos fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Configurations", value: "Conical-bottom or flat-bottom" },
      { label: "Supports", value: "Skirt or leg structures" },
      { label: "Access", value: "Ladders, platforms, and manholes" },
      { label: "Integration", value: "Discharge and dust-control provisions" },
    ],
    overview: [
      "NESF builds storage silos and bulk bins for safe, space-efficient storage of dry bulk materials, designed for consistent discharge, reduced downtime, and easy maintenance.",
      "The final configuration can be adapted around bulk-solid properties, storage capacity, discharge equipment, plant layout, and transport constraints.",
    ],
    sections: [
      {
        title: "What We Fabricate",
        bullets: [
          "Welded silos, storage bins, and day bins.",
          "Conical-bottom or flat-bottom configurations.",
          "Skirt or leg support structures with ladders and platforms.",
          "Discharge cones, hopper sections, and outlet transitions.",
        ],
      },
      {
        title: "Engineering Considerations",
        bullets: [
          "Bulk-solid moisture, particle size, cohesion, and flow behavior.",
          "Geometry planned to reduce plugging, arching, ratholing, and erratic discharge.",
          "Venting, level-instrumentation mounts, and dust-control connections.",
          "Maintenance access and transport-friendly fabrication splits.",
        ],
      },
      {
        title: "Options & Accessories",
        bullets: [
          "Rotary airlock, slide-gate, and diverter mounting provisions.",
          "Wear liners for abrasive service.",
          "Manholes, clean-out doors, and inspection ports.",
          "External stiffeners, lifting lugs, platforms, and access ladders.",
        ],
      },
      {
        title: "Typical Applications",
        bullets: [
          "Cement, minerals, and powder-handling lines.",
          "Grain and food materials where applicable.",
          "Chemicals and plastic raw materials.",
          "Day storage and intermediate bulk storage.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Material properties, required capacity, and discharge rate.",
          "Available footprint, height limits, and support requirements.",
          "Discharge equipment, venting, and instrumentation interfaces.",
          "MOC, wear protection, access, transport, and finishing requirements.",
        ],
      },
    ],
    note:
      "Share your material data, capacity, discharge arrangement, layout, and access requirements. NESF will propose a fabrication-ready silo or storage-bin scope.",
    enquiry: {
      title: "Request a quote for Silos & Storage Bins",
      subtitle: "Share your material properties, capacity, layout, discharge, support, and access requirements.",
      productName: "Silos & Storage Bins",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Silos & Storage Bins | Bulk Storage Fabrication by NESF",
      description:
        "Industrial silos and bulk storage bins fabricated for dry materials with reliable discharge, access provisions, wear options, and plant integration.",
      keywords: [
        "industrial silo manufacturer",
        "bulk storage bin fabrication",
        "dry material silo",
        "storage bin manufacturer",
        "bulk solid storage india",
      ],
    },
  },
  "chutes-transitions": {
    title: "Chutes & Transitions",
    headline: "Wear-Resistant Transfer Chutes for Reliable Material Movement",
    description:
      "Bulk-material chutes, spouts, and transitions fabricated to connect equipment while reducing spillage, dust escape, blockages, and wear.",
    pagePath: "/products/material-handling-and-storage/chutes-transitions",
    image: "/product/13.jpg",
    imageAlt: "Industrial chutes and transitions fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Build Scope", value: "Chutes, spouts, transitions, offsets" },
      { label: "Protection", value: "Replaceable wear liners" },
      { label: "Maintenance", value: "Bolted panels and access provisions" },
      { label: "Integration", value: "Conveyors and process equipment" },
    ],
    overview: [
      "NESF fabricates bulk-material chutes, spouts, and transitions to connect equipment and conveyors while minimizing spillage, dust escape, blockages, and wear at transfer points.",
      "Geometry, impact zones, liners, and maintenance access can be configured around the handled material and plant layout.",
    ],
    sections: [
      {
        title: "What We Fabricate",
        bullets: [
          "Conveyor discharge and receiving chutes.",
          "Round-to-rectangular, rectangular-to-round, and custom-offset transitions.",
          "Feed spouts, drop chutes, and diverter housings.",
          "Bolt-on liner frames and maintenance access panels.",
        ],
      },
      {
        title: "Performance-Focused Features",
        bullets: [
          "Geometry planned around material trajectory and impact zones.",
          "Design provisions to reduce plugging, spillage, and dust escape.",
          "Replaceable AR steel, ceramic, or polymer wear liners.",
          "Flanged or bolted sections for easier maintenance and reduced downtime.",
        ],
      },
      {
        title: "Where Used",
        bullets: [
          "Mining, minerals, cement, and fertilizer handling.",
          "Chemical, biomass, and recycling lines.",
          "Conveyors, bins, hoppers, and process-equipment interfaces.",
          "General bulk-material transfer points.",
        ],
      },
      {
        title: "Quality & Fabrication",
        bullets: [
          "Controlled fit-up and dimensional interface checks.",
          "Wear-liner frame and access-panel fitment.",
          "Surface finishing and marking as specified.",
          "Modular packing for safe transport and site installation.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Material type, particle size, moisture, abrasiveness, and flow rate.",
          "Equipment interfaces, elevations, and available envelope.",
          "Required liner system, access panels, and dust-control provisions.",
          "Drawings, support details, surface finish, and delivery requirements.",
        ],
      },
    ],
    note:
      "Share your material data, equipment interfaces, transfer geometry, and wear requirements. NESF will propose a fabrication-ready chute or transition scope.",
    enquiry: {
      title: "Request a quote for Chutes & Transitions",
      subtitle: "Share your material data, layouts, interfaces, wear zones, and access requirements.",
      productName: "Chutes & Transitions",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Chutes & Transitions | Bulk Handling Fabrication by NESF",
      description:
        "Custom bulk-material chutes, spouts, and transitions fabricated with wear protection, maintenance access, and accurate equipment interfaces.",
      keywords: [
        "industrial chute manufacturer",
        "bulk material chute fabrication",
        "conveyor transition fabrication",
        "wear lined chute",
        "custom transfer chute india",
      ],
    },
  },
  "tow-bin-tow-can": {
    title: "Tow Bin / Tow Can",
    headline: "Heavy-Duty Towable Bins for Safe Internal Material Logistics",
    description:
      "Tow bins and tow cans fabricated for safe, efficient movement of bulk solids, scrap, chips, flakes, and production waste between plant stations.",
    pagePath: "/products/material-handling-and-storage/tow-bin-tow-can",
    image: "/product/4.jpg",
    imageAlt: "Industrial tow bin and tow can fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Application", value: "Internal plant material movement" },
      { label: "Mobility", value: "Wheels, casters, or skid base" },
      { label: "Discharge", value: "Bottom, side, or fork-pocket options" },
      { label: "Protection", value: "Wear plate and coating options" },
    ],
    overview: [
      "NESF supplies fabricated tow bins and tow cans for internal plant logistics, used to move bulk solids, scrap, chips, flakes, and production waste safely and efficiently between stations.",
      "Each build can be adapted around floor layout, towing method, load rating, discharge method, and material-service conditions.",
    ],
    sections: [
      {
        title: "What We Fabricate",
        bullets: [
          "Towable bins with reinforced frames and lifting points.",
          "Heavy-duty wheel, caster, or skid-base configurations.",
          "Bottom-dump, side-discharge, and fork-pocket options.",
          "Optional covers, lids, and identification plates.",
        ],
      },
      {
        title: "Why Tow Bins Are Used",
        bullets: [
          "Efficient movement of large material volumes within plants.",
          "Reduced manual handling between production stations.",
          "Temporary storage and organized material segregation.",
          "Repeatable handling around plant logistics routes.",
        ],
      },
      {
        title: "Options",
        bullets: [
          "Wear plates in high-impact zones.",
          "Drain points for wet-material service.",
          "Corrosion-resistant coatings or stainless-steel construction.",
          "Custom towing, lifting, fork, and discharge arrangements.",
        ],
      },
      {
        title: "Quality & Fabrication",
        bullets: [
          "Reinforced structural frame and controlled weld fit-up.",
          "Wheel, caster, lifting-point, and fork-pocket alignment checks.",
          "Load-oriented fabrication based on client specifications.",
          "Surface finishing, marking, and dispatch preparation.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Material handled, required volume, and maximum load.",
          "Floor layout, towing method, and turning constraints.",
          "Wheel, caster, skid, fork, lifting, and discharge preferences.",
          "Wear, corrosion, drain, cover, and finish requirements.",
        ],
      },
    ],
    note:
      "Share your material, load rating, floor layout, towing method, and discharge needs. NESF will propose a build-to-spec tow bin or tow can.",
    enquiry: {
      title: "Request a quote for a Tow Bin / Tow Can",
      subtitle: "Share your material, capacity, load rating, mobility, and discharge requirements.",
      productName: "Tow Bin / Tow Can",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Tow Bin & Tow Can | Custom Industrial Fabrication by NESF",
      description:
        "Heavy-duty tow bins and tow cans fabricated for safe internal movement of bulk solids, scrap, chips, flakes, and production waste.",
      keywords: [
        "industrial tow bin",
        "tow can manufacturer",
        "material handling bin fabrication",
        "heavy duty towable bin",
        "custom industrial bin india",
      ],
    },
  },
  "custom-bulk-handling-fabrication": {
    title: "Bulk Handling Fabrication (Custom)",
    headline: "Custom Fabrication for Unique Bulk-Solid Handling Challenges",
    description:
      "Custom bulk-handling equipment fabricated around your process, from one-off prototypes to repeat builds for multiple production lines.",
    pagePath: "/products/material-handling-and-storage/custom-bulk-handling-fabrication",
    image: "/product/23.jpeg",
    imageAlt: "Custom bulk handling equipment fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Build Basis", value: "GA drawings, P&IDs, and specifications" },
      { label: "Scope", value: "Storage, discharge, support, and wear packages" },
      { label: "Execution", value: "Prototype or repeat fabrication" },
      { label: "Delivery", value: "Trial fit-up and dispatch-ready packing" },
    ],
    overview: [
      "NESF delivers custom bulk-handling fabrication built around unique process needs, whether the requirement is a one-off prototype or repeat fabrication for multiple lines.",
      "Storage, discharge, feeding, access, support, and wear protection are coordinated to create practical equipment that fits the plant and handled material.",
    ],
    sections: [
      {
        title: "Typical Custom Scope",
        bullets: [
          "Bulk hoppers, surge bins, day bins, and intermediate storage vessels.",
          "Chutes, transitions, diverter housings, and discharge spouts.",
          "Support structures, platforms, access frames, and mounting skids.",
          "Wear packages, liner frames, ceramic layouts, and replaceable wear zones.",
        ],
      },
      {
        title: "Engineering-Friendly Approach",
        bullets: [
          "Storage, discharge, and feeding considered as a coordinated system.",
          "Material-flow risks such as arching, ratholing, and plugging considered in the build scope.",
          "Maintenance access and replaceable wear zones incorporated where required.",
          "Practical fabrication splits for transport and site assembly.",
        ],
      },
      {
        title: "Deliverables We Support",
        bullets: [
          "Fabrication from customer GA drawings, P&IDs, and specifications.",
          "Trial fit-up, dimensional inspection, and identification.",
          "Surface finishing, coating, and markings as requested.",
          "Dispatch-ready packaging and documentation.",
        ],
      },
      {
        title: "Applications",
        bullets: [
          "New bulk-handling lines and process upgrades.",
          "Plant retrofits and replacement equipment.",
          "Prototype development and repeat fabrication.",
          "Custom handling solutions for abrasive, cohesive, or difficult materials.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Process description, material data, and required throughput.",
          "GA drawings, P&IDs, sketches, or existing-equipment details.",
          "Interfaces, layout constraints, access, and maintenance requirements.",
          "MOC, wear protection, finishing, inspection, and delivery requirements.",
        ],
      },
    ],
    note:
      "Share your bulk-handling challenge, material data, drawings, and plant constraints. NESF will respond with a clear custom fabrication scope and quotation basis.",
    enquiry: {
      title: "Request a quote for Custom Bulk Handling Fabrication",
      subtitle: "Share your process, material data, drawings, interfaces, and wear requirements.",
      productName: "Custom Bulk Handling Fabrication",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Custom Bulk Handling Fabrication | Built-to-Spec by NESF",
      description:
        "Custom bulk-handling equipment fabricated from drawings and process requirements, including hoppers, bins, chutes, supports, platforms, and wear packages.",
      keywords: [
        "custom bulk handling fabrication",
        "bulk material handling equipment",
        "custom hopper and chute fabrication",
        "bulk handling equipment manufacturer",
        "industrial fabrication india",
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
  });
}
