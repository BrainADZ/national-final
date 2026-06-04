import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { CATEGORY_NAME, buildProductMetadata, customManufacturingNav, productDetails } from "../productDetails";
const product = productDetails["heavy-plate-fabrication"];
export const metadata = buildProductMetadata(product);
export default function HeavyPlateFabricationPage() {
  return <ProductDetailLayout product={product} categoryName={CATEGORY_NAME} navItems={customManufacturingNav} />;
}
