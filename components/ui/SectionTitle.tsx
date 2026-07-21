"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  light?: boolean;
}

/** Consistent section heading: gold eyebrow label + Playfair headline + subtitle. */
export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className,
  light = false,
}: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left",
        className
      )}
    >
      {eyebrow && (
        <p
          className={cn(
            "mb-3 font-body text-xs font-semibold uppercase tracking-wider3",
            light ? "text-accent-light" : "text-accent-dark"
          )}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={cn(
          "font-heading text-3xl leading-tight sm:text-4xl md:text-5xl",
          light ? "text-white" : "text-ink"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 font-body text-sm leading-relaxed sm:text-base",
            light ? "text-white/80" : "text-ink/70"
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
