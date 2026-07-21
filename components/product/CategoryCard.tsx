"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import { CategoryTile } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CategoryCardProps {
  category: CategoryTile;
  className?: string;
}

export default function CategoryCard({ category, className }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn("group", className)}
    >
      <Link
        href={category.href}
        className="relative block overflow-hidden rounded-2xl shadow-card"
      >
        <PlaceholderImage
          label={category.title}
          alt={category.title}
          tone={category.tone}
          ratio="landscape"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent transition-opacity duration-300 group-hover:from-primary/80" />
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-6">
          <div>
            <h3 className="font-heading text-xl text-white sm:text-2xl">
              {category.title}
            </h3>
            <p className="mt-1 font-body text-xs text-white/80 sm:text-sm">
              {category.description}
            </p>
          </div>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/90 text-ink transition-all duration-300 group-hover:bg-accent group-hover:text-white">
            <ArrowUpRight size={18} className="transition-transform duration-300 group-hover:rotate-45" />
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
