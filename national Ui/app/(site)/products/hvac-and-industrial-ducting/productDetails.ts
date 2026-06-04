import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import type { ProductDetail } from "../pressure-vessels-and-storage/productDetails";

export const CATEGORY_NAME = "HVAC & Industrial Ducting";

export const hvacDuctingNav = [
  {
    label: "AHU Ducts (GI / SS)",
    href: "/products/hvac-and-industrial-ducting/ahu-ducts-gi-ss",
  },
  {
    label: "Industrial Ducting Systems",
    href: "/products/hvac-and-industrial-ducting/industrial-ducting-systems",
  },
  {
    label: "Transitions / Reducers / Elbows",
    href: "/products/hvac-and-industrial-ducting/transitions-reducers-elbows",
  },
  {
    label: "Insulated Duct Casing",
    href: "/products/hvac-and-industrial-ducting/insulated-duct-casing",
  },
];

export const productDetails = {
  "ahu-ducts-gi-ss": {
    title: "AHU Ducts (GI / SS)",
    headline: "Low-Leakage AHU Ductwork for Reliable Air Distribution",
    description:
      "GI and stainless-steel AHU ducting fabricated for stable airflow, low leakage, clean finishes, accurate fit-up, and long service life.",
    pagePath: "/products/hvac-and-industrial-ducting/ahu-ducts-gi-ss",
    image: "/product/13.jpg",
    imageAlt: "GI and stainless steel AHU ducts fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Applications", value: "Supply, return, and fresh air" },
      { label: "Materials", value: "GI or stainless steel" },
      { label: "Build Scope", value: "Ducts, plenums, risers, and take-offs" },
      { label: "Quality", value: "Fit-up, seam, and finish checks" },
    ],
    overview: [
      "NESF fabricates AHU supply, return, and fresh-air ducting in galvanized steel and stainless steel for commercial and industrial HVAC systems.",
      "Our ductwork is built for low leakage, stable airflow, clean finishes, and long service life, with workmanship aligned to recognized duct-construction practices.",
    ],
    sections: [
      {
        title: "What We Manufacture",
        bullets: [
          "Supply-air, return-air, and fresh-air ducts.",
          "Plenums and duct risers.",
          "Grille and diffuser neck pieces with take-offs.",
          "Access doors, inspection openings, and flexible-connection provisions.",
        ],
      },
      {
        title: "Materials & Construction Options",
        bullets: [
          "GI ducting for standard commercial and industrial HVAC applications.",
          "Stainless-steel ducting for hygienic, corrosive, or high-cleanliness areas.",
          "Construction aligned to applicable air-duct material requirements such as IS 655 where specified.",
          "Workmanship aligned to recognized SMACNA duct-construction practices where required.",
        ],
      },
      {
        title: "Quality Checks",
        bullets: [
          "Dimensional checks against approved drawings.",
          "Seam, joint, and flange workmanship verification.",
          "Fit-up checks for site-friendly installation.",
          "Surface-finish checks, especially for stainless-steel ducts.",
        ],
      },
      {
        title: "Where Used",
        bullets: [
          "Commercial buildings and utility buildings.",
          "Clean areas, pharmaceutical, and food facilities.",
          "Plant HVAC rooms and industrial air-handling layouts.",
          "Process facilities requiring GI or stainless-steel ducting.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Approved duct layout, sizes, pressure class, and airflow requirements.",
          "GI or stainless-steel grade and thickness requirements.",
          "Joint, flange, access, take-off, and flexible-connection details.",
          "Inspection, finish, marking, packing, and delivery requirements.",
        ],
      },
    ],
    note:
      "Share your approved duct layout, airflow duty, material, pressure class, and connection details. NESF will propose a fabrication-ready AHU ducting scope.",
    enquiry: {
      title: "Request a quote for AHU Ducts (GI / SS)",
      subtitle: "Share your duct layout, sizes, airflow, materials, connections, and finish requirements.",
      productName: "AHU Ducts (GI / SS)",
      buttonText: "Request Quote",
    },
    seo: {
      title: "AHU Ducts GI & SS | HVAC Duct Fabrication by NESF",
      description:
        "GI and stainless-steel AHU ducting fabricated for supply, return, and fresh-air systems with low leakage, accurate fit-up, and clean finishes.",
      keywords: [
        "AHU duct manufacturer",
        "GI duct fabrication",
        "stainless steel HVAC duct",
        "industrial HVAC ducting",
        "AHU duct manufacturer india",
      ],
    },
  },
  "industrial-ducting-systems": {
    title: "Industrial Ducting Systems",
    headline: "Robust Industrial Ducting for Ventilation and Process Air",
    description:
      "Industrial ducting systems fabricated for ventilation, exhaust, dust and fume extraction, and process-air handling across complex plant layouts.",
    pagePath: "/products/hvac-and-industrial-ducting/industrial-ducting-systems",
    image: "/product/13.jpg",
    imageAlt: "Industrial ducting system fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Applications", value: "Ventilation, exhaust, dust, and fumes" },
      { label: "Integration", value: "Fans, cyclones, scrubbers, and equipment" },
      { label: "Construction", value: "Stiffened and maintainable assemblies" },
      { label: "Materials", value: "Selected for temperature and corrosion" },
    ],
    overview: [
      "NESF designs and fabricates industrial ducting systems for ventilation, exhaust, dust and fume extraction, and process-air handling.",
      "These duct systems are planned for robustness, maintainability, accurate routing, and safe integration across complex industrial layouts.",
    ],
    sections: [
      {
        title: "Typical Systems We Deliver",
        bullets: [
          "Process ventilation and general-exhaust ducting.",
          "Dust-collection and extraction ducting connected to cyclones or scrubbers.",
          "Fume-exhaust ducting for welding fumes, chemical fumes, and heat exhaust.",
          "Utility-air routing and interconnection spools for duct lines.",
        ],
      },
      {
        title: "Key Engineering Considerations",
        bullets: [
          "Routing planned to minimize pressure drop while respecting plant constraints.",
          "Adequate stiffening, supports, and maintenance access.",
          "Flanged or bolted sections for dismantling and inspection.",
          "Material selection based on temperature, corrosion risk, and service conditions.",
        ],
      },
      {
        title: "Standards & Good Practice",
        bullets: [
          "Construction can align with recognized SMACNA duct-construction standards where specified.",
          "Air-duct material and construction requirements such as IS 655 can be applied based on project needs.",
          "Project drawings, inspection requirements, and acceptance criteria remain the build basis.",
        ],
      },
      {
        title: "Industries Served",
        bullets: [
          "Oil and gas, chemicals, and petrochemicals.",
          "Fertilizer, utilities, and effluent treatment.",
          "Steel plants and general manufacturing.",
          "Industrial ventilation and process-air systems.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Layout, duct sizes, airflow, temperature, and pressure conditions.",
          "Dust, fumes, corrosion, and service details.",
          "Material, thickness, connection, support, and access requirements.",
          "Inspection, coating, marking, packing, and site-sequence requirements.",
        ],
      },
    ],
    note:
      "Share your duct layout, airflow duty, service conditions, material requirements, and equipment interfaces. NESF will propose a modular industrial-ducting scope.",
    enquiry: {
      title: "Request a quote for Industrial Ducting Systems",
      subtitle: "Share your layout, airflow, service conditions, materials, supports, and access requirements.",
      productName: "Industrial Ducting Systems",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Industrial Ducting Systems | Custom Fabrication by NESF",
      description:
        "Industrial ducting systems fabricated for ventilation, exhaust, dust and fume extraction, and process-air handling with robust, maintainable construction.",
      keywords: [
        "industrial ducting manufacturer",
        "process ventilation ducting",
        "dust extraction ducting",
        "fume exhaust ducting",
        "industrial duct fabrication india",
      ],
    },
  },
  "transitions-reducers-elbows": {
    title: "Transitions / Reducers / Elbows",
    headline: "Precision Duct Fittings for Smooth Airflow and Accurate Fitment",
    description:
      "Custom duct transitions, reducers, elbows, and branch fittings fabricated for smooth airflow, controlled geometry, and clean equipment integration.",
    pagePath: "/products/hvac-and-industrial-ducting/transitions-reducers-elbows",
    image: "/product/21.jpeg",
    imageAlt: "Custom duct transitions reducers and elbows fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Range", value: "Transitions, reducers, elbows, branches" },
      { label: "Geometry", value: "Concentric, eccentric, radius, and offsets" },
      { label: "Materials", value: "GI, mild steel, or stainless steel" },
      { label: "Integration", value: "Fans, AHUs, blowers, and equipment" },
    ],
    overview: [
      "NESF fabricates duct fittings that support smooth airflow and clean integration with fans, AHUs, blowers, scrubbers, and process equipment.",
      "Accurately made fittings help reduce turbulence, vibration concerns, pressure losses, and installation rework.",
    ],
    sections: [
      {
        title: "Product Range",
        bullets: [
          "Square-to-round, rectangular-to-rectangular, and offset transitions.",
          "Concentric and eccentric reducers or expanders.",
          "Radius, segmented, gored, and vaned elbows where required.",
          "Branch take-offs, shoe taps, and splitter sections.",
        ],
      },
      {
        title: "Fabrication Details",
        bullets: [
          "Geometry made to suit airflow direction and site constraints.",
          "Options for turning vanes, stiffeners, and access ports.",
          "Fabrication in GI, mild steel, or stainless steel based on service.",
          "Construction aligned to applicable industry duct practices such as SMACNA where specified.",
        ],
      },
      {
        title: "Ideal For",
        bullets: [
          "HVAC rooms and AHU interfaces.",
          "Blower packages and process-air systems.",
          "Dust-collection and extraction lines.",
          "Scrubber connections and retrofit projects requiring accurate fitment.",
        ],
      },
      {
        title: "Quality & Fit-Up",
        bullets: [
          "Dimensional checks against approved drawings.",
          "Flange, seam, radius, and connection-orientation checks.",
          "Trial fit-up where required for critical interfaces.",
          "Identification and packing for efficient site installation.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Fitting drawings, dimensions, offsets, angles, and connection interfaces.",
          "Airflow direction, pressure class, and service conditions.",
          "Material, thickness, stiffener, vane, and access requirements.",
          "Inspection, finishing, marking, and delivery requirements.",
        ],
      },
    ],
    note:
      "Share your fitting drawings, interface dimensions, airflow direction, material, and site constraints. NESF will propose a fabrication-ready fitting scope.",
    enquiry: {
      title: "Request a quote for Transitions / Reducers / Elbows",
      subtitle: "Share your drawings, dimensions, airflow direction, material, and fitment requirements.",
      productName: "Transitions / Reducers / Elbows",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Duct Transitions, Reducers & Elbows | Fabrication by NESF",
      description:
        "Custom duct transitions, reducers, elbows, branches, and splitter sections fabricated for smooth airflow, accurate fitment, and equipment integration.",
      keywords: [
        "duct transition manufacturer",
        "duct reducer fabrication",
        "industrial duct elbows",
        "custom duct fittings",
        "HVAC duct fittings india",
      ],
    },
  },
  "insulated-duct-casing": {
    title: "Insulated Duct Casing",
    headline: "Insulated Duct Casings for Thermal and Condensation Control",
    description:
      "Insulated duct casings fabricated to control heat loss or gain, condensation, surface temperature, and energy loss across indoor and outdoor duct runs.",
    pagePath: "/products/hvac-and-industrial-ducting/insulated-duct-casing",
    image: "/product/8.jpg",
    imageAlt: "Insulated industrial duct casing fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Function", value: "Thermal and condensation control" },
      { label: "Outer Casing", value: "GI or stainless steel" },
      { label: "Installation", value: "Flanged or bolted maintainable sections" },
      { label: "Options", value: "Vapour barrier and cladding provisions" },
    ],
    overview: [
      "NESF supplies insulated duct casings to control heat loss or gain, condensation, and energy losses, and to protect personnel or nearby equipment from hot or cold duct surfaces.",
      "These casings are especially relevant where ducts run through non-conditioned zones, outdoors, or in duties with significant temperature differences.",
    ],
    sections: [
      {
        title: "Where Insulated Duct Casing Is Used",
        bullets: [
          "Supply and return air ducts through non-conditioned zones.",
          "Outdoor duct runs exposed to weather.",
          "Cold-air lines where condensation risk is high.",
          "Hot-exhaust ducting requiring surface-temperature control.",
        ],
      },
      {
        title: "Typical Construction Options",
        bullets: [
          "GI or stainless-steel outer casing.",
          "Insulation thickness and density as per project requirements.",
          "Vapour-barrier and cladding provisions where required.",
          "Flanged or bolted joints for maintenance-friendly installation.",
        ],
      },
      {
        title: "Fabrication & Integration Focus",
        bullets: [
          "Accurate casing dimensions and connection fit-up.",
          "Provisions around supports, flanges, access doors, and interfaces.",
          "Weather and outdoor-exposure considerations.",
          "Modular fabrication for transport and site assembly.",
        ],
      },
      {
        title: "Standards & References",
        body: [
          "Project insulation requirements can align with applicable energy and building standards such as ASHRAE 90.1, depending on duct location, application, and client specification.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Duct sizes, layout, operating temperature, and ambient conditions.",
          "Required insulation thickness, density, and thermal performance.",
          "Outer casing, vapour barrier, cladding, and weatherproofing requirements.",
          "Access, supports, connections, inspection, and delivery requirements.",
        ],
      },
    ],
    note:
      "Share your duct layout, temperatures, insulation specification, casing material, and environmental conditions. NESF will propose a fabrication-ready insulated casing scope.",
    enquiry: {
      title: "Request a quote for Insulated Duct Casing",
      subtitle: "Share your duct sizes, temperatures, insulation, casing, weatherproofing, and access requirements.",
      productName: "Insulated Duct Casing",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Insulated Duct Casing | HVAC & Industrial Fabrication by NESF",
      description:
        "Insulated duct casings fabricated with GI or stainless-steel outer skins for thermal control, condensation prevention, weather exposure, and maintainable installation.",
      keywords: [
        "insulated duct casing",
        "industrial insulated ducting",
        "HVAC duct insulation casing",
        "GI duct casing",
        "insulated duct fabrication india",
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
