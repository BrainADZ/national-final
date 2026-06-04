import ProductDetailLayout from "../../_components/ProductDetailLayout";
import {
  CATEGORY_NAME,
  buildProductMetadata,
  pipingPipelineNav,
  productDetails,
} from "../productDetails";

const product = productDetails["headers-manifolds-special-piping"];

export const metadata = buildProductMetadata(product);

export default function HeadersManifoldsSpecialPipingPage() {
  return (
    <ProductDetailLayout
      product={product}
      categoryName={CATEGORY_NAME}
      navItems={pipingPipelineNav}
    />
  );
}
