import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";

export const CATEGORY_NAME = "Pressure Vessels & Storage";

export type ProductSection = {
  title: string;
  body?: string[];
  bullets?: string[];
  table?: {
    columns: string[];
    rows: string[][];
  };
  groups?: {
    title: string;
    body?: string[];
    bullets?: string[];
  }[];
  links?: {
    label: string;
    href: string;
    description?: string;
  }[];
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
  contactDetails?: {
    label: string;
    value: string;
    href?: string;
  }[];
  faqs?: {
    question: string;
    answer: string;
  }[];
  seo: {
    title: string;
    description: string;
    keywords?: string[];
  };
};

export const pressureVesselNav = [
  {
    label: "Air Receiver Vessels",
    href: "/products/air-receiver-vessels-manufacturer",
  },
  {
    label: "Nitrogen Buffer Tank",
    href: "/products/nitrogen-buffer-tank-manufacturer",
  },
  {
    label: "Gas Storage Tank",
    href: "/products/gas-storage-tank-manufacturer",
  },
  {
    label: "Horizontal Storage Tanks",
    href: "/products/horizontal-storage-tank-manufacturer",
  },
  {
    label: "Vertical Storage Tanks",
    href: "/products/vertical-storage-tank-manufacturer",
  },
  {
    label: "Blowdown / Flash Tanks",
    href: "/products/blowdown-flash-tank-manufacturer",
  },
  {
    label: "Water Holding / Utility Vessels",
    href: "/products/water-holding-utility-vessel-manufacturer",
  },
  {
    label: "Filter Vessels (Activated Carbon / Softener)",
    href: "/products/filter-vessel-manufacturer",
  },
  {
    label: "Custom Pressure Vessels (As per drawing/spec)",
    href: "/products/custom-pressure-vessel-manufacturer",
  },
];

