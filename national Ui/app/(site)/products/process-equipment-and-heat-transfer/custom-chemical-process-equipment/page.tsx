import ProductDetailLayout from "../../_components/ProductDetailLayout";
import {
  CATEGORY_NAME,
  buildProductMetadata,
  processEquipmentNav,
  productDetails,
} from "../productDetails";

const product = productDetails["custom-chemical-process-equipment"];

export const metadata = buildProductMetadata(product);

export default function CustomChemicalProcessEquipmentPage() {
  return (
    <ProductDetailLayout
      product={product}
      categoryName={CATEGORY_NAME}
      navItems={processEquipmentNav}
    />
  );
}
