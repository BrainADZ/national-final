import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { buildProductMetadata, productDetails } from "../productDetails";

const product = productDetails["water-holding-utility-vessel-manufacturer"];

export const metadata = buildProductMetadata(product);

export default function WaterHoldingUtilityVesselsPage() {
  return <ProductDetailLayout product={product} />;
}
