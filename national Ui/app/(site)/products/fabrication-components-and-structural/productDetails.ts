import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import type { ProductDetail } from "../pressure-vessels-and-storage/productDetails";

export const CATEGORY_NAME = "Fabrication Components & Structural";

export const fabricationStructuralNav = [
  {
    label: "Base Plates",
    href: "/products/base-plates",
  },
  {
    label: "Pipe Saddles & Supports",
    href: "/products/pipe-saddles-supports",
  },
  {
    label: "Jack Stools / Temporary Supports",
    href: "/products/jack-stools-temporary-supports",
  },
  {
    label: "Liners (Hard Plate / Wear Plate)",
    href: "/products/liners-hard-wear-plate",
  },
  {
    label: "Heavy Structural Fabrication (Custom)",
    href: "/products/custom-heavy-structural-fabrication",
  },
];

export const productDetails = {
  "base-plates": {
    title: "Base Plate Manufacturer and Supplier in India",
    headline: "Base Plate Manufacturer in Surat",
    description:
      "National Engineers & Steel Fabricators is a trusted base plate manufacturer and supplier in India, offering custom steel base plates, sole plates, mounting plates, equipment base plates, skid base plates and structural base plates for industrial equipment, columns, skids, pipe racks, platforms and foundation interfaces.",
    pagePath: "/products/base-plates",
    image: "/product/18.jpg",
    imageAlt: "Industrial base plates fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Product Type", value: "Base Plates / Sole Plates / Mounting Plates" },
      { label: "Applications", value: "Equipment, skids, columns and structures" },
      { label: "Materials", value: "MS, CS, alloy steel, SS or as required" },
      { label: "Build Basis", value: "Drawing, anchor layout and load requirement" },
    ],
    overview: [
      "Based in Sachin GIDC, Surat, Gujarat, we manufacture base plates as per client drawings, dimensions, thickness, steel grade, bolt pattern, anchor layout, hole or slot requirements, load data, flatness requirement, machining requirement, stiffener requirement, coating specification and site installation needs.",
      "Our base plate fabrication solutions are suitable for industries that require accurate load transfer, stable equipment mounting, proper anchoring, leveling, grouting and reliable alignment during site installation.",
    ],
    sections: [
      {
        title: "Base Plate Manufacturer in Surat",
        body: ["National Engineers & Steel Fabricators is an experienced base plate manufacturer in Surat, offering custom base plate fabrication for process equipment, pumps, compressors, tanks, vessels, skids, pipe racks, platforms, columns, access structures and industrial foundations.", "As a base plate manufacturer in India, we fabricate base plates with anchor holes, slots, stiffeners, gussets, lifting lugs, grout pockets, machined faces and custom profiles as per project drawings and installation requirements.", "Each base plate is manufactured with attention to plate dimensions, hole accuracy, slot orientation, flatness, weld quality, diagonal checks, coating, marking and site-ready packing."],
      },
      {
        title: "Steel Base Plates for Equipment and Structural Installation",
        body: ["Steel base plates are used to distribute load from equipment, columns or structures onto foundations. They provide a stable interface for anchoring, leveling, grouting and alignment during installation.", "National Engineers & Steel Fabricators manufactures steel base plates for industrial applications where foundation accuracy, load transfer and bolted installation are important.", "Our steel base plates can be customized for:"],
        bullets: ["Process equipment mounting", "Pump and compressor foundations", "Skid base installation", "Tank and vessel support interfaces", "Structural column bases", "Pipe rack foundations", "Platform support bases", "Access structure installation", "Industrial equipment foundations", "Heavy fabricated structures"],
      },
      {
        title: "Custom Base Plate Fabrication",
        body: ["Every project has different load conditions, anchor layouts, plate sizes, hole patterns, flatness requirements and coating specifications. That is why National Engineers & Steel Fabricators provides custom base plate fabrication as per client drawings and project requirements.", "Our base plate fabrication scope can include:"],
        bullets: ["Steel base plate fabrication", "Equipment base plate fabrication", "Structural base plate fabrication", "Column base plate fabrication", "Skid base plate fabrication", "Sole plate fabrication", "Mounting plate fabrication", "Anchor hole drilling", "Slot cutting", "CNC profile cutting", "Plasma cutting", "Oxy cutting", "Drilling and machining support", "Stiffener and gusset welding", "Grout pocket fabrication", "Lifting lug provision", "Primer, paint, epoxy or galvanizing support", "Part marking and packing for site identification"],
      },
      {
        title: "Equipment Base Plates",
        body: ["Equipment base plates are used below pumps, compressors, process equipment, skids, tanks, vessels and industrial machines to provide stable mounting and alignment.", "National Engineers & Steel Fabricators manufactures equipment base plates with accurate hole patterns, anchor-bolt slots, flatness checks and machining support where required.", "Equipment base plates can be fabricated as per:"],
        bullets: ["GA drawings", "Equipment foundation drawings", "Anchor bolt layout", "Load data", "Leveling requirement", "Grouting requirement", "Machining requirement", "Coating requirement"],
      },
      {
        title: "Structural Base Plates",
        body: ["Structural base plates are used at the bottom of columns, pipe racks, platforms, access structures and heavy fabricated structural assemblies.", "National Engineers & Steel Fabricators manufactures structural base plates with proper plate thickness, bolt-hole layout, gussets, stiffeners and welding attachments as per structural drawings.", "Structural base plate fabrication can include:"],
        bullets: ["Column base plates", "Pipe rack base plates", "Platform base plates", "Structural support base plates", "Access structure base plates", "Heavy fabrication base plates", "Base plates with stiffeners", "Base plates with gussets", "Base plates with lifting lugs"],
      },
      {
        title: "Sole Plates and Mounting Plates",
        body: ["Sole plates and mounting plates are used where equipment, structures or mechanical assemblies require a precise and stable mounting surface.", "National Engineers & Steel Fabricators manufactures sole plates and mounting plates as per required thickness, profile, holes, slots, flatness, machining and finish requirements.", "These plates can be supplied for:"],
        bullets: ["Equipment leveling", "Machine mounting", "Skid mounting", "Support structure mounting", "Bearing or equipment interface", "Foundation interface", "Industrial retrofit jobs", "Replacement mounting assemblies"],
      },
      {
        title: "Base Plates with Anchor Holes, Slots and Grout Pockets",
        body: ["Base plates often require accurate holes, slots and grout pockets for anchoring, leveling and site installation.", "National Engineers & Steel Fabricators fabricates base plates with:", "Hole and slot accuracy is important because even small dimensional errors can create installation delays during foundation alignment."],
        bullets: ["Anchor bolt holes", "Anchor bolt slots", "Slotted holes", "Hole PCD as per drawing", "Grout pockets", "Leveling provisions", "Stiffener support", "Gusset support", "Machined flatness faces where required", "Marking for site identification"],
      },
      {
        title: "Machined, Drilled and Profile-Cut Base Plates",
        body: ["Base plates may require CNC cutting, plasma cutting, oxy cutting, drilling, machining or flatness control depending on the project requirement.", "National Engineers & Steel Fabricators can fabricate profile-cut base plates with drilled holes, slots, machined faces and custom edges as per approved drawings.", "Fabrication can include:"],
        bullets: ["CNC profile cutting", "Plasma profile cutting", "Oxy profile cutting", "Drilling", "Slotting", "Edge preparation", "Machining support", "Flatness checking", "Level-reference checks", "Hole PCD and diagonal checks"],
      },
      {
        title: "Types of Base Plates We Manufacture",
        body: ["National Engineers & Steel Fabricators manufactures custom base plates and related plate components for industrial and structural applications.", "Common types include:"],
        bullets: ["Steel base plates", "Industrial base plates", "Equipment base plates", "Machine base plates", "Structural base plates", "Column base plates", "Skid base plates", "Sole plates", "Mounting plates", "Anchor bolt base plates", "Base plates with holes", "Base plates with slots", "Base plates with stiffeners", "Base plates with gussets", "Base plates with grout pockets", "Machined base plates", "Drilled base plates", "CNC cut base plates", "MS base plates", "CS base plates", "SS base plates", "Custom base plates as per drawing"],
      },
      {
        title: "Key Features",
        bullets: ["Custom-built base plates as per drawing", "Suitable for equipment, skids, columns and structures", "Steel base plates, sole plates and mounting plates", "Anchor holes, slots and bolt-pattern fabrication", "Stiffeners, gussets and lifting lug provision", "Grout pockets and leveling provisions where required", "CNC, plasma or oxy profile cutting support", "Drilling and machining support where required", "Flatness, hole PCD and diagonal checks", "MS, CS, alloy steel and SS fabrication options", "Primer, paint, epoxy or galvanizing support", "Part marking for easy site identification", "Packing for safe transport and site installation", "Fabrication as per client drawings and inspection needs"],
      },
      {
        title: "Applications",
        body: ["Our base plates are used across different industrial and structural applications, including:"],
        bullets: ["Process equipment foundations", "Pump base installation", "Compressor base installation", "Industrial machinery mounting", "Process skids", "Structural column bases", "Pipe rack foundations", "Platform supports", "Access structures", "Heavy fabricated structures", "Tanks and vessel support interfaces", "Industrial equipment foundations", "Retrofit and replacement jobs", "Plant modification projects", "Custom structural fabrication projects"],
      },
      {
        title: "Materials of Construction",
        body: ["National Engineers & Steel Fabricators manufactures base plates using suitable material based on load condition, site environment, corrosion risk, equipment requirement and project specification.", "Common material options include:", "MS and CS base plates are commonly used for general industrial and structural applications, while SS base plates are preferred where corrosion resistance or process-area compatibility is required."],
        bullets: ["Mild Steel", "Carbon Steel", "Alloy Steel", "Stainless Steel", "Painted base plates", "Epoxy-coated base plates", "Galvanized base plates where required", "Special MOC as per client specification"],
      },
      {
        title: "Technical Specifications",
        table: { columns: ["Specification", "Details"], rows: [["Product Type", "Base Plates / Sole Plates / Mounting Plates"], ["Equipment Category", "Fabrication Components & Structural"], ["Application", "Load transfer, anchoring, leveling, grouting and equipment or structural installation"], ["Build Basis", "GA drawing, foundation drawing, anchor layout, equipment drawing or project specification"], ["Material of Construction", "MS, CS, alloy steel, SS or as per requirement"], ["Plate Thickness", "As per drawing and load requirement"], ["Plate Size", "As per client drawing"], ["Plate Profile", "Rectangular, square, circular, custom profile or as per drawing"], ["Hole Requirement", "Anchor holes, slotted holes, PCD holes or custom pattern"], ["Slot Requirement", "As per anchor bolt layout and installation tolerance"], ["Reinforcement", "Stiffeners, gussets or welded attachments as required"], ["Grout Provision", "Grout pockets or leveling provisions as specified"], ["Cutting Method", "CNC, plasma, oxy or as per requirement"], ["Machining", "Machined flatness faces where required"], ["Surface Finish", "Primer, paint, epoxy, galvanizing, SS finish or as specified"], ["Inspection", "Dimensional checks, hole checks, PCD checks, diagonal checks and flatness checks"], ["Marking", "Part marking and identification as required"], ["Packing", "Packed for safe transport and site installation"], ["Documentation", "Inspection records, material details and documentation pack as agreed"], ["Customization", "Available as per dimensions, thickness, grade, holes, slots, machining, coating and inspection requirement"]] },
      },
      {
        title: "Fabrication and Quality Control",
        body: ["Every base plate is fabricated with proper attention to material verification, cutting accuracy, drilling accuracy, hole pattern, slot orientation, flatness, fit-up, welding quality, machining requirement, coating and final inspection.", "Quality checks may include:"],
        bullets: ["Material verification", "Drawing and anchor layout review", "Plate size verification", "Thickness verification", "Profile cutting inspection", "Hole diameter checking", "Hole PCD checking", "Slot dimension checking", "Diagonal dimension checking", "Flatness checking", "Level-reference checking where required", "Stiffener and gusset fit-up inspection", "Welding quality checks", "Machining inspection where applicable", "Surface preparation checks", "Painting, epoxy or galvanizing checks where applicable", "Part marking checks", "Packing and dispatch readiness checks", "Documentation compilation as agreed"],
      },
      {
        title: "Site Installation and Fit-Up Support",
        body: ["Base plates must match foundation bolts, anchor layout and equipment mounting points accurately. Incorrect hole location, slot orientation or flatness can create site alignment issues.", "Our installation-focused fabrication approach includes:"],
        bullets: ["Accurate anchor hole layout", "Correct slot orientation", "Controlled plate dimensions", "Flatness checks where required", "Part marking for easy identification", "Packing for site handling", "Fabrication as per approved drawing", "Machining support where specified", "Coating suitable for site environment", "Dispatch planning as per project sequence"],
      },
      {
        title: "Why Choose National Engineers?",
        body: ["National Engineers & Steel Fabricators is a trusted base plate manufacturer and structural fabrication company in Surat, Gujarat. We provide custom base plate fabrication for industries that require accurate, durable and installation-ready plates for equipment and structural foundations.", "Reasons to work with us:"],
        bullets: ["Experienced base plate manufacturer in India", "Reliable base plate supplier in Surat, Gujarat", "Custom steel base plates as per drawing", "Equipment base plates, structural base plates and sole plates", "Anchor holes, slots, grout pockets and stiffener provision", "CNC, plasma and oxy profile cutting support", "Drilling and machining support where required", "MS, CS, alloy steel and SS base plate fabrication", "Flatness, hole PCD, diagonal and dimensional checks", "Primer, paint, epoxy and galvanizing support", "Part marking and packing for site installation", "Fabrication for skids, pumps, compressors, columns, pipe racks and structures"],
      },
      {
        title: "Details Required for Quotation",
        body: ["To provide the right quotation for base plates, please share:"],
        bullets: ["GA drawing or fabrication drawing", "Base plate dimensions", "Plate thickness", "Steel grade", "Quantity required", "Bolt pattern", "Anchor layout", "Hole diameter and slot details", "PCD requirement if applicable", "Load data if available", "Flatness requirement", "Machining requirement", "Stiffener or gusset requirement", "Grout pocket requirement", "Coating or painting requirement", "Galvanizing requirement if any", "Part marking requirement", "Inspection and documentation requirement", "Delivery location and timeline"],
      },
      {
        title: "Get a Quote for Base Plates",
        body: ["Looking for a base plate manufacturer and supplier in India?", "Share your base plate drawing, dimensions, thickness, steel grade, anchor layout, hole or slot requirement, flatness requirement, machining requirement and coating specification with National Engineers & Steel Fabricators. Our team will review your requirement and provide a suitable custom base plate fabrication solution for your equipment or structural installation."],
      },
    ],
    note:
      "Share your base plate drawing, dimensions, thickness, steel grade, anchor layout, hole or slot requirement, flatness, machining and coating requirements.",
    enquiry: {
      title: "Request a quote for Base Plates",
      subtitle: "Share your drawings, dimensions, anchor layout, steel grade, machining, and coating requirements.",
      productName: "Base Plates",
      buttonText: "Request Quote",
    },
    faqs: [
      { question: "What is a base plate used for?", answer: "A base plate is used to transfer load from equipment, columns, skids or structures to the foundation and provide a stable interface for anchoring, leveling, grouting and alignment." },
      { question: "Who is a base plate manufacturer in Surat?", answer: "National Engineers & Steel Fabricators is a base plate manufacturer in Surat, Gujarat, offering custom steel base plates, sole plates and mounting plates as per drawing, anchor layout and coating requirement." },
      { question: "Do you manufacture base plates in India?", answer: "Yes, National Engineers & Steel Fabricators manufactures base plates in India for equipment foundations, skids, pumps, compressors, tanks, vessels, columns, pipe racks, platforms and structural installations." },
      { question: "Can base plates be fabricated as per drawing?", answer: "Yes, base plates can be fabricated as per client drawings, dimensions, thickness, steel grade, anchor holes, slots, stiffeners, gussets, grout pockets, machining and coating requirements." },
      { question: "What materials are used for base plate fabrication?", answer: "Base plates can be fabricated in mild steel, carbon steel, alloy steel, stainless steel or special materials depending on load condition, corrosion risk, site environment and project specification." },
      { question: "What is the difference between a base plate and a sole plate?", answer: "A base plate is generally used below equipment or structures for load transfer and anchoring, while a sole plate is commonly used as a precise mounting or leveling plate under machinery or equipment supports." },
      { question: "Can base plates be supplied with anchor holes and slots?", answer: "Yes, base plates can be supplied with anchor bolt holes, slotted holes, hole PCD, custom bolt patterns and anchor layouts as per approved foundation or equipment drawings." },
      { question: "Can base plates be machined?", answer: "Yes, base plates can be supplied with machined flatness faces or machined areas where required by equipment alignment, leveling or installation specifications." },
      { question: "What details are required to get a quotation?", answer: "To get a quotation, you can share base plate drawing, dimensions, thickness, steel grade, quantity, anchor layout, hole or slot details, machining, flatness, coating and delivery requirements." },
      { question: "How is base plate price calculated?", answer: "Base plate price depends on plate size, thickness, material grade, quantity, cutting method, drilling, slotting, machining, stiffeners, gussets, coating, galvanizing, inspection and packing requirements." },
    ],
    seo: {
      title: "Base Plate Manufacturer & Supplier in India | NESF",
      description:
        "Base plate manufacturer in Surat, India, offering custom steel base plates, sole plates, mounting plates, anchor holes and machining.",
      keywords: [
        "base plate manufacturer", "base plate manufacturer in India", "base plate manufacturer in Surat", "base plate supplier", "steel base plate manufacturer", "industrial base plate manufacturer", "structural base plate manufacturer", "equipment base plate manufacturer", "machine base plate manufacturer", "mounting plate manufacturer", "sole plate manufacturer", "skid base plate manufacturer", "column base plate manufacturer", "anchor bolt base plate", "base plate with anchor holes", "base plate with slots", "base plate with stiffeners", "base plate with gussets", "base plate with grout pockets", "machined base plate", "CNC cut base plate", "drilled base plate", "plasma cut base plate", "oxy cut base plate", "MS base plate manufacturer", "CS base plate manufacturer", "SS base plate manufacturer", "custom base plate fabrication", "base plate fabrication company in Surat", "structural fabrication company in India",
      ],
    },
  },
  "pipe-saddles-supports": {
    title: "Pipe Saddle Manufacturer and Supplier in India",
    headline: "Pipe Saddle Manufacturer in Surat",
    description:
      "National Engineers & Steel Fabricators is a trusted pipe saddle manufacturer and supplier in India, offering custom pipe saddles, pipe support saddles, pipe shoes, guides, line stops, hold-down clamps, sliding supports and pipe support assemblies for industrial piping systems.",
    pagePath: "/products/pipe-saddles-supports",
    image: "/product/17.jpg",
    imageAlt: "Industrial pipe saddles and supports fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Product Type", value: "Pipe Saddles / Pipe Support Assemblies" },
      { label: "Movement", value: "Resting, sliding, guided or restrained" },
      { label: "Materials", value: "CS, SS, MS, alloy steel or as required" },
      { label: "Build Basis", value: "Support drawing, piping class and load data" },
    ],
    overview: [
      "Based in Sachin GIDC, Surat, Gujarat, we manufacture pipe saddles and support assemblies as per client drawings, pipe OD, pipe NB, piping class, load data, movement requirement, temperature range, support type, material specification, slide material, restraint philosophy, coating requirement, inspection scope and delivery schedule.",
      "Our pipe saddle fabrication solutions are suitable for industries that require accurate pipe load support, elevation control, movement control, vibration reduction and reliable support for piping systems, skids, pipe racks and plant piping packages.",
    ],
    sections: [
      {
        title: "Pipe Saddle Manufacturer in Surat",
        body: ["National Engineers & Steel Fabricators is an experienced pipe saddle manufacturer in Surat, offering custom pipe saddle fabrication for chemical plants, process industries, refineries, utilities, water systems, power plants, industrial piping packages and plant fabrication projects.", "As a pipe saddle manufacturer in India, we fabricate resting pipe saddles, sliding pipe saddles, clamp-type saddles, pipe shoes, guide supports, line stops, dummy supports, trunnion supports and custom support assemblies as per approved support drawings and project requirements.", "Each pipe saddle is manufactured with attention to pipe radius matching, support height, base plate accuracy, hole PCD, clamp spacing, alignment, welding quality, coating and installation sequence."],
      },
      {
        title: "Custom Pipe Saddles for Industrial Piping",
        body: ["Pipe saddles are used to support horizontal piping, maintain pipeline elevation, transfer loads and protect piping from sagging or excessive stress at critical points. A properly fabricated pipe saddle helps improve piping stability and reduces installation issues during site erection.", "National Engineers & Steel Fabricators manufactures custom pipe saddles based on pipe size, pipe load, operating temperature, movement requirement, service condition and support philosophy.", "Our pipe saddles can be supplied for:"],
        bullets: ["Horizontal piping support", "Large-diameter pipe support", "Hot-line pipe support", "High-vibration service", "Pipe rack installation", "Skid piping support", "Process piping systems", "Utility piping systems", "Water lines", "Industrial plant piping"],
      },
      {
        title: "Pipe Saddles and Support Assemblies",
        body: ["Pipe saddles are often part of a larger support assembly that may include a base plate, wear plate, clamp, guide plate, stiffener, slide material, PTFE pad, line stop or hold-down arrangement.", "National Engineers & Steel Fabricators fabricates pipe saddle and support assemblies as per support drawings, pipe rack layout, movement data and installation requirements.", "Our fabrication scope can include:"],
        bullets: ["Resting pipe saddle fabrication", "Sliding pipe saddle fabrication", "Clamp-type pipe saddle fabrication", "Pipe shoe fabrication", "Guide support fabrication", "Line stop fabrication", "Hold-down clamp fabrication", "Pipe saddle with base plate", "Pipe saddle with wear plate", "Pipe saddle with PTFE pad", "Pipe saddle with stainless slide plate", "Dummy support fabrication", "Trunnion support fabrication", "Pipe rack support fabrication", "Skid piping support fabrication", "Custom support assemblies as per drawing"],
      },
      {
        title: "Pipe Shoe, Guide and Line Stop Fabrication",
        body: ["National Engineers & Steel Fabricators also manufactures pipe shoes, guides and line stops for industrial piping systems where pipe movement must be supported or controlled.", "Pipe shoes are used to raise pipes, distribute load and provide a stable support interface.", "Pipe guides help control lateral movement while allowing required axial movement.", "Line stops are used where pipe movement needs to be restricted as per piping design requirement.", "These components can be fabricated individually or as part of a complete support assembly."],
      },
      {
        title: "Sliding Pipe Supports with Wear Plates or PTFE Pads",
        body: ["Some piping systems require sliding support arrangements to allow controlled thermal movement. For such requirements, National Engineers & Steel Fabricators can fabricate sliding pipe supports with wear plates, stainless slide plates, PTFE pads or other slide materials as specified by the client.", "Sliding support assemblies can be customized based on pipe movement, load, temperature, friction requirement and project support philosophy.", "Common options include:"],
        bullets: ["Pipe saddle with PTFE pad", "Pipe saddle with stainless wear plate", "Pipe support with slide plate", "Sliding pipe shoe", "Guided sliding support", "Restrained sliding support", "Custom slide support assembly"],
      },
      {
        title: "Clamp-Type and Hold-Down Pipe Supports",
        body: ["Clamp-type supports and hold-down clamps are used where the pipe must be held in position, restrained or protected from excessive movement due to vibration, uplift, flow pulsation or operational condition.", "National Engineers & Steel Fabricators fabricates hold-down clamps, U-clamp arrangements, strap clamps and pipe saddle clamp assemblies as per pipe size, load condition and restraint requirement.", "These assemblies can be supplied with base plates, stiffeners, gussets, bolt holes and coating as per drawing."],
      },
      {
        title: "Trunnion and Dummy Support Fabrication",
        body: ["Trunnion supports and dummy supports are used where piping requires welded support attachments or custom support geometry due to layout, elevation, expansion or structural constraints.", "National Engineers & Steel Fabricators provides trunnion support fabrication and dummy support fabrication as per piping drawings, support details, weld requirements and inspection scope.", "These supports are commonly used in process piping systems, hot lines, pipe racks and equipment-connected piping."],
      },
      {
        title: "Types of Pipe Saddles and Supports We Manufacture",
        body: ["National Engineers & Steel Fabricators manufactures custom pipe saddles and support assemblies for different industrial piping applications.", "Common types include:"],
        bullets: ["Pipe saddles", "Resting pipe saddles", "Sliding pipe saddles", "Clamp-type pipe saddles", "Industrial pipe saddles", "Pipe support saddles", "Pipe shoes", "Pipe guides", "Line stops", "Hold-down clamps", "Sliding pipe supports", "Restraint pipe supports", "Pipe saddles with base plates", "Pipe saddles with wear plates", "Pipe saddles with PTFE pads", "Pipe saddles with clamps", "Dummy supports", "Trunnion supports", "Skid piping supports", "Pipe rack supports", "Custom pipe support assemblies as per drawing"],
      },
      {
        title: "Key Features",
        bullets: ["Custom-built pipe saddles as per drawing", "Suitable for horizontal piping and industrial pipe supports", "Pipe saddles, shoes, guides, line stops and hold-down clamps", "Sliding and restraint support options", "Pipe saddle with base plate, clamp, wear plate or PTFE pad", "CS, SS, alloy steel and special material options", "Radius match and pipe seating accuracy", "Base hole PCD and alignment checks", "Reinforcement, stiffeners and gussets where required", "Paint, coating or galvanizing as specified", "Support identification and packing for installation sequence", "Fabrication for skids, pipe racks and plant piping systems", "Documentation support as agreed"],
      },
      {
        title: "Applications",
        body: ["Our pipe saddles and support assemblies are used across different industrial piping and structural applications, including:"],
        bullets: ["Chemical plants", "Refineries", "Utility piping systems", "Power plants", "Water systems", "Industrial piping packages", "Process piping systems", "Large-diameter piping", "Hot piping lines", "High-vibration piping services", "Pipe rack systems", "Skid-mounted piping", "Compressor package piping", "Pump and utility piping", "Plant modification jobs", "Retrofit and replacement support jobs"],
      },
      {
        title: "Materials of Construction",
        body: ["National Engineers & Steel Fabricators manufactures pipe saddles and support assemblies using suitable materials based on piping class, service temperature, load, corrosion condition, slide requirement and project specification.", "Common material options include:", "Material selection depends on pipe service, movement requirement, support type, environment and client specification."],
        bullets: ["Carbon Steel pipe saddles", "Stainless Steel pipe saddles", "Mild Steel pipe saddles", "Alloy Steel pipe saddles", "Stainless wear plates", "Hardfaced wear surfaces where specified", "PTFE slide pads", "Special slide materials as per requirement", "Painted supports", "Coated supports", "Galvanized supports where required"],
      },
      {
        title: "Technical Specifications",
        table: { columns: ["Specification", "Details"], rows: [["Product Type", "Pipe Saddles / Pipe Support Assemblies"], ["Equipment Category", "Fabrication Components & Structural"], ["Application", "Pipe load support, elevation control, movement control and vibration reduction"], ["Build Basis", "Support drawing, pipe support schedule, piping class or project specification"], ["Suitable For", "Horizontal piping, skids, pipe racks, plant piping and utility piping"], ["Pipe Size", "As per pipe OD / NB and client drawing"], ["Support Type", "Saddle, shoe, guide, line stop, hold-down clamp, trunnion or dummy support"], ["Material of Construction", "CS, SS, MS, alloy steel or as per requirement"], ["Movement Type", "Resting, sliding, guided, restrained or custom movement condition"], ["Slide Material", "PTFE, stainless wear plate, hardfacing or project-specified slide material"], ["Load Requirement", "As per support drawing or piping stress data"], ["Temperature Range", "As per piping service condition"], ["Base Plate", "Provided as per drawing where required"], ["Clamp Arrangement", "U-clamp, strap clamp, hold-down clamp or custom clamp as required"], ["Reinforcement", "Stiffeners, gussets and ribs as required"], ["Hole Pattern", "Anchor holes, slots or PCD as per drawing"], ["Surface Finish", "Painted, coated, galvanized or finished as per project requirement"], ["Inspection", "Radius checks, dimensional checks, hole checks, alignment checks and visual weld inspection"], ["Documentation", "Inspection records, material details and documentation pack as agreed"], ["Customization", "Available as per pipe size, support type, load, movement, MOC, coating and delivery sequence"]] },
      },
      {
        title: "Fabrication and Quality Control",
        body: ["Every pipe saddle and support assembly is fabricated with proper attention to material verification, radius matching, fit-up, welding quality, base plate accuracy, hole alignment, clamp spacing, slide material placement and coating requirements.", "Quality checks may include:"],
        bullets: ["Material verification", "Support drawing review", "Pipe OD / radius match checking", "Cutting and forming inspection", "Fit-up inspection", "Welding quality checks", "Dimensional inspection", "Base plate size checking", "Hole PCD checking", "Slot and hole alignment checking", "Clamp spacing verification", "Slide plate or PTFE pad placement check", "Stiffener and gusset inspection", "Surface preparation checks", "Painting, coating or galvanizing checks", "Identification and packing checks", "Final inspection and documentation as agreed"],
      },
      {
        title: "Installation and Sequencing Support",
        body: ["Pipe saddles and supports should be easy to identify and install at site. Incorrect support tagging, hole alignment or support height can create piping fit-up and elevation issues.", "Our installation-focused fabrication approach includes:"],
        bullets: ["Support-wise identification", "Marking as per support schedule", "Packing for installation sequence", "Base-hole accuracy", "Radius and seating accuracy", "Slide surface orientation check", "Clamp and guide orientation check", "Coating protection during transport", "Dispatch planning as per project requirement"],
      },
      {
        title: "Why Choose National Engineers?",
        body: ["National Engineers & Steel Fabricators is a trusted pipe saddle manufacturer and structural fabrication company in Surat, Gujarat. We provide custom pipe saddle and support fabrication for industries that require accurate, durable and installation-ready piping support assemblies.", "Reasons to work with us:"],
        bullets: ["Experienced pipe saddle manufacturer in India", "Reliable pipe saddle supplier in Surat, Gujarat", "Pipe saddles and support assemblies as per drawing", "Pipe shoes, guides, line stops and hold-down clamps", "Sliding supports with wear plates or PTFE pads", "Dummy and trunnion support fabrication", "CS, SS, alloy steel and special material fabrication capability", "Radius, alignment, hole PCD and dimensional checks", "Paint, coating and galvanizing support", "Identification and packing for installation sequence", "Fabrication for chemical, refinery, utility, water, power and industrial piping projects"],
      },
      {
        title: "Details Required for Quotation",
        body: ["To provide the right quotation for pipe saddles and supports, please share:"],
        bullets: ["Support drawing", "Pipe OD or NB", "Piping class", "Pipe material", "Temperature range", "Load data, if available", "Movement data, if available", "Required support type", "Resting, sliding, guided or restrained support requirement", "Slide material requirement", "Clamp or hold-down requirement", "Base plate details", "Hole or slot details", "Stiffener or gusset requirement", "Material of construction", "Coating, painting or galvanizing requirement", "Inspection requirement", "Quantity required", "Delivery location and timeline"],
      },
      {
        title: "Get a Quote for Pipe Saddles",
        body: ["Looking for a pipe saddle manufacturer and supplier in India?", "Share your support drawings, pipe size, piping class, load and movement data, support type, slide material, coating requirement and quantity with National Engineers & Steel Fabricators. Our team will review your requirement and provide a suitable pipe saddle and support fabrication solution for your industrial piping project."],
      },
    ],
    note:
      "Share your support drawings, pipe size, piping class, load and movement data, support type, slide material, coating requirement and quantity.",
    enquiry: {
      title: "Request a quote for Pipe Saddles & Supports",
      subtitle: "Share pipe sizes, support drawings, loads, movement, materials, and coating requirements.",
      productName: "Pipe Saddles & Supports",
      buttonText: "Request Quote",
    },
    faqs: [
      { question: "What is a pipe saddle?", answer: "A pipe saddle is a fabricated support used to carry piping loads, maintain pipe elevation, reduce sagging and provide a stable support interface for horizontal piping systems." },
      { question: "Who is a pipe saddle manufacturer in Surat?", answer: "National Engineers & Steel Fabricators is a pipe saddle manufacturer in Surat, Gujarat, offering custom pipe saddles, pipe shoes, guides, line stops, hold-down clamps and support assemblies as per drawing." },
      { question: "Do you manufacture pipe saddles in India?", answer: "Yes, National Engineers & Steel Fabricators manufactures pipe saddles in India for industrial piping systems, pipe racks, process plants, refineries, utilities, water systems and skid-mounted piping packages." },
      { question: "Can pipe saddles be fabricated as per drawing?", answer: "Yes, pipe saddles can be fabricated as per support drawings, pipe OD, pipe NB, piping class, load data, movement requirement, slide material, MOC, coating and inspection requirements." },
      { question: "What is the difference between a pipe saddle and a pipe shoe?", answer: "A pipe saddle generally supports the pipe around its curved surface, while a pipe shoe usually raises the pipe from the supporting structure and transfers load through a base or shoe arrangement." },
      { question: "What are sliding pipe supports?", answer: "Sliding pipe supports allow controlled pipe movement due to thermal expansion or operational movement. They may include stainless wear plates, PTFE pads or other slide materials as specified." },
      { question: "What materials are used for pipe saddle fabrication?", answer: "Pipe saddles can be fabricated in carbon steel, stainless steel, mild steel, alloy steel or special materials depending on piping class, load, temperature, corrosion condition and project specification." },
      { question: "What support types can be fabricated with pipe saddles?", answer: "Support types can include resting saddles, sliding saddles, pipe shoes, guides, line stops, hold-down clamps, trunnion supports, dummy supports and custom pipe support assemblies." },
      { question: "What details are required to get a quotation?", answer: "To get a quotation, you can share support drawing, pipe OD or NB, piping class, temperature range, load data, movement data, support type, slide material, MOC, coating and quantity." },
      { question: "How is pipe saddle price calculated?", answer: "Pipe saddle price depends on pipe size, support type, material, thickness, base plate, clamps, slide material, stiffeners, hole pattern, coating, quantity, inspection and packing requirements." },
    ],
    seo: {
      title: "Pipe Saddle Manufacturer & Supplier in India | NESF",
      description:
        "Pipe saddle manufacturer in Surat, India, offering custom pipe saddles, shoes, guides, line stops and support assemblies.",
      keywords: [
        "pipe saddle manufacturer", "pipe saddle manufacturer in India", "pipe saddle manufacturer in Surat", "pipe saddle supplier", "pipe saddles and supports manufacturer", "pipe support saddle manufacturer", "industrial pipe saddle", "custom pipe saddle", "pipe saddle fabrication", "pipe support manufacturer", "pipe supports supplier", "pipe shoe manufacturer", "pipe guide manufacturer", "pipe line stop manufacturer", "hold down clamp manufacturer", "sliding pipe support", "restraint pipe support", "pipe support assembly manufacturer", "trunnion support fabrication", "dummy support fabrication", "pipe rack support", "skid piping support", "pipe saddle with base plate", "pipe saddle with wear plate", "pipe saddle with PTFE pad", "pipe saddle with clamp", "MS pipe saddle", "CS pipe saddle", "SS pipe saddle", "custom pipe support fabrication", "structural fabrication company in Surat",
      ],
    },
  },
  "jack-stools-temporary-supports": {
    title: "Jack Stool Manufacturer and Supplier in India",
    headline: "Jack Stool Manufacturer in Surat",
    description:
      "National Engineers & Steel Fabricators is a trusted jack stool manufacturer and supplier in India, offering custom jack stools, temporary supports, adjustable jack stools, fixed-height stools, saddle-top stools and temporary support frames for piping erection, spool alignment, equipment maintenance, hydrotesting and shutdown activities.",
    pagePath: "/products/jack-stools-temporary-supports",
    image: "/product/19.jpeg",
    imageAlt: "Industrial jack stool temporary support fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Product Type", value: "Jack Stools / Temporary Supports" },
      { label: "Types", value: "Adjustable, fixed-height, saddle-top or custom" },
      { label: "Materials", value: "MS, CS, structural steel or as required" },
      { label: "Build Basis", value: "Height, load, pipe size and site condition" },
    ],
    overview: [
      "Based in Sachin GIDC, Surat, Gujarat, we manufacture jack stools and temporary supports as per client drawings, required height, height adjustment range, estimated working load, required safety factor, pipe size, saddle radius, site condition, base arrangement, lifting requirement, coating specification, inspection scope and delivery schedule.",
      "Our jack stool fabrication solutions are suitable for industries that require safe, stable and rugged temporary supports for site erection, alignment, testing, maintenance and plant shutdown work.",
    ],
    sections: [
      {
        title: "Jack Stool Manufacturer in Surat",
        body: ["National Engineers & Steel Fabricators is an experienced jack stool manufacturer in Surat, offering custom jack stool fabrication for process plants, refineries, chemical industries, power plants, water systems, utility piping, pipe rack erection, shutdown jobs and industrial maintenance activities.", "As a jack stool manufacturer in India, we fabricate adjustable jack stools, threaded jack stools, pin-type jack stools, fixed-height stools, wide-base stools, saddle-top stools, pipe support stools and temporary support frames as per project requirements.", "Each jack stool is manufactured with attention to height accuracy, vertical load path, base stability, saddle fitment, reinforcement, weld quality, coating and site handling requirements."],
      },
      {
        title: "Temporary Supports for Erection and Maintenance",
        body: ["Temporary supports are used to hold piping, spools, valves, small equipment or fabricated assemblies at the required elevation during erection, maintenance, alignment, testing and shutdown jobs.", "National Engineers & Steel Fabricators manufactures temporary supports for site teams that need stable support before permanent supports are installed or before maintenance work is completed.", "Our temporary support fabrication can be used for:"],
        bullets: ["Pipe spool alignment", "Pipe-rack erection", "Valve replacement", "Hydrotesting support", "Equipment maintenance", "Shutdown maintenance", "Turnaround jobs", "Temporary equipment holding", "Fabrication fit-up support", "Site erection activities"],
      },
      {
        title: "Adjustable Jack Stool Manufacturer",
        body: ["Adjustable jack stools are used where height setting needs to be changed during alignment, erection or maintenance work. These stools help site teams adjust pipe or equipment elevation as per installation requirement.", "National Engineers & Steel Fabricators manufactures adjustable jack stools with threaded adjustment or pin-type adjustment as per client requirement.", "Adjustable jack stool features may include:"],
        bullets: ["Threaded height adjustment", "Pin-type height adjustment", "Wide base for stability", "Saddle-top support", "Pipe-radius contact surface", "Reinforced vertical member", "Base plate with gussets", "Lifting point provision", "Anti-slip pad provision where required", "Painted or coated finish"],
      },
      {
        title: "Fixed-Height Jack Stools",
        body: ["Fixed-height jack stools are used where the required support elevation is already defined and adjustment is not required. These stools are suitable for repeated site use, temporary support during erection and controlled alignment jobs.", "National Engineers & Steel Fabricators fabricates fixed-height jack stools as per required height, working load, base size, pipe size, saddle radius and site condition.", "Fixed-height stools can be supplied with:"],
        bullets: ["Pipe saddle top", "Flat top plate", "Base plate", "Gusset stiffeners", "Reinforced vertical support", "Fork handling provision if required", "Lifting lug provision if required", "Anti-slip base pad where required", "Marking and identification"],
      },
      {
        title: "Saddle-Top Jack Stools for Pipe Support",
        body: ["Saddle-top jack stools are used where the pipe requires radius-based contact support during alignment or temporary holding. The saddle top helps improve pipe seating and reduces point-contact issues.", "National Engineers & Steel Fabricators manufactures saddle-top jack stools as per pipe OD, pipe NB, saddle radius, working load and height requirement.", "These stools are useful for:"],
        bullets: ["Pipe spool alignment", "Large-diameter pipe support", "Pipe-rack erection", "Hydrotesting support", "Shutdown pipe maintenance", "Temporary pipe elevation control", "Pipe fit-up and welding support"],
      },
      {
        title: "Load-Rated Temporary Support Frames",
        body: ["Temporary support frames must be fabricated with proper attention to working load, safety factor, vertical load path and site stability.", "National Engineers & Steel Fabricators manufactures load-rated temporary support frames as per client-specified load conditions and application requirements.", "Load-focused fabrication can include:"],
        bullets: ["Wide base plates", "Reinforced vertical members", "Gusset stiffeners", "Load-spreading top plates", "Saddle-top arrangements", "Base frame reinforcement", "Anti-slip provisions", "Straightness checks", "Weld inspection", "Load-path verification as per client requirement"],
      },
      {
        title: "Jack Stools with Base Plates, Gussets and Anti-Slip Pads",
        body: ["Jack stools and temporary supports can be fabricated with additional stability and handling features depending on the site requirement.", "Common fabrication options include:", "These features help improve stability, durability and usability during erection and maintenance jobs."],
        bullets: ["Jack stool with base plate", "Jack stool with gussets", "Jack stool with saddle top", "Jack stool with flat top", "Jack stool with threaded adjustment", "Jack stool with pin adjustment", "Jack stool with anti-slip pad", "Jack stool with lifting lug", "Jack stool with reinforced frame", "Jack stool with wide-base support"],
      },
      {
        title: "Pipe Spool Alignment and Hydrotesting Support",
        body: ["Pipe spools and piping assemblies often require temporary support during alignment, fit-up, welding, inspection and hydrotesting. Incorrect temporary support height or weak support frames can create alignment issues and safety concerns.", "National Engineers & Steel Fabricators manufactures pipe spool support stools and hydrotesting support frames based on pipe size, spool load, test condition, support height and site use.", "Our fabrication focus includes:"],
        bullets: ["Stable support during alignment", "Pipe elevation control", "Safe load transfer", "Saddle support for pipe radius", "Temporary holding during testing", "Support during valve replacement", "Easy handling and deployment", "Reusable site support construction"],
      },
      {
        title: "Types of Jack Stools and Temporary Supports We Manufacture",
        body: ["National Engineers & Steel Fabricators manufactures custom jack stools and temporary supports for different site applications.", "Common types include:"],
        bullets: ["Jack stools", "Temporary supports", "Adjustable jack stools", "Threaded jack stools", "Pin-type jack stools", "Fixed-height jack stools", "Saddle-top jack stools", "Pipe support stools", "Pipe jack stools", "Pipe spool supports", "Temporary pipe supports", "Hydrotesting supports", "Shutdown support frames", "Erection support stools", "Wide-base jack stools", "Load-rated jack stools", "Jack stools with base plates", "Jack stools with gussets", "Jack stools with anti-slip pads", "Custom temporary supports as per drawing"],
      },
      {
        title: "Key Features",
        bullets: ["Custom-built jack stools as per load and height requirement", "Suitable for erection, alignment, hydrotesting and shutdown work", "Adjustable and fixed-height stool options", "Threaded or pin-type adjustment options", "Saddle-top support for pipe-radius contact", "Wide base for improved site stability", "Base plates, gussets and reinforced load paths", "Anti-slip pad provision where required", "Lifting arrangement where required", "MS and CS fabrication options", "Painted or coated finish as specified", "Height, base and saddle interface checks", "Weld inspection and reinforcement verification", "Marking and packing for site use", "Fabrication as per client drawings and duty conditions"],
      },
      {
        title: "Applications",
        body: ["Our jack stools and temporary supports are used across different site erection and maintenance applications, including:"],
        bullets: ["Pipe-rack erection", "Pipe spool alignment", "Pipeline fit-up support", "Valve replacement jobs", "Hydrotesting support", "Shutdown maintenance", "Turnaround activities", "Temporary equipment support", "Pipe welding support", "Process plant maintenance", "Utility piping installation", "Industrial equipment alignment", "Skid and package assembly support", "Plant modification jobs", "Retrofit jobs", "Site erection activities"],
      },
      {
        title: "Materials of Construction",
        body: ["National Engineers & Steel Fabricators manufactures jack stools and temporary supports using suitable materials based on working load, site condition, corrosion exposure, reuse requirement and client specification.", "Common material options include:", "MS and CS jack stools are commonly used for general erection, alignment, hydrotesting and shutdown maintenance applications."],
        bullets: ["Mild Steel", "Carbon Steel", "Structural steel sections", "Painted temporary supports", "Coated temporary supports", "Galvanized supports where required", "Special MOC as per client specification"],
      },
      {
        title: "Technical Specifications",
        table: { columns: ["Specification", "Details"], rows: [["Product Type", "Jack Stools / Temporary Supports"], ["Equipment Category", "Fabrication Components & Structural"], ["Application", "Erection, alignment, testing, shutdown and temporary support work"], ["Build Basis", "Client drawing, required height, load data, pipe size or site condition"], ["Support Type", "Adjustable, fixed-height, saddle-top, wide-base or custom"], ["Adjustment Type", "Threaded, pin-type or fixed as per requirement"], ["Material of Construction", "MS, CS, structural steel or as per requirement"], ["Height Range", "As per client requirement"], ["Working Load", "As per client-specified load condition"], ["Safety Factor", "As per project requirement"], ["Pipe Size", "As per pipe OD / NB where saddle top is required"], ["Top Arrangement", "Saddle top, flat plate, pipe-radius contact or custom top"], ["Base Arrangement", "Wide base, base plate, anti-slip pad or custom base"], ["Reinforcement", "Gussets, stiffeners and reinforced load path as required"], ["Handling Provision", "Lifting lug, handle or site handling provision if required"], ["Surface Finish", "Painted, coated, galvanized or finished as specified"], ["Inspection", "Height checks, straightness checks, weld checks and dimensional inspection"], ["Documentation", "Inspection records and documentation pack as agreed"], ["Customization", "Available as per height, load, pipe size, site condition and handling requirement"]] },
      },
      {
        title: "Fabrication and Quality Control",
        body: ["Every jack stool and temporary support is fabricated with proper attention to material verification, cutting, fit-up, welding quality, vertical alignment, base stability, saddle radius, reinforcement and finish requirements.", "Quality checks may include:"],
        bullets: ["Material verification", "Drawing and load requirement review", "Height verification", "Adjustment range verification where applicable", "Straightness checking", "Fit-up inspection", "Welding quality checks", "Base plate alignment checks", "Saddle radius checks where applicable", "Gusset and reinforcement checks", "Threaded or pin adjustment checking", "Stability and load-path verification as per client requirement", "Surface preparation checks", "Painting or coating checks", "Marking and packing checks", "Final inspection and documentation as agreed"],
      },
      {
        title: "Site Use and Safety-Focused Fabrication",
        body: ["Jack stools and temporary supports are used in active erection, maintenance and shutdown environments. Fabrication must consider safe handling, stability, load path and practical site deployment.", "Our site-focused fabrication approach includes:"],
        bullets: ["Wide base planning for stable placement", "Load path alignment", "Saddle contact for pipe support", "Reinforcement where required", "Easy height identification", "Safe lifting and handling provision", "Rugged construction for repeated use", "Coating suitable for site environment", "Marking for capacity and identification where specified", "Packing for site dispatch"],
      },
      {
        title: "Why Choose National Engineers?",
        body: ["National Engineers & Steel Fabricators is a trusted jack stool manufacturer and structural fabrication company in Surat, Gujarat. We provide custom jack stool and temporary support fabrication for industries that require safe, rugged and site-ready support solutions.", "Reasons to work with us:"],
        bullets: ["Experienced jack stool manufacturer in India", "Reliable temporary support manufacturer in Surat, Gujarat", "Adjustable and fixed-height jack stool fabrication", "Saddle-top stools for pipe spool support", "Temporary supports for erection, alignment and hydrotesting", "Shutdown and turnaround support frame fabrication", "Base plates, gussets and anti-slip pad provision", "Load-rated support fabrication as per client requirement", "MS and CS structural fabrication capability", "Height, straightness, base and saddle checks", "Weld inspection and reinforcement verification", "Fabrication for chemical, refinery, power, water, utility and industrial projects"],
      },
      {
        title: "Details Required for Quotation",
        body: ["To provide the right quotation for jack stools and temporary supports, please share:"],
        bullets: ["Drawing or basic sketch", "Required height", "Required adjustment range", "Estimated working load", "Required safety factor", "Pipe size or pipe OD", "Saddle radius requirement", "Adjustable or fixed-height requirement", "Threaded or pin-type adjustment preference", "Base size requirement", "Anti-slip pad requirement", "Lifting or handling provision", "Quantity required", "Site condition", "Surface finish requirement", "Inspection requirement", "Delivery location and timeline"],
      },
      {
        title: "Get a Quote for Jack Stools and Temporary Supports",
        body: ["Looking for a jack stool manufacturer and supplier in India?", "Share your required height, adjustment range, working load, safety factor, pipe size, saddle radius, site condition and quantity with National Engineers & Steel Fabricators. Our team will review your requirement and provide a suitable jack stool or temporary support fabrication solution for erection, alignment, hydrotesting or shutdown activities."],
      },
    ],
    note:
      "Share your required height, adjustment range, working load, safety factor, pipe size, saddle radius, site condition and quantity.",
    enquiry: {
      title: "Request a quote for Jack Stools / Temporary Supports",
      subtitle: "Share your load, height range, pipe size, quantity, and site-condition requirements.",
      productName: "Jack Stools / Temporary Supports",
      buttonText: "Request Quote",
    },
    faqs: [
      { question: "What is a jack stool used for?", answer: "A jack stool is used as a temporary support during piping erection, spool alignment, hydrotesting, equipment maintenance, shutdown jobs and site installation activities." },
      { question: "Who is a jack stool manufacturer in Surat?", answer: "National Engineers & Steel Fabricators is a jack stool manufacturer in Surat, Gujarat, offering adjustable jack stools, fixed-height stools, saddle-top stools and temporary support frames as per load and height requirements." },
      { question: "Do you manufacture jack stools in India?", answer: "Yes, National Engineers & Steel Fabricators manufactures jack stools in India for erection, alignment, hydrotesting, shutdown maintenance, pipe-rack installation and temporary equipment support applications." },
      { question: "What are temporary supports used for?", answer: "Temporary supports are used to hold piping, spools, valves, equipment or fabricated assemblies at the required elevation until permanent support is installed or maintenance work is completed." },
      { question: "Can jack stools be fabricated as per drawing?", answer: "Yes, jack stools and temporary supports can be fabricated as per client drawings, required height, adjustment range, working load, safety factor, pipe size, saddle radius and site conditions." },
      { question: "What is an adjustable jack stool?", answer: "An adjustable jack stool is a temporary support with threaded or pin-type height adjustment used where the support height needs to be changed during alignment or erection work." },
      { question: "What is a saddle-top jack stool?", answer: "A saddle-top jack stool has a pipe-radius contact surface at the top, making it suitable for temporary pipe support, spool alignment and pipe elevation control." },
      { question: "What materials are used for jack stool fabrication?", answer: "Jack stools are commonly fabricated in mild steel, carbon steel or structural steel sections depending on working load, site condition, reuse requirement and project specification." },
      { question: "What details are required to get a quotation?", answer: "To get a quotation, you can share required height, adjustment range, estimated load, safety factor, pipe size, saddle radius, quantity, site condition, finish requirement and delivery timeline." },
      { question: "How is jack stool price calculated?", answer: "Jack stool price depends on height, adjustment type, working load, base size, material, saddle top, gussets, anti-slip pad, lifting provision, coating, quantity, inspection and delivery scope." },
    ],
    seo: {
      title: "Jack Stool Manufacturer & Supplier in India | NESF",
      description:
        "Jack stool manufacturer in Surat, India, offering adjustable jack stools, temporary supports and saddle-top stools for erection.",
      keywords: [
        "jack stool manufacturer", "jack stool manufacturer in India", "jack stool manufacturer in Surat", "jack stool supplier", "temporary support manufacturer", "temporary support manufacturer in India", "temporary support manufacturer in Surat", "jack stools and temporary supports", "adjustable jack stool manufacturer", "fixed height jack stool", "saddle top jack stool", "pipe support stool", "pipe jack stool", "pipe spool support", "temporary pipe support", "erection support stool", "shutdown support frame", "hydrotesting support", "pipe alignment support", "equipment temporary support", "adjustable pipe support stool", "threaded jack stool", "pin type jack stool", "wide base jack stool", "load rated jack stool", "jack stool with base plate", "jack stool with gussets", "jack stool with saddle top", "industrial temporary supports", "fabrication components manufacturer", "structural fabrication company in Surat",
      ],
    },
  },
  "liners-hard-wear-plate": {
    title: "Wear Plate Liner Manufacturer in India",
    headline: "Wear Plate Liner Manufacturer in Surat",
    description:
      "National Engineers & Steel Fabricators is a trusted wear plate liner manufacturer in India, offering custom hard plate liners, wear plate liners, abrasion-resistant liners, bolt-on liner panels, weld-on liner panels, curved liners, segmented liners and wear protection components for chutes, hoppers, bins, ducts, cyclones, transfer points and abrasive process areas.",
    pagePath: "/products/liners-hard-wear-plate",
    image: "/product/21.jpeg",
    imageAlt: "Hard plate and wear plate liners fabricated by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Product Type", value: "Hard Plate / Wear Plate Liners" },
      { label: "Options", value: "AR, Hardox-type, overlay, bimetal or SS" },
      { label: "Attachment", value: "Bolt-on, weld-on or custom" },
      { label: "Build Basis", value: "Wear-zone geometry and duty condition" },
    ],
    overview: [
      "Based in Sachin GIDC, Surat, Gujarat, we manufacture wear plate liners as per client drawings, equipment geometry, wear-zone location, material handled, abrasion severity, impact severity, liner thickness, material grade, attachment method, hole pattern, countersink requirement, backing arrangement, inspection requirement and shutdown replacement strategy.",
      "Our wear plate liner fabrication solutions are suitable for industries that require abrasion protection, impact protection, reduced maintenance downtime, longer equipment life and replacement-ready liner packages.",
    ],
    sections: [
      {
        title: "Wear Plate Liner Manufacturer in Surat",
        body: ["National Engineers & Steel Fabricators is an experienced wear plate liner manufacturer in Surat, offering custom wear liner fabrication for cement plants, mineral processing units, mining equipment, recycling systems, bulk material handling plants, chemical handling systems, chutes, hoppers, bins, ducts and high-abrasion zones.", "As a wear plate liner manufacturer in India, we fabricate hard plate liners, AR liners, stainless steel liners, overlay liners, bimetal liners, bolt-on liner panels, weld-on wear liners, curved liners, segmented liners and liner assemblies as per approved drawings and duty conditions.", "Each wear liner is manufactured with attention to profiling accuracy, hole alignment, countersink accuracy, curved geometry, fit-up, marking, packing and replacement readiness."],
      },
      {
        title: "Hard Plate and Wear Plate Liners for Abrasion Protection",
        body: ["Hard plate and wear plate liners are sacrificial protection plates installed inside equipment where abrasive material flow, repeated impact or sliding wear can damage the parent equipment body.", "These liners help protect chutes, hoppers, bins, ducts, cyclones, transfer points and impact zones from premature wear. Instead of replacing the complete equipment body, the plant team can replace worn liner panels during scheduled maintenance or shutdown.", "National Engineers & Steel Fabricators manufactures hard plate and wear plate liners as per equipment geometry, wear pattern, attachment method and replacement strategy."],
      },
      {
        title: "Custom Wear Liner Fabrication",
        body: ["Every wear zone is different. Material abrasiveness, impact angle, particle size, flow velocity, equipment geometry, operating temperature and maintenance access directly affect liner design and fabrication.", "That is why National Engineers & Steel Fabricators provides custom wear liner fabrication as per client-specific drawings and duty conditions.", "Our wear liner fabrication scope can include:"],
        bullets: ["Hard plate liner fabrication", "Wear plate liner fabrication", "AR wear liner fabrication", "Stainless steel wear liner fabrication", "Overlay wear plate liner fabrication", "Bimetal wear plate liner fabrication", "Bolt-on wear liner panels", "Weld-on wear liner panels", "Curved wear liner fabrication", "Segmented liner fabrication", "Chute liner fabrication", "Hopper liner fabrication", "Bin liner fabrication", "Duct liner fabrication", "Cyclone liner fabrication", "Transfer point liner fabrication", "Liner panels with bolt holes", "Liner panels with countersinks", "Liner assemblies with backing plates", "Liner assemblies with stiffeners", "Part marking and packing for shutdown replacement"],
      },
      {
        title: "Abrasion-Resistant Wear Liners",
        body: ["Abrasion-resistant wear liners are used where bulk materials create continuous rubbing, sliding or scraping action against equipment surfaces. These liners are commonly used in chutes, hoppers, bins, transfer points, conveyor discharge areas and mineral handling equipment.", "National Engineers & Steel Fabricators fabricates abrasion-resistant liners using project-specified material grades and thicknesses. The final liner selection depends on handled material, wear severity, impact condition, temperature and client specification.", "Common wear-protection requirements include:"],
        bullets: ["Sliding abrasion protection", "Impact-zone protection", "Transfer-point protection", "Hopper outlet wear protection", "Chute wall protection", "Bin discharge protection", "Cyclone body protection", "Duct bend protection", "Bulk handling equipment protection"],
      },
      {
        title: "AR, Hardox-Type, Overlay and Bimetal Wear Plate Liners",
        body: ["National Engineers & Steel Fabricators can fabricate wear liners from different wear-resistant materials based on project requirement.", "Common material options include:", "AR and Hardox-type wear plates are commonly used for abrasion-heavy service. Overlay and bimetal liners are used where severe wear resistance is required. Stainless steel liners are suitable where corrosion and wear both need consideration."],
        bullets: ["AR wear plates", "Hardox-type wear plates", "Overlay wear plates", "Bimetal wear plates", "Stainless steel liners", "Carbon steel backing plates", "Service-specific liner thicknesses", "Special material grades as per client specification"],
      },
      {
        title: "Bolt-On and Weld-On Wear Liners",
        body: ["Wear liners can be attached using different methods depending on replacement strategy, equipment access and service condition.", "National Engineers & Steel Fabricators manufactures both bolt-on and weld-on wear liner panels.", "Bolt-on wear liners are suitable where regular replacement is expected. They can include bolt holes, countersinks, matching hole patterns and part numbers for shutdown-ready replacement.", "Weld-on wear liners are suitable where a permanent or semi-permanent attachment method is required. These liners can be profiled and supplied as per equipment geometry and welding requirements."],
      },
      {
        title: "Chute, Hopper, Bin and Duct Liners",
        body: ["Wear liners are widely used in bulk material handling equipment where abrasive material contact is frequent.", "National Engineers & Steel Fabricators manufactures:", "These liners can be supplied as individual panels or complete replacement kits based on client requirements."],
        bullets: ["Chute liners", "Transfer chute liners", "Hopper liners", "Storage bin liners", "Day bin liners", "Duct liners", "Cyclone liners", "Transfer point liners", "Discharge zone liners", "Impact zone liners", "Outlet area liners", "Curved liners for bends and pipes"],
      },
      {
        title: "Curved and Segmented Wear Liners",
        body: ["Some equipment surfaces are curved, rolled or irregular in geometry. Standard flat liner plates may not fit properly in such areas.", "National Engineers & Steel Fabricators fabricates curved and segmented wear liners for pipes, bends, ducts, cyclones, rounded chutes and curved equipment sections.", "Curved liner fabrication can include:"],
        bullets: ["Rolled liner plates", "Segmented curved liners", "Liner sections for duct bends", "Liner sections for pipe bends", "Cyclone internal liners", "Curved chute liners", "Radius-matched wear panels", "Match-marked segmented kits"],
      },
      {
        title: "Liner Panels with Holes, Countersinks and Backing Plates",
        body: ["Bolt-on wear liners require accurate hole patterns and countersinks so that replacement panels can be installed quickly during shutdown or maintenance.", "National Engineers & Steel Fabricators fabricates liner panels with:", "Hole accuracy and part marking are important because liner replacement work is often done during limited shutdown windows."],
        bullets: ["Bolt holes", "Countersink holes", "Slot holes", "Part marking", "Backing plates", "Stiffener support", "Edge preparation", "Match identification", "Shutdown-ready packing"],
      },
      {
        title: "Hardfacing and Critical Wear-Zone Build-Up",
        body: ["For some critical wear zones, hardfacing or weld build-up may be specified by the client to improve wear resistance or restore worn sections.", "National Engineers & Steel Fabricators can support hardfacing build-up on critical wear zones where specified by project requirement.", "Hardfacing support may be considered for:"],
        bullets: ["Chute impact zones", "Hopper outlets", "Transfer points", "Discharge sections", "Abrasion-prone edges", "Wear strips", "Localized high-wear areas", "Repair and modification jobs"],
      },
      {
        title: "Replacement-Ready Liner Kits",
        body: ["Wear liners should be easy to identify, handle and replace. Poorly marked liner panels can increase shutdown time and create installation confusion.", "National Engineers & Steel Fabricators can supply replacement-ready liner kits with proper part marking, packing and identification as per equipment layout.", "Replacement kit support can include:"],
        bullets: ["Equipment-wise liner grouping", "Part-number marking", "Match marking", "Bolt-hole alignment checks", "Panel-wise packing", "Shutdown sequence packing", "Documentation support", "Repeat fabrication for future replacement needs"],
      },
      {
        title: "Types of Wear Plate Liners We Manufacture",
        body: ["National Engineers & Steel Fabricators manufactures custom wear plate liners and hard plate liner components for different industrial applications.", "Common types include:"],
        bullets: ["Wear plate liners", "Hard plate liners", "Abrasion-resistant liners", "Industrial wear liners", "AR wear liners", "Hardox-type wear liners", "Overlay wear plate liners", "Bimetal wear plate liners", "Stainless steel wear liners", "Bolt-on wear liners", "Weld-on wear liners", "Replaceable wear liner panels", "Chute liners", "Hopper liners", "Bin liners", "Duct liners", "Cyclone liners", "Transfer point liners", "Curved wear liners", "Segmented wear liners", "Liner panels with countersinks", "Liner assemblies with backing plates", "Custom wear liners as per drawing"],
      },
      {
        title: "Key Features",
        bullets: ["Custom-built wear plate liners as per drawing", "Suitable for chutes, hoppers, bins, ducts and abrasive zones", "Hard plate, AR plate, overlay and bimetal liner options", "Bolt-on and weld-on attachment options", "Replaceable liner panels for shutdown maintenance", "Liner panels with holes, slots and countersinks", "Curved and segmented liner fabrication", "Backing plates and stiffeners where required", "Hardfacing support for critical wear zones where specified", "Accurate profiling for quick fit-up", "Part-number marking and replacement kit packing", "Wear-zone focused fabrication based on duty condition", "Fabrication for bulk handling, mineral, cement and recycling industries", "Inspection and documentation support as agreed"],
      },
      {
        title: "Applications",
        body: ["Our wear plate liners and hard plate liners are used across different abrasion and impact protection applications, including:"],
        bullets: ["Chutes", "Hoppers", "Storage bins", "Day bins", "Ducts", "Cyclones", "Transfer points", "Conveyor discharge zones", "Bulk material handling systems", "Cement handling equipment", "Mineral processing equipment", "Mining equipment", "Recycling systems", "Chemical bulk handling systems", "High-impact zones", "High-abrasion zones", "Duct bends and pipe bends", "Hopper outlets", "Chute walls", "Equipment retrofit and replacement jobs"],
      },
      {
        title: "Materials of Construction",
        body: ["National Engineers & Steel Fabricators manufactures wear plate liners using suitable material based on abrasion severity, impact condition, corrosion risk, temperature, material flow and client specification.", "Common material options include:", "Material selection depends on the material handled, expected wear rate, attachment method and replacement strategy."],
        bullets: ["Abrasion-resistant AR plates", "Hardox-type wear plates", "Overlay wear plates", "Bimetal wear plates", "Stainless steel liners", "Carbon steel backing plates", "Mild steel backing plates", "Hardfaced wear surfaces where specified", "Special wear-resistant material as per client specification"],
      },
      {
        title: "Technical Specifications",
        table: { columns: ["Specification", "Details"], rows: [["Product Type", "Hard Plate / Wear Plate Liners"], ["Equipment Category", "Fabrication Components & Structural"], ["Application", "Abrasion protection, impact protection and equipment life extension"], ["Suitable For", "Chutes, hoppers, bins, ducts, cyclones, transfer points and wear zones"], ["Build Basis", "Equipment drawing, wear-zone geometry, liner drawing or project specification"], ["Material Options", "AR plate, Hardox-type plate, stainless steel, overlay, bimetal or as specified"], ["Liner Type", "Bolt-on, weld-on, curved, segmented, flat or custom liner"], ["Thickness", "As per client requirement and wear condition"], ["Attachment Method", "Bolt-on, weld-on, countersunk, backing plate or custom attachment"], ["Hole Requirement", "Bolt holes, countersinks, slots or custom hole pattern"], ["Geometry", "Flat, curved, segmented, rolled or custom profile"], ["Backing Arrangement", "Backing plates, stiffeners or support frames where required"], ["Hardfacing", "Available where specified by client requirement"], ["Wear Zone", "Sliding abrasion, impact, chute wall, transfer point, outlet or custom zone"], ["Marking", "Part number, match marking or replacement kit marking as required"], ["Surface Finish", "As per material condition and client specification"], ["Inspection", "Dimensional checks, profile checks, hole checks and countersink checks"], ["Packing", "Shutdown-ready packing and part-wise identification as required"], ["Documentation", "Inspection records, material details and documentation pack as agreed"], ["Customization", "Available as per equipment geometry, liner grade, thickness, attachment method and replacement strategy"]] },
      },
      {
        title: "Fabrication and Quality Control",
        body: ["Every wear plate liner is fabricated with proper attention to material verification, profile cutting, hole accuracy, countersink depth, curvature, segmentation, backing plate fit-up, stiffener alignment, part marking and packing requirements.", "Quality checks may include:"],
        bullets: ["Material verification", "Drawing and wear-zone geometry review", "Plate thickness verification", "Profile cutting inspection", "Hole diameter checking", "Countersink checking", "Slot dimension checking", "Curved liner radius checking", "Segmented liner fit-up checking", "Backing plate fit-up inspection", "Stiffener alignment checking", "Hardfacing inspection where applicable", "Part marking verification", "Replacement kit grouping check", "Packing and dispatch readiness checks", "Documentation compilation as agreed"],
      },
      {
        title: "Shutdown and Maintenance Support",
        body: ["Wear liners are often replaced during short maintenance shutdowns. Accurate fabrication, correct marking and organized packing help reduce replacement time at site.", "Our shutdown-focused fabrication approach includes:"],
        bullets: ["Part-number marking", "Match-marked liner panels", "Replacement kit packing", "Bolt-hole alignment checks", "Countersink accuracy", "Equipment-wise grouping", "Repeat fabrication support", "Future replacement-ready records", "Packing for safe handling and transport"],
      },
      {
        title: "Why Choose National Engineers?",
        body: ["National Engineers & Steel Fabricators is a trusted wear plate liner manufacturer and structural fabrication company in Surat, Gujarat. We provide custom hard plate and wear plate liner fabrication for industries that need reliable abrasion protection, impact resistance and shutdown-ready replacement parts.", "Reasons to work with us:"],
        bullets: ["Experienced wear plate liner manufacturer in India", "Reliable wear plate liner supplier in Surat, Gujarat", "Hard plate liners and abrasion-resistant liners as per drawing", "AR, Hardox-type, overlay, bimetal and stainless liner options", "Chute liners, hopper liners, bin liners and duct liners", "Bolt-on and weld-on liner panel fabrication", "Curved and segmented liner fabrication", "Liner panels with holes, countersinks and backing plates", "Hardfacing support where specified", "Part marking and shutdown-ready packing", "Dimensional, hole, profile and radius checks", "Fabrication for cement, mineral, mining, recycling and bulk handling industries"],
      },
      {
        title: "Details Required for Quotation",
        body: ["To provide the right quotation for wear plate liners, please share:"],
        bullets: ["Equipment drawing", "Wear-zone drawing or sketch", "Liner drawing if available", "Material handled", "Abrasion severity", "Impact severity", "Required liner grade", "Required liner thickness", "Bolt-on or weld-on attachment method", "Hole pattern and countersink details", "Curved or flat liner requirement", "Backing plate requirement", "Stiffener requirement", "Hardfacing requirement if any", "Quantity required", "Replacement strategy", "Part marking requirement", "Packing requirement", "Inspection and documentation requirement", "Delivery location and timeline"],
      },
      {
        title: "Get a Quote for Wear Plate Liners",
        body: ["Looking for a wear plate liner manufacturer in India?", "Share your equipment drawings, wear-zone geometry, liner grade, thickness, attachment method, hole pattern, countersink requirement, abrasion severity and replacement strategy with National Engineers & Steel Fabricators. Our team will review your requirement and provide a suitable hard plate or wear plate liner fabrication solution for your equipment protection needs."],
      },
    ],
    note:
      "Share your equipment drawings, wear-zone geometry, liner grade, thickness, attachment method, hole pattern, countersink requirement and replacement strategy.",
    enquiry: {
      title: "Request a quote for Hard Plate / Wear Plate Liners",
      subtitle: "Share your equipment drawings, wear severity, liner grade, thickness, and attachment requirements.",
      productName: "Hard Plate / Wear Plate Liners",
      buttonText: "Request Quote",
    },
    faqs: [
      { question: "What is a wear plate liner?", answer: "A wear plate liner is a replaceable protection plate installed inside equipment to protect parent surfaces from abrasion, impact and material-flow wear." },
      { question: "Who is a wear plate liner manufacturer in Surat?", answer: "National Engineers & Steel Fabricators is a wear plate liner manufacturer in Surat, Gujarat, offering hard plate liners, AR liners, bolt-on liners, weld-on liners and custom wear protection panels as per drawing." },
      { question: "Do you manufacture wear plate liners in India?", answer: "Yes, National Engineers & Steel Fabricators manufactures wear plate liners in India for chutes, hoppers, bins, ducts, cyclones, transfer points and abrasive equipment zones." },
      { question: "What are hard plate liners used for?", answer: "Hard plate liners are used to protect high-abrasion and high-impact areas inside bulk handling equipment, mineral processing equipment, cement handling systems, recycling systems and industrial transfer points." },
      { question: "Can wear liners be fabricated as per drawing?", answer: "Yes, wear liners can be fabricated as per equipment drawings, wear-zone geometry, liner grade, thickness, hole pattern, countersink requirement, attachment method and replacement strategy." },
      { question: "What materials are used for wear plate liners?", answer: "Wear plate liners can be fabricated from AR plates, Hardox-type plates, stainless steel, overlay plates, bimetal plates, carbon steel backing plates or other project-specified materials." },
      { question: "What is the difference between bolt-on and weld-on wear liners?", answer: "Bolt-on wear liners are fixed with bolts and are easier to replace during shutdowns. Weld-on wear liners are attached by welding and are used where bolted replacement is not required or not practical." },
      { question: "Can curved wear liners be manufactured?", answer: "Yes, curved and segmented wear liners can be fabricated for pipes, bends, ducts, cyclones, rounded chutes and other curved equipment sections." },
      { question: "What details are required to get a quotation?", answer: "To get a quotation, you can share equipment drawing, wear-zone geometry, material handled, abrasion severity, liner grade, thickness, attachment method, hole pattern, countersink details and quantity." },
      { question: "How is wear plate liner price calculated?", answer: "Wear plate liner price depends on material grade, thickness, liner size, quantity, cutting complexity, holes, countersinks, curving, backing plates, hardfacing, marking, packing and documentation requirements." },
    ],
    seo: {
      title: "Wear Plate Liner Manufacturer in India | NESF",
      description:
        "Wear plate liner manufacturer in Surat, India, offering hard plate liners, AR liners, bolt-on panels and wear protection.",
      keywords: [
        "wear plate liner manufacturer", "wear plate liner manufacturer in India", "wear plate liner manufacturer in Surat", "wear plate liner supplier", "hard plate liner manufacturer", "hard plate and wear plate liners", "wear liner manufacturer", "industrial wear liner manufacturer", "abrasion resistant liner manufacturer", "AR wear plate manufacturer", "Hardox type wear plate liner", "bimetal wear plate liner", "overlay wear plate liner", "stainless steel wear liner", "bolt on wear liner", "weld on wear liner", "replaceable wear liner", "chute liner manufacturer", "hopper liner manufacturer", "bin liner manufacturer", "duct liner manufacturer", "cyclone liner manufacturer", "transfer point liner", "curved wear liner", "segmented wear liner", "liner panel manufacturer", "liner with countersink holes", "liner with backing plate", "wear plate fabrication", "liner fabrication company in Surat", "hardfacing wear liner", "bulk handling wear protection", "structural fabrication company in India",
      ],
    },
  },
  "custom-heavy-structural-fabrication": {
    title: "Custom Heavy Structural Fabrication in India",
    headline: "Custom Heavy Structural Fabrication in Surat",
    description:
      "National Engineers & Steel Fabricators provides custom heavy structural fabrication in India for industrial projects that require strong, accurate and site-ready fabricated steel structures, equipment frames, pipe racks, platforms, walkways, ladders, handrails, skid frames, base frames, lifting beams, bracing frames, built-up sections and modular structural assemblies.",
    pagePath: "/products/custom-heavy-structural-fabrication",
    image: "/product/16.jpg",
    imageAlt: "Custom heavy structural fabrication by National Engineers and Steel Fabricators",
    imagePosition: "center",
    quickFacts: [
      { label: "Product Type", value: "Custom Heavy Structural Fabrication" },
      { label: "Scope", value: "Frames, racks, platforms, skids and modules" },
      { label: "Materials", value: "MS, CS, structural steel, SS or alloy steel" },
      { label: "Build Basis", value: "Structural drawings and project specification" },
    ],
    overview: [
      "Based in Sachin GIDC, Surat, Gujarat, we fabricate heavy structural assemblies as per client drawings, steel grade, section schedule, connection details, load requirements, module size, site erection constraints, coating system, inspection scope, NDT requirement, packing requirement and delivery sequence.",
      "Our custom heavy structural fabrication solutions are suitable for chemical plants, process industries, utilities, power projects, oil and gas projects, bulk material handling facilities, manufacturing plants and heavy engineering applications where dimensional control, welding quality, traceability and site fit-up are important.",
    ],
    sections: [
      {
        title: "Custom Heavy Structural Fabrication in Surat",
        body: ["National Engineers & Steel Fabricators is an experienced custom heavy structural fabrication company in Surat, offering build-to-drawing fabrication for industrial structures, equipment-support frames, pipe racks, platforms, ladders, handrails, skids, base frames, bracing structures and custom structural modules.", "As a heavy structural fabrication company in India, we manufacture structural assemblies with controlled fit-up, accurate dimensions, connection-interface checks, match-marking, coating, packing and documentation support as per project requirements.", "Each fabricated structure is manufactured with attention to member alignment, welding quality, bolt-hole accuracy, diagonal checks, interface dimensions, lifting points, coating quality and site erection readiness."],
      },
      {
        title: "Heavy Structural Fabrication for Industrial Projects",
        body: ["Heavy structural fabrication is used where industrial plants require strong and durable steel structures to support equipment, piping, access systems, skids, machinery, ducting, process modules or plant infrastructure.", "National Engineers & Steel Fabricators provides heavy structural fabrication for projects where standard structural items are not sufficient and custom fabrication is required as per project drawings.", "Our fabrication approach focuses on:"],
        bullets: ["Structural strength", "Dimensional accuracy", "Controlled fit-up", "Welding quality", "Connection accuracy", "Site-friendly modules", "Match-marking", "Surface protection", "Safe transport", "Erection sequence support", "Inspection and documentation"],
      },
      {
        title: "Industrial Structural Fabrication",
        body: ["Industrial structural fabrication includes the manufacturing of steel structures used in process plants, utility areas, production facilities, equipment foundations, access systems and plant expansion projects.", "National Engineers & Steel Fabricators fabricates industrial structures as per approved drawings and project specifications.", "Our industrial structural fabrication scope can include:"],
        bullets: ["Pipe racks", "Equipment support frames", "Heavy equipment frames", "Skid frames", "Base frames", "Platforms", "Walkways", "Ladders", "Handrails", "Bracing frames", "Columns", "Beams", "Built-up sections", "Lifting beams", "Support structures", "Structural modules", "Custom steel structures as per drawing"],
      },
      {
        title: "Pipe Rack Fabrication",
        body: ["Pipe racks are used to support process piping, utility piping, cable trays, ducts and service lines inside industrial plants. Pipe rack fabrication requires accurate member alignment, bolt-hole positioning, bracing arrangement and connection interface control.", "National Engineers & Steel Fabricators fabricates pipe racks as per structural drawings, load requirements, span details, column layout, bracing details, coating specification and site erection sequence.", "Pipe rack fabrication can include:"],
        bullets: ["Columns", "Beams", "Bracing members", "Base plates", "Gussets", "Connection plates", "Bolt-hole drilling", "Match-marking", "Trial assembly where required", "Painting or coating", "Modular dispatch planning"],
      },
      {
        title: "Equipment Support Frame Fabrication",
        body: ["Industrial equipment often requires customized support frames for stable installation, alignment, access and maintenance. These frames must match equipment mounting points, load data, anchor layout and site constraints.", "National Engineers & Steel Fabricators manufactures equipment support frames for process equipment, vessels, tanks, pumps, compressors, ducting systems, scrubber systems, material handling systems and plant machinery.", "Our equipment support frame fabrication can include:"],
        bullets: ["Equipment mounting frames", "Skid support frames", "Base support structures", "Machine support frames", "Pump and compressor frames", "Vessel support structures", "Duct support frames", "Scrubber support structures", "Custom equipment frames as per drawing"],
      },
      {
        title: "Platforms, Walkways, Ladders and Handrails",
        body: ["Industrial plants require safe access for inspection, operation and maintenance. National Engineers & Steel Fabricators fabricates platforms, walkways, ladders and handrails as per client drawings and site requirements.", "These structural components can be supplied for:", "Fabrication can include grating support, ladder cages, handrail posts, toe guards, base plates, brackets, gussets and bolted connection details as specified."],
        bullets: ["Equipment access", "Tank and vessel access", "Pipe rack access", "Scrubber access", "Ducting access", "Silo and hopper access", "Maintenance platforms", "Inspection platforms", "Plant walkways", "Utility area access"],
      },
      {
        title: "Heavy Equipment Frames, Skids and Base Frames",
        body: ["Heavy equipment frames and skids are used where machinery, packaged equipment or process systems need a stable fabricated base for transport, installation and operation.", "National Engineers & Steel Fabricators manufactures heavy equipment frames, skid frames and base frames as per project drawings, load condition, lifting requirement, equipment layout and connection details.", "Our skid and base frame fabrication can include:"],
        bullets: ["Main structural frame", "Cross members", "Equipment mounting plates", "Base plates", "Lifting lugs", "Fork pockets where required", "Anchor holes", "Gussets and stiffeners", "Connection brackets", "Coating and packing", "Match-marked sections where required"],
      },
      {
        title: "Lifting Beam and Bracing Frame Fabrication",
        body: ["Lifting beams and bracing frames are used for controlled lifting, handling, support and stability of industrial structures or equipment. These components must be fabricated with proper attention to load path, connection details, welding quality and inspection requirement.", "National Engineers & Steel Fabricators fabricates lifting beams, bracing frames and reinforced structural members as per client drawings and project requirements.", "Fabrication may include:"],
        bullets: ["Lifting beams", "Spreader beams", "Bracing frames", "Reinforced beam assemblies", "Gusseted members", "Stiffened structures", "Built-up members", "Connection plates", "Lifting lug arrangements", "Inspection and documentation support"],
      },
      {
        title: "Built-Up Sections and Stiffened Structures",
        body: ["Built-up sections are used where standard rolled sections are not suitable for the required load, span, geometry or project condition. Stiffened structures are used where additional rigidity and strength are required.", "National Engineers & Steel Fabricators fabricates built-up sections and stiffened structures as per structural drawings, steel grade, welding requirement, member size, stiffener layout and inspection scope.", "Our scope can include:"],
        bullets: ["Built-up beams", "Built-up columns", "Box sections", "Stiffened plate structures", "Welded structural members", "Reinforced frames", "Custom structural sections", "Heavy welded assemblies", "Connection-ready members"],
      },
      {
        title: "Modular Structural Fabrication",
        body: ["Large industrial structures often need to be fabricated in site-friendly modules for easier transport, handling and erection. Modular fabrication helps reduce site work and supports faster installation.", "National Engineers & Steel Fabricators can fabricate structural modules with match-marking, part identification, erection sequence planning and packing support.", "Our modular fabrication focus includes:"],
        bullets: ["Transport-friendly module sizing", "Match-marking for site assembly", "Bolt-hole and connection accuracy", "Trial fit-up where required", "Part-wise identification", "Erection sequence packing", "Safe lifting and handling provisions", "Coating protection during transport", "Dispatch documentation support"],
      },
      {
        title: "Types of Heavy Structural Fabrication We Undertake",
        body: ["National Engineers & Steel Fabricators undertakes custom heavy structural fabrication for different industrial applications.", "Common fabrication types include:"],
        bullets: ["Custom heavy structural fabrication", "Industrial structural fabrication", "Steel structural fabrication", "Heavy steel fabrication", "Pipe rack fabrication", "Equipment support frame fabrication", "Platform fabrication", "Walkway fabrication", "Ladder fabrication", "Handrail fabrication", "Heavy equipment frame fabrication", "Skid frame fabrication", "Base frame fabrication", "Lifting beam fabrication", "Bracing frame fabrication", "Built-up section fabrication", "Structural module fabrication", "Modular structural fabrication", "Site erection-friendly fabricated structures", "Custom structural assemblies as per drawing"],
      },
      {
        title: "Key Features",
        bullets: ["Custom heavy structural fabrication as per drawing", "Suitable for industrial plants and heavy engineering projects", "Pipe racks, platforms, frames, skids and structural modules", "Equipment-support frames and heavy base frames", "Walkways, ladders and handrails", "Lifting beams, bracing frames and built-up sections", "MS, CS, SS and alloy steel fabrication options", "Controlled fit-up and dimensional accuracy", "Connection-interface checks and bolt-hole alignment", "Match-marking for site assembly", "Trial assembly where required", "Surface preparation, painting and coating support", "Packing suitable for transport and erection sequencing", "Weld visual inspection and NDT where specified", "Material traceability and QA documentation support"],
      },
      {
        title: "Applications",
        body: ["Our custom heavy structural fabrication solutions are used across different industrial applications, including:"],
        bullets: ["Chemical plants", "Process industries", "Utility plants", "Power projects", "Oil and gas projects", "Bulk material handling facilities", "Manufacturing plants", "Heavy engineering projects", "Plant expansion projects", "Plant modification jobs", "Equipment installation projects", "Pipe rack systems", "Structural access systems", "Skid-mounted packages", "Industrial platforms", "Maintenance access structures", "Retrofit structural jobs", "Custom plant fabrication projects"],
      },
      {
        title: "Materials of Construction",
        body: ["National Engineers & Steel Fabricators fabricates heavy structural assemblies using suitable material based on load condition, service environment, corrosion exposure, project specification and client drawings.", "Common material options include:", "Material selection depends on structural duty, load condition, site environment, corrosion risk and project requirements."],
        bullets: ["Mild Steel", "Carbon Steel", "Structural Steel", "Stainless Steel", "Alloy Steel where specified", "Painted structural assemblies", "Epoxy-coated structures", "Galvanized structures where required", "Special MOC as per client specification"],
      },
      {
        title: "Technical Specifications",
        table: { columns: ["Specification", "Details"], rows: [["Product Type", "Custom Heavy Structural Fabrication"], ["Equipment Category", "Fabrication Components & Structural"], ["Application", "Industrial structures, equipment support, access structures, skids and modular assemblies"], ["Build Basis", "Structural drawings, GA drawings, section schedule, connection details or project specification"], ["Fabrication Scope", "Frames, racks, platforms, walkways, ladders, handrails, skids, beams and modules"], ["Material of Construction", "MS, CS, structural steel, SS, alloy steel or as per requirement"], ["Section Types", "Beams, channels, angles, plates, pipes, tubes, built-up sections or custom members"], ["Connection Type", "Bolted, welded, flanged or as per drawing"], ["Cutting", "CNC, plasma, oxy, saw cutting or as required"], ["Drilling", "Bolt holes, slots and connection holes as per drawing"], ["Welding", "As per project welding requirement"], ["Built-Up Members", "Available as per structural drawing"], ["Trial Fit-Up", "Available for critical assemblies where required"], ["Match-Marking", "Provided for site assembly where required"], ["Surface Finish", "Primer, paint, epoxy, galvanizing or coating as specified"], ["Inspection", "Dimensional checks, weld visual inspection, connection-interface checks and NDT where specified"], ["Documentation", "Material traceability, inspection reports, NDT reports and QA documentation as agreed"], ["Packing", "Transport-safe packing and erection-sequence packing where required"], ["Customization", "Available as per load, drawing, module size, site constraints, coating and inspection requirement"]] },
      },
      {
        title: "Fabrication and Quality Control",
        body: ["Every heavy structural fabrication job is executed with proper attention to material verification, cutting, fit-up, welding quality, hole alignment, connection accuracy, dimensional control, diagonal checks, surface preparation and dispatch readiness.", "Quality checks may include:"],
        bullets: ["Material verification", "Drawing and section schedule review", "Cutting inspection", "Drilling and hole alignment checks", "Fit-up inspection", "Welding quality checks", "Dimensional inspection", "Diagonal checks", "Bolt-hole and slot checks", "Connection-interface inspection", "Built-up member alignment checks", "Stiffener and gusset checks", "Trial assembly where required", "NDT where specified", "Surface preparation checks", "Painting or coating checks", "Part identification and match-marking checks", "Packing and dispatch readiness checks", "Documentation compilation as agreed"],
      },
      {
        title: "Site Erection-Friendly Fabrication",
        body: ["Heavy structural assemblies must reach site in a condition that supports fast and accurate erection. Poor marking, wrong module sizing or inaccurate bolt holes can create site delays.", "Our site erection-friendly fabrication approach includes:"],
        bullets: ["Modular fabrication planning", "Match-marking", "Part identification", "Connection accuracy", "Bolt-hole alignment", "Transport-friendly module sizes", "Lifting and handling provisions", "Packing by erection sequence", "Coating protection during transport", "Dispatch records and documentation support"],
      },
      {
        title: "Why Choose National Engineers?",
        body: ["National Engineers & Steel Fabricators is a trusted custom heavy structural fabrication company and structural fabrication company in Surat, Gujarat. We provide build-to-drawing fabrication for industrial projects that require strength, accuracy, inspection support and site-ready delivery.", "Reasons to work with us:"],
        bullets: ["Experienced custom heavy structural fabrication partner in India", "Reliable heavy structural fabrication company in Surat, Gujarat", "Pipe racks, frames, platforms, walkways and ladders", "Equipment support frames, skids and base frames", "Lifting beams, bracing frames and built-up structures", "Heavy steel fabrication as per drawing and specification", "Controlled fit-up and dimensional accuracy", "Match-marking and modular fabrication support", "MS, CS, SS and alloy steel fabrication capability", "Surface preparation, painting, coating and packing support", "Weld inspection, dimensional records and NDT support where specified", "Fabrication for chemical, process, power, utility, oil and gas and bulk handling projects"],
      },
      {
        title: "Details Required for Quotation",
        body: ["To provide the right quotation for custom heavy structural fabrication, please share:"],
        bullets: ["Structural drawings", "GA drawings", "Section schedule", "Steel grade", "Fabrication quantities", "Connection details", "Bolt-hole and slot details", "Load data if available", "Module size requirement", "Site erection constraints", "Trial fit-up requirement", "Match-marking requirement", "Coating system", "Surface preparation requirement", "Galvanizing requirement if any", "Inspection requirement", "NDT requirement", "Documentation requirement", "Packing and dispatch sequence", "Delivery location and timeline"],
      },
      {
        title: "Get a Quote for Custom Heavy Structural Fabrication",
        body: ["Looking for custom heavy structural fabrication in India?", "Share your structural drawings, steel grade, section schedule, connection details, module size, coating system, inspection requirement and erection constraints with National Engineers & Steel Fabricators. Our team will review your requirement and provide a suitable fabrication and delivery plan for your industrial structural project."],
      },
    ],
    note:
      "Share your structural drawings, steel grade, section schedule, connection details, module size, coating system, inspection requirement and erection constraints.",
    enquiry: {
      title: "Request a quote for Heavy Structural Fabrication",
      subtitle: "Share your structural drawings, steel grade, quantities, coating, erection, and inspection requirements.",
      productName: "Heavy Structural Fabrication",
      buttonText: "Request Quote",
    },
    faqs: [
      { question: "What is custom heavy structural fabrication?", answer: "Custom heavy structural fabrication means manufacturing industrial steel structures as per client drawings, load requirements, connection details, steel grade, coating specification and site erection requirements." },
      { question: "Who provides heavy structural fabrication in Surat?", answer: "National Engineers & Steel Fabricators provides custom heavy structural fabrication in Surat, Gujarat, for pipe racks, equipment-support frames, platforms, skids, base frames, lifting beams, bracing frames and modular structures." },
      { question: "What types of heavy structures can NESF fabricate?", answer: "NESF can fabricate pipe racks, equipment support frames, platforms, walkways, ladders, handrails, heavy equipment frames, skids, base frames, lifting beams, bracing frames, columns, beams and built-up sections." },
      { question: "Can heavy structural fabrication be done as per drawing?", answer: "Yes, heavy structural fabrication can be done as per structural drawings, GA drawings, section schedule, steel grade, connection details, module size, coating system, inspection scope and site erection constraints." },
      { question: "What industries use custom heavy structural fabrication?", answer: "Custom heavy structural fabrication is used in chemical plants, process industries, utilities, power projects, oil and gas projects, bulk material handling facilities, manufacturing plants and heavy engineering projects." },
      { question: "What materials are used for heavy structural fabrication?", answer: "Heavy structural fabrication can be done using mild steel, carbon steel, structural steel, stainless steel, alloy steel or special materials depending on load condition, site environment and project specification." },
      { question: "What is modular structural fabrication?", answer: "Modular structural fabrication means manufacturing structures in transport-friendly and erection-friendly sections with match-marking, part identification and connection accuracy for easier site assembly." },
      { question: "What quality checks are done for heavy structural fabrication?", answer: "Quality checks may include material verification, dimensional inspection, connection-interface inspection, bolt-hole checks, weld visual inspection, diagonal checks, trial fit-up, NDT where specified and coating inspection." },
      { question: "What details are required to get a quotation?", answer: "To get a quotation, you can share structural drawings, section schedule, steel grade, quantities, connection details, coating system, module size, erection constraints, inspection and NDT requirements." },
      { question: "How is heavy structural fabrication price calculated?", answer: "Price depends on steel quantity, material grade, section type, fabrication complexity, welding scope, drilling, built-up members, trial fit-up, coating system, NDT, packing, documentation and delivery requirements." },
    ],
    seo: {
      title: "Custom Heavy Structural Fabrication in India | NESF",
      description:
        "Custom heavy structural fabrication in Surat, India, offering frames, racks, platforms, skids, beams and modular structures.",
      keywords: [
        "custom heavy structural fabrication", "heavy structural fabrication", "heavy structural fabrication in India", "heavy structural fabrication in Surat", "structural fabrication company in India", "structural fabrication company in Surat", "heavy fabrication company in India", "heavy fabrication company in Surat", "industrial structural fabrication", "custom structural fabrication", "steel structural fabrication", "heavy steel fabrication", "industrial steel fabrication", "pipe rack fabrication", "equipment support frame fabrication", "platform fabrication", "walkway fabrication", "ladder and handrail fabrication", "heavy equipment frame fabrication", "skid frame fabrication", "base frame fabrication", "lifting beam fabrication", "bracing frame fabrication", "built up section fabrication", "structural module fabrication", "modular structural fabrication", "match marked structural fabrication", "site erection friendly fabrication", "MS structural fabrication", "CS structural fabrication", "SS structural fabrication", "NDT", "dimensional inspection", "weld inspection", "coating and packing",
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
