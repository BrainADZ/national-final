import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import type { ProductDetail } from "../pressure-vessels-and-storage/productDetails";

export const CATEGORY_NAME = "Process Equipment & Heat Transfer";

export const processEquipmentNav = [
  {
    label: "Condensers & Water Condensers",
    href: "/products/condenser-manufacturer",
  },
  {
    label: "Heat Exchanger Shell",
    href: "/products/heat-exchanger-shell-manufacturer",
  },
  {
    label: "Process Column",
    href: "/products/process-column-manufacturer",
  },
  {
    label: "Process Skids & Packages",
    href: "/products/process-skid-manufacturer",
  },
  {
    label: "Special Purpose Process Vessels",
    href: "/products/special-purpose-process-vessel-manufacturer",
  },
  {
    label: "Chemical Process Equipment (Custom)",
    href: "/products/custom-chemical-process-equipment-manufacturer",
  },
];

export const productDetails = {
  "condenser-manufacturer": {
    title: "Condensers Manufacturer and Supplier in India",
    headline: "Condenser Manufacturer in Surat",
    description:
      "National Engineers & Steel Fabricators is a trusted condensers manufacturer and supplier in India, offering custom-built industrial condensers and water condensers for process cooling, heat transfer, vapor condensation, utility circuits and continuous-duty plant operations.",
    pagePath:
      "/products/condenser-manufacturer",
    image: "/product/25.webp",
    imageAlt:
      "Industrial water condenser fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Product Type", value: "Condenser / Water Condenser" },
      { label: "Application", value: "Process and utility cooling" },
      { label: "Materials", value: "MS, CS, SS or alloy steel" },
      { label: "Customization", value: "As per datasheet and heat duty" },
    ],
    overview: [
      "Based in Sachin GIDC, Surat, Gujarat, we manufacture condensers as per client drawings, datasheets, heat duty, service conditions, operating pressure, operating temperature, material of construction, corrosion requirement, nozzle orientation, connection sizes and inspection needs.",
      "Our condenser fabrication solutions are suitable for industries that require durable, serviceable and application-specific heat transfer equipment instead of standard off-the-shelf units.",
    ],
    sections: [
      {
        title: "Condenser Manufacturer in Surat",
        body: [
          "National Engineers & Steel Fabricators is an experienced condenser manufacturer in Surat, offering custom condenser fabrication for chemical plants, pharmaceutical units, process industries, water treatment systems, utility plants, engineering industries and manufacturing facilities.",
          "As a condenser manufacturer in India, we support clients with project-specific fabrication based on technical drawings, duty conditions, plant layout and inspection requirements. Each condenser is manufactured with attention to material selection, welding quality, dimensional accuracy, nozzle alignment, corrosion protection and long service life.",
        ],
      },
      {
        title: "Industrial Condensers for Process and Utility Applications",
        body: [
          "Industrial condensers are used to remove heat from vapor, gas or process media and convert vapor into liquid through cooling. They are widely used in process plants, utility systems, steam and condensate circuits, cooling water systems and heat transfer applications.",
          "As an industrial condenser manufacturer, National Engineers & Steel Fabricators fabricates condensers for applications where heat removal, pressure integrity, serviceability and reliable continuous-duty performance are important.",
          "Our industrial condensers can be manufactured for process cooling, vapor condensation, utility cooling, heat recovery support and plant-specific heat transfer duties.",
        ],
      },
      {
        title: "Water Condenser Manufacturer",
        body: [
          "National Engineers & Steel Fabricators is a reliable water condenser manufacturer in India, offering custom water condensers for cooling water circuits, process cooling systems and utility applications.",
          "Water condensers are commonly used where water is used as the cooling medium to remove heat from vapor or process media. Our water condenser fabrication scope can include shells, headers, nozzles, supports, inlet-outlet connections, drain, vent and inspection provisions as per client drawings and project requirements.",
          "As a water condenser manufacturer in Surat, we manufacture custom water condensers based on heat duty, cooling water flow, operating pressure, temperature, MOC, corrosion condition and plant layout.",
        ],
      },
      {
        title: "Heat Transfer Equipment Manufacturer",
        body: [
          "National Engineers & Steel Fabricators also supports industries as a heat transfer equipment manufacturer and process equipment manufacturer in India. Our fabrication capabilities include condensers, water condensers, condenser shells, heat exchanger shells, process vessels, utility equipment and custom fabricated process equipment.",
          "We manufacture heat transfer equipment as per client drawings, datasheets, P&ID and project specifications. The focus remains on strong fabrication quality, easy inspection, maintainability, suitable material selection and reliable industrial performance.",
        ],
      },
      {
        title: "Condenser Fabrication as per Drawing",
        body: [
          "Every industrial condenser has different heat duty, pressure, temperature, media, connection and layout requirements. That is why our condensers are fabricated as per client-specific drawings and duty conditions.",
          "Our condenser fabrication scope may include:",
        ],
        bullets: [
          "Condenser shell fabrication", "Header fabrication", "Nozzle fabrication", "Support structure fabrication",
          "Inlet and outlet connection arrangement", "Vent, drain and inspection provision", "Surface preparation and painting",
          "Coating or lining support if required", "Pressure testing and leak checks", "NDT support as per requirement",
          "Documentation and inspection records as agreed",
        ],
      },
      {
        title: "Types of Condensers We Manufacture",
        body: ["National Engineers & Steel Fabricators manufactures custom condensers and water condensers for different industrial requirements.", "Common types include:"],
        bullets: [
          "Industrial condensers", "Water condensers", "Custom condensers", "Custom water condensers", "Process condensers",
          "Utility condensers", "Shell and tube condenser components", "Condenser shells", "Condenser headers",
          "Condenser nozzles", "Heat exchanger shells", "Skid-ready condenser assemblies", "Condensers as per client drawing",
        ],
      },
      {
        title: "Key Features",
        bullets: [
          "Custom-built condensers as per drawing and datasheet", "Suitable for process cooling and heat transfer applications",
          "Water condenser fabrication for utility and process circuits", "MS, CS, SS and alloy steel fabrication options",
          "Custom shell, header, nozzle and support fabrication", "Inlet and outlet arrangement as per plant layout",
          "Vent, drain, inspection and instrument nozzle provisions", "Corrosion allowance and coating options as per service condition",
          "Fabrication optimized for inspection and maintenance access", "Pressure testing and leak checks as per requirement",
          "NDT support such as UT or RT as specified", "ASME BPVC-aligned fabrication practices where applicable",
          "Documentation support as agreed for inspection and project records",
        ],
      },
      {
        title: "Applications",
        body: ["Our condensers and water condensers are used across different industries and applications, including:"],
        bullets: [
          "Chemical process plants", "Pharmaceutical industries", "Food and beverage processing units", "Water treatment plants",
          "Utility cooling systems", "Process cooling systems", "Steam and condensate systems", "Vapor condensation applications",
          "Heat recovery systems", "Manufacturing plants", "Engineering industries", "Process skids and package units",
          "Industrial heat transfer systems", "Continuous-duty plant operations",
        ],
      },
      {
        title: "Materials of Construction",
        body: [
          "National Engineers & Steel Fabricators manufactures condensers using suitable materials based on service media, temperature, pressure, corrosion condition, cooling medium and project specification.",
          "Common MOC options include:",
        ],
        bullets: [
          "Mild Steel", "Carbon Steel", "Stainless Steel", "Alloy Steel as per requirement",
          "Internally coated construction if required", "Externally painted or coated construction", "Special MOC as per client specification",
        ],
      },
      {
        title: "Technical Specifications",
        table: {
          columns: ["Specification", "Details"],
          rows: [
            ["Product Type", "Condenser / Water Condenser"], ["Application", "Process cooling, vapor condensation, heat transfer and utility cooling"],
            ["Equipment Category", "Heat Transfer Equipment / Process Equipment"],
            ["Material of Construction", "Mild Steel, Carbon Steel, Stainless Steel, Alloy Steel or as per requirement"],
            ["Cooling Medium", "Water or as per process requirement"], ["Service Media", "Vapor, gas, process fluid or as per application"],
            ["Heat Duty", "As per client datasheet and process requirement"], ["Operating Pressure", "As per duty condition"],
            ["Operating Temperature", "As per project specification"], ["Nozzle Connection", "As per P&ID or client drawing"],
            ["Fabrication Scope", "Shells, headers, nozzles, supports and accessories as required"],
            ["Orientation", "Horizontal or vertical as per design and layout"],
            ["Support Type", "Saddle support, leg support, bracket support or skid-mounted arrangement"],
            ["Surface Finish", "Painted, coated, lined or finished as per service requirement"],
            ["Testing", "Pressure testing, leak checks and strength testing as applicable"],
            ["Inspection", "NDT such as UT or RT as per project requirement"],
            ["Documentation", "Drawings, test reports, traceability and inspection records as agreed"],
            ["Customization", "Available as per drawing, datasheet, MOC, heat duty and site layout"],
          ],
        },
      },
      {
        title: "Fabrication and Quality Control",
        body: ["Every condenser is fabricated with proper attention to material verification, fit-up, welding quality, dimensional accuracy, nozzle orientation, support alignment, testing and documentation requirements.", "Quality checks may include:"],
        bullets: [
          "Material verification", "Drawing and datasheet review", "Fit-up inspection", "Welding quality checks",
          "Dimensional inspection", "Nozzle orientation checking", "Support alignment checking", "Pressure testing as applicable",
          "Leak checks as required", "NDT such as UT or RT as specified", "Final painting and finishing inspection",
          "Documentation compilation as agreed",
        ],
      },
      {
        title: "Why Choose National Engineers?",
        body: ["National Engineers & Steel Fabricators is a trusted condenser manufacturer, water condenser manufacturer and process equipment manufacturer in Surat, Gujarat. We provide custom condenser fabrication support for industries that need reliable heat transfer equipment as per drawing, datasheet and duty condition.", "Reasons to work with us:"],
        bullets: [
          "Experienced condensers manufacturer in India", "Reliable condenser supplier in Surat, Gujarat",
          "Custom condenser fabrication as per drawing and datasheet", "Water condenser manufacturer for process and utility applications",
          "SS, CS and alloy steel fabrication capability", "Support for condenser shells, headers, nozzles and supports",
          "Heat transfer equipment fabrication for industrial plants", "Testing, inspection and documentation support as agreed",
          "Fabrication for chemical, pharma, food, water treatment and utility industries", "Industrial-grade construction for long service life",
        ],
      },
      {
        title: "Details Required for Quotation",
        body: ["To provide the right quotation for a condenser or water condenser, please share:"],
        bullets: [
          "Drawing or datasheet", "Heat duty", "Service media", "Cooling medium", "Operating pressure", "Operating temperature",
          "Flow rate details", "Material of construction", "Corrosion allowance", "Nozzle and connection sizes",
          "Orientation and layout requirement", "Testing requirement", "NDT requirement, if any", "Documentation requirement",
          "Delivery location and timeline",
        ],
      },
      {
        title: "Get a Quote for Condensers and Water Condensers",
        body: [
          "Looking for a condensers manufacturer and supplier in India for your process plant, utility system or heat transfer application?",
          "Share your drawings, datasheet, heat duty, service conditions, MOC, connection sizes, testing requirements and inspection scope with National Engineers & Steel Fabricators. Our team will review your requirements and provide a suitable condenser fabrication solution for your industrial application.",
        ],
      },
    ],
    note:
      "Share your drawings, datasheet, heat duty, service conditions, MOC, connection sizes, testing requirements and inspection scope.",
    enquiry: {
      title: "Request a quote for Condensers & Water Condensers",
      subtitle:
        "Share drawings, datasheet, heat duty, service conditions, MOC, connection sizes, testing and inspection requirements.",
      productName: "Condensers & Water Condensers",
      buttonText: "Request Quote",
    },
    faqs: [
      { question: "What is an Industrial Condenser?", answer: "An industrial condenser is heat transfer equipment used to remove heat from vapor, gas or process media and convert vapor into liquid using a cooling medium such as water." },
      { question: "Who is a condenser manufacturer in Surat?", answer: "National Engineers & Steel Fabricators is a condenser manufacturer in Surat, Gujarat, offering custom industrial condensers and water condensers as per client drawings, datasheets and duty conditions." },
      { question: "Do you supply condensers in India?", answer: "Yes, National Engineers & Steel Fabricators is a condensers manufacturer and supplier in India, offering custom condenser fabrication for chemical, pharma, water treatment, utility and process industries." },
      { question: "What is a water condenser?", answer: "A water condenser is a condenser where water is used as the cooling medium to remove heat from vapor or process media. It is commonly used in process cooling and utility circuits." },
      { question: "Can condensers be manufactured as per drawing?", answer: "Yes, condensers can be manufactured as per client drawings, datasheets, heat duty, service media, MOC, nozzle details, pressure, temperature and testing requirements." },
      { question: "Which materials are used for condensers?", answer: "Condensers can be manufactured in mild steel, carbon steel, stainless steel, alloy steel or coated construction depending on service media, cooling medium, temperature, pressure and corrosion condition." },
      { question: "What details are required to get a condenser quotation?", answer: "To get a quotation, you can share drawing, datasheet, heat duty, service media, cooling medium, pressure, temperature, MOC, nozzle sizes, testing requirement and documentation needs." },
      { question: "Do you manufacture condenser shells and headers?", answer: "Yes, National Engineers & Steel Fabricators can manufacture condenser shells, headers, nozzles, supports and related fabricated components as per project drawings and specifications." },
      { question: "What testing is done for condensers?", answer: "Testing may include pressure testing, strength testing, leak checks, dimensional inspection, nozzle checking and NDT such as UT or RT as per project requirement." },
      { question: "How is the condenser price calculated?", answer: "Condenser price depends on size, MOC, heat duty, pressure rating, shell and header design, nozzle quantity, thickness, testing, NDT, coating, documentation and customization requirements." },
    ],
    seo: {
      title: "Condensers Manufacturer & Supplier in India | NESF",
      description:
        "Condensers manufacturer and supplier in Surat, India, offering custom water condensers, heat transfer equipment and condenser fabrication.",
      keywords: [
        "condensers manufacturer", "condenser manufacturer", "condenser supplier", "condensers manufacturer in India",
        "condenser manufacturer in Surat", "water condenser manufacturer", "water condenser manufacturer in India",
        "industrial condenser manufacturer", "industrial condensers", "custom condenser", "custom water condenser",
        "heat transfer equipment manufacturer", "process equipment manufacturer in India", "process equipment manufacturer in Surat",
        "condenser fabrication", "water condenser fabrication", "SS condenser manufacturer", "CS condenser manufacturer",
        "shell and tube condenser", "condenser shells", "condenser headers", "condenser nozzles",
        "heat exchanger fabrication", "industrial heat transfer equipment",
      ],
    },
  },
  "heat-exchanger-shell-manufacturer": {
    title: "Heat Exchanger Shell Manufacturer and Supplier in India",
    headline: "Heat Exchanger Shell Manufacturer in Surat",
    description: "National Engineers & Steel Fabricators is a trusted heat exchanger shell manufacturer and supplier in India, offering custom heat exchanger shell fabrication for shell and tube heat exchangers, condenser shells, heat transfer equipment and industrial process equipment.",
    pagePath: "/products/heat-exchanger-shell-manufacturer",
    image: "/product/23.webp",
    imageAlt: "Heat exchanger shell manufactured by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Product Type", value: "Heat Exchanger Shell" },
      { label: "Equipment Category", value: "Heat Transfer / Process Equipment" },
      { label: "Orientation", value: "Horizontal or vertical" },
      { label: "Fabrication", value: "Custom-built as per drawing and datasheet" },
    ],
    overview: [
      "Based in Sachin GIDC, Surat, Gujarat, we manufacture heat exchanger shells as per client drawings, datasheets, shell dimensions, material of construction, nozzle orientation, support arrangement, pressure condition, temperature requirement, inspection plan and documentation needs.",
      "Our heat exchanger shell fabrication solutions are suitable for industries that require accurate fit-up, controlled welding, dimensional accuracy, pressure integrity and project-ready fabricated shells instead of standard off-the-shelf components.",
      "National Engineers & Steel Fabricators is an experienced heat exchanger shell manufacturer in Surat, offering custom shell fabrication for chemical plants, pharmaceutical units, process industries, utility systems, water treatment plants, engineering companies and manufacturing facilities.",
      "As a heat exchanger shell manufacturer in India, we fabricate industrial heat exchanger shells, condenser shells, shell sections, channels, covers, heads, nozzles, saddles and supports as per approved drawings and project specifications. Each shell is manufactured with proper attention to shell roundness, fit-up accuracy, welding quality, nozzle alignment, support positioning, inspection readiness and long service life.",
    ],
    sections: [
      { title: "Custom Heat Exchanger Shell Fabrication", body: ["Every heat exchanger shell has different size, pressure, temperature, media, nozzle layout and inspection requirements. That is why National Engineers & Steel Fabricators provides custom heat exchanger shell fabrication as per client-specific drawings, datasheets and duty conditions.", "Our heat exchanger fabrication scope can include:"], bullets: ["Shell rolling and fabrication", "Shell section fit-up and welding", "Channel and cover fabrication", "Head and dish-end fit-up", "Nozzle fabrication and orientation", "Saddle and support fabrication", "Lifting lug arrangement", "Vent, drain and instrument nozzle provision", "Dimensional inspection", "Nozzle orientation verification", "Surface preparation and painting", "Pressure testing and leak testing as applicable", "NDT support as per project requirement", "Documentation and inspection records as agreed"] },
      { title: "Shell and Tube Heat Exchanger Shell Manufacturer", body: ["National Engineers & Steel Fabricators manufactures shell and tube heat exchanger shells for industrial heat transfer applications. These shells are fabricated to house tube bundles and support the mechanical structure of shell and tube heat exchangers.", "As a shell and tube heat exchanger shell manufacturer, we focus on accurate shell fabrication, nozzle placement, support alignment, flange fit-up and dimensional control so that the fabricated shell can integrate properly with tubes, channels, covers, piping and connected equipment.", "Our shell and tube heat exchanger shell fabrication support can be aligned with client specifications, inspection plans and TEMA-aligned fabrication expectations where applicable."] },
      { title: "Condenser Shell Fabrication", body: ["National Engineers & Steel Fabricators also provides condenser shell fabrication for water condensers, process condensers and industrial heat transfer systems. Condenser shells require controlled fabrication because they must support heat transfer duty, pressure conditions, inlet-outlet connections and inspection requirements.", "As a condenser shell manufacturer and heat transfer equipment manufacturer, we fabricate condenser shells, headers, nozzles, saddles and related components as per client drawings and project requirements."] },
      { title: "Heat Exchanger Components We Manufacture", body: ["National Engineers & Steel Fabricators manufactures heat exchanger shells and related fabricated components for process and heat transfer equipment.", "Common fabrication scope includes:"], bullets: ["Heat exchanger shells", "Shell and tube heat exchanger shells", "Industrial heat exchanger shells", "Custom heat exchanger shells", "Condenser shells", "Heat exchanger channels", "Heat exchanger covers", "Heat exchanger heads", "Nozzles and manways", "Saddles and supports", "Lifting lugs", "Shell sections as per drawing", "Skid-ready heat exchanger shell components"] },
      { title: "Key Features", bullets: ["Custom-built heat exchanger shells as per drawing and datasheet", "Suitable for shell and tube heat exchangers and condenser applications", "MS, CS, SS and alloy steel fabrication options", "Controlled shell rolling, fit-up and welding", "Accurate nozzle orientation as per P&ID or client drawing", "Shell roundness and dimensional checking", "Channel, cover, head and support fabrication support", "Saddle, lifting lug and bracket provision as required", "Vent, drain and instrument nozzle provision", "TEMA-aligned fabrication support where applicable", "ASME-ready fabrication support where specified", "NDT support such as UT or RT as per project requirement", "Pressure testing and leak testing as applicable", "Surface preparation, painting or coating support", "Inspection records and documentation support as agreed"] },
      { title: "Applications", body: ["Our heat exchanger shells are used across different industrial and process applications, including:"], bullets: ["Shell and tube heat exchangers", "Industrial condensers", "Water condensers", "Process heat exchangers", "Utility heat exchangers", "Heat transfer equipment", "Chemical process plants", "Pharmaceutical industries", "Food and beverage processing units", "Water treatment plants", "Utility plants", "Process skids and package units", "Manufacturing plants", "Engineering industries", "Custom industrial projects"] },
      { title: "Materials of Construction", body: ["National Engineers & Steel Fabricators manufactures heat exchanger shells using suitable material based on service media, pressure, temperature, corrosion condition, cooling medium and project specification.", "Common material options include:"], bullets: ["Mild Steel", "Carbon Steel", "Stainless Steel", "Alloy Steel as per requirement", "Internally coated construction if required", "Externally painted or coated construction", "Special MOC as per client specification", "As an MS heat exchanger shell manufacturer, CS heat exchanger shell manufacturer and SS heat exchanger shell manufacturer, we fabricate shells based on the client’s duty condition, corrosion requirement and inspection scope."] },
      { title: "Technical Specifications", table: { columns: ["Specification", "Details"], rows: [["Product Type", "Heat Exchanger Shell"], ["Equipment Category", "Heat Transfer Equipment / Process Equipment"], ["Application", "Shell and tube heat exchanger, condenser shell, process and utility heat transfer service"], ["Material of Construction", "Mild Steel, Carbon Steel, Stainless Steel, Alloy Steel or as per requirement"], ["Fabrication Scope", "Shells, channels, covers, heads, nozzles, saddles and supports"], ["Shell Size", "As per client drawing and project requirement"], ["Shell Thickness", "As per design, pressure condition and client specification"], ["Orientation", "Horizontal or vertical as per equipment design"], ["Nozzle Connection", "As per P&ID, nozzle schedule or client drawing"], ["Support Type", "Saddle support, bracket support, structural support or skid-mounted arrangement"], ["Design Basis", "Client drawing, datasheet, P&ID or project specification"], ["Inspection", "Dimensional checks, nozzle orientation checks and NDT as specified"], ["Testing", "Pressure testing / leak testing where applicable"], ["NDT", "UT, RT or other NDT as per project requirement"], ["Surface Finish", "Painted, coated, lined or finished as per service condition"], ["Documentation", "Inspection reports, test reports and documentation pack as agreed"], ["Customization", "Available as per drawing, MOC, pressure condition, duty requirement and site layout"]] } },
      { title: "Fabrication and Quality Control", body: ["Every heat exchanger shell is fabricated with proper attention to material verification, shell rolling, fit-up, welding quality, dimensional accuracy, shell roundness, nozzle orientation and support alignment.", "Quality checks may include:"], bullets: ["Material verification", "Drawing and datasheet review", "Shell rolling inspection", "Fit-up inspection", "Welding quality checks", "Shell roundness checking", "Dimensional inspection", "Nozzle orientation verification", "Support alignment checking", "NDT such as UT or RT as specified", "Pressure testing as applicable", "Leak testing as required", "Final painting and finishing inspection", "Documentation compilation as agreed"] },
      { title: "Engineering and Compliance Support", body: ["National Engineers & Steel Fabricators manufactures heat exchanger shells as per client specifications, approved drawings, inspection plans and project requirements.", "Where applicable, fabrication can be aligned with:"], bullets: ["TEMA-aligned expectations for shell and tube heat exchanger shell scope", "ASME-ready pressure equipment fabrication support where specified", "Project-specific inspection plans", "Client-defined acceptance criteria", "Third-party inspection requirements", "Documentation and traceability requirements", "Final code compliance, design approval and certification requirements should be confirmed as per applicable design code, client specification and authorized engineering review."] },
      { title: "Why Choose National Engineers?", body: ["National Engineers & Steel Fabricators is a trusted heat exchanger shell manufacturer, heat exchanger shell supplier and process equipment manufacturer in Surat, Gujarat. We provide custom fabrication support for industries that require accurate, durable and inspection-ready heat exchanger shells.", "Reasons to work with us:"], bullets: ["Experienced heat exchanger shell manufacturer in India", "Reliable heat exchanger shell supplier in Surat, Gujarat", "Custom heat exchanger shell fabrication as per drawing", "Shell and tube heat exchanger shell manufacturing support", "Condenser shell fabrication for industrial applications", "MS, CS, SS and alloy steel fabrication capability", "Controlled fit-up, welding and nozzle alignment", "TEMA-aligned fabrication support where applicable", "ASME-ready fabrication support where specified", "NDT, pressure testing and documentation support as agreed", "Fabrication for chemical, pharma, food, water treatment, utility and process industries"] },
      { title: "Details Required for Quotation", body: ["To provide the right quotation for a heat exchanger shell, please share:"], bullets: ["Drawing or datasheet", "Shell diameter and length", "Material of construction", "Shell thickness", "Design pressure and operating pressure", "Design temperature and operating temperature", "Service media", "Corrosion allowance", "Nozzle schedule or P&ID", "Support arrangement", "NDT requirement", "Pressure or leak testing requirement", "Surface finish, coating or painting requirement", "Documentation requirement", "Delivery location and timeline"] },
    ],
    note: "Share your drawings, datasheets, shell dimensions, MOC, nozzle schedule, inspection plan and documentation requirements with National Engineers & Steel Fabricators. Our team will review your requirement and provide a suitable heat exchanger shell fabrication solution for your industrial project.",
    enquiry: { title: "Get a Quote for Heat Exchanger Shell", subtitle: "Looking for a heat exchanger shell manufacturer and supplier in India?", productName: "Heat Exchanger Shell", buttonText: "Request Quote" },
    faqs: [
      { question: "What is a heat exchanger shell?", answer: "A heat exchanger shell is the fabricated outer body of a shell and tube heat exchanger. It houses the tube bundle and provides the main pressure-retaining structure for heat transfer applications." },
      { question: "Who is a heat exchanger shell manufacturer in Surat?", answer: "National Engineers & Steel Fabricators is a heat exchanger shell manufacturer in Surat, Gujarat, offering custom shell fabrication as per client drawings, datasheets, MOC, nozzle schedule and inspection requirements." },
      { question: "Do you manufacture heat exchanger shells in India?", answer: "Yes, National Engineers & Steel Fabricators is a heat exchanger shell manufacturer and supplier in India, providing custom heat exchanger shells, condenser shells, channels, covers, heads, nozzles and supports." },
      { question: "Can heat exchanger shells be fabricated as per drawing?", answer: "Yes, heat exchanger shells can be fabricated as per client drawings, datasheets, shell dimensions, MOC, nozzle orientation, support arrangement, testing scope and documentation requirements." },
      { question: "What is shell and tube heat exchanger shell fabrication?", answer: "Shell and tube heat exchanger shell fabrication includes shell rolling, fit-up, welding, nozzle installation, support fabrication, dimensional checking, pressure testing and documentation as per project requirement." },
      { question: "Which materials are used for heat exchanger shells?", answer: "Heat exchanger shells can be fabricated in mild steel, carbon steel, stainless steel, alloy steel or special materials depending on service media, pressure, temperature and corrosion requirements." },
      { question: "Do you provide condenser shell fabrication?", answer: "Yes, National Engineers & Steel Fabricators provides condenser shell fabrication for industrial condensers, water condensers, process condensers and heat transfer equipment." },
      { question: "Do you support TEMA or ASME-ready fabrication?", answer: "Yes, TEMA-aligned fabrication support and ASME-ready pressure equipment fabrication support can be provided where specified by the client and agreed in the project scope." },
      { question: "What testing is done for heat exchanger shells?", answer: "Testing may include dimensional inspection, shell roundness checking, nozzle orientation verification, NDT such as UT or RT, pressure testing and leak testing as per project requirement." },
      { question: "How is heat exchanger shell price calculated?", answer: "Heat exchanger shell price depends on shell size, MOC, thickness, nozzle quantity, support arrangement, NDT, pressure testing, coating, documentation and customization requirements." },
    ],
    seo: { title: "Heat Exchanger Shell Manufacturer & Supplier in India | NESF", description: "Heat exchanger shell manufacturer in Surat, India, offering custom shell fabrication, condenser shells, nozzles and supports.", keywords: ["Heat Exchanger Shell Manufacturer", "heat exchanger shell supplier", "heat exchanger shell manufacturer in India", "heat exchanger shell manufacturer in Surat", "industrial heat exchanger shell", "custom heat exchanger shell", "heat exchanger shell fabrication", "heat exchanger fabrication", "shell and tube heat exchanger shell", "shell and tube heat exchanger shell manufacturer", "condenser shell fabrication", "condenser shell manufacturer", "heat exchanger components manufacturer", "heat transfer equipment manufacturer", "process equipment manufacturer in India", "process equipment manufacturer in Surat", "MS heat exchanger shell", "CS heat exchanger shell", "SS heat exchanger shell", "TEMA-aligned fabrication", "ASME-ready fabrication", "NDT", "pressure testing", "leak testing"] },
  },
  "process-column-manufacturer": {
    title: "Process Column Manufacturer and Supplier in India",
    headline: "Process Column Manufacturer in Surat",
    description: "National Engineers & Steel Fabricators is a trusted process column manufacturer and supplier in India, offering custom process column fabrication for chemical plants, process industries, utility systems, specialty manufacturing, engineering projects and heavy industrial applications.",
    pagePath: "/products/process-column-manufacturer",
    image: "/product/23.webp",
    imageAlt: "Process column manufactured by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Product Type", value: "Process Column" },
      { label: "Equipment Category", value: "Process Equipment / Heavy Fabrication" },
      { label: "Orientation", value: "Vertical" },
      { label: "Fabrication", value: "Custom-built as per drawing and datasheet" },
    ],
    overview: [
      "Based in Sachin GIDC, Surat, Gujarat, we manufacture industrial process columns as per client drawings, datasheets, P&ID, column height, diameter, material of construction, nozzle schedule, manway arrangement, support requirement, platform requirement, inspection plan and documentation needs.",
      "Our process column fabrication solutions are suitable for industries that require accurate shell alignment, controlled welding, proper nozzle orientation, verticality control, inspection readiness and project-ready fabricated equipment.",
      "National Engineers & Steel Fabricators is an experienced process column manufacturer in Surat, offering custom process columns for industrial and process plant applications.",
      "As a process column manufacturer in India, we fabricate column shells, shell sections, nozzles, manways, lifting lugs, support brackets, internal support rings, platform supports, ladder supports and other required fabrication components as per approved drawings and project specifications. Each process column is manufactured with proper attention to fit-up, welding quality, shell alignment, dimensional accuracy, nozzle location, manway positioning, support planning and long service life.",
    ],
    sections: [
      { title: "Custom Process Column Fabrication", body: ["Every process column has different height, diameter, service condition, nozzle layout, support arrangement and inspection requirement. That is why National Engineers & Steel Fabricators provides custom process column fabrication as per client-specific drawings, datasheets and duty conditions.", "Our process column fabrication scope can include:"], bullets: ["Column shell fabrication", "Column section rolling and fit-up", "Shell section welding", "Nozzle fabrication and installation", "Manway fabrication and fitment", "Internal support ring fabrication", "Platform and ladder support provision", "Lifting lug and erection support provision", "Skirt, base ring or support arrangement", "Dimensional and verticality checks", "NDT support as per project requirement", "Pressure testing and leak testing where applicable", "Surface preparation and painting", "Documentation and inspection records as agreed"] },
      { title: "Industrial Process Columns for Plant Applications", body: ["Industrial process columns are used in process plants where tall fabricated equipment is required for application-specific process duties. These columns may be used in chemical processing, utility systems, specialty manufacturing and other industrial projects depending on the plant requirement.", "As an industrial column manufacturer and process equipment manufacturer in India, National Engineers & Steel Fabricators manufactures process columns that integrate properly with connected piping, instrumentation, platforms, supports and plant layout.", "Our focus is on practical fabrication quality, safe handling, accurate nozzle orientation, strong support design and reliable project execution."] },
      { title: "Heavy Fabrication for Process Columns", body: ["Process columns often require heavy fabrication capability because of their size, height, thickness, lifting arrangement, support requirement and site installation needs.", "National Engineers & Steel Fabricators is a heavy fabrication company in Surat, providing process column fabrication and custom process equipment fabrication for industries that need durable, accurate and inspection-ready fabricated equipment.", "Our heavy fabrication support includes column shells, structural supports, lifting lugs, base supports, platform brackets, manways, nozzles and project-specific fabricated attachments."] },
      { title: "Types of Process Columns We Manufacture", body: ["National Engineers & Steel Fabricators manufactures custom process columns based on client drawings, service conditions and industrial project requirements.", "Common types include:"], bullets: ["Industrial process columns", "Custom process columns", "MS process columns", "CS process columns", "SS process columns", "Vertical process columns", "Fabricated column shells", "Column shell sections", "Process columns with nozzles and manways", "Process columns with platform supports", "Process columns with ladder supports", "Process equipment columns as per drawing", "Heavy fabricated process columns", "Special-purpose process columns"] },
      { title: "Key Features", bullets: ["Custom-built process columns as per drawing and datasheet", "Suitable for chemical, utility and process plant applications", "MS, CS, SS and alloy steel fabrication options", "Column shell fabrication as per required height and diameter", "Accurate nozzle orientation as per P&ID or client drawing", "Manway, vent, drain and instrument nozzle provisions", "Internal support rings and brackets as required", "Platform and ladder support provision if required", "Lifting lug and erection support arrangement", "Skirt, base ring or support arrangement as per design", "Controlled fit-up, welding and dimensional accuracy", "Verticality and alignment checks", "NDT support such as UT or RT as per project requirement", "Pressure testing and leak testing where applicable", "Surface preparation, painting or coating support", "Documentation support as agreed"] },
      { title: "Applications", body: ["Our process columns are used across different industries and applications, including:"], bullets: ["Chemical process plants", "Specialty chemical manufacturing", "Pharmaceutical industries", "Utility plants", "Oil and gas related processing", "Process skids and package units", "Industrial process equipment", "Manufacturing plants", "Engineering industries", "Heavy fabrication projects", "Custom industrial projects", "Process plant expansion projects", "Utility and service systems", "Application-specific process operations"] },
      { title: "Materials of Construction", body: ["National Engineers & Steel Fabricators manufactures process columns using suitable material based on service media, pressure, temperature, corrosion condition, site environment and client specification.", "Common material options include:"], bullets: ["Mild Steel", "Carbon Steel", "Stainless Steel", "Alloy Steel as per requirement", "Internally coated construction if required", "Externally painted or coated construction", "Special MOC as per client specification", "As an MS process column manufacturer, CS process column manufacturer and SS process column manufacturer, we fabricate process columns based on the client’s duty condition, material requirement, corrosion allowance and inspection scope."] },
      { title: "Technical Specifications", table: { columns: ["Specification", "Details"], rows: [["Product Type", "Process Column"], ["Equipment Category", "Process Equipment / Heavy Fabrication"], ["Application", "Chemical processing, utility systems, process plants and industrial fabrication"], ["Material of Construction", "Mild Steel, Carbon Steel, Stainless Steel, Alloy Steel or as per requirement"], ["Fabrication Scope", "Column shells, shell sections, nozzles, manways, supports, lifting lugs and platform supports"], ["Column Height", "As per client drawing and project requirement"], ["Column Diameter", "As per client drawing and process requirement"], ["Shell Thickness", "As per design, duty condition and client specification"], ["Orientation", "Vertical"], ["Nozzle Connection", "As per P&ID, nozzle schedule or client drawing"], ["Manway", "Provided as per inspection and maintenance requirement"], ["Support Type", "Skirt support, base ring, leg support, bracket support or structural support"], ["Internals Support", "Internal support rings, brackets or internals handling support as applicable"], ["Platform Support", "Platform, ladder and handrail support provision if required"], ["Design Basis", "Client drawing, datasheet, P&ID or project specification"], ["Inspection", "Dimensional checks, verticality checks, nozzle orientation checks and NDT as specified"], ["Testing", "Pressure testing / leak testing where applicable"], ["NDT", "UT, RT or other NDT as per project requirement"], ["Surface Finish", "Painted, coated, lined or finished as per service condition"], ["Documentation", "Inspection reports, test reports and documentation pack as agreed"], ["Customization", "Available as per drawing, MOC, nozzle schedule, support requirement and site layout"]] } },
      { title: "Fabrication and Quality Control", body: ["Every process column is fabricated with proper attention to material verification, shell rolling, fit-up, welding quality, dimensional accuracy, verticality, nozzle orientation and support alignment.", "Quality checks may include:"], bullets: ["Material verification", "Drawing and datasheet review", "Shell rolling inspection", "Fit-up inspection", "Welding quality checks", "Shell alignment checking", "Dimensional inspection", "Verticality checking", "Nozzle orientation verification", "Manway location checking", "Support alignment checking", "Internal support checking if applicable", "NDT such as UT or RT as specified", "Pressure testing where applicable", "Leak testing as required", "Final painting and finishing inspection", "Documentation compilation as agreed"] },
      { title: "Engineering and Compliance Support", body: ["National Engineers & Steel Fabricators manufactures process columns as per client specifications, approved drawings, inspection plans and project requirements.", "Where applicable, fabrication can be aligned with:"], bullets: ["ASME-ready pressure equipment fabrication support where specified", "Project-specific inspection plans", "Client-defined acceptance criteria", "Third-party inspection requirements", "Documentation and traceability requirements", "Pressure vessel fabrication practices where applicable to the scope", "Final code compliance, design approval and certification requirements should be confirmed as per applicable design code, client specification and authorized engineering review."] },
      { title: "Why Choose National Engineers?", body: ["National Engineers & Steel Fabricators is a trusted process column manufacturer, process column supplier and process equipment manufacturer in Surat, Gujarat. We provide custom process column fabrication support for industries that require accurate, durable and inspection-ready heavy fabricated equipment.", "Reasons to work with us:"], bullets: ["Experienced process column manufacturer in India", "Reliable process column supplier in Surat, Gujarat", "Custom process column fabrication as per drawing", "Industrial process columns for plant applications", "Heavy fabrication manufacturer in Surat for process industries", "MS, CS, SS and alloy steel fabrication capability", "Accurate shell alignment and nozzle orientation", "Platform, ladder, manway and support fabrication support", "ASME-ready fabrication support where specified", "NDT, pressure testing and documentation support as agreed", "Fabrication for chemical, pharma, utility, process and manufacturing industries"] },
      { title: "Details Required for Quotation", body: ["To provide the right quotation for a process column, please share:"], bullets: ["Drawing or datasheet", "P&ID or nozzle schedule", "Column height and diameter", "Material of construction", "Shell thickness", "Design pressure and operating pressure", "Design temperature and operating temperature", "Service media", "Corrosion allowance", "Nozzle and manway details", "Support arrangement", "Platform or ladder support requirement", "Internals handling requirement if any", "NDT requirement", "Pressure or leak testing requirement", "Surface finish, coating or painting requirement", "Documentation requirement", "Delivery location and timeline"] },
    ],
    note: "Share your drawings, datasheets, column dimensions, MOC, nozzle schedule, support requirement, inspection plan and documentation requirements with National Engineers & Steel Fabricators. Our team will review your requirement and provide a suitable process column fabrication solution for your industrial project.",
    enquiry: { title: "Get a Quote for Process Column", subtitle: "Looking for a process column manufacturer and supplier in India?", productName: "Process Column", buttonText: "Request Quote" },
    faqs: [
      { question: "What is a process column?", answer: "A process column is tall fabricated industrial equipment used in process plants for application-specific processing, separation, gas-liquid contact, utility or chemical process requirements." },
      { question: "Who is a process column manufacturer in Surat?", answer: "National Engineers & Steel Fabricators is a process column manufacturer in Surat, Gujarat, offering custom process column fabrication as per client drawings, datasheets, MOC, nozzle schedule and inspection requirements." },
      { question: "Do you manufacture process columns in India?", answer: "Yes, National Engineers & Steel Fabricators is a process column manufacturer and supplier in India, providing custom industrial process columns, column shells, nozzles, manways, supports and platform support fabrication." },
      { question: "Can process columns be fabricated as per drawing?", answer: "Yes, process columns can be fabricated as per client drawings, datasheets, P&ID, column dimensions, MOC, nozzle orientation, support arrangement, inspection scope and documentation requirements." },
      { question: "Which materials are used for process columns?", answer: "Process columns can be fabricated in mild steel, carbon steel, stainless steel, alloy steel or special materials depending on service media, pressure, temperature, corrosion requirement and project specification." },
      { question: "Do you manufacture MS, CS and SS process columns?", answer: "Yes, National Engineers & Steel Fabricators manufactures MS process columns, CS process columns and SS process columns as per client drawings, material requirements and industrial application needs." },
      { question: "What fabrication scope is included in process columns?", answer: "Process column fabrication may include shell sections, nozzles, manways, lifting lugs, support brackets, internal support rings, platform supports, ladder supports, base supports and inspection requirements." },
      { question: "Do you support ASME-ready process column fabrication?", answer: "Yes, ASME-ready fabrication support can be provided where specified by the client and agreed in the project scope, along with NDT, testing and documentation support." },
      { question: "What testing is done for process columns?", answer: "Testing may include dimensional inspection, verticality checking, nozzle orientation verification, NDT such as UT or RT, pressure testing and leak testing as per project requirement." },
      { question: "How is the process column price calculated?", answer: "Process column price depends on height, diameter, MOC, thickness, nozzle quantity, manways, support arrangement, platform supports, NDT, testing, coating, documentation and customization requirements." },
    ],
    seo: { title: "Process Column Manufacturer & Supplier in India | NESF", description: "Process column manufacturer in Surat, India, offering custom industrial columns, nozzles, manways, supports and heavy fabrication.", keywords: ["process column manufacturer", "process column supplier", "process column manufacturer in India", "process column manufacturer in Surat", "industrial process columns", "custom process columns", "process column fabrication", "column fabrication", "industrial column manufacturer", "process equipment manufacturer in India", "process equipment manufacturer in Surat", "heavy fabrication manufacturer", "heavy fabrication company in Surat", "MS process column", "CS process column", "SS process column", "custom process equipment fabrication", "pressure vessel fabrication", "ASME-ready fabrication", "NDT", "pressure testing", "leak testing"] },
  },
  "process-skid-manufacturer": {
    title: "Process Skid Manufacturer and Supplier in India",
    headline: "Process Skid Manufacturer in Surat",
    description:
      "National Engineers & Steel Fabricators is a trusted process skid manufacturer and supplier in India, offering custom process skids and skid-mounted process packages for chemical plants, water treatment systems, utility systems, filtration packages, dosing systems, process equipment and industrial plant applications.",
    pagePath:
      "/products/process-skid-manufacturer",
    image: "/product/22.webp",
    imageAlt:
      "Skid-mounted process package fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Product Type", value: "Process Skid / Skid Package" },
      { label: "Design Basis", value: "Skid GA, P&ID and equipment list" },
      { label: "Build Scope", value: "Frames, supports and piping provisions" },
      { label: "Integration", value: "Modular and site-ready" },
    ],
    overview: [
      "Based in Sachin GIDC, Surat, Gujarat, we manufacture process skids as per client drawings, skid GA, P&ID, equipment list, piping layout, nozzle details, material of construction, support requirement, lifting requirement, testing scope and documentation needs.",
      "Our process skid fabrication solutions are designed for industries that require shop-fabricated, modular and site-ready assemblies to reduce installation time, improve quality control and simplify project execution.",
    ],
    sections: [
      {
        title: "Process Skid Manufacturer in Surat",
        body: [
          "National Engineers & Steel Fabricators is an experienced process skid manufacturer in Surat, offering custom skid fabrication for process industries, chemical plants, utility plants, water treatment systems, pharma units, food processing units, engineering companies and manufacturing facilities.",
          "As a process skid manufacturer in India, we fabricate skid-mounted packages with structural base frames, equipment supports, piping provisions, valve mounting areas, lifting points, access provisions and dispatch-ready arrangements as per project requirements.",
          "Each process skid is manufactured with proper attention to structural rigidity, equipment alignment, piping accessibility, maintainability, lifting safety, inspection readiness and long service life.",
        ],
      },
      {
        title: "Custom Process Skid Fabrication",
        body: [
          "Every process skid has different equipment, piping, utility, space and installation requirements. That is why National Engineers & Steel Fabricators provides custom process skid fabrication as per client-specific drawings, skid GA, P&ID and duty conditions.",
          "Our process skid fabrication scope can include:",
        ],
        bullets: [
          "Skid base frame fabrication", "Equipment mounting supports", "Piping supports and routing provisions",
          "Valve station mounting provision", "Nozzle and piping interface alignment", "Lifting lugs and handling points",
          "Walkway, access or maintenance clearance provisions if required", "Structural support fabrication",
          "Surface preparation and painting", "Assembly alignment checks", "Pressure testing and leak testing where applicable",
          "NDT support as per project requirement", "Inspection reports, test reports and documentation pack",
          "Packing and dispatch preparation",
        ],
      },
      {
        title: "Modular Skid Fabrication for Faster Site Installation",
        body: [
          "Modular skid fabrication helps industries reduce on-site work by shifting fabrication, fit-up, assembly checks and inspection activities to a controlled workshop environment. This improves project control, reduces site rework and supports faster installation.",
          "As a modular skid fabrication company, National Engineers & Steel Fabricators manufactures skid-mounted assemblies that are planned around equipment placement, piping interface, lifting arrangement, transport limitations, installation space and future maintenance access.",
          "Our skid-mounted process packages are suitable for projects where faster installation, repeatable fabrication quality and better pre-dispatch inspection are important.",
        ],
      },
      {
        title: "Skid Mounted Process Packages",
        body: [
          "A skid-mounted process package is a compact fabricated assembly where process equipment, piping, supports and accessories are arranged on a common skid frame. These packages help simplify installation and reduce multiple site fabrication activities.",
          "National Engineers & Steel Fabricators manufactures skid mounted process packages for industrial applications where equipment needs to be mounted, aligned, supported, inspected and dispatched as a project-ready assembly.",
          "As a skid mounted package manufacturer and process package manufacturer, we support fabrication for utility skids, chemical process skids, filtration skids, dosing skids, water treatment skids and packaged process equipment as per client drawings and project scope.",
        ],
      },
      {
        title: "Types of Process Skids We Manufacture",
        body: ["National Engineers & Steel Fabricators manufactures custom process skids and packaged systems for different industrial requirements.", "Common types include:"],
        bullets: [
          "Process skids and packages", "Custom process skids", "Industrial process skids", "Skid-mounted process packages",
          "Utility skids", "Chemical process skids", "Water treatment skids", "Filtration skids", "Dosing skids",
          "Equipment skids", "Piping skids", "Valve station skids", "Packaged process equipment", "Skid base frames",
          "Modular process packages as per drawing",
        ],
      },
      {
        title: "Key Features",
        bullets: [
          "Custom-built process skids as per drawing and skid GA", "Suitable for process, utility, water treatment and chemical applications",
          "Strong skid base frame fabrication", "Equipment mounting and alignment support", "Piping routing and support provisions",
          "Nozzle and piping interface alignment", "Valve, instrument and accessory mounting provisions as required",
          "Lifting lug and handling arrangement", "Structural rigidity for transport and operation", "Modular design for faster site integration",
          "Shop-fabricated assembly for better quality control", "NDT support as per project requirement",
          "Pressure testing and leak testing where applicable", "Surface preparation, painting or coating support",
          "Inspection reports, test reports, BOM and packing list as agreed",
        ],
      },
      {
        title: "Applications",
        body: ["Our process skids and skid-mounted packages are used across different industries and applications, including:"],
        bullets: [
          "Chemical process plants", "Water treatment plants", "Utility systems", "Filtration packages", "Dosing systems",
          "Process equipment packages", "Pump and piping packages", "Manufacturing plants", "Pharmaceutical industries",
          "Food and beverage processing units", "Engineering industries", "Process skids and package units",
          "Plant retrofit projects", "Modular plant expansion projects", "Industrial utility packages", "Custom fabricated process systems",
        ],
      },
      {
        title: "Materials of Construction",
        body: [
          "National Engineers & Steel Fabricators manufactures process skids using suitable materials based on process requirement, equipment load, piping service, corrosion condition, site environment and client specification.",
          "Common material options include:",
        ],
        bullets: [
          "Mild Steel", "Carbon Steel", "Stainless Steel", "Alloy Steel as per requirement",
          "Painted or coated structural steel", "Galvanized structure if required", "Special MOC as per client specification",
        ],
      },
      {
        title: "Technical Specifications",
        table: {
          columns: ["Specification", "Details"],
          rows: [
            ["Product Type", "Process Skid / Skid-Mounted Process Package"],
            ["Equipment Category", "Modular Process Equipment / Packaged Process Equipment"],
            ["Application", "Process systems, utility systems, filtration, dosing, water treatment and chemical process packages"],
            ["Fabrication Scope", "Skid base frames, equipment supports, piping provisions, lifting points and accessories"],
            ["Material of Construction", "Mild Steel, Carbon Steel, Stainless Steel or as per requirement"],
            ["Design Basis", "Skid GA, P&ID, equipment list, nozzle list or client drawing"],
            ["Skid Size", "As per client drawing and transport/site constraints"],
            ["Equipment Mounting", "As per equipment list, weight and mounting layout"],
            ["Piping Interface", "As per P&ID, nozzle list and piping layout"],
            ["Support Type", "Base frame, structural support, pipe support, equipment support or skid-mounted arrangement"],
            ["Lifting Arrangement", "Lifting lugs, lifting points or handling arrangement as required"],
            ["Testing", "Pressure testing / leak testing where applicable"],
            ["Inspection", "Dimensional checks, alignment checks, NDT as specified"],
            ["Surface Finish", "Painted, coated or finished as per site condition"],
            ["Documentation", "Inspection reports, test reports, BOM, packing list and documentation pack as agreed"],
            ["Customization", "Available as per drawing, equipment list, piping layout, site constraints and project scope"],
          ],
        },
      },
      {
        title: "Fabrication and Quality Control",
        body: ["Every process skid is fabricated with proper attention to material verification, structural fit-up, welding quality, dimensional accuracy, equipment mounting alignment, piping support alignment and dispatch readiness.", "Quality checks may include:"],
        bullets: [
          "Material verification", "Drawing and skid GA review", "Structural fit-up inspection", "Welding quality checks",
          "Dimensional inspection", "Equipment mounting alignment checks", "Piping route and support checks",
          "Lifting point verification", "NDT as per requirement", "Pressure testing where applicable", "Leak testing where applicable",
          "Final painting and finishing inspection", "BOM, packing list and documentation compilation as agreed",
        ],
      },
      {
        title: "Why Choose National Engineers?",
        body: ["National Engineers & Steel Fabricators is a trusted process skid manufacturer, process skid supplier and process equipment manufacturer in Surat, Gujarat. We provide custom process skid fabrication for industries that need modular, durable and installation-ready skid-mounted packages.", "Reasons to work with us:"],
        bullets: [
          "Experienced process skid manufacturer in India", "Reliable process skid supplier in Surat, Gujarat",
          "Custom process skid fabrication as per drawing and skid GA", "Modular skid fabrication for faster site integration",
          "Skid-mounted process package manufacturing support", "Utility skid, filtration skid and dosing skid fabrication",
          "Strong skid base frame and equipment support fabrication", "Piping skid fabrication and routing support",
          "Heavy fabrication company in Surat for industrial projects", "Testing, inspection and documentation support as agreed",
          "Fabrication for chemical, pharma, water treatment, utility and process industries",
        ],
      },
      {
        title: "Details Required for Quotation",
        body: ["To provide the right quotation for a process skid or skid-mounted package, please share:"],
        bullets: [
          "Skid GA or layout drawing", "P&ID", "Equipment list", "Equipment weights and mounting details",
          "Nozzle list and piping interface details", "Piping layout or routing requirement", "Material of construction",
          "Skid size and dimensional constraints", "Site access and installation constraints", "Lifting and transport requirements",
          "Testing requirement", "NDT requirement, if any", "Documentation requirement", "Delivery location and timeline",
        ],
      },
      {
        title: "Get a Quote for Process Skids and Packages",
        body: [
          "Looking for a process skid manufacturer and supplier in India?",
          "Share your skid GA, P&ID, equipment list, piping layout, nozzle details, site constraints, testing requirements and documentation needs with National Engineers & Steel Fabricators. Our team will review your requirement and provide a suitable process skid fabrication solution for your industrial project.",
        ],
      },
    ],
    note:
      "Share your skid GA, P&ID, equipment list, piping layout, nozzle details, site constraints, testing requirements and documentation needs.",
    enquiry: {
      title: "Request a quote for Process Skids & Packages",
      subtitle:
        "Share your skid GA, P&ID, equipment list, piping layout, nozzle details, site constraints and testing requirements.",
      productName: "Process Skids & Packages",
      buttonText: "Request Quote",
    },
    faqs: [
      { question: "What is a process skid?", answer: "A process skid is a modular fabricated assembly where equipment, piping supports, structural frames and accessories are mounted on a common base frame for easier transport and faster site installation." },
      { question: "Who is a process skid manufacturer in Surat?", answer: "National Engineers & Steel Fabricators is a process skid manufacturer in Surat, Gujarat, offering custom process skid fabrication as per skid GA, P&ID, equipment list, piping layout and project requirements." },
      { question: "Do you manufacture process skids in India?", answer: "Yes, National Engineers & Steel Fabricators is a process skid manufacturer and supplier in India, providing custom process skids, skid-mounted process packages, utility skids, filtration skids and dosing skids." },
      { question: "What is included in a skid-mounted process package?", answer: "A skid-mounted process package may include a skid base frame, equipment supports, piping provisions, valve mounting areas, lifting points, access provisions, testing, inspection reports and dispatch preparation as per scope." },
      { question: "Can process skids be fabricated as per drawing?", answer: "Yes, process skids can be fabricated as per client drawings, skid GA, P&ID, equipment list, nozzle details, piping interface, site constraints, testing requirements and documentation needs." },
      { question: "What industries use process skids?", answer: "Process skids are used in chemical plants, water treatment plants, utility systems, filtration systems, dosing systems, pharmaceutical industries, food processing units, manufacturing plants and process industries." },
      { question: "What materials are used for process skid fabrication?", answer: "Process skids can be fabricated in mild steel, carbon steel, stainless steel or special materials depending on equipment load, service condition, corrosion requirement, site environment and project specification." },
      { question: "What is modular skid fabrication?", answer: "Modular skid fabrication means manufacturing equipment and piping assemblies on a common skid frame in a workshop environment, so the package can be transported and installed faster at site." },
      { question: "What details are required to get a quotation for a process skid?", answer: "To get a quotation, you can share skid GA, P&ID, equipment list, weights, nozzle details, piping layout, MOC, site constraints, lifting requirements, testing scope and documentation requirements." },
      { question: "How is the process skid price calculated?", answer: "Process skid price depends on skid size, material of construction, equipment supports, piping scope, fabrication complexity, testing, NDT, painting, documentation, packing and customization requirements." },
    ],
    seo: {
      title: "Process Skid Manufacturer & Supplier in India | NESF",
      description:
        "Process skid manufacturer in Surat, India, offering custom skid packages, piping, frames, supports, testing and documentation.",
      keywords: [
        "process skid manufacturer", "process skid supplier", "process skid manufacturer in India", "process skid manufacturer in Surat",
        "process skids and packages", "process skid fabrication", "modular skid fabrication", "skid mounted process package",
        "skid mounted package manufacturer", "process package manufacturer", "custom process skid", "industrial process skids",
        "utility skid manufacturer", "chemical process skid", "water treatment skid manufacturer", "filtration skid manufacturer",
        "dosing skid manufacturer", "piping skid fabrication", "equipment skid manufacturer", "skid base frame manufacturer",
        "packaged process equipment", "process equipment manufacturer in India", "process equipment manufacturer in Surat",
        "heavy fabrication company in Surat",
      ],
    },
  },
  "special-purpose-process-vessel-manufacturer": {
    title: "Special Purpose Process Vessel Manufacturer and Supplier in India",
    headline: "Special Purpose Process Vessel Manufacturer in Surat",
    description:
      "National Engineers & Steel Fabricators is a trusted special purpose process vessel manufacturer and supplier in India, offering custom fabricated process vessels for chemical plants, process industries, utility systems, water treatment plants, specialty manufacturing, pharma, food processing and industrial plant applications.",
    pagePath:
      "/products/special-purpose-process-vessel-manufacturer",
    image: "/product/24.webp",
    imageAlt:
      "Special purpose industrial process vessel fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Product Type", value: "Special Purpose Process Vessel" },
      { label: "Materials", value: "MS, CS, SS or alloy steel" },
      { label: "Configuration", value: "Vertical, horizontal or skid-mounted" },
      { label: "Build Basis", value: "Drawing, datasheet and process duty" },
    ],
    overview: [
      "Based in Sachin GIDC, Surat, Gujarat, we manufacture special purpose process vessels as per client drawings, datasheets, P&ID, process duty, operating conditions, material of construction, nozzle schedule, access requirements, mounting constraints, inspection plan and documentation needs.",
      "Our special purpose process vessel fabrication solutions are suitable for industries that require duty-specific, durable and application-ready vessels instead of standard equipment.",
    ],
    sections: [
      {
        title: "Special Purpose Process Vessel Manufacturer in Surat",
        body: [
          "National Engineers & Steel Fabricators is an experienced special purpose process vessel manufacturer in Surat, offering custom process vessels for unique plant requirements where standard vessels do not match the process, layout, access or mounting needs.",
          "As a special purpose process vessel manufacturer in India, we fabricate vessels with required shell design, nozzle orientation, manways, access openings, supports, mounting arrangements, insulation readiness, cladding provisions and inspection-friendly construction.",
          "Each vessel is manufactured with proper attention to material selection, fit-up, welding quality, dimensional accuracy, nozzle alignment, testing, documentation and long service life.",
        ],
      },
      {
        title: "Custom Process Vessel Manufacturer",
        body: [
          "Every plant has different process conditions, service media, operating temperature, pressure, corrosion requirement and space constraints. That is why National Engineers & Steel Fabricators provides custom process vessel manufacturing as per client-specific drawings and duty requirements.",
          "As a custom process vessel manufacturer and process vessel supplier in India, we manufacture vessels for mixing, holding, buffering, processing, utility service and application-specific industrial duties.",
          "Our custom fabricated process vessels can be built with special nozzles, access openings, mounting provisions, reinforcement, internals, support arrangements and external accessories as per project scope.",
        ],
      },
      {
        title: "Industrial Process Vessels for Duty-Specific Applications",
        body: [
          "Industrial process vessels are used where liquids, gases or process media need to be handled, stored, mixed, buffered or processed as part of plant operations. Special purpose process vessels are selected when the application requires a specific configuration, connection layout, access requirement or fabrication feature.",
          "National Engineers & Steel Fabricators manufactures duty-specific process vessels for chemical processing, utilities, water treatment, specialty manufacturing, plant modifications and process equipment packages.",
          "Our fabrication approach focuses on practical plant requirements such as installation space, maintenance access, piping connection points, inspection needs, transportation limits and site integration.",
        ],
      },
      {
        title: "Mixing, Holding and Custom Process Vessels",
        body: [
          "National Engineers & Steel Fabricators manufactures mixing vessels, holding vessels and custom process vessels based on the required process duty and plant layout.",
          "As a mixing vessel manufacturer, we can fabricate vessels with required nozzle arrangements, mounting provisions, manways, drain points and support design as per the application. As a holding vessel manufacturer, we manufacture vessels for temporary storage, process buffering, utility holding and intermediate process requirements.",
          "The vessel configuration can be customized based on media type, capacity, MOC, operating conditions, site constraints and inspection requirements.",
        ],
      },
      {
        title: "Process Equipment Manufacturer in Surat",
        body: [
          "National Engineers & Steel Fabricators is also a process equipment manufacturer in Surat, Gujarat, offering custom fabrication for process vessels, utility vessels, pressure vessels, skids, tanks, columns, heat exchanger shells and heavy fabricated equipment.",
          "As a process equipment manufacturer in India, we support industries that need reliable fabrication as per approved drawings, project specifications and duty conditions.",
          "Our process equipment fabrication scope can include vessel fabrication, nozzle fabrication, support fabrication, internal arrangement, external accessories, surface protection, testing and documentation as agreed.",
        ],
      },
      {
        title: "Types of Special Purpose Process Vessels We Manufacture",
        body: ["National Engineers & Steel Fabricators manufactures special purpose process vessels based on application, process duty, material requirement and project scope.", "Common types include:"],
        bullets: [
          "Special purpose process vessels", "Custom process vessels", "Industrial process vessels", "Duty-specific process vessels",
          "Mixing vessels", "Holding vessels", "Buffer vessels", "Utility process vessels", "Chemical process vessels",
          "Process vessels with special nozzles", "Process vessels with access constraints", "Process vessels with mounting constraints",
          "Process vessels prepared for insulation", "Process vessels prepared for cladding", "Skid-mounted process vessels",
          "Custom fabricated process vessels as per drawing",
        ],
      },
      {
        title: "Key Features",
        bullets: [
          "Custom-built process vessels as per drawing and datasheet", "Suitable for duty-specific industrial applications",
          "MS, CS, SS and alloy steel fabrication options", "Special nozzle orientation as per P&ID or client drawing",
          "Manway, access opening, vent and drain provisions", "Application-specific reinforcement and support arrangements",
          "Mounting provisions as per plant layout", "Insulation and cladding readiness where required",
          "Internal baffles, supports or fittings as per process need", "Vertical or horizontal vessel configuration",
          "Pressure vessel fabrication support where applicable", "ASME-ready fabrication support where specified",
          "NDT support such as UT or RT as per requirement", "Pressure testing, strength testing and leak testing as applicable",
          "Material traceability and inspection documentation as agreed",
        ],
      },
      {
        title: "Applications",
        body: ["Our special purpose process vessels are used across different industries and applications, including:"],
        bullets: [
          "Chemical process plants", "Specialty chemical manufacturing", "Pharmaceutical industries", "Food and beverage processing units",
          "Water treatment plants", "Utility systems", "Process skids and package units", "Industrial plant projects",
          "Process media handling", "Mixing and holding applications", "Buffering and intermediate storage",
          "Plant modification projects", "Custom process equipment", "Manufacturing plants", "Engineering industries", "Heavy fabrication projects",
        ],
      },
      {
        title: "Materials of Construction",
        body: [
          "National Engineers & Steel Fabricators manufactures special purpose process vessels using suitable material based on service media, pressure, temperature, corrosion condition, site environment and client specification.",
          "Common material options include:",
        ],
        bullets: [
          "Mild Steel", "Carbon Steel", "Stainless Steel", "Alloy Steel as per requirement",
          "Rubber-lined construction if required", "FRP-lined construction if required", "Internally coated process vessels",
          "Externally painted or coated vessels", "Special MOC as per client specification",
        ],
      },
      {
        title: "Technical Specifications",
        table: {
          columns: ["Specification", "Details"],
          rows: [
            ["Product Type", "Special Purpose Process Vessel"], ["Equipment Category", "Process Equipment / Custom Fabrication"],
            ["Application", "Mixing, holding, buffering, processing, utility and duty-specific industrial service"],
            ["Material of Construction", "Mild Steel, Carbon Steel, Stainless Steel, Alloy Steel or as per requirement"],
            ["Vessel Configuration", "Vertical, horizontal, skid-mounted or custom configuration"],
            ["Service Media", "Liquid, gas, process media, water, chemical or as per application"],
            ["Capacity / Volume", "As per client requirement"], ["Design Basis", "Client drawing, datasheet, P&ID, process duty or project specification"],
            ["Operating Pressure", "As per duty condition"], ["Operating Temperature", "As per project requirement"],
            ["Nozzle Connection", "As per P&ID, nozzle schedule or client drawing"],
            ["Access Provision", "Manway, inspection opening or special access as required"],
            ["Mounting Arrangement", "Leg support, saddle support, skirt support, base frame or custom mounting"],
            ["Special Features", "Reinforcement, internals, cladding readiness, insulation readiness or accessories as required"],
            ["Testing", "Pressure testing, strength testing or leak testing as applicable"],
            ["NDT", "UT, RT or other NDT as per project requirement"], ["Surface Finish", "Painted, coated, lined or finished as per service condition"],
            ["Documentation", "Material traceability, inspection reports, test reports and documentation pack as agreed"],
            ["Customization", "Available as per drawing, duty condition, MOC, nozzle schedule and site layout"],
          ],
        },
      },
      {
        title: "Custom Fabrication Scope",
        body: ["Our special purpose process vessel fabrication scope can be customized based on the process requirement and client specification.", "Scope may include:"],
        bullets: [
          "Shell fabrication", "Dish-end fit-up", "Nozzle fabrication and installation", "Manway and access opening fabrication",
          "Support and mounting arrangement", "Internal baffle or support provision", "Reinforcement pad fabrication",
          "Lifting lug and handling arrangement", "Insulation support provision", "Cladding support provision",
          "Surface preparation and painting", "Coating or lining support", "NDT as per requirement",
          "Pressure testing or leak testing", "Inspection reports and documentation",
        ],
      },
      {
        title: "Fabrication and Quality Control",
        body: ["Every special purpose process vessel is fabricated with proper attention to material verification, fit-up, welding quality, dimensional accuracy, nozzle alignment, access positioning, support arrangement and inspection readiness.", "Quality checks may include:"],
        bullets: [
          "Material verification", "Drawing and datasheet review", "Fit-up inspection", "Welding quality checks", "Dimensional inspection",
          "Nozzle orientation verification", "Manway and access location checking", "Support and mounting alignment checks",
          "NDT such as UT or RT as specified", "Pressure testing where applicable", "Strength testing where applicable",
          "Leak testing as required", "Surface preparation checks", "Final painting and finishing inspection",
          "Material traceability and documentation compilation as agreed",
        ],
      },
      {
        title: "Engineering and Compliance Support",
        body: [
          "National Engineers & Steel Fabricators manufactures special purpose process vessels as per client specifications, approved drawings, inspection plans and project requirements.",
          "Where applicable, fabrication can be aligned with ASME-ready pressure equipment fabrication support, project-specific inspection plans, client-defined acceptance criteria, third-party inspection requirements, documentation and traceability requirements, and pressure vessel fabrication practices applicable to the scope.",
          "Final code compliance, design approval and certification requirements should be confirmed as per applicable design code, client specification and authorized engineering review.",
        ],
      },
      {
        title: "Why Choose National Engineers?",
        body: ["National Engineers & Steel Fabricators is a trusted special purpose process vessel manufacturer, custom process vessel manufacturer and process equipment manufacturer in Surat, Gujarat. We provide custom fabrication support for industries that need duty-specific, durable and inspection-ready process vessels.", "Reasons to work with us:"],
        bullets: [
          "Experienced special purpose process vessel manufacturer in India", "Reliable special purpose process vessel supplier in Surat, Gujarat",
          "Custom process vessel fabrication as per drawing and datasheet", "Process vessel manufacturer in India for duty-specific requirements",
          "Mixing vessel and holding vessel fabrication support", "MS, CS, SS and alloy steel fabrication capability",
          "Special nozzle, access and mounting arrangement support", "Heavy fabrication company in Surat for industrial projects",
          "Pressure vessel fabrication support where applicable", "NDT, pressure testing and documentation support as agreed",
          "Fabrication for chemical, pharma, food, water treatment, utility and process industries",
        ],
      },
      {
        title: "Details Required for Quotation",
        body: ["To provide the right quotation for a special purpose process vessel, please share:"],
        bullets: [
          "Drawing or datasheet", "P&ID or process requirement", "Process duty", "Service media", "Required capacity / volume",
          "Operating pressure", "Operating temperature", "Material of construction", "Corrosion allowance", "Nozzle schedule",
          "Access and manway requirement", "Mounting or support constraints", "Internals requirement, if any",
          "Insulation or cladding requirement", "NDT requirement", "Pressure or leak testing requirement",
          "Documentation requirement", "Delivery location and timeline",
        ],
      },
      {
        title: "Get a Quote for Special Purpose Process Vessel",
        body: [
          "Looking for a special purpose process vessel manufacturer and supplier in India?",
          "Share your drawings, datasheets, process duty, operating conditions, MOC, nozzle schedule, access requirements, testing scope and documentation needs with National Engineers & Steel Fabricators. Our team will review your requirement and provide a suitable process vessel fabrication solution for your industrial application.",
        ],
      },
    ],
    note:
      "Share your drawings, datasheets, process duty, operating conditions, MOC, nozzle schedule, access requirements, testing scope and documentation needs.",
    enquiry: {
      title: "Request a quote for a Special Purpose Process Vessel",
      subtitle:
        "Share drawings, datasheets, process duty, operating conditions, MOC, nozzle schedule, access and testing requirements.",
      productName: "Special Purpose Process Vessel",
      buttonText: "Request Quote",
    },
    faqs: [
      { question: "What is a special purpose process vessel?", answer: "A special purpose process vessel is a custom fabricated vessel designed for a specific process duty, plant layout, service media, access requirement or mounting condition where standard vessels are not suitable." },
      { question: "Who is a special purpose process vessel manufacturer in Surat?", answer: "National Engineers & Steel Fabricators is a special purpose process vessel manufacturer in Surat, Gujarat, offering custom process vessels as per client drawings, datasheets, process duty, MOC and inspection requirements." },
      { question: "Do you manufacture special purpose process vessels in India?", answer: "Yes, National Engineers & Steel Fabricators is a special purpose process vessel manufacturer and supplier in India, providing custom fabricated process vessels for chemical, pharma, water treatment, utility and process industries." },
      { question: "Can process vessels be fabricated as per drawing?", answer: "Yes, process vessels can be fabricated as per client drawings, datasheets, P&ID, process duty, MOC, nozzle schedule, access requirement, mounting constraints, testing scope and documentation needs." },
      { question: "Which materials are used for special purpose process vessels?", answer: "Special purpose process vessels can be fabricated in mild steel, carbon steel, stainless steel, alloy steel or lined construction depending on service media, temperature, corrosion condition and project specification." },
      { question: "Do you manufacture mixing and holding vessels?", answer: "Yes, National Engineers & Steel Fabricators manufactures mixing vessels, holding vessels, buffer vessels, utility process vessels and custom process vessels as per client drawings and process requirements." },
      { question: "What special features can be added to process vessels?", answer: "Special features may include custom nozzles, manways, access openings, mounting provisions, reinforcement pads, internals, insulation readiness, cladding provisions, lifting lugs and support arrangements." },
      { question: "What testing is done for process vessels?", answer: "Testing may include dimensional inspection, nozzle orientation checking, NDT such as UT or RT, pressure testing, strength testing, leak testing and final inspection as per project requirement." },
      { question: "What details are required to get a quotation for a process vessel?", answer: "To get a quotation, you can share drawing, datasheet, process duty, service media, capacity, MOC, nozzle schedule, access requirement, mounting constraints, NDT, testing and documentation needs." },
      { question: "How is special purpose process vessel price calculated?", answer: "Special purpose process vessel price depends on size, MOC, thickness, nozzle quantity, access openings, internals, supports, testing, NDT, coating, documentation and customization requirements." },
    ],
    seo: {
      title: "Special Purpose Process Vessel Manufacturer in India | NESF",
      description:
        "Special purpose process vessel manufacturer in Surat, India, offering custom process vessels, NDT, testing and documentation.",
      keywords: [
        "special purpose process vessel manufacturer", "special purpose process vessel supplier",
        "special purpose process vessel manufacturer in India", "special purpose process vessel manufacturer in Surat",
        "custom process vessel manufacturer", "process vessel manufacturer in India", "process vessel manufacturer in Surat",
        "process vessel supplier in India", "industrial process vessels", "custom fabricated process vessels",
        "duty-specific process vessels", "chemical process vessel manufacturer", "mixing vessel manufacturer",
        "holding vessel manufacturer", "process equipment manufacturer in India", "process equipment manufacturer in Surat",
        "heavy fabrication company in Surat", "pressure vessel fabrication", "ASME-ready fabrication",
        "MS process vessel", "CS process vessel", "SS process vessel", "NDT", "UT", "RT",
        "pressure testing", "leak testing", "material traceability", "inspection documentation",
      ],
    },
  },
  "custom-chemical-process-equipment-manufacturer": {
    title: "Custom Chemical Process Equipment Manufacturer in India",
    headline: "Chemical Process Equipment Manufacturer in Surat",
    description:
      "National Engineers & Steel Fabricators is a trusted custom chemical process equipment manufacturer in India, offering custom fabricated process equipment for chemical plants, process industries, utility systems, specialty manufacturing, pharma, food processing, water treatment and industrial plant applications.",
    pagePath:
      "/products/custom-chemical-process-equipment-manufacturer",
    image: "/product/Final_half_coil_vessel.webp",
    imageAlt:
      "Custom chemical process equipment fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Product Type", value: "Custom Chemical Process Equipment" },
      { label: "Materials", value: "MS, CS, SS or alloy steel" },
      { label: "Build Scope", value: "Vessels, skids, shells and modules" },
      { label: "Design Basis", value: "Drawing, datasheet and P&ID" },
    ],
    overview: [
      "Based in Sachin GIDC, Surat, Gujarat, we manufacture chemical process equipment as per client drawings, datasheets, P&ID, process duty, service fluid, operating pressure, operating temperature, material of construction, corrosion requirement, nozzle orientation, layout constraints, inspection plan and documentation needs.",
      "Our chemical process equipment fabrication solutions are designed for industries that require durable, corrosion-aware, maintainable and installation-ready equipment instead of standard off-the-shelf products.",
    ],
    sections: [
      {
        title: "Chemical Process Equipment Manufacturer in Surat",
        body: [
          "National Engineers & Steel Fabricators is an experienced chemical process equipment manufacturer in Surat, offering custom fabrication for process vessels, shells, housings, process modules, equipment supports, skid-mounted systems and plant-integrated fabricated assemblies.",
          "As a chemical process equipment manufacturer in India, we support clients with project-specific fabrication based on process conditions, chemical compatibility, site layout, connection sizes, pressure duty, temperature duty and inspection requirements.",
          "Each product is manufactured with proper attention to material selection, fit-up, welding quality, nozzle accuracy, surface protection, testing, documentation and long service life.",
        ],
      },
      {
        title: "Custom Process Equipment Manufacturer",
        body: [
          "Every chemical plant has different process duties, service fluids, corrosion conditions, installation limitations and maintenance requirements. That is why National Engineers & Steel Fabricators provides custom process equipment manufacturing as per client-specific drawings and duty conditions.",
          "As a custom process equipment manufacturer and chemical process equipment supplier, we manufacture equipment for mixing, holding, heat transfer support, filtration, process skids, utility systems, plant modification and special-purpose chemical processing applications.",
          "Our custom fabricated process equipment can be built with required nozzles, supports, access openings, mounting provisions, coating, lining, insulation readiness and documentation as per project scope.",
        ],
      },
      {
        title: "Chemical Equipment Fabrication for Industrial Plants",
        body: [
          "Chemical equipment fabrication requires proper material selection, corrosion protection, controlled welding, inspection readiness and practical plant integration. Equipment used in chemical plants must match the service fluid, temperature, pressure, layout and maintenance access requirements.",
          "National Engineers & Steel Fabricators manufactures industrial process equipment for clients who need fabrication support for new projects, plant expansion, retrofit jobs, replacement equipment and custom process packages.",
          "Our chemical equipment fabrication scope can include:",
        ],
        bullets: [
          "Process vessels", "Chemical process vessels", "Equipment shells and housings", "Process modules",
          "Equipment support structures", "Skid-mounted process equipment", "Utility vessels and packages",
          "Nozzle and connection fabrication", "Access and maintenance provisions", "Coating, lining and surface protection",
          "Testing, inspection and documentation support",
        ],
      },
      {
        title: "Industrial Process Equipment for Chemical Applications",
        body: [
          "National Engineers & Steel Fabricators manufactures industrial process equipment for chemical process plants where reliability, maintainability and fabrication accuracy are important.",
          "Our process equipment can be used for holding, buffering, mixing, filtration support, heating or cooling support, process integration, utility service and plant-specific duties.",
          "As a process equipment manufacturer in India, we focus on practical fabrication quality, correct nozzle orientation, suitable material of construction, proper support planning and equipment readiness for plant installation.",
        ],
      },
      {
        title: "Process Vessels, Skids and Modules",
        body: [
          "National Engineers & Steel Fabricators manufactures chemical process vessels, process skids and process modules as per client drawings and process requirements.",
          "As a process vessels manufacturer and process skids manufacturer, we can fabricate equipment that integrates with piping, valves, instruments, supports and plant layout requirements.",
          "Our process modules can be designed for compact installation, faster site integration and controlled shop-floor fabrication. This helps reduce site work, improve inspection control and support project timelines.",
        ],
      },
      {
        title: "Materials of Construction",
        body: ["National Engineers & Steel Fabricators manufactures chemical process equipment using suitable material based on service fluid, temperature, pressure, corrosion condition, hygiene requirement and client specification.", "Common material options include:"],
        bullets: [
          "Mild Steel", "Carbon Steel", "Stainless Steel", "Alloy Steel as per requirement",
          "Rubber-lined construction if required", "FRP-lined construction if required", "Internally coated process equipment",
          "Externally painted or coated equipment", "Special MOC as per client specification",
        ],
      },
      {
        title: "Types of Chemical Process Equipment We Manufacture",
        body: ["National Engineers & Steel Fabricators manufactures custom chemical process equipment based on process duty, plant layout and project specifications.", "Common fabrication types include:"],
        bullets: [
          "Custom chemical process equipment", "Chemical process vessels", "Industrial process equipment", "Custom process equipment",
          "Process vessels", "Special purpose process vessels", "Process skids", "Process modules", "Equipment shells",
          "Equipment housings", "Utility process equipment", "Chemical plant equipment", "Skid-mounted process packages",
          "Equipment supports", "Custom fabricated process equipment", "Retrofit-friendly process equipment",
        ],
      },
      {
        title: "Key Features",
        bullets: [
          "Custom-built chemical process equipment as per drawing and datasheet", "Suitable for chemical, process, utility and plant applications",
          "MS, CS, SS and alloy steel fabrication options", "Material selection based on chemical compatibility",
          "Nozzle orientation as per P&ID or client drawing", "Access openings, manways, vents and drains as required",
          "Equipment supports and mounting arrangements", "Skid-mounted or plant-integrated configuration options",
          "Coating and lining options for corrosion protection", "Insulation and cladding readiness where required",
          "ASME-ready fabrication support where pressure equipment is involved and specified",
          "TEMA-aligned fabrication support for exchanger-related scope where applicable",
          "NDT support such as UT or RT as per project requirement", "Pressure testing and leak testing where applicable",
          "Inspection reports, traceability records and documentation support as agreed",
        ],
      },
      {
        title: "Applications",
        body: ["Our custom chemical process equipment is used across different industries and applications, including:"],
        bullets: [
          "Chemical process plants", "Specialty chemical manufacturing", "Pharmaceutical industries", "Food and beverage processing units",
          "Water treatment plants", "Utility systems", "Process skids and package units", "Plant retrofit projects",
          "Plant expansion projects", "Process media handling", "Chemical storage and handling", "Filtration and utility packages",
          "Heat transfer support equipment", "Manufacturing plants", "Engineering industries", "Heavy fabrication projects",
        ],
      },
      {
        title: "Technical Specifications",
        table: {
          columns: ["Specification", "Details"],
          rows: [
            ["Product Type", "Custom Chemical Process Equipment"], ["Equipment Category", "Process Equipment / Custom Fabrication"],
            ["Application", "Chemical processing, utility service, process media handling and plant integration"],
            ["Material of Construction", "Mild Steel, Carbon Steel, Stainless Steel, Alloy Steel or as per requirement"],
            ["Fabrication Scope", "Vessels, shells, housings, process modules, skids, supports and fabricated assemblies"],
            ["Service Media", "Chemical fluid, process liquid, gas, water, utility media or as per application"],
            ["Design Basis", "Client drawing, datasheet, P&ID, process duty or project specification"],
            ["Operating Pressure", "As per process condition"], ["Operating Temperature", "As per project requirement"],
            ["Nozzle Connection", "As per P&ID, nozzle schedule or client drawing"],
            ["Access Provision", "Manway, inspection opening, drain, vent or special access as required"],
            ["Mounting Arrangement", "Leg support, saddle support, base frame, skid-mounted or custom mounting"],
            ["Surface Protection", "Painting, coating, rubber lining, FRP lining or other protection as required"],
            ["Testing", "Pressure testing, leak testing or strength testing as applicable"], ["NDT", "UT, RT or other NDT as per project requirement"],
            ["Documentation", "Material traceability, inspection reports, test reports and documentation pack as agreed"],
            ["Customization", "Available as per drawing, duty condition, MOC, layout and inspection scope"],
          ],
        },
      },
      {
        title: "Custom Fabrication Scope",
        body: ["Our chemical process equipment fabrication scope can be customized based on project requirement and client specification.", "Scope may include:"],
        bullets: [
          "Shell fabrication", "Vessel fabrication", "Equipment housing fabrication", "Process module fabrication",
          "Skid base frame fabrication", "Nozzle fabrication and installation", "Manway and access opening fabrication",
          "Equipment support fabrication", "Lifting lug and handling arrangement", "Mounting and base frame provision",
          "Internal support or baffle provision", "Surface preparation and painting", "Coating or lining support",
          "NDT as per requirement", "Pressure testing and leak testing", "Inspection reports and documentation",
        ],
      },
      {
        title: "Fabrication and Quality Control",
        body: ["Every custom chemical process equipment is fabricated with proper attention to material verification, fit-up, welding quality, dimensional accuracy, nozzle alignment, support arrangement, surface protection and inspection readiness.", "Quality checks may include:"],
        bullets: [
          "Material verification", "Drawing and datasheet review", "Chemical compatibility review as per client input",
          "Fit-up inspection", "Welding quality checks", "Dimensional inspection", "Nozzle orientation verification",
          "Support and mounting alignment checks", "NDT such as UT or RT as specified", "Pressure testing where applicable",
          "Leak testing as required", "Coating or lining inspection if applicable", "Final painting and finishing inspection",
          "Material traceability and documentation compilation as agreed",
        ],
      },
      {
        title: "Engineering and Compliance Support",
        body: [
          "National Engineers & Steel Fabricators manufactures chemical process equipment as per client specifications, approved drawings, inspection plans and project requirements.",
          "Where applicable, fabrication can be aligned with ASME-ready pressure equipment fabrication support, TEMA-aligned exchanger-related fabrication support, project-specific inspection plans, client-defined acceptance criteria, third-party inspection, documentation and traceability requirements.",
          "Final code compliance, design approval and certification requirements should be confirmed as per applicable design code, client specification and authorized engineering review.",
        ],
      },
      {
        title: "Why Choose National Engineers?",
        body: ["National Engineers & Steel Fabricators is a trusted custom chemical process equipment manufacturer, chemical process equipment supplier and process equipment manufacturer in Surat, Gujarat. We provide custom fabrication support for industries that need durable, corrosion-aware and inspection-ready process equipment.", "Reasons to work with us:"],
        bullets: [
          "Experienced chemical process equipment manufacturer in India", "Reliable chemical process equipment manufacturer in Surat, Gujarat",
          "Custom process equipment fabrication as per drawing and datasheet", "Chemical plant equipment manufacturer for industrial applications",
          "Process vessels, process skids and process modules fabrication support", "MS, CS, SS and alloy steel fabrication capability",
          "Heavy fabrication company in Surat for industrial projects", "Coating and lining options for corrosion protection",
          "ASME-ready and TEMA-aligned fabrication support where applicable", "NDT, UT, RT, pressure testing and leak testing support as agreed",
          "Material traceability, inspection records and documentation support",
          "Fabrication for chemical, pharma, food, water treatment, utility and process industries",
        ],
      },
      {
        title: "Details Required for Quotation",
        body: ["To provide the right quotation for custom chemical process equipment, please share:"],
        bullets: [
          "Drawing or datasheet", "P&ID or process requirement", "Process duty", "Service fluid", "Chemical compatibility requirement",
          "Required capacity or dimensions", "Operating pressure", "Operating temperature", "Material of construction",
          "Corrosion allowance", "Nozzle schedule", "Layout constraints", "Mounting or support requirement",
          "Coating or lining requirement", "NDT requirement", "Pressure or leak testing requirement",
          "Documentation requirement", "Delivery location and timeline",
        ],
      },
      {
        title: "Get a Quote for Custom Chemical Process Equipment",
        body: [
          "Looking for a custom chemical process equipment manufacturer and supplier in India?",
          "Share your drawings, datasheets, process duty, service fluid, operating conditions, MOC, nozzle schedule, layout constraints, testing scope and documentation needs with National Engineers & Steel Fabricators. Our team will review your requirement and provide a suitable chemical process equipment fabrication solution for your industrial application.",
        ],
      },
    ],
    note:
      "Share your drawings, datasheets, process duty, service fluid, operating conditions, MOC, nozzle schedule, layout constraints, testing scope and documentation needs.",
    enquiry: {
      title: "Request a quote for Custom Chemical Process Equipment",
      subtitle:
        "Share drawings, datasheets, process duty, service fluid, operating conditions, MOC, layout and testing requirements.",
      productName: "Custom Chemical Process Equipment",
      buttonText: "Request Quote",
    },
    faqs: [
      { question: "What is custom chemical process equipment?", answer: "Custom chemical process equipment refers to fabricated equipment designed and manufactured as per specific chemical process duty, service fluid, layout, operating condition, MOC and project requirement." },
      { question: "Who is a chemical process equipment manufacturer in Surat?", answer: "National Engineers & Steel Fabricators is a chemical process equipment manufacturer in Surat, Gujarat, offering custom fabricated process equipment as per client drawings, datasheets, P&ID and inspection requirements." },
      { question: "Do you manufacture chemical process equipment in India?", answer: "Yes, National Engineers & Steel Fabricators is a chemical process equipment manufacturer and supplier in India, providing custom vessels, shells, housings, process skids, modules and fabricated assemblies." },
      { question: "Can chemical process equipment be fabricated as per drawing?", answer: "Yes, chemical process equipment can be fabricated as per client drawings, datasheets, P&ID, process duty, service fluid, MOC, nozzle schedule, layout constraints, testing scope and documentation needs." },
      { question: "Which materials are used for chemical process equipment?", answer: "Chemical process equipment can be fabricated in mild steel, carbon steel, stainless steel, alloy steel or lined construction depending on service fluid, chemical compatibility, temperature, pressure and corrosion requirement." },
      { question: "Do you manufacture process vessels and process skids?", answer: "Yes, National Engineers & Steel Fabricators manufactures process vessels, process skids, process modules, equipment shells, housings and custom fabricated process equipment for industrial applications." },
      { question: "What surface protection options are available?", answer: "Surface protection options may include painting, coating, rubber lining, FRP lining, internal coating, external coating or other protection systems as per chemical compatibility and project specification." },
      { question: "What testing is done for chemical process equipment?", answer: "Testing may include dimensional inspection, nozzle orientation checking, NDT such as UT or RT, pressure testing, leak testing, coating inspection and final fabrication inspection as per project requirement." },
      { question: "What details are required to get a quotation?", answer: "To get a quotation, you can share drawings, datasheets, process duty, service fluid, MOC, pressure, temperature, nozzle schedule, layout constraints, coating or lining requirement, testing and documentation needs." },
      { question: "How is chemical process equipment price calculated?", answer: "Price depends on equipment size, MOC, thickness, fabrication complexity, nozzle quantity, supports, coating, lining, NDT, testing, documentation, inspection scope and customization requirements." },
    ],
    seo: {
      title: "Custom Chemical Process Equipment Manufacturer in India",
      description:
        "NESF is a Custom chemical process equipment manufacturer in Surat, India, offering vessels, skids, shells, supports, testing and fabrication.",
      keywords: [
        "custom chemical process equipment manufacturer", "chemical process equipment manufacturer", "chemical process equipment supplier",
        "chemical process equipment manufacturer in India", "chemical process equipment manufacturer in Surat",
        "custom process equipment manufacturer", "process equipment manufacturer in India", "process equipment manufacturer in Surat",
        "industrial process equipment", "chemical plant equipment manufacturer", "chemical equipment fabrication",
        "custom fabricated process equipment", "process vessels manufacturer", "chemical process vessel manufacturer",
        "process skids manufacturer", "process modules manufacturer", "equipment supports fabrication", "process equipment fabrication",
        "SS chemical process equipment", "CS chemical process equipment", "MS chemical process equipment",
        "heavy fabrication company in Surat", "ASME-ready fabrication", "TEMA-aligned fabrication", "NDT", "UT", "RT",
        "pressure testing", "leak testing", "coating and lining",
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
    robots: { index: true, follow: true },
  });
}
