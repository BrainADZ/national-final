import ProductDetailLayout from "../../_components/ProductDetailLayout";
import {
  CATEGORY_NAME,
  buildProductMetadata,
  processEquipmentNav,
  productDetails,
} from "../productDetails";

const product = productDetails["process-skids-packages"];

export const metadata = buildProductMetadata(product);

export default function ProcessSkidsPackagesPage() {
  return (
    <ProductDetailLayout
      product={product}
      categoryName={CATEGORY_NAME}
      navItems={processEquipmentNav}
    />
  );
}