export const productDetails = {
  "air-receiver-vessels": {
    title: "Air Receiver Vessel Manufacturer in India",
    headline: "Industrial-Grade Air Receiver Vessels for Compressed Air Systems",
    description:
      "National Engineers & Steel Fabricators manufactures industrial-grade air receiver vessels designed for compressed air systems across manufacturing plants, process industries, and infrastructure projects.",
    pagePath: "/products/air-receiver-vessels-manufacturer",
    image: "/product/7.webp",
    imageAlt: "Air receiver vessel fabricated by National Engineers",
    imagePosition: "center",
    quickFacts: [
      { label: "Capacity", value: "50 litres to 50,000+ litres" },
      { label: "Design Pressure", value: "Up to 25 bar g, higher on request" },
      { label: "Orientation", value: "Vertical or horizontal" },
      { label: "Location", value: "Sachin GIDC, Surat" },
    ],
    overview: [
      "Each vessel is fabricated to stabilize system pressure, reduce compressor cycling, buffer peak air demand, and protect downstream pneumatic equipment.",
      "With fabrication facilities in Sachin GIDC, Surat, NESF delivers air receiver vessels in vertical and horizontal configurations, custom-built to your design pressure, capacity, and inspection requirements.",
    ],
    sections: [
      {
        title: "What Is an Air Receiver Vessel?",
        body: [
          "An air receiver vessel is a pressure vessel used in compressed air systems to store pressurized air between the compressor and the point of use. It acts as a buffer reservoir that absorbs demand fluctuations, prevents the compressor from short-cycling, and allows moisture and oil to settle before the air reaches process equipment.",
          "Air receiver vessels are a critical component in any industrial compressed air network, from textile mills and auto plants to chemical facilities and food processing units. Proper sizing and fabrication quality directly impact compressor life, air quality, and system uptime.",
        ],
      },
      {
        title: "Why Choose NESF as Your Air Receiver Vessel Manufacturer?",
        groups: [
          {
            title: "Custom Fabrication to Your Exact Specification",
            body: [
              "NESF does not manufacture standard off-the-shelf vessels. Every air receiver vessel is fabricated to your design pressure, operating temperature, capacity requirement, nozzle configuration, and inspection standard.",
              "Whether you need a 500-litre skid-mounted vertical vessel or a 10,000-litre horizontal air storage tank with a manhole and multiple nozzles, NESF builds it to drawing.",
            ],
          },
          {
            title: "Qualified Welding and Disciplined QA/QC",
            body: [
              "All fabrication at NESF follows qualified welding procedures with stage-wise inspection. Welder qualification records are maintained, and fit-up checks are performed before every weld.",
              "NDT options include Dye Penetrant Testing (DPT), Magnetic Particle Testing (MPT), Ultrasonic Testing (UT), and Radiographic Testing (RT) as required by your specification or applicable code.",
            ],
          },
          {
            title: "Hydro and Pneumatic Testing",
            body: [
              "Every air receiver vessel undergoes hydraulic or pneumatic pressure testing before dispatch. Test pressures, test media, and acceptance criteria are documented in the inspection report provided with the vessel.",
            ],
          },
          {
            title: "Traceable Materials and Documentation",
            body: [
              "Material traceability is maintained from procurement to delivery. Mill test certificates (MTCs), heat numbers, and dimensional inspection reports are part of the standard documentation package.",
              "NESF can provide full quality dossiers including QAP, ITP, and test certificates for critical orders.",
            ],
          },
          {
            title: "IS / ASME / IBR-Compliant Fabrication",
            body: [
              "NESF fabricates air receiver vessels in compliance with applicable Indian and international codes including IS 2825, ASME Section VIII Div 1, and IBR where applicable.",
              "Third-party inspection from BVIS, SGS, Lloyds, or client-appointed inspectors is accommodated on request.",
            ],
          },
        ],
      },
      {
        title: "Air Receiver Vessel Technical Specifications",
        table: {
          columns: ["Parameter", "Range / Details"],
          rows: [
            ["Capacity / Volume", "50 litres to 50,000+ litres (custom)"],
            ["Design Pressure", "Up to 25 bar g (higher on request)"],
            ["Operating Temperature", "-10 C to 200 C"],
            ["Orientation", "Vertical or Horizontal"],
            [
              "Material of Construction",
              "IS 2062 Carbon Steel, SA 516 Gr. 70, SS 304 / 316 for corrosive service",
            ],
            ["Shell Thickness", "As per design calculation, with corrosion allowance included"],
            [
              "Nozzle Configuration",
              "Inlet, outlet, drain, vent, safety valve, pressure gauge, NRV, manhole / handhole",
            ],
            [
              "Supports",
              "Saddle supports for horizontal vessels; leg supports or skirt base for vertical vessels",
            ],
            [
              "Surface Finish",
              "Shot blasting with primer and enamel / epoxy paint as agreed",
            ],
            ["Applicable Codes", "IS 2825, ASME Sec VIII Div 1, IBR if applicable"],
            ["Testing", "Hydrostatic / Pneumatic as per applicable code"],
            ["NDT Options", "DPT, MPT, UT, RT as specified"],
            [
              "Documentation",
              "GA Drawing, ITP, QAP, MTCs, Hydro Test Report, Dimensional Report",
            ],
          ],
        },
      },
      {
        title: "Industries and Applications",
        body: [
          "NESF air receiver vessels are supplied to a wide range of industries where compressed air systems are critical to plant operations.",
        ],
        groups: [
          {
            title: "Textile and Garment Industry",
            bullets: [
              "Air receiver vessels for loom machines, air-jet weaving, and pneumatic clamping.",
              "Buffer storage to manage varying demand from multiple pneumatic tools.",
            ],
          },
          {
            title: "Automotive and Auto Ancillaries",
            bullets: [
              "Compressed air storage for painting booths, assembly line pneumatics, and robotic fixtures.",
              "High-cycle duty vessels with robust drain and safety valve configuration.",
            ],
          },
          {
            title: "Chemical and Petrochemical Plants",
            bullets: [
              "Stainless steel air receiver vessels for corrosive or clean-room compressed air.",
              "IBR-compliant vessels with third-party inspection for plant insurance requirements.",
            ],
          },
          {
            title: "Food and Beverage Processing",
            bullets: [
              "SS 304 / 316 vessels for hygienic compressed air service.",
              "Internal lining or passivation on request.",
            ],
          },
          {
            title: "General Manufacturing and Engineering Plants",
            bullets: [
              "Medium-pressure air storage for compressor rooms in fabrication shops.",
              "Retrofit vessels to expand existing compressed air system capacity.",
            ],
          },
          {
            title: "Infrastructure and EPC Projects",
            bullets: [
              "Skid-mounted air receiver packages for utility stations.",
              "Multiple vessel assemblies with interconnecting pipework.",
            ],
          },
        ],
      },
      {
        title: "Construction and Configuration Options",
        groups: [
          {
            title: "Vertical Air Receiver Vessel",
            body: [
              "Vertical orientation is the standard configuration for most plant rooms due to its compact floor footprint. NESF fabricates vertical air receiver tanks with leg supports or skirt base, dished ends such as torispherical or hemispherical as per design, and a full nozzle set.",
              "The nozzle set can include top inlet, side outlet, bottom drain, safety valve branch, pressure gauge connection, and handhole or manhole for internal inspection.",
            ],
          },
          {
            title: "Horizontal Air Receiver Vessel",
            body: [
              "Horizontal air receiver tanks are preferred where headroom is limited or where the vessel needs to be installed outdoors on a structural frame or skid.",
              "NESF fabricates horizontal vessels with saddle supports designed and positioned per ASME / IS norms, with proper reinforcement on the shell.",
            ],
          },
          {
            title: "Standard Nozzle Set",
            bullets: [
              "Air inlet from compressor.",
              "Air outlet to distribution network.",
              "Safety Relief Valve (SRV) branch.",
              "Pressure Gauge (PG) connection.",
              "Condensate drain with isolating valve.",
              "Vent valve nozzle.",
              "Handhole for vessels up to 600mm diameter or manhole for larger vessels.",
              "NRV / check valve connection on inlet.",
            ],
          },
          {
            title: "Accessories and Fittings - Optional Supply",
            bullets: [
              "Safety relief valve calibrated to set pressure.",
              "Bourdon tube pressure gauge with syphon.",
              "Automatic drain valve, float or timer type.",
              "Pressure switch / transmitter tapping.",
              "Isolation ball valves on all nozzles.",
              "Sight glass for condensate level.",
            ],
          },
        ],
      },
      {
        title: "Quality Assurance and Testing",
        body: [
          "NESF follows a structured QA/QC framework for all pressure vessel fabrication.",
        ],
        groups: [
          {
            title: "Pre-Fabrication",
            bullets: [
              "Material traceability with MTCs verified against order specification before cutting.",
              "Dimensional check of incoming plates, pipes, and forgings.",
              "Welding Procedure Specification (WPS) reviewed and qualified.",
              "Welder qualification records (WQR/WPQ) maintained.",
            ],
          },
          {
            title: "In-Process Inspection",
            bullets: [
              "Fit-up check before root pass on all pressure-boundary welds.",
              "Visual inspection of welds after each pass.",
              "Stage-wise dimensional checks against approved drawing.",
              "Heat number stamping and material identification maintained throughout.",
            ],
          },
          {
            title: "Final Inspection and Testing",
            bullets: [
              "Hydrostatic test at 1.5x design pressure or as per applicable code.",
              "NDT including DPT on all nozzle welds; RT or UT on shell seams as specified.",
              "Dimensional check against GA drawing.",
              "Surface preparation and paint DFT measurement.",
              "Final visual inspection.",
            ],
          },
          {
            title: "Documents Provided",
            bullets: [
              "General Arrangement (GA) Drawing.",
              "Material Test Certificates (MTCs) with heat traceability.",
              "Weld Map and Weld Summary.",
              "NDT Reports including DPT, RT, and UT as applicable.",
              "Hydrostatic / Pneumatic Test Report.",
              "Dimensional Inspection Report.",
              "QAP and ITP for inspected orders.",
              "Paint / coating system records.",
              "Third-party inspection certificate if TPI is appointed.",
            ],
          },
        ],
      },
      {
        title: "Related Products",
        links: [
          {
            label: "Nitrogen Buffer Tank",
            href: "/products/nitrogen-buffer-tank-manufacturer",
            description: "Also Read",
          },
          {
            label: "Custom Pressure Vessels (As per Drawing/Spec)",
            href: "/products/custom-pressure-vessel-manufacturer",
            description: "Also Read",
          },
          {
            label: "Blowdown / Flash Tanks",
            href: "/products/blowdown-flash-tank-manufacturer",
            description: "Also Read",
          },
          {
            label: "Horizontal Storage Tanks",
            href: "/products/horizontal-storage-tank-manufacturer",
            description: "Also Read",
          },
          {
            label: "Vertical Storage Tanks",
            href: "/products/vertical-storage-tank-manufacturer",
            description: "Also Read",
          },
        ],
      },
      {
        title: "Request a Quote for Air Receiver Vessel Fabrication",
        body: [
          "To receive a competitive quotation, share the following details with NESF.",
        ],
        bullets: [
          "Design pressure in bar g and operating pressure.",
          "Required vessel capacity / volume in litres or m3.",
          "Orientation - vertical or horizontal.",
          "Material of construction preference.",
          "Applicable code such as IS 2825, ASME Sec VIII, or IBR.",
          "Nozzle list and accessories required.",
          "Inspection requirements, including in-house, TPI, or IBR.",
          "Delivery location and required lead time.",
        ],
      },
    ],
    note:
      "Share your compressor specifications and plant air demand profile with NESF, and the team will recommend an appropriate vessel volume and fabrication scope.",
    enquiry: {
      title: "Request a Quote for Air Receiver Vessel Fabrication",
      subtitle:
        "Share design pressure, capacity, orientation, MOC, code, nozzle list, inspection requirements, and delivery location.",
      productName: "Air Receiver Vessel",
      buttonText: "Request Quote",
    },
    contactDetails: [
      {
        label: "Call / WhatsApp",
        value: "+91 95740 11132",
        href: "tel:919574011132",
      },
      {
        label: "Email",
        value: "admin@nationalengrs.com",
        href: "mailto:admin@nationalengrs.com",
      },
      {
        label: "Address",
        value: "Plot No. 1022, Cross Road No. 87, Sachin GIDC, Surat - 394230",
      },
    ],
    faqs: [
      {
        question: "What is the standard design pressure for an air receiver vessel?",
        answer:
          "Most industrial compressed air systems operate between 7 and 10 bar g. NESF fabricates air receiver vessels up to 25 bar g as standard, with higher-pressure vessels available on request based on design and wall thickness calculations.",
      },
      {
        question: "What size air receiver vessel do I need for my compressor?",
        answer:
          "A general rule of thumb is to size the air receiver at 6-10 times the compressor's free air delivery (FAD) in litres per minute. However, correct sizing depends on system pressure, compressor duty cycle, peak demand, and downstream tool consumption. Share your compressor specifications and plant air demand profile with NESF and the team will recommend an appropriate vessel volume.",
      },
      {
        question: "What materials are used for air receiver vessel fabrication?",
        answer:
          "Carbon steel such as IS 2062 Gr. B or SA 516 Gr. 70 is standard for most industrial air service. Stainless steel such as SS 304 or SS 316 is used where moisture content, cleanliness, or corrosion requirements demand it, such as food processing, pharmaceutical, or offshore applications.",
      },
      {
        question: "Is NESF a certified pressure vessel manufacturer?",
        answer:
          "NESF fabricates pressure vessels in compliance with IS 2825 and ASME Section VIII Div 1 where required. Third-party inspection from BVIS, SGS, Lloyds, or client-nominated inspection agencies is accommodated. Specific certifications can be discussed based on your order requirements.",
      },
      {
        question: "What is the minimum and maximum vessel capacity NESF manufactures?",
        answer:
          "NESF fabricates air receiver vessels from 50 litres to 50,000+ litres. Larger multi-vessel battery arrangements are also possible. Share your project requirement and NESF will confirm the feasibility and fabrication scope.",
      },
      {
        question: "How long does it take to manufacture an air receiver vessel?",
        answer:
          "Lead time depends on vessel size, complexity, material availability, and inspection requirements. Standard vessels typically have a lead time of 2-4 weeks. Larger vessels with third-party inspection requirements may take 4-8 weeks. NESF will confirm lead time at the time of order placement.",
      },
      {
        question: "Can NESF supply the vessel with fittings, valves, and accessories?",
        answer:
          "Yes. NESF can supply air receiver vessels complete with safety relief valves, pressure gauges, drain valves, NRVs, and isolation valves as per your BOM or P&ID. Accessory sourcing and assembly on the vessel nozzles can be included in the supply scope.",
      },
    ],
    seo: {
      title:
        "Air Receiver Vessel Manufacturer in India | National Engineers & Steel Fabricators",
      description:
        "National Engineers & Steel Fabricators manufactures industrial air receiver vessels for compressed air systems. Custom sizes, IS/ASME-compliant fabrication, vertical & horizontal orientation. Get a quote today.",
      keywords: [
        "air receiver vessel manufacturer",
        "compressed air receiver tank manufacturer India",
        "industrial air receiver vessel Ahmedabad/Surat",
        "pressure vessel fabrication india",
        "ASME air receiver vessel",
        "vertical air receiver tank",
        "horizontal air receiver vessel",
        "air storage tank manufacturer",
        "compressor air receiver tank",
        "certified pressure vessel manufacturer",
      ],
    },
  },
  "nitrogen-buffer-tank-manufacturer": {
    title: "Nitrogen Buffer Tank Manufacturer and Supplier in India",
    headline: "Nitrogen Buffer Tank Manufacturer in Surat",
    description:
      "National Engineers & Steel Fabricators is a trusted nitrogen buffer tank manufacturer and supplier in India, offering custom-built nitrogen buffer tanks for PSA nitrogen plants, nitrogen gas systems, industrial process lines and continuous nitrogen supply applications.",
    pagePath: "/products/nitrogen-buffer-tank-manufacturer",
    image: "/product/6.jpg",
    imageAlt: "Nitrogen buffer tank manufactured by National Engineers",
    imagePosition: "center",
    quickFacts: [
      { label: "Product Type", value: "Nitrogen Buffer Tank" },
      { label: "Gas Type", value: "Nitrogen / N2" },
      { label: "Orientation", value: "Vertical or horizontal" },
      { label: "Customization", value: "As per drawing, gas data, MOC and site layout" },
    ],
    overview: [
      "As an experienced nitrogen buffer tank manufacturer in Surat, Gujarat, we manufacture tanks as per client drawings, P&ID, gas data, pressure requirements, storage capacity, nozzle orientation, MOC and site conditions. Our nitrogen buffer tanks are designed to support stable nitrogen availability, pressure balancing, demand fluctuation control and uninterrupted plant operations.",
      "National Engineers & Steel Fabricators manufactures industrial nitrogen buffer tanks for plants where nitrogen is required for purging, blanketing, inerting, packaging, pressure balancing and process gas supply. These tanks help maintain stable gas pressure between the nitrogen generation system and the end-use process.",
      "We are a reliable nitrogen buffer tank supplier in Surat, Gujarat, providing customized fabrication solutions for PSA nitrogen plants, cylinder bank systems, vaporizer outlet systems and industrial gas distribution lines. Each tank is fabricated with proper welding, nozzle layout, support design, testing and documentation as per project requirement.",
    ],
    sections: [
      {
        title: "Nitrogen Buffer Tank for PSA Nitrogen Plants",
        body: [
          "A nitrogen buffer tank is commonly used with PSA nitrogen generation systems to store nitrogen temporarily and maintain steady gas flow during process demand changes. PSA nitrogen systems can have fluctuating output and varying consumption patterns, so a buffer tank helps stabilize pressure and improve line performance.",
          "Our PSA nitrogen buffer tanks are suitable for industrial units where continuous nitrogen supply is required for production, safety, packaging, chemical processing, pharma processes, food processing, laser cutting, heat treatment and other plant operations.",
        ],
      },
      {
        title: "Why Nitrogen Buffer Tanks Are Used",
        body: ["Nitrogen buffer tanks are used to manage gas demand variations, reduce pressure fluctuation and support stable nitrogen supply in industrial systems. They act as an intermediate storage vessel between the nitrogen generation source and the process line.", "Common uses include:"],
        bullets: ["Buffering nitrogen supply from PSA nitrogen plants", "Maintaining stable nitrogen pressure in process lines", "Managing sudden demand spikes", "Supporting uninterrupted nitrogen gas availability", "Improving regulator and line stability", "Reducing pressure drop issues", "Supporting purging, blanketing and inerting applications", "Providing temporary nitrogen storage for plant operations"],
      },
      {
        title: "Key Features of Our Nitrogen Buffer Tanks",
        bullets: ["Custom-built nitrogen buffer tanks as per project requirement", "Suitable for PSA nitrogen plants and industrial nitrogen gas systems", "Designed for pressure balancing and demand fluctuation control", "Mild steel, carbon steel and stainless steel construction options", "Nozzle orientation as per P&ID or client drawing", "Vertical or horizontal configuration as per site layout", "PSV, PRV, pressure gauge and rupture disc options", "Lifting lugs, earthing lug, nameplate and inspection openings", "Skid-mounted buffer tank option with valve station", "Surface coating, painting or lining as per environment", "Leak testing and pressure testing as per requirement", "Documentation support as agreed for inspection and maintenance"],
      },
      {
        title: "Applications of Nitrogen Buffer Tanks",
        body: ["As a nitrogen buffer tank manufacturer and supplier, we provide tanks for various industrial applications, including:"],
        bullets: ["PSA nitrogen plants", "Nitrogen gas generation systems", "Nitrogen purging systems", "Nitrogen blanketing systems", "Inert gas applications", "Chemical process plants", "Pharmaceutical industries", "Food and beverage processing units", "Packaging industries", "Laser cutting systems", "Heat treatment plants", "Oil and gas process lines", "Industrial gas distribution systems", "Manufacturing plants requiring continuous nitrogen supply"],
      },
      {
        title: "Materials of Construction",
        body: ["We manufacture nitrogen buffer tanks using suitable materials based on gas purity, operating pressure, temperature, corrosion condition, site environment and project specification.", "Common MOC options include:"],
        bullets: ["Mild Steel", "Carbon Steel", "Stainless Steel", "Alloy Steel as per requirement", "Internally coated tanks as required", "Externally painted or coated tanks as per site condition"],
      },
      {
        title: "Technical Specifications of Nitrogen Buffer Tank",
        body: ["National Engineers & Steel Fabricators manufactures nitrogen buffer tanks as per client drawings, P&ID, gas data and industrial application requirements. Specifications can be customized based on storage capacity, pressure condition, site layout and system requirement."],
        table: {
          columns: ["Specification", "Details"],
          rows: [["Product Type", "Nitrogen Buffer Tank"], ["Application", "PSA nitrogen plant, nitrogen gas buffering and pressure stabilization"], ["Tank Orientation", "Vertical or horizontal as per site requirement"], ["Material of Construction", "Mild Steel, Carbon Steel, Stainless Steel or as per requirement"], ["Gas Type", "Nitrogen / N2"], ["Capacity", "As per client requirement"], ["Design Pressure", "As per process and safety requirement"], ["Operating Pressure", "As per nitrogen system requirement"], ["Operating Temperature", "As per project specification"], ["Nozzle Connection", "As per P&ID or client drawing"], ["Safety Accessories", "PSV, PRV, pressure gauge, rupture disc if required"], ["Support Type", "Leg support, saddle support or skid-mounted arrangement"], ["Surface Finish", "Painted, coated or finished as per environment"], ["Testing", "Leak testing / pressure testing as per requirement"], ["Documentation", "As agreed for inspection, audit and maintenance"], ["Customization", "Available as per drawing, gas data, MOC and site layout"]],
        },
      },
      {
        title: "Custom Nitrogen Buffer Tank Manufacturing",
        body: ["Every nitrogen system has different pressure, storage and process requirements. That is why our nitrogen buffer tanks are manufactured as per client-specific technical details instead of a standard fixed design.", "Customization options include:"],
        bullets: ["Storage capacity as per requirement", "Vertical or horizontal tank design", "Shell and dish-end thickness selection", "Nozzle orientation as per P&ID", "PSV, PRV and pressure gauge provision", "Rupture disc provision if required", "Inlet and outlet connection arrangement", "Drain, vent and inspection opening", "Lifting lug and earthing lug arrangement", "Skid-mounted valve station option", "Paint, coating or lining system", "Testing and documentation as per project scope"],
      },
      {
        title: "Fabrication and Quality Control",
        body: ["At National Engineers & Steel Fabricators, every nitrogen buffer tank is fabricated with proper attention to material selection, fit-up, welding quality, dimensional accuracy, nozzle alignment and inspection requirements. Our fabrication process focuses on safety, durability and reliable performance in industrial nitrogen systems.", "Quality checks may include:"],
        bullets: ["Material verification", "Fit-up inspection", "Welding quality checks", "Dimensional inspection", "Nozzle orientation checking", "Pressure testing as applicable", "Leakage checks as required", "Final painting and finishing inspection", "Documentation support as agreed"],
      },
      {
        title: "Why Choose National Engineers for Nitrogen Buffer Tanks?",
        body: ["National Engineers & Steel Fabricators is a trusted pressure vessel manufacturer in Surat, Gujarat, offering custom nitrogen buffer tanks, storage tanks, process vessels and industrial fabrication solutions for different plant requirements.", "Reasons to work with us:"],
        bullets: ["Experienced nitrogen buffer tank manufacturer in India", "Reliable nitrogen buffer tank supplier in Surat, Gujarat", "Custom fabrication as per drawing, P&ID and gas data", "Manufacturing support for PSA nitrogen plants", "MS, CS and SS pressure vessel fabrication capability", "Proper nozzle, support and safety accessory planning", "Fabrication for chemical, pharma, food, packaging and process industries", "Testing and documentation support as agreed", "Industrial-grade fabrication for long service life", "Custom pressure vessel manufacturing as per project requirement"],
      },
      {
        title: "Details Required for Quotation",
        body: ["To provide the right quotation for a nitrogen buffer tank, please share the following details:"],
        bullets: ["Gas type and purity", "Required storage capacity", "Design pressure", "Operating pressure", "Operating temperature", "Material of construction", "Tank orientation requirement", "P&ID or technical drawing", "Nozzle details", "Safety accessory requirement", "Site condition and installation layout", "Testing and documentation requirement"],
      },
    ],
    note: "Share your gas data, storage capacity, design pressure, P&ID, MOC, site condition and testing requirement with National Engineers & Steel Fabricators. Our team will review your requirement and provide a suitable nitrogen buffer tank fabrication solution for your application.",
    enquiry: {
      title: "Get a Quote for Nitrogen Buffer Tank",
      subtitle: "Looking for a nitrogen buffer tank manufacturer and supplier in India for your PSA nitrogen plant or industrial nitrogen system?",
      productName: "Nitrogen Buffer Tank",
      buttonText: "Request Quote",
    },
    faqs: [
      { question: "What is a nitrogen buffer tank?", answer: "A nitrogen buffer tank is a pressure vessel used to store nitrogen temporarily and maintain stable gas supply in industrial nitrogen systems. It is commonly used with PSA nitrogen plants, cylinder bank systems and process gas lines." },
      { question: "What is the use of a nitrogen buffer tank in a PSA nitrogen plant?", answer: "In a PSA nitrogen plant, a nitrogen buffer tank helps balance pressure, manage demand fluctuation and maintain continuous nitrogen supply between the nitrogen generator and the process line." },
      { question: "Who is a nitrogen buffer tank manufacturer in Surat?", answer: "National Engineers & Steel Fabricators is a nitrogen buffer tank manufacturer in Surat, Gujarat, offering custom nitrogen buffer tanks for PSA nitrogen plants, industrial nitrogen systems and pressure stabilization applications." },
      { question: "Do you supply nitrogen buffer tanks in India?", answer: "Yes, National Engineers & Steel Fabricators is a nitrogen buffer tank manufacturer and supplier in India. We manufacture tanks as per client drawings, gas data, storage capacity, pressure requirement and site conditions." },
      { question: "Which materials are used for nitrogen buffer tanks?", answer: "Nitrogen buffer tanks can be manufactured in mild steel, carbon steel, stainless steel or alloy steel as per pressure condition, gas purity, site environment and client specification." },
      { question: "Can nitrogen buffer tanks be customized?", answer: "Yes, nitrogen buffer tanks can be customized as per capacity, pressure, orientation, nozzle arrangement, MOC, safety accessories, skid mounting and testing requirements." },
      { question: "What safety accessories are provided with nitrogen buffer tanks?", answer: "Safety accessories may include PSV, PRV, pressure gauge, rupture disc, earthing lug, lifting lugs, nameplate, inspection openings and other fittings as per project requirement." },
      { question: "Are nitrogen buffer tanks available in vertical and horizontal designs?", answer: "Yes, nitrogen buffer tanks can be manufactured in vertical or horizontal configuration based on site layout, installation space, capacity and process requirement." },
      { question: "What details are required to get a quotation for a nitrogen buffer tank?", answer: "To get a quotation, you can share gas type, gas purity, storage capacity, design pressure, operating pressure, temperature, MOC, P&ID, nozzle details and testing requirements." },
      { question: "Is a nitrogen buffer tank different from a gas storage tank?", answer: "Yes, a nitrogen buffer tank is mainly used for nitrogen pressure balancing and temporary storage in nitrogen systems, while a gas storage tank is a broader term used for storing different types of industrial gases." },
    ],
    seo: {
      title: "Nitrogen Buffer Tank Manufacturer & Supplier in India | NESF",
      description: "Nitrogen buffer tank manufacturer and supplier in Surat, India, offering custom PSA nitrogen buffer tanks and pressure vessels.",
    },
  },
  "gas-storage-tank-manufacturer": {
    title: "Gas Storage Tank Manufacturer and Supplier in India",
    headline: "Gas Storage Tank Manufacturer in Surat",
    description: "National Engineers & Steel Fabricators is a trusted gas storage tank manufacturer and supplier in India, offering custom-built gas storage tanks for industrial gas systems, process plants, utility lines, PSA systems, cylinder bank systems and vaporizer outlet applications.",
    pagePath: "/products/gas-storage-tank-manufacturer",
    image: "/product/6.jpg",
    imageAlt: "Gas storage tank manufactured by National Engineers",
    imagePosition: "center",
    quickFacts: [
      { label: "Product Type", value: "Gas Storage Tank / Gas Pressure Vessel" },
      { label: "Orientation", value: "Vertical or horizontal" },
      { label: "Materials", value: "Mild Steel, Carbon Steel or Stainless Steel" },
      { label: "Customization", value: "As per drawing, gas data, MOC and site layout" },
    ],
    overview: [
      "As an experienced gas storage tank manufacturer in Surat, Gujarat, we manufacture industrial gas storage tanks as per client drawings, P&ID, gas data, storage capacity, pressure requirements, nozzle orientation, material of construction and site conditions. Our gas storage tanks are designed to support safe gas storage, stable pressure, demand fluctuation control and uninterrupted plant operations.",
      "National Engineers & Steel Fabricators manufactures gas storage tanks for industries that require safe and reliable storage of industrial gases for plant operations. These tanks are used where gas availability, line stability and pressure control are important for continuous production and process performance.",
      "We are a reliable gas storage tank supplier in Surat, Gujarat, providing customized fabrication solutions for chemical plants, process industries, manufacturing units, utility systems, pharma, food processing, engineering and industrial gas applications. Each tank is fabricated with proper welding quality, support arrangement, nozzle layout, safety accessory planning, testing and documentation as per project requirement.",
    ],
    sections: [
      {
        title: "Industrial Gas Storage Tanks for Plant Operations",
        body: ["Industrial gas storage tanks are used to store and manage gases required in different plant processes. These tanks act as storage vessels between the gas source and the process line, helping maintain gas availability during demand changes, line pressure variation and operational load fluctuation.", "National Engineers manufactures industrial gas storage tanks for applications where gases are used for purging, blanketing, inerting, pressure balancing, utility supply, gas distribution and process support. The tank design can be customized based on gas type, pressure, capacity, purity, site layout and process requirement."],
      },
      {
        title: "Gas Storage Tank as a Pressure Vessel",
        body: ["A gas storage tank is a type of pressure vessel designed to store gas under specified pressure conditions. Because gas storage involves pressure holding, safety accessories, design pressure, testing and material selection are important parts of the manufacturing process.", "As a pressure vessel manufacturer in Surat, National Engineers & Steel Fabricators manufactures gas storage vessels with attention to safety, durability, dimensional accuracy and industrial performance. Our tanks can be supplied with required fittings, supports, inspection openings and safety accessories based on the project scope."],
      },
      {
        title: "Key Features of Our Gas Storage Tanks",
        bullets: ["Custom-built gas storage tanks as per project requirement", "Suitable for industrial gas storage and process gas applications", "Designed for pressure stability and demand fluctuation control", "Mild steel, carbon steel and stainless steel construction options", "Nozzle orientation as per P&ID or client drawing", "Vertical or horizontal configuration as per site layout", "PSV, PRV, pressure gauge and rupture disc options", "Lifting lugs, earthing lug, nameplate and inspection openings", "Skid-mounted gas storage vessel option with valve station", "Surface coating, painting or lining as per environment", "Leak testing and pressure testing as per requirement", "Documentation support as agreed for inspection and maintenance"],
      },
      {
        title: "Applications of Gas Storage Tanks",
        body: ["As a gas storage tank manufacturer and supplier, we provide tanks for different industrial applications, including:"],
        bullets: ["Industrial gas storage", "Process gas storage", "Gas buffering systems", "Gas distribution lines", "Purging applications", "Blanketing applications", "Inert gas applications", "Pressure stabilization systems", "Cylinder bank outlet systems", "PSA system integration", "Vaporizer outlet systems", "Chemical process plants", "Pharmaceutical industries", "Food and beverage processing units", "Packaging industries", "Manufacturing plants", "Utility and process gas systems"],
      },
      {
        title: "Types of Gas Storage Tanks We Manufacture",
        body: ["National Engineers & Steel Fabricators manufactures gas storage tanks based on application, gas type, pressure condition and installation layout.", "Common types include:"],
        bullets: ["Industrial gas storage tanks", "Nitrogen gas storage tanks", "N2 gas storage tanks", "Gas buffer tanks", "Vertical gas storage tanks", "Horizontal gas storage tanks", "Gas pressure vessels", "Custom gas storage vessels", "Skid-mounted gas storage tanks", "Gas storage tanks with valve station"],
      },
      {
        title: "Materials of Construction",
        body: ["We manufacture gas storage tanks using suitable material based on gas type, gas purity, pressure, temperature, corrosion condition, site environment and project specification.", "Common MOC options include:"],
        bullets: ["Mild Steel", "Carbon Steel", "Stainless Steel", "Alloy Steel as per requirement", "Internally coated tanks as required", "Externally painted or coated tanks as per site condition"],
      },
      {
        title: "Technical Specifications of Gas Storage Tank",
        body: ["National Engineers & Steel Fabricators manufactures gas storage tanks as per client drawings, P&ID, gas data, pressure condition and industrial application requirements. Specifications can be customized based on storage capacity, gas type, site layout and process requirement."],
        table: {
          columns: ["Specification", "Details"],
          rows: [["Product Type", "Gas Storage Tank / Gas Pressure Vessel"], ["Application", "Industrial gas storage, buffering and pressure stabilization"], ["Tank Orientation", "Vertical or horizontal as per site requirement"], ["Material of Construction", "Mild Steel, Carbon Steel, Stainless Steel or as per requirement"], ["Gas Type", "Nitrogen, inert gas or other industrial gas as per requirement"], ["Capacity", "As per client requirement"], ["Design Pressure", "As per process and safety requirement"], ["Operating Pressure", "As per gas system requirement"], ["Operating Temperature", "As per project specification"], ["Nozzle Connection", "As per P&ID or client drawing"], ["Safety Accessories", "PSV, PRV, pressure gauge, rupture disc if required"], ["Support Type", "Leg support, saddle support or skid-mounted arrangement"], ["Surface Finish", "Painted, coated or finished as per environment"], ["Testing", "Leak testing / pressure testing as per requirement"], ["Documentation", "As agreed for inspection, audit and maintenance"], ["Customization", "Available as per drawing, gas data, MOC and site layout"]],
        },
      },
      {
        title: "Custom Gas Storage Tank Manufacturing",
        body: ["Every industrial gas system has different storage, pressure and installation requirements. That is why our gas storage tanks are manufactured as per client-specific drawings and technical inputs instead of a fixed standard design.", "Customization options include:"],
        bullets: ["Storage capacity as per requirement", "Vertical or horizontal tank design", "Shell and dish-end thickness selection", "Nozzle orientation as per P&ID", "PSV, PRV and pressure gauge provision", "Rupture disc provision if required", "Inlet and outlet connection arrangement", "Drain, vent and inspection opening", "Lifting lug and earthing lug arrangement", "Skid-mounted valve station option", "Paint, coating or lining system", "Testing and documentation as per project scope"],
      },
      {
        title: "Fabrication and Quality Control",
        body: ["At National Engineers & Steel Fabricators, every gas storage tank is fabricated with proper attention to material selection, fit-up, welding quality, dimensional accuracy, nozzle alignment and inspection requirements. Our fabrication process focuses on safety, durability and reliable performance in industrial gas systems.", "Quality checks may include:"],
        bullets: ["Material verification", "Fit-up inspection", "Welding quality checks", "Dimensional inspection", "Nozzle orientation checking", "Pressure testing as applicable", "Leakage checks as required", "Final painting and finishing inspection", "Documentation support as agreed"],
      },
      {
        title: "Why Choose National Engineers for Gas Storage Tanks?",
        body: ["National Engineers & Steel Fabricators is a trusted gas storage tank manufacturer in India and pressure vessel manufacturer in Surat, Gujarat, offering custom fabrication solutions for industrial gas storage tanks, pressure vessels, process vessels, storage tanks and heavy fabrication products.", "Reasons to work with us:"],
        bullets: ["Experienced gas storage tank manufacturer in India", "Reliable gas storage tank supplier in Surat, Gujarat", "Custom fabrication as per drawing, P&ID and gas data", "Industrial pressure vessel fabrication capability", "MS, CS and SS gas storage tank manufacturing", "Proper nozzle, support and safety accessory planning", "Fabrication for chemical, pharma, food, packaging and process industries", "Testing and documentation support as agreed", "Industrial-grade fabrication for long service life", "Custom pressure vessel manufacturing as per project requirement"],
      },
      {
        title: "Details Required for Quotation",
        body: ["To provide the right quotation for a gas storage tank, please share the following details:"],
        bullets: ["Gas type and purity", "Required storage capacity", "Design pressure", "Operating pressure", "Operating temperature", "Material of construction", "Tank orientation requirement", "P&ID or technical drawing", "Nozzle details", "Safety accessory requirement", "Site condition and installation layout", "Testing and documentation requirement"],
      },
    ],
    note: "Share your gas data, storage capacity, design pressure, P&ID, MOC, site condition and testing requirement with National Engineers & Steel Fabricators. Our team will review your requirement and provide a suitable gas storage tank fabrication solution for your application.",
    enquiry: {
      title: "Get a Quote for Gas Storage Tank",
      subtitle: "Looking for a gas storage tank manufacturer and supplier in India for your industrial gas system or process plant?",
      productName: "Gas Storage Tank",
      buttonText: "Request Quote",
    },
    faqs: [
      { question: "What is a gas storage tank?", answer: "A gas storage tank is a pressure vessel used to store industrial gases under specified pressure conditions. It helps maintain gas availability, pressure stability and continuous supply for plant operations." },
      { question: "Who is a gas storage tank manufacturer in Surat?", answer: "National Engineers & Steel Fabricators is a gas storage tank manufacturer in Surat, Gujarat, offering custom industrial gas storage tanks and gas pressure vessels as per client drawings, gas data and site requirements." },
      { question: "Do you supply gas storage tanks in India?", answer: "Yes, National Engineers & Steel Fabricators is a gas storage tank manufacturer and supplier in India. We manufacture custom gas storage tanks for industrial gas systems, process plants and utility applications." },
      { question: "Is a gas storage tank a pressure vessel?", answer: "Yes, a gas storage tank is a type of pressure vessel because it stores gas under pressure. Its design, material, fittings, testing and safety accessories are selected according to pressure and application requirements." },
      { question: "Which materials are used for gas storage tanks?", answer: "Gas storage tanks can be manufactured in mild steel, carbon steel, stainless steel or alloy steel depending on gas type, gas purity, pressure, temperature, corrosion condition and project specification." },
      { question: "Can gas storage tanks be customized?", answer: "Yes, gas storage tanks can be customized as per capacity, pressure, MOC, vertical or horizontal layout, nozzle orientation, safety accessories, coating, support arrangement and testing requirements." },
      { question: "What safety accessories are used in gas storage tanks?", answer: "Safety accessories may include PSV, PRV, pressure gauge, rupture disc, earthing lug, lifting lugs, nameplate, inspection openings and other fittings as per project requirement." },
      { question: "What is the difference between a gas storage tank and a nitrogen buffer tank?", answer: "A gas storage tank is a broader vessel used for storing industrial gases, while a nitrogen buffer tank is specifically used for nitrogen gas buffering, pressure balancing and continuous nitrogen supply." },
      { question: "What details are required to get a quotation for a gas storage tank?", answer: "To get a quotation, you can share gas type, purity, storage capacity, design pressure, operating pressure, temperature, MOC, P&ID, nozzle details and testing requirements." },
      { question: "How is gas storage tank price calculated?", answer: "Gas storage tank price depends on capacity, material of construction, pressure rating, thickness, accessories, coating, testing, documentation and customization requirements." },
    ],
    seo: {
      title: "Gas Storage Tank Manufacturer & Supplier in India | NESF",
      description: "Gas storage tank manufacturer and supplier in Surat, India, offering custom industrial gas tanks and pressure vessels for plant operations.",
      keywords: ["Gas Storage Tank Manufacturer", "gas storage tank supplier", "gas storage tank manufacturer in India", "gas storage tank manufacturer in Surat", "industrial gas storage tank", "custom gas storage tank", "gas pressure vessel manufacturer", "industrial pressure vessel manufacturer", "pressure vessel manufacturer in India", "pressure vessel manufacturer in Surat", "gas storage vessel", "gas storage tank fabrication", "nitrogen gas storage tank", "N2 gas storage tank"],
    },
  },
  "horizontal-storage-tank-manufacturer": {
    title: "Horizontal Storage Tank Manufacturer and Supplier in India",
    headline: "Industrial Horizontal Storage Tank Manufacturer in Surat",
    description:
      "National Engineers & Steel Fabricators is a trusted horizontal storage tank manufacturer and supplier in India, offering custom-built storage tanks for industrial liquid storage, utility fluids, process liquids, chemicals, fuel and water storage applications.",
    pagePath: "/products/horizontal-storage-tank-manufacturer",
    image: "/product/14.jpg",
    imageAlt: "Horizontal storage tank fabricated by National Engineers",
    imagePosition: "center",
    quickFacts: [
      { label: "Product Type", value: "Horizontal Storage Tank" },
      { label: "Construction", value: "MS, CS, SS or as required" },
      { label: "Support", value: "Saddle support with base plate" },
      { label: "Customization", value: "As per drawing and site layout" },
    ],
    overview: [
      "Our horizontal storage tanks are designed for safe storage, stable installation, easy maintenance and long service life.",
      "As an experienced horizontal storage tank manufacturer in Surat, we manufacture tanks as per client drawings, storage capacity, site layout, material of construction, nozzle orientation and process requirements. Each tank is fabricated with proper quality control, support design and testing to match industrial storage applications.",
    ],
    sections: [
      {
        title: "Industrial Horizontal Storage Tank Manufacturer in Surat",
        body: [
          "National Engineers & Steel Fabricators manufactures industrial horizontal storage tanks for chemical plants, process industries, manufacturing units, utility systems and bulk liquid storage applications. Our tanks are suitable for low-height installation areas where stable support, easy access and safe storage are required.",
          "We are a reliable horizontal storage tank supplier in Surat, Gujarat, providing custom storage tank fabrication for different industrial sectors. Our tanks can be manufactured in mild steel, carbon steel, stainless steel and lined construction as per the stored media and site condition.",
        ],
      },
      {
        title: "Horizontal Storage Tanks for Industrial Applications",
        body: [
          "Horizontal storage tanks are widely used for intermediate storage, day storage, bulk storage and process liquid storage. These tanks are preferred where space, height limitation, foundation stability and easy maintenance access are important.",
          "National Engineers manufactures horizontal tanks with saddle supports, base plates, nozzles, manholes, vents, drains, overflow connections, level instruments and other required accessories as per project needs.",
        ],
      },
      {
        title: "Key Features of Our Horizontal Storage Tanks",
        bullets: [
          "Custom-built horizontal storage tanks as per capacity and application",
          "Suitable for water, fuel, chemicals and process liquids",
          "Mild steel, carbon steel and stainless steel construction options",
          "Saddle supports with base plates and anchoring provision",
          "Manhole, vent, drain, overflow and nozzle connections",
          "Optional internal baffles for surge control",
          "Coating, lining and painting options for corrosion protection",
          "Fabrication as per client drawing, datasheet or site requirement",
          "Leak testing and hydro testing as per requirement",
          "Durable construction for long industrial service life",
        ],
      },
      {
        title: "Applications of Horizontal Storage Tanks",
        body: [
          "As a horizontal storage tank manufacturer and supplier, we provide tanks for a wide range of industrial applications, including:",
        ],
        bullets: [
          "Chemical storage", "Water storage", "Fuel storage", "Process liquid storage",
          "Utility fluid storage", "Intermediate liquid storage", "Day tanks for plant operations",
          "Bulk storage systems", "Low-height installation areas", "Industrial process plants",
          "Manufacturing units", "Chemical and process industries",
        ],
      },
      {
        title: "Materials of Construction",
        body: [
          "We manufacture horizontal storage tanks using suitable materials based on the stored liquid, temperature, corrosion factor, pressure condition and site requirement.",
          "Common MOC options include:",
        ],
        bullets: [
          "Mild Steel / Carbon Steel", "Stainless Steel", "Alloy Steel as per requirement",
          "Rubber-lined tanks", "FRP-lined tanks", "Epoxy-coated tanks",
          "Painted tanks with suitable surface protection system",
        ],
      },
      {
        title: "Technical Specifications of Horizontal Storage Tank",
        body: [
          "National Engineers & Steel Fabricators manufactures horizontal storage tanks as per client drawings, storage capacity, site condition and industrial application requirements. As a horizontal storage tank manufacturer and supplier in Surat, India, we provide customized specifications based on the stored liquid, material of construction and process needs.",
        ],
        table: {
          columns: ["Specification", "Details"],
          rows: [
            ["Product Type", "Horizontal Storage Tank"], ["Tank Orientation", "Horizontal"],
            ["Material of Construction", "Mild Steel, Carbon Steel, Stainless Steel or as per requirement"],
            ["Storage Media", "Water, chemicals, fuel, process liquids and utility fluids"],
            ["Capacity", "As per client requirement"], ["Tank Shape", "Cylindrical horizontal tank"],
            ["Support Type", "Saddle support with base plate"], ["Thickness", "As per design, capacity and application"],
            ["End Type", "Dish end / flat end as per design requirement"], ["Nozzle Connection", "As per P&ID or client drawing"],
            ["Manhole", "Provided as per inspection and maintenance requirement"],
            ["Surface Finish", "Painted, coated, lined or polished as per application"],
            ["Internal Lining", "Rubber lining, FRP lining, epoxy coating or as required"],
            ["Testing", "Leak testing / hydro testing as per requirement"],
            ["Application", "Industrial liquid storage, chemical storage, water storage and fuel storage"],
            ["Customization", "Available as per drawing, MOC, nozzle orientation and site layout"],
          ],
        },
      },
      {
        title: "Custom Horizontal Storage Tank Manufacturing",
        body: [
          "Every project has different storage requirements. That is why our horizontal storage tanks can be customized based on capacity, diameter, length, shell thickness, dish-end thickness, nozzle details, support arrangement and installation layout.",
          "Available customization options include:",
        ],
        bullets: [
          "Tank capacity as per requirement", "Shell and dish-end thickness selection", "Saddle support design",
          "Nozzle orientation as per P&ID", "Manhole and inspection opening", "Vent, drain and overflow connection",
          "Level gauge, radar, float or DP level provision", "Sampling point arrangement", "Internal baffles if required",
          "Surface preparation and painting system", "Internal lining or external coating",
        ],
      },
      {
        title: "Fabrication and Quality Control",
        body: [
          "At National Engineers & Steel Fabricators, every horizontal storage tank is fabricated with proper attention to material quality, fit-up, welding, dimensional accuracy and inspection requirements. Our fabrication process focuses on strength, reliability, safety and long-term industrial performance.",
          "Quality checks may include:",
        ],
        bullets: [
          "Material verification", "Fit-up inspection", "Welding quality checks", "Dimensional inspection",
          "Nozzle orientation checking", "Vacuum box test where applicable", "Leak testing",
          "Hydro testing as per requirement", "Final painting and finishing inspection",
        ],
      },
      {
        title: "Why Choose National Engineers for Horizontal Storage Tanks?",
        body: [
          "National Engineers & Steel Fabricators is a trusted storage tank manufacturer in Surat, Gujarat, offering custom fabrication solutions for industrial storage tanks, pressure vessels, process equipment and heavy fabrication products.",
          "Reasons to work with us:",
        ],
        bullets: [
          "Experienced horizontal storage tank manufacturer in India", "Reliable storage tank supplier in Surat and Gujarat",
          "Custom fabrication as per drawing and site requirement", "MS, SS and lined tank fabrication capability",
          "Proper support, nozzle and layout planning", "Suitable coating and lining options",
          "Fabrication for chemical, utility and process industries", "Testing and documentation support as agreed",
          "Industrial-grade tank manufacturing for long service life",
        ],
      },
      {
        title: "Details Required for Quotation",
        body: ["To provide the right quotation for a horizontal storage tank, please share the following details:"],
        bullets: [
          "Tank capacity", "Stored media / liquid type", "Specific gravity", "Operating temperature",
          "MOC requirement", "Tank dimensions or available plot size", "Nozzle details or P&ID",
          "Coating or lining requirement", "Indoor or outdoor installation", "Testing and documentation requirement",
        ],
      },
      {
        title: "Get a Quote for Horizontal Storage Tank",
        body: [
          "Looking for a horizontal storage tank manufacturer and supplier in India for your industrial project?",
          "Share your capacity, stored media, MOC, drawing, site condition and testing requirement with National Engineers & Steel Fabricators. Our team will review your requirements and provide a suitable horizontal storage tank fabrication solution for your application.",
        ],
      },
    ],
    note:
      "Share your capacity, stored media, MOC, drawing, site condition and testing requirement for a suitable fabrication solution.",
    enquiry: {
      title: "Request a quote for a Horizontal Storage Tank",
      subtitle:
        "Share your capacity, stored media, MOC, drawing, site condition and testing requirement with our team.",
      productName: "Horizontal Storage Tank",
      buttonText: "Request Quote",
    },
    faqs: [
      { question: "What is a horizontal storage tank used for?", answer: "A horizontal storage tank is used for storing water, chemicals, fuel, process liquids and utility fluids in industrial plants. It is commonly used where stable support, low-height installation and easy maintenance access are required." },
      { question: "Who is a horizontal storage tank manufacturer in Surat?", answer: "National Engineers & Steel Fabricators is a horizontal storage tank manufacturer in Surat, Gujarat, offering custom MS and SS storage tanks for chemical, water, fuel and process liquid storage applications." },
      { question: "Do you supply horizontal storage tanks in India?", answer: "Yes, National Engineers & Steel Fabricators is a horizontal storage tank manufacturer and supplier in India. We manufacture tanks as per client drawings, capacity, MOC, nozzle orientation and site requirements." },
      { question: "Which materials are used for horizontal storage tanks?", answer: "Horizontal storage tanks can be manufactured in mild steel, carbon steel, stainless steel, alloy steel and lined construction. The material is selected based on the stored liquid, corrosion condition, temperature and industrial application." },
      { question: "Can horizontal storage tanks be customized?", answer: "Yes, horizontal storage tanks can be customized as per capacity, diameter, length, thickness, saddle support design, nozzle location, manhole size, coating, lining and testing requirements." },
      { question: "Are horizontal storage tanks suitable for chemical storage?", answer: "Yes, horizontal storage tanks are suitable for chemical storage when the correct material of construction, coating or internal lining is selected according to the chemical properties and operating conditions." },
      { question: "What details are required to get a quotation for a horizontal storage tank?", answer: "To get a quotation, you can share tank capacity, stored liquid, specific gravity, MOC, operating temperature, tank dimensions, nozzle details, coating or lining requirement and testing requirements." },
      { question: "Do you provide MS and SS horizontal storage tanks?", answer: "Yes, we manufacture MS horizontal storage tanks and SS horizontal storage tanks for industrial liquid storage, chemical storage, water storage, fuel storage and process plant applications." },
      { question: "What testing is done for horizontal storage tanks?", answer: "Testing may include material verification, dimensional inspection, welding inspection, leak testing, hydro testing and final finishing inspection as per project requirement." },
      { question: "How can I contact National Engineers for horizontal storage tank manufacturing?", answer: "You can contact National Engineers & Steel Fabricators with your storage tank requirement, drawing, capacity, media and MOC details. Our team will review your requirement and provide a suitable fabrication solution." },
    ],
    seo: {
      title: "Horizontal Storage Tank Manufacturer & Supplier in India",
      description:
        "Horizontal storage tank manufacturer and supplier in Surat, India, offering custom MS and SS industrial storage tanks for chemical, water and fuel storage.",
      keywords: [
        "horizontal storage tank manufacturer",
        "horizontal storage tank supplier",
        "horizontal storage tank manufacturer in India",
        "horizontal storage tank manufacturer in Surat",
        "storage tank manufacturer in Surat",
        "industrial horizontal storage tank",
        "chemical storage tank manufacturer",
        "MS horizontal storage tank",
        "SS horizontal storage tank",
      ],
    },
  },
  "vertical-storage-tank-manufacturer": {
    title: "Vertical Storage Tank Manufacturer and Supplier in India",
    headline: "Vertical Storage Tank Manufacturer in Surat",
    description:
      "National Engineers & Steel Fabricators is a trusted vertical storage tank manufacturer and supplier in India, offering custom-built vertical storage tanks for bulk liquid storage, utility storage, chemical storage, water storage, process liquid storage and industrial plant applications.",
    pagePath: "/products/vertical-storage-tank-manufacturer",
    image: "/product/2.jpg",
    imageAlt: "Vertical storage tank fabricated by National Engineers",
    imagePosition: "center",
    quickFacts: [
      { label: "Product Type", value: "Vertical Storage Tank" },
      { label: "Construction", value: "MS, CS, SS or as required" },
      { label: "Roof Options", value: "Cone, dome or open-top" },
      { label: "Customization", value: "As per drawing and site layout" },
    ],
    overview: [
      "As an experienced vertical storage tank manufacturer in Surat, Gujarat, we manufacture tanks as per client drawings, storage capacity, site layout, material of construction, roof design, nozzle orientation, access requirements and corrosion conditions.",
      "Our vertical storage tanks are designed for safe storage, optimized floor space, easy access and reliable long-term industrial performance.",
    ],
    sections: [
      {
        title: "Vertical Storage Tank Manufacturer in Surat",
        body: [
          "National Engineers & Steel Fabricators manufactures industrial vertical storage tanks for chemical plants, process industries, manufacturing units, utility systems, pharma, food processing, engineering and industrial storage applications. These tanks are preferred where higher storage capacity is required with a smaller floor footprint.",
          "We are a reliable vertical storage tank supplier in Surat, Gujarat, providing customized tank fabrication in mild steel, carbon steel, stainless steel and lined construction as per stored media and site condition. Each tank is fabricated with proper attention to welding quality, tank roundness, verticality, nozzle orientation, roof design, access arrangement and testing requirements.",
        ],
      },
      {
        title: "Industrial Vertical Storage Tanks for Bulk and Utility Storage",
        body: [
          "Vertical storage tanks are widely used for storing water, chemicals, process liquids, utility fluids and other industrial media. Their vertical design helps reduce floor space usage while providing suitable storage volume for plant operations.",
          "National Engineers manufactures vertical storage tanks with cone roof, dome roof, open-top design, manholes, nozzles, vents, drains, overflow connections, ladders, platforms, handrails and level indication provisions as per project requirement.",
        ],
      },
      {
        title: "Key Features of Our Vertical Storage Tanks",
        bullets: [
          "Custom-built vertical storage tanks as per capacity and application", "Suitable for water, chemicals, process liquids and utility fluids",
          "Mild steel, carbon steel and stainless steel construction options", "Cone roof, dome roof or open-top design options",
          "Custom nozzle orientation as per P&ID or client drawing", "Manhole, vent, drain, overflow and inlet-outlet connections",
          "Ladder, platform and handrail options for safe access", "Level gauge, radar, float or DP level provision",
          "Optional mixing or recirculation nozzle arrangement", "Coating, lining and painting options for corrosion protection",
          "Fabrication as per client drawing, datasheet or site requirement", "Leak testing and inspection support as per requirement",
          "Durable construction for long industrial service life",
        ],
      },
      {
        title: "Applications of Vertical Storage Tanks",
        body: ["As a vertical storage tank manufacturer and supplier, we provide tanks for various industrial applications, including:"],
        bullets: [
          "Bulk liquid storage", "Water storage", "Chemical storage", "Process liquid storage", "Utility fluid storage",
          "Intermediate liquid storage", "Raw material storage", "Finished product storage", "Gravity feed applications",
          "Stable head requirement applications", "Industrial process plants", "Manufacturing units", "Chemical and process industries",
          "Food and beverage processing units", "Pharma and utility systems",
        ],
      },
      {
        title: "Types of Vertical Storage Tanks We Manufacture",
        body: [
          "National Engineers & Steel Fabricators manufactures vertical storage tanks based on application, stored media, site layout and roof requirement.",
          "Common types include:",
        ],
        bullets: [
          "Industrial vertical storage tanks", "Vertical water storage tanks", "Vertical chemical storage tanks",
          "Vertical process liquid storage tanks", "MS vertical storage tanks", "SS vertical storage tanks",
          "Cone roof vertical storage tanks", "Dome roof vertical storage tanks", "Open-top vertical storage tanks",
          "Custom vertical storage tanks as per drawing",
        ],
      },
      {
        title: "Materials of Construction",
        body: [
          "We manufacture vertical storage tanks using suitable material based on stored media, temperature, corrosion condition, site environment and project specification.",
          "Common MOC options include:",
        ],
        bullets: [
          "Mild Steel", "Carbon Steel", "Stainless Steel", "Alloy Steel as per requirement", "Rubber-lined tanks",
          "FRP-lined tanks", "Epoxy-coated tanks", "Painted tanks with suitable surface protection system",
        ],
      },
      {
        title: "Technical Specifications of Vertical Storage Tank",
        body: [
          "National Engineers & Steel Fabricators manufactures vertical storage tanks as per client drawings, storage capacity, site condition and industrial application requirements. Specifications can be customized based on capacity, media, roof type, access needs and process requirements.",
        ],
        table: {
          columns: ["Specification", "Details"],
          rows: [
            ["Product Type", "Vertical Storage Tank"], ["Tank Orientation", "Vertical"],
            ["Application", "Bulk storage, utility storage, water storage, chemical storage and process liquid storage"],
            ["Material of Construction", "Mild Steel, Carbon Steel, Stainless Steel or as per requirement"],
            ["Storage Media", "Water, chemicals, process liquids, utility fluids or as per service compatibility"],
            ["Capacity", "As per client requirement"], ["Tank Shape", "Cylindrical vertical tank"],
            ["Roof Type", "Cone roof, dome roof or open-top design"],
            ["Support / Base", "Flat bottom, skirt, base ring or as per design requirement"],
            ["Thickness", "As per design, capacity and application"], ["Nozzle Connection", "As per P&ID or client drawing"],
            ["Manhole", "Provided as per inspection and maintenance requirement"],
            ["Access Arrangement", "Ladder, platform and handrail as required"],
            ["Level Indication", "Level gauge, radar, float or DP level provision as required"],
            ["Surface Finish", "Painted, coated, lined or polished as per application"],
            ["Internal Lining", "Rubber lining, FRP lining, epoxy coating or as required"],
            ["Testing", "Leak testing / hydro testing as per requirement"],
            ["Customization", "Available as per drawing, MOC, nozzle orientation and site layout"],
          ],
        },
      },
      {
        title: "Custom Vertical Storage Tank Manufacturing",
        body: [
          "Every project has different storage, capacity, media and installation requirements. That is why our vertical storage tanks are manufactured as per client-specific drawings and technical inputs instead of a fixed standard design.",
          "Customization options include:",
        ],
        bullets: [
          "Tank capacity as per requirement", "Diameter and height selection as per site layout", "Cone roof, dome roof or open-top design",
          "Shell and bottom plate thickness selection", "Nozzle orientation as per P&ID", "Manhole and inspection opening",
          "Vent, drain and overflow connection", "Inlet and outlet connection arrangement", "Ladder, platform and handrail arrangement",
          "Level instrument mounting provision", "Mixing or recirculation nozzle provision", "Coating, painting or lining system",
          "Testing and documentation as per project scope",
        ],
      },
      {
        title: "Fabrication and Quality Control",
        body: [
          "At National Engineers & Steel Fabricators, every vertical storage tank is fabricated with proper attention to material selection, fit-up, welding quality, dimensional accuracy, roundness, verticality, nozzle alignment and inspection requirements. Our fabrication process focuses on strength, safety, reliability and long-term industrial performance.",
          "Quality checks may include:",
        ],
        bullets: [
          "Material verification", "Fit-up inspection", "Welding quality checks", "Dimensional inspection", "Roundness checking",
          "Verticality checking", "Nozzle orientation checking", "Leak testing as applicable", "Hydro testing as per requirement",
          "Final painting and finishing inspection", "Documentation support as agreed",
        ],
      },
      {
        title: "Why Choose National Engineers for Vertical Storage Tanks?",
        body: [
          "National Engineers & Steel Fabricators is a trusted storage tank manufacturer in Surat, Gujarat, offering custom fabrication solutions for vertical storage tanks, horizontal storage tanks, pressure vessels, process equipment and heavy fabrication products.",
          "Reasons to work with us:",
        ],
        bullets: [
          "Experienced vertical storage tank manufacturer in India", "Reliable vertical storage tank supplier in Surat, Gujarat",
          "Custom fabrication as per drawing and site requirement", "MS, CS and SS storage tank manufacturing capability",
          "Suitable for water, chemical and process liquid storage", "Proper roof, access, nozzle and support planning",
          "Coating and lining options for corrosion service", "Fabrication for chemical, utility and process industries",
          "Testing and documentation support as agreed", "Industrial-grade tank manufacturing for long service life",
        ],
      },
      {
        title: "Details Required for Quotation",
        body: ["To provide the right quotation for a vertical storage tank, please share the following details:"],
        bullets: [
          "Tank capacity", "Stored media / liquid type", "Specific gravity", "Operating temperature", "Material of construction",
          "Tank diameter and height constraints", "Roof type preference", "P&ID or nozzle list", "Access requirement",
          "Coating or lining requirement", "Indoor or outdoor installation", "Testing and documentation requirement",
        ],
      },
      {
        title: "Get a Quote for Vertical Storage Tank",
        body: [
          "Looking for a vertical storage tank manufacturer and supplier in India for your industrial project?",
          "Share your capacity, stored media, MOC, drawing, roof type, nozzle list, site condition and testing requirement with National Engineers & Steel Fabricators. Our team will review your requirement and provide a suitable vertical storage tank fabrication solution for your application.",
        ],
      },
    ],
    note:
      "Share your capacity, stored media, MOC, drawing, roof type, nozzle list, site condition and testing requirement for a suitable fabrication solution.",
    enquiry: {
      title: "Request a quote for a Vertical Storage Tank",
      subtitle:
        "Share your capacity, stored media, MOC, drawing, roof type, nozzle list, site condition and testing requirement with our team.",
      productName: "Vertical Storage Tank",
      buttonText: "Request Quote",
    },
    faqs: [
      { question: "What is a vertical storage tank?", answer: "A vertical storage tank is a cylindrical tank used for storing water, chemicals, process liquids, utility fluids and other industrial media. It is commonly used where higher storage capacity is required with optimized floor space." },
      { question: "Who is a vertical storage tank manufacturer in Surat?", answer: "National Engineers & Steel Fabricators is a vertical storage tank manufacturer in Surat, Gujarat, offering custom MS and SS vertical storage tanks for water, chemical, process and utility storage applications." },
      { question: "Do you supply vertical storage tanks in India?", answer: "Yes, National Engineers & Steel Fabricators is a vertical storage tank manufacturer and supplier in India. We manufacture tanks as per client drawings, capacity, MOC, roof type, nozzle orientation and site requirements." },
      { question: "Which materials are used for vertical storage tanks?", answer: "Vertical storage tanks can be manufactured in mild steel, carbon steel, stainless steel, alloy steel and lined construction. The material is selected based on stored media, corrosion condition, temperature and industrial application." },
      { question: "Can vertical storage tanks be customized?", answer: "Yes, vertical storage tanks can be customized as per capacity, diameter, height, roof type, nozzle layout, manhole size, ladder, platform, coating, lining and testing requirements." },
      { question: "Are vertical storage tanks suitable for chemical storage?", answer: "Yes, vertical storage tanks are suitable for chemical storage when the correct material of construction, coating or internal lining is selected according to the chemical properties and service conditions." },
      { question: "What roof options are available for vertical storage tanks?", answer: "Common roof options include cone roof, dome roof and open-top design. The roof type is selected based on stored media, application, access requirement and project specification." },
      { question: "What is the difference between vertical and horizontal storage tanks?", answer: "A vertical storage tank uses less floor space and is suitable for bulk storage or stable head requirements, while a horizontal storage tank is preferred for low-height installation and easy ground-level access." },
      { question: "What details are required to get a quotation for a vertical storage tank?", answer: "To get a quotation, you can share tank capacity, stored liquid, MOC, diameter and height constraints, roof type, P&ID, nozzle list, access requirement, coating or lining requirement and testing details." },
      { question: "How is vertical storage tank price calculated?", answer: "Vertical storage tank price depends on capacity, material of construction, plate thickness, roof type, access structure, nozzle arrangement, coating, lining, testing, documentation and customization requirements." },
    ],
    seo: {
      title: "Vertical Storage Tank Manufacturer & Supplier in India | NESF",
      description:
        "Vertical storage tank manufacturer and supplier in Surat, India, offering custom MS and SS tanks for water, chemical and process storage.",
      keywords: [
        "vertical storage tank manufacturer",
        "vertical storage tank supplier",
        "vertical storage tank manufacturer in India",
        "vertical storage tank manufacturer in Surat",
        "vertical storage tank manufacturer in Gujarat",
        "industrial vertical storage tank",
        "MS vertical storage tank",
        "SS vertical storage tank",
        "chemical storage tank manufacturer",
        "water storage tank manufacturer",
        "custom storage tank manufacturer",
      ],
    },
  },
  "blowdown-flash-tank-manufacturer": {
    title: "Blowdown Flash Tank Manufacturer and Supplier in India",
    headline: "Blowdown Flash Tank Manufacturer in Surat",
    description:
      "National Engineers & Steel Fabricators is a trusted blowdown flash tank manufacturer and supplier in India, offering custom-built blowdown tanks and flash tanks for boiler blowdown handling, flash steam separation, condensate management and industrial steam systems.",
    pagePath: "/products/blowdown-flash-tank-manufacturer",
    image: "/product/11.jpg",
    imageAlt: "Blowdown flash tank fabricated by National Engineers",
    imagePosition: "center",
    quickFacts: [
      { label: "Product Type", value: "Blowdown Flash Tank" },
      { label: "Application", value: "Boiler blowdown and flash steam separation" },
      { label: "Orientation", value: "Vertical or horizontal" },
      { label: "Customization", value: "As per P&ID and duty condition" },
    ],
    overview: [
      "As an experienced blowdown flash tank manufacturer in Surat, Gujarat, we manufacture tanks as per client drawings, P&ID, flow rate, inlet pressure, temperature, discharge requirement, vent arrangement, nozzle orientation, material of construction and site conditions.",
      "Our blowdown flash tanks are designed to support safe pressure release, flash steam separation and downstream system protection.",
    ],
    sections: [
      {
        title: "Blowdown Flash Tank Manufacturer in Surat",
        body: [
          "National Engineers & Steel Fabricators manufactures industrial blowdown flash tanks for boiler systems, steam lines, condensate recovery systems, utility plants and process industries. These tanks are used where high-pressure blowdown discharge needs to be safely handled, separated and directed for further discharge or recovery.",
          "We are a reliable blowdown flash tank supplier in Surat, Gujarat, providing customized fabrication solutions for chemical plants, process industries, manufacturing units, boiler houses, utility systems, pharma, food processing and engineering applications. Each tank is fabricated with proper attention to inlet arrangement, venting, condensate outlet, supports, testing and documentation as per project requirement.",
        ],
      },
      {
        title: "Blowdown Tank and Flash Tank for Boiler Systems",
        body: [
          "A blowdown flash tank is commonly used in boiler systems to handle hot, high-pressure blowdown water. When blowdown water enters the tank at lower pressure, part of it flashes into steam while the remaining condensate or water is discharged through the outlet.",
          "This process helps separate flash steam, reduce thermal shock, control discharge safely and support condensate or heat recovery systems. A properly designed blowdown flash tank improves safety, protects downstream lines and supports reliable boiler plant operation.",
        ],
      },
      {
        title: "Why Blowdown Flash Tanks Are Used",
        body: [
          "Blowdown flash tanks are used to manage sudden pressure release, separate flash steam and safely control boiler blowdown discharge. They act as an intermediate pressure vessel between the boiler blowdown line and downstream drainage or condensate recovery system.",
          "Common uses include:",
        ],
        bullets: [
          "Boiler blowdown handling", "Flash steam separation", "Condensate management", "Safe discharge control",
          "Thermal shock reduction", "Pressure release management", "Downstream drainage protection",
          "Energy recovery system support", "Steam and condensate line interface", "Utility plant operation support",
        ],
      },
      {
        title: "Key Features of Our Blowdown Flash Tanks",
        bullets: [
          "Custom-built blowdown flash tanks as per project requirement", "Suitable for boiler blowdown and flash steam separation",
          "Designed for sudden pressure release handling", "Mild steel, carbon steel and stainless steel construction options",
          "Inlet diffuser or baffle arrangement as required", "Vent / steam outlet and condensate outlet provision",
          "Drain, manhole and inspection opening options", "Pressure gauge, temperature point and level control provision",
          "Safety valve and steam piping interface options", "Skid-mounted arrangement with valves and control stations if required",
          "Custom nozzle orientation as per P&ID or client drawing", "Painting, coating or finishing as per site environment",
          "Pressure testing and nozzle alignment checks as applicable", "Documentation support as agreed for inspection and maintenance",
        ],
      },
      {
        title: "Applications of Blowdown Flash Tanks",
        body: ["As a blowdown flash tank manufacturer and supplier, we provide tanks for various industrial applications, including:"],
        bullets: [
          "Boiler blowdown systems", "Steam boiler plants", "Condensate recovery systems", "Flash steam recovery systems",
          "Utility steam systems", "Chemical process plants", "Pharmaceutical industries", "Food and beverage processing units",
          "Manufacturing plants", "Engineering industries", "Process heating systems", "Industrial steam distribution systems",
          "Thermal fluid and utility applications", "Energy recovery systems",
        ],
      },
      {
        title: "Types of Blowdown and Flash Tanks We Manufacture",
        body: [
          "National Engineers & Steel Fabricators manufactures blowdown and flash tanks based on application, flow rate, pressure, temperature and site layout.",
          "Common types include:",
        ],
        bullets: [
          "Blowdown flash tanks", "Boiler blowdown tanks", "Flash steam tanks", "Industrial flash tanks",
          "Condensate flash tanks", "Vertical blowdown flash tanks", "Horizontal blowdown flash tanks",
          "Custom flash tanks as per drawing", "Pressure vessels for steam and condensate systems",
          "Skid-mounted blowdown flash tank packages",
        ],
      },
      {
        title: "Materials of Construction",
        body: [
          "We manufacture blowdown flash tanks using suitable materials based on water chemistry, pressure, temperature, corrosion condition, site environment and project specification.",
          "Common MOC options include:",
        ],
        bullets: [
          "Mild Steel", "Carbon Steel", "Stainless Steel", "Alloy Steel as per requirement",
          "Internally coated tanks if required", "Externally painted or coated tanks as per site condition",
        ],
      },
      {
        title: "Technical Specifications of Blowdown Flash Tank",
        body: [
          "National Engineers & Steel Fabricators manufactures blowdown flash tanks as per client drawings, P&ID, flow data, pressure condition, temperature and industrial application requirements. Specifications can be customized based on blowdown conditions, venting arrangement, site layout and inspection requirements.",
        ],
        table: {
          columns: ["Specification", "Details"],
          rows: [
            ["Product Type", "Blowdown Flash Tank / Flash Steam Tank"],
            ["Application", "Boiler blowdown handling, flash steam separation and condensate management"],
            ["Tank Orientation", "Vertical or horizontal as per site requirement"],
            ["Material of Construction", "Mild Steel, Carbon Steel, Stainless Steel or as per requirement"],
            ["Service Media", "Boiler blowdown water, flash steam and condensate"], ["Capacity / Size", "As per client requirement"],
            ["Design Pressure", "As per process and safety requirement"], ["Operating Pressure", "As per boiler blowdown condition"],
            ["Operating Temperature", "As per project specification"], ["Inlet Arrangement", "Inlet diffuser or baffle arrangement if required"],
            ["Nozzle Connection", "As per P&ID or client drawing"],
            ["Outlet Arrangement", "Vent / steam outlet, condensate outlet, drain and overflow as required"],
            ["Instrumentation", "Pressure gauge, temperature point and level control provision as required"],
            ["Safety Accessories", "Safety valve and related fittings as per project requirement"],
            ["Support Type", "Leg support, saddle support, skirt support or skid-mounted arrangement"],
            ["Surface Finish", "Painted, coated or finished as per environment"],
            ["Testing", "Pressure testing, leak testing and nozzle alignment checks as applicable"],
            ["Documentation", "As agreed for inspection, audit and maintenance"],
            ["Customization", "Available as per drawing, duty condition, MOC and site layout"],
          ],
        },
      },
      {
        title: "Custom Blowdown Flash Tank Manufacturing",
        body: [
          "Every boiler and steam system has different blowdown conditions, flow rates, pressure levels and site requirements. That is why our blowdown flash tanks are manufactured as per client-specific drawings and duty conditions instead of a fixed standard design.",
          "Customization options include:",
        ],
        bullets: [
          "Tank size as per flow rate and blowdown condition", "Vertical or horizontal tank design",
          "Shell and dish-end thickness selection", "Inlet diffuser or baffle arrangement", "Vent / steam outlet arrangement",
          "Condensate outlet and drain provision", "Nozzle orientation as per P&ID", "Manhole and inspection opening",
          "Pressure gauge and temperature point provision", "Level control provision if required",
          "Safety valve and piping interface provision", "Skid-mounted valve and control station option",
          "Paint, coating or surface protection system", "Testing and documentation as per project scope",
        ],
      },
      {
        title: "Fabrication and Quality Control",
        body: [
          "At National Engineers & Steel Fabricators, every blowdown flash tank is fabricated with proper attention to material selection, fit-up, welding quality, dimensional accuracy, nozzle alignment and inspection requirements. Our fabrication process focuses on safety, pressure handling, durability and reliable performance in boiler and steam systems.",
          "Quality checks may include:",
        ],
        bullets: [
          "Material verification", "Fit-up inspection", "Welding quality checks", "Dimensional inspection",
          "Nozzle orientation checking", "Internal arrangement checking", "Pressure testing as applicable",
          "Leakage checks as required", "Final painting and finishing inspection", "Documentation support as agreed",
        ],
      },
      {
        title: "Why Choose National Engineers for Blowdown Flash Tanks?",
        body: [
          "National Engineers & Steel Fabricators is a trusted blowdown flash tank manufacturer in India and pressure vessel manufacturer in Surat, Gujarat, offering custom fabrication solutions for boiler blowdown tanks, flash tanks, pressure vessels, storage tanks, process equipment and heavy fabrication products.",
          "Reasons to work with us:",
        ],
        bullets: [
          "Experienced blowdown flash tank manufacturer in India", "Reliable blowdown flash tank supplier in Surat, Gujarat",
          "Custom fabrication as per drawing, P&ID and duty condition", "Manufacturing support for boiler and steam utility systems",
          "MS, CS and SS pressure vessel fabrication capability", "Proper inlet, vent, condensate outlet and safety accessory planning",
          "Fabrication for chemical, pharma, food, utility and process industries", "Testing and documentation support as agreed",
          "Industrial-grade fabrication for long service life", "Custom pressure vessel manufacturing as per project requirement",
        ],
      },
      {
        title: "Details Required for Quotation",
        body: ["To provide the right quotation for a blowdown flash tank, please share the following details:"],
        bullets: [
          "Flow rate", "Inlet pressure", "Inlet temperature", "Discharge pressure requirement", "Boiler blowdown condition",
          "P&ID or technical drawing", "Required vent arrangement", "Steam outlet and condensate outlet details",
          "Material of construction", "Tank orientation requirement", "Space constraints and site layout",
          "Safety accessory requirement", "Testing and documentation requirement",
        ],
      },
      {
        title: "Get a Quote for Blowdown Flash Tank",
        body: [
          "Looking for a blowdown flash tank manufacturer and supplier in India for your boiler blowdown or steam utility system?",
          "Share your flow rate, pressure, temperature, P&ID, vent arrangement, MOC, site condition and inspection requirement with National Engineers & Steel Fabricators. Our team will review your requirement and provide a suitable blowdown flash tank fabrication solution for your application.",
        ],
      },
    ],
    note:
      "Share your flow rate, pressure, temperature, P&ID, vent arrangement, MOC, site condition and inspection requirement for a suitable fabrication solution.",
    enquiry: {
      title: "Request a quote for a Blowdown / Flash Tank",
      subtitle:
        "Share your flow rate, pressure, temperature, P&ID, vent arrangement, MOC, site condition and inspection requirement.",
      productName: "Blowdown / Flash Tank",
      buttonText: "Request Quote",
    },
    faqs: [
      { question: "What is a blowdown flash tank?", answer: "A blowdown flash tank is a pressure vessel used to handle boiler blowdown discharge, separate flash steam and manage hot condensate or water safely before downstream discharge or recovery." },
      { question: "What is the use of a blowdown flash tank?", answer: "A blowdown flash tank is used for boiler blowdown handling, flash steam separation, condensate management, pressure release control and downstream system protection in steam utility systems." },
      { question: "Who is a blowdown flash tank manufacturer in Surat?", answer: "National Engineers & Steel Fabricators is a blowdown flash tank manufacturer in Surat, Gujarat, offering custom blowdown tanks and flash tanks as per client drawings, flow rate, pressure, temperature and site requirements." },
      { question: "Do you supply blowdown flash tanks in India?", answer: "Yes, National Engineers & Steel Fabricators is a blowdown flash tank manufacturer and supplier in India. We manufacture custom tanks for boiler systems, steam lines, condensate recovery systems and utility plants." },
      { question: "Is a blowdown flash tank a pressure vessel?", answer: "Yes, a blowdown flash tank is a type of pressure vessel because it handles pressure release, flash steam separation and hot condensate under specified operating conditions." },
      { question: "Which materials are used for blowdown flash tanks?", answer: "Blowdown flash tanks can be manufactured in mild steel, carbon steel, stainless steel or alloy steel depending on pressure, temperature, water chemistry, corrosion condition and project specification." },
      { question: "Can blowdown flash tanks be customized?", answer: "Yes, blowdown flash tanks can be customized as per flow rate, inlet pressure, temperature, tank orientation, MOC, nozzle orientation, vent arrangement, condensate outlet, safety accessories and testing requirements." },
      { question: "What is the difference between a blowdown tank and a flash tank?", answer: "A blowdown tank mainly handles boiler blowdown discharge, while a flash tank focuses on separating flash steam from hot condensate or blowdown water. In many boiler systems, both functions are combined in a blowdown flash tank." },
      { question: "What details are required to get a quotation for a blowdown flash tank?", answer: "To get a quotation, you can share flow rate, inlet pressure, temperature, discharge requirement, P&ID, vent arrangement, nozzle details, MOC, space constraints and testing requirements." },
      { question: "How is blowdown flash tank price calculated?", answer: "Blowdown flash tank price depends on size, material of construction, pressure rating, thickness, internals, nozzles, safety accessories, coating, testing, documentation and customization requirements." },
    ],
    seo: {
      title: "Blowdown Flash Tank Manufacturer & Supplier in India | NESF",
      description:
        "Blowdown flash tank manufacturer and supplier in Surat, India, offering custom pressure vessels for boiler blowdown and flash steam separation.",
      keywords: [
        "blowdown tank manufacturer",
        "flash tank manufacturer",
        "blowdown flash tank supplier",
        "blowdown flash tank manufacturer in India",
        "blowdown flash tank manufacturer in Surat",
        "boiler blowdown tank manufacturer",
        "flash steam tank manufacturer",
        "industrial flash tank",
        "custom flash tank",
        "pressure vessel manufacturer in India",
        "pressure vessel manufacturer in Surat",
      ],
    },
  },
  "water-holding-utility-vessel-manufacturer": {
    title: "Water Holding Utility Vessel Manufacturer and Supplier in India",
    headline: "Water Holding Vessel Manufacturer in Surat",
    description:
      "National Engineers & Steel Fabricators is a trusted water holding utility vessel manufacturer and supplier in India, offering custom-built utility vessels for raw water, DM water, soft water, service water, cooling water, process water and industrial plant utility applications.",
    pagePath:
      "/products/water-holding-utility-vessel-manufacturer",
    image: "/product/9.jpg",
    imageAlt: "Water holding utility vessel fabricated by National Engineers",
    imagePosition: "center",
    quickFacts: [
      { label: "Product Type", value: "Water Holding Utility Vessel" },
      { label: "Water Types", value: "Raw, DM, soft, service and cooling" },
      { label: "Orientation", value: "Vertical or horizontal" },
      { label: "Customization", value: "As per drawing and utility duty" },
    ],
    overview: [
      "As an experienced water holding vessel manufacturer in Surat, Gujarat, we manufacture vessels as per client drawings, storage capacity, water type, site layout, material of construction, nozzle orientation, coating requirement and utility system design.",
      "Our water holding and utility vessels are designed for durability, easy maintenance, reliable water storage and dependable plant utility distribution.",
    ],
    sections: [
      {
        title: "Water Holding Vessel Manufacturer in Surat",
        body: [
          "National Engineers & Steel Fabricators manufactures industrial water holding vessels for chemical plants, process industries, manufacturing units, utility systems, pharma, food processing, engineering and industrial plant operations. These vessels are used where water needs to be stored, buffered or distributed safely for plant utility requirements.",
          "We are a reliable water holding vessel supplier in Surat, Gujarat, providing customized fabrication solutions for raw water storage, DM water storage, soft water storage, service water holding, cooling water reservoirs and process water buffer applications. Each vessel is fabricated with proper attention to welding quality, nozzle layout, support design, coating, inspection and testing requirements.",
        ],
      },
      {
        title: "Utility Vessels for Industrial Plant Support",
        body: [
          "Utility vessels are used to support plant operations by storing and distributing water or utility media as per process demand. These vessels help maintain water availability for pumps, pipelines, utility loops, cooling systems and process equipment.",
          "National Engineers manufactures utility vessels in vertical or horizontal designs with manholes, vents, drains, overflow connections, inlet-outlet nozzles, level indication provision, supports, access arrangement and coating systems as per project requirement.",
        ],
      },
      {
        title: "Industrial Water Holding Vessels for Different Water Types",
        body: [
          "Different industries require different water storage and handling conditions. A raw water vessel may need basic corrosion protection, while a DM water or soft water vessel may need suitable internal coating, lining or stainless steel construction depending on water quality and application.",
          "Our water holding utility vessels can be designed for:",
        ],
        bullets: [
          "Raw water storage", "DM water storage", "Soft water storage", "Service water holding", "Cooling water storage",
          "Process water storage", "Utility water buffering", "Pump suction stabilization", "Pipeline supply support",
          "Industrial plant water distribution",
        ],
      },
      {
        title: "Key Features of Our Water Holding Utility Vessels",
        bullets: [
          "Custom-built water holding vessels as per capacity and application",
          "Suitable for raw water, DM water, soft water, service water and cooling water",
          "Vertical or horizontal vessel design as per site layout", "Mild steel, carbon steel and stainless steel construction options",
          "Manhole, vent, drain, overflow and inlet-outlet nozzles", "Custom nozzle orientation as per P&ID or client drawing",
          "Level gauge, float, radar or DP level provision as required", "Internal coating options for corrosion protection",
          "Epoxy, bituminous or other coating systems as specified", "Platform and ladder options for vertical vessels",
          "Skid-mounted option with pumps and accessories if required", "Hydro testing and leak checks as per requirement",
          "Durable fabrication for long industrial service life",
        ],
      },
      {
        title: "Applications of Water Holding Utility Vessels",
        body: ["As a water holding utility vessel manufacturer and supplier, we provide vessels for various industrial applications, including:"],
        bullets: [
          "Utility water storage", "Raw water storage", "DM water storage", "Soft water storage", "Cooling water reservoirs",
          "Service water systems", "Process water holding", "Buffer tanks for utility pumps", "Pump suction stabilization",
          "Pipeline water distribution", "Chemical process plants", "Pharmaceutical industries", "Food and beverage processing units",
          "Manufacturing units", "Engineering industries", "Industrial utility systems",
        ],
      },
      {
        title: "Types of Water Holding and Utility Vessels We Manufacture",
        body: [
          "National Engineers & Steel Fabricators manufactures water holding vessels and utility vessels based on water type, capacity, installation layout and project requirement.",
          "Common types include:",
        ],
        bullets: [
          "Water holding vessels", "Industrial utility vessels", "Raw water storage vessels", "DM water storage vessels",
          "Soft water storage vessels", "Service water vessels", "Cooling water storage tanks", "Process water storage tanks",
          "Vertical water holding vessels", "Horizontal water holding vessels", "Skid-mounted utility vessels",
          "Custom utility vessels as per drawing",
        ],
      },
      {
        title: "Materials of Construction",
        body: [
          "We manufacture water holding utility vessels using suitable material based on water type, corrosion condition, temperature, operating requirement, site environment and project specification.",
          "Common MOC options include:",
        ],
        bullets: [
          "Mild Steel", "Carbon Steel", "Stainless Steel", "Alloy Steel as per requirement",
          "Rubber-lined construction if required", "FRP-lined construction if required", "Epoxy-coated vessels",
          "Bituminous-coated vessels", "Painted vessels with suitable surface protection system",
        ],
      },
      {
        title: "Technical Specifications of Water Holding Utility Vessel",
        body: [
          "National Engineers & Steel Fabricators manufactures water holding and utility vessels as per client drawings, capacity requirements, water type, site condition and industrial application needs. Specifications can be customized based on storage volume, MOC, coating requirement, nozzle details and installation layout.",
        ],
        table: {
          columns: ["Specification", "Details"],
          rows: [
            ["Product Type", "Water Holding Utility Vessel"],
            ["Application", "Raw water, DM water, soft water, service water, cooling water and utility water storage"],
            ["Vessel Orientation", "Vertical or horizontal as per site requirement"],
            ["Material of Construction", "Mild Steel, Carbon Steel, Stainless Steel or as per requirement"],
            ["Storage Media", "Raw water, DM water, soft water, service water, cooling water or process water"],
            ["Capacity", "As per client requirement"], ["Design Type", "Cylindrical storage vessel / utility vessel"],
            ["Support Type", "Leg support, saddle support, skirt support, base ring or skid-mounted arrangement"],
            ["Thickness", "As per design, capacity and application"], ["Nozzle Connection", "As per P&ID or client drawing"],
            ["Manhole", "Provided as per inspection and maintenance requirement"],
            ["Connections", "Inlet, outlet, drain, vent, overflow and level connection as required"],
            ["Access Arrangement", "Ladder, platform and handrail for vertical vessels if required"],
            ["Surface Finish", "Painted, coated, lined or polished as per application"],
            ["Internal Coating", "Epoxy, bituminous, rubber lining, FRP lining or as required"],
            ["Testing", "Hydro testing / leak testing as per requirement"],
            ["Documentation", "As agreed for inspection, audit and maintenance"],
            ["Customization", "Available as per drawing, water type, MOC, coating and site layout"],
          ],
        },
      },
      {
        title: "Custom Water Holding Utility Vessel Manufacturing",
        body: [
          "Every plant has different water storage, utility distribution and installation requirements. That is why our water holding utility vessels are manufactured as per client-specific drawings, P&ID and duty conditions instead of a fixed standard design.",
          "Customization options include:",
        ],
        bullets: [
          "Vessel capacity as per requirement", "Vertical or horizontal vessel design", "Diameter and height or length selection",
          "Shell and dish-end thickness selection", "Nozzle orientation as per P&ID", "Inlet, outlet, drain, vent and overflow arrangement",
          "Manhole and inspection opening", "Level instrument mounting provision", "Ladder, platform and handrail arrangement",
          "Internal coating or lining system", "External painting and surface protection",
          "Skid-mounted arrangement with pumps if required", "Testing and documentation as per project scope",
        ],
      },
      {
        title: "Fabrication and Quality Control",
        body: [
          "At National Engineers & Steel Fabricators, every water holding utility vessel is fabricated with proper attention to material selection, fit-up, welding quality, dimensional accuracy, nozzle alignment, surface preparation and coating requirements. Our fabrication process focuses on durability, maintainability and reliable industrial performance.",
          "Quality checks may include:",
        ],
        bullets: [
          "Material verification", "Fit-up inspection", "Welding quality checks", "Dimensional inspection",
          "Nozzle orientation checking", "Surface preparation checks", "Coating DFT checks if applicable",
          "Hydro testing as required", "Leak testing as required", "Final painting and finishing inspection",
          "Documentation support as agreed",
        ],
      },
      {
        title: "Why Choose National Engineers for Water Holding Utility Vessels?",
        body: [
          "National Engineers & Steel Fabricators is a trusted water holding vessel manufacturer in India and utility vessel manufacturer in Surat, Gujarat, offering custom fabrication solutions for storage vessels, utility vessels, pressure vessels, storage tanks and heavy fabrication products.",
          "Reasons to work with us:",
        ],
        bullets: [
          "Experienced water holding vessel manufacturer in India", "Reliable utility vessel supplier in Surat, Gujarat",
          "Custom fabrication as per drawing and site requirement", "MS, CS and SS water vessel manufacturing capability",
          "Suitable for raw water, DM water, soft water and service water", "Proper nozzle, support, coating and access planning",
          "Coating and lining options for corrosion protection", "Fabrication for chemical, pharma, food, utility and process industries",
          "Testing and documentation support as agreed", "Industrial-grade vessel manufacturing for long service life",
        ],
      },
      {
        title: "Details Required for Quotation",
        body: ["To provide the right quotation for a water holding utility vessel, please share the following details:"],
        bullets: [
          "Required storage capacity", "Water type such as raw, DM, soft, service or cooling water", "Operating temperature",
          "Material of construction", "Corrosion allowance", "Coating or lining specification",
          "Vertical or horizontal orientation requirement", "P&ID or nozzle list", "Site space constraints",
          "Access requirement", "Pump or skid-mounted requirement if any", "Testing and documentation requirement",
        ],
      },
      {
        title: "Get a Quote for Water Holding Utility Vessel",
        body: [
          "Looking for a water holding utility vessel manufacturer and supplier in India for your industrial plant or utility system?",
          "Share your capacity, water type, MOC, coating specification, nozzle list, site constraints and testing requirement with National Engineers & Steel Fabricators. Our team will review your requirements and provide a suitable water holding utility vessel fabrication solution for your application.",
        ],
      },
    ],
    note:
      "Share your capacity, water type, MOC, coating specification, nozzle list, site constraints and testing requirement for a suitable fabrication solution.",
    enquiry: {
      title: "Request a quote for a Water Holding / Utility Vessel",
      subtitle:
        "Share your capacity, water type, MOC, coating specification, nozzle list, site constraints and testing requirement.",
      productName: "Water Holding / Utility Vessel",
      buttonText: "Request Quote",
    },
    faqs: [
      { question: "What is a water holding utility vessel?", answer: "A water holding utility vessel is an industrial vessel used to store raw water, DM water, soft water, service water, cooling water or process water for plant utility and distribution requirements." },
      { question: "Who is a water holding vessel manufacturer in Surat?", answer: "National Engineers & Steel Fabricators is a water holding vessel manufacturer in Surat, Gujarat, offering custom water holding and utility vessels as per client drawings, capacity, MOC, coating and site requirements." },
      { question: "Do you supply water holding utility vessels in India?", answer: "Yes, National Engineers & Steel Fabricators is a water holding utility vessel manufacturer and supplier in India. We manufacture custom utility vessels for industrial plants, process units and utility systems." },
      { question: "Which water types can be stored in utility vessels?", answer: "Utility vessels can be used for raw water, DM water, soft water, service water, cooling water and process water storage, depending on material selection and coating or lining requirement." },
      { question: "Which materials are used for water holding vessels?", answer: "Water holding vessels can be manufactured in mild steel, carbon steel, stainless steel or lined construction. The material is selected based on water type, corrosion condition, temperature and project specification." },
      { question: "Can water holding utility vessels be customized?", answer: "Yes, water holding utility vessels can be customized as per capacity, orientation, MOC, nozzle arrangement, manhole, coating, lining, support design, access arrangement and testing requirements." },
      { question: "Are water holding vessels available in vertical and horizontal designs?", answer: "Yes, water holding utility vessels can be manufactured in vertical or horizontal designs based on available space, storage capacity, maintenance access and site layout." },
      { question: "What coating is used for water holding utility vessels?", answer: "Coating depends on the water type and corrosion requirement. Common options include epoxy coating, bituminous coating, rubber lining, FRP lining or other suitable internal and external protection systems." },
      { question: "What details are required to get a quotation for a water holding vessel?", answer: "To get a quotation, you can share capacity, water type, MOC, corrosion allowance, coating specification, orientation, P&ID, nozzle list, site constraints and testing requirements." },
      { question: "How is water holding utility vessel price calculated?", answer: "Water holding utility vessel price depends on capacity, material of construction, plate thickness, coating or lining, nozzle arrangement, access structure, testing, documentation and customization requirements." },
    ],
    seo: {
      title: "Water Holding Utility Vessel Manufacturer & Supplier in India | NESF",
      description:
        "Water holding vessel manufacturer and supplier in Surat, India, offering custom utility vessels for raw, DM, soft and service water storage.",
      keywords: [
        "water holding vessel manufacturer",
        "utility vessel manufacturer",
        "water holding vessel supplier",
        "water holding vessel manufacturer in India",
        "water holding vessel manufacturer in Surat",
        "utility vessel manufacturer in India",
        "utility vessel supplier in Surat",
        "industrial water storage vessel",
        "process water storage tank",
        "DM water storage tank",
        "soft water storage tank",
        "service water storage vessel",
        "cooling water storage tank",
        "custom storage vessel manufacturer",
      ],
    },
  },
  "filter-vessel-manufacturer": {
    title: "Filter Vessel Manufacturer and Supplier in India",
    headline: "Filter Vessel Manufacturer in Surat",
    description:
      "National Engineers & Steel Fabricators is a trusted filter vessel manufacturer and supplier in India, offering custom-built filter vessels for activated carbon filtration, softener systems, media filtration, water treatment plants, process water systems and industrial utility applications.",
    pagePath: "/products/filter-vessel-manufacturer",
    image: "/product/12.jpg",
    imageAlt: "Filter vessel and softener tank fabricated by National Engineers",
    imagePosition: "center",
    quickFacts: [
      { label: "Product Type", value: "Filter Vessel / Softener Tank" },
      { label: "Media", value: "Carbon, resin, sand or multimedia" },
      { label: "Orientation", value: "Vertical or horizontal" },
      { label: "Customization", value: "As per P&ID and filtration duty" },
    ],
    overview: [
      "As an experienced filter vessel manufacturer in Surat, Gujarat, we manufacture filter vessels as per client drawings, P&ID, flow rate, filtration media, operating pressure, backwash requirement, material of construction, coating requirement and site conditions.",
      "Our filter vessels are designed for reliable filtration performance, safe pressure containment, easy media maintenance and long service life.",
    ],
    sections: [
      {
        title: "Filter Vessel Manufacturer in Surat",
        body: [
          "National Engineers & Steel Fabricators manufactures industrial filter vessels for water treatment plants, process industries, chemical plants, pharma units, food processing units, manufacturing plants and utility systems. These vessels are used where water or process liquid needs to pass through activated carbon, resin, sand, multimedia or other filtration media.",
          "We are a reliable filter vessel supplier in Surat, Gujarat, providing customized fabrication solutions for activated carbon filter vessels, softener tanks, pressure filter vessels, media filter vessels and multi-vessel skid arrangements. Each vessel is fabricated with proper attention to welding quality, nozzle orientation, internals fitment, coating, lining, testing and documentation requirements.",
        ],
      },
      {
        title: "Industrial Filter Vessels for Water Treatment and Process Skids",
        body: [
          "Filter vessels are used in water treatment and process systems to remove impurities, suspended particles, odor, color, hardness or unwanted organic matter depending on the selected media. These vessels can be supplied as standalone units or as part of multi-vessel skid systems.",
          "National Engineers manufactures filter vessels with top and bottom nozzles, service and backwash connections, distributor and collector arrangements, manholes, vents, drains, sampling points, pressure tapping and coating or lining systems as per project requirement.",
        ],
      },
      {
        title: "Activated Carbon Filter Vessel Manufacturer",
        body: [
          "Activated carbon filter vessels are used for odor removal, color reduction, organic matter reduction and polishing applications in water treatment and process systems. These vessels are designed to hold activated carbon media and allow controlled flow distribution through the media bed.",
          "As an activated carbon filter vessel manufacturer in India, National Engineers & Steel Fabricators manufactures custom vessels based on flow rate, media volume, operating pressure, backwash requirement, nozzle arrangement and coating or lining specification.",
        ],
      },
      {
        title: "Softener Tank Manufacturer",
        body: [
          "Softener tanks are used in water softening systems to reduce hardness by using resin media. These tanks are commonly used in industrial utility systems, boiler feed water pre-treatment, process water treatment and plant water conditioning applications.",
          "As a softener tank manufacturer and supplier, we manufacture tanks with suitable internals, media loading provision, service and backwash nozzles, manhole, drain, vent and coating systems as per the water treatment P&ID and project requirement.",
        ],
      },
      {
        title: "Key Features of Our Filter Vessels",
        bullets: [
          "Custom-built filter vessels as per flow rate and media type", "Suitable for activated carbon, softener, sand and multimedia filtration",
          "Mild steel, carbon steel and stainless steel construction options", "Internal distributor and collector arrangement as required",
          "Service and backwash nozzle provision", "Top and bottom nozzle arrangement as per P&ID",
          "Manhole for media loading, unloading and inspection", "Vent, drain, sampling and pressure tapping provision",
          "Internal coating or lining for corrosion protection", "Multi-vessel skid arrangement for parallel operation if required",
          "Pressure testing and leak validation as per requirement", "Durable fabrication for long industrial service life",
        ],
      },
      {
        title: "Applications of Filter Vessels",
        body: ["As a filter vessel manufacturer and supplier, we provide vessels for different industrial and water treatment applications, including:"],
        bullets: [
          "Water treatment plants", "Activated carbon filtration systems", "Softener systems", "Multimedia filtration systems",
          "Sand filtration systems", "Process water treatment", "Utility water treatment", "Boiler feed water pre-treatment",
          "Cooling water filtration", "Industrial water filtration skids", "Chemical process plants", "Pharmaceutical industries",
          "Food and beverage processing units", "Manufacturing units", "Engineering industries", "Industrial utility systems",
        ],
      },
      {
        title: "Types of Filter Vessels We Manufacture",
        body: [
          "National Engineers & Steel Fabricators manufactures filter vessels based on filtration duty, media type, pressure condition, flow rate and installation layout.",
          "Common types include:",
        ],
        bullets: [
          "Activated carbon filter vessels", "Softener tanks", "Media filter vessels", "Sand filter vessels",
          "Multimedia filter vessels", "Pressure filter vessels", "Water treatment filter vessels", "Industrial filter vessels",
          "Vertical filter vessels", "Horizontal filter vessels", "Multi-vessel skid-mounted filter systems",
          "Custom filter vessels as per drawing",
        ],
      },
      {
        title: "Materials of Construction",
        body: [
          "We manufacture filter vessels using suitable material based on water quality, process liquid, corrosion condition, operating pressure, temperature, site environment and project specification.",
          "Common MOC options include:",
        ],
        bullets: [
          "Mild Steel", "Carbon Steel", "Stainless Steel", "Alloy Steel as per requirement",
          "Rubber-lined construction if required", "FRP-lined construction if required", "Epoxy-coated vessels",
          "Internally coated or lined vessels", "Externally painted vessels with suitable surface protection",
        ],
      },
      {
        title: "Technical Specifications of Filter Vessel",
        body: [
          "National Engineers & Steel Fabricators manufactures filter vessels as per client drawings, P&ID, flow rate, filtration media and industrial application requirements. Specifications can be customized based on media type, pressure condition, backwash requirement, MOC and site layout.",
        ],
        table: {
          columns: ["Specification", "Details"],
          rows: [
            ["Product Type", "Filter Vessel / Softener Tank / Media Filter Vessel"],
            ["Application", "Water treatment, activated carbon filtration, softening and media filtration"],
            ["Vessel Orientation", "Vertical or horizontal as per site requirement"],
            ["Material of Construction", "Mild Steel, Carbon Steel, Stainless Steel or as per requirement"],
            ["Filtration Media", "Activated carbon, resin, sand, multimedia or as per process requirement"],
            ["Flow Rate", "As per client requirement"], ["Operating Pressure", "As per process requirement"],
            ["Operating Temperature", "As per project specification"], ["Nozzle Connection", "As per P&ID or client drawing"],
            ["Internals", "Distributor, collector, strainers or laterals as required"],
            ["Connections", "Service, backwash, inlet, outlet, drain, vent and sampling points"],
            ["Manhole", "Provided for media loading, unloading and inspection"],
            ["Support Type", "Leg support, saddle support, skirt support or skid-mounted arrangement"],
            ["Surface Finish", "Painted, coated, lined or polished as per application"],
            ["Internal Coating", "Epoxy, rubber lining, FRP lining or as required"],
            ["Testing", "Pressure testing / leak testing as per requirement"],
            ["Documentation", "As agreed for inspection, audit and maintenance"],
            ["Customization", "Available as per drawing, media type, MOC, internals and site layout"],
          ],
        },
      },
      {
        title: "Custom Filter Vessel Manufacturing",
        body: [
          "Every filtration system has different flow, media, pressure, backwash and installation requirements. That is why our filter vessels are manufactured as per client-specific drawings, P&ID and duty conditions instead of a fixed standard design.",
          "Customization options include:",
        ],
        bullets: [
          "Vessel size as per flow rate and media volume", "Vertical or horizontal vessel design",
          "Shell and dish-end thickness selection", "Activated carbon, resin, sand or multimedia duty",
          "Distributor and collector internals", "Service and backwash nozzle arrangement",
          "Inlet, outlet, drain, vent and sampling points", "Manhole for media loading and unloading",
          "Pressure gauge and tapping provision", "Skid-mounted multi-vessel arrangement",
          "Internal coating or lining system", "External painting and surface protection",
          "Testing and documentation as per project scope",
        ],
      },
      {
        title: "Fabrication and Quality Control",
        body: [
          "At National Engineers & Steel Fabricators, every filter vessel is fabricated with proper attention to material selection, fit-up, welding quality, dimensional accuracy, nozzle alignment, internals fitment and surface protection requirements. Our fabrication process focuses on strength, filtration reliability, easy maintenance and long-term industrial performance.",
          "Quality checks may include:",
        ],
        bullets: [
          "Material verification", "Fit-up inspection", "Welding quality checks", "Dimensional inspection",
          "Nozzle orientation checking", "Internals fitment checking", "Surface preparation checks",
          "Coating or lining checks if applicable", "Pressure testing as required", "Leak validation as required",
          "Final painting and finishing inspection", "Documentation support as agreed",
        ],
      },
      {
        title: "Why Choose National Engineers for Filter Vessels?",
        body: [
          "National Engineers & Steel Fabricators is a trusted filter vessel manufacturer in India and pressure vessel manufacturer in Surat, Gujarat, offering custom fabrication solutions for filter vessels, softener tanks, water treatment vessels, pressure vessels, storage tanks and process equipment.",
          "Reasons to work with us:",
        ],
        bullets: [
          "Experienced filter vessel manufacturer in India", "Reliable filter vessel supplier in Surat, Gujarat",
          "Custom fabrication as per drawing, P&ID and duty condition", "Manufacturing support for water treatment and process skids",
          "Activated carbon filter vessel and softener tank fabrication", "MS, CS and SS pressure vessel fabrication capability",
          "Proper nozzle, internals, support and coating planning", "Fabrication for chemical, pharma, food, utility and process industries",
          "Testing and documentation support as agreed", "Industrial-grade fabrication for long service life",
        ],
      },
      {
        title: "Details Required for Quotation",
        body: ["To provide the right quotation for a filter vessel, please share the following details:"],
        bullets: [
          "Flow rate", "Filtration media type", "Operating pressure", "Operating temperature", "Vessel count",
          "Backwash requirement", "P&ID or technical drawing", "Material of construction", "Coating or lining requirement",
          "Internals requirement", "Nozzle and accessories list", "Site space constraints", "Testing and documentation requirement",
        ],
      },
      {
        title: "Get a Quote for Filter Vessel",
        body: [
          "Looking for a filter vessel manufacturer and supplier in India for your water treatment plant, softener system or process filtration skid?",
          "Share your flow rate, media type, operating pressure, backwash requirement, P&ID, MOC, coating requirement and accessories list with National Engineers & Steel Fabricators. Our team will review your requirement and provide a suitable filter vessel fabrication solution for your application.",
        ],
      },
    ],
    note:
      "Share your flow rate, media type, operating pressure, backwash requirement, P&ID, MOC, coating requirement and accessories list.",
    enquiry: {
      title: "Request a quote for Filter Vessels",
      subtitle:
        "Share your flow rate, media type, operating pressure, backwash requirement, P&ID, MOC, coating requirement and accessories list.",
      productName: "Filter Vessel / Softener Tank",
      buttonText: "Request Quote",
    },
    faqs: [
      { question: "What is a filter vessel?", answer: "A filter vessel is an industrial vessel used to hold filtration media such as activated carbon, resin, sand or multimedia for water treatment, softening and process filtration applications." },
      { question: "Who is a filter vessel manufacturer in Surat?", answer: "National Engineers & Steel Fabricators is a filter vessel manufacturer in Surat, Gujarat, offering custom activated carbon filter vessels, softener tanks and media filter vessels as per client drawings and P&ID." },
      { question: "Do you supply filter vessels in India?", answer: "Yes, National Engineers & Steel Fabricators is a filter vessel manufacturer and supplier in India. We manufacture custom filter vessels for water treatment plants, process skids and industrial utility systems." },
      { question: "What are activated carbon filter vessels used for?", answer: "Activated carbon filter vessels are used for odor removal, color reduction, organic reduction and water polishing applications in water treatment and process systems." },
      { question: "What is a softener tank used for?", answer: "A softener tank is used in water softening systems to reduce hardness with resin media. It is commonly used in boiler feed water pre-treatment, utility systems and process water treatment." },
      { question: "Which materials are used for filter vessels?", answer: "Filter vessels can be manufactured in mild steel, carbon steel, stainless steel or lined construction depending on water quality, process liquid, pressure, corrosion condition and project specification." },
      { question: "Can filter vessels be customized?", answer: "Yes, filter vessels can be customized as per flow rate, media type, pressure, MOC, nozzle arrangement, internals, manhole, coating, lining, backwash requirement and testing needs." },
      { question: "What internals are used in filter vessels?", answer: "Filter vessel internals may include distributor, collector, strainers, laterals, support plates and other arrangements as per filtration media, flow direction and process requirement." },
      { question: "What details are required to get a quotation for a filter vessel?", answer: "To get a quotation, you can share flow rate, media type, operating pressure, temperature, vessel count, backwash requirement, P&ID, MOC, coating requirement and accessories list." },
      { question: "How is filter vessel price calculated?", answer: "Filter vessel price depends on size, MOC, pressure rating, media type, internals, nozzle arrangement, coating, lining, vessel count, testing, documentation and customization requirements." },
    ],
    seo: {
      title: "Filter Vessel Manufacturer & Supplier in India | NESF",
      description:
        "Filter vessel manufacturer and supplier in Surat, India, offering activated carbon, softener and media filter vessels for water treatment.",
      keywords: [
        "filter vessel manufacturer",
        "filter vessel supplier", "filter vessel manufacturer in India", "filter vessel manufacturer in Surat",
        "activated carbon filter vessel manufacturer", "softener tank manufacturer", "media filter vessel manufacturer",
        "water treatment vessel manufacturer", "industrial filter vessel", "pressure filter vessel manufacturer",
        "custom filter vessel", "pressure vessel manufacturer in India", "pressure vessel manufacturer in Surat",
      ],
    },
  },
  "custom-pressure-vessel-manufacturer": {
    title: "Custom Pressure Vessel Manufacturer and Supplier in India",
    headline: "Custom Pressure Vessel Manufacturer in Surat",
    description:
      "National Engineers & Steel Fabricators is a trusted custom pressure vessel manufacturer and supplier in India, offering custom fabricated pressure vessels for chemical plants, process industries, oil and gas projects, utility systems, pharma, food processing, engineering and manufacturing applications.",
    pagePath: "/products/custom-pressure-vessel-manufacturer",
    image: "/product/23.jpeg",
    imageAlt: "Custom pressure vessel fabricated by National Engineers",
    imagePosition: "center",
    quickFacts: [
      { label: "Product Type", value: "Custom Pressure Vessel" },
      { label: "Materials", value: "MS, CS, SS or alloy steel" },
      { label: "Orientation", value: "Vertical or horizontal" },
      { label: "Build Basis", value: "Drawing, datasheet and P&ID" },
    ],
    overview: [
      "Based in Sachin GIDC, Surat, Gujarat, we manufacture pressure vessels as per client drawings, datasheets, P&ID, BOM, design pressure, operating temperature, service media, material of construction, corrosion allowance, nozzle orientation and inspection requirements.",
      "Our pressure vessel fabrication solutions are suitable for industries that require safe, durable and application-specific vessels instead of standard off-the-shelf equipment.",
    ],
    sections: [
      {
        title: "Custom Pressure Vessel Manufacturer in Surat",
        body: [
          "National Engineers & Steel Fabricators is an experienced custom pressure vessel manufacturer in Surat, offering industrial pressure vessels for process, storage, gas handling, air receiver, nitrogen buffer, filtration, utility and special-purpose applications.",
          "As a pressure vessel manufacturer in India, we support clients with project-specific fabrication based on technical drawings, site conditions, inspection requirements and operational needs. Each vessel is manufactured with proper attention to material selection, welding quality, dimensional accuracy, nozzle alignment, pressure safety and long service life.",
        ],
      },
      {
        title: "Industrial Pressure Vessel Fabrication",
        body: [
          "As an industrial pressure vessel manufacturer, we fabricate pressure vessels used for storing, processing, buffering, separating or handling gases and liquids under pressure.",
          "Our pressure vessel fabrication services can include shell fabrication, dish-end fit-up, nozzle fabrication, support fabrication, internals, surface preparation, painting, coating, lining support, testing and documentation as per project scope.",
          "We manufacture custom fabricated pressure vessels for different industrial duties, including gas storage, liquid storage, process vessels, air receiver systems, nitrogen buffer systems, filter vessels, utility vessels and special-purpose pressure vessels.",
        ],
      },
      {
        title: "MS, CS and SS Pressure Vessel Manufacturer",
        body: [
          "National Engineers & Steel Fabricators manufactures pressure vessels in different materials depending on service media, pressure rating, temperature, corrosion condition and project specification.",
          "We provide fabrication support for:",
        ],
        bullets: [
          "MS pressure vessels", "CS pressure vessels", "SS pressure vessels", "Alloy steel pressure vessels as per requirement",
          "Rubber-lined pressure vessels if required", "FRP-lined pressure vessels if required",
          "Internally coated pressure vessels", "Externally painted or coated pressure vessels",
        ],
      },
      {
        title: "ASME-Ready Pressure Vessel Fabrication Support",
        body: [
          "For projects that require code-based manufacturing, National Engineers & Steel Fabricators can support ASME-ready pressure vessel fabrication as per approved drawings, technical specifications and inspection requirements.",
          "Clients looking for an ASME pressure vessel manufacturer support partner can share their code requirement, datasheet, inspection plan, NDT requirement, PWHT requirement and documentation format. Final design approval, code compliance and certification requirements should be confirmed as per the applicable design code, client specification and authorized engineering review.",
        ],
      },
      {
        title: "Types of Pressure Vessels We Manufacture",
        body: ["We manufacture different types of custom pressure vessels as per client drawings and industrial requirements, including:"],
        bullets: [
          "Custom pressure vessels", "Industrial pressure vessels", "Process pressure vessels", "Air receiver vessels",
          "Nitrogen buffer tanks", "Gas storage vessels", "Filter vessels", "Utility pressure vessels", "Blowdown flash tanks",
          "Separator vessels", "Buffer vessels", "Vertical pressure vessels", "Horizontal pressure vessels",
          "Skid-mounted pressure vessels", "Special-purpose pressure vessels",
        ],
      },
      {
        title: "Key Features",
        bullets: [
          "Custom-built pressure vessels as per drawing and datasheet", "Suitable for gas, liquid, process and utility applications",
          "MS, CS, SS and alloy steel fabrication options", "Vertical and horizontal vessel configuration",
          "Nozzle orientation as per P&ID or client drawing", "Manhole, vent, drain and instrument nozzle provisions",
          "Internal baffles, distributors, demisters or internals if required", "PSV, pressure gauge and temperature point provision",
          "NDT, PWHT and inspection hold points as per project scope", "Hydro testing or pneumatic testing as applicable",
          "Painting, coating, lining or insulation support as required", "Documentation support as agreed",
        ],
      },
      {
        title: "Applications",
        body: ["Our custom pressure vessels are used across different industries and applications, including:"],
        bullets: [
          "Chemical process plants", "Oil and gas projects", "Process industries", "Utility systems", "Gas storage systems",
          "Liquid handling systems", "Air receiver systems", "Nitrogen buffer systems", "Steam and condensate systems",
          "Water treatment and filtration systems", "Process skids and package units", "Pharmaceutical industries",
          "Food and beverage processing units", "Manufacturing plants", "Engineering industries",
        ],
      },
      {
        title: "Technical Specifications",
        table: {
          columns: ["Specification", "Details"],
          rows: [
            ["Product Type", "Custom Pressure Vessel"], ["Application", "Process, utility, gas, liquid, storage, separation and industrial service"],
            ["Vessel Orientation", "Vertical or horizontal as per site requirement"],
            ["Material of Construction", "Mild Steel, Carbon Steel, Stainless Steel, Alloy Steel or as per requirement"],
            ["Service Media", "Gas, air, nitrogen, water, steam, condensate, process liquid or as per application"],
            ["Capacity / Volume", "As per client requirement"], ["Design Pressure", "As per process and safety requirement"],
            ["Operating Pressure", "As per duty condition"], ["Design Temperature", "As per project specification"],
            ["Operating Temperature", "As per process requirement"], ["Corrosion Allowance", "As per service condition and client specification"],
            ["Nozzle Connection", "As per P&ID or client drawing"], ["Internals", "Baffles, distributors, demisters, strainers or as required"],
            ["Safety Accessories", "PSV, pressure gauge, temperature point and other fittings as required"],
            ["Support Type", "Leg support, saddle support, skirt support, base ring or skid-mounted arrangement"],
            ["Testing", "Hydro testing / pneumatic testing as applicable"],
            ["Inspection", "NDT, PWHT, hold points or third-party inspection as per requirement"],
            ["Surface Finish", "Painted, coated, lined or polished as per application"],
            ["Documentation", "MDR, inspection records and documentation as agreed"],
          ],
        },
      },
      {
        title: "Fabrication and Quality Control",
        body: [
          "Every pressure vessel is fabricated with proper attention to material verification, fit-up, welding quality, dimensional accuracy, nozzle alignment, internal arrangement and inspection requirements.",
          "Quality checks may include:",
        ],
        bullets: [
          "Material verification", "Drawing and datasheet review", "Fit-up inspection", "Welding quality checks",
          "Dimensional inspection", "Nozzle orientation checking", "NDT as per requirement", "PWHT as per requirement",
          "Hydro testing as applicable", "Pneumatic testing as applicable", "Final painting and finishing inspection",
          "Documentation compilation as agreed",
        ],
      },
      {
        title: "Why Choose National Engineers?",
        body: [
          "National Engineers & Steel Fabricators is a reliable pressure vessel supplier in India and custom pressure vessel manufacturer in Surat, Gujarat. We provide custom fabrication support for industries that need durable, safe and application-specific pressure vessels.",
          "Reasons to work with us:",
        ],
        bullets: [
          "Experienced custom pressure vessel manufacturer in India", "Reliable pressure vessel manufacturer in Surat, Gujarat",
          "MS, CS and SS pressure vessel manufacturing capability", "Custom fabricated pressure vessels as per drawing and datasheet",
          "Pressure vessel fabrication as per P&ID and duty condition", "Support for NDT, PWHT, hydro testing and pneumatic testing",
          "Third-party inspection and documentation support as agreed",
          "Fabrication for chemical, pharma, food, oil and gas, utility and process industries",
        ],
      },
      {
        title: "Details Required for Quotation",
        body: ["To provide the right quotation for a custom pressure vessel, please share:"],
        bullets: [
          "Drawing or datasheet", "P&ID or process requirement", "Required capacity / volume",
          "Design pressure and operating pressure", "Design temperature and operating temperature", "Service media",
          "Material of construction", "Corrosion allowance", "Nozzle details", "Internals requirement",
          "NDT and PWHT requirement", "Hydro or pneumatic testing requirement", "Third-party inspection requirement, if any",
          "Documentation requirement", "Delivery location and timeline",
        ],
      },
      {
        title: "Get a Quote for Custom Pressure Vessel",
        body: [
          "Looking for a custom pressure vessel manufacturer and supplier in India?",
          "Share your drawings, datasheets, design conditions, MOC, NDT/PWHT requirements, inspection scope and documentation needs with National Engineers & Steel Fabricators. Our team will review your requirement and provide a suitable pressure vessel fabrication solution for your industrial application.",
        ],
      },
    ],
    note:
      "Share your drawings, datasheets, design conditions, MOC, NDT/PWHT requirements, inspection scope and documentation needs.",
    enquiry: {
      title: "Request a quote for a Custom Pressure Vessel",
      subtitle:
        "Share drawings, datasheets, design conditions, MOC, NDT/PWHT requirements, inspection scope and documentation needs.",
      productName: "Custom Pressure Vessel",
      buttonText: "Request Quote",
    },
    faqs: [
      { question: "What is a custom pressure vessel?", answer: "A custom pressure vessel is an industrial vessel manufactured as per client drawings, datasheets and duty conditions to store, process, buffer or handle fluids and gases under pressure." },
      { question: "Who is a custom pressure vessel manufacturer in Surat?", answer: "National Engineers & Steel Fabricators is a custom pressure vessel manufacturer in Surat, Gujarat, offering pressure vessels as per client drawings, MOC, design pressure, NDT, PWHT and inspection requirements." },
      { question: "Do you supply custom pressure vessels in India?", answer: "Yes, National Engineers & Steel Fabricators is a custom pressure vessel manufacturer and supplier in India. We manufacture industrial pressure vessels for chemical, process, utility, oil and gas, pharma and manufacturing applications." },
      { question: "Are you a pressure vessel manufacturer in India?", answer: "Yes, National Engineers & Steel Fabricators manufactures custom pressure vessels, industrial pressure vessels, MS pressure vessels, CS pressure vessels and SS pressure vessels for clients across India." },
      { question: "Which materials are used for custom pressure vessels?", answer: "Custom pressure vessels can be manufactured in mild steel, carbon steel, stainless steel, alloy steel or lined construction depending on service media, pressure, temperature, corrosion condition and project specification." },
      { question: "Do you manufacture MS, CS and SS pressure vessels?", answer: "Yes, we manufacture MS pressure vessels, CS pressure vessels and SS pressure vessels as per client drawings, datasheets, MOC requirements, pressure conditions and industrial applications." },
      { question: "Can pressure vessels be manufactured as per client drawing?", answer: "Yes, pressure vessels can be manufactured as per client drawings, datasheets, P&ID, BOM, MOC, nozzle orientation, inspection scope and documentation requirements." },
      { question: "What testing is done for pressure vessels?", answer: "Testing may include hydro testing, pneumatic testing, leak testing, dimensional inspection, nozzle orientation checking, NDT and other inspection checks as per project requirement." },
      { question: "Do you support ASME-ready pressure vessel fabrication?", answer: "Yes, ASME-ready pressure vessel fabrication support can be provided as per approved drawings, applicable project specifications, inspection requirements and documentation scope." },
      { question: "How is custom pressure vessel price calculated?", answer: "Custom pressure vessel price depends on capacity, material of construction, pressure rating, thickness, nozzle quantity, internals, NDT, PWHT, testing, coating, documentation and inspection requirements." },
    ],
    seo: {
      title: "Custom Pressure Vessel Manufacturer & Supplier in India | NESF",
      description:
        "Custom pressure vessel manufacturer and supplier in Surat, India for MS, CS, SS and ASME-ready pressure vessel fabrication.",
      keywords: [
        "custom pressure vessel manufacturer",
        "custom pressure vessel supplier", "custom pressure vessel manufacturer in India",
        "custom pressure vessel manufacturer in Surat", "pressure vessel manufacturer in India",
        "pressure vessel manufacturer in Surat", "industrial pressure vessel manufacturer",
        "MS pressure vessel manufacturer", "CS pressure vessel manufacturer", "SS pressure vessel manufacturer",
        "ASME pressure vessel manufacturer", "custom fabricated pressure vessels",
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
