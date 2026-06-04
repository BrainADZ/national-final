import ProductDetailLayout from "../../_components/ProductDetailLayout";
import {
  CATEGORY_NAME,
  buildProductMetadata,
  pollutionControlNav,
  productDetails,
} from "../productDetails";

const product = productDetails["scrubber-internals-liners"];

export const metadata = buildProductMetadata(product);

export default function ScrubberInternalsLinersPage() {
  return <ProductDetailLayout product={product} categoryName={CATEGORY_NAME} navItems={pollutionControlNav} />;
}
