import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { CATEGORY_NAME, buildProductMetadata, fabricationStructuralNav, productDetails } from "../productDetails";
const product = productDetails["custom-heavy-structural-fabrication"];
export const metadata = buildProductMetadata(product);
export default function CustomHeavyStructuralFabricationPage() {
  return <ProductDetailLayout product={product} categoryName={CATEGORY_NAME} navItems={fabricationStructuralNav} />;
}
