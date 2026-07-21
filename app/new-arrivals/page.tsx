import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ProductGrid from "@/components/product/ProductGrid";
import { newArrivals } from "@/lib/data";

export const metadata: Metadata = {
  title: "New Arrivals",
  description: "The latest perfumes and fashion pieces from Arban Muse.",
};

export default function NewArrivalsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Just Landed"
        title="New Arrivals"
        subtitle="Limited-quantity additions to the collection — shop them before they're gone."
      />
      <section className="py-16 sm:py-20">
        <Container>
          <ProductGrid products={newArrivals} />
        </Container>
      </section>
    </>
  );
}
