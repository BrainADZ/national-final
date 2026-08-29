import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import type { ProductDetail } from "../pressure-vessels-and-storage/productDetails";

export const CATEGORY_NAME = "HVAC & Industrial Ducting";

export const hvacDuctingNav = [
  {
    label: "AHU Ducts (GI / SS)",
    href: "/products/ahu-ducts-gi-ss",
  },
  {
    label: "Industrial Ducting Systems",
    href: "/products/industrial-ducting-systems",
  },
  {
    label: "Transitions / Reducers / Elbows",
    href: "/products/transitions-reducers-elbows",
  },
  {
    label: "Insulated Duct Casing",
    href: "/products/insulated-duct-casing",
  },
];

export const productDetails = {
  "ahu-ducts-gi-ss": {
    title: "AHU Duct Manufacturer and Supplier in India",
    headline: "AHU Duct Manufacturer in Surat",
    description:
      "National Engineers & Steel Fabricators is a trusted AHU duct manufacturer and supplier in India, offering custom GI and SS AHU ducting for air handling units, HVAC systems, supply air lines, return air lines, fresh air lines, plant HVAC rooms, clean areas, utility buildings and industrial air distribution systems.",
    pagePath: "/products/ahu-ducts-gi-ss",
    image: "/product/13.jpg",
    imageAlt: "GI and stainless steel AHU ducts fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Product Type", value: "AHU Ducts / GI Ducts / SS Ducts" },
      { label: "Applications", value: "Supply, return and fresh air" },
      { label: "Materials", value: "GI, galvanized steel or stainless steel" },
      { label: "Build Basis", value: "Approved duct layout and airflow duty" },
    ],
    overview: [
      "Based in Sachin GIDC, Surat, Gujarat, we manufacture AHU ducts as per client duct layout, airflow requirement, duct size, pressure class, material specification, joint details, flange details, access requirement, take-off arrangement, finish requirement, inspection scope, packing requirement and delivery schedule.",
      "Our AHU duct fabrication solutions are suitable for commercial, industrial and process facilities that require stable airflow, low leakage, clean finish, accurate fit-up and installation-ready HVAC ducting.",
    ],
    sections: [
      {
        title: "AHU Duct Manufacturer in Surat",
        body: ["National Engineers & Steel Fabricators is an experienced AHU duct manufacturer in Surat, offering custom duct fabrication for air handling units, HVAC rooms, utility buildings, pharmaceutical plants, food facilities, clean areas, industrial plants and process facilities.", "As an AHU duct manufacturer in India, we fabricate GI ducts, stainless steel ducts, supply-air ducts, return-air ducts, fresh-air ducts, duct risers, plenums, grille neck pieces, diffuser neck pieces, take-offs and duct accessories as per approved duct layout and project specifications.", "Each AHU duct is manufactured with attention to duct size, fit-up accuracy, seam quality, joint workmanship, flange alignment, access provision, surface finish and site-friendly installation."],
      },
      {
        title: "GI and SS AHU Ducting",
        body: ["National Engineers & Steel Fabricators manufactures AHU ducts in galvanized iron and stainless steel based on the application, air quality requirement, environment, cleanliness level and client specification.", "GI AHU ducts are commonly used for standard commercial and industrial HVAC applications where strong, cost-effective and durable ducting is required.", "SS AHU ducts are used where corrosion resistance, hygiene, cleanliness, clean finish or process-area compatibility is required. Stainless steel ducting is suitable for clean areas, pharmaceutical facilities, food processing units and specific industrial environments."],
      },
      {
        title: "HVAC Ducting for Air Distribution",
        body: ["AHU ducting is used to distribute conditioned or fresh air from the air handling unit to different areas of a building or industrial facility. Proper duct fabrication helps support stable airflow, low leakage, reduced installation issues and better HVAC performance.", "National Engineers & Steel Fabricators fabricates HVAC ducting for supply air, return air and fresh air movement. Our fabrication is based on approved layouts, duct sizes, pressure class, airflow duty and connection details shared by the client."],
      },
      {
        title: "Custom AHU Duct Fabrication",
        body: ["Every HVAC layout has different air routes, duct sizes, pressure requirements, access needs, equipment connections and site constraints. That is why National Engineers & Steel Fabricators provides custom AHU duct fabrication as per drawing instead of standard duct supply.", "Our AHU duct fabrication scope can include:"],
        bullets: ["Supply-air duct fabrication", "Return-air duct fabrication", "Fresh-air duct fabrication", "AHU plenum fabrication", "Duct riser fabrication", "Duct take-off fabrication", "Grille neck fabrication", "Diffuser neck fabrication", "Rectangular duct fabrication", "Round duct fabrication where required", "GI duct fabrication", "Stainless steel duct fabrication", "Access door provision", "Inspection opening provision", "Flexible connection provision", "Flanged ducting sections", "Site-friendly modular duct sections", "Surface finish and marking as specified", "Packing and dispatch support"],
      },
      {
        title: "AHU Plenums, Risers and Take-Offs",
        body: ["AHU ducting systems often require plenums, risers and take-offs for proper air distribution and equipment connection.", "National Engineers & Steel Fabricators manufactures AHU plenums, duct risers and take-off sections as per duct layout, site requirement and airflow distribution needs.", "Our fabrication can support:"],
        bullets: ["AHU outlet plenums", "Return air plenums", "Fresh air plenums", "Vertical duct risers", "Grille neck pieces", "Diffuser neck pieces", "Branch take-offs", "Reducer sections", "Transition sections", "Equipment connection sections"],
      },
      {
        title: "Low-Leakage and Fit-Up Focused Duct Fabrication",
        body: ["AHU ductwork should be fabricated with proper seam quality, joint alignment and flange workmanship to reduce leakage and support stable airflow.", "Our fabrication approach focuses on:"],
        bullets: ["Accurate duct dimensions", "Proper seam workmanship", "Correct flange alignment", "Site-friendly fit-up", "Clean surface finish", "Access provision where required", "Practical modular sections", "Proper marking and packing", "Smooth installation with minimum site correction"],
      },
      {
        title: "Types of AHU Ducts We Manufacture",
        body: ["National Engineers & Steel Fabricators manufactures custom AHU ducts and HVAC ducting components for different air distribution requirements.", "Common types include:"],
        bullets: ["AHU ducts", "GI AHU ducts", "SS AHU ducts", "Supply air ducts", "Return air ducts", "Fresh air ducts", "HVAC ducts", "Industrial HVAC ducting", "Commercial HVAC ducting", "AHU plenums", "Duct risers", "Duct take-offs", "Grille neck pieces", "Diffuser neck pieces", "Access door duct sections", "Flexible connection duct sections", "Custom AHU ducting as per drawing"],
      },
      {
        title: "Key Features",
        bullets: ["Custom-built AHU ducts as per approved layout", "Suitable for supply, return and fresh-air ducting", "GI and stainless steel construction options", "AHU plenums, risers and take-offs", "Grille and diffuser neck pieces", "Access doors and inspection openings", "Flexible-connection provisions", "Low-leakage duct fabrication focus", "Stable airflow and clean finish support", "Flange, joint and seam workmanship checks", "Accurate duct dimensions for site-friendly installation", "Commercial and industrial HVAC ducting support", "SS ducting for hygienic or corrosive environments", "Marking, packing and dispatch support", "Fabrication as per client specification and inspection requirement"],
      },
      {
        title: "Applications",
        body: ["Our AHU ducts and HVAC ducting components are used across different air distribution applications, including:"],
        bullets: ["Air handling unit ducting", "Supply air ducting", "Return air ducting", "Fresh air ducting", "Commercial HVAC systems", "Industrial HVAC systems", "Plant HVAC rooms", "Utility buildings", "Clean areas", "Pharmaceutical facilities", "Food processing facilities", "Process facilities", "Industrial air distribution systems", "HVAC retrofit projects", "Duct replacement jobs", "Custom air ducting layouts"],
      },
      {
        title: "Materials of Construction",
        body: ["National Engineers & Steel Fabricators manufactures AHU ducts using suitable material based on application, environment, hygiene requirement, corrosion condition, air quality requirement and client specification.", "Common material options include:", "GI ducting is suitable for standard HVAC ducting applications, while SS ducting is suitable for hygienic, corrosive, high-cleanliness or process-area applications."],
        bullets: ["Galvanized Iron", "Galvanized Steel", "Stainless Steel 304", "Stainless Steel 316", "Stainless Steel 316L", "Painted ducting where specified", "Special MOC as per client specification"],
      },
      {
        title: "Technical Specifications",
        table: { columns: ["Specification", "Details"], rows: [["Product Type", "AHU Ducts / GI Ducts / SS Ducts"], ["Equipment Category", "HVAC & Industrial Ducting"], ["Application", "Supply air, return air, fresh air and HVAC air distribution"], ["Build Basis", "Approved duct layout, airflow duty, duct size and project specification"], ["Material of Construction", "GI, galvanized steel, stainless steel or as per requirement"], ["Duct Shape", "Rectangular, round or custom as per layout"], ["Duct Size", "As per approved duct drawing"], ["Pressure Class", "As per HVAC design requirement"], ["Airflow Requirement", "As per project duty"], ["Components", "Ducts, plenums, risers, take-offs, grille necks and diffuser necks"], ["Joint Type", "Flanged, slip joint, bolted or as per project requirement"], ["Access Provision", "Access doors, inspection openings and flexible-connection provision as required"], ["Surface Finish", "GI finish, SS finish, painted or finished as per requirement"], ["Standards / Practice", "As per client specification, applicable duct material requirement and recognized duct-construction practice where specified"], ["Inspection", "Dimensional checks, seam checks, joint checks and finish checks"], ["Packing", "Marked and packed for site installation"], ["Documentation", "Inspection records and documentation pack as agreed"], ["Customization", "Available as per layout, material, airflow, pressure class, access and finish requirement"]] },
      },
      {
        title: "Fabrication and Quality Control",
        body: ["Every AHU duct is fabricated with proper attention to material verification, cutting, forming, seam workmanship, flange alignment, fit-up accuracy, surface finish and packing requirements.", "Quality checks may include:"],
        bullets: ["Material verification", "Duct layout review", "Duct size verification", "Fit-up inspection", "Seam workmanship checks", "Joint and flange checking", "Access door and opening verification", "Take-off and neck-piece alignment checks", "Dimensional inspection", "Surface finish checks", "Marking and identification checks", "Packing and dispatch readiness checks", "Documentation compilation as agreed"],
      },
      {
        title: "Site Installation and Integration Support",
        body: ["AHU ducts must connect properly with AHU units, plenums, risers, branches, grilles, diffusers and flexible connections. Proper fabrication and marking help reduce installation delays and site modifications.", "Our installation-focused fabrication approach includes:"],
        bullets: ["Modular duct sections", "Accurate flange interface", "Correct duct section marking", "Site-friendly packing", "Access and inspection provisions", "Fit-up accuracy for AHU interface", "Branch and take-off alignment", "Grille and diffuser neck accuracy", "Coordination with approved duct layout"],
      },
      {
        title: "Why Choose National Engineers?",
        body: ["National Engineers & Steel Fabricators is a trusted AHU duct manufacturer, HVAC ducting manufacturer and duct fabrication company in Surat, Gujarat. We provide custom AHU ducting for commercial, industrial and process HVAC applications.", "Reasons to work with us:"],
        bullets: ["Experienced AHU duct manufacturer in India", "Reliable AHU duct supplier in Surat, Gujarat", "GI and SS AHU duct fabrication capability", "Supply-air, return-air and fresh-air ducting support", "AHU plenums, risers and take-offs", "Grille and diffuser neck-piece fabrication", "Custom HVAC duct fabrication as per approved layout", "Low-leakage and stable-airflow fabrication focus", "Fit-up, seam, joint and finish checks", "SS ducting support for clean or corrosive areas", "Marking, packing and dispatch support", "Fabrication for commercial buildings, plants, clean areas, pharma and food facilities"],
      },
      {
        title: "Details Required for Quotation",
        body: ["To provide the right quotation for AHU ducts, please share:"],
        bullets: ["Approved duct layout", "Duct sizes", "Airflow requirement", "Pressure class", "Material requirement", "GI or SS grade and thickness", "Joint and flange details", "AHU interface details", "Grille and diffuser neck details", "Take-off details", "Access door or inspection opening requirement", "Flexible connection provision", "Finish requirement", "Marking and packing requirement", "Inspection requirement", "Delivery location and timeline"],
      },
      {
        title: "Get a Quote for AHU Ducts",
        body: ["Looking for an AHU duct manufacturer and supplier in India?", "Share your approved duct layout, duct sizes, airflow duty, pressure class, material specification, connection details, access requirements and finish requirements with National Engineers & Steel Fabricators. Our team will review your requirement and provide a suitable AHU duct fabrication solution for your HVAC project."],
      },
    ],
    note:
      "Share your approved duct layout, duct sizes, airflow duty, pressure class, material specification, connection details, access requirements and finish requirements.",
    enquiry: {
      title: "Request a quote for AHU Ducts (GI / SS)",
      subtitle: "Share your duct layout, sizes, airflow, materials, connections, and finish requirements.",
      productName: "AHU Ducts (GI / SS)",
      buttonText: "Request Quote",
    },
    faqs: [
      { question: "What are AHU ducts?", answer: "AHU ducts are air distribution ducts connected with air handling units to carry supply air, return air or fresh air within commercial, industrial or process HVAC systems." },
      { question: "Who is an AHU duct manufacturer in Surat?", answer: "National Engineers & Steel Fabricators is an AHU duct manufacturer in Surat, Gujarat, offering GI and SS AHU ducting as per approved duct layout, airflow duty, pressure class and material requirement." },
      { question: "Do you manufacture AHU ducts in India?", answer: "Yes, National Engineers & Steel Fabricators manufactures AHU ducts in India for HVAC systems, plant HVAC rooms, utility buildings, clean areas, pharmaceutical facilities, food facilities and industrial air distribution systems." },
      { question: "What is the difference between GI and SS AHU ducts?", answer: "GI AHU ducts are commonly used for standard HVAC applications, while SS AHU ducts are used where corrosion resistance, hygiene, clean finish or high-cleanliness requirements are important." },
      { question: "Can AHU ducts be fabricated as per drawing?", answer: "Yes, AHU ducts can be fabricated as per approved duct layout, duct size, airflow requirement, pressure class, material specification, connection details, access provision and finish requirement." },
      { question: "What components are included in AHU duct fabrication?", answer: "AHU duct fabrication can include supply-air ducts, return-air ducts, fresh-air ducts, plenums, risers, take-offs, grille neck pieces, diffuser neck pieces, access doors and flexible connection provisions." },
      { question: "Which materials are used for AHU ducting?", answer: "AHU ducting can be fabricated in GI, galvanized steel, stainless steel 304, stainless steel 316, stainless steel 316L or special material as per project requirement." },
      { question: "What details are required to get a quotation?", answer: "To get a quotation, you can share approved duct layout, duct sizes, airflow duty, pressure class, GI or SS grade, thickness, joint details, flange details, access requirements and finish requirements." },
      { question: "What quality checks are done for AHU ducts?", answer: "Quality checks may include dimensional checks, fit-up checks, seam workmanship checks, joint checks, flange alignment checks, access opening checks, surface finish checks, marking and packing checks." },
      { question: "How is AHU duct price calculated?", answer: "AHU duct price depends on duct size, total duct quantity, material, thickness, pressure class, joint type, flange details, access provisions, finish requirement, packing and delivery scope." },
    ],
    seo: {
      title: "AHU Duct Manufacturer & Supplier in India | NESF",
      description:
        "AHU duct manufacturer in Surat, India, offering GI and SS ducting, plenums, risers, take-offs and HVAC duct fabrication.",
      keywords: [
        "AHU duct manufacturer", "AHU duct manufacturer in India", "AHU duct manufacturer in Surat", "AHU duct supplier", "AHU ducting manufacturer", "AHU ducting manufacturer in India", "HVAC duct manufacturer", "HVAC ducting manufacturer", "HVAC ducting manufacturer in India", "HVAC ducting manufacturer in Surat", "GI duct manufacturer", "GI ducting manufacturer", "stainless steel duct manufacturer", "SS duct manufacturer", "SS ducting manufacturer", "industrial HVAC ducting", "commercial HVAC ducting", "supply air duct manufacturer", "return air duct manufacturer", "fresh air duct manufacturer", "air handling unit ducting", "AHU plenum manufacturer", "duct riser manufacturer", "duct take-off manufacturer", "grille neck manufacturer", "diffuser neck manufacturer", "low leakage ducting", "custom HVAC duct fabrication", "duct fabrication company in Surat", "GI and SS duct fabrication",
      ],
    },
  },
  "industrial-ducting-systems": {
    title: "Industrial Ducting System Manufacturer in India",
    headline: "Industrial Ducting System Manufacturer in Surat",
    description:
      "National Engineers & Steel Fabricators is a trusted industrial ducting system manufacturer in India, offering custom industrial ducting for ventilation, exhaust, dust extraction, fume extraction, process-air handling, utility-air routing and equipment interconnection across complex plant layouts.",
    pagePath: "/products/industrial-ducting-systems",
    image: "/product/13.jpg",
    imageAlt: "Industrial ducting system fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Product Type", value: "Industrial Ducting System" },
      { label: "Applications", value: "Ventilation, exhaust, dust, fumes and process air" },
      { label: "Materials", value: "GI, MS, CS, SS or as required" },
      { label: "Build Basis", value: "Layout, airflow duty and service condition" },
    ],
    overview: [
      "Based in Sachin GIDC, Surat, Gujarat, we manufacture industrial ducting systems as per client duct layout, airflow duty, service condition, duct size, pressure condition, temperature condition, dust or fume load, corrosion risk, material specification, support requirement, access requirement, inspection scope, coating requirement and delivery sequence.",
      "Our industrial ducting fabrication solutions are suitable for plants that require robust duct routing, accurate equipment interfaces, maintainable duct sections, reduced site modification and long-term ducting reliability.",
    ],
    sections: [
      {
        title: "Industrial Ducting System Manufacturer in Surat",
        body: ["National Engineers & Steel Fabricators is an experienced industrial ducting system manufacturer in Surat, offering custom ducting fabrication for process plants, chemical industries, manufacturing units, utility systems, dust collection lines, fume extraction systems, ventilation networks, scrubber connections, cyclone connections and general industrial exhaust applications.", "As an industrial ducting manufacturer in India, we fabricate duct spools, elbows, reducers, transitions, flanged duct sections, bolted duct sections, stiffened ducts, access-door duct sections, inspection openings, support-ready ducts and modular ducting assemblies as per project drawings and site requirements.", "Each ducting system is manufactured with attention to duct geometry, airflow path, pressure drop, support planning, flange alignment, access provision, welding quality, corrosion protection and site installation readiness."],
      },
      {
        title: "Custom Industrial Ducting Fabrication",
        body: ["Every industrial ducting layout has different airflow, routing, service condition, equipment interface and plant-space limitations. That is why National Engineers & Steel Fabricators provides custom industrial ducting fabrication as per drawing and duty condition.", "Our industrial ducting fabrication scope can include:"],
        bullets: ["Ventilation ducting fabrication", "Exhaust ducting fabrication", "Dust extraction ducting fabrication", "Fume extraction ducting fabrication", "Process air ducting fabrication", "Utility air ducting fabrication", "Fan inlet and outlet ducting", "Cyclone ducting connections", "Scrubber ducting connections", "Duct spool fabrication", "Duct elbow fabrication", "Duct reducer fabrication", "Duct transition fabrication", "Flanged ducting sections", "Bolted ducting sections", "Stiffened ducting assemblies", "Access doors and inspection openings", "Duct support and lifting provisions", "Surface preparation, painting and coating", "Modular packing and dispatch support"],
      },
      {
        title: "Industrial Ventilation and Exhaust Ducting",
        body: ["Industrial ventilation and exhaust ducting is used to remove air, fumes, heat, dust or process exhaust from plant areas and route it toward fans, cyclones, scrubbers, filters, stacks or discharge points.", "National Engineers & Steel Fabricators manufactures industrial ventilation ducting and exhaust ducting for plants where airflow stability, duct strength, routing accuracy and maintenance access are important.", "Our ducting can support:"],
        bullets: ["General plant ventilation", "Process area exhaust", "Heat exhaust movement", "Utility area exhaust", "Workshop ventilation", "Equipment exhaust routing", "Industrial air movement", "Process-air extraction"],
      },
      {
        title: "Dust Collection and Dust Extraction Ducting",
        body: ["Dust collection ducting is used to transfer dust-laden air from process points to dust collectors, cyclones, filters, scrubbers or other pollution control equipment.", "National Engineers & Steel Fabricators fabricates dust extraction ducting with suitable duct geometry, access provision, wear consideration, flange interface and support arrangement based on dust characteristics and airflow duty.", "Dust extraction ducting can be used for:"],
        bullets: ["Powder handling areas", "Bulk material transfer points", "Mineral handling lines", "Cement or fly ash handling", "Conveyor transfer points", "Bagging and packing areas", "Process equipment exhaust", "Cyclone and filter connections"],
      },
      {
        title: "Fume Extraction Ducting",
        body: ["Fume extraction ducting is used to capture and route fumes from welding areas, chemical process areas, heat-treatment zones, process tanks, exhaust hoods or equipment outlets.", "National Engineers & Steel Fabricators manufactures fume extraction ducting for industrial systems where corrosion risk, temperature, chemical exposure, access and safe routing must be considered.", "Fume extraction ducting may be fabricated in GI, MS, SS or other specified materials depending on fume type, temperature, moisture and corrosion condition."],
      },
      {
        title: "Process Air and Utility Air Ducting",
        body: ["Process air ducting and utility air ducting are used to route air between process equipment, utility systems, fans, blowers, filters, cyclones, scrubbers and plant equipment.", "National Engineers & Steel Fabricators fabricates process-air ducting for custom plant layouts where standard ducting sections may not match equipment interface, routing, support or access requirements.", "Our process ducting fabrication can include:"],
        bullets: ["Fan inlet ducting", "Fan outlet ducting", "Equipment interconnection ducting", "Utility air routing ducting", "Process ventilation ducting", "Duct spools for air handling lines", "Duct transitions for equipment connections", "Duct sections with access and inspection openings"],
      },
      {
        title: "Duct Spools, Elbows, Reducers and Transitions",
        body: ["Industrial ducting systems often require multiple fabricated sections to connect equipment across a plant layout. National Engineers & Steel Fabricators manufactures duct spools, elbows, reducers and transitions as per duct layout and interface dimensions.", "Common fabricated ducting components include:"],
        bullets: ["Straight duct spools", "Duct elbows", "Duct bends", "Reducer sections", "Transition sections", "Offset duct sections", "Round-to-rectangular duct transitions", "Rectangular-to-round duct transitions", "Fan connection sections", "Cyclone connection sections", "Scrubber connection sections", "Access-door duct sections", "Inspection-opening duct sections"],
      },
      {
        title: "Stiffened and Maintainable Duct Assemblies",
        body: ["Industrial ducting systems may require stiffeners, supports, inspection doors and removable sections to improve durability and maintainability.", "National Engineers & Steel Fabricators fabricates stiffened ducting assemblies where duct size, pressure condition, operating environment or site requirement demands additional strength.", "Maintainability provisions can include:"],
        bullets: ["Access doors", "Inspection openings", "Bolted duct sections", "Flanged duct sections", "Removable spool sections", "Clean-out access", "Support brackets", "Lifting lugs", "Maintenance-friendly duct splits", "Marking and modular packing"],
      },
      {
        title: "Types of Industrial Ducting Systems We Manufacture",
        body: ["National Engineers & Steel Fabricators manufactures custom industrial ducting systems and duct components for different industrial applications.", "Common types include:"],
        bullets: ["Industrial ducting systems", "Industrial ventilation ducting", "Industrial exhaust ducting", "Dust collection ducting", "Dust extraction ducting", "Fume extraction ducting", "Process-air ducting", "Utility-air ducting", "Fan ducting", "Cyclone ducting", "Scrubber ducting", "Industrial air ducting", "Modular ducting systems", "Flanged ducting", "Bolted ducting", "Stiffened ducting", "Duct spools", "Duct elbows", "Duct reducers", "Duct transitions", "Custom ducting systems as per drawing"],
      },
      {
        title: "Key Features",
        bullets: ["Custom-built industrial ducting systems as per layout", "Suitable for ventilation, exhaust, dust, fumes and process-air handling", "Duct spools, elbows, reducers and transition sections", "Fan, cyclone, scrubber and equipment interface ducting", "Flanged, bolted or welded duct sections", "Stiffened duct assemblies for industrial duty", "Access doors and inspection openings", "Removable sections for maintenance where required", "GI, MS, CS and SS fabrication options", "Material selection based on temperature and corrosion risk", "Support brackets, lifting points and installation-ready sections", "Modular duct fabrication for easier site installation", "Surface preparation, painting and coating support", "Dimensional checks and interface alignment checks", "Documentation support as agreed"],
      },
      {
        title: "Applications",
        body: ["Our industrial ducting systems are used across different ventilation, exhaust and process-air applications, including:"],
        bullets: ["Industrial ventilation systems", "General exhaust systems", "Dust collection systems", "Dust extraction systems", "Fume extraction systems", "Process-air handling systems", "Utility-air routing systems", "Fan inlet and outlet ducting", "Cyclone inlet and outlet ducting", "Scrubber inlet and outlet ducting", "Process equipment exhaust", "Heat exhaust routing", "Manufacturing plant air movement", "Chemical process exhaust", "Fertilizer plant exhaust", "Effluent treatment plant ventilation", "Steel plant ventilation", "General manufacturing facilities", "Industrial retrofit and duct replacement projects"],
      },
      {
        title: "Materials of Construction",
        body: ["National Engineers & Steel Fabricators manufactures industrial ducting systems using suitable material based on airflow duty, temperature, corrosion risk, dust loading, fume type, moisture, outdoor exposure and client specification.", "Common material options include:", "GI ducting is suitable for many ventilation and general ducting applications. MS and CS ducting are used for industrial-duty duct systems, while SS ducting is preferred where corrosion resistance, cleanliness or process compatibility is required."],
        bullets: ["Galvanized Iron", "Mild Steel", "Carbon Steel", "Stainless Steel 304", "Stainless Steel 316", "Stainless Steel 316L", "Painted ducting", "Coated ducting", "Lined ducting where required", "Special MOC as per client specification"],
      },
      {
        title: "Technical Specifications",
        table: { columns: ["Specification", "Details"], rows: [["Product Type", "Industrial Ducting System"], ["Equipment Category", "HVAC & Industrial Ducting"], ["Application", "Ventilation, exhaust, dust extraction, fume extraction and process-air handling"], ["Build Basis", "Duct layout, airflow duty, service condition, equipment interface or project specification"], ["Duct Type", "Straight spools, elbows, reducers, transitions, access sections and custom ducts"], ["Material of Construction", "GI, MS, CS, SS or as per requirement"], ["Duct Shape", "Rectangular, round, square or custom geometry"], ["Duct Size", "As per approved duct layout"], ["Airflow Requirement", "As per project duty"], ["Pressure Condition", "As per system requirement"], ["Temperature Condition", "As per process or exhaust condition"], ["Service Media", "Air, dust-laden air, fumes, exhaust air or process air"], ["Connection Type", "Flanged, bolted, welded or as per project requirement"], ["Components", "Spools, elbows, reducers, transitions, supports, access doors and inspection openings"], ["Stiffening", "Stiffeners and reinforcement as required"], ["Access Provision", "Access doors, clean-out points or inspection openings as required"], ["Support Type", "Brackets, support frames, lifting lugs or custom support provision"], ["Surface Finish", "GI finish, painted, coated, SS finish or as specified"], ["Standards / Practice", "SMACNA or IS 655 alignment where specified by project requirement"], ["Inspection", "Dimensional checks, fit-up checks, seam checks and interface alignment checks"], ["Packing", "Marked and packed for site installation"], ["Documentation", "Inspection records and documentation pack as agreed"], ["Customization", "Available as per layout, airflow, service, material, support, access and finish requirement"]] },
      },
      {
        title: "Fabrication and Quality Control",
        body: ["Every industrial ducting system is fabricated with proper attention to material verification, cutting, forming, fit-up, seam quality, welding quality, flange alignment, duct geometry, support planning and site installation readiness.", "Quality checks may include:"],
        bullets: ["Material verification", "Duct layout review", "Duct size verification", "Fit-up inspection", "Seam workmanship checks", "Welding quality checks", "Flange alignment checks", "Duct geometry checks", "Reducer and transition checks", "Access door and inspection opening checks", "Stiffener placement checks", "Support and lifting point verification", "Surface preparation checks", "Painting or coating checks", "Marking and packing checks", "Documentation compilation as agreed"],
      },
      {
        title: "Modular Fabrication and Site Integration",
        body: ["Industrial ducting systems are often spread across complex plant layouts. Modular duct fabrication helps reduce site work, improve fit-up and support faster installation.", "Our site integration focus includes:"],
        bullets: ["Modular duct spool planning", "Equipment interface accuracy", "Fan, cyclone and scrubber connection alignment", "Support location coordination", "Access and maintenance clearance", "Dismantling-friendly flanged or bolted sections", "Transport-friendly duct sections", "Marking and dispatch sequence support", "Site installation readiness"],
      },
      {
        title: "Why Choose National Engineers?",
        body: ["National Engineers & Steel Fabricators is a trusted industrial ducting system manufacturer, industrial ducting manufacturer and duct fabrication company in Surat, Gujarat. We provide custom ducting fabrication for plants that require durable, maintainable and installation-ready ducting systems.", "Reasons to work with us:"],
        bullets: ["Experienced industrial ducting system manufacturer in India", "Reliable industrial ducting manufacturer in Surat, Gujarat", "Custom industrial ducting fabrication as per layout and duty", "Ventilation, exhaust, dust and fume extraction ducting support", "Process-air and utility-air ducting fabrication", "Fan, cyclone, scrubber and equipment interface ducting", "Duct spools, elbows, reducers and transitions", "GI, MS, CS and SS ducting fabrication capability", "Stiffened and maintainable duct assemblies", "Flanged and bolted sections for inspection and dismantling", "Access doors, supports, lifting points and modular packing", "Fabrication for chemical, fertilizer, ETP, steel, utility and manufacturing industries"],
      },
      {
        title: "Details Required for Quotation",
        body: ["To provide the right quotation for an industrial ducting system, please share:"],
        bullets: ["Duct layout drawing", "Duct sizes", "Airflow requirement", "Pressure condition", "Temperature condition", "Dust, fumes or exhaust details", "Corrosion and service condition", "Equipment interface details", "Fan, cyclone or scrubber connection details", "Material of construction", "Thickness requirement", "Connection type", "Support requirement", "Access door or inspection opening requirement", "Stiffener requirement", "Coating or painting requirement", "Marking and packing requirement", "Inspection requirement", "Delivery location and timeline"],
      },
      {
        title: "Get a Quote for Industrial Ducting Systems",
        body: ["Looking for an industrial ducting system manufacturer in India?", "Share your duct layout, airflow duty, duct sizes, service condition, equipment interfaces, MOC, supports, access requirements and finish requirements with National Engineers & Steel Fabricators. Our team will review your requirement and provide a suitable industrial ducting fabrication solution for your plant ventilation, exhaust or process-air application."],
      },
    ],
    note:
      "Share your duct layout, airflow duty, duct sizes, service condition, equipment interfaces, MOC, supports, access requirements and finish requirements.",
    enquiry: {
      title: "Request a quote for Industrial Ducting Systems",
      subtitle: "Share your layout, airflow, service conditions, materials, supports, and access requirements.",
      productName: "Industrial Ducting Systems",
      buttonText: "Request Quote",
    },
    faqs: [
      { question: "What is an industrial ducting system?", answer: "An industrial ducting system is a fabricated duct network used to route ventilation air, exhaust air, dust-laden air, fumes or process air between plant equipment, fans, cyclones, scrubbers, filters and discharge points." },
      { question: "Who is an industrial ducting system manufacturer in Surat?", answer: "National Engineers & Steel Fabricators is an industrial ducting system manufacturer in Surat, Gujarat, offering custom ducting for ventilation, exhaust, dust extraction, fume extraction and process-air handling." },
      { question: "Do you manufacture industrial ducting systems in India?", answer: "Yes, National Engineers & Steel Fabricators manufactures industrial ducting systems in India as per duct layout, airflow duty, service condition, material requirement, support details and equipment interface." },
      { question: "What is the difference between AHU ducting and industrial ducting?", answer: "AHU ducting is mainly used for HVAC air distribution from air handling units. Industrial ducting is used for plant ventilation, exhaust, dust extraction, fume extraction, process-air routing and equipment interconnection." },
      { question: "Can industrial ducting be fabricated as per drawing?", answer: "Yes, industrial ducting can be fabricated as per client duct layout, duct sizes, airflow requirement, equipment interfaces, MOC, pressure condition, temperature condition, supports, access doors and finish requirements." },
      { question: "What materials are used for industrial ducting?", answer: "Industrial ducting can be fabricated in GI, mild steel, carbon steel, stainless steel or special material depending on airflow duty, temperature, corrosion risk, dust loading, fume type and client specification." },
      { question: "What components are included in industrial ducting fabrication?", answer: "Industrial ducting fabrication can include duct spools, elbows, reducers, transitions, flanged sections, bolted sections, stiffeners, access doors, inspection openings, supports and equipment connection sections." },
      { question: "Can industrial ducting connect with fans, cyclones and scrubbers?", answer: "Yes, industrial ducting can be fabricated for connection with fans, cyclones, scrubbers, dust collectors, filters, process equipment and exhaust discharge systems." },
      { question: "What details are required to get a quotation?", answer: "To get a quotation, you can share duct layout, duct sizes, airflow duty, pressure condition, temperature, dust or fume details, equipment interfaces, MOC, supports, access and coating requirements." },
      { question: "How is industrial ducting system price calculated?", answer: "Price depends on duct size, total duct quantity, material, thickness, duct geometry, elbows, reducers, transitions, flanges, stiffeners, supports, access doors, coating, packing and documentation." },
    ],
    seo: {
      title: "Industrial Ducting System Manufacturer in India | NESF",
      description:
        "Industrial ducting system manufacturer in Surat, India, offering custom ducts for ventilation, exhaust, dust, fumes and process air.",
      keywords: [
        "industrial ducting system manufacturer", "industrial ducting systems manufacturer", "industrial ducting manufacturer", "industrial ducting manufacturer in India", "industrial ducting manufacturer in Surat", "industrial ducting supplier", "custom industrial ducting", "industrial ducting fabrication", "ducting fabrication company in Surat", "ventilation ducting manufacturer", "exhaust ducting manufacturer", "dust collection ducting manufacturer", "dust extraction ducting", "fume extraction ducting manufacturer", "process air ducting", "process ventilation ducting", "utility air ducting", "fan ducting manufacturer", "cyclone ducting", "scrubber ducting", "industrial air ducting", "stiffened ducting", "flanged ducting", "bolted ducting", "modular ducting system", "duct spools", "duct elbows", "duct reducers", "duct transitions", "duct supports", "access doors", "inspection doors", "GI ducting", "MS ducting", "SS ducting", "corrosion resistant ducting", "HVAC and industrial ducting",
      ],
    },
  },
  "transitions-reducers-elbows": {
    title: "Transitions / Reducers / Elbows",
    headline: "Precision Duct Fittings for Smooth Airflow and Accurate Fitment",
    description:
      "Custom duct transitions, reducers, elbows, and branch fittings fabricated for smooth airflow, controlled geometry, and clean equipment integration.",
    pagePath: "/products/transitions-reducers-elbows",
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
    title: "Insulated Duct Casing Manufacturer in India",
    headline: "Insulated Duct Casing Manufacturer in Surat",
    description:
      "National Engineers & Steel Fabricators is a trusted insulated duct casing manufacturer in India, offering custom insulated duct casings for HVAC systems, industrial ducting systems, supply air ducts, return air ducts, outdoor duct runs, hot exhaust ducting, cold air lines and process air ducting applications.",
    pagePath: "/products/insulated-duct-casing",
    image: "/product/8.jpg",
    imageAlt: "Insulated industrial duct casing fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Product Type", value: "Insulated Duct Casing" },
      { label: "Function", value: "Thermal, condensation and surface-temperature control" },
      { label: "Outer Casing", value: "GI, galvanized steel or stainless steel" },
      { label: "Build Basis", value: "Layout, temperature and insulation specification" },
    ],
    overview: [
      "Based in Sachin GIDC, Surat, Gujarat, we manufacture insulated duct casings as per client drawings, duct layout, duct size, operating temperature, ambient condition, insulation specification, outer casing material, cladding requirement, vapour barrier requirement, weatherproofing need, support arrangement, access requirement, inspection scope and delivery schedule.",
      "Our insulated duct casing fabrication solutions are suitable for projects where thermal control, condensation control, surface-temperature control, energy-loss reduction and maintainable ducting construction are important.",
    ],
    sections: [
      {
        title: "Insulated Duct Casing Manufacturer in Surat",
        body: ["National Engineers & Steel Fabricators is an experienced insulated duct casing manufacturer in Surat, offering custom duct casing fabrication for HVAC rooms, utility buildings, industrial plants, process facilities, clean areas, outdoor duct runs, hot exhaust ducting and cold air distribution lines.", "As an insulated duct casing manufacturer in India, we fabricate GI insulated duct casings, SS insulated duct casings, galvanized insulated duct casings, weatherproof duct casings, cladded duct sections and maintainable bolted or flanged casing sections as per project requirements.", "Each duct casing is manufactured with attention to casing dimensions, insulation clearance, support interface, flange alignment, access provision, weather exposure, vapour barrier provision, cladding fitment and site installation readiness."],
      },
      {
        title: "Insulated Duct Casings for Thermal and Condensation Control",
        body: ["Insulated duct casings are used where duct surfaces need protection against heat loss, heat gain, condensation, surface-temperature risk or outdoor exposure. These casings help protect insulation and support stable duct performance in indoor and outdoor environments.", "National Engineers & Steel Fabricators manufactures insulated duct casings for hot, cold and conditioned air ducting applications where temperature difference, environmental exposure and maintainability must be considered.", "Common use cases include:"],
        bullets: ["Supply air ducts passing through non-conditioned zones", "Return air ducts requiring thermal protection", "Outdoor duct runs exposed to weather", "Cold air ducts where condensation risk is high", "Hot exhaust ducts where surface-temperature control is required", "Industrial ducts requiring insulation protection", "Ducts near personnel movement or sensitive equipment areas"],
      },
      {
        title: "Custom Insulated Duct Casing Fabrication",
        body: ["Every insulated duct casing requirement is different because duct size, temperature, ambient condition, insulation thickness, cladding material and access needs vary from project to project.", "That is why National Engineers & Steel Fabricators provides custom insulated duct casing fabrication as per approved duct layout and project specification.", "Our fabrication scope can include:"],
        bullets: ["GI outer casing fabrication", "Stainless steel outer casing fabrication", "Insulated duct casing sections", "Cladded duct casing sections", "Weatherproof duct casing sections", "Vapour barrier provision", "Flanged casing sections", "Bolted maintainable casing sections", "Removable casing panels where required", "Access door and inspection opening provision", "Support and hanger interface provision", "Expansion and movement clearance consideration", "Outdoor exposure protection", "Surface preparation and finishing", "Marking and packing for site installation"],
      },
      {
        title: "GI and SS Insulated Duct Casing",
        body: ["National Engineers & Steel Fabricators manufactures insulated duct casings in GI and stainless steel based on application, exposure condition, corrosion risk, hygiene requirement and client specification.", "GI insulated duct casing is commonly used for standard HVAC and industrial ducting applications where durable and cost-effective outer casing is required.", "SS insulated duct casing is suitable for corrosive, hygienic, outdoor, clean-area or process-specific environments where stainless steel outer protection is preferred.", "Material selection depends on duct location, air or gas temperature, humidity, condensation risk, outdoor exposure and project specification."],
      },
      {
        title: "HVAC Insulated Duct Casing",
        body: ["HVAC insulated duct casing is used to support energy efficiency, condensation control and temperature stability in air distribution systems. It is especially useful where ducts pass through spaces that are not temperature controlled.", "National Engineers & Steel Fabricators fabricates HVAC insulated duct casings for:"],
        bullets: ["AHU ducting", "Supply air ducting", "Return air ducting", "Fresh air ducting", "Cold air ducting", "Utility building ducting", "Clean-area ducting", "Outdoor HVAC duct runs", "Commercial and industrial HVAC projects"],
      },
      {
        title: "Industrial Insulated Duct Casing",
        body: ["Industrial ducting systems may require insulated casing where ducts carry hot air, cold air, process air or exhaust streams. Insulated casing helps protect insulation, reduce surface-temperature exposure, improve durability and support reliable plant operation.", "National Engineers & Steel Fabricators manufactures industrial insulated duct casings for:"],
        bullets: ["Hot air ducts", "Cold air ducts", "Process air ducting", "Utility air ducting", "Exhaust ducting", "Outdoor industrial ducting", "Plant ventilation ducting", "Fan and blower ducting", "Scrubber or process equipment interface ducting where applicable"],
      },
      {
        title: "Vapour Barrier, Cladding and Weatherproofing Support",
        body: ["Insulated duct casing may require vapour barrier, cladding and weatherproofing provisions depending on duct location and service condition.", "National Engineers & Steel Fabricators can fabricate casing sections with practical provisions for:", "These provisions are important for outdoor duct runs, cold ducts, condensation-prone ducts and industrial ducting exposed to weather."],
        bullets: ["Vapour barrier continuity", "Outer cladding support", "Weatherproof casing joints", "Outdoor exposure protection", "Rainwater protection details", "Access panel protection", "Flanged or bolted maintainable sections", "Insulation protection around supports and interfaces", "Edge protection and site assembly fitment"],
      },
      {
        title: "Maintainable Flanged and Bolted Casing Sections",
        body: ["Insulated duct casing should allow access for inspection, maintenance and future replacement where required. Fully fixed casing sections may create maintenance difficulty in plant environments.", "National Engineers & Steel Fabricators can fabricate flanged or bolted maintainable casing sections to support easier installation, removal and inspection.", "Maintainable casing features may include:"],
        bullets: ["Bolted casing panels", "Flanged casing joints", "Removable access sections", "Inspection opening provisions", "Access around dampers, flanges and supports", "Casing split planning for transport and installation", "Marking and match identification for site assembly"],
      },
      {
        title: "Types of Insulated Duct Casings We Manufacture",
        body: ["National Engineers & Steel Fabricators manufactures insulated duct casings for HVAC and industrial ducting applications.", "Common types include:"],
        bullets: ["Insulated duct casings", "HVAC insulated duct casings", "Industrial insulated duct casings", "GI insulated duct casings", "SS insulated duct casings", "Galvanized insulated duct casings", "Stainless steel insulated duct casings", "Outdoor insulated duct casings", "Weatherproof duct casings", "Thermal insulated duct casings", "Condensation control duct casings", "Hot air duct casings", "Cold air duct casings", "Supply air insulated duct casings", "Return air insulated duct casings", "Cladded duct casing sections", "Bolted insulated duct casing sections", "Custom insulated duct casings as per drawing"],
      },
      {
        title: "Key Features",
        bullets: ["Custom-built insulated duct casing as per duct layout", "Suitable for HVAC and industrial ducting systems", "Thermal control and energy-loss reduction support", "Condensation control for cold ducting applications", "Surface-temperature control for hot ducting applications", "GI and stainless steel outer casing options", "Vapour barrier and cladding provisions where required", "Weatherproofing support for outdoor duct runs", "Flanged or bolted maintainable casing sections", "Access door and inspection opening provisions", "Support, flange and interface clearance planning", "Modular casing sections for transport and site assembly", "Accurate dimensions for fit-up around existing ducting", "Surface finish and marking as specified", "Documentation support as agreed"],
      },
      {
        title: "Applications",
        body: ["Our insulated duct casings are used across different HVAC and industrial ducting applications, including:"],
        bullets: ["AHU ducting systems", "HVAC supply air ducts", "HVAC return air ducts", "Fresh air ducting", "Cold air ducting", "Hot air ducting", "Outdoor duct runs", "Non-conditioned zone ducting", "Industrial ventilation ducting", "Process air ducting", "Utility air ducting", "Plant HVAC rooms", "Clean-area ducting where applicable", "Exhaust ducting requiring surface-temperature control", "Duct retrofit projects", "Duct replacement and modification jobs", "Industrial ducting insulation protection"],
      },
      {
        title: "Materials of Construction",
        body: ["National Engineers & Steel Fabricators manufactures insulated duct casings using suitable materials based on duct location, air or gas temperature, humidity, corrosion risk, outdoor exposure and client specification.", "Common material options include:", "Insulation material, thickness and density are selected as per project insulation specification and client requirement."],
        bullets: ["Galvanized Iron outer casing", "Galvanized steel outer casing", "Stainless Steel 304 casing", "Stainless Steel 316 casing", "Stainless Steel 316L casing", "Painted casing sections where specified", "Coated casing sections where required", "Special MOC as per client specification"],
      },
      {
        title: "Technical Specifications",
        table: { columns: ["Specification", "Details"], rows: [["Product Type", "Insulated Duct Casing"], ["Equipment Category", "HVAC & Industrial Ducting"], ["Application", "Thermal control, condensation control, surface-temperature control and insulation protection"], ["Build Basis", "Duct layout, duct size, operating temperature, ambient condition and project specification"], ["Suitable For", "HVAC ducts, industrial ducts, hot ducts, cold ducts and outdoor duct runs"], ["Outer Casing Material", "GI, galvanized steel, stainless steel or as per requirement"], ["Insulation", "Thickness, density and type as per project requirement"], ["Vapour Barrier", "Provided where specified by project requirement"], ["Cladding", "GI, SS or project-specified cladding arrangement"], ["Weatherproofing", "Outdoor exposure provision as required"], ["Duct Shape", "Rectangular, round, square or custom geometry"], ["Duct Size", "As per approved duct drawing"], ["Service Condition", "Hot air, cold air, conditioned air, ventilation air or process air"], ["Connection Type", "Flanged, bolted, removable or as per project requirement"], ["Access Provision", "Access doors, removable panels and inspection openings as required"], ["Support Interface", "Clearance and casing details around hangers, supports and flanges"], ["Surface Finish", "GI finish, SS finish, painted, coated or as specified"], ["Standards / Practice", "Project insulation requirements and applicable energy or building standards where specified"], ["Inspection", "Dimensional checks, fit-up checks, joint checks and finish checks"], ["Packing", "Marked and packed for site installation"], ["Documentation", "Inspection records and documentation pack as agreed"], ["Customization", "Available as per duct layout, temperature, insulation, casing material, access and weatherproofing requirement"]] },
      },
      {
        title: "Fabrication and Quality Control",
        body: ["Every insulated duct casing is fabricated with proper attention to material verification, cutting, forming, fit-up, casing dimensions, joint alignment, access provision, support clearance, weatherproofing detail and finishing requirements.", "Quality checks may include:"],
        bullets: ["Material verification", "Duct layout review", "Casing size verification", "Fit-up inspection", "Joint and flange checking", "Bolted section checking", "Access door and removable panel checking", "Support interface checking", "Vapour barrier and cladding provision check where applicable", "Weatherproofing detail check where applicable", "Surface finish checks", "Marking and identification checks", "Packing and dispatch readiness checks", "Documentation compilation as agreed"],
      },
      {
        title: "Site Installation and Integration Support",
        body: ["Insulated duct casing must fit accurately around ducting, insulation, supports, flanges, access doors and interface points. Poor casing fitment can create insulation gaps, condensation issues, weather leakage or maintenance difficulties.", "Our installation-focused fabrication approach includes:"],
        bullets: ["Modular casing section planning", "Accurate fit-up around duct dimensions", "Clearance around supports and hangers", "Access around flanges and inspection doors", "Outdoor weather-exposure planning", "Marking and match identification", "Transport-friendly sections", "Site-ready packing and dispatch sequence"],
      },
      {
        title: "Why Choose National Engineers?",
        body: ["National Engineers & Steel Fabricators is a trusted insulated duct casing manufacturer and duct fabrication company in Surat, Gujarat. We provide custom insulated duct casing fabrication for HVAC and industrial ducting projects that require thermal control, condensation control and installation-ready casing sections.", "Reasons to work with us:"],
        bullets: ["Experienced insulated duct casing manufacturer in India", "Reliable insulated duct casing manufacturer in Surat, Gujarat", "GI and SS insulated duct casing fabrication capability", "HVAC and industrial ducting casing support", "Thermal control and condensation control casing solutions", "Outdoor weatherproof duct casing fabrication", "Vapour barrier and cladding provision support", "Flanged and bolted maintainable casing sections", "Access doors, supports and interface clearance planning", "Modular fabrication for site installation", "Dimensional checks and finish checks", "Fabrication for HVAC rooms, industrial plants, clean areas and outdoor duct runs"],
      },
      {
        title: "Details Required for Quotation",
        body: ["To provide the right quotation for insulated duct casing, please share:"],
        bullets: ["Duct layout drawing", "Duct sizes", "Duct shape", "Operating temperature", "Ambient condition", "Indoor or outdoor installation", "Insulation type", "Insulation thickness", "Insulation density", "Thermal performance requirement", "Outer casing material", "GI or SS grade and thickness", "Vapour barrier requirement", "Cladding requirement", "Weatherproofing requirement", "Access door or removable panel requirement", "Support and hanger details", "Flange and connection details", "Surface finish requirement", "Inspection requirement", "Marking and packing requirement", "Delivery location and timeline"],
      },
      {
        title: "Get a Quote for Insulated Duct Casing",
        body: ["Looking for an insulated duct casing manufacturer in India?", "Share your duct layout, duct sizes, operating temperature, ambient condition, insulation specification, outer casing material, vapour barrier, cladding, weatherproofing and access requirements with National Engineers & Steel Fabricators. Our team will review your requirement and provide a suitable insulated duct casing fabrication solution for your HVAC or industrial ducting project."],
      },
    ],
    note:
      "Share your duct layout, duct sizes, operating temperature, ambient condition, insulation specification, casing material, vapour barrier, cladding and weatherproofing requirements.",
    enquiry: {
      title: "Request a quote for Insulated Duct Casing",
      subtitle: "Share your duct sizes, temperatures, insulation, casing, weatherproofing, and access requirements.",
      productName: "Insulated Duct Casing",
      buttonText: "Request Quote",
    },
    faqs: [
      { question: "What is insulated duct casing?", answer: "Insulated duct casing is an outer casing arrangement used around insulated ductwork to protect insulation, control heat loss or gain, reduce condensation risk and manage duct surface temperature." },
      { question: "Who is an insulated duct casing manufacturer in Surat?", answer: "National Engineers & Steel Fabricators is an insulated duct casing manufacturer in Surat, Gujarat, offering GI and SS insulated duct casings as per duct layout, temperature, insulation, cladding and weatherproofing requirements." },
      { question: "Do you manufacture insulated duct casings in India?", answer: "Yes, National Engineers & Steel Fabricators manufactures insulated duct casings in India for HVAC ducts, industrial ducts, hot air ducts, cold air ducts, outdoor duct runs and process air ducting applications." },
      { question: "What is insulated duct casing used for?", answer: "Insulated duct casing is used for thermal control, condensation control, surface-temperature control, insulation protection and weather protection in indoor and outdoor ducting systems." },
      { question: "Can insulated duct casing be fabricated as per drawing?", answer: "Yes, insulated duct casing can be fabricated as per client drawings, duct size, duct shape, insulation thickness, casing material, vapour barrier, cladding, access requirement and site layout." },
      { question: "Which materials are used for insulated duct casing?", answer: "Insulated duct casing can be fabricated using GI, galvanized steel, stainless steel 304, stainless steel 316, stainless steel 316L or special materials depending on duty, corrosion risk and site exposure." },
      { question: "Where is insulated duct casing commonly used?", answer: "It is commonly used on supply air ducts, return air ducts, outdoor duct runs, cold air lines, hot air ducts, process air ducting and ducts passing through non-conditioned zones." },
      { question: "What is the purpose of a vapour barrier in insulated duct casing?", answer: "A vapour barrier helps reduce moisture migration into insulation, especially in cold ducting applications where condensation risk is high." },
      { question: "What details are required to get a quotation?", answer: "To get a quotation, you can share duct layout, duct sizes, temperature, ambient condition, insulation thickness, insulation density, outer casing material, cladding, vapour barrier and access requirements." },
      { question: "How is insulated duct casing price calculated?", answer: "Insulated duct casing price depends on duct size, casing material, insulation thickness, cladding requirement, vapour barrier, weatherproofing, access panels, support details, quantity, packing and delivery scope." },
    ],
    seo: {
      title: "Insulated Duct Casing Manufacturer in India | NESF",
      description:
        "Insulated duct casing manufacturer in Surat, India, offering GI and SS casings with insulation, cladding and weatherproofing.",
      keywords: [
        "insulated duct casing manufacturer", "insulated duct casing manufacturer in India", "insulated duct casing manufacturer in Surat", "insulated duct casing supplier", "insulated duct manufacturer", "HVAC insulated duct casing", "industrial insulated duct casing", "thermal insulated duct casing", "condensation control duct casing", "heat loss control duct casing", "surface temperature control ducting", "insulated ducting manufacturer", "insulated ducting manufacturer in India", "GI insulated duct casing", "SS insulated duct casing", "stainless steel insulated duct casing", "galvanized insulated duct casing", "insulated duct cladding", "duct casing with insulation", "duct casing with vapour barrier", "weatherproof duct casing", "outdoor insulated duct casing", "hot air duct casing", "cold air duct casing", "supply air insulated duct", "return air insulated duct", "industrial ducting fabrication", "HVAC duct fabrication", "duct fabrication company in Surat",
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
