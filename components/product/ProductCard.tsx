"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, Heart, ShoppingBag, X } from "lucide-react";
import PlaceholderImage from "@/components/ui/PlaceholderImage";
import StarRating from "@/components/ui/StarRating";
import Button from "@/components/ui/Button";
import { Product } from "@/lib/types";
import { cn, formatPrice } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export default function ProductCard({ product, className }: ProductCardProps) {
  const [wishlisted, setWishlisted] = useState(false);
  const [quickViewOpen, setQuickViewOpen] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-card transition-shadow duration-300 hover:shadow-gold",
          className
        )}
      >
        <div className="relative">
          {(product.isNew || product.isBestSeller) && (
            <span className="absolute left-3 top-3 z-10 rounded-full bg-primary px-3 py-1 font-body text-[10px] font-semibold uppercase tracking-wider text-white">
              {product.isNew ? "New" : "Best Seller"}
            </span>
          )}

          <button
            onClick={() => setWishlisted((v) => !v)}
            aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
            aria-pressed={wishlisted}
            className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-ink/70 shadow-soft transition-colors hover:text-primary"
          >
            <Heart
              size={17}
              className={wishlisted ? "fill-primary text-primary" : ""}
            />
          </button>

          <PlaceholderImage
            label={product.name}
            alt={`${product.name} — ${product.description}`}
            tone={product.tone}
            ratio="portrait"
          />

          <div className="absolute inset-x-3 bottom-3 flex translate-y-4 justify-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            <button
              onClick={() => setQuickViewOpen(true)}
              className="flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 font-body text-xs font-medium text-ink shadow-soft transition-colors hover:bg-primary hover:text-white"
            >
              <Eye size={14} /> Quick View
            </button>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-5">
          <StarRating rating={product.rating} />
          <h3 className="mt-2 font-heading text-lg text-ink">{product.name}</h3>
          <p className="mt-1 flex-1 font-body text-xs leading-relaxed text-ink/60">
            {product.description}
          </p>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="font-heading text-lg text-primary">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="font-body text-xs text-ink/40 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
            </div>
          </div>

          <Button
            size="sm"
            className="mt-4 w-full"
            icon={<ShoppingBag size={15} />}
            aria-label={`Add ${product.name} to cart`}
          >
            Add to Cart
          </Button>
        </div>
      </motion.article>

      <AnimatePresence>
        {quickViewOpen && (
          <QuickViewModal product={product} onClose={() => setQuickViewOpen(false)} />
        )}
      </AnimatePresence>
    </>
  );
}

function QuickViewModal({
  product,
  onClose,
}: {
  product: Product;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/50 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label={`${product.name} quick view`}
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.92, y: 20 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
        className="grid w-full max-w-2xl grid-cols-1 overflow-hidden rounded-2xl bg-white shadow-card sm:grid-cols-2"
      >
        <PlaceholderImage
          label={product.name}
          alt={`${product.name} — ${product.description}`}
          tone={product.tone}
          ratio="square"
          className="h-full"
        />
        <div className="relative flex flex-col p-6 sm:p-8">
          <button
            onClick={onClose}
            aria-label="Close quick view"
            className="absolute right-4 top-4 rounded-full p-1.5 text-ink/50 hover:bg-secondary hover:text-primary"
          >
            <X size={18} />
          </button>
          <StarRating rating={product.rating} />
          <h3 className="mt-3 font-heading text-2xl text-ink">{product.name}</h3>
          <p className="mt-2 font-body text-sm leading-relaxed text-ink/60">
            {product.description}
          </p>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="font-heading text-2xl text-primary">
              {formatPrice(product.price)}
            </span>
            {product.originalPrice && (
              <span className="font-body text-sm text-ink/40 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>
          <Button size="md" className="mt-6 w-full" icon={<ShoppingBag size={16} />}>
            Add to Cart
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
}
