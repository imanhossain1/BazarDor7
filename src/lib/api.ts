
import type { Product } from "../types/Product";
import type { Category } from "../types/Category";

const API = "https://api.abcz.workers.dev/api/bazardor";

export const getProducts = async (): Promise<Product[]> => {
  const res = await fetch(`${API}/products`);
  return res.json();
};

export const getCategories = async (): Promise<Category[]> => {
  const res = await fetch(`${API}/categories`);
  return res.json();
};