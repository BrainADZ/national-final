import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { CATEGORY_NAME, buildProductMetadata, customManufacturingNav, productDetails } from "../productDetails";
const product = productDetails["ss-cs-alloy-steel-fabrication"];
export const metadata = buildProductMetadata(product);
export default function SteelFabricationPage() {
  return <ProductDetailLayout product={product} categoryName={CATEGORY_NAME} navItems={customManufacturingNav} />;
}
