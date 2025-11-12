import Hero from "./component/home/Hero"
import ShopbyCategory from "./component/home/ShopbyCategory"
import FeaturedProduct from "./component/home/FeaturedProduct"
import PopularProducts from "./component/home/PopularProducts"
import PlantClinicAnalysis from "./component/home/PlantClinicAnalysis";

export default function Home() {
  return (<div>
    <Hero ></Hero>
    <ShopbyCategory > </ShopbyCategory>
    <FeaturedProduct/>

    <PopularProducts/>

    <PlantClinicAnalysis/>


  </div>
    
  );
}
