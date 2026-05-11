import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { buildProductMetadata, productDetails } from "../productDetails";

const product = productDetails["vertical-storage-tanks"];

export const metadata = buildProductMetadata(product);

export default function VerticalStorageTanksPage() {
  return <ProductDetailLayout product={product} />;
}
