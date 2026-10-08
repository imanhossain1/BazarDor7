import Link from "next/link";
import type { Product } from "../types/Product";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  // English number → Bengali number
  const todayPrice = product.today.toLocaleString("bn-BD");
  const changePercent = product.change.pct.toLocaleString("bn-BD");

  return (
    <Link href={`/products/${product.slug}`}>
      <div className="card h-full overflow-hidden bg-base-100 shadow-md transition-all duration-200 hover:-translate-y-1 hover:shadow-xl">

        {/* Product Emoji */}
        <div className="flex h-36 items-center justify-center bg-base-200 text-6xl">
          {product.categoryIcon}
        </div>

        {/* Card Content */}
        <div className="card-body p-5">

          {/* Product Name */}
          <h2 className="card-title text-lg">
            {product.nameBn}
          </h2>

          {/* Unit */}
          <p className="text-sm text-base-content/60">
            প্রতি {product.unit}
          </p>

          <div className="divider my-1"></div>

          {/* Price Row */}
          <div className="flex items-end justify-between gap-3">

            {/* Today's Price */}
            <div>
              <p className="text-xs text-base-content/60">
                আজকের দাম
              </p>

              <p className="mt-1 text-xl font-bold text-primary">
                {todayPrice} টাকা
              </p>
            </div>

            {/* Price Change */}
            <div>
              {product.change.dir === "up" && (
                <span className="badge badge-success font-semibold">
                  ▲ {changePercent}%
                </span>
              )}

              {product.change.dir === "down" && (
                <span className="badge badge-error font-semibold">
                  ▼ {changePercent}%
                </span>
              )}

              {product.change.dir === "flat" && (
                <span className="badge font-semibold">
                  — {changePercent}%
                </span>
              )}
            </div>

          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;