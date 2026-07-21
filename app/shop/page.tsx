import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Shop All",
  description: "Browse the full Arban Muse collection of perfumes and fashion.",
};

const TABS = [
  { label: "All", value: "all" as const },
  { label: "Women's Perfumes", value: "womens-perfume" as const },
  { label: "Men's Perfumes", value: "mens-perfume" as const },
  { label: "Women's Fashion", value: "womens-fashion" as const },
  { label: "Men's Fashion", value: "mens-fashion" as const },
];

export default function ShopPage() {
  return (
    <>
      <PageHeader
        eyebrow="The Full Collection"
        title="Shop All"
        subtitle="Every fragrance and every silhouette, in one elegant edit."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <ProductGrid products={products} tabs={TABS} />
        </Container>
      </section>
    </>
  );
}
