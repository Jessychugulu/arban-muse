import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import CategoryCard from "@/components/product/CategoryCard";
import { categoryTiles } from "@/lib/data";

export default function FeaturedCategories() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow="Shop by Category"
          title="Find Your Signature"
          subtitle="Curated edits across fragrance and fashion, designed to be worn together or apart."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {categoryTiles.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </Container>
    </section>
  );
}
