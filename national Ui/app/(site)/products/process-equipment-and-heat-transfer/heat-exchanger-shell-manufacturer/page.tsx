import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { CATEGORY_NAME, buildProductMetadata, processEquipmentNav, productDetails } from "../productDetails";

const product = productDetails["heat-exchanger-shell-manufacturer"];

export const metadata = buildProductMetadata(product);

export default function HeatExchangerShellPage() {
  return <ProductDetailLayout product={product} categoryName={CATEGORY_NAME} navItems={processEquipmentNav} />;
}
