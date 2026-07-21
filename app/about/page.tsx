import type { Metadata } from "next";
import { Gem, Heart, Leaf, Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import SectionTitle from "@/components/ui/SectionTitle";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story, craftsmanship and values behind Arban Muse — luxury perfumes and fashion.",
};

const VALUES = [
  {
    icon: Gem,
    title: "Uncompromising Craft",
    description: "Every fragrance is aged and every garment finished by hand.",
  },
  {
    icon: Leaf,
    title: "Responsibly Sourced",
    description: "Ingredients and fabrics chosen for quality and provenance.",
  },
  {
    icon: Heart,
    title: "Made to Be Felt",
    description: "Design that centres how a piece makes you feel, not just look.",
  },
  {
    icon: Sparkles,
    title: "Timeless Over Trend",
    description: "Collections built to be worn for years, not just a season.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title="About Arban Muse"
        subtitle="Founded on the belief that true luxury is quiet, personal, and unforgettable."
      />

      <section className="py-20 sm:py-28">
        <Container className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">
          <PlaceholderImage
            label="The Atelier"
            alt="Arban Muse atelier where perfumes and garments are crafted"
            tone="lavender"
            ratio="landscape"
            className="rounded-2xl shadow-card"
          />
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-wider3 text-accent-dark">
              Since Day One
            </p>
            <h2 className="mt-3 font-heading text-3xl text-ink sm:text-4xl">
              Where Fragrance Meets Fashion
            </h2>
            <p className="mt-5 font-body text-sm leading-relaxed text-ink/70">
              Arban Muse began with a simple idea: the way you smell and
              the way you dress should tell the same story. What started as a
              small atelier blending rare oils has grown into a full house of
              fragrance and fashion — each collection designed to move
              together, season after season.
            </p>
            <p className="mt-4 font-body text-sm leading-relaxed text-ink/70">
              Today, every bottle and every garment we release carries that
              same intention: understated elegance, exceptional quality, and
              a presence that lingers long after you&apos;ve left the room.
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-secondary/40 py-20 sm:py-28">
        <Container>
          <SectionTitle
            eyebrow="What We Stand For"
            title="Our Values"
            subtitle="The principles that guide every product we release."
          />
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-2xl bg-white p-7 text-center shadow-card"
              >
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon size={26} strokeWidth={1.6} />
                </span>
                <h3 className="mt-5 font-heading text-lg text-ink">{title}</h3>
                <p className="mt-2 font-body text-xs leading-relaxed text-ink/60">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
