import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { buildProductMetadata, productDetails } from "../productDetails";

const product = productDetails["filter-vessel-manufacturer"];

export const metadata = buildProductMetadata(product);

export default function FilterVesselsPage() {
  return <ProductDetailLayout product={product} />;
}
