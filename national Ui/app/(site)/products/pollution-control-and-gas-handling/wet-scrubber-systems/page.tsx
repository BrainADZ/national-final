import ProductDetailLayout from "../../_components/ProductDetailLayout";
import {
  CATEGORY_NAME,
  buildProductMetadata,
  pollutionControlNav,
  productDetails,
} from "../productDetails";

const product = productDetails["wet-scrubber-systems"];

export const metadata = buildProductMetadata(product);

export default function WetScrubberSystemsPage() {
  return <ProductDetailLayout product={product} categoryName={CATEGORY_NAME} navItems={pollutionControlNav} />;
}
