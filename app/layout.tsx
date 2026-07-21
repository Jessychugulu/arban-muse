import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Arban Muse | Luxury Perfumes & Fashion",
    template: "%s | Arban Muse",
  },
  description:
    "Discover elegant perfumes and fashionable clothing that leave unforgettable impressions. Shop signature fragrances and premium fashion at Arban Muse.",
  keywords: [
    "luxury perfume",
    "designer fragrance",
    "premium fashion",
    "womens perfume",
    "mens perfume",
    "luxury clothing",
  ],
  openGraph: {
    title: "Arban Muse | Luxury Perfumes & Fashion",
    description:
      "Discover elegant perfumes and fashionable clothing that leave unforgettable impressions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${poppins.variable}`}>
      <body className="flex min-h-screen flex-col bg-background font-body text-ink antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-primary focus:px-5 focus:py-3 focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
