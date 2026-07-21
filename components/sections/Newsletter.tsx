"use client";

import { FormEvent, useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle2, Mail } from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden bg-primary py-20 sm:py-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(212,175,55,0.18),transparent_45%)]"
      />
      <Container className="relative flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-accent">
            <Mail size={24} />
          </span>
          <h2 className="mt-6 font-heading text-3xl text-white sm:text-4xl">
            Join the Inner Circle
          </h2>
          <p className="mx-auto mt-4 max-w-md font-body text-sm text-white/70 sm:text-base">
            Subscribe for early access to new arrivals, exclusive offers and
            fragrance rituals from Arban Muse.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-9 flex w-full max-w-lg flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full flex-1 rounded-full border border-white/20 bg-white/10 px-6 py-4 font-body text-sm text-white placeholder:text-white/50 focus:border-accent focus:outline-none"
          />
          <Button
            type="submit"
            size="lg"
            className="!bg-accent !text-ink hover:!bg-accent-light shrink-0"
          >
            {submitted ? <CheckCircle2 size={18} /> : "Subscribe"}
          </Button>
        </motion.form>
        {submitted && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 font-body text-xs text-accent-light"
            role="status"
          >
            Thank you — you&apos;re on the list.
          </motion.p>
        )}
      </Container>
    </section>
  );
}
