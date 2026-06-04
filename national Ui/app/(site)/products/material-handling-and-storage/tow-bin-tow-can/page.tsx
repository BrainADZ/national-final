import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { CATEGORY_NAME, buildProductMetadata, materialHandlingNav, productDetails } from "../productDetails";

const product = productDetails["tow-bin-tow-can"];
export const metadata = buildProductMetadata(product);

export default function TowBinTowCanPage() {
  return <ProductDetailLayout product={product} categoryName={CATEGORY_NAME} navItems={materialHandlingNav} />;
}
