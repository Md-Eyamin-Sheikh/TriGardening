'use client';

import { useState } from 'react';
import { Search, Calendar, User, Clock, ChevronRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: '10 Essential Tips for Indoor Plant Care',
    excerpt: 'Discover the secrets to keeping your houseplants healthy and thriving year-round with these expert tips...',
    image: 'https://images.unsplash.com/photo-1459411552884-841db9b3cc2a?w=800&h=600&fit=crop',
    category: 'Post Type',
    author: "Writer's Name",
    date: 'September 19, 2025',
    readTime: '5min Read'
  },
  {
    id: 2,
    title: '10 Essential Tips for Indoor Plant Care',
    excerpt: 'Discover the secrets to keeping your houseplants healthy and thriving year-round with these expert tips...',
    image: 'https://images.unsplash.com/photo-1604357209793-fca5dca89f97?w=800&h=600&fit=crop',
    category: 'Post Type',
    author: "Writer's Name",
    date: 'September 19, 2025',
    readTime: '5min Read'
  },
  {
    id: 3,
    title: '10 Essential Tips for Indoor Plant Care',
    excerpt: 'Discover the secrets to keeping your houseplants healthy and thriving year-round with these expert tips...',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=800&h=600&fit=crop',
    category: 'Post Type',
    author: "Writer's Name",
    date: 'September 19, 2025',
    readTime: '5min Read'
  },
  {
    id: 4,
    title: '10 Essential Tips for Indoor Plant Care',
    excerpt: 'Discover the secrets to keeping your houseplants healthy and thriving year-round with these expert tips...',
    image: 'https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=800&h=600&fit=crop',
    category: 'Post Type',
    author: "Writer's Name",
    date: 'September 19, 2025',
    readTime: '5min Read'
  }
];

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
    title: 'Caring for succulent a beginners guide',
    date: 'May 24, 2025',
    image: 'https://images.unsplash.com/photo-1459156212016-c812468e2115?w=200&h=150&fit=crop'
  },
  {
    id: 2,
    title: 'Growing perfect tomatoes for this season',
    date: 'May 23, 2025',
    image: 'https://images.unsplash.com/photo-1592841200221-a6898f307baa?w=200&h=150&fit=crop'
  },
  {
    id: 3,
    title: 'Compost Fertilizer preparing procedures',
    date: 'May 21, 2025',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=200&h=150&fit=crop'
  },
  {
    id: 4,
    title: 'Natural Pest Control Methods That Actually...',
    date: 'May 20, 2025',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=200&h=150&fit=crop'
  }
];

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [visiblePosts, setVisiblePosts] = useState(4);

  const loadMore = () => {
    setVisiblePosts((prev) => prev + 4);
  };

  return (
    <div className="min-h-screen pt-16 sm:pt-20 lg:pt-24 bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 py-4 sm:py-6 lg:py-8">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-[#2D5016] mb-1 sm:mb-2">
            The TriGardening Journal
          </h1>
          <p className="text-gray-600 text-xs sm:text-sm lg:text-base">Your slogan goes here</p>
        </div>
      </header>

      {/* Hero Post */}
      <section className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-12">
        <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl group cursor-pointer">
          <div className="aspect-[16/9] sm:aspect-[21/8] lg:aspect-[21/9]">
            <img
              src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=1400&h=600&fit=crop"
              alt="Featured post"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-12 text-white">
            <h2 className="text-lg sm:text-2xl lg:text-4xl font-bold mb-2 sm:mb-3 lg:mb-4 line-clamp-2">
              Your Blogpost Title goes here:
            </h2>
            <p className="text-white/90 mb-3 sm:mb-4 lg:mb-6 text-xs sm:text-sm lg:text-base line-clamp-2">
              Your blogpost first paragraph sentence goes here...
            </p>
            
            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                  <User className="w-3 h-3 sm:w-4 sm:h-4" />
                </div>
                <span>Writer's Name</span>
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                <Calendar className="w-3 h-3 sm:w-4 sm:h-4" />
                <span>September 19, 2025</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 lg:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8">
          
          {/* Blog Posts - Main Content */}
          <main className="lg:col-span-3 order-2 lg:order-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
              {blogPosts.slice(0, visiblePosts).map((post) => (
                <article
                  key={post.id}
                  className="group bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg hover:shadow-xl sm:hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 sm:hover:-translate-y-2 cursor-pointer"
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  {/* Content */}
                  <div className="p-4 sm:p-5 lg:p-6">
                    {/* Category Badge */}
                    <span className="inline-block px-2.5 sm:px-3 py-1 bg-[#2D5016] text-white text-xs font-semibold rounded-full mb-2 sm:mb-3">
                      {post.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-2 sm:mb-3 line-clamp-2 group-hover:text-[#2D5016] transition-colors duration-300">
                      {post.title}
                    </h3>

                    {/* Excerpt */}
                    <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 line-clamp-2 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-1.5 sm:gap-2 text-xs text-gray-500">
                        <Calendar className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5 sm:gap-2 text-xs text-gray-500">
                        <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            {/* Load More Button */}
            {visiblePosts < blogPosts.length * 2 && (
              <div className="text-center mt-6 sm:mt-8 lg:mt-12">
                <button
                  onClick={loadMore}
                  className="bg-gradient-to-r from-[#2D5016] to-[#3d6b1f] text-white px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                >
                  Load More Articles
                </button>
              </div>
            )}
          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1 order-1 lg:order-2 space-y-4 sm:space-y-6 lg:space-y-8">
            
            {/* Search Box */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-6">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#2D5016] mb-3 sm:mb-4">Search Blog</h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 pr-10 sm:pr-12 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D5016] focus:border-transparent text-sm"
                />
                <button className="absolute right-2.5 sm:right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#2D5016] transition-colors">
                  <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>

            {/* Blog Categories */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-6">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#2D5016] mb-3 sm:mb-4">Blog Categories</h3>
              <ul className="space-y-2 sm:space-y-3">
                {categories.map((category, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="group flex items-center justify-between py-1.5 sm:py-2 hover:text-[#2D5016] transition-colors duration-300"
                    >
                      <span className="text-sm text-gray-700 group-hover:text-[#2D5016] flex items-center gap-1.5 sm:gap-2">
                        <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-0 -ml-3 sm:-ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                        {category.name}
                      </span>
                      <span className="text-xs font-semibold text-gray-400 bg-gray-100 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full group-hover:bg-[#2D5016] group-hover:text-white transition-colors duration-300">
                        {category.count}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Posts */}
            <div className="bg-white rounded-xl sm:rounded-2xl shadow-md sm:shadow-lg p-4 sm:p-6">
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#2D5016] mb-3 sm:mb-4">Recent Posts</h3>
              <ul className="space-y-3 sm:space-y-4">
                {recentPosts.map((post) => (
                  <li key={post.id}>
                    <a
                      href="#"
                      className="group flex gap-2.5 sm:gap-3 hover:bg-gray-50 p-1.5 sm:p-2 rounded-lg transition-all duration-300"
                    >
                      <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-gray-100">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-xs sm:text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-[#2D5016] transition-colors duration-300 mb-1">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500">{post.date}</p>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}