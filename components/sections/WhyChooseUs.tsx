"use client";

import { motion } from "framer-motion";
import { Gem, HeadphonesIcon, ShieldCheck, Truck, Wallet } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";

const FEATURES = [
  {
    icon: Gem,
    title: "Luxury Quality",
    description: "Every piece is crafted from premium materials and finished by hand.",
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Swift, tracked shipping so your order arrives exactly when expected.",
  },
  {
    icon: ShieldCheck,
    title: "Authentic Products",
    description: "100% genuine perfumes and apparel, guaranteed every time.",
  },
  {
    icon: Wallet,
    title: "Affordable Prices",
    description: "Accessible luxury without compromising on craftsmanship.",
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support",
    description: "A dedicated concierge team ready to help, day or night.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-secondary/40 py-20 sm:py-28">
      <Container>
        <SectionTitle
          eyebrow="Our Promise"
          title="Why Choose Arban Muse"
          subtitle="Details you can trust, from the first spritz to the final stitch."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {FEATURES.map(({ icon: Icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center rounded-2xl bg-white p-7 text-center shadow-card"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon size={26} strokeWidth={1.6} />
              </span>
              <h3 className="mt-5 font-heading text-lg text-ink">{title}</h3>
              <p className="mt-2 font-body text-xs leading-relaxed text-ink/60">
                {description}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
