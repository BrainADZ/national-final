import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { CATEGORY_NAME, buildProductMetadata, hvacDuctingNav, productDetails } from "../productDetails";
const product = productDetails["ahu-ducts-gi-ss"];
export const metadata = buildProductMetadata(product);
export default function AhuDuctsPage() {
  return <ProductDetailLayout product={product} categoryName={CATEGORY_NAME} navItems={hvacDuctingNav} />;
}
