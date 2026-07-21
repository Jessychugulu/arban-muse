import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ReviewCard from "@/components/product/ReviewCard";
import { reviews } from "@/lib/data";

export default function Reviews() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow="Loved Worldwide"
          title="Customer Reviews"
          subtitle="Real words from the Arban Muse community."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </Container>
    </section>
  );
}
