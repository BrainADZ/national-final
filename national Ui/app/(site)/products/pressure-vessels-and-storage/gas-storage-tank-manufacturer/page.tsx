import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { buildProductMetadata, productDetails } from "../productDetails";

const product = productDetails["gas-storage-tank-manufacturer"];

export const metadata = buildProductMetadata(product);

export default function GasStorageTankPage() {
  return <ProductDetailLayout product={product} />;
}
