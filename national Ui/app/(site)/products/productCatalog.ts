import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo";
import {
  CATEGORY_NAME as PRESSURE_VESSELS_CATEGORY_NAME,
  pressureVesselNav,
  productDetails as pressureVesselDetails,
  type ProductDetail,
} from "./pressure-vessels-and-storage/productDetails";
import {
  CATEGORY_NAME as MATERIAL_HANDLING_CATEGORY_NAME,
  materialHandlingNav,
  productDetails as materialHandlingDetails,
} from "./material-handling-and-storage/productDetails";
import {
  CATEGORY_NAME as PROCESS_EQUIPMENT_CATEGORY_NAME,
  processEquipmentNav,
  productDetails as processEquipmentDetails,
} from "./process-equipment-and-heat-transfer/productDetails";
import {
  CATEGORY_NAME as POLLUTION_CONTROL_CATEGORY_NAME,
  pollutionControlNav,
  productDetails as pollutionControlDetails,
} from "./pollution-control-and-gas-handling/productDetails";
import {
  CATEGORY_NAME as PIPING_PIPELINE_CATEGORY_NAME,
  pipingPipelineNav,
  productDetails as pipingPipelineDetails,
} from "./piping-and-pipeline-systems/productDetails";
import {
  CATEGORY_NAME as FABRICATION_STRUCTURAL_CATEGORY_NAME,
  fabricationStructuralNav,
  productDetails as fabricationStructuralDetails,
} from "./fabrication-components-and-structural/productDetails";
import {
  CATEGORY_NAME as HVAC_DUCTING_CATEGORY_NAME,
  hvacDuctingNav,
  productDetails as hvacDuctingDetails,
} from "./hvac-and-industrial-ducting/productDetails";
import {
  CATEGORY_NAME as CUSTOM_MANUFACTURING_CATEGORY_NAME,
  customManufacturingNav,
  productDetails as customManufacturingDetails,
} from "./custom-manufacturing/productDetails";

type ProductNavItem = {
  label: string;
  href: string;
};

type ProductCategorySource = {
  categoryName: string;
  categoryPath: string;
  navItems: ProductNavItem[];
  products: Record<string, ProductDetail>;
};

export type ProductCatalogEntry = {
  slug: string;
  product: ProductDetail;
  categoryName: string;
  categoryPath: string;
  navItems: ProductNavItem[];
};

const productCategorySources: ProductCategorySource[] = [
  {
    categoryName: PRESSURE_VESSELS_CATEGORY_NAME,
    categoryPath: "/products/pressure-vessels-and-storage",
    navItems: pressureVesselNav,
    products: pressureVesselDetails,
  },
  {
    categoryName: MATERIAL_HANDLING_CATEGORY_NAME,
    categoryPath: "/products/material-handling-and-storage",
    navItems: materialHandlingNav,
    products: materialHandlingDetails,
  },
  {
    categoryName: PROCESS_EQUIPMENT_CATEGORY_NAME,
    categoryPath: "/products/process-equipment-and-heat-transfer",
    navItems: processEquipmentNav,
    products: processEquipmentDetails,
  },
  {
    categoryName: POLLUTION_CONTROL_CATEGORY_NAME,
    categoryPath: "/products/pollution-control-and-gas-handling",
    navItems: pollutionControlNav,
    products: pollutionControlDetails,
  },
  {
    categoryName: PIPING_PIPELINE_CATEGORY_NAME,
    categoryPath: "/products/piping-and-pipeline-systems",
    navItems: pipingPipelineNav,
    products: pipingPipelineDetails,
  },
  {
    categoryName: FABRICATION_STRUCTURAL_CATEGORY_NAME,
    categoryPath: "/products/fabrication-components-and-structural",
    navItems: fabricationStructuralNav,
    products: fabricationStructuralDetails,
  },
  {
    categoryName: HVAC_DUCTING_CATEGORY_NAME,
    categoryPath: "/products/hvac-and-industrial-ducting",
    navItems: hvacDuctingNav,
    products: hvacDuctingDetails,
  },
  {
    categoryName: CUSTOM_MANUFACTURING_CATEGORY_NAME,
    categoryPath: "/products/custom-manufacturing",
    navItems: customManufacturingNav,
    products: customManufacturingDetails,
  },
];

export const productCatalog: ProductCatalogEntry[] = productCategorySources.flatMap(
  (source) =>
    Object.entries(source.products).map(([slug, product]) => ({
      slug,
      product,
      categoryName: source.categoryName,
      categoryPath: source.categoryPath,
      navItems: source.navItems,
    }))
);

const productsBySlug = new Map(
  productCatalog.map((entry) => [entry.slug, entry])
);

export function getProductEntry(slug: string) {
  return productsBySlug.get(slug);
}

export function buildProductDetailMetadata(product: ProductDetail): Metadata {
  return buildMetadata({
    title: product.seo.title,
    description: product.seo.description,
    path: product.pagePath,
    image: product.image,
    keywords: product.seo.keywords,
    robots: {
      index: false,
      follow: false,
    },
  });
}
