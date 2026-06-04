import ProductDetailLayout from "../../_components/ProductDetailLayout";
import {
  CATEGORY_NAME,
  buildProductMetadata,
  pipingPipelineNav,
  productDetails,
} from "../productDetails";

const product = productDetails["pig-launcher-pig-receiver-systems"];

export const metadata = buildProductMetadata(product);

export default function PigLauncherPigReceiverSystemsPage() {
  return (
    <ProductDetailLayout
      product={product}
      categoryName={CATEGORY_NAME}
      navItems={pipingPipelineNav}
    />
  );
}
