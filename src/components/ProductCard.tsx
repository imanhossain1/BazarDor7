
import type { Product } from "../types/Product"

type ProductCardProps = {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div>
      <h1>{product.nameBn}</h1>

      <p>{product.today} টাকা</p>

      <p>{product.unit}</p>
    </div>
  )
}

export default ProductCard
