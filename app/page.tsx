import Hero from "./component/home/Hero"
import ShopbyCategory from "./component/home/ShopbyCategory"
import ProductCarousel from "./component/home/ProductCarousel"
import PlantClinicAnalysis from "./component/home/PlantClinicAnalysis";

const products = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    category: 'Indoor Plant',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500&h=500&fit=crop',
    price: { min: 2000, max: 3400 },
    rating: 5,
    reviews: 24
  },
  {
    id: 2,
    name: 'Organic Compost Fertilizer',
    category: 'Fertilizer',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
    price: { min: 60, max: 440 },
    rating: 4,
    reviews: 12
  },
  {
    id: 3,
    name: 'Pruning Shears',
    category: 'Equipment',
    image: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?w=500&h=500&fit=crop',
    price: { min: 180, max: 450 },
    rating: 4,
    reviews: 34
  },
  {
    id: 4,
    name: 'Snake Plant',
    category: 'Indoor Plant',
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb6?w=500&h=500&fit=crop',
    price: { min: 150, max: 500 },
    rating: 4,
    reviews: 35
  },
  {
    id: 5,
    name: 'Peace Lily',
    category: 'Indoor Plant',
    image: 'https://images.unsplash.com/photo-1591958911259-bee2173bdccc?w=500&h=500&fit=crop',
    price: { min: 300, max: 600 },
    rating: 5,
    reviews: 28
  },
  {
    id: 6,
    name: 'Garden Tool Set',
    category: 'Equipment',
    image: 'https://images.unsplash.com/photo-1416339684178-3a239570f315?w=500&h=500&fit=crop',
    price: { min: 500, max: 1200 },
    rating: 4,
    reviews: 19
  }
];

export default function Home() {
  return (<div>
    <Hero ></Hero>
    <ShopbyCategory > </ShopbyCategory>
    <ProductCarousel title="Featured Products" products={products} />
    <ProductCarousel title="Popular Products" subtitle="Discover our most popular gardening essentials" products={products} />
    <PlantClinicAnalysis/>
  </div>
  );
}
