"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Heart, Menu, Search, ShoppingBag, X } from "lucide-react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Perfumes", href: "/perfumes" },
  { label: "Clothes", href: "/clothes" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled
          ? "bg-background/90 shadow-soft backdrop-blur-md"
          : "bg-background/60 backdrop-blur-sm"
      )}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-heading text-2xl tracking-wide text-ink"
          aria-label="Arban Muse home"
        >
          Arban <span className="text-primary">Muse</span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative font-body text-sm font-medium text-ink/80 transition-colors hover:text-primary"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-1 sm:gap-2">
          <button
            aria-label="Toggle search"
            onClick={() => setSearchOpen((v) => !v)}
            className="rounded-full p-2 text-ink/80 transition-colors hover:bg-secondary hover:text-primary"
          >
            <Search size={20} />
          </button>
          <Link
            href="#"
            aria-label="Wishlist"
            className="hidden rounded-full p-2 text-ink/80 transition-colors hover:bg-secondary hover:text-primary sm:inline-flex"
          >
            <Heart size={20} />
          </Link>
          <Link
            href="#"
            aria-label="Shopping bag, 0 items"
            className="relative rounded-full p-2 text-ink/80 transition-colors hover:bg-secondary hover:text-primary"
          >
            <ShoppingBag size={20} />
            <span className="absolute right-0.5 top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-semibold text-white">
              0
            </span>
          </Link>
          <button
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(true)}
            className="ml-1 rounded-full p-2 text-ink/80 transition-colors hover:bg-secondary hover:text-primary lg:hidden"
          >
            <Menu size={22} />
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {searchOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-secondary bg-background"
          >
            <Container className="py-4">
              <form
                role="search"
                onSubmit={(e) => e.preventDefault()}
                className="flex items-center gap-3 rounded-full border border-secondary bg-neutral px-5 py-3"
              >
                <Search size={18} className="text-ink/50" />
                <input
                  type="search"
                  placeholder="Search perfumes, clothing…"
                  aria-label="Search products"
                  autoFocus
                  className="w-full bg-transparent font-body text-sm text-ink placeholder:text-ink/40 focus:outline-none"
                />
              </form>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {menuOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setMenuOpen(false)}
                  className="fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm lg:hidden"
                  aria-hidden
                />
                <motion.aside
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ duration: 0.35, ease: "easeInOut" }}
                  className="fixed right-0 top-0 z-50 flex h-full w-[82%] max-w-sm flex-col bg-background p-8 shadow-2xl lg:hidden"
                  role="dialog"
                  aria-modal="true"
                  aria-label="Mobile navigation"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-heading text-xl text-ink">Menu</span>
                    <button
                      aria-label="Close menu"
                      onClick={() => setMenuOpen(false)}
                      className="rounded-full p-2 text-ink/80 hover:bg-secondary hover:text-primary"
                    >
                      <X size={22} />
                    </button>
                  </div>
                  <nav className="mt-10 flex flex-col gap-2" aria-label="Mobile">
                    {NAV_LINKS.map((link, i) => (
                      <motion.div
                        key={link.href}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * i, duration: 0.35 }}
                      >
                        <Link
                          href={link.href}
                          onClick={() => setMenuOpen(false)}
                          className="block border-b border-secondary py-4 font-heading text-lg text-ink transition-colors hover:text-primary"
                        >
                          {link.label}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                  <div className="mt-auto flex items-center gap-6 pt-8">
                    <Link href="#" className="flex items-center gap-2 text-ink/70 hover:text-primary">
                      <Heart size={18} /> Wishlist
                    </Link>
                    <Link href="#" className="flex items-center gap-2 text-ink/70 hover:text-primary">
                      <ShoppingBag size={18} /> Bag
                    </Link>
                  </div>
                </motion.aside>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}
    </header>
  );
}
