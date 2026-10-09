
// import ProductCard from "../components/ProductCard" 
import Hero from "../components/Hero";
import PriceUpSection from "../components/PriceUpSection";
import PriceDownSection from "../components/PriceDownSection";
import AllProductsSection from "../components/AllProductsSection";

const HomePage = async () => {

  return (
    <div>
      <h1>Home Bazar Dor</h1>
      <Hero/>
     <PriceUpSection/>
     <PriceDownSection/>
     <AllProductsSection/>
      
    </div>
  )
}

export default HomePage
