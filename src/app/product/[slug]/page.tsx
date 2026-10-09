import Link from "next/link";
import type {Product} from "../../../types/product";
import {getProducts} from "../../../lib/api";

const ProductDetailsPage = async ({params}: {params: Promise<{slug: string}>}) => {
    const {slug} = await params;

    const productsData = await getProducts();

    const product = productsData.find((item) => item.slug === slug);
    console.log('product== slug', product);
    

    if (!product) {
        return <div className="p-10 text-center">পণ্য পাওয়া যায়নি!</div>;
    }

    // সব বাজারের সর্বনিম্ন, সর্বোচ্চ ও গড় দাম
    const minPrice = Math.min(...product.markets.map((market) => market.min));
    console.log(minPrice,'minPrice');
    
    
    const maxPrice = Math.max(...product.markets.map((market) => market.max));
    console.log(maxPrice,'maxPrice');

    const avgPrice = Math.round(
        product.markets.reduce((total, market) => total + (market.min + market.max) / 2, 0) / product.markets.length
    );
 
    console.log(avgPrice,'avgPriceavgPriceavgPrice');
    

    return (
        <main className="min-h-screen bg-base-200 p-4 md:p-8">
            <div className="mx-auto max-w-5xl space-y-6">
                {/* Product information */}
                <section className="rounded-xl bg-base-100 p-6 shadow">
                    <p className="text-5xl">{product.categoryIcon}</p>

                    <h1 className="mt-3 text-3xl font-bold">{product.nameBn}</h1>

                    <p className="mt-2 text-base-content/70">বিভিন্ন বাজারে {product.nameBn}-এর আজকের দাম দেখুন।</p>

                    <div className="mt-3 flex gap-2">
                        <span className="badge badge-primary">{product.categoryNameBn}</span>
                        <span className="badge badge-outline">{product.unit}</span>
                    </div>

                    <p
                        className={`mt-3 font-semibold ${
                            product.change.dir === "up"
                                ? "text-error"
                                : product.change.dir === "down"
                                ? "text-success"
                                : ""
                        }`}
                    >
                        {product.change.dir === "up"
                            ? "▲ দাম বেড়েছে"
                            : product.change.dir === "down"
                            ? "▼ দাম কমেছে"
                            : "দাম অপরিবর্তিত"}
                        ({product.change.pct}%)
                    </p>
                </section>

                {/* Price summary */}
                <section>
                    <h2 className="mb-3 text-2xl font-bold">আজকের দামের সারাংশ</h2>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                        <div className="rounded-xl bg-base-100 p-5 shadow">
                            <p>সর্বনিম্ন দাম</p>
                            <h3 className="mt-2 text-2xl font-bold text-success">৳{minPrice}</h3>
                        </div>

                        <div className="rounded-xl bg-base-100 p-5 shadow">
                            <p>গড় দাম</p>
                            <h3 className="mt-2 text-2xl font-bold text-primary">৳{avgPrice}</h3>
                        </div>

                        <div className="rounded-xl bg-base-100 p-5 shadow">
                            <p>সর্বোচ্চ দাম</p>
                            <h3 className="mt-2 text-2xl font-bold text-error">৳{maxPrice}</h3>
                        </div>
                    </div>
                </section>

                {/* Price history */}
                <section className="rounded-xl bg-base-100 p-5 shadow">
                    <h2 className="mb-4 text-xl font-bold">দামের ইতিহাস</h2>

                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                        <p>গতকাল: ৳{product.yesterday}</p>
                        <p>গত সপ্তাহ: ৳{product.lastWeek}</p>
                        <p>গত মাস: ৳{product.lastMonth}</p>
                    </div>
                </section>

                {/* Market prices */}
                <section>
                    <h2 className="mb-4 text-2xl font-bold">🏪 বাজারভিত্তিক আজকের দাম</h2>

                    <div className="grid gap-4 sm:grid-cols-2">
                        {product.markets.map((market) => (
                            <div key={market.market} className="rounded-xl bg-base-100 p-5 shadow">
                                <h3 className="text-lg font-bold">🏪 {market.market}</h3>

                                <p className="mt-1 text-sm text-base-content/60">📍 {market.division}</p>

                                <div className="mt-4 flex justify-between gap-3">
                                    <div>
                                        <p className="text-sm">সর্বনিম্ন</p>
                                        <p className="font-bold text-success">৳{market.min}</p>
                                    </div>

                                    <div>
                                        <p className="text-sm">সর্বোচ্চ</p>
                                        <p className="font-bold text-error">৳{market.max}</p>
                                    </div>
                                </div>

                                {market.min === minPrice && (
                                    <span className="badge badge-success mt-4">সবচেয়ে কম দাম</span>
                                )}
                            </div>
                        ))}
                    </div>
                </section>

                <Link href="/" className="btn btn-primary">
                    ← সব পণ্য দেখুন
                </Link>
            </div>
        </main>
    );
};

export default ProductDetailsPage;
