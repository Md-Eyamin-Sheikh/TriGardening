'use client';

import { useState } from 'react';
import { Star, ShoppingCart, ChevronRight, SlidersHorizontal, Heart } from 'lucide-react';

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
    name: 'Pruning Shears',
    category: 'Equipment',
    image: 'https://images.unsplash.com/photo-1416339442236-8ceb164046f8?w=500&h=500&fit=crop',
    price: { min: 180, max: 450 },
    rating: 4,
    reviews: 34
  },
  {
    id: 5,
    name: 'Organic Compost Fertilizer',
    category: 'Fertilizer',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=500&h=500&fit=crop',
    price: { min: 60, max: 440 },
    rating: 4,
    reviews: 12
  },
  {
    id: 6,
    name: 'Monstera Deliciosa',
    category: 'Indoor Plant',
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500&h=500&fit=crop',
    price: { min: 2000, max: 3400 },
    rating: 5,
    reviews: 24
  }
];

export default function ProductsPage() {
  const [priceRange, setPriceRange] = useState([0, 10000]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedLight, setSelectedLight] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [visibleProducts, setVisibleProducts] = useState(3);
  const [sortBy, setSortBy] = useState('popular');

  const toggleFavorite = (productId) => {
    setFavorites((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const handleCheckbox = (value, setter) => {
    setter((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const loadMore = () => {
    setVisibleProducts((prev) => prev + 3);
  };

  const renderStars = (rating, reviews) => {
    return (
      <div className="flex mx-auto max-w-[1600px] items-center  gap-1">
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
    <div className="min-h-screen  pt-20 bg-[#F5F5DC]">
      {/* Top Navigation */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-start gap-2 sm:gap-4 lg:gap-8 py-4 overflow-x-auto scrollbar-hide">
            <a href="#home" className="text-gray-600 hover:text-[#2D5016] transition-colors font-medium whitespace-nowrap text-sm sm:text-base">
              Home
            </a>
            <a href="#plants" className="text-[#2D5016] font-semibold border-b-2 border-[#2D5016] pb-1 whitespace-nowrap text-sm sm:text-base">
              Plants
            </a>
            <a href="#tools" className="text-gray-600 hover:text-[#2D5016] transition-colors font-medium whitespace-nowrap text-sm sm:text-base">
              Tools
            </a>
            <a href="#fertilizers" className="text-gray-600 hover:text-[#2D5016] transition-colors font-medium whitespace-nowrap text-sm sm:text-base">
              Fertilizers
            </a>
            <a href="#seeds" className="text-gray-600 hover:text-[#2D5016] transition-colors font-medium whitespace-nowrap text-sm sm:text-base">
              Seeds
            </a>
            <a href="#medicine" className="text-gray-600 hover:text-[#2D5016] transition-colors font-medium whitespace-nowrap text-sm sm:text-base">
              Medicine
            </a>
            <a href="#equipments" className="text-gray-600 hover:text-[#2D5016] transition-colors font-medium whitespace-nowrap text-sm sm:text-base">
              Equipments
            </a>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <div className="bg-[#F5F5DC] border-b border-gray-200">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm">
            <a href="#" className="text-gray-600 hover:text-[#2D5016] transition-colors">Home</a>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <a href="#" className="text-gray-600 hover:text-[#2D5016] transition-colors">Products</a>
            <ChevronRight className="w-4 h-4 text-gray-400" />
            <span className="text-[#2D5016] font-medium">Plants</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 lg:gap-8">
          
          {/* Sidebar Filters - Hidden on mobile, shown as modal or collapsible */}
          <aside className="hidden lg:block lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 sticky top-24">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <SlidersHorizontal className="w-5 h-5 text-gray-600" />
                Filter Products
              </h3>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Category</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-[#2D5016] border-gray-300 rounded focus:ring-[#2D5016]"
                      onChange={() => handleCheckbox('indoor', setSelectedCategories, selectedCategories)}
                    />
                    <span className="text-sm text-gray-700 group-hover:text-[#2D5016] transition-colors">
                      Indoor Plants (30)
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-[#2D5016] border-gray-300 rounded focus:ring-[#2D5016]"
                      onChange={() => handleCheckbox('outdoor', setSelectedCategories, selectedCategories)}
                    />
                    <span className="text-sm text-gray-700 group-hover:text-[#2D5016] transition-colors">
                      Outdoor Plants (48)
                    </span>
                  </label>
                </div>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Price Range</h4>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  value={priceRange[1]}
                  onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#2D5016]"
                />
                <div className="flex justify-between text-sm text-gray-600 mt-2">
                  <span>৳ {priceRange[0]}</span>
                  <span>৳ {priceRange[1]}+</span>
                </div>
              </div>

              {/* Size Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Size</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-[#2D5016] border-gray-300 rounded focus:ring-[#2D5016]"
                      onChange={() => handleCheckbox('small', setSelectedSizes, selectedSizes)}
                    />
                    <span className="text-sm text-gray-700 group-hover:text-[#2D5016] transition-colors">
                      Small (20)
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-[#2D5016] border-gray-300 rounded focus:ring-[#2D5016]"
                      onChange={() => handleCheckbox('medium', setSelectedSizes, selectedSizes)}
                    />
                    <span className="text-sm text-gray-700 group-hover:text-[#2D5016] transition-colors">
                      Medium (27)
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-[#2D5016] border-gray-300 rounded focus:ring-[#2D5016]"
                      onChange={() => handleCheckbox('large', setSelectedSizes, selectedSizes)}
                    />
                    <span className="text-sm text-gray-700 group-hover:text-[#2D5016] transition-colors">
                      Large (16)
                    </span>
                  </label>
                </div>
              </div>

              {/* Light Requirements */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-800 mb-3">Light Requirements</h4>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-[#2D5016] border-gray-300 rounded focus:ring-[#2D5016]"
                      onChange={() => handleCheckbox('low', setSelectedLight, selectedLight)}
                    />
                    <span className="text-sm text-gray-700 group-hover:text-[#2D5016] transition-colors">
                      Low Light (18)
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-[#2D5016] border-gray-300 rounded focus:ring-[#2D5016]"
                      onChange={() => handleCheckbox('medium', setSelectedLight, selectedLight)}
                    />
                    <span className="text-sm text-gray-700 group-hover:text-[#2D5016] transition-colors">
                      Medium Light (19)
                    </span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer group">
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-[#2D5016] border-gray-300 rounded focus:ring-[#2D5016]"
                      onChange={() => handleCheckbox('bright', setSelectedLight, selectedLight)}
                    />
                    <span className="text-sm text-gray-700 group-hover:text-[#2D5016] transition-colors">
                      Bright Light (16)
                    </span>
                  </label>
                </div>
              </div>

              {/* Apply Button */}
              <button className="w-full bg-gradient-to-r from-[#2D5016] to-[#3d6b1f] text-white py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                Apply Filters
              </button>
            </div>
          </aside>

          {/* Products Grid */}
          <main className="col-span-1 lg:col-span-3">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 sm:mb-6 gap-3 sm:gap-4">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-[#2D5016] mb-1 sm:mb-2">Plants</h1>
                <p className="text-sm sm:text-base text-gray-600">Showing {Math.min(visibleProducts, products.length)} of {products.length} products</p>
              </div>
              <div className="w-full sm:w-auto">
                <select 
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full sm:w-48 px-3 sm:px-4 py-2 border text-gray-950 border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016] bg-white text-sm sm:text-base"
                >
                  <option value="popular">Sort By: Popular</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Rating</option>
                  <option value="newest">Newest</option>
                </select>
              </div>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
              {products.slice(0, visibleProducts).map((product) => (
                <div
                  key={product.id}
                  className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
                >
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-square bg-gray-100">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    
                    {/* Favorite Button */}
                    <button
                      onClick={() => toggleFavorite(product.id)}
                      className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110 z-10"
                    >
                      <Heart
                        className={`w-5 h-5 transition-colors duration-300 ${
                          favorites.includes(product.id)
                            ? 'fill-red-500 text-red-500'
                            : 'text-gray-400'
                        }`}
                      />
                    </button>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5">
                    <p className="text-xs text-[#2D5016] font-semibold uppercase tracking-wide mb-2">
                      {product.category}
                    </p>
                    <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-[#2D5016] transition-colors duration-300">
                      {product.name}
                    </h3>
                    
                    {/* Price */}
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-sm text-orange-600 font-bold">৳</span>
                      <span className="text-lg sm:text-xl font-bold text-orange-600">
                        {product.price.min}
                      </span>
                      <span className="text-gray-400">-</span>
                      <span className="text-lg sm:text-xl font-bold text-orange-600">
                        {product.price.max}
                      </span>
                    </div>

                    {/* Rating */}
                    <div className="mb-4">
                      {renderStars(product.rating, product.reviews)}
                    </div>

                    {/* Add to Cart */}
                    <button className="w-full bg-gradient-to-r from-[#2D5016] to-[#3d6b1f] text-white py-2.5 sm:py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 group/btn text-sm sm:text-base">
                      <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 group-hover/btn:scale-110 transition-transform duration-300" />
                      Add to Cart
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More Button */}
            {visibleProducts < products.length && (
              <div className="text-center">
                <button 
                  onClick={loadMore}
                  className="bg-gradient-to-r from-[#2D5016] to-[#3d6b1f] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                >
                  Load More Products
                </button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}