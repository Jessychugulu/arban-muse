import { Instagram } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { instagramSeeds } from "@/lib/data";

const TONES = ["purple", "gold", "lavender", "ink"] as const;

export default function InstagramGallery() {
  return (
    <section className="py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow="@arbanmuse"
          title="Follow Our Journey"
          subtitle="Step behind the scenes of the atelier and see how our community styles their favourites."
        />
        <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {instagramSeeds.map((seed, i) => (
            <a
              key={seed}
              href="#"
              aria-label={`View ${seed} on Instagram`}
              className="group relative block overflow-hidden rounded-xl"
            >
              <PlaceholderImage
                label={seed}
                alt={seed}
                tone={TONES[i % TONES.length]}
                ratio="square"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-ink/0 text-white opacity-0 transition-all duration-300 group-hover:bg-ink/50 group-hover:opacity-100">
                <Instagram size={22} />
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
