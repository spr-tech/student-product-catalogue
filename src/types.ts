export type Category = "tech" | "study" | "dorm" | "wellness";

export type SortKey = "featured" | "price-asc" | "price-desc" | "rating";

export type Product = {
  id: number;
  name: string;
  price: number;
  rating: number;
  reviewCount: number;
  category: Category;
  tags: string[];
  featured: number;
  wordmark: string;
  description: string;
};
