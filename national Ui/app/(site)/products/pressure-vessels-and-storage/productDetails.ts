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
    title: "Air Receiver Vessel Manufacturer in India",
    headline: "Industrial-Grade Air Receiver Vessels for Compressed Air Systems",
    description:
      "National Engineers & Steel Fabricators manufactures industrial-grade air receiver vessels designed for compressed air systems across manufacturing plants, process industries, and infrastructure projects.",
    pagePath: "/products/air-receiver-vessels-manufacturer",
    image: "/product/7.jpg",
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
            label: "Nitrogen Buffer / Gas Storage Tanks",
            href: "/products/nitrogen-buffer-gas-storage-tanks",
            description: "Also Read",
          },
          {
            label: "Custom Pressure Vessels (As per Drawing/Spec)",
            href: "/products/custom-pressure-vessels",
            description: "Also Read",
          },
          {
            label: "Blowdown / Flash Tanks",
            href: "/products/blowdown-flash-tanks",
            description: "Also Read",
          },
          {
            label: "Horizontal Storage Tanks",
            href: "/products/horizontal-storage-tanks",
            description: "Also Read",
          },
          {
            label: "Vertical Storage Tanks",
            href: "/products/vertical-storage-tanks",
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
