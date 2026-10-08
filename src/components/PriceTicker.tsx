
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";
import { getProducts } from "../lib/api";

async function PriceTicker() {
  const productsData = await getProducts();

  return (
    <MarqueeText>
      {productsData.map((product) => (
        <span key={product.id} className="mx-5">
          {product.categoryIcon} {product.nameBn}
          {product.today} টাকা/{product.unit}

          {product.change.dir === "up" && "▲"}
          {product.change.dir === "down" && "▼"}
          {product.change.dir === "flat" && "━"}

          {product.change.pct}%
        </span>
      ))}
    </MarqueeText>
  );
}

export default PriceTicker;