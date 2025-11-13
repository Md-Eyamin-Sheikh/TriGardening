'use client';

import { useState } from 'react';
import { Star, ShoppingCart, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

const ProductCard = ({ product, onToggleFavorite, isFavorite }) => {
  const renderStars = (rating, reviews) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? 'fill-orange-400 text-orange-400'
                : 'fill-gray-300 text-gray-300'
            }`}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">({reviews})</span>
      </div>
    );
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      <div className="relative overflow-hidden aspect-square bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <button
          onClick={() => onToggleFavorite(product.id)}
          className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 z-10"
        >
          <Heart
            className={`w-5 h-5 transition-colors duration-300 ${
              isFavorite
                ? 'fill-red-500 text-red-500'
                : 'text-gray-400'
            }`}
          />
        </button>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>
      <div className="p-5">
        <p className="text-xs text-green-600 font-semibold uppercase tracking-wide mb-2">
          {product.category}
        </p>
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-700 transition-colors duration-300">
          {product.name}
        </h3>
        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-sm text-orange-600 font-bold">৳</span>
          <span className="text-xl font-bold text-orange-600">
            {product.price.min}
          </span>
          <span className="text-gray-400">-</span>
          <span className="text-xl font-bold text-orange-600">
            {product.price.max}
          </span>
        </div>
        <div className="mb-4">
          {renderStars(product.rating, product.reviews)}
        </div>
        <button className="w-full text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group/btn" style={{backgroundColor: '#2D5016'}}>
          <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default function ProductCarousel({ title, subtitle, products }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [favorites, setFavorites] = useState([]);

  const itemsPerPage = 4;
  const maxIndex = Math.max(0, products.length - itemsPerPage);

  const nextSlide = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <section className="py-16 lg:py-24" style={{background: `linear-gradient(to bottom, #F5F5DC, #F5F5DC)`}}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{color: '#2D5016'}}>
            {title}
          </h2>
          {subtitle && <p className=' text-gray-600'>{subtitle}</p>}
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          <button
            onClick={prevSlide}
            disabled={currentIndex === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-10 bg-white text-green-700 p-3 rounded-full shadow-xl hover:bg-green-700 hover:text-white transition-all duration-300 hover:scale-110 ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextSlide}
            disabled={currentIndex >= maxIndex}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-10 bg-white text-green-700 p-3 rounded-full shadow-xl hover:bg-green-700 hover:text-white transition-all duration-300 hover:scale-110 ${
              currentIndex >= maxIndex ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{
                transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)`
              }}
            >
              {products.map((product) => (
                <div
                  key={product.id}
                  className="w-full sm:w-1/2 lg:w-1/4 flex-shrink-0 px-3"
                >
                  <ProductCard
                    product={product}
                    isFavorite={favorites.includes(product.id)}
                    onToggleFavorite={toggleFavorite}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
