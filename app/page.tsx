import Image from "next/image";
import Hero from "./Page/home/component/Hero"
import ShopbyCategory from "./Page/home/component/ShopbyCategory"
import FeaturedProduct from "./Page/home/component/FeaturedProduct"
import PopularProducts from "./Page/home/component/PopularProducts"
import PlantClinicAnalysis from "./Page/home/component/PlantClinicAnalysis";

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
