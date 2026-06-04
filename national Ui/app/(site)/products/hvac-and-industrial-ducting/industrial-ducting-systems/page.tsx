import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { CATEGORY_NAME, buildProductMetadata, hvacDuctingNav, productDetails } from "../productDetails";
const product = productDetails["industrial-ducting-systems"];
export const metadata = buildProductMetadata(product);
export default function IndustrialDuctingSystemsPage() {
  return <ProductDetailLayout product={product} categoryName={CATEGORY_NAME} navItems={hvacDuctingNav} />;
}
