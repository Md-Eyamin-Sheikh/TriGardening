'use client';

import React, { useState } from 'react';
import { Search, ThumbsUp, MessageSquare } from 'lucide-react';

export default function BlogPage() {
  const [comment, setComment] = useState('');

  const categories = [
    { name: 'Plant Care', count: 12 },
    { name: 'Pest Control', count: 7 },
    { name: 'DIY Gardening', count: 11 },
    { name: 'Seasonal Tips', count: 20 },
    { name: 'Sustainability', count: 4 }
  ];

  const recentPosts = [
    {
      id: 1,
      title: 'How to repot a plant in 4 easy steps',
      image: 'https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=100&h=100&fit=crop'
    },
    {
      id: 2,
      title: 'Spring perfect tomatoes for this season',
      image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=100&h=100&fit=crop'
    },
    {
      id: 3,
      title: 'Compost fertilizer: everything composable',
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=100&h=100&fit=crop'
    },
    {
      id: 4,
      title: 'Natural Pest Control Methods for Home',
      image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=100&h=100&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 lg:pt-24 bg-gray-50">
      {/* Main Container */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8">
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
          
          {/* Main Content */}
          <div className="flex-1 lg:w-3/4">
            {/* Header Image */}
            <div className="mb-4 sm:mb-6">
              <img 
                src="https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1200&h=400&fit=crop" 
                alt="Cherry blossom trees"
                className="w-full h-48 sm:h-64 md:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Post Meta */}
            <div className="mb-3 sm:mb-4 flex flex-wrap items-center gap-2 sm:gap-4 text-xs sm:text-sm">
              <span className="px-2 sm:px-3 py-1 rounded-full text-white" style={{ backgroundColor: '#2D5016' }}>
                Post Type
              </span>
              <span className="text-gray-600">5min Read</span>
              <span className="text-gray-600">September 18, 2025</span>
            </div>

            {/* Post Title */}
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6" style={{ color: '#2D5016' }}>
              10 Essential Tips for Indoor Plant Care
            </h1>

            {/* Post Content */}
            <div className="prose max-w-none mb-6 sm:mb-8 shadow-lg sm:shadow-2xl p-4 sm:p-6 lg:p-10 bg-white rounded-lg">
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                ঘরের দুর্দান্ত চেহারা তৈরার বড়া সময় নামমাত্র জিনিস পরিষ্কার পোশাক নয়। যদি আমি আপনাকে জিজ্ঞাসা করি তাহলে আপনি কি বলবেন যে, আপনার ঘরে কোন পোশাক প্রয়োজন যা ঘরটির সুন্দরতা যোগায় এবং পাশাপাশি বায়ু পরিষ্কার করে, মানসিক চাপ কমায়, স্বাস্থ্য প্রচার করে এবং এখন যখন অনেক কৃত্রিম পরিবেশে থাকতে হয় তখন সবুজ পরিবেশ যোগ করে দেয়।
              </p>
              
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                সমাকাশ নেই যে এটি দারুণ গাছপালা সংবাদ-সমাজের প্রকাশ, কোন কাজপত্র জমার সময়কার পরিশ্রম বাদ দিয়ে ছিলাম। কিন্তু একটি সাধারণ জোর করে দারুণ উদ্ভিদ বৃদ্ধির সময় নয়, যদি সেগুলি উপযুক্ত যত্ন নিতে না পেরে হয় তা কোন অর্থ নেই।
              </p>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                আপনাদের জন্য পুরো জরুরি তথ্য নিচে দিয়েছি যাতে আপনারা সঠিক উপায়ে উদ্ভিদের যত্ন নিতে পারেন। প্রথমত গাছকে পর্যাপ্ত আলো দিতে হবে। উদ্ভিদের প্রজাতি প্রতিদিন কম আলোর পছন্দ বেচতিনা হলেও দুটি মাটি আলো পেতে প্রয়োজন।
              </p>
            </div>

            {/* Comments Section */}
            <div className="mt-8 sm:mt-12 shadow-lg sm:shadow-2xl p-4 sm:p-6 lg:p-10 bg-white rounded-lg">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6" style={{ color: '#2D5016' }}>
                Comments
              </h2>

              {/* Comment Form */}
              <div className="mb-6 sm:mb-8">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write your comment..."
                  className="w-full p-3 sm:p-4 border text-gray-800 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 resize-none text-sm sm:text-base"
                  style={{ focusRingColor: '#2D5016' }}
                  rows="4"
                />
                <div className="flex justify-end mt-3">
                  <button 
                    className="px-4 sm:px-6 py-2 text-white rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base"
                    style={{ backgroundColor: '#2D5016' }}
                  >
                    Submit
                  </button>
                </div>
              </div>

              {/* Existing Comment */}
              <div className="border-t pt-4 sm:pt-6">
                <div className="flex gap-3 sm:gap-4">
                  <img 
                    src="https://ui-avatars.com/api/?name=Namita+Chowdhury&background=2D5016&color=fff"
                    alt="Namita Chowdhury"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="font-semibold text-sm sm:text-base" style={{ color: '#2D5016' }}>
                        Namita Chowdhury
                      </h3>
                      <span className="text-xs px-2 py-1 rounded text-white" style={{ backgroundColor: '#2D5016' }}>
                        Verified Purchase
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-2 sm:mb-3">1 days ago • 5 September, 2025</p>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-3 sm:mb-4">
                      এই পণ্যটি আমালতের রসালো এবং আকার কারণ অবশ্যই পরিষ্ক তে সমান মনের সংবাদপত্রের মতো দেখা।
                    </p>
                    <div className="flex gap-3 sm:gap-4 text-xs sm:text-sm text-gray-600">
                      <button className="flex items-center gap-1 hover:text-gray-800">
                        <ThumbsUp size={14} className="sm:w-4 sm:h-4" />
                        Helpful (0)
                      </button>
                      <button className="flex items-center gap-1 hover:text-gray-800">
                        <MessageSquare size={14} className="sm:w-4 sm:h-4" />
                        Not Helpful (0)
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/4 lg:min-w-[300px] space-y-4 sm:space-y-6">
            {/* Search */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4" style={{ color: '#2D5016' }}>
                Search Blog
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-3 sm:pl-4 pr-8 sm:pr-10 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 text-sm sm:text-base"
                  style={{ focusRingColor: '#2D5016' }}
                />
                <Search className="absolute right-2 sm:right-3 top-2 sm:top-2.5 text-gray-400" size={16} />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4" style={{ color: '#2D5016' }}>
                Blog Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.name} className="flex justify-between items-center py-1.5 sm:py-2 border-b border-gray-100 last:border-0">
                    <span className="text-sm sm:text-base text-gray-700 hover:opacity-80 cursor-pointer">
                      {category.name}
                    </span>
                    <span className="text-xs sm:text-sm px-2 py-1 rounded" style={{ backgroundColor: '#F5F5DC', color: '#2D5016' }}>
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
              <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4" style={{ color: '#2D5016' }}>
                Recent Posts
              </h3>
              <div className="space-y-3 sm:space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex gap-2.5 sm:gap-3 cursor-pointer hover:opacity-80">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-16 h-16 sm:w-20 sm:h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs sm:text-sm text-gray-700 leading-tight line-clamp-3">
                        {post.title}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}