import Container from "@/components/ui/Container";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

/** Shared banner used at the top of inner pages (Shop, About, Contact, etc). */
export default function PageHeader({ eyebrow, title, subtitle }: PageHeaderProps) {
  return (
    <section className="border-b border-secondary bg-hero-gradient py-16 sm:py-20">
      <Container className="text-center">
        <p className="font-body text-xs font-semibold uppercase tracking-wider3 text-accent-dark">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-heading text-4xl text-ink sm:text-5xl">{title}</h1>
        <p className="mx-auto mt-4 max-w-xl font-body text-sm leading-relaxed text-ink/70 sm:text-base">
          {subtitle}
        </p>
      </Container>
    </section>
  );
}
