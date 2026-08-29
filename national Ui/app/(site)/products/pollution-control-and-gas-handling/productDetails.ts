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
    title: "Venturi Scrubber Manufacturer and Supplier in India",
    headline: "Venturi Scrubber Manufacturer in Surat",
    description:
      "National Engineers & Steel Fabricators is a trusted Venturi scrubber manufacturer and supplier in India, offering custom Venturi scrubbers for fine dust control, fume removal, mist capture, gas cleaning and industrial pollution control applications.",
    pagePath: "/products/venturi-scrubbers",
    image: "/product/3.jpg",
    imageAlt:
      "Industrial venturi scrubber assembly fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Product Type", value: "Venturi Scrubber" },
      { label: "Application", value: "Dust, fumes, mist and gas cleaning" },
      { label: "Materials", value: "SS, CS, MS or lined construction" },
      { label: "Build Basis", value: "Gas data, duty and duct layout" },
    ],
    overview: [
      "Based in Sachin GIDC, Surat, Gujarat, we manufacture Venturi scrubber assemblies as per client drawings, gas flow rate, dust loading, gas temperature, gas chemistry, duct size, liquid injection requirement, material of construction, lining requirement, separator interface, inspection scope and documentation needs.",
      "Our Venturi scrubber fabrication solutions are suitable for industries that require durable, corrosion-aware and application-specific pollution control equipment instead of standard off-the-shelf scrubber units.",
    ],
    sections: [
      {
        title: "Venturi Scrubber Manufacturer in Surat",
        body: [
          "National Engineers & Steel Fabricators is an experienced Venturi scrubber manufacturer in Surat, offering custom scrubber fabrication for chemical plants, mineral processing units, fertilizer plants, pigment industries, metal processing units, boiler exhaust systems, bulk handling plants and industrial gas cleaning systems.",
          "As a Venturi scrubber manufacturer in India, we fabricate industrial Venturi scrubbers with Venturi body, throat section, liquid injection headers, flanges, nozzles, inspection doors, drains, supports and separator interface provisions as per project requirements.",
          "Each scrubber assembly is manufactured with proper attention to fit-up accuracy, welding quality, throat construction, liquid distribution, corrosion protection, access provision and long service life.",
        ],
      },
      {
        title: "Industrial Venturi Scrubbers for Pollution Control",
        body: [
          "Industrial Venturi scrubbers are used to capture fine particulate matter, fumes, aerosols, mists and selected soluble or reactive gases from exhaust streams. In a Venturi scrubber, dirty gas passes through a restricted throat section where scrubbing liquid is atomized into fine droplets. This helps transfer pollutants from the gas stream into the liquid phase.",
          "National Engineers & Steel Fabricators manufactures industrial Venturi scrubbers for applications where high-energy wet scrubbing, fine particulate capture and reliable gas cleaning performance are required.",
        ],
      },
      {
        title: "Custom Venturi Scrubber Fabrication",
        body: ["Every gas cleaning application has different gas flow, dust loading, particle size, temperature, moisture, gas chemistry, pressure drop and emission target requirements. That is why National Engineers & Steel Fabricators provides custom Venturi scrubber fabrication as per client-specific duty conditions.", "Our Venturi scrubber fabrication scope can include:"],
        bullets: [
          "Venturi scrubber body fabrication", "Venturi throat fabrication", "Round or rectangular scrubber body construction",
          "Liquid injection header fabrication", "Spray arrangement support", "Nozzle and flange fabrication",
          "Separator interface provision", "Mist eliminator interface provision", "Cyclone or demister interface provision",
          "Inspection door and clean-out access", "Drain and flushing provision", "Support structure and lifting arrangement",
          "Surface preparation and painting", "Rubber lining, epoxy lining or FRP lining support",
          "Leak testing and inspection documentation as required",
        ],
      },
      {
        title: "Wet Venturi Scrubber Manufacturer",
        body: [
          "National Engineers & Steel Fabricators manufactures wet Venturi scrubbers for industrial exhaust systems where water or scrubbing liquid is used to capture pollutants from gas streams.",
          "As a wet Venturi scrubber manufacturer and industrial wet scrubber manufacturer, we focus on robust scrubber construction, suitable MOC selection, proper injection arrangement, abrasion-resistant throat construction and corrosion protection based on the process condition.",
          "Wet Venturi scrubbers are commonly used in high-dust, high-fume or high-mist applications where dry collection systems may not be suitable.",
        ],
      },
      {
        title: "Pollution Control and Gas Cleaning Equipment",
        body: [
          "Venturi scrubbers are part of pollution control and gas handling systems used to reduce dust, fumes, mist and selected gas pollutants from industrial exhaust streams.",
          "As a pollution control equipment manufacturer and gas cleaning equipment manufacturer in India, National Engineers & Steel Fabricators supports custom fabrication for Venturi scrubbers, wet scrubber systems, ducting interfaces, separator connections, scrubber internals and related gas handling equipment.",
          "Our fabrication approach focuses on practical plant requirements such as duct interface, inspection access, drainability, corrosion protection, maintenance clearance and system integration.",
        ],
      },
      {
        title: "Types of Venturi Scrubber Assemblies We Manufacture",
        body: ["National Engineers & Steel Fabricators manufactures custom Venturi scrubbers and scrubber assemblies based on duty conditions and client drawings.", "Common types include:"],
        bullets: [
          "Venturi scrubbers", "Industrial Venturi scrubbers", "Wet Venturi scrubbers", "Custom Venturi scrubbers",
          "Fume scrubbers", "Dust scrubbers", "Mist scrubbers", "Flue gas scrubber assemblies", "Chemical scrubbers",
          "Gas cleaning scrubbers", "Venturi body assemblies", "Venturi throat assemblies", "Scrubbers with liquid injection headers",
          "Scrubbers with separator interface", "Scrubbers with demister or mist eliminator interface",
          "Lined Venturi scrubbers as per service condition",
        ],
      },
      {
        title: "Key Features",
        bullets: [
          "Custom-built Venturi scrubbers as per drawing and duty condition", "Suitable for fine dust, fumes, mist and gas cleaning applications",
          "Venturi body and throat fabrication support", "Liquid injection header and spray arrangement provision",
          "Round or rectangular body configuration", "Flanged, welded or duct-connected interface options",
          "Separator, demister or mist eliminator interface provision", "Drain, clean-out and inspection access arrangement",
          "Robust throat construction for abrasive or sticky dust service", "SS, CS and lined construction options",
          "Rubber lining, epoxy lining or FRP lining support as required", "Corrosion-resistant fabrication based on gas chemistry",
          "Leak testing and inspection checks as applicable", "Material traceability and documentation support as agreed",
        ],
      },
      {
        title: "Applications",
        body: ["Our Venturi scrubbers are used across different pollution control and gas handling applications, including:"],
        bullets: [
          "Fine dust control", "Fume removal systems", "Mist and aerosol capture", "Acid fume handling",
          "Chemical process exhaust systems", "Metal processing exhaust streams", "Fertilizer plant dust control",
          "Pigment industry exhaust systems", "Mineral processing dust control", "Bulk handling dust control",
          "Boiler or thermal exhaust applications", "Industrial flue gas cleaning", "Wet scrubbing systems",
          "Gas cleaning systems", "Pollution control projects", "Industrial exhaust treatment systems",
        ],
      },
      {
        title: "Materials of Construction",
        body: ["National Engineers & Steel Fabricators manufactures Venturi scrubbers using suitable materials based on gas chemistry, dust characteristics, temperature, moisture, corrosion condition, abrasion condition and project specification.", "Common material options include:"],
        bullets: ["Stainless Steel 304", "Stainless Steel 316", "Stainless Steel 316L", "Carbon Steel with suitable lining", "Mild Steel with coating or lining", "Rubber-lined scrubber construction", "Epoxy-lined scrubber construction", "FRP-lined or composite-supported construction where suitable", "Special MOC as per client specification"],
      },
      {
        title: "Technical Specifications",
        table: {
          columns: ["Specification", "Details"],
          rows: [
            ["Product Type", "Venturi Scrubber"], ["Equipment Category", "Pollution Control & Gas Handling"],
            ["Application", "Fine dust, fumes, mist, aerosol and gas cleaning"], ["Scrubber Type", "Wet Venturi scrubber / high-energy wet scrubber"],
            ["Build Basis", "Client drawing, duty condition, gas data, duct layout or project specification"],
            ["Gas Flow Rate", "As per client requirement"], ["Dust Loading", "As per process and exhaust condition"],
            ["Gas Temperature", "As per project requirement"], ["Gas Chemistry", "As per process condition and compatibility review"],
            ["Body Configuration", "Round or rectangular as per system design"],
            ["Main Components", "Venturi body, throat section, liquid injection header, nozzles and supports"],
            ["Separator Interface", "Cyclone, demister or mist eliminator interface as required"],
            ["Material of Construction", "SS, CS, MS, lined construction or as per requirement"],
            ["Lining Options", "Rubber lining, epoxy lining, FRP lining or as required"],
            ["Connections", "Inlet, outlet, liquid injection, drain, clean-out and inspection access"],
            ["Support Type", "Structural support, bracket support, base frame or custom support arrangement"],
            ["Testing", "Leak testing or other checks as applicable"],
            ["Inspection", "Dimensional checks, visual checks and weld inspection as required"],
            ["Documentation", "Material traceability, inspection reports and documentation pack as agreed"],
            ["Customization", "Available as per gas flow, dust loading, gas chemistry, duct size and emission target"],
          ],
        },
      },
      {
        title: "Fabrication and Quality Control",
        body: ["Every Venturi scrubber is fabricated with proper attention to material verification, fit-up, welding quality, dimensional accuracy, throat geometry, nozzle alignment, access provision, lining readiness and inspection documentation.", "Quality checks may include:"],
        bullets: [
          "Material verification", "Drawing and duty condition review", "Fit-up inspection", "Welding quality checks",
          "Dimensional inspection", "Throat section checking", "Nozzle orientation verification",
          "Liquid injection header alignment check", "Separator interface checking", "Drain and access provision checking",
          "Lining or coating checks if applicable", "Leak testing where applicable", "Final painting and finishing inspection",
          "Inspection and traceability documentation as agreed",
        ],
      },
      {
        title: "System Integration Support",
        body: ["A Venturi scrubber must integrate properly with ducting, gas inlet, outlet connections, liquid injection system, separator, mist eliminator and drain arrangement. National Engineers & Steel Fabricators manufactures scrubber assemblies with practical installation and maintenance requirements in mind.", "Our system integration focus includes:"],
        bullets: ["Duct interface alignment", "Gas inlet and outlet geometry", "Scrubbing liquid injection location", "Separator or demister interface", "Drainability and clean-out access", "Support and lifting arrangement", "Maintenance access", "Corrosion and abrasion protection", "Site installation readiness"],
      },
      {
        title: "Why Choose National Engineers?",
        body: ["National Engineers & Steel Fabricators is a trusted Venturi scrubber manufacturer, wet scrubber system manufacturer and pollution control fabrication company in Surat, Gujarat. We provide custom scrubber fabrication for industries that require durable, corrosion-aware and inspection-ready gas cleaning equipment.", "Reasons to work with us:"],
        bullets: [
          "Experienced Venturi scrubber manufacturer in India", "Reliable Venturi scrubber supplier in Surat, Gujarat",
          "Custom Venturi scrubber fabrication as per duty condition", "Industrial wet scrubber manufacturer for gas cleaning systems",
          "Pollution control equipment fabrication for industrial plants", "SS, CS, MS and lined scrubber fabrication capability",
          "Liquid injection header and Venturi throat fabrication support", "Separator, demister and mist eliminator interface support",
          "Rubber lining, epoxy lining and FRP lining options", "Leak testing and inspection documentation support as agreed",
          "Fabrication for chemical, metal processing, fertilizer, pigment and bulk handling industries",
        ],
      },
      {
        title: "Details Required for Quotation",
        body: ["To provide the right quotation for a Venturi scrubber, please share:"],
        bullets: [
          "Gas flow rate", "Gas temperature", "Dust type and particle characteristics", "Dust loading", "Gas chemistry",
          "Moisture and chloride content", "Target outlet emission limits", "Available water or scrubbing liquid details",
          "Duct size and duct layout", "Material of construction", "Lining or coating requirement",
          "Separator or mist eliminator interface requirement", "Inspection access requirement", "Testing requirement",
          "Documentation requirement", "Delivery location and timeline",
        ],
      },
      {
        title: "Get a Quote for Venturi Scrubber",
        body: [
          "Looking for a Venturi scrubber manufacturer and supplier in India?",
          "Share your gas flow rate, dust loading, gas temperature, gas chemistry, duct sizes, utility details, MOC, lining requirement and emission target with National Engineers & Steel Fabricators. Our team will review your requirement and provide a suitable Venturi scrubber fabrication solution for your pollution control project.",
        ],
      },
    ],
    note:
      "Share your gas flow rate, dust loading, gas temperature, gas chemistry, duct sizes, utility details, MOC, lining requirement and emission target.",
    enquiry: {
      title: "Request a quote for a Venturi Scrubber",
      subtitle:
        "Share gas flow, dust loading, temperature, chemistry, duct sizes, utilities, MOC, lining and emission targets.",
      productName: "Venturi Scrubber",
      buttonText: "Request Quote",
    },
    faqs: [
      { question: "What is a Venturi Scrubber?", answer: "A Venturi scrubber is a high-energy wet scrubber used to capture fine dust, fumes, mists, aerosols and selected soluble or reactive gases from industrial exhaust streams." },
      { question: "Who is a Venturi Scrubber Manufacturer in Surat?", answer: "National Engineers & Steel Fabricators is a Venturi scrubber manufacturer in Surat, Gujarat, offering custom Venturi scrubbers as per gas flow, dust loading, gas chemistry, duct size and emission target." },
      { question: "Do you Manufacture Venturi Scrubbers in India?", answer: "Yes, National Engineers & Steel Fabricators is a Venturi scrubber manufacturer and supplier in India, providing custom industrial Venturi scrubbers for pollution control and gas cleaning systems." },
      { question: "What pollutants can a Venturi scrubber handle?", answer: "Venturi scrubbers are commonly used for fine particulate matter, fumes, aerosols, mists, acid fumes, mineral dust, pigment dust, fertilizer dust and suitable gas cleaning applications." },
      { question: "Can Venturi scrubbers be fabricated as per drawing?", answer: "Yes, Venturi scrubbers can be fabricated as per client drawings, duty conditions, gas flow rate, dust loading, duct layout, MOC, lining requirement and inspection scope." },
      { question: "What materials are used for Venturi scrubbers?", answer: "Venturi scrubbers can be fabricated in stainless steel, carbon steel, mild steel with lining, rubber-lined construction, epoxy-lined construction or FRP-lined construction depending on gas chemistry and corrosion condition." },
      { question: "What is the role of the Venturi throat?", answer: "The Venturi throat accelerates the gas stream and helps atomize the scrubbing liquid into fine droplets, improving contact between the gas stream and liquid phase for pollutant capture." },
      { question: "What details are required to get a Venturi scrubber quotation?", answer: "To get a quotation, you can share gas flow rate, temperature, dust loading, particle size, gas chemistry, duct size, target emission limit, MOC, lining requirement and documentation needs." },
      { question: "What testing is done for Venturi scrubbers?", answer: "Testing may include dimensional inspection, weld visual checks, nozzle checking, lining inspection, leak testing and final inspection as per project requirement." },
      { question: "How is Venturi scrubber price calculated?", answer: "Venturi scrubber price depends on gas flow rate, scrubber size, MOC, throat design, lining, injection header, separator interface, duct connections, supports, testing and documentation requirements." },
    ],
    seo: {
      title: "Venturi Scrubber Manufacturer & Supplier in India | NESF",
      description:
        "Venturi scrubber manufacturer in Surat, India, offering custom wet scrubbers for fine dust, fumes, mist and gas cleaning.",
      keywords: [
        "venturi scrubber manufacturer", "venturi scrubber supplier", "venturi scrubber manufacturer in India",
        "venturi scrubber manufacturer in Surat", "industrial venturi scrubber", "custom venturi scrubber",
        "wet venturi scrubber", "venturi wet scrubber manufacturer", "industrial wet scrubber manufacturer",
        "wet scrubber system manufacturer", "pollution control equipment manufacturer", "gas cleaning equipment manufacturer",
        "fume scrubber manufacturer", "dust scrubber manufacturer", "mist scrubber manufacturer", "flue gas scrubber manufacturer",
        "chemical scrubber manufacturer", "industrial scrubber fabrication", "scrubber fabrication company in Surat",
        "gas handling equipment manufacturer", "pollution control fabrication", "SS venturi scrubber", "CS venturi scrubber",
        "FRP lined scrubber", "rubber lined scrubber", "epoxy lined scrubber", "liquid injection header",
        "venturi throat", "mist eliminator interface", "separator interface", "leak testing", "inspection documentation",
      ],
    },
  },
  "wet-scrubber-systems": {
    title: "Wet Scrubber System Manufacturer and Supplier in India",
    headline: "Wet Scrubber System Manufacturer in Surat",
    description:
      "National Engineers & Steel Fabricators is a trusted wet scrubber system manufacturer and supplier in India, offering custom wet scrubber systems for dust control, acid gas reduction, odor control, soluble vapor removal and industrial gas cleaning applications.",
    pagePath: "/products/wet-scrubber-systems",
    image: "/product/24.jpeg",
    imageAlt:
      "Industrial wet scrubber system fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Product Type", value: "Wet Scrubber System" },
      { label: "Application", value: "Dust, acid gas, odor and vapor control" },
      { label: "Configurations", value: "Spray, packed-bed or multistage" },
      { label: "Materials", value: "SS, CS, MS or lined construction" },
    ],
    overview: [
      "Based in Sachin GIDC, Surat, Gujarat, we manufacture wet scrubber systems as per client drawings, gas flow rate, pollutant type, gas chemistry, temperature profile, duct layout, scrubbing liquid requirement, material of construction, lining requirement, mist eliminator requirement, access needs, inspection scope and documentation requirements.",
      "Our wet scrubber fabrication solutions are suitable for industries that require durable, corrosion-aware and application-specific pollution control equipment instead of standard off-the-shelf scrubber units.",
    ],
    sections: [
      {
        title: "Wet Scrubber System Manufacturer in Surat",
        body: [
          "National Engineers & Steel Fabricators is an experienced wet scrubber system manufacturer in Surat, offering custom scrubber fabrication for chemical plants, pharmaceutical units, fertilizer plants, metal processing units, pigment industries, bulk handling plants, boiler exhaust systems and industrial gas cleaning applications.",
          "As a wet scrubber system manufacturer in India, we fabricate scrubber vessels, scrubber towers, spray headers, nozzles, mist eliminator sections, demister sections, duct connections, inspection doors, drains, supports, platforms and access provisions as per project requirement.",
          "Each wet scrubber system is manufactured with proper attention to gas-liquid contact, corrosion protection, access planning, drainability, welding quality, dimensional accuracy and long service life.",
        ],
      },
      {
        title: "Industrial Wet Scrubbers for Pollution Control",
        body: [
          "Industrial wet scrubbers are used to remove dust, fumes, acid gases, odors, soluble vapors, aerosols and mist from exhaust gas streams by contacting the gas with water or a suitable scrubbing liquid.",
          "National Engineers & Steel Fabricators manufactures industrial wet scrubbers for applications where reliable gas cleaning, pollutant capture and plant-ready fabrication are required. The system can be customized based on gas flow, pollutant concentration, gas temperature, scrubbing chemistry, pressure drop, corrosion risk and outlet emission targets.",
        ],
      },
      {
        title: "Custom Wet Scrubber System Fabrication",
        body: ["Every pollution control application has different gas conditions, pollutant chemistry, dust loading, temperature, moisture, duct size and space constraints. That is why National Engineers & Steel Fabricators provides custom wet scrubber system fabrication as per client-specific duty conditions.", "Our wet scrubber fabrication scope can include:"],
        bullets: [
          "Wet scrubber vessel fabrication", "Scrubber tower fabrication", "Spray header and nozzle arrangement",
          "Packed-bed section support", "Mist eliminator or demister section", "Inlet and outlet duct interface",
          "Drain, clean-out and flushing provisions", "Inspection doors and access openings", "Recirculation piping interface points",
          "Support structure and lifting arrangement", "Platform and ladder support if required", "Surface preparation and painting",
          "Rubber lining, epoxy lining or FRP lining support", "Leak testing and inspection documentation as required",
        ],
      },
      {
        title: "Spray Scrubber, Packed-Bed Scrubber and Multistage Wet Scrubber Systems",
        body: [
          "National Engineers & Steel Fabricators manufactures different wet scrubber configurations depending on pollutant type, gas flow, scrubbing liquid chemistry and system performance requirement.",
          "Spray scrubbers are used where gas-liquid contact is achieved through spray nozzles or spray headers. These are suitable for many dust, fume, cooling and soluble vapor control applications.",
          "Packed-bed scrubbers are used where enhanced gas-liquid contact is required for soluble gas absorption and chemical scrubbing. These systems may include packing support, liquid distribution and mist elimination provisions.",
          "Multistage wet scrubber systems are used where more than one scrubbing stage is required for combined dust, gas, odor or vapor removal duties.",
          "Venturi scrubbers can be used for high-energy fine particulate collection, but this page focuses on complete wet scrubber systems and custom scrubber assemblies.",
        ],
      },
      {
        title: "Wet Scrubber Systems for Dust, Acid Gas and Odor Control",
        body: ["Wet scrubber systems are widely used in industries where exhaust gas contains dust, fumes, odors, acid gases or soluble vapors. The scrubber configuration and MOC depend on the pollutant type and gas chemistry.", "Our wet scrubber systems can be designed and fabricated for:"],
        bullets: [
          "Dust control", "Acid gas scrubbing", "Odor control", "Soluble vapor removal", "Fume scrubbing",
          "Mist and aerosol capture", "Chemical exhaust treatment", "Industrial flue gas cleaning",
          "Process exhaust gas cleaning", "Pollution control system integration",
        ],
      },
      {
        title: "Pollution Control and Gas Handling Equipment",
        body: [
          "National Engineers & Steel Fabricators is also a pollution control equipment manufacturer and gas handling equipment manufacturer in India, supporting custom fabrication for wet scrubbers, scrubber vessels, duct interfaces, mist eliminator sections, scrubber internals, platforms, supports and related fabricated assemblies.",
          "Our fabrication approach focuses on practical plant requirements such as duct alignment, maintenance access, inspection access, drainability, corrosion protection, separator interface, mist control and site integration.",
        ],
      },
      {
        title: "Types of Wet Scrubber Systems We Manufacture",
        body: ["National Engineers & Steel Fabricators manufactures wet scrubber systems and scrubber assemblies based on duty condition, pollutant type and client drawings.", "Common types include:"],
        bullets: [
          "Wet scrubber systems", "Industrial wet scrubbers", "Custom wet scrubber systems", "Spray scrubbers",
          "Packed-bed scrubbers", "Multistage wet scrubbers", "Acid gas scrubbers", "Odor control scrubbers",
          "Dust control scrubbers", "Soluble vapor scrubbers", "Fume scrubbers", "Scrubber towers", "Wet scrubber vessels",
          "Scrubbers with mist eliminator sections", "Scrubbers with demister sections", "Scrubber systems as per client drawing",
        ],
      },
      {
        title: "Key Features",
        bullets: [
          "Custom-built wet scrubber systems as per duty condition", "Suitable for dust, acid gas, odor and soluble vapor control",
          "Spray scrubber, packed-bed scrubber and multistage configuration support", "Scrubber vessel and scrubber tower fabrication",
          "Spray headers, nozzles and distribution arrangements", "Mist eliminator and demister section provision",
          "Inlet and outlet duct interface fabrication", "Drain, clean-out and inspection access arrangement",
          "Platform, ladder and support provision if required", "SS, CS, MS and lined construction options",
          "Rubber lining, epoxy lining and FRP lining support as required", "Corrosion-resistant fabrication based on gas chemistry",
          "Leak testing and inspection checks as applicable", "Material traceability and documentation support as agreed",
        ],
      },
      {
        title: "Applications",
        body: ["Our wet scrubber systems are used across different pollution control and gas handling applications, including:"],
        bullets: [
          "Chemical process exhaust systems", "Acid gas scrubbing systems", "Odor control applications", "Fine dust and fume control",
          "Soluble vapor removal", "Industrial flue gas cleaning", "Boiler and thermal exhaust systems",
          "Fertilizer plant exhaust treatment", "Pigment industry exhaust systems", "Metal processing exhaust streams",
          "Bulk handling dust control", "Pharma exhaust treatment", "Food and beverage process exhaust",
          "Water treatment chemical exhaust", "Industrial gas cleaning systems", "Pollution control projects",
        ],
      },
      {
        title: "Materials of Construction",
        body: ["National Engineers & Steel Fabricators manufactures wet scrubber systems using suitable materials based on gas chemistry, moisture, temperature, pollutant type, corrosion condition, abrasion risk and project specification.", "Common material options include:"],
        bullets: ["Stainless Steel 304", "Stainless Steel 316", "Stainless Steel 316L", "Carbon Steel with suitable lining", "Mild Steel with coating or lining", "Rubber-lined scrubber construction", "Epoxy-lined scrubber construction", "FRP-lined or composite-supported construction where suitable", "Special MOC as per client specification"],
      },
      {
        title: "Technical Specifications",
        table: {
          columns: ["Specification", "Details"],
          rows: [
            ["Product Type", "Wet Scrubber System"], ["Equipment Category", "Pollution Control & Gas Handling"],
            ["Application", "Dust control, acid gas scrubbing, odor control, fume and soluble vapor removal"],
            ["Scrubber Type", "Spray scrubber, packed-bed scrubber, multistage scrubber or custom configuration"],
            ["Build Basis", "Client drawing, duty condition, gas data, duct layout or project specification"],
            ["Gas Flow Rate", "As per client requirement"],
            ["Pollutant Type", "Dust, fumes, acid gases, odor, mist, soluble vapors or as per application"],
            ["Gas Temperature", "As per project requirement"], ["Gas Chemistry", "As per process condition and compatibility review"],
            ["Scrubbing Liquid", "Water, reagent solution or as per process requirement"],
            ["Main Components", "Scrubber vessel, spray headers, nozzles, mist eliminator, demister and supports"],
            ["Connections", "Gas inlet, gas outlet, liquid inlet, drain, clean-out and access openings"],
            ["Material of Construction", "SS, CS, MS, lined construction or as per requirement"],
            ["Lining Options", "Rubber lining, epoxy lining, FRP lining or as required"],
            ["Mist Control", "Mist eliminator or demister section as required"],
            ["Support Type", "Structural support, bracket support, base frame or custom support arrangement"],
            ["Testing", "Leak testing or other checks as applicable"], ["Inspection", "Dimensional checks, visual checks and weld inspection as required"],
            ["Documentation", "Material traceability, inspection reports and documentation pack as agreed"],
            ["Customization", "Available as per gas flow, pollutant data, chemistry, duct size and emission target"],
          ],
        },
      },
      {
        title: "Fabrication and Quality Control",
        body: ["Every wet scrubber system is fabricated with proper attention to material verification, fit-up, welding quality, dimensional accuracy, duct interface, spray header arrangement, mist eliminator section, access provision, lining readiness and inspection documentation.", "Quality checks may include:"],
        bullets: [
          "Material verification", "Drawing and duty condition review", "Fit-up inspection", "Welding quality checks",
          "Dimensional inspection", "Nozzle orientation verification", "Spray header alignment checking",
          "Mist eliminator or demister section checking", "Duct interface checking", "Drain and access provision checking",
          "Lining or coating checks if applicable", "Leak testing where applicable", "Final painting and finishing inspection",
          "Inspection and traceability documentation as agreed",
        ],
      },
      {
        title: "System Integration Support",
        body: ["A wet scrubber system must integrate properly with ducting, exhaust source, scrubber vessel, liquid circulation system, mist eliminator, drain line, platform access and downstream equipment.", "Our system integration focus includes:"],
        bullets: ["Gas inlet and outlet duct alignment", "Scrubbing liquid distribution", "Mist eliminator interface", "Drainability and clean-out access", "Maintenance and inspection access", "Platform and support planning", "Corrosion and abrasion protection", "Site installation readiness", "Documentation and inspection support"],
      },
      {
        title: "Why Choose National Engineers?",
        body: ["National Engineers & Steel Fabricators is a trusted wet scrubber system manufacturer, industrial scrubber manufacturer and pollution control fabrication company in Surat, Gujarat. We provide custom wet scrubber fabrication for industries that need durable, corrosion-aware and inspection-ready gas cleaning equipment.", "Reasons to work with us:"],
        bullets: [
          "Experienced wet scrubber system manufacturer in India", "Reliable wet scrubber supplier in Surat, Gujarat",
          "Custom wet scrubber system fabrication as per duty condition", "Spray scrubber, packed-bed scrubber and multistage scrubber fabrication",
          "Pollution control equipment fabrication for industrial plants", "SS, CS, MS and lined scrubber fabrication capability",
          "Mist eliminator, demister and scrubber internals support", "Rubber lining, epoxy lining and FRP lining options",
          "Leak testing and inspection documentation support as agreed",
          "Fabrication for chemical, pharma, fertilizer, metal processing, pigment and bulk handling industries",
        ],
      },
      {
        title: "Details Required for Quotation",
        body: ["To provide the right quotation for a wet scrubber system, please share:"],
        bullets: [
          "Gas flow rate", "Gas temperature profile", "Pollutant type and concentration", "Dust loading if applicable",
          "Gas chemistry", "Moisture and chloride content", "Target outlet emission limits", "Available water or reagent chemistry",
          "Duct size and duct layout", "Scrubber configuration preference", "Material of construction", "Lining or coating requirement",
          "Mist eliminator requirement", "Platform or access requirement", "Testing requirement", "Documentation requirement",
          "Delivery location and timeline",
        ],
      },
      {
        title: "Get a Quote for Wet Scrubber System",
        body: [
          "Looking for a wet scrubber system manufacturer and supplier in India?",
          "Share your gas flow rate, pollutant data, gas temperature, gas chemistry, duct sizes, scrubbing liquid details, MOC, lining requirement and emission target with National Engineers & Steel Fabricators. Our team will review your requirement and provide a suitable wet scrubber system fabrication solution for your pollution control project.",
        ],
      },
    ],
    note:
      "Share your gas flow rate, pollutant data, gas temperature, gas chemistry, duct sizes, scrubbing liquid details, MOC, lining requirement and emission target.",
    enquiry: {
      title: "Request a quote for a Wet Scrubber System",
      subtitle:
        "Share gas flow, pollutants, temperature, chemistry, duct sizes, scrubbing liquid, MOC, lining and emission targets.",
      productName: "Wet Scrubber System",
      buttonText: "Request Quote",
    },
    faqs: [
      { question: "What is a wet scrubber system?", answer: "A wet scrubber system is pollution control equipment used to remove dust, fumes, acid gases, odors, mist and soluble vapors from industrial exhaust gas using water or a scrubbing liquid." },
      { question: "Who is a wet scrubber system manufacturer in Surat?", answer: "National Engineers & Steel Fabricators is a wet scrubber system manufacturer in Surat, Gujarat, offering custom wet scrubbers as per gas flow, pollutant data, gas chemistry, duct layout and emission targets." },
      { question: "Do you manufacture wet scrubber systems in India?", answer: "Yes, National Engineers & Steel Fabricators is a wet scrubber system manufacturer and supplier in India, providing custom wet scrubber systems for pollution control and gas cleaning applications." },
      { question: "What pollutants can wet scrubbers remove?", answer: "Wet scrubbers can handle dust, fumes, mists, aerosols, acid gases, odors and soluble vapors depending on scrubber configuration, scrubbing liquid and gas chemistry." },
      { question: "What are the types of wet scrubber systems?", answer: "Common wet scrubber systems include spray scrubbers, packed-bed scrubbers, Venturi scrubbers and multistage wet scrubber systems depending on the pollutant and process requirement." },
      { question: "Can wet scrubbers be fabricated as per drawing?", answer: "Yes, wet scrubbers can be fabricated as per client drawings, duty conditions, gas flow rate, pollutant concentration, duct layout, MOC, lining requirement and inspection scope." },
      { question: "Which materials are used for wet scrubber systems?", answer: "Wet scrubbers can be fabricated in stainless steel, carbon steel, mild steel with lining, rubber-lined construction, epoxy-lined construction or FRP-lined construction depending on gas chemistry and corrosion condition." },
      { question: "What is the role of a mist eliminator in a wet scrubber?", answer: "A mist eliminator or demister helps reduce liquid droplet carryover from the cleaned gas stream before the gas leaves the scrubber system." },
      { question: "What details are required to get a wet scrubber quotation?", answer: "To get a quotation, you can share gas flow rate, gas temperature, pollutant type, pollutant concentration, gas chemistry, duct size, emission target, MOC, lining requirement and documentation needs." },
      { question: "How is wet scrubber system price calculated?", answer: "Wet scrubber system price depends on gas flow rate, scrubber size, configuration, MOC, lining, spray arrangement, mist eliminator, duct interface, supports, testing and documentation requirements." },
    ],
    seo: {
      title: "Wet Scrubber System Manufacturer in India | NESF",
      description:
        "Wet scrubber system manufacturer in Surat, India, offering custom scrubbers for dust, acid gas, odor and soluble vapor control.",
      keywords: [
        "wet scrubber system manufacturer", "wet scrubber manufacturer", "wet scrubber supplier",
        "wet scrubber system manufacturer in India", "wet scrubber system manufacturer in Surat", "industrial wet scrubber",
        "custom wet scrubber system", "wet scrubber fabrication", "industrial scrubber manufacturer", "scrubber system manufacturer",
        "pollution control equipment manufacturer", "gas cleaning equipment manufacturer", "acid gas scrubber manufacturer",
        "odor control scrubber", "dust control scrubber", "soluble vapor scrubber", "spray scrubber manufacturer",
        "packed bed scrubber manufacturer", "multistage wet scrubber", "wet scrubber vessel", "mist eliminator section",
        "demister section", "scrubber tower manufacturer", "scrubber internals", "corrosion resistant scrubber",
        "SS wet scrubber", "CS wet scrubber", "FRP lined scrubber", "rubber lined scrubber", "epoxy lined scrubber",
        "gas handling equipment manufacturer", "pollution control fabrication company in Surat",
      ],
    },
  },
  "ducting-flue-gas-lines": {
    title: "Ducting and Flue Gas Lines Manufacturer in India",
    headline: "Ducting and Flue Gas Lines Manufacturer in Surat",
    description:
      "National Engineers & Steel Fabricators is a trusted ducting and flue gas lines manufacturer in India, offering custom industrial ducting, flue gas ducting, exhaust ducting and gas handling ducting for pollution control systems, scrubber systems, stack connections, process plants and industrial exhaust applications.",
    pagePath: "/products/ducting-flue-gas-lines",
    image: "/product/13.jpg",
    imageAlt:
      "Industrial ducting and flue gas lines fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Product Type", value: "Ducting and Flue Gas Lines" },
      { label: "Application", value: "Exhaust, scrubber and stack connections" },
      { label: "Materials", value: "SS, CS, MS, FRP, GRP or lined" },
      { label: "Build Basis", value: "Duct layout, gas data and tie-ins" },
    ],
    overview: [
      "Based in Sachin GIDC, Surat, Gujarat, we manufacture ducting and flue gas lines as per client drawings, duct layout, gas flow rate, gas temperature, gas chemistry, duct size, tie-in points, support locations, material of construction, lining requirement, insulation requirement, inspection scope and documentation needs.",
      "Our ducting fabrication solutions are suitable for industries that require leak-tight, corrosion-aware, thermally stable and maintainable ducting assemblies instead of standard off-the-shelf duct sections.",
    ],
    sections: [
      {
        title: "Ducting and Flue Gas Lines Manufacturer in Surat",
        body: [
          "National Engineers & Steel Fabricators is an experienced ducting and flue gas lines manufacturer in Surat, offering custom ducting fabrication for chemical plants, wet scrubber systems, Venturi scrubbers, boiler exhaust lines, thermal systems, industrial ventilation systems, pollution control projects and gas handling applications.",
          "As a ducting manufacturer in India, we fabricate duct spools, elbows, reducers, transitions, flanged ducting, welded ducting, inspection doors, supports, stiffeners, expansion provisions and stack interface sections as per project drawings and site requirements.",
          "Each ducting assembly is manufactured with proper attention to fit-up accuracy, duct geometry, welding quality, flange alignment, support planning, drainability, corrosion protection and site installation readiness.",
        ],
      },
      {
        title: "Flue Gas Ducting Manufacturer",
        body: [
          "Flue gas ducting is used to transfer hot exhaust gases from process equipment, boilers, furnaces, scrubbers, filters or pollution control equipment toward the stack or downstream treatment system.",
          "National Engineers & Steel Fabricators is a reliable flue gas ducting manufacturer in India, providing custom fabricated flue gas lines for industrial plants where gas temperature, corrosion, moisture, condensation, thermal expansion and leak integrity are important.",
          "Our flue gas ducting can be manufactured with suitable material, lining, stiffeners, support arrangement, drain points, expansion joint interface and inspection access based on project requirements.",
        ],
      },
      {
        title: "Industrial Exhaust Ducting for Pollution Control Systems",
        body: [
          "Industrial exhaust ducting is used to move polluted, hot, wet or corrosive exhaust gases from the source to scrubbers, filters, separators, stacks or other pollution control equipment.",
          "As an industrial exhaust ducting manufacturer and pollution control ducting fabrication company, National Engineers & Steel Fabricators manufactures ducting systems for gas handling, dust extraction, fume transfer, wet exhaust handling and process exhaust movement.",
          "Our fabrication approach focuses on leak-tight construction, suitable MOC, smooth duct routing, access for maintenance and integration with connected equipment.",
        ],
      },
      {
        title: "Custom Ducting Fabrication",
        body: ["Every ducting and flue gas line project has different gas conditions, duct routing, site constraints, thermal movement, corrosion risk and support requirements. That is why National Engineers & Steel Fabricators provides custom ducting fabrication as per client-specific drawings and duty conditions.", "Our custom ducting fabrication scope can include:"],
        bullets: [
          "Straight duct spool fabrication", "Flue gas line fabrication", "Industrial exhaust ducting fabrication",
          "Duct elbow fabrication", "Duct reducer fabrication", "Duct transition fabrication", "Flanged ducting sections",
          "Welded ducting sections", "Scrubber inlet and outlet ducting", "Stack connection ducting",
          "Inspection door and access opening fabrication", "Drain and condensate collection provisions",
          "Stiffeners and reinforcement", "Support brackets and lifting provisions", "Expansion joint interface preparation",
          "Surface preparation and painting", "Rubber lining, epoxy lining or FRP/GRP lining support if required",
          "Modular dispatch planning and documentation support",
        ],
      },
      {
        title: "Scrubber Ducting and Stack Ducting",
        body: [
          "Ducting and flue gas lines are commonly used with wet scrubbers, Venturi scrubbers, packed-bed scrubbers, pollution control systems and stack outlets.",
          "As a scrubber ducting manufacturer, we fabricate ducting sections that connect exhaust sources to scrubbers and scrubbers to stacks. These ducting sections may require corrosion-resistant materials, lining, drainability, clean-out access and mist-related design considerations.",
          "As a stack ducting manufacturer, we fabricate ducting sections that connect gas handling equipment to stack lines as per duct layout, flange connections, support arrangement and outdoor exposure requirements.",
        ],
      },
      {
        title: "Gas Handling Ducting for Industrial Plants",
        body: ["Gas handling ducting must be fabricated carefully because it often carries hot, wet, corrosive, dusty or chemically active gases. Poor fabrication can lead to leakage, corrosion, maintenance issues and site installation problems.", "National Engineers & Steel Fabricators manufactures gas handling ducting with practical focus on:"],
        bullets: [
          "Gas inlet and outlet alignment", "Leak-tight fabrication", "Thermal movement consideration", "Corrosion protection",
          "Drainability for wet exhaust", "Inspection and clean-out access", "Proper stiffening for pressure zones",
          "Support and lifting arrangement", "Modular spool fabrication for site installation",
        ],
      },
      {
        title: "Types of Ducting and Flue Gas Lines We Fabricate",
        body: ["National Engineers & Steel Fabricators manufactures custom ducting and flue gas line assemblies for pollution control and industrial gas handling systems.", "Common types include:"],
        bullets: [
          "Ducting and flue gas lines", "Flue gas ducting", "Industrial exhaust ducting", "Process ducting",
          "Pollution control ducting", "Scrubber ducting", "Stack ducting", "Gas handling ducting", "Wet exhaust ducting",
          "Corrosion resistant ducting", "Duct spools", "Duct elbows", "Duct reducers", "Duct transitions",
          "Flanged ducting", "Welded ducting", "Lined ducting", "Modular ducting sections as per drawing",
        ],
      },
      {
        title: "Key Features",
        bullets: [
          "Custom-built ducting and flue gas lines as per drawing", "Suitable for pollution control and gas handling systems",
          "Flue gas ducting for hot exhaust transfer", "Industrial exhaust ducting for fumes, dust and gas movement",
          "Duct spools, elbows, reducers and transitions", "Flanged or welded ducting connection options",
          "Inspection doors, clean-out access and drain provisions", "Stiffeners and reinforcement for duct stability",
          "Expansion joint interface provision where required", "Support brackets and lifting provisions",
          "SS, CS, MS, FRP and GRP ducting options", "Rubber lining, epoxy lining and corrosion protection support",
          "Modular spool fabrication for faster site installation", "Leak testing and inspection support as applicable",
          "Documentation support as agreed",
        ],
      },
      {
        title: "Applications",
        body: ["Our ducting and flue gas lines are used across different pollution control and gas handling applications, including:"],
        bullets: [
          "Pollution control systems", "Wet scrubber systems", "Venturi scrubber systems", "Process exhaust transfer",
          "Flue gas handling", "Scrubber-to-stack connections", "Process equipment to scrubber connections",
          "Wet and corrosive exhaust lines", "Industrial ventilation systems", "Fume extraction systems", "Dust extraction systems",
          "Boiler exhaust lines", "Thermal exhaust systems", "Chemical process plants", "Fertilizer plants", "Pigment industries",
          "Metal processing units", "Bulk handling plants", "Manufacturing plants", "Industrial gas cleaning systems",
        ],
      },
      {
        title: "Materials of Construction",
        body: ["National Engineers & Steel Fabricators manufactures ducting and flue gas lines using suitable material based on gas temperature, gas chemistry, chlorides, moisture, condensation, abrasion, corrosion risk and outdoor exposure.", "Common material options include:"],
        bullets: ["Stainless Steel 304", "Stainless Steel 316", "Stainless Steel 316L", "Carbon Steel with suitable lining", "Mild Steel with coating or lining", "FRP ducting where duty permits", "GRP ducting where duty permits", "Rubber-lined ducting", "Epoxy-lined ducting", "Painted or coated ducting sections", "Special MOC as per client specification"],
      },
      {
        title: "Technical Specifications",
        table: {
          columns: ["Specification", "Details"],
          rows: [
            ["Product Type", "Ducting and Flue Gas Lines"], ["Equipment Category", "Pollution Control & Gas Handling"],
            ["Application", "Exhaust transfer, flue gas handling, scrubber ducting and stack connection"],
            ["Duct Type", "Straight spools, elbows, reducers, transitions, flanged ducting and welded ducting"],
            ["Build Basis", "Client drawing, duct layout, gas data, P&ID or project specification"],
            ["Gas Flow Rate", "As per client requirement"], ["Gas Temperature", "Normal and maximum temperature as per duty condition"],
            ["Gas Chemistry", "As per process condition and compatibility review"],
            ["Service Condition", "Hot, wet, corrosive, dusty or process exhaust as applicable"],
            ["Material of Construction", "SS, CS, MS, FRP, GRP, lined construction or as per requirement"],
            ["Lining Options", "Rubber lining, epoxy lining, FRP lining or as required"],
            ["Connection Type", "Flanged, welded, bolted or as per project requirement"],
            ["Main Components", "Spools, elbows, reducers, transitions, inspection doors, supports and stiffeners"],
            ["Drainability", "Low-point drain or condensate management provision as required"],
            ["Expansion Provision", "Expansion joint interface or thermal movement provision as required"],
            ["Support Type", "Brackets, structural supports, lifting lugs or custom support arrangement"],
            ["Surface Finish", "Painted, coated, lined or finished as per site condition"],
            ["Testing", "Leak testing or other checks as applicable"],
            ["Inspection", "Dimensional checks, fit-up checks and weld inspection as required"],
            ["Documentation", "Inspection records, material traceability and documentation pack as agreed"],
            ["Customization", "Available as per duct layout, gas condition, MOC, support locations and site constraints"],
          ],
        },
      },
      {
        title: "Fabrication and Quality Control",
        body: ["Every ducting and flue gas line assembly is fabricated with proper attention to material verification, fit-up, welding quality, flange alignment, duct geometry, stiffener placement, support arrangement, drainability and inspection readiness.", "Quality checks may include:"],
        bullets: [
          "Material verification", "Drawing and duct layout review", "Fit-up inspection", "Welding quality checks",
          "Dimensional inspection", "Flange alignment checking", "Duct transition geometry checking",
          "Stiffener and reinforcement checking", "Support and lifting point verification", "Inspection door and access provision checking",
          "Drainability and low-point check where applicable", "Lining or coating inspection if applicable",
          "Leak testing where applicable", "Final painting and finishing inspection", "Documentation compilation as agreed",
        ],
      },
      {
        title: "Modular Fabrication and Site Integration",
        body: ["Ducting and flue gas line projects often require multiple duct spools, elbows, transitions and tie-in sections. Modular fabrication helps reduce site work and supports faster installation.", "National Engineers & Steel Fabricators can fabricate modular ducting sections with match marks, flanged interfaces, support provisions and dispatch planning as per site erection requirements.", "Our site integration focus includes:"],
        bullets: ["Modular duct spool planning", "Equipment tie-in accuracy", "Scrubber and stack interface alignment", "Support location coordination", "Expansion joint interface planning", "Packing and dispatch sequencing", "Maintenance access and inspection access", "Site installation readiness"],
      },
      {
        title: "Why Choose National Engineers?",
        body: ["National Engineers & Steel Fabricators is a trusted ducting and flue gas lines manufacturer, flue gas ducting manufacturer and industrial ducting manufacturer in Surat, Gujarat. We provide custom ducting fabrication for industries that need durable, corrosion-aware and site-ready gas handling ducting.", "Reasons to work with us:"],
        bullets: [
          "Experienced ducting manufacturer in India", "Reliable ducting manufacturer in Surat, Gujarat",
          "Custom ducting fabrication as per drawing and duct layout", "Flue gas ducting manufacturer for hot exhaust applications",
          "Industrial exhaust ducting for pollution control systems", "Scrubber ducting and stack ducting fabrication support",
          "Duct spools, elbows, reducers and transitions fabrication", "SS, CS lined, FRP and GRP ducting support",
          "Stiffeners, supports, inspection doors and expansion provisions", "Leak testing and documentation support as agreed",
          "Fabrication for chemical, fertilizer, pigment, metal processing, boiler and gas cleaning applications",
        ],
      },
      {
        title: "Details Required for Quotation",
        body: ["To provide the right quotation for ducting and flue gas lines, please share:"],
        bullets: [
          "Duct layout drawing", "Gas flow rate", "Normal and maximum gas temperature", "Gas chemistry",
          "Moisture and condensation details", "Chloride content if applicable", "Dust loading or particulate details",
          "Duct size and thickness requirement", "Tie-in points", "Support locations", "Expansion joint interface requirement",
          "Inspection door requirement", "Drain and condensate management requirement", "Material of construction",
          "Lining or coating requirement", "Insulation or cladding requirement", "Outdoor exposure condition",
          "Testing requirement", "Documentation requirement", "Delivery location and timeline",
        ],
      },
      {
        title: "Get a Quote for Ducting and Flue Gas Lines",
        body: [
          "Looking for a ducting and flue gas lines manufacturer and supplier in India?",
          "Share your duct layout, gas conditions, temperature, gas chemistry, duct sizes, tie-in points, support locations, MOC, lining requirement and testing needs with National Engineers & Steel Fabricators. Our team will review your requirement and provide a suitable ducting and flue gas line fabrication solution for your pollution control or gas handling project.",
        ],
      },
    ],
    note:
      "Share your duct layout, gas conditions, temperature, gas chemistry, duct sizes, tie-in points, support locations, MOC, lining requirement and testing needs.",
    enquiry: {
      title: "Request a quote for Ducting & Flue Gas Lines",
      subtitle:
        "Share gas conditions, duct layout, sizes, tie-ins, supports, MOC, lining, insulation and testing requirements.",
      productName: "Ducting & Flue Gas Lines",
      buttonText: "Request Quote",
    },
    faqs: [
      { question: "What are ducting and flue gas lines?", answer: "Ducting and flue gas lines are fabricated duct systems used to move exhaust gases, fumes, flue gas or process gases from equipment to scrubbers, filters, stacks or pollution control systems." },
      { question: "Who is a ducting and flue gas lines manufacturer in Surat?", answer: "National Engineers & Steel Fabricators is a ducting and flue gas lines manufacturer in Surat, Gujarat, offering custom flue gas ducting, industrial exhaust ducting and gas handling ducting as per drawing." },
      { question: "Do you manufacture flue gas ducting in India?", answer: "Yes, National Engineers & Steel Fabricators manufactures flue gas ducting in India for hot exhaust transfer, scrubber connections, stack connections, boiler exhaust lines and industrial gas handling applications." },
      { question: "Can ducting be fabricated as per drawing?", answer: "Yes, ducting and flue gas lines can be fabricated as per duct layout, client drawings, gas conditions, duct size, tie-in points, support locations, MOC, lining requirement and testing scope." },
      { question: "What materials are used for ducting and flue gas lines?", answer: "Ducting can be fabricated in stainless steel, carbon steel, mild steel with lining, FRP, GRP, rubber-lined construction or epoxy-lined construction depending on gas temperature, chemistry and corrosion condition." },
      { question: "What is flue gas ducting used for?", answer: "Flue gas ducting is used to transfer hot exhaust gas from boilers, furnaces, process equipment, scrubbers or pollution control equipment toward stacks or downstream treatment systems." },
      { question: "What is scrubber ducting?", answer: "Scrubber ducting connects exhaust sources to scrubber systems and scrubber outlets to stacks or downstream equipment. It must be fabricated for duct alignment, corrosion resistance, drainability and leak integrity." },
      { question: "What details are required to get a quotation?", answer: "To get a quotation, you can share duct layout, gas flow, gas temperature, gas chemistry, duct size, tie-in points, support locations, MOC, lining, insulation and testing requirements." },
      { question: "What testing is done for ducting and flue gas lines?", answer: "Testing may include dimensional inspection, weld visual checks, flange alignment checks, duct geometry checks, lining or coating inspection and leak testing as per project requirement." },
      { question: "How is ducting and flue gas line price calculated?", answer: "Price depends on duct size, material, thickness, number of spools, elbows, reducers, transitions, flanges, supports, stiffeners, lining, coating, testing and documentation requirements." },
    ],
    seo: {
      title: "Ducting & Flue Gas Lines Manufacturer in India | NESF",
      description:
        "Ducting and flue gas lines manufacturer in Surat, India, offering exhaust ducting, spools, transitions, supports and lining.",
      keywords: [
        "ducting and flue gas lines manufacturer", "flue gas ducting manufacturer", "industrial ducting manufacturer",
        "exhaust ducting manufacturer", "ducting manufacturer in India", "ducting manufacturer in Surat",
        "flue gas ducting manufacturer in India", "flue gas ducting manufacturer in Surat", "industrial exhaust ducting",
        "process ducting manufacturer", "scrubber ducting manufacturer", "stack ducting manufacturer", "gas handling ducting",
        "pollution control ducting", "custom ducting fabrication", "ducting fabrication company in Surat",
        "industrial ducting fabrication", "duct spools manufacturer", "duct elbows manufacturer", "duct reducers manufacturer",
        "duct transitions manufacturer", "flanged ducting", "welded ducting", "duct supports", "duct stiffeners",
        "expansion joint interface", "inspection doors", "corrosion resistant ducting", "SS ducting", "CS lined ducting",
        "FRP ducting", "GRP ducting", "rubber lined ducting", "epoxy lined ducting", "leak testing", "modular ducting fabrication",
      ],
    },
  },
  "scrubber-internals-liners": {
    title: "Scrubber Internals and Liners Manufacturer in India",
    headline: "Scrubber Internals and Liners Manufacturer in Surat",
    description:
      "National Engineers & Steel Fabricators is a trusted scrubber internals and liners manufacturer in India, offering custom scrubber internal components, spray headers, nozzle mounting arrangements, mist eliminator frames, demister frames, baffles, perforated plates, flow straighteners, drain arrangements and protective liner support for industrial scrubber systems.",
    pagePath: "/products/scrubber-internals-liners",
    image: "/product/21.jpeg",
    imageAlt:
      "Scrubber internals and protective liner components fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Product Type", value: "Scrubber Internals and Liners" },
      { label: "Internals", value: "Headers, baffles, frames and plates" },
      { label: "Liners", value: "Rubber, polymer or sheet lining" },
      { label: "Build Basis", value: "Scrubber geometry and duty condition" },
    ],
    overview: [
      "Based in Sachin GIDC, Surat, Gujarat, we manufacture scrubber internals and liners as per client drawings, scrubber geometry, gas flow condition, exhaust chemistry, temperature, dust loading, corrosion risk, erosion profile, material specification, access requirement, inspection scope and documentation needs.",
      "Our scrubber internals and liner fabrication solutions are suitable for wet scrubbers, Venturi scrubbers, packed-bed scrubbers, spray scrubbers, pollution control systems and industrial gas cleaning equipment where performance, corrosion life and maintenance access are important.",
    ],
    sections: [
      {
        title: "Scrubber Internals and Liners Manufacturer in Surat",
        body: [
          "National Engineers & Steel Fabricators is an experienced scrubber internals and liners manufacturer in Surat, offering custom fabrication for chemical plants, fertilizer plants, pigment industries, metal processing units, bulk handling plants, boiler exhaust systems, wet scrubber systems and industrial pollution control projects.",
          "As a scrubber internals manufacturer in India, we fabricate internal components that support gas-liquid contact, flow distribution, mist separation, drainage, access and service reliability.",
          "As a scrubber liners manufacturer in India, we support protective liner concepts and liner-ready fabrication for corrosive, erosive and chemically aggressive scrubber duties.",
        ],
      },
      {
        title: "Custom Scrubber Internals Fabrication",
        body: ["Scrubber internals directly affect scrubber efficiency, gas-liquid contact, pressure-drop stability, droplet separation, maintenance access and long-term reliability. Poorly fabricated internals can lead to uneven distribution, carryover, corrosion, choking, higher maintenance and reduced system performance.", "National Engineers & Steel Fabricators provides custom scrubber internals fabrication as per scrubber design, duty condition and client specification.", "Our scrubber internals fabrication scope can include:"],
        bullets: [
          "Spray header fabrication", "Nozzle mounting arrangements", "Liquid distribution systems", "Mist eliminator frames",
          "Demister frames", "Baffle plates", "Perforated plates", "Flow straighteners", "Drain arrangements",
          "Internal support frames", "Access-friendly removable assemblies", "Replaceable wear zones",
          "Mounting brackets and support members", "Retrofit internal components", "Internal assemblies as per drawing",
        ],
      },
      {
        title: "Scrubber Liners and Protective Lining Support",
        body: ["Scrubber liners are used to protect scrubber body sections and internal surfaces from corrosion, chemical attack, erosion and abrasion. Correct liner selection and liner-friendly fabrication help improve scrubber service life and reduce maintenance downtime.", "National Engineers & Steel Fabricators supports scrubber liner fabrication requirements based on service chemistry, temperature, pH range, chloride content, solvent exposure, dust abrasiveness and maintenance strategy.", "Our scrubber liner support scope may include:"],
        bullets: [
          "Rubber lining support", "Polymer lining support", "Sheet lining support", "Liner-ready shell preparation",
          "Segmented liner arrangement support", "Replaceable liner concepts", "Wear protection in high-erosion zones",
          "Protective plates and liner holding arrangements", "Corrosion protection support for wet scrubber service",
          "Repair-friendly liner layouts as per project requirement",
        ],
      },
      {
        title: "Wet Scrubber Internals",
        body: [
          "Wet scrubber internals are used to improve contact between gas and scrubbing liquid, support mist separation and reduce liquid carryover. These internals are important in wet scrubber systems used for dust control, fume removal, acid gas scrubbing, odor control and soluble vapor removal.",
          "National Engineers & Steel Fabricators manufactures wet scrubber internals such as spray headers, nozzle supports, demister frames, mist eliminator supports, baffles, drain arrangements and internal support structures as per scrubber geometry and duty requirement.",
        ],
      },
      {
        title: "Venturi Scrubber Internals",
        body: [
          "Venturi scrubbers require robust internal and interface components because they often operate under high dust loading, fine particulate capture duty, corrosive gas service and erosion-prone conditions.",
          "Our Venturi scrubber internal support can include liquid injection header fabrication, throat support components, drain arrangements, wear protection zones, separator interface support and mist eliminator frame fabrication as per project drawings and scrubber duty.",
        ],
      },
      {
        title: "Mist Eliminator Frames and Demister Frames",
        body: [
          "Mist eliminators and demisters are used to reduce liquid droplet carryover from scrubber outlet gas streams. Their frames, supports and access-friendly arrangements must be fabricated accurately for proper installation, cleaning and maintenance.",
          "National Engineers & Steel Fabricators manufactures mist eliminator frames and demister frames as per scrubber size, internal layout, access requirement and mounting arrangement.",
          "These frames can be designed for fixed, removable or maintenance-friendly installation depending on client requirements.",
        ],
      },
      {
        title: "Baffles, Perforated Plates and Flow Straighteners",
        body: [
          "Baffles, perforated plates and flow straighteners are used to control gas movement, improve distribution, reduce turbulence, support separation and manage liquid or particulate behavior inside scrubber systems.",
          "We fabricate baffle plates, perforated plates, flow straighteners and related internal components as per drawing, hole pattern, thickness, MOC, support arrangement and installation requirement.",
        ],
      },
      {
        title: "Scrubber Retrofit Internals",
        body: ["Existing scrubbers may require replacement internals due to corrosion, erosion, damage, choking, poor distribution or performance improvement requirements.", "National Engineers & Steel Fabricators supports scrubber retrofit internal fabrication where worn or damaged components need to be replaced with improved, repair-friendly or more durable assemblies.", "Retrofit support may include:"],
        bullets: [
          "Replacement spray headers", "Replacement mist eliminator frames", "Replacement baffles",
          "Replacement perforated plates", "Replacement liner sections", "Repair-friendly liner segmentation",
          "Wear zone replacement", "Custom internals based on existing scrubber geometry",
        ],
      },
      {
        title: "Types of Scrubber Internals and Liners We Manufacture",
        body: ["National Engineers & Steel Fabricators manufactures scrubber internals, liner support components and protective assemblies based on client drawings and duty conditions.", "Common types include:"],
        bullets: [
          "Scrubber internals", "Wet scrubber internals", "Venturi scrubber internals", "Spray headers",
          "Nozzle mounting arrangements", "Liquid distribution headers", "Mist eliminator frames", "Demister frames",
          "Baffle plates", "Perforated plates", "Flow straighteners", "Drain arrangements", "Internal support frames",
          "Replaceable wear zones", "Scrubber liners", "Rubber liner support", "Polymer liner support",
          "Sheet liner support", "Retrofit scrubber internals", "Custom scrubber internal components",
        ],
      },
      {
        title: "Key Features",
        bullets: [
          "Custom-built scrubber internals and liners as per drawing", "Suitable for wet scrubbers, Venturi scrubbers and gas cleaning systems",
          "Spray headers and nozzle mounting arrangements", "Mist eliminator and demister frame fabrication",
          "Baffles, perforated plates and flow straighteners", "Drain and clean-out arrangement support",
          "Replaceable internals for easier maintenance", "Protective liner support for corrosion and erosion resistance",
          "Rubber, polymer and sheet lining support as per service condition", "Repair-friendly liner segmentation where required",
          "SS, CS, MS and lined construction options", "Fabrication for new scrubbers and retrofit replacement jobs",
          "Inspection, fit-up and dimensional control support", "Documentation support as agreed",
        ],
      },
      {
        title: "Applications",
        body: ["Our scrubber internals and liners are used across different pollution control and gas handling applications, including:"],
        bullets: [
          "Wet scrubber systems", "Venturi scrubbers", "Spray scrubbers", "Packed-bed scrubbers", "Multistage scrubbers",
          "Pollution control systems", "Gas cleaning equipment", "Acid gas scrubbers", "Odor control scrubbers",
          "Dust control scrubbers", "Fume scrubbers", "Mist and aerosol control systems", "Chemical exhaust treatment",
          "Fertilizer plant exhaust systems", "Pigment industry exhaust systems", "Metal processing exhaust streams",
          "Boiler and thermal exhaust systems", "Scrubber retrofit and replacement jobs",
        ],
      },
      {
        title: "Materials of Construction",
        body: ["National Engineers & Steel Fabricators manufactures scrubber internals and liner support components using suitable materials based on gas chemistry, scrubbing liquid, temperature, pH range, chlorides, dust characteristics, corrosion risk and abrasion profile.", "Common material options include:"],
        bullets: ["Stainless Steel 304", "Stainless Steel 316", "Stainless Steel 316L", "Carbon Steel with suitable lining", "Mild Steel with coating or lining", "Rubber-lined components", "Polymer-lined components", "Sheet-lined components", "Wear-resistant liner sections where required", "Special MOC as per client specification"],
      },
      {
        title: "Technical Specifications",
        table: {
          columns: ["Specification", "Details"],
          rows: [
            ["Product Type", "Scrubber Internals and Liners"], ["Equipment Category", "Pollution Control & Gas Handling"],
            ["Application", "Distribution, demisting, flow control, corrosion protection and erosion protection"],
            ["Suitable For", "Wet scrubbers, Venturi scrubbers, spray scrubbers, packed-bed scrubbers and gas cleaning systems"],
            ["Build Basis", "Client drawing, scrubber geometry, duty condition or project specification"],
            ["Internal Components", "Spray headers, nozzle supports, baffles, perforated plates, mist eliminator frames and drain arrangements"],
            ["Liner Types", "Rubber lining, polymer lining, sheet lining or service-specific protective lining"],
            ["Material of Construction", "SS, CS, MS, lined construction or as per requirement"],
            ["Gas Chemistry", "As per exhaust composition and compatibility requirement"], ["Temperature Range", "As per project requirement"],
            ["Dust Loading", "As per process and exhaust condition"], ["Abrasion Profile", "As per dust characteristics and gas velocity zones"],
            ["Access Requirement", "Removable, replaceable or service-friendly internals as required"],
            ["Inspection", "Dimensional checks, fit-up checks and weld visual inspection"], ["Testing", "As per project requirement"],
            ["Documentation", "Material records, inspection reports and documentation pack as agreed"],
            ["Customization", "Available as per scrubber size, internals layout, chemistry, MOC and maintenance requirement"],
          ],
        },
      },
      {
        title: "Fabrication and Quality Control",
        body: ["Every scrubber internal and liner component is fabricated with proper attention to material verification, fit-up, welding quality, dimensional accuracy, hole pattern accuracy, mounting alignment, access requirement and inspection readiness.", "Quality checks may include:"],
        bullets: [
          "Material verification", "Drawing and scrubber geometry review", "Fit-up inspection", "Welding quality checks",
          "Dimensional inspection", "Hole pattern and slot checking", "Spray header alignment checking",
          "Nozzle mounting verification", "Mist eliminator frame checking", "Baffle and perforated plate checking",
          "Liner-ready surface verification where applicable", "Access and replaceability checks", "Final inspection and documentation as agreed",
        ],
      },
      {
        title: "Maintenance and Retrofit Support",
        body: ["Scrubber internals and liners should be designed and fabricated with maintenance access in mind. Components that are difficult to inspect or replace can increase downtime and maintenance cost.", "National Engineers & Steel Fabricators supports repair-friendly and retrofit-ready fabrication concepts for scrubber internals and liners.", "Our maintenance-focused approach includes:"],
        bullets: ["Replaceable internal components", "Access-friendly frame arrangements", "Segmented liner concepts", "Wear zone protection", "Easy removal and reinstallation planning", "Support for existing scrubber geometry", "Fabrication for new and retrofit scrubber systems"],
      },
      {
        title: "Why Choose National Engineers?",
        body: ["National Engineers & Steel Fabricators is a trusted scrubber internals manufacturer, scrubber liners manufacturer and pollution control equipment fabrication company in Surat, Gujarat. We provide custom internals and liner support fabrication for industries that need reliable scrubber performance, corrosion protection and maintenance-friendly designs.", "Reasons to work with us:"],
        bullets: [
          "Experienced scrubber internals and liners manufacturer in India", "Reliable scrubber internals supplier in Surat, Gujarat",
          "Custom scrubber internal components as per drawing", "Spray header and nozzle mounting arrangement fabrication",
          "Mist eliminator frame and demister frame fabrication", "Baffles, perforated plates and flow straighteners",
          "Rubber, polymer and sheet lining support", "Corrosion and erosion protection support",
          "Retrofit scrubber internals fabrication", "SS, CS, MS and lined fabrication capability",
          "Inspection and documentation support as agreed", "Fabrication for wet scrubbers, Venturi scrubbers and pollution control systems",
        ],
      },
      {
        title: "Details Required for Quotation",
        body: ["To provide the right quotation for scrubber internals and liners, please share:"],
        bullets: [
          "Scrubber drawing or internal layout", "Existing scrubber geometry", "Gas flow rate", "Exhaust composition", "pH range",
          "Chloride content", "Solvent content, if any", "Gas temperature", "Thermal cycling or shock condition",
          "Dust loading", "Abrasion and erosion profile", "Required internal components", "Liner or protective system requirement",
          "Material of construction", "Access and maintenance requirement", "Inspection requirement", "Documentation requirement",
          "Delivery location and timeline",
        ],
      },
      {
        title: "Get a Quote for Scrubber Internals and Liners",
        body: [
          "Looking for a scrubber internals and liners manufacturer in India?",
          "Share your scrubber drawing, exhaust chemistry, temperature, dust loading, scrubber geometry, internal component requirement, liner requirement, MOC and inspection needs with National Engineers & Steel Fabricators. Our team will review your requirement and provide a suitable scrubber internals and liner fabrication solution for your pollution control system.",
        ],
      },
    ],
    note:
      "Share your scrubber drawing, exhaust chemistry, temperature, dust loading, scrubber geometry, internal components, liner requirement, MOC and inspection needs.",
    enquiry: {
      title: "Request a quote for Scrubber Internals & Liners",
      subtitle:
        "Share scrubber geometry, exhaust chemistry, temperature, dust loading, internals, liners and maintenance requirements.",
      productName: "Scrubber Internals & Liners",
      buttonText: "Request Quote",
    },
    faqs: [
      { question: "What are scrubber internals?", answer: "Scrubber internals are internal components used inside scrubber systems to support gas-liquid contact, flow distribution, demisting, drainage, separation and maintenance access." },
      { question: "Who is a scrubber internals and liners manufacturer in Surat?", answer: "National Engineers & Steel Fabricators is a scrubber internals and liners manufacturer in Surat, Gujarat, offering spray headers, mist eliminator frames, baffles, perforated plates, flow straighteners and liner support components." },
      { question: "Do you manufacture scrubber internals in India?", answer: "Yes, National Engineers & Steel Fabricators manufactures scrubber internals in India for wet scrubbers, Venturi scrubbers, packed-bed scrubbers, spray scrubbers and industrial gas cleaning systems." },
      { question: "What are scrubber liners used for?", answer: "Scrubber liners are used to protect scrubber surfaces from corrosion, erosion, chemical attack and abrasion caused by wet exhaust gases, acidic media, dust and process chemicals." },
      { question: "What scrubber internal components do you fabricate?", answer: "We fabricate spray headers, nozzle mounting arrangements, mist eliminator frames, demister frames, baffle plates, perforated plates, flow straighteners, drain arrangements, support frames and replaceable wear zones." },
      { question: "Can scrubber internals be fabricated as per drawing?", answer: "Yes, scrubber internals can be fabricated as per client drawings, scrubber geometry, gas flow condition, exhaust chemistry, temperature, dust loading, MOC and maintenance requirements." },
      { question: "What materials are used for scrubber internals and liners?", answer: "Scrubber internals and liners can be fabricated in stainless steel, carbon steel, mild steel with lining, rubber-lined construction, polymer-lined construction, sheet-lined construction or special materials as per service condition." },
      { question: "What is the use of mist eliminator frames?", answer: "Mist eliminator frames support demister or mist eliminator elements inside scrubbers and help reduce liquid droplet carryover from the cleaned gas stream." },
      { question: "What details are required to get a quotation?", answer: "To get a quotation, you can share scrubber drawing, internal layout, exhaust chemistry, temperature, dust loading, pH range, chloride content, MOC, liner requirement and documentation needs." },
      { question: "How is scrubber internals and liners price calculated?", answer: "Price depends on component type, size, material, quantity, fabrication complexity, liner requirement, corrosion protection, access arrangement, inspection, documentation and delivery requirements." },
    ],
    seo: {
      title: "Scrubber Internals & Liners Manufacturer in India | NESF",
      description:
        "Scrubber internals and liners manufacturer in Surat, India, offering spray headers, baffles, mist eliminator frames and liners.",
      keywords: [
        "scrubber internals and liners manufacturer", "scrubber internals manufacturer", "scrubber liners manufacturer",
        "scrubber internals supplier", "scrubber liners supplier", "scrubber internals manufacturer in India",
        "scrubber liners manufacturer in India", "scrubber internals manufacturer in Surat", "scrubber liners manufacturer in Surat",
        "industrial scrubber internals", "custom scrubber internals", "scrubber internal components",
        "scrubber spray header manufacturer", "spray header fabrication", "nozzle mounting arrangement",
        "mist eliminator frame manufacturer", "demister frame manufacturer", "baffle plate manufacturer",
        "perforated plate manufacturer", "flow straightener manufacturer", "drain arrangement fabrication",
        "scrubber liner fabrication", "rubber lined scrubber", "polymer lined scrubber", "sheet lined scrubber",
        "corrosion resistant liners", "erosion protection liners", "scrubber retrofit internals", "wet scrubber internals",
        "venturi scrubber internals", "pollution control equipment manufacturer", "gas handling equipment manufacturer",
        "scrubber fabrication company in Surat",
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
