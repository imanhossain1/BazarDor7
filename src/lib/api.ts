// import type {Product} from "../types/Product";
// import type {Category} from "../types/Category";

import { Category } from "@/types/category";
import { Product } from "@/types/product";

// সব Product-এর API URL
const apiProductUrl = "https://openapi.programming-hero.com/api/bazardor/products";

// সব Category-এর API URL
const apiCategoryUrl = "https://openapi.programming-hero.com/api/bazardor/categories"

// সব Product আনার function
export const getProducts = async (): Promise<Product[]> => {
    const res = await fetch(apiProductUrl);
    return res.json();
};

// সব Category আনার function
export const getCategories = async (): Promise<Category[]> => {
    const res = await fetch(apiCategoryUrl);
    return res.json();
};

// নির্দিষ্ট Category-এর Product আনার function
export const getCategoryProducts = async (categorySlug: string): Promise<Product[]> => {
    const categoryProductUrl = `${apiProductUrl}?category=${categorySlug}`;

    const res = await fetch(categoryProductUrl);
    return res.json();
};
