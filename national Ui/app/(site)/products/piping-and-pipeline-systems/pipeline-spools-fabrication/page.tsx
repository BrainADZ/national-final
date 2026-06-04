import ProductDetailLayout from "../../_components/ProductDetailLayout";
import {
  CATEGORY_NAME,
  buildProductMetadata,
  pipingPipelineNav,
  productDetails,
} from "../productDetails";

const product = productDetails["pipeline-spools-fabrication"];

export const metadata = buildProductMetadata(product);

export default function PipelineSpoolsFabricationPage() {
  return (
    <ProductDetailLayout
      product={product}
      categoryName={CATEGORY_NAME}
      navItems={pipingPipelineNav}
    />
  );
}
