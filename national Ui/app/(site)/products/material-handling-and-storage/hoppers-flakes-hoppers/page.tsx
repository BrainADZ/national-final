import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { CATEGORY_NAME, buildProductMetadata, materialHandlingNav, productDetails } from "../productDetails";

const product = productDetails["hoppers-flakes-hoppers"];
export const metadata = buildProductMetadata(product);

export default function HoppersFlakesHoppersPage() {
  return <ProductDetailLayout product={product} categoryName={CATEGORY_NAME} navItems={materialHandlingNav} />;
}
