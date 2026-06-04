import ProductDetailLayout from "../../_components/ProductDetailLayout";
import {
  CATEGORY_NAME,
  buildProductMetadata,
  pollutionControlNav,
  productDetails,
} from "../productDetails";

const product = productDetails["ducting-flue-gas-lines"];

export const metadata = buildProductMetadata(product);

export default function DuctingFlueGasLinesPage() {
  return <ProductDetailLayout product={product} categoryName={CATEGORY_NAME} navItems={pollutionControlNav} />;
}
