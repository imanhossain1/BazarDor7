import {getProducts} from "../lib/api";
import ProductCard from "./ProductCard";

async function PriceUpSection() {
    // সব product
    const products = await getProducts();
    console.log(products,'p up page');
    

    // শুধু দাম বেড়েছে এমন product
    const upProducts = products.filter((product) => product.change.dir === "up");

    // দাম সবচেয়ে বেশি বেড়েছে এমন Top 6
    const top6UpProducts = [...upProducts].sort((a, b) => b.change.pct - a.change.pct).slice(0, 8);

    return (
        <section className="ccontainer mx-auto px-4 py-10">
            <h2  className="mb-6 text-2xl font-bold md:text-3xl">আজ দাম বেড়েছে ▲</h2>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {top6UpProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </section>
    );
}

export default PriceUpSection;
