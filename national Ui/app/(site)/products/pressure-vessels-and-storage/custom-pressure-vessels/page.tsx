import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { buildProductMetadata, productDetails } from "../productDetails";

const product = productDetails["custom-pressure-vessel-manufacturer"];

export const metadata = buildProductMetadata(product);

export default function CustomPressureVesselsPage() {
  return <ProductDetailLayout product={product} />;
}
