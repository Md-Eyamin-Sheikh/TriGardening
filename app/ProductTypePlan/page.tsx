'use client';

import React, { useState } from 'react';
import { Star, StarHalf, Heart, Plus, Minus, ChevronDown } from 'lucide-react';

export default function PlantProductPage() {
  const [selectedSize, setSelectedSize] = useState('Medium');
  const [selectedPot, setSelectedPot] = useState('Medium');
  const [selectedColor, setSelectedColor] = useState('white');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [expandedDesc, setExpandedDesc] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const images = [
    'https://images.unsplash.com/photo-1597690365552-92c58db61e92?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1617059063772-34532796cdb8?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500&h=500&fit=crop',
    'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=500&h=500&fit=crop'
  ];

  const relatedProducts = [
    {
      name: 'Monstera Deliciosa',
      nameBn: 'মনস্টেরা প্ল্যান্ট',
      price: '2000 - 3,400',
      rating: 4.5,
      reviews: 24,
      image: 'https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?w=300&h=300&fit=crop'
    },
    {
      name: 'Organic Compost Fertilizer',
      nameBn: 'জৈব সার',
      price: '60 - 440',
      rating: 4,
      reviews: 12,
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=300&h=300&fit=crop'
    },
    {
      name: 'Pruning Shears',
      nameBn: 'কাঁচি',
      price: '180 - 450',
      rating: 4.5,
      reviews: 34,
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=300&h=300&fit=crop'
    },
    {
      name: 'Snake Plant',
      nameBn: 'স্নেক প্ল্যান্ট',
      price: '150 - 500',
      rating: 4,
      reviews: 35,
      image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb4?w=300&h=300&fit=crop'
    }
  ];

  const suggestions = [
    { name: 'Money Plant', nameBn: 'মানি প্ল্যান্ট', price: '150', image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=100&h=100&fit=crop' },
    { name: 'Snake Plant', nameBn: 'স্নেক প্ল্যান্ট', price: '180', image: 'https://images.unsplash.com/photo-1593482892290-f54927ae1bb4?w=100&h=100&fit=crop' },
    { name: 'Monstera Deliciosa', nameBn: 'মনস্টেরা প্ল্যান্ট', price: '2,400', image: 'https://images.unsplash.com/photo-1614594895304-fe7116ac3b58?w=100&h=100&fit=crop' },
    { name: 'Verni Compost', nameBn: 'ভার্মি কম্পোস্ট', price: '900', image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=100&h=100&fit=crop' },
    { name: 'Organic Pesticide', nameBn: 'জৈব কীটনাশক', price: '450', image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=100&h=100&fit=crop' }
  ];

  const reviews = [
    {
      name: 'Nimita Chowdhury',
      nameBn: 'নিমিতা চৌধুরী',
      verified: true,
      date: '4 Days ago | 12 September, 2025',
      rating: 5,
      text: 'এই পণ্যটি একেবারেই দুর্দান্ত। লেনদেন সুন্দর এবং সময়মতো ছিল। আমরা আমাদের বাগানে এটি খুবই পছন্দ করি এবং অন্যদের প্রশংসা ও লক্ষ্য আকর্ষণ করেছে। সুস্থ পাতলা এবং শিকড় সুস্বাদ করার জন্য ধন্যবাদ।',
      helpful: 10,
      notHelpful: 0,
      reply: {
        author: 'Reply from Nagorikdaktar',
        date: '12 September, 2025',
        text: 'আপনাকে অনেক অনেক ধন্যবাদ এটি শুনে যে আপনি খুশি হয়েছেন। আমাদের প্রতিটি পণ্যের জন্য বিশেষ যত্ন নেওয়া হয়। আশা করি ভবিষ্যতেও আমাদের সাথে থাকবেন।'
      }
    },
    {
      name: 'Aminul Islam',
      nameBn: 'আমিনুল ইসলাম',
      verified: true,
      date: '1 Week ago | 8 September, 2025',
      rating: 4,
      text: 'সবুজ এবং সুস্থ উদ্ভিদ, প্যাকেজিং খুব ভাল ছিল। তবে পট একটু ছোট ছিল। এছাড়া কোনো সমস্যা নেই। অবশ্যই সুপারিশ করি!',
      helpful: 8,
      notHelpful: 1,
      reply: {
        author: 'Reply from Nagorikdaktar',
        date: '9 September, 2025',
        text: 'আপনার মূল্যবান মতামত পেয়ে আমরা আনন্দিত। পটের সাইজের ব্যাপারে নোট নিয়েছি। আমরা বিভিন্ন সাইজের পট যুক্ত করেছি যেখান থেকে আপনি পছন্দ অনুযায়ী নির্বাচন করতে পারবেন। আবার ধন্যবাদ!'
      }
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />);
    }
    if (hasHalf) {
      stars.push(<StarHalf key="half" className="w-4 h-4 fill-amber-400 text-amber-400" />);
    }
    for (let i = stars.length; i < 5; i++) {
      stars.push(<Star key={i} className="w-4 h-4 text-gray-300" />);
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br py-20 sm:py-20 from-green-50 via-green-50 to-green-100">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200 py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 overflow-x-auto">
            <span className="hover:text-green-600 cursor-pointer whitespace-nowrap">Home</span>
            <span>›</span>
            <span className="hover:text-green-600 cursor-pointer whitespace-nowrap">Products</span>
            <span>›</span>
            <span className="hover:text-green-600 cursor-pointer whitespace-nowrap">Plants</span>
            <span>›</span>
            <span className="text-green-600 font-medium whitespace-nowrap">Golden Pothos</span>
          </div>
        </div>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {/* Left: Product Images */}
          <div className="lg:col-span-1 order-1 lg:order-1">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:sticky lg:top-24">
              <div className="aspect-square rounded-lg sm:rounded-xl overflow-hidden mb-3 sm:mb-4 bg-gradient-to-br from-green-100 to-green-200">
                <img src={images[selectedImage]} alt="Golden Pothos" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="grid grid-cols-4 gap-1.5 sm:gap-2">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`aspect-square rounded-md sm:rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === idx ? 'ring-2 ring-green-200' : 'border-gray-200 hover:border-green-300'
                    }`}
                    style={{ borderColor: selectedImage === idx ? '#2D5016' : undefined }}
                  >
                    <img src={img} alt={`View ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Middle: Product Details */}
          <div className="lg:col-span-1 space-y-4 sm:space-y-6 order-2 lg:order-2">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6">
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">Golden Pothos</h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                <div className="flex items-center gap-1">
                  {renderStars(4.7)}
                </div>
                <span className="text-xs sm:text-sm text-gray-600">(24 Reviews)</span>
                <span className="px-2 sm:px-3 py-1 text-white rounded-full text-xs sm:text-sm font-medium flex items-center gap-1 w-fit" style={{ backgroundColor: '#2D5016' }}>
                  <div className="w-2 h-2 bg-green-300 rounded-full"></div>
                  In Stock
                </span>
              </div>

              <div className="mb-3 sm:mb-4 pb-3 sm:pb-4 border-b border-gray-200">
                <span className="text-gray-600 text-xs sm:text-sm">Indoor Plant</span>
              </div>

              {/* Size Selection */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2 sm:mb-3">Size</label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { label: 'Small', price: '৳ 240' },
                    { label: 'Medium', price: '৳ 290' },
                    { label: 'Large', price: '৳ 450' }
                  ].map((size) => (
                    <button
                      key={size.label}
                      onClick={() => setSelectedSize(size.label)}
                      className={`p-2 sm:p-3 rounded-lg sm:rounded-xl border-2 transition-all text-center ${
                        selectedSize === size.label
                          ? 'bg-green-50 text-green-700'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                      style={{ borderColor: selectedSize === size.label ? '#2D5016' : undefined }}
                    >
                      <div className="font-semibold text-xs sm:text-sm">{size.label}</div>
                      <div className="text-xs text-gray-600">{size.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Pot Selection */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2 sm:mb-3">Include Pot</label>
                <div className="grid grid-cols-3 gap-2 sm:gap-3">
                  {[
                    { label: 'Small', price: '৳ 100' },
                    { label: 'Medium', price: '৳ 150' },
                    { label: 'Large', price: '৳ 170' }
                  ].map((pot) => (
                    <button
                      key={pot.label}
                      onClick={() => setSelectedPot(pot.label)}
                      className={`p-2 sm:p-3 rounded-lg sm:rounded-xl border-2 transition-all text-center ${
                        selectedPot === pot.label
                          ? 'bg-green-50 text-green-700'
                          : 'border-gray-200 hover:border-green-300'
                      }`}
                      style={{ borderColor: selectedPot === pot.label ? '#2D5016' : undefined }}
                    >
                      <div className="font-semibold text-xs sm:text-sm">{pot.label}</div>
                      <div className="text-xs text-gray-600">{pot.price}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Pot Color */}
              <div className="mb-4 sm:mb-6">
                <label className="block text-sm font-semibold text-gray-900 mb-2 sm:mb-3">Pot Color</label>
                <div className="flex gap-2 sm:gap-3">
                  <button
                    onClick={() => setSelectedColor('white')}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white border-4 transition-all ${
                      selectedColor === 'white' ? 'ring-2 ring-green-200' : 'border-gray-200'
                    }`}
                    style={{ borderColor: selectedColor === 'white' ? '#2D5016' : undefined }}
                  />
                  <button
                    onClick={() => setSelectedColor('brown')}
                    className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-amber-700 border-4 transition-all ${
                      selectedColor === 'brown' ? 'ring-2 ring-green-200' : 'border-gray-200'
                    }`}
                    style={{ borderColor: selectedColor === 'brown' ? '#2D5016' : undefined }}
                  />
                </div>
              </div>

              {/* Bengali Description */}
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-green-50 rounded-lg sm:rounded-xl">
                <p className="text-xs sm:text-sm text-gray-700">
                  গোল্ডেন পথোস (Golden Pothos / Epipremnum aureum) - এক সুন্দর এবং যত্ন নেওয়া সহজ গৃহস্থালী উদ্ভিদ যা আপনার বাড়িতে সবুজ পরিবেশ তৈরি করবে।
                  <button className="font-medium ml-1 hover:underline" style={{ color: '#2D5016' }}>See more</button>
                </p>
              </div>

              {/* Price and Actions */}
              <div className="mb-4 sm:mb-6">
                <div className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4" style={{ color: '#2D5016' }}>৳ 350</div>
                
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-3 sm:mb-4">
                  <div className="flex items-center border-2 border-gray-200 rounded-lg sm:rounded-xl overflow-hidden">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-2 sm:p-3 hover:bg-gray-100 transition-colors"
                    >
                      <Minus className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                    <input
                      type="number"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-12 sm:w-16 text-center border-x-2 border-gray-200 py-2 focus:outline-none text-sm"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-2 sm:p-3 hover:bg-gray-100 transition-colors"
                    >
                      <Plus className="w-3 h-3 sm:w-4 sm:h-4" />
                    </button>
                  </div>
                  
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className={`p-2 sm:p-3 rounded-lg sm:rounded-xl border-2 transition-all ${
                      isFavorite ? 'border-red-500 bg-red-50' : 'border-gray-200 hover:border-red-300'
                    }`}
                  >
                    <Heart className={`w-4 h-4 sm:w-5 sm:h-5 ${isFavorite ? 'fill-red-500 text-red-500' : 'text-gray-600'}`} />
                  </button>
                </div>

                <button className="w-full text-white py-3 sm:py-4 rounded-lg sm:rounded-xl font-semibold text-base sm:text-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" style={{ backgroundColor: '#2D5016' }}>
                  Add to Cart
                </button>
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">Descriptions</h2>
              <div className={`text-gray-700 text-xs sm:text-sm leading-relaxed ${!expandedDesc ? 'line-clamp-6' : ''}`}>
                <p className="mb-2 sm:mb-3">
                  গোল্ডেন পথোস (Golden Pothos / Epipremnum aureum) – এক সুন্দর এবং যত্ন নেওয়া সহজ গৃহস্থালী উদ্ভিদ যা আপনার বাড়িতে সবুজ পরিবেশ তৈরি করবে। এর চকচকে সবুজ পাতায় হালকা হলুদ রঙের চিহ্ন থাকে, যা পুরো ঘরের সৌন্দর্য বাড়ায়। এটি বাতাস পরিশোধন করে এবং সহজেই বেড়ে ওঠে।
                </p>
                <p className="mb-2 sm:mb-3">
                  গোল্ডেন পথোস অত্যন্ত টেকসই এবং কম আলোতেও বাঁচে। এটি মাঝারি পরিমাণে পানি এবং পরোক্ষ সূর্যালোক পছন্দ করে। নতুন বাগানীদের জন্য আদর্শ, কারণ এটি দ্রুত বাড়ে এবং কম রক্ষণাবেক্ষণ প্রয়োজন। এর সুন্দর পাতা যে কোনো ঘরে নান্দনিকতা যোগ করে।
                </p>
              </div>
              <button
                onClick={() => setExpandedDesc(!expandedDesc)}
                className="mt-2 sm:mt-3 font-medium text-xs sm:text-sm hover:underline flex items-center gap-1"
                style={{ color: '#2D5016' }}
              >
                {expandedDesc ? 'Show less' : 'Read more'}
                <ChevronDown className={`w-3 h-3 sm:w-4 sm:h-4 transition-transform ${expandedDesc ? 'rotate-180' : ''}`} />
              </button>
            </div>
          </div>

          {/* Right: Suggestions */}
          <div className="lg:col-span-1 order-3 lg:order-3">
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:sticky lg:top-24">
              <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">You may also like</h3>
              <div className="space-y-2 sm:space-y-3">
                {suggestions.map((item, idx) => (
                  <div key={idx} className="flex gap-2 sm:gap-3 p-2 sm:p-3 rounded-lg sm:rounded-xl hover:bg-green-50 transition-all cursor-pointer border border-transparent hover:border-green-200">
                    <img src={item.image} alt={item.name} className="w-12 h-12 sm:w-16 sm:h-16 rounded-md sm:rounded-lg object-cover" />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-xs sm:text-sm text-gray-900 truncate">{item.name}</h4>
                      <p className="text-xs text-gray-500 mb-1 truncate">{item.nameBn}</p>
                      <p className="font-bold text-xs sm:text-sm" style={{ color: '#2D5016' }}>৳ {item.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-8 sm:mt-12">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Related Products</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
            {relatedProducts.map((product, idx) => (
              <div key={idx} className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-1">
                <div className="aspect-square bg-gradient-to-br from-green-100 to-green-200">
                  <img src={product.image} alt={product.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-semibold text-gray-900 mb-1 text-xs sm:text-sm truncate">{product.name}</h3>
                  <p className="text-xs text-gray-500 mb-1 sm:mb-2 truncate">{product.nameBn}</p>
                  <div className="flex items-center gap-1 mb-1 sm:mb-2">
                    {renderStars(product.rating)}
                    <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                  </div>
                  <p className="font-bold mb-2 sm:mb-3 text-xs sm:text-sm" style={{ color: '#2D5016' }}>৳ {product.price}</p>
                  <button className="w-full text-white py-1.5 sm:py-2 rounded-md sm:rounded-lg font-medium text-xs sm:text-sm transition-all" style={{ backgroundColor: '#2D5016' }}>
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-8 sm:mt-12 bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">Customer Reviews & Ratings</h2>
          <p className="text-gray-600 text-xs sm:text-sm mb-4 sm:mb-6">See what other gardeners are saying about this product</p>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            {/* Rating Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center">
                <div className="text-4xl sm:text-6xl font-bold mb-1 sm:mb-2" style={{ color: '#2D5016' }}>4.7</div>
                <div className="flex items-center justify-center gap-1 mb-1 sm:mb-2">
                  {renderStars(4.7)}
                </div>
                <p className="text-gray-600 text-xs sm:text-sm">Based on 1,247 reviews</p>
                <button className="mt-3 sm:mt-4 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl font-medium transition-all w-full text-sm sm:text-base" style={{ backgroundColor: '#2D5016' }}>
                  Write Review
                </button>
              </div>
            </div>

            {/* Rating Breakdown */}
            <div className="lg:col-span-2">
              {[
                { stars: 5, count: 847 },
                { stars: 4, count: 274 },
                { stars: 3, count: 76 },
                { stars: 2, count: 37 },
                { stars: 1, count: 14 }
              ].map((item) => (
                <div key={item.stars} className="flex items-center gap-2 sm:gap-3 mb-1.5 sm:mb-2">
                  <span className="text-xs sm:text-sm text-gray-600 w-10 sm:w-12">{item.stars} Star</span>
                  <div className="flex-1 h-2 sm:h-3 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all"
                      style={{ 
                        width: `${(item.count / 1247) * 100}%`,
                        background: 'linear-gradient(90deg, #2D5016 0%, #22c55e 100%)'
                      }}
                    />
                  </div>
                  <span className="text-xs sm:text-sm text-gray-600 w-8 sm:w-12 text-right">{item.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Review Highlights */}
          <div className="mb-4 sm:mb-6">
            <h3 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Review Highlights</h3>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {['Easy to Grow', 'Good Quality', 'Arrived Healthy', 'Great Value', 'Smaller Than Expected'].map((tag, idx) => (
                <span
                  key={idx}
                  className={`px-2 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium ${
                    idx === 4
                      ? 'bg-red-100 text-red-700'
                      : 'bg-green-100 text-green-700'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Individual Reviews */}
          <div className="space-y-4 sm:space-y-6">
            {reviews.map((review, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg sm:rounded-xl p-3 sm:p-4 lg:p-6">
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <div className="flex items-center gap-2 sm:gap-3">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white font-bold text-sm sm:text-lg" style={{ background: 'linear-gradient(135deg, #2D5016 0%, #22c55e 100%)' }}>
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
                        <h4 className="font-semibold text-gray-900 text-sm sm:text-base">{review.name}</h4>
                        {review.verified && (
                          <span className="px-1.5 sm:px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                            Verified Purchase
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1">
                    {renderStars(review.rating)}
                  </div>
                </div>

                <p className="text-gray-700 text-xs sm:text-sm mb-3 sm:mb-4">{review.text}</p>

                <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4">
                  <button className="flex items-center gap-1 hover:text-green-600">
                    👍 Helpful ({review.helpful})
                  </button>
                  <button className="flex items-center gap-1 hover:text-red-600">
                    👎 Not Helpful ({review.notHelpful})
                  </button>
                </div>

                {review.reply && (
                  <div className="bg-green-50 rounded-lg sm:rounded-xl p-3 sm:p-4 ml-4 sm:ml-8 border-l-4" style={{ borderColor: '#2D5016' }}>
                    <div className="flex items-center gap-2 mb-1 sm:mb-2">
                      <span className="font-semibold text-xs sm:text-sm" style={{ color: '#2D5016' }}>{review.reply.author}</span>
                      <span className="text-xs text-gray-500">{review.reply.date}</span>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-700">{review.reply.text}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 sm:mt-8 text-center">
            <button className="px-6 sm:px-8 py-2 sm:py-3 border-2 rounded-lg sm:rounded-xl font-medium transition-all text-sm sm:text-base" style={{ borderColor: '#2D5016', color: '#2D5016' }}>
              Load More Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}