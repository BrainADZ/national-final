import ProductDetailLayout from "../../_components/ProductDetailLayout";
import {
  CATEGORY_NAME,
  buildProductMetadata,
  pipingPipelineNav,
  productDetails,
} from "../productDetails";

const product = productDetails["piping-supports"];

export const metadata = buildProductMetadata(product);

export default function PipingSupportsPage() {
  return (
    <ProductDetailLayout
      product={product}
      categoryName={CATEGORY_NAME}
      navItems={pipingPipelineNav}
    />
  );
}
