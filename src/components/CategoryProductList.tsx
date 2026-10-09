
"use client";

import { useState } from "react";
// import type { Product } from "../types/Product";
import type { Product } from "../types/product";
import ProductCard from "./ProductCard";

type CategoryProductListProps = {
  products: Product[];
};

const CategoryProductList = ({
  products,
}: CategoryProductListProps) => {
  const [sortOption, setSortOption] = useState("default");

  // Dropdown পরিবর্তন হলে এই function চলবে
  const handleSort = (value: string) => {
    setSortOption(value);
  };

  // Product-গুলো দাম অনুযায়ী সাজানো
  const getSortedProducts = () => {
    const sortedProducts = [...products];

    if (sortOption === "low-to-high") {
      sortedProducts.sort((a, b) => a.today - b.today);
    }

    if (sortOption === "high-to-low") {
      sortedProducts.sort((a, b) => b.today - a.today);
    }

    return sortedProducts;
  };

  const sortedProducts = getSortedProducts();

  return (
    <section>
      {/* Product count and sorting */}
      <div className="mb-6 flex flex-col justify-between gap-4 rounded-2xl border border-base-300 bg-base-100 p-4 shadow-sm sm:flex-row sm:items-center">
        <div>
          <h2 className="text-xl font-bold">সব পণ্য</h2>

          <p className="mt-1 text-sm text-base-content/60">
            মোট {products.length}টি পণ্য পাওয়া গেছে
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:min-w-64">
          <label
            htmlFor="product-sort"
            className="text-sm font-medium"
          >
            সাজান:
          </label>

          <select
            id="product-sort"
            className="select select-bordered w-full"
            value={sortOption}
            onChange={(event) => handleSort(event.target.value)}
          >
            <option value="default">ডিফল্ট</option>

            <option value="low-to-high">
              দাম: কম থেকে বেশি
            </option>

            <option value="high-to-low">
              দাম: বেশি থেকে কম
            </option>
          </select>
        </div>
      </div>

      {/* Empty state */}
      {sortedProducts.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-base-300 bg-base-200/50 px-5 py-14 text-center">
          <div className="mb-4 text-5xl">🛒</div>

          <h3 className="text-xl font-bold">
            এই ক্যাটাগরিতে কোনো পণ্য নেই
          </h3>

          <p className="mt-2 text-sm text-base-content/60">
            অন্য ক্যাটাগরি দেখুন অথবা হোম পেজে ফিরে যান।
          </p>

          <a href="/" className="btn btn-primary mt-6">
            হোম পেজে ফিরে যান
          </a>
        </div>
      ) : (
        /* Product cards */
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {sortedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default CategoryProductList;
