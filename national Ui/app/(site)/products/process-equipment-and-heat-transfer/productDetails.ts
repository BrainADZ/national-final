import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import type { ProductDetail } from "../pressure-vessels-and-storage/productDetails";

export const CATEGORY_NAME = "Process Equipment & Heat Transfer";

export const processEquipmentNav = [
  {
    label: "Condensers & Water Condensers",
    href: "/products/condensers-water-condensers",
  },
  {
    label: "Heat Exchanger Shells / Columns",
    href: "/products/heat-exchanger-shells-columns",
  },
  {
    label: "Process Skids & Packages",
    href: "/products/process-skids-packages",
  },
  {
    label: "Special Purpose Process Vessels",
    href: "/products/special-purpose-process-vessels",
  },
  {
    label: "Chemical Process Equipment (Custom)",
    href: "/products/custom-chemical-process-equipment",
  },
];

export const productDetails = {
  "condensers-water-condensers": {
    title: "Condensers Manufacturer and Supplier in India",
    headline: "Condenser Manufacturer in Surat",
    description:
      "National Engineers & Steel Fabricators is a trusted condensers manufacturer and supplier in India, offering custom-built industrial condensers and water condensers for process cooling, heat transfer, vapor condensation, utility circuits and continuous-duty plant operations.",
    pagePath:
      "/products/condensers-water-condensers",
    image: "/product/25.png",
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
  "heat-exchanger-shells-columns": {
    title: "Heat Exchanger Shells & Columns",
    headline: "Precision-Fabricated Shells and Columns for Industrial Projects",
    description:
      "Precision-fabricated heat exchanger shells and process columns with controlled fit-up, nozzle orientation accuracy, documented inspection, and project-ready deliverables.",
    pagePath:
      "/products/heat-exchanger-shells-columns",
    image: "/product/23.jpeg",
    imageAlt:
      "Heat exchanger shell and process column fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Build Scope", value: "Shells, channels, heads, columns" },
      { label: "Accuracy", value: "Fit-up and nozzle orientation checks" },
      { label: "Inspection", value: "NDT, pressure, and leak tests" },
      { label: "Deliverables", value: "Inspection and documentation pack" },
    ],
    overview: [
      "NESF fabricates heat exchanger shells and process columns for demanding industrial environments.",
      "We focus on dimensional accuracy, weld integrity, nozzle orientation accuracy, and inspection readiness so your equipment integrates smoothly with piping, instrumentation, and structural supports.",
    ],
    sections: [
      {
        title: "Scope of Fabrication",
        bullets: [
          "Shells, channels, covers, and heads as per design.",
          "Small to heavy-duty process columns with platforms and supports when required.",
          "Nozzles, manways, lifting lugs, supports, and saddles.",
          "Internals handling support as applicable to the project scope.",
        ],
      },
      {
        title: "Engineering & Compliance",
        body: [
          "Fabrication is aligned to client specifications and applicable project requirements.",
        ],
        bullets: [
          "TEMA expectations for shell-and-tube mechanical construction where applicable to the exchanger shell scope.",
          "ASME BPVC-aligned pressure equipment practices where specified by the client.",
          "Project-specific drawings, inspection plans, and acceptance criteria.",
        ],
      },
      {
        title: "QA / Inspection Readiness",
        bullets: [
          "Controlled welding and fit-up practices.",
          "NDT as specified, including UT or RT where required.",
          "Pressure and leak tests where applicable.",
          "Dimensional checks and nozzle orientation verification.",
          "Inspection records and documentation pack.",
        ],
      },
      {
        title: "Typical Industries",
        body: [
          "Chemical processing, petroleum-related processing, utilities, specialty manufacturing, and custom industrial projects.",
        ],
      },
      {
        title: "What You Receive",
        bullets: [
          "Fabricated exchanger shells or process columns as per agreed scope.",
          "Fit-up, dimensional, and nozzle orientation inspection records.",
          "NDT and pressure or leak test reports where applicable.",
          "Project-ready documentation aligned to the agreed format.",
        ],
      },
      {
        title: "Quotation Inputs",
        bullets: [
          "Client drawing, datasheet, or basic process data and layout.",
          "Material of construction and corrosion allowance.",
          "Design and operating pressure and temperature.",
          "Inspection plan, NDT, testing, and documentation requirements.",
          "Platform, support, internals handling, and delivery requirements.",
        ],
      },
    ],
    note:
      "Send your drawing or specification, or share your basic process data and layout. NESF can fabricate to your inspection plan and documentation format.",
    enquiry: {
      title: "Request a quote for Heat Exchanger Shells & Columns",
      subtitle:
        "Share your drawings, process data, material requirements, inspection plan, and documentation format.",
      productName: "Heat Exchanger Shells & Columns",
      buttonText: "Request Quote",
    },
    seo: {
      title: "Heat Exchanger Shells & Columns | Heavy Fabrication by NESF",
      description:
        "Precision-fabricated exchanger shells and columns with documented inspection, fit-up accuracy, and project-ready deliverables.",
      keywords: [
        "heat exchanger shell manufacturer",
        "process column fabrication",
        "heavy fabrication india",
        "exchanger shell fabrication",
        "industrial process column manufacturer",
      ],
    },
  },
  "process-skids-packages": {
    title: "Process Skid Manufacturer and Supplier in India",
    headline: "Process Skid Manufacturer in Surat",
    description:
      "National Engineers & Steel Fabricators is a trusted process skid manufacturer and supplier in India, offering custom process skids and skid-mounted process packages for chemical plants, water treatment systems, utility systems, filtration packages, dosing systems, process equipment and industrial plant applications.",
    pagePath:
      "/products/process-skids-packages",
    image: "/product/22.jpeg",
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
  "special-purpose-process-vessels": {
    title: "Special Purpose Process Vessel Manufacturer and Supplier in India",
    headline: "Special Purpose Process Vessel Manufacturer in Surat",
    description:
      "National Engineers & Steel Fabricators is a trusted special purpose process vessel manufacturer and supplier in India, offering custom fabricated process vessels for chemical plants, process industries, utility systems, water treatment plants, specialty manufacturing, pharma, food processing and industrial plant applications.",
    pagePath:
      "/products/special-purpose-process-vessels",
    image: "/product/24.jpeg",
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
  "custom-chemical-process-equipment": {
    title: "Custom Chemical Process Equipment Manufacturer in India",
    headline: "Chemical Process Equipment Manufacturer in Surat",
    description:
      "National Engineers & Steel Fabricators is a trusted custom chemical process equipment manufacturer in India, offering custom fabricated process equipment for chemical plants, process industries, utility systems, specialty manufacturing, pharma, food processing, water treatment and industrial plant applications.",
    pagePath:
      "/products/custom-chemical-process-equipment",
    image: "/product/Final_half_coil_vessel.jpeg",
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
    robots: { index: false, follow: false },
  });
}
