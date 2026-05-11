import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { buildProductMetadata, productDetails } from "../productDetails";

const product = productDetails["horizontal-storage-tanks"];

export const metadata = buildProductMetadata(product);

export default function HorizontalStorageTanksPage() {
  return <ProductDetailLayout product={product} />;
}
