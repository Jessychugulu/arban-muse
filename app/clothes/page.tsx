import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Clothes",
  description:
    "Shop tailored, premium fashion for women and men by Arban Muse.",
};

const TABS = [
  { label: "All Fashion", value: "all" as const },
  { label: "Women's Fashion", value: "womens-fashion" as const },
  { label: "Men's Fashion", value: "mens-fashion" as const },
];

const clothes = products.filter(
  (p) => p.category === "womens-fashion" || p.category === "mens-fashion"
);

export default function ClothesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fashion Edit"
        title="Clothes"
        subtitle="Tailored silhouettes and premium fabrics, designed to last beyond the season."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <ProductGrid products={clothes} tabs={TABS} />
        </Container>
      </section>
    </>
  );
}
