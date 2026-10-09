import type {Product} from "../types/Product";
import type {Category} from "../types/Category";

// সব Product-এর API URL
// const apiProductUrl = "https://api.abcz.workers.dev/api/bazardor/products";
const apiProductUrl = "https://api.api-store.workers.dev/api/bazardor/products";

// সব Category-এর API URL
// const apiCategoryUrl = "https://api.abcz.workers.dev/api/bazardor/categories";
const apiCategoryUrl = "https://api.api-store.workers.dev/api/bazardor/categories"

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
