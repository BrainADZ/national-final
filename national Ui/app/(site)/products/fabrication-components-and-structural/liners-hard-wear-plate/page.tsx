import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { CATEGORY_NAME, buildProductMetadata, fabricationStructuralNav, productDetails } from "../productDetails";
const product = productDetails["liners-hard-wear-plate"];
export const metadata = buildProductMetadata(product);
export default function LinersHardWearPlatePage() {
  return <ProductDetailLayout product={product} categoryName={CATEGORY_NAME} navItems={fabricationStructuralNav} />;
}
