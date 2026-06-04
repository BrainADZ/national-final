import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { CATEGORY_NAME, buildProductMetadata, hvacDuctingNav, productDetails } from "../productDetails";
const product = productDetails["insulated-duct-casing"];
export const metadata = buildProductMetadata(product);
export default function InsulatedDuctCasingPage() {
  return <ProductDetailLayout product={product} categoryName={CATEGORY_NAME} navItems={hvacDuctingNav} />;
}
