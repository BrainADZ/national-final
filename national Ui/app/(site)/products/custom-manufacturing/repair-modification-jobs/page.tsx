import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { CATEGORY_NAME, buildProductMetadata, customManufacturingNav, productDetails } from "../productDetails";
const product = productDetails["repair-modification-jobs"];
export const metadata = buildProductMetadata(product);
export default function RepairModificationJobsPage() {
  return <ProductDetailLayout product={product} categoryName={CATEGORY_NAME} navItems={customManufacturingNav} />;
}
