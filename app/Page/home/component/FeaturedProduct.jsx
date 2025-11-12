'use client';

import { useState } from 'react';
import { Star, ShoppingCart, ChevronLeft, ChevronRight, Heart } from 'lucide-react';

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

export default function FeaturedProducts() {
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
    <section className="py-16 lg:py-24" style={{background: `linear-gradient(to bottom, #F5F5DC, #F5F5DC)`}}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4" style={{color: '#2D5016'}}>
            Featured Product
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
        </div>

        {/* Products Carousel */}
        <div className="relative">
          {/* Navigation Arrows */}
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

          {/* Products Grid */}
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
                  <div className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Image Container */}
                    <div className="relative overflow-hidden aspect-square bg-gray-100">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      {/* Favorite Button */}
                      <button
                        onClick={() => toggleFavorite(product.id)}
                        className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 z-10"
                      >
                        <Heart
                          className={`w-5 h-5 transition-colors duration-300 ${
                            favorites.includes(product.id)
                              ? 'fill-red-500 text-red-500'
                              : 'text-gray-400'
                          }`}
                        />
                      </button>

                      {/* Overlay on Hover */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>

                    {/* Product Info */}
                    <div className="p-5">
                      {/* Category */}
                      <p className="text-xs text-green-600 font-semibold uppercase tracking-wide mb-2">
                        {product.category}
                      </p>

                      {/* Product Name */}
                      <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-green-700 transition-colors duration-300">
                        {product.name}
                      </h3>

                      {/* Price */}
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

                      {/* Rating */}
                      <div className="mb-4">
                        {renderStars(product.rating, product.reviews)}
                      </div>

                      {/* Add to Cart Button */}
                      <button className="w-full text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group/btn" style={{backgroundColor: '#2D5016'}}>
                        <ShoppingCart className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* View All Button */}
        {/* <div className="text-center mt-12">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              View All Products
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
        </div> */}
      </div>
    </section>
  );
}