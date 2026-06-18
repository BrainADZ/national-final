import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import type { ProductDetail } from "../pressure-vessels-and-storage/productDetails";

export const CATEGORY_NAME = "Pollution Control & Gas Handling";

export const pollutionControlNav = [
  {
    label: "Venturi Scrubbers",
    href: "/products/venturi-scrubbers",
  },
  {
    label: "Wet Scrubber Systems",
    href: "/products/wet-scrubber-systems",
  },
  {
    label: "Ducting & Flue Gas Lines",
    href: "/products/ducting-flue-gas-lines",
  },
  {
    label: "Scrubber Internals & Liners",
    href: "/products/scrubber-internals-liners",
  },
];

export const productDetails = {
  "venturi-scrubbers": {
    title: "Venturi Scrubbers",
    headline: "High-Energy Wet Scrubbers for Fine Particulate Control",
    description:
      "Venturi scrubber assemblies fabricated for efficient capture of fine dust, fumes, mists, and reactive gases in demanding industrial exhaust services.",
    pagePath: "/products/venturi-scrubbers",
    image: "/product/3.jpg",
    imageAlt:
      "Industrial venturi scrubber assembly fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Application", value: "Fine particulate and fumes control" },
      { label: "Build Scope", value: "Venturi body, injection, separator interface" },
      { label: "Protection", value: "Lining and corrosion-resistant options" },
      { label: "Documentation", value: "Inspection and traceability records" },
    ],
    overview: [
      "A Venturi scrubber is a high-energy wet scrubber used to capture fine particulate matter such as dust, fumes, and mists, and in many cases soluble or reactive gases.",
      "Dirty gas accelerates through a Venturi throat where scrubbing liquid atomizes into fine droplets and transfers pollutants from the gas stream into the liquid phase.",
    ],
    sections: [
      {
        title: "Where Venturi Scrubbers Are Used",
        bullets: [
          "Acid fumes and fine aerosols from chemical processes.",
          "Metal processing and high-dust exhaust streams.",
          "Fertilizer, pigment, mineral, and bulk-handling dust.",
          "High particulate boiler or thermal exhaust with suitable material selection.",
        ],
      },
      {
        title: "What NESF Supplies",
        bullets: [
          "Round or rectangular Venturi body and throat configurations.",
          "Spray arrangements and liquid injection headers.",
          "Cyclone, demister, or mist-eliminator separator interfaces as per system design.",
          "Flanges, inspection doors, drains, nozzles, supports, and access platforms.",
        ],
      },
      {
        title: "Engineering & Build Features",
        bullets: [
          "Pressure-drop and efficiency balance based on target dust size and loading.",
          "Robust throat construction for abrasion resistance and sticky-dust service.",
          "Clean-out access, drainability, and inspection provisions.",
          "Downstream mist-elimination provisions to minimize carryover.",
        ],
      },
      {
        title: "Materials & Protective Options",
        bullets: [
          "Stainless steel grades such as 304, 316, or 316L as required.",
          "Carbon steel with service-appropriate lining.",
          "Rubber or epoxy lining based on process conditions.",
          "FRP or composite components where corrosion dominates and duty permits.",
        ],
      },
      {
        title: "Quality & Documentation",
        bullets: [
          "Dimensional inspection and weld visual checks.",
          "Leak testing as applicable.",
          "Material traceability and inspection documentation.",
          "QAP, ITP, and material certificates where required.",
        ],
      },
      {
        title: "Inputs Required",
        bullets: [
          "Gas flow rate, temperature, and target outlet emissions.",
          "Dust type, particle characteristics, and loading.",
          "Gas chemistry, chlorides, and moisture content.",
          "Available water or recirculation utilities and duct sizes.",
        ],
      },
    ],
    note:
      "Share your gas flow, temperature, dust loading, gas chemistry, duct sizes, and target outlet limits. NESF will propose a fabrication-ready Venturi scrubber scope.",
    enquiry: {
      title: "Request a quote for a Venturi Scrubber",
      subtitle:
        "Share your gas flow, dust loading, temperature, chemistry, utilities, and emission targets.",
      productName: "Venturi Scrubber",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Venturi Scrubbers | Pollution Control Fabrication by NESF",
      description:
        "Industrial Venturi scrubber assemblies fabricated for fine particulate, fumes, mist, and reactive-gas control with corrosion-resistant build options.",
      keywords: [
        "venturi scrubber manufacturer",
        "industrial wet scrubber fabrication",
        "particulate scrubber system",
        "venturi scrubber india",
        "pollution control equipment manufacturer",
      ],
    },
  },
  "wet-scrubber-systems": {
    title: "Wet Scrubber Systems",
    headline: "Industrial Wet Scrubbing Systems for Dust and Gas Control",
    description:
      "Wet scrubber systems fabricated to remove particulate, acid gases, odors, and soluble vapors through reliable gas-liquid contact and mist control.",
    pagePath: "/products/wet-scrubber-systems",
    image: "/product/24.jpeg",
    imageAlt:
      "Industrial wet scrubber system fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Application", value: "Dust, acid gas, and odor control" },
      { label: "Configurations", value: "Spray, packed-bed, Venturi, multistage" },
      { label: "Protection", value: "Corrosion and wear-resistant options" },
      { label: "Integration", value: "Duct, platform, and access provisions" },
    ],
    overview: [
      "A wet scrubber system uses water or a reagent solution to remove pollutants from exhaust gas by contacting the gas stream with scrubbing liquid and transferring contaminants into the liquid phase.",
      "Wet scrubbers are commonly applied for dust control, acid-gas reduction, odor control, and soluble-vapor removal depending on chemistry and system configuration.",
    ],
    sections: [
      {
        title: "System Types",
        bullets: [
          "Spray scrubbers using gas-liquid contact through spray headers.",
          "Packed-bed scrubbers for enhanced mass transfer of soluble gases.",
          "Venturi and separator systems for fine particulate collection.",
          "Multi-stage arrangements for combined dust and gas removal duties.",
        ],
      },
      {
        title: "Typical Scope of Supply",
        bullets: [
          "Scrubber vessel or tower and recirculation piping interface points.",
          "Spray headers, nozzles, and distribution trays where applicable.",
          "Mist-eliminator or demister sections with access frames.",
          "Duct connections, inspection doors, drains, and sampling ports.",
          "Platforms, supports, and maintenance access as required.",
        ],
      },
      {
        title: "Key Design Considerations",
        bullets: [
          "Target pollutant and required outlet performance.",
          "Gas temperature, moisture, condensation risk, and corrosion allowance.",
          "Reagent compatibility for the target gas chemistry.",
          "Mist elimination to reduce downstream droplet carryover.",
        ],
      },
      {
        title: "Materials & Corrosion Control",
        bullets: [
          "Stainless steel or lined carbon steel for industrial durability.",
          "FRP or composites where corrosion dominates and temperature permits.",
          "Replaceable wear or liner concepts in high-erosion zones.",
        ],
      },
      {
        title: "QA/QC & Deliverables",
        bullets: [
          "Controlled fabrication and dimensional inspection.",
          "Material traceability and quality documentation.",
          "Leak checks and testing as applicable.",
          "Documentation aligned to client and project requirements.",
        ],
      },
      {
        title: "Inputs Required",
        bullets: [
          "Gas flow, temperature profile, pollutant type, and concentration.",
          "Desired outlet limits and available scrubbing-liquid chemistry.",
          "Plot plan, nozzle orientation, duct sizes, and tie-in points.",
          "Access, platform, support, and maintenance requirements.",
        ],
      },
    ],
    note:
      "Share your gas conditions, pollutant data, outlet targets, liquid chemistry, and layout constraints. NESF will propose a fabrication-ready wet scrubber scope.",
    enquiry: {
      title: "Request a quote for a Wet Scrubber System",
      subtitle:
        "Share your gas flow, pollutants, outlet limits, chemistry, duct sizes, and layout requirements.",
      productName: "Wet Scrubber System",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Wet Scrubber Systems | Industrial Fabrication by NESF",
      description:
        "Industrial wet scrubber systems fabricated for particulate, acid-gas, odor, and soluble-vapor control with corrosion-resistant materials and documented QA.",
      keywords: [
        "wet scrubber system manufacturer",
        "industrial scrubber fabrication",
        "air pollution control scrubber",
        "packed bed scrubber manufacturer",
        "wet scrubber india",
      ],
    },
  },
  "ducting-flue-gas-lines": {
    title: "Ducting & Flue Gas Lines",
    headline: "Leak-Tight Exhaust Ducting for Pollution Control Systems",
    description:
      "Process ducting and flue gas lines fabricated for safe exhaust movement, corrosion resistance, thermal movement, and maintainable plant integration.",
    pagePath: "/products/ducting-flue-gas-lines",
    image: "/product/13.jpg",
    imageAlt:
      "Industrial ducting and flue gas lines fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Application", value: "Exhaust transfer to scrubbers and stacks" },
      { label: "Build Scope", value: "Spools, elbows, reducers, transitions" },
      { label: "Integrity", value: "Leak-tight and corrosion-aware fabrication" },
      { label: "Installation", value: "Modular spools and support provisions" },
    ],
    overview: [
      "Ducting and flue gas lines are critical to pollution-control systems, moving exhaust safely from the source to scrubbers or filters and onward to the stack.",
      "In corrosive or wet exhaust environments, ducting must be designed and fabricated for leak tightness, corrosion resistance, thermal movement, drainability, and maintainability.",
    ],
    sections: [
      {
        title: "What NESF Fabricates",
        bullets: [
          "Process and exhaust ducting spools, including straight runs, elbows, reducers, and transitions.",
          "Flanged duct connections and damper-interface provisions.",
          "Inspection doors, supports, stiffeners, and expansion provisions.",
          "Tie-ins from process equipment to scrubber and stack.",
        ],
      },
      {
        title: "Engineering & Fabrication Features",
        bullets: [
          "Proper stiffening for negative- and positive-pressure zones.",
          "Drainability and low-point condensate management for wet exhaust.",
          "Inspection doors, ports, and maintenance-friendly access.",
          "Modular spool fabrication for faster site installation and alignment.",
        ],
      },
      {
        title: "Material Selection",
        bullets: [
          "Stainless steel grades such as 304 or 316 for corrosive ventilation duties.",
          "FRP or GRP ducting where strong corrosion resistance is required and duty permits.",
          "Carbon steel with industrial lining systems where applicable.",
          "Material and thickness selection based on temperature, chemistry, chlorides, and abrasion.",
        ],
      },
      {
        title: "Quality & Leak Integrity",
        bullets: [
          "Dimensional and interface checks.",
          "Controlled welding and leak-tight fabrication practices.",
          "Inspection and testing aligned to project requirements.",
          "Identification, packing, and modular dispatch planning.",
        ],
      },
      {
        title: "Applications",
        bullets: [
          "Pollution-control and scrubber systems.",
          "Wet or corrosive industrial exhaust lines.",
          "Process equipment to stack connections.",
          "Industrial ventilation and flue gas handling.",
        ],
      },
      {
        title: "Inputs Required",
        bullets: [
          "Normal and maximum gas temperature.",
          "Gas chemistry, chlorides, moisture, and condensation expectations.",
          "Required duct sizes, tie-in points, space, and support locations.",
          "Insulation, cladding, and outdoor exposure requirements.",
        ],
      },
    ],
    note:
      "Share your gas conditions, duct layout, tie-in points, support locations, and material requirements. NESF will propose a modular fabrication and delivery scope.",
    enquiry: {
      title: "Request a quote for Ducting & Flue Gas Lines",
      subtitle:
        "Share your gas conditions, duct sizes, layout, materials, supports, and insulation requirements.",
      productName: "Ducting & Flue Gas Lines",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Ducting & Flue Gas Lines | Industrial Fabrication by NESF",
      description:
        "Leak-tight industrial ducting and flue gas lines fabricated for corrosive exhaust, thermal movement, drainability, and modular site installation.",
      keywords: [
        "flue gas ducting manufacturer",
        "industrial exhaust ducting",
        "pollution control duct fabrication",
        "flue gas line fabrication",
        "corrosion resistant ducting",
      ],
    },
  },
  "scrubber-internals-liners": {
    title: "Scrubber Internals & Liners",
    headline: "Service-Friendly Internals and Liners for Scrubber Reliability",
    description:
      "Scrubber internals and protective liners fabricated to improve gas-liquid contact, separation efficiency, corrosion life, and maintenance access.",
    pagePath: "/products/scrubber-internals-liners",
    image: "/product/21.jpeg",
    imageAlt:
      "Scrubber internals and protective liner components fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Function", value: "Distribution, demisting, and protection" },
      { label: "Internals", value: "Headers, baffles, frames, plates" },
      { label: "Liners", value: "Rubber, polymer, or sheet lining" },
      { label: "Maintenance", value: "Replaceable and repair-friendly concepts" },
    ],
    overview: [
      "Scrubber performance and reliability depend heavily on internals for distribution, separation, and demisting, and on liners for corrosion and erosion protection.",
      "These components directly affect gas-liquid contact efficiency, pressure-drop stability, service life, maintenance frequency, and downtime risk.",
    ],
    sections: [
      {
        title: "Scrubber Internals",
        bullets: [
          "Spray headers, nozzle mounting arrangements, and distribution systems.",
          "Mist-eliminator frames, supports, and access-friendly cartridges.",
          "Baffles, perforated plates, flow straighteners, and drain arrangements.",
          "Replaceable wear zones for high-erosion locations where required.",
        ],
      },
      {
        title: "Liners & Protective Solutions",
        bullets: [
          "Rubber or polymer lining concepts for corrosive duties.",
          "Sheet-lining solutions where high corrosion protection is required.",
          "Repair-friendly liner segmentation to reduce maintenance downtime.",
          "Service-dependent protective systems aligned to chemistry and temperature.",
        ],
      },
      {
        title: "Key Design Considerations",
        bullets: [
          "Chemistry and temperature compatibility of liner materials.",
          "Abrasion and erosion profile near inlets, throats, and turns.",
          "Ease of inspection and replacement without full dismantling.",
          "Mist-eliminator selection to minimize carryover and downstream corrosion.",
        ],
      },
      {
        title: "Documentation & QA",
        bullets: [
          "Material-of-construction verification.",
          "Dimensional checks and assembly fit-up controls.",
          "Documentation aligned to purchase-order scope.",
          "QAP and ITP records where applicable.",
        ],
      },
      {
        title: "Applications",
        bullets: [
          "New scrubber fabrication and packaged pollution-control systems.",
          "Retrofit replacement of worn or corroded internals.",
          "High-erosion and aggressive chemical exhaust services.",
          "Demisting, distribution, and flow-control improvements.",
        ],
      },
      {
        title: "Inputs Required",
        bullets: [
          "Exhaust composition, pH range, chlorides, and solvent content.",
          "Temperature and thermal cycling or shock expectations.",
          "Dust characteristics, loading, and abrasion profile.",
          "Existing scrubber geometry or new-build layout constraints.",
        ],
      },
    ],
    note:
      "Share your exhaust chemistry, temperature, dust characteristics, and scrubber geometry. NESF will propose suitable internals, liner concepts, and fabrication scope.",
    enquiry: {
      title: "Request a quote for Scrubber Internals & Liners",
      subtitle:
        "Share your exhaust chemistry, temperature, dust loading, scrubber geometry, and maintenance requirements.",
      productName: "Scrubber Internals & Liners",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Scrubber Internals & Liners | Custom Fabrication by NESF",
      description:
        "Custom scrubber internals and protective liners fabricated for gas-liquid distribution, demisting, corrosion protection, erosion resistance, and maintainability.",
      keywords: [
        "scrubber internals manufacturer",
        "scrubber liner fabrication",
        "mist eliminator support",
        "scrubber spray header",
        "corrosion resistant liner",
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
