import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { buildProductMetadata, productDetails } from "../productDetails";

const product = productDetails["blowdown-flash-tanks"];

export const metadata = buildProductMetadata(product);

export default function BlowdownFlashTanksPage() {
  return <ProductDetailLayout product={product} />;
}
