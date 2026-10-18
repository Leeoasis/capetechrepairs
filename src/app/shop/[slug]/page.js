import { notFound } from "next/navigation";
import ShopProducts from "../ShopProducts";
import { products, formatPrice } from "../products";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.id }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const product = products.find((item) => item.id === slug);
  if (!product) notFound();
  return {
    title: `${product.name} | ${formatPrice(product.price)}`,
    description: product.description,
    alternates: { canonical: `/shop/${product.id}` },
    openGraph: {
      title: `${product.name} | ${formatPrice(product.price)}`,
      description: product.description,
      url: `/shop/${product.id}`,
      images: [product.photos[0]],
    },
  };
}

export default async function ProductPage({ params }) {
  const { slug } = await params;
  if (!products.some((product) => product.id === slug)) notFound();
  return <main><ShopProducts productId={slug} /></main>;
}
