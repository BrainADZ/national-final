import ProductDetailLayout from "../../_components/ProductDetailLayout";
import {
  CATEGORY_NAME,
  buildProductMetadata,
  processEquipmentNav,
  productDetails,
} from "../productDetails";

const product = productDetails["heat-exchanger-shells-columns"];

export const metadata = buildProductMetadata(product);

export default function HeatExchangerShellsColumnsPage() {
  return (
    <ProductDetailLayout
      product={product}
      categoryName={CATEGORY_NAME}
      navItems={processEquipmentNav}
    />
  );
}
