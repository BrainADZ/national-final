import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { CATEGORY_NAME, buildProductMetadata, hvacDuctingNav, productDetails } from "../productDetails";
const product = productDetails["transitions-reducers-elbows"];
export const metadata = buildProductMetadata(product);
export default function TransitionsReducersElbowsPage() {
  return <ProductDetailLayout product={product} categoryName={CATEGORY_NAME} navItems={hvacDuctingNav} />;
}
