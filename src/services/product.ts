import { products } from "../data/product";
import type { Product } from "../types";

export function getProducts(): Promise<Product[]> {
  return new Promise((resolve) => setTimeout(() => resolve(products), 400));
}

export function getProductById(id: number): Promise<Product | undefined> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const found = products.find((p) => p.id === id);
      resolve(found);
    }, 400);
  });
}
