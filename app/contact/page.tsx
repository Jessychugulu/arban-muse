import type { Metadata } from "next";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import PageHeader from "@/components/ui/PageHeader";
import ContactForm from "@/components/sections/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Arban Muse concierge team for orders, sizing, and press enquiries.",
};

const DETAILS = [
  {
    icon: MapPin,
    title: "Visit Us",
    lines: ["Area 25C, Sector 4", "Lilongwe, Malawi"],
  },
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+256 992201655", "Mon–Fri, 9am–6pm CAT"],
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["hello@arbanmuse.com", "press@arbanmuse.com"],
  },
  {
    icon: Clock,
    title: "Concierge Hours",
    lines: ["Monday – Saturday", "9:00 AM – 8:00 PM"],
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="We'd Love to Hear From You"
        title="Contact Us"
        subtitle="Questions about an order, sizing, or a wholesale enquiry? Our concierge team is here to help."
      />

      <section className="py-16 sm:py-20">
        <Container className="grid grid-cols-1 gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {DETAILS.map(({ icon: Icon, title, lines }) => (
                <div key={title} className="rounded-2xl bg-white p-6 shadow-card">
                  <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon size={20} strokeWidth={1.6} />
                  </span>
                  <h3 className="mt-4 font-heading text-base text-ink">{title}</h3>
                  {lines.map((line) => (
                    <p key={line} className="mt-1 font-body text-xs text-ink/60">
                      {line}
                    </p>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <ContactForm />
        </Container>
      </section>
    </>
  );
}
