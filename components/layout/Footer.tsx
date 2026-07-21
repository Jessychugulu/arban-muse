import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";
import Container from "@/components/ui/Container";

const QUICK_LINKS = [
  { label: "Shop", href: "/shop" },
  { label: "Perfumes", href: "/perfumes" },
  { label: "Clothes", href: "/clothes" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const HELP_LINKS = [
  { label: "Shipping & Returns", href: "#" },
  { label: "FAQs", href: "#" },
  { label: "Track Order", href: "#" },
  { label: "Size Guide", href: "#" },
];

const SOCIALS = [
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "Twitter", href: "#", Icon: Twitter },
];

export default function Footer() {
  return (
    <footer className="bg-ink text-white/80">
      <Container className="grid grid-cols-1 gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link href="/" className="font-heading text-2xl text-white">
            Arban <span className="text-accent">Muse</span>
          </Link>
          <p className="mt-4 font-body text-sm leading-relaxed text-white/60">
            Luxury perfumes and fashion crafted for those who leave an
            impression before they speak.
          </p>
          <div className="mt-6 flex gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent hover:text-accent"
              >
                <Icon size={16} />
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-heading text-lg text-white">Quick Links</h3>
          <ul className="mt-5 space-y-3">
            {QUICK_LINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="font-body text-sm text-white/60 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg text-white">Support</h3>
          <ul className="mt-5 space-y-3">
            {HELP_LINKS.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="font-body text-sm text-white/60 transition-colors hover:text-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg text-white">Contact</h3>
          <ul className="mt-5 space-y-4 font-body text-sm text-white/60">
            <li className="flex items-start gap-3">
              <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
              <span>Area 25C, Sector 4, Lilongwe, Malawi</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="shrink-0 text-accent" />
              <span>+256 992201655</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={16} className="shrink-0 text-accent" />
              <span>hello@arbanmuse.com</span>
            </li>
          </ul>
        </div>
      </Container>

      <div className="border-t border-white/10 py-6">
        <Container className="flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="font-body text-xs text-white/50">
            &copy; {new Date().getFullYear()} Arban Muse. All rights reserved.
          </p>
          <p className="font-body text-xs text-white/50">
            Crafted with care for those who appreciate the finer things.
          </p>
        </Container>
      </div>
    </footer>
  );
}
