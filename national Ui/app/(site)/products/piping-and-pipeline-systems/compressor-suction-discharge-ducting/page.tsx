import ProductDetailLayout from "../../_components/ProductDetailLayout";
import {
  CATEGORY_NAME,
  buildProductMetadata,
  pipingPipelineNav,
  productDetails,
} from "../productDetails";

const product = productDetails["compressor-suction-discharge-ducting"];

export const metadata = buildProductMetadata(product);

export default function CompressorSuctionDischargeDuctingPage() {
  return (
    <ProductDetailLayout
      product={product}
      categoryName={CATEGORY_NAME}
      navItems={pipingPipelineNav}
    />
  );
}
