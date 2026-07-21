import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProductCard from "@/components/product/ProductCard";
import Button from "@/components/ui/Button";
import { newArrivals } from "@/lib/data";

export default function NewArrivals() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow="Just Landed"
          title="New Arrivals"
          subtitle="Fresh additions to the Arban Muse collection, in limited quantities."
        />
        <div className="mt-14 grid grid-cols-2 gap-5 sm:gap-7 md:grid-cols-3 lg:grid-cols-4">
          {newArrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <Button href="/new-arrivals" size="md">
            Explore New Arrivals
          </Button>
        </div>
      </Container>
    </section>
  );
}
