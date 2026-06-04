import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { CATEGORY_NAME, buildProductMetadata, fabricationStructuralNav, productDetails } from "../productDetails";
const product = productDetails["pipe-saddles-supports"];
export const metadata = buildProductMetadata(product);
export default function PipeSaddlesSupportsPage() {
  return <ProductDetailLayout product={product} categoryName={CATEGORY_NAME} navItems={fabricationStructuralNav} />;
}
