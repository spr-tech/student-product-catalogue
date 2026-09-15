import { products } from "../data/product";
import type { Product } from "../types";

export function getProducts(): Promise<Product[]> {
  return new Promise((resolve) => setTimeout(() => resolve(products), 400));
}
