import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { CATEGORY_NAME, buildProductMetadata, materialHandlingNav, productDetails } from "../productDetails";

const product = productDetails["silos-storage-bins"];
export const metadata = buildProductMetadata(product);

export default function SilosStorageBinsPage() {
  return <ProductDetailLayout product={product} categoryName={CATEGORY_NAME} navItems={materialHandlingNav} />;
}
