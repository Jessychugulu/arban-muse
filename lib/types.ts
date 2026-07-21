export type ProductCategory =
  | "womens-perfume"
  | "mens-perfume"
  | "womens-fashion"
  | "mens-fashion";

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  category: ProductCategory;
  tone: "purple" | "gold" | "lavender" | "ink";
  isNew?: boolean;
  isBestSeller?: boolean;
  rating: number;
}

export interface Review {
  id: string;
  name: string;
  location: string;
  rating: number;
  quote: string;
}

export interface CategoryTile {
  id: string;
  title: string;
  description: string;
  href: string;
  tone: "purple" | "gold" | "lavender" | "ink";
}
