import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { CATEGORY_NAME, buildProductMetadata, fabricationStructuralNav, productDetails } from "../productDetails";
const product = productDetails["base-plates"];
export const metadata = buildProductMetadata(product);
export default function BasePlatesPage() {
  return <ProductDetailLayout product={product} categoryName={CATEGORY_NAME} navItems={fabricationStructuralNav} />;
}
