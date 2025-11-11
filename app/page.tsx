import Image from "next/image";
import Hero from "./home/component/Hero"
import ShopbyCategory from "./home/component/ShopbyCategory"
import FeaturedProduct from "./home/component/FeaturedProduct"
import PopularProducts from "./home/component/PopularProducts"

export default function Home() {
  return (<div>
    <Hero ></Hero>
    <ShopbyCategory > </ShopbyCategory>
    <FeaturedProduct/>

    <PopularProducts/>


  </div>
    
  );
}
