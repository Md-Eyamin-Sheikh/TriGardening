'use client';

import { useState } from 'react';

export default function AIChatbotPage() {
  const [messages, setMessages] = useState([
    {
      type: 'bot',
      text: 'আপনাকে স্বাগতম! আমি কৃষি বিষয়ক বিশেষজ্ঞ চ্যাটবট। আমি আপনার কৃষি সংক্রান্ত সকল প্রশ্নের উত্তর দিতে প্রস্তুত। আপনি যেকোনো প্রশ্ন করতে পারেন।'
    },
    {
      type: 'user',
      text: 'আমার আমের পাতায় হলুদ দাগ পরছে এবং ঝরছে। কিভাবে এই সমস্যা থেকে বাঁচব?'
    },
    {
      type: 'bot',
      text: 'আপনার আম গাছের সমস্যাটি শুনে দুঃখিত। এটি মূলত পাতায় দাগ রোগ বিভিন্ন কারণে হতে পারে। এখানে কিছু সমাধান:',
      image: 'https://images.unsplash.com/photo-1628352081506-83c43123ed6d?w=400&h=300&fit=crop'
    },
    {
      type: 'bot',
      text: 'আপনি কিভাবে কাজ করবেন তার বিস্তারিত জানান দিন:',
      options: [
        'সংক্রান্ত লক্ষণগুলি এবং কোন ঔষধ প্রয়োগ করবেন?',
        'এই সমস্যায় কি জৈব পদ্ধতিতে নিয়ন্ত্রণ করতে পারি?',
        'সংক্রামণ কি সম্পূর্ণরূপে ঠিক হবে?',
        'পাতার রোগ প্রতিরোধ করার জন্য কী করা উচিত?'
      ],
      selectedOption: 'এই সমস্যায় কি জৈব পদ্ধতিতে নিয়ন্ত্রণ করতে পারি?'
    },
    {
      type: 'bot',
      text: 'হ্যাঁ, আপনি জৈব পদ্ধতিতে কাজ করতে পারেন। আমরা সাহায্য করতে প্রস্তুত। এই বিশেষ পরিষেবা পেতে আপনার তথ্য ভাগ করে নিলে আমরা বিশদ পরামর্শ দিতে পারি।',
      buttons: ['হ্যাঁ, বিস্তারিত চাই', 'না, ধন্যবাদ']
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSendMessage = () => {
    if (inputText.trim()) {
      setMessages([...messages, { type: 'user', text: inputText }]);
      setInputText('');
    }
  };

  return (
    <div className="flex h-screen pt-16 sm:pt-20 lg:pt-24 bg-gray-100 relative">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:relative z-50 lg:z-auto w-64 lg:w-80 flex-shrink-0 transition-transform duration-300 ease-in-out`}
        style={{ backgroundColor: "#2D5016" }}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-4 border-b border-white border-opacity-20">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#F5F5DC" }}
                >
                  <svg className="w-5 h-5" style={{ color: "#2D5016" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <span className="text-white font-semibold">Home</span>
              </div>
              <button 
                className="lg:hidden text-white hover:bg-white hover:bg-opacity-20 p-1 rounded"
                onClick={() => setSidebarOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto p-4">
            <button className="w-full text-left px-3 py-2 mb-2 rounded-lg bg-white bg-opacity-20 text-white text-sm hover:bg-opacity-30 transition-all">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                <span>New Chat</span>
              </div>
            </button>

            <button className="w-full text-left px-3 py-2 mb-2 rounded-lg text-white text-sm hover:bg-white hover:bg-opacity-10 transition-all">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>Search Chat</span>
              </div>
            </button>

            <button className="w-full text-left px-3 py-2 mb-4 rounded-lg text-white text-sm hover:bg-white hover:bg-opacity-10 transition-all">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                </svg>
                <span>Uploaded Media</span>
              </div>
            </button>

            <div className="mb-4">
              <h3 className="text-white text-xs font-semibold mb-2 px-3">History</h3>
              <div className="space-y-1">
                <div className="px-3 py-2 bg-white bg-opacity-30 rounded-lg text-white text-sm">
                  How to fix yellow leaves
                </div>
                <div className="px-3 py-2 text-white text-sm hover:bg-white hover:bg-opacity-10 rounded-lg cursor-pointer">
                  Mango plant leaf issue
                </div>
                <div className="px-3 py-2 text-white text-sm hover:bg-white hover:bg-opacity-10 rounded-lg cursor-pointer">
                  গাছের রোগ দূর করার পদ্ধতি
                </div>
                <div className="px-3 py-2 text-white text-sm hover:bg-white hover:bg-opacity-10 rounded-lg cursor-pointer">
                  জৈব পদ্ধতিতে কীট নিয়ন্ত্রণ
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header with Menu Button */}
        <div className="lg:hidden bg-white border-b p-4 flex items-center justify-between">
          <h1 className="font-semibold" style={{ color: "#2D5016" }}>AI Chatbot</h1>
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-2 hover:bg-gray-100 rounded-lg"
            style={{ color: "#2D5016" }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <circle cx="5" cy="12" r="2"/>
              <circle cx="12" cy="12" r="2"/>
              <circle cx="19" cy="12" r="2"/>
            </svg>
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-2 sm:p-4 md:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4 lg:space-y-6">
            {messages.map((message, index) => (
              <div key={index} className="flex gap-2 sm:gap-3">
                {message.type === 'bot' && (
                  <div 
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#2D5016" }}
                  >
                    <svg className="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                )}
                
                <div className={`flex-1 min-w-0 ${message.type === 'user' ? 'flex justify-end' : ''}`}>
                  <div 
                    className={`inline-block rounded-2xl px-3 sm:px-4 py-2 sm:py-3 max-w-xs sm:max-w-md lg:max-w-2xl ${
                      message.type === 'user' 
                        ? 'text-white ml-auto' 
                        : 'bg-white'
                    }`}
                    style={message.type === 'user' ? { backgroundColor: "#2D5016" } : {}}
                  >
                    <p className="text-xs sm:text-sm md:text-base leading-relaxed">{message.text}</p>
                    
                    {message.image && (
                      <img 
                        src={message.image} 
                        alt="Plant issue" 
                        className="mt-2 sm:mt-3 rounded-lg w-full h-32 sm:h-40 md:h-48 object-cover"
                      />
                    )}
                    
                    {message.options && (
                      <div className="mt-2 sm:mt-3 space-y-1 sm:space-y-2">
                        {message.options.map((option, i) => (
                          <button
                            key={i}
                            className={`w-full text-left px-2 sm:px-3 lg:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm border transition-all ${
                              message.selectedOption === option
                                ? 'border-green-600 bg-green-50 text-green-800'
                                : 'border-gray-300 hover:border-gray-400'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="pr-2">{option}</span>
                              {message.selectedOption === option ? (
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                              ) : (
                                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              )}
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                    
                    {message.buttons && (
                      <div className="mt-2 sm:mt-3 flex flex-col sm:flex-row gap-2">
                        {message.buttons.map((button, i) => (
                          <button
                            key={i}
                            className={`px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                              i === 0
                                ? 'text-white hover:opacity-90'
                                : 'border-2 hover:bg-gray-50'
                            }`}
                            style={i === 0 ? { backgroundColor: "#2D5016", borderColor: "#2D5016" } : { borderColor: "#6B8E23", color: "#2D5016" }}
                          >
                            {button}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {message.type === 'user' && (
                  <div 
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: "#6B8E23" }}
                  >
                    <svg className="w-3 h-3 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Input Area */}
        <div className="border-t bg-white p-2 sm:p-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-1 sm:gap-2">
              <button 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 hover:opacity-90 transition-all"
                style={{ backgroundColor: "#2D5016" }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>

              <button 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 hover:opacity-90 transition-all"
                style={{ backgroundColor: "#2D5016" }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                </svg>
              </button>

              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="আপনার বার্তা লিখুন বা আপনার প্রশ্ন করুন....."
                className="flex-1 px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 text-xs sm:text-sm min-w-0"
                style={{ focusRingColor: "#2D5016" }}
              />

              <button 
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 hover:opacity-90 transition-all"
                style={{ backgroundColor: "#F5F5DC" }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: "#2D5016" }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </button>

              <button 
                onClick={handleSendMessage}
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 hover:opacity-90 transition-all"
                style={{ backgroundColor: "#2D5016" }}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
