import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { buildProductMetadata, productDetails } from "../productDetails";

const product = productDetails["air-receiver-vessels"];

export const metadata = buildProductMetadata(product);

export default function AirReceiverVesselsPage() {
  return <ProductDetailLayout product={product} />;
}
