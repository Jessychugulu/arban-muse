"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import StarRating from "@/components/ui/StarRating";
import { Review } from "@/lib/types";

interface ReviewCardProps {
  review: Review;
}

export default function ReviewCard({ review }: ReviewCardProps) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{ y: -6 }}
      className="flex h-full flex-col rounded-2xl bg-white p-7 shadow-card"
    >
      <Quote className="text-accent" size={28} aria-hidden />
      <StarRating rating={review.rating} className="mt-4" />
      <blockquote className="mt-3 flex-1 font-body text-sm leading-relaxed text-ink/70">
        &ldquo;{review.quote}&rdquo;
      </blockquote>
      <figcaption className="mt-5 border-t border-secondary pt-4">
        <p className="font-heading text-base text-ink">{review.name}</p>
        <p className="font-body text-xs text-ink/50">{review.location}</p>
      </figcaption>
    </motion.figure>
  );
}
