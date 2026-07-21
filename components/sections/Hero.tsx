"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import PlaceholderImage from "@/components/ui/PlaceholderImage";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-gradient pb-20 pt-14 sm:pb-28 sm:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-secondary/60 blur-3xl animate-float"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-accent/10 blur-3xl animate-float"
        style={{ animationDelay: "1.5s" }}
      />

      <Container className="relative grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-10">
        <div className="text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-white/60 px-4 py-2 font-body text-xs font-medium uppercase tracking-wider2 text-accent-dark"
          >
            <Sparkles size={14} /> New Season Collection
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-6 font-heading text-4xl leading-[1.1] text-ink sm:text-5xl md:text-6xl"
          >
            Luxury That Speaks
            <br className="hidden sm:block" /> Before You Do.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mx-auto mt-6 max-w-lg font-body text-base leading-relaxed text-ink/70 lg:mx-0"
          >
            Discover elegant perfumes and fashionable clothing that leave
            unforgettable impressions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
          >
            <Button href="/perfumes" size="lg">
              Shop Perfumes
            </Button>
            <Button href="/clothes" size="lg" variant="outline">
              Shop Clothes
            </Button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="relative rounded-3xl border border-white/60 bg-white/40 p-4 shadow-card backdrop-blur-sm">
            <PlaceholderImage
              label="Signature Collection"
              alt="Signature perfume and fashion collection showcase"
              tone="purple"
              ratio="portrait"
              className="rounded-2xl"
            />
          </div>
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 -top-6 rounded-2xl bg-white p-4 shadow-gold sm:-left-10 sm:-top-8"
          >
            <p className="font-heading text-lg text-primary">4.9★</p>
            <p className="font-body text-[10px] uppercase tracking-wider text-ink/50">
              12k+ Reviews
            </p>
          </motion.div>
          <motion.div
            animate={{ y: [0, 14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-6 -right-4 rounded-2xl bg-primary px-5 py-4 text-white shadow-gold sm:-right-8"
          >
            <p className="font-heading text-lg">100%</p>
            <p className="font-body text-[10px] uppercase tracking-wider text-white/70">
              Authentic
            </p>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
