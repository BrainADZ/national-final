import ProductDetailLayout from "../../_components/ProductDetailLayout";
import { CATEGORY_NAME, buildProductMetadata, customManufacturingNav, productDetails } from "../productDetails";
const product = productDetails["on-site-erection-support"];
export const metadata = buildProductMetadata(product);
export default function OnSiteErectionSupportPage() {
  return <ProductDetailLayout product={product} categoryName={CATEGORY_NAME} navItems={customManufacturingNav} />;
}
