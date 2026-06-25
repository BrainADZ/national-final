import type { Metadata } from "next";
import ProductDetailLayout from "../_components/ProductDetailLayout";
import { buildMetadata } from "@/lib/seo";
import {
  CATEGORY_NAME,
  pressureVesselNav,
  productDetails,
} from "../pressure-vessels-and-storage/productDetails";

const product = productDetails["air-receiver-vessels"];

export const metadata: Metadata = buildMetadata({
  title: product.seo.title,
  description: product.seo.description,
  path: product.pagePath,
  image: product.image,
  keywords: product.seo.keywords,
});

export default function AirReceiverVesselsManufacturerPage() {
  return (
    <ProductDetailLayout
      product={product}
      categoryName={CATEGORY_NAME}
      categoryPath="/products/pressure-vessels-and-storage"
      navItems={pressureVesselNav}
    />
  );
}
