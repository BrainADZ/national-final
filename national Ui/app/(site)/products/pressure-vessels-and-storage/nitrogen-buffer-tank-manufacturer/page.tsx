import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { buildProductMetadata, productDetails } from "../productDetails";

const product = productDetails["nitrogen-buffer-tank-manufacturer"];

export const metadata = buildProductMetadata(product);

export default function NitrogenBufferTankPage() {
  return <ProductDetailLayout product={product} />;
}
