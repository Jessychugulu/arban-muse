import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProductCard from "@/components/product/ProductCard";
import Button from "@/components/ui/Button";
import { bestSellers } from "@/lib/data";

export default function BestSellers() {
  return (
    <section className="bg-neutral py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow="Customer Favourites"
          title="Best Sellers"
          subtitle="The pieces our customers keep coming back for."
        />
        <div className="mt-14 grid grid-cols-2 gap-5 sm:gap-7 md:grid-cols-3 lg:grid-cols-4">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <div className="mt-14 flex justify-center">
          <Button href="/shop" variant="outline" size="md">
            View All Products
          </Button>
        </div>
      </Container>
    </section>
  );
}
