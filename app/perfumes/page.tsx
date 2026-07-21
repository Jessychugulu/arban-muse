import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ProductGrid from "@/components/product/ProductGrid";
import { products } from "@/lib/data";

export const metadata: Metadata = {
  title: "Perfumes",
  description:
    "Shop signature perfumes for women and men — bold, elegant fragrances by Arban Muse.",
};

const TABS = [
  { label: "All Perfumes", value: "all" as const },
  { label: "Women's Perfumes", value: "womens-perfume" as const },
  { label: "Men's Perfumes", value: "mens-perfume" as const },
];

const perfumes = products.filter(
  (p) => p.category === "womens-perfume" || p.category === "mens-perfume"
);

export default function PerfumesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Fragrance Edit"
        title="Perfumes"
        subtitle="Scents crafted to be remembered — from soft florals to bold, smoked accords."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <ProductGrid products={perfumes} tabs={TABS} />
        </Container>
      </section>
    </>
  );
}
