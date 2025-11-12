'use client';

import { useState, useEffect, useRef } from 'react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

export default function AIChatbotPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'initial',
      role: 'assistant',
      content: 'আপনাকে স্বাগতম! আমি কৃষি বিষয়ক বিশেষজ্ঞ চ্যাটবট। আমি আপনার কৃষি সংক্রান্ত সকল প্রশ্নের উত্তর দিতে প্রস্তুত। আপনি যেকোনো প্রশ্ন করতে পারেন।',
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, userMessage].map(m => ({
            role: m.role,
            content: m.content
          }))
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to get response');
      }

      const data = await response.json();
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.message || 'দুঃখিত, আমি এই মুহূর্তে উত্তর দিতে পারছি না।',
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Chat error:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: 'দুঃখিত, একটি ত্রুটি ঘটেছে। অনুগ্রহ করে আবার চেষ্টা করুন।',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleNewChat = () => {
    setMessages([{
      id: 'initial',
      role: 'assistant',
      content: 'আপনাকে স্বাগতম! আমি কৃষি বিষয়ক বিশেষজ্ঞ চ্যাটবট। আমি আপনার কৃষি সংক্রান্ত সকল প্রশ্নের উত্তর দিতে প্রস্তুত। আপনি যেকোনো প্রশ্ন করতে পারেন।',
      timestamp: new Date()
    }]);
    setInput('');
  };

  const handleImageUpload = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'image/*';
    fileInput.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (file) {
        alert(`Image "${file.name}" selected. Image analysis feature coming soon!`);
      }
    };
    fileInput.click();
  };

  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      const recognition = new SpeechRecognition();
      recognition.lang = 'bn-BD';
      recognition.continuous = false;
      recognition.interimResults = false;
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInput(transcript);
      };
      
      recognition.onerror = (event: any) => {
        console.error('Speech recognition error:', event.error);
        alert('Voice recognition failed. Please try again.');
      };
      
      recognition.start();
    } else {
      alert('Speech recognition not supported in this browser');
    }
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex h-screen pt-16 sm:pt-20 lg:pt-24 bg-gradient-to-br from-green-50 via-green-50 to-green-100 relative">
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0 fixed lg:relative z-50 lg:z-auto w-72 lg:w-80 flex-shrink-0 transition-transform duration-300 ease-in-out shadow-2xl`}
        style={{ background: 'linear-gradient(135deg, #2D5016 0%, #1a3009 50%, #0f1a05 100%)' }}
      >
        <div className="h-full flex flex-col">
          {/* Header */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl flex items-center justify-center shadow-xl ring-4 ring-white/20" style={{ background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)' }}>
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-white font-bold text-xl tracking-tight">কৃষি AI</h2>
                  <p className="text-green-200 text-xs font-medium">Agricultural Expert</p>
                </div>
              </div>
              <button 
                className="lg:hidden text-white hover:bg-white/10 p-2 rounded-xl transition-all duration-200"
                onClick={() => setSidebarOpen(false)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
            <button 
              onClick={handleNewChat}
              className="w-full text-left px-5 py-4 rounded-2xl text-white text-sm font-semibold transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              style={{ 
                background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                '&:hover': { background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)' }
              }}
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <span>New Chat</span>
              </div>
            </button>

            <button 
              onClick={handleImageUpload}
              className="w-full text-left px-5 py-4 rounded-2xl text-white text-sm font-medium hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
            >
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>Upload Image</span>
              </div>
            </button>

            <div className="pt-6 border-t border-white/10 mt-4">
              <h3 className="text-green-200 text-xs font-bold mb-4 px-2 uppercase tracking-wider">Recent Conversations</h3>
              <div className="space-y-2">
                <div className="px-4 py-3 bg-gradient-to-r from-white/15 to-white/5 rounded-xl text-white text-sm border-l-4 border-green-400 hover:from-white/20 hover:to-white/10 transition-all cursor-pointer">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-semibold">Plant Disease Help</span>
                  </div>
                  <p className="text-white/70 text-xs">How to fix yellow leaves</p>
                </div>
                <div className="px-4 py-3 text-white/80 text-sm hover:bg-white/10 rounded-xl cursor-pointer transition-all duration-200">
                  <span>Mango plant leaf issue</span>
                </div>
                <div className="px-4 py-3 text-white/80 text-sm hover:bg-white/10 rounded-xl cursor-pointer transition-all duration-200">
                  <span>গাছের রোগ দূর করার পদ্ধতি</span>
                </div>
                <div className="px-4 py-3 text-white/80 text-sm hover:bg-white/10 rounded-xl cursor-pointer transition-all duration-200">
                  <span>জৈব পদ্ধতিতে কীট নিয়ন্ত্রণ</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="p-4 border-t border-white/10 bg-black/20">
            <div className="text-xs text-white/60 text-center">
              <p className="font-medium">Powered by DeepSeek R1</p>
              <p className="text-white/40 mt-1">Agricultural AI Expert</p>
            </div>
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Mobile Header */}
        <div className="lg:hidden bg-white/80 backdrop-blur-xl border-b border-green-100 p-4 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl flex items-center justify-center shadow-lg" style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}>
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <div>
              <h1 className="font-bold text-lg" style={{ color: '#2D5016' }}>কৃষি Chatbot</h1>
              <p className="text-xs text-green-600">Agricultural Expert</p>
            </div>
          </div>
          <button 
            onClick={() => setSidebarOpen(true)}
            className="p-2.5 hover:bg-green-50 rounded-xl transition-all duration-200 text-green-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
          <div className="max-w-4xl mx-auto space-y-6">
            {messages.map((m) => (
              <div key={m.id} className={`flex gap-4 ${m.role === 'user' ? 'flex-row-reverse' : ''} group animate-fadeIn`}>
                <div className="flex-shrink-0">
                  <div 
                    className={`w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-200 ${
                      m.role === 'assistant'
                        ? 'ring-4 ring-green-100'
                        : 'ring-4 ring-amber-100'
                    }`}
                    style={{
                      background: m.role === 'assistant' 
                        ? 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)'
                        : 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
                    }}
                  >
                    {m.role === 'assistant' ? (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    )}
                  </div>
                </div>
                
                <div className="flex-1 min-w-0">
                  <div 
                    className={`inline-block rounded-3xl px-6 py-4 max-w-2xl shadow-lg transition-all duration-200 group-hover:shadow-xl ${
                      m.role === 'user' 
                        ? 'text-white ml-auto' 
                        : 'bg-white border-2 border-green-100 text-gray-800'
                    }`}
                    style={m.role === 'user' ? { background: 'linear-gradient(135deg, #2D5016 0%, #1a3009 100%)' } : {}}
                  >
                    <p className="text-sm leading-relaxed whitespace-pre-wrap">
                      {m.content}
                    </p>
                    <div className={`text-xs mt-2 ${m.role === 'user' ? 'text-white/70' : 'text-gray-400'}`}>
                      {m.timestamp.toLocaleTimeString('en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit',
                        hour12: true 
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            
            {isLoading && (
              <div className="flex gap-4 group">
                <div className="flex-shrink-0">
                  <div className="w-11 h-11 rounded-2xl flex items-center justify-center shadow-lg ring-4 ring-green-100 animate-pulse" style={{ background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)' }}>
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                </div>
                <div className="bg-white border-2 border-green-100 rounded-3xl px-6 py-4 shadow-lg">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </div>

        {/* Input Area */}
        <form 
          onSubmit={handleSubmit} 
          className="border-t border-green-100 bg-white/90 backdrop-blur-xl p-4 sm:p-6 shadow-2xl"
        >
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 bg-white rounded-3xl shadow-xl border-2 border-green-200 p-2 hover:border-green-300 transition-all duration-200">
              <button 
                type="button"
                onClick={handleImageUpload}
                className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 hover:scale-110 active:scale-95 transition-all duration-200 shadow-lg group"
                style={{ 
                  background: 'linear-gradient(135deg, #22c55e 0%, #16a34a 100%)',
                  '&:hover': { background: 'linear-gradient(135deg, #4ade80 0%, #22c55e 100%)' }
                }}
              >
                <svg className="w-5 h-5 text-white group-hover:rotate-12 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </button>

              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="আপনার প্রশ্ন লিখুন... (Type in Bengali or English)"
                className="flex-1 px-4 py-3 bg-transparent border-none focus:outline-none text-gray-800 placeholder-gray-400 text-sm min-w-0"
                disabled={isLoading}
              />

              <button 
                type="button"
                onClick={handleVoiceInput}
                className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0 bg-gradient-to-br from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 hover:scale-110 active:scale-95 transition-all duration-200 shadow-lg group"
              >
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                </svg>
              </button>

              <button 
                type="submit"
                disabled={!input?.trim() || isLoading}
                className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 hover:scale-110 active:scale-95 transition-all duration-200 shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 group"
                style={{ 
                  background: 'linear-gradient(135deg, #2D5016 0%, #1a3009 100%)',
                  '&:hover': { background: 'linear-gradient(135deg, #22c55e 0%, #2D5016 100%)' }
                }}
              >
                <svg className="w-6 h-6 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.3);
        }
      `}</style>
    </div>
  );
}