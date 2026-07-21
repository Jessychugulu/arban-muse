"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/product/ProductCard";
import { Product, ProductCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

interface FilterTab {
  label: string;
  value: ProductCategory | "all";
}

interface ProductGridProps {
  products: Product[];
  tabs?: FilterTab[];
}

export default function ProductGrid({ products, tabs }: ProductGridProps) {
  const [active, setActive] = useState<FilterTab["value"]>("all");

  const filtered = useMemo(
    () => (active === "all" ? products : products.filter((p) => p.category === active)),
    [active, products]
  );

  return (
    <div>
      {tabs && tabs.length > 1 && (
        <div className="flex flex-wrap justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActive(tab.value)}
              className={cn(
                "rounded-full border px-5 py-2.5 font-body text-xs font-medium uppercase tracking-wider transition-all duration-300",
                active === tab.value
                  ? "border-primary bg-primary text-white shadow-soft"
                  : "border-secondary bg-white text-ink/60 hover:border-primary hover:text-primary"
              )}
              aria-pressed={active === tab.value}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {filtered.length > 0 ? (
        <motion.div
          layout
          className="mt-12 grid grid-cols-2 gap-5 sm:gap-7 md:grid-cols-3 lg:grid-cols-4"
        >
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </motion.div>
      ) : (
        <p className="mt-16 text-center font-body text-sm text-ink/50">
          No products found in this category yet.
        </p>
      )}
    </div>
  );
}
