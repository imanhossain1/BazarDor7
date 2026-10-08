
// import getProducts from "../lib/api" 
// import ProductCard from "../components/ProductCard" 
import Hero from "../components/Hero";
import PriceUpSection from "../components/PriceUpSection";

const HomePage = async () => {
  // const productData = await getProducts()

  return (
    <div>
      <h1>Home Bazar Dor</h1>
      <Hero/>
     <PriceUpSection/>
      {/* <p>Total Products: {productData.length}</p> */}

      {/* <div>
        {productData.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
          />
        ))}
      </div> */}
    </div>
  )
}

export default HomePage
