import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { CATEGORY_NAME, buildProductMetadata, processEquipmentNav, productDetails } from "../productDetails";

const product = productDetails["process-column-manufacturer"];

export const metadata = buildProductMetadata(product);

export default function ProcessColumnPage() {
  return <ProductDetailLayout product={product} categoryName={CATEGORY_NAME} navItems={processEquipmentNav} />;
}
