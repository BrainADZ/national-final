import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { CATEGORY_NAME, buildProductMetadata, materialHandlingNav, productDetails } from "../productDetails";

const product = productDetails["custom-bulk-handling-fabrication"];
export const metadata = buildProductMetadata(product);

export default function CustomBulkHandlingFabricationPage() {
  return <ProductDetailLayout product={product} categoryName={CATEGORY_NAME} navItems={materialHandlingNav} />;
}
