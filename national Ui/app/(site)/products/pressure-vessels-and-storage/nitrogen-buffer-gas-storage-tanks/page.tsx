import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { buildProductMetadata, productDetails } from "../productDetails";

const product = productDetails["nitrogen-buffer-gas-storage-tanks"];

export const metadata = buildProductMetadata(product);

export default function NitrogenBufferGasStorageTanksPage() {
  return <ProductDetailLayout product={product} />;
}
