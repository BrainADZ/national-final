import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { CATEGORY_NAME, buildProductMetadata, hvacDuctingNav, productDetails } from "../productDetails";
const product = productDetails["duct-transition-manufacturer"];
export const metadata = buildProductMetadata(product);
export default function DuctTransitionPage() {
  return <ProductDetailLayout product={product} categoryName={CATEGORY_NAME} navItems={hvacDuctingNav} />;
}
