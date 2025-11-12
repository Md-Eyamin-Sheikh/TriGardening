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
    <div className="min-h-screen bg-gray-50">
      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content */}
          <div className="flex-1">
            {/* Header Image */}
            <div className="mb-6">
              <img 
                src="https://images.unsplash.com/photo-1522383225653-ed111181a951?w=1200&h=400&fit=crop" 
                alt="Cherry blossom trees"
                className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg"
              />
            </div>

            {/* Post Meta */}
            <div className="mb-4 flex flex-wrap items-center gap-4 text-sm">
              <span className="px-3 py-1 rounded-full text-white" style={{ backgroundColor: '#2D5016' }}>
                Post Type
              </span>
              <span className="text-gray-600">5min Read</span>
              <span className="text-gray-600">September 18, 2025</span>
            </div>

            {/* Post Title */}
            <h1 className="text-3xl md:text-4xl font-bold mb-6" style={{ color: '#2D5016' }}>
              10 Essential Tips for Indoor Plant Care
            </h1>

            {/* Post Content */}
            <div className="prose max-w-none mb-8">
              <p className="text-gray-700 leading-relaxed mb-4">
                ঘরের দুর্দান্ত চেহারা তৈরার বড়া সময় নামমাত্র জিনিস পরিষ্কার পোশাক নয়। যদি আমি আপনাকে জিজ্ঞাসা করি তাহলে আপনি কি বলবেন যে, আপনার ঘরে কোন পোশাক প্রয়োজন যা ঘরটির সুন্দরতা যোগায় এবং পাশাপাশি বায়ু পরিষ্কার করে, মানসিক চাপ কমায়, স্বাস্থ্য প্রচার করে এবং এখন যখন অনেক কৃত্রিম পরিবেশে থাকতে হয় তখন সবুজ পরিবেশ যোগ করে দেয়।
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                সমাকাশ নেই যে এটি দারুণ গাছপালা সংবাদ-সমাজের প্রকাশ, কোন কাজপত্র জমার সময়কার পরিশ্রম বাদ দিয়ে ছিলাম। কিন্তু একটি সাধারণ জোর করে দারুণ উদ্ভিদ বৃদ্ধির সময় নয়, যদি সেগুলি উপযুক্ত যত্ন নিতে না পেরে হয় তা কোন অর্থ নেই। দেখার জন্য, অনেক লোক শুধু একটি উদ্ভিদ পেতে নিয়ে যান, কিন্তু সময়ের অভাবে যত্নের জন্য তারা মৃত্যু পরাজিত করতে পারেন।
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                আপনাদের জন্য পুরো জরুরি তথ্য নিচে দিয়েছি যাতে আপনারা সঠিক উপায়ে উদ্ভিদের যত্ন নিতে পারেন। আমরা যদি বলি বড় জরুরি, আপনার কাছাকাছি তথ্যের পরিবেশ ভালো দেখতে সাহায্য করতে পারে। অনুগ্রহ জল্পনা করে। অনেকেই খেয়াল দেন না যখন উদ্ভিদ গাছের কি প্রয়োজন কিন্তু যখন ঝিল্লা পড়ে যায় তখন ভালো হয়ে যায়।
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                প্রথমত গাছকে পর্যাপ্ত আলো দিতে হবে। উদ্ভিদের প্রজাতি প্রতিদিন কম আলোর পছন্দ বেচতিনা হলেও দুটি মাটি আলো পেতে প্রয়োজন কারণ। আলোতে আপ্রাণ কমতার সময় দেখাতে হবে, সঠিক পরিমাণ পানি যোগায়, যেমনটি মাঠকাশ দেওয়ার পছন্দ দুটি হতে পারে। পানি ঘুরে ওঠা ভালোবাসে না শুধু সবুজ উদ্ভিদ তবে বিশেষ কোন পরিবেশ পছন্দ।
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                কনো বিড়ালের মধ্যবর্তী। অলবিদের প্রজাতি পরিবর্তিত তাই শুধু সবুজ দাম তো সীমাবদ্ধ নেই রং পোশাক সাজান, মালিক কিছুমান গাছ, খেলওয়াতী ব্রোটিলি তারের পাশ ভালো গড়াকাল, হায়েস্ট সুবাস, হোম সান রোথ তাদের পড়তে পেরে সবমেয়নে কেউগুলো নদী অক্সিজেন। সঠিক মাঠকাশ পরিপূর্ণ যত্ন গাছেরা সর্তে পাস। স্বাস্থ্য যে খুব ছবি আগমান মাসিক পরিবেশ পেয়েছে যা ঘরের সাড়ি গাছ সরাসরি মত্যু করলেই আছে।
              </p>

              <p className="text-gray-700 leading-relaxed mb-4">
                পবার এখন কথা মাটিপাল মাণ্ড হয় শেষেকর সময় গড়ে। দেশের সংলিস্ট পরিবেশসীত তালা কোনও আস্তু যন্ত্রপাতির উপত্তিবত্তির আয়োজনসীম আটিবিল্য যদি বিশেষভাবে কোন মন্ত্রিল পরিষ্কার পার। মানে মন্ত্রি খানানো সাময়ো, সাথারিন হিচের ডিরেলা শক্তি স্বার্থক সহজ পার পায়োজন দেখলাস্তো দুটি বাসি মাছ রিট আপনার করে একইয়ে পানির। গাছের মাটিকামহিতে মূল আছে। আহুত সবুজ পেশাবন বানিক পরিপূর্ণ উদ্ভিদের পরিতোষ লেয়ে হয়দিও করে ঘূম নোটি আছে সবজন্ত্র করে সবিয়াত্তম মিলাবে বৃদ্ধিত ব্যবহার উত্সাহির পরা অসি জিবন খপুল অনেক পানিয় কাজের এম ডে যমজ আপনার এর সুবেন বুহন রোগ কবজ?
              </p>
            </div>

            {/* Comments Section */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6" style={{ color: '#2D5016' }}>
                Comments
              </h2>

              {/* Comment Form */}
              <div className="mb-8">
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Write your comment..."
                  className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50 resize-none"
                  style={{ focusRingColor: '#2D5016' }}
                  rows="4"
                />
                <div className="flex justify-end mt-3">
                  <button 
                    className="px-6 py-2 text-white rounded-lg hover:opacity-90 transition-opacity"
                    style={{ backgroundColor: '#2D5016' }}
                  >
                    Submit
                  </button>
                </div>
              </div>

              {/* Existing Comment */}
              <div className="border-t pt-6">
                <div className="flex gap-4">
                  <img 
                    src="https://ui-avatars.com/api/?name=Namita+Chowdhury&background=2D5016&color=fff"
                    alt="Namita Chowdhury"
                    className="w-12 h-12 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold" style={{ color: '#2D5016' }}>
                        Namita Chowdhury
                      </h3>
                      <span className="text-xs px-2 py-1 rounded text-white" style={{ backgroundColor: '#2D5016' }}>
                        Verified Purchase
                      </span>
                    </div>
                    <p className="text-xs text-gray-500 mb-3">1 days ago • 5 September, 2025</p>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      এই পণ্যটি আমালতের রসালো এবং আকার কারণ অবশ্যই পরিষ্ক তে সমান মনের সংবাদপত্রের মতো দেখা। এস খবর কমান পরিষেবা আমেন নিয়ে সাহায্য করছেন তার যেন পরামর্শ দিয়ে দেখ খাসলোয় আসার হয়ে তারা জাহে দেওয়ার স্বরায়ত্তী নেবেশন।
                    </p>
                    <div className="flex gap-4 text-sm text-gray-600">
                      <button className="flex items-center gap-1 hover:text-gray-800">
                        <ThumbsUp size={16} />
                        Helpful (0)
                      </button>
                      <button className="flex items-center gap-1 hover:text-gray-800">
                        <MessageSquare size={16} />
                        Not Helpful (0)
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Search */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#2D5016' }}>
                Search Blog
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-opacity-50"
                  style={{ focusRingColor: '#2D5016' }}
                />
                <Search className="absolute right-3 top-2.5 text-gray-400" size={20} />
              </div>
            </div>

            {/* Categories */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#2D5016' }}>
                Blog Categories
              </h3>
              <div className="space-y-2">
                {categories.map((category) => (
                  <div key={category.name} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                    <span className="text-gray-700 hover:opacity-80 cursor-pointer">
                      {category.name}
                    </span>
                    <span className="text-sm px-2 py-1 rounded" style={{ backgroundColor: '#F5F5DC', color: '#2D5016' }}>
                      {category.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Posts */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold mb-4" style={{ color: '#2D5016' }}>
                Recent Posts
              </h3>
              <div className="space-y-4">
                {recentPosts.map((post) => (
                  <div key={post.id} className="flex gap-3 cursor-pointer hover:opacity-80">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                    />
                    <div>
                      <p className="text-sm text-gray-700 leading-tight line-clamp-3">
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