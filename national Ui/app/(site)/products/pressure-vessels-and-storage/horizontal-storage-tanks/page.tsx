import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { buildProductMetadata, productDetails } from "../productDetails";

const product = productDetails["horizontal-storage-tank-manufacturer"];

export const metadata = buildProductMetadata(product);

export default function HorizontalStorageTanksPage() {
  return <ProductDetailLayout product={product} />;
}
