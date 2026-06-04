import ProductDetailLayout from "../../_components/ProductDetailLayout";
import {
  CATEGORY_NAME,
  buildProductMetadata,
  processEquipmentNav,
  productDetails,
} from "../productDetails";

const product = productDetails["special-purpose-process-vessels"];

export const metadata = buildProductMetadata(product);

export default function SpecialPurposeProcessVesselsPage() {
  return (
    <ProductDetailLayout
      product={product}
      categoryName={CATEGORY_NAME}
      navItems={processEquipmentNav}
    />
  );
}
