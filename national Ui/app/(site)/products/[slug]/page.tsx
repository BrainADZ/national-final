import { notFound } from "next/navigation";
import ProductDetailLayout from "../_components/ProductDetailLayout";
import {
  buildProductDetailMetadata,
  getProductEntry,
  productCatalog,
} from "../productCatalog";

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return productCatalog.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({ params }: ProductPageProps) {
  const { slug } = await params;
  const entry = getProductEntry(slug);

  if (!entry) return {};

  return buildProductDetailMetadata(entry.product);
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const entry = getProductEntry(slug);

  if (!entry) notFound();

  return (
    <ProductDetailLayout
      product={entry.product}
      categoryName={entry.categoryName}
      categoryPath={entry.categoryPath}
      navItems={entry.navItems}
    />
  );
}
