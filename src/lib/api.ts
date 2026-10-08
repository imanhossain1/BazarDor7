import type {Product} from "../types/Product";
import type {Category} from "../types/Category";

const PRODUCTS_API = "https://api.api-store.workers.dev/api/bazardor/products";
const CATEGORIES_API = "https://api.api-store.workers.dev/api/bazardor/categories";

export const getProducts = async (): Promise<Product[]> => {
    const response = await fetch(PRODUCTS_API);
    const data = await response.json();
    if (!data) {
        throw new Error("Products data পাওয়া যায় নাই");
    }
    return data;
};

export const getCategories = async (): Promise<Category[]> => {
    const response = await fetch(CATEGORIES_API);
    const data = await response.json();
    if (!data) {
        throw new Error("Categories data পাওয়া যায় নাই");
    }
    return data;
};
