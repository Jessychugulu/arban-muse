import { CategoryTile, Product, Review } from "./types";

// Dummy product catalogue. Replace with real products/photography later —
// each `name` doubles as the seed for its placeholder image.
export const products: Product[] = [
  {
    id: "p1",
    name: "Velours Noir",
    description: "Amber, oud & black orchid — a bold evening signature.",
    price: 128500,
    originalPrice: 148000,
    category: "womens-perfume",
    tone: "purple",
    isBestSeller: true,
    rating: 4.9,
  },
  {
    id: "p2",
    name: "Or Éclat",
    description: "Golden vanilla, saffron and warm sandalwood.",
    price: 96750,
    category: "womens-perfume",
    tone: "gold",
    isNew: true,
    rating: 4.8,
  },
  {
    id: "p3",
    name: "Lavande Rêverie",
    description: "Soft lavender, iris and white musk for daylight wear.",
    price: 64200,
    category: "womens-perfume",
    tone: "lavender",
    rating: 4.7,
  },
  {
    id: "p4",
    name: "Monsieur Ombre",
    description: "Smoked cedar, vetiver and a whisper of leather.",
    price: 139500,
    category: "mens-perfume",
    tone: "ink",
    isBestSeller: true,
    rating: 4.9,
  },
  {
    id: "p5",
    name: "Bois Royal",
    description: "Bergamot, tobacco leaf and dark rum.",
    price: 88400,
    category: "mens-perfume",
    tone: "purple",
    isNew: true,
    rating: 4.6,
  },
  {
    id: "p6",
    name: "Citrine Homme",
    description: "Crisp citrus, sea salt and driftwood accord.",
    price: 71300,
    category: "mens-perfume",
    tone: "gold",
    rating: 4.5,
  },
  {
    id: "p7",
    name: "Draped Satin Gown",
    description: "Fluid satin silhouette with a hand-finished neckline.",
    price: 135800,
    originalPrice: 149500,
    category: "womens-fashion",
    tone: "lavender",
    isBestSeller: true,
    rating: 4.8,
  },
  {
    id: "p8",
    name: "Tailored Blazer Noir",
    description: "Structured wool-blend blazer, fully lined.",
    price: 112600,
    category: "womens-fashion",
    tone: "ink",
    isNew: true,
    rating: 4.7,
  },
  {
    id: "p9",
    name: "Ivory Silk Blouse",
    description: "Mulberry silk blouse with mother-of-pearl buttons.",
    price: 79900,
    category: "womens-fashion",
    tone: "gold",
    rating: 4.6,
  },
  {
    id: "p10",
    name: "Signature Wool Overcoat",
    description: "Double-breasted overcoat in brushed merino wool.",
    price: 148700,
    category: "mens-fashion",
    tone: "purple",
    isBestSeller: true,
    rating: 4.9,
  },
  {
    id: "p11",
    name: "Heritage Knit Sweater",
    description: "Cable-knit merino sweater with ribbed trim.",
    price: 92300,
    category: "mens-fashion",
    tone: "lavender",
    isNew: true,
    rating: 4.5,
  },
  {
    id: "p12",
    name: "Classic Oxford Shirt",
    description: "Crisp cotton oxford, tailored fit.",
    price: 56800,
    category: "mens-fashion",
    tone: "ink",
    rating: 4.4,
  },
];

export const bestSellers = products.filter((p) => p.isBestSeller);
export const newArrivals = products.filter((p) => p.isNew);

export const categoryTiles: CategoryTile[] = [
  {
    id: "c1",
    title: "Women's Perfumes",
    description: "Signature scents for every occasion",
    href: "/perfumes?for=women",
    tone: "purple",
  },
  {
    id: "c2",
    title: "Men's Perfumes",
    description: "Bold, refined fragrances",
    href: "/perfumes?for=men",
    tone: "ink",
  },
  {
    id: "c3",
    title: "Women's Fashion",
    description: "Elegant, tailored silhouettes",
    href: "/clothes?for=women",
    tone: "gold",
  },
  {
    id: "c4",
    title: "Men's Fashion",
    description: "Timeless, sharp essentials",
    href: "/clothes?for=men",
    tone: "lavender",
  },
];

export const reviews: Review[] = [
  {
    id: "r1",
    name: "Amélie R.",
    location: "Paris, FR",
    rating: 5,
    quote:
      "Velours Noir is unlike anything I've worn — it lasts all evening and the compliments never stop.",
  },
  {
    id: "r2",
    name: "Daniel K.",
    location: "London, UK",
    rating: 5,
    quote:
      "The overcoat feels genuinely couture. Impeccable stitching and it fits like it was tailored for me.",
  },
  {
    id: "r3",
    name: "Sofia M.",
    location: "Milan, IT",
    rating: 4,
    quote:
      "Beautiful packaging, beautiful scent. Or Éclat has become my everyday luxury.",
  },
  {
    id: "r4",
    name: "James T.",
    location: "New York, US",
    rating: 5,
    quote:
      "Fast delivery, gorgeous quality, and the customer support team was wonderful when I asked for sizing advice.",
  },
];

export const instagramSeeds = [
  "Atelier Detail",
  "Gold Accord",
  "Studio Muse",
  "Velvet Hour",
  "Noir Edit",
  "Silk Story",
];
