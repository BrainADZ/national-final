import ProductDetailLayout from "../../_components/ProductDetailLayout";
import {
  CATEGORY_NAME,
  buildProductMetadata,
  processEquipmentNav,
  productDetails,
} from "../productDetails";

const product = productDetails["condensers-water-condensers"];

export const metadata = buildProductMetadata(product);

export default function CondensersWaterCondensersPage() {
  return (
    <ProductDetailLayout
      product={product}
      categoryName={CATEGORY_NAME}
      navItems={processEquipmentNav}
    />
  );
}
