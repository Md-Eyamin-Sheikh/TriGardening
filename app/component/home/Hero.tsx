'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: 'https://i.postimg.cc/W4SLy5pq/vecteezy-young-green-plant-growing-in-soil-against-vibrant-gradient-49016724.jpg',
    title: 'Nurture Your Green Paradise',
    subtitle: 'Your slogan goes here'
  },
  {
    id: 2,
    image: 'https://i.postimg.cc/3wwYYscS/vecteezy-a-young-plant-emerges-from-rich-soil-under-soft-sunlight-in-51128574.jpg',
    title: 'Grow Your Dreams',
    subtitle: 'Sustainable gardening solutions'
  },
  {
    id: 3,
    image: 'https://i.postimg.cc/MGX2hyn4/vecteezy-hand-holding-green-plant-with-leaves-in-a-lush-natural-71818375.jpg',
    title: 'Nature in Your Hands',
    subtitle: 'Expert care for every plant'
  },
  {
    id: 4,
    image: 'https://i.postimg.cc/ZqW2f4gZ/df38d26e0c5ef04b9b5553d026576f188ccf887d.jpg',
    title: 'Cultivate Beauty',
    subtitle: 'Transform your garden today'
  }
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const goToSlide = (index) => {
    if (isAnimating || index === currentSlide) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide, isAutoPlaying, nextSlide]);

  return (
    <div className="relative w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] mt-20 overflow-hidden bg-gray-900">
      {/* Background Images with Overlay */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? 'opacity-100 scale-100'
              : 'opacity-0 scale-105'
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30 z-10"></div>
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-[250px] sm:h-[350px] md:h-[500px] lg:h-[600px] object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 h-full flex items-center pb-7">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-3xl">
            {/* Title */}
            <h1 
              className={`text-white text-3xl sm:text-4xl lg:text-7xl font-bold mb-2 transition-all duration-700 ${
                isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              {slides[currentSlide].title}
            </h1>

            {/* Subtitle */}
            <p 
              className={`text-white/90 text-xl sm:text-2xl mb-10 transition-all duration-700 ${
                isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
              }`}
              style={{ transitionDelay: '200ms' }}
            >
              {slides[currentSlide].subtitle}
            </p>

            {/* CTA Buttons */}
            <div 
              className={`flex flex-row sm:flex-row gap-4 transition-all duration-700 ${
                isAnimating ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'
              }`}
              style={{ transitionDelay: '300ms' }}
            >
              <button 
                onClick={() => setIsAutoPlaying(false)}
                className="group relative px-2  md:px-8 md:py-4 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-lg font-semibold rounded-full overflow-hidden shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Shop Now</span>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-orange-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>
              
              <button 
                onClick={() => setIsAutoPlaying(false)}
                className="group relative px-2  md:px-4  bg-white/10 backdrop-blur-sm text-white text-lg font-semibold rounded-full border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:scale-105 shadow-xl"
              >
                Call Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 sm:p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-xl group"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-8 group-hover:-translate-x-1 transition-transform duration-300" />
      </button>

      <button
        onClick={nextSlide}
        onMouseEnter={() => setIsAutoPlaying(false)}
        className="absolute right-4  sm:right-8 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white p-3 sm:p-4 rounded-full transition-all duration-300 hover:scale-110 shadow-xl group"
      >
        <ChevronRight className="w-6 h-6 md:w-10 md:h-8 sm:w-8 sm:h-8 group-hover:translate-x-1 transition-transform duration-300" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 sm:bottom-12 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              goToSlide(index);
              setIsAutoPlaying(false);
            }}
            className={`group transition-all duration-300 ${
              index === currentSlide ? 'w-12' : 'w-3'
            }`}
          >
            <div
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-orange-500 shadow-lg shadow-orange-500/50'
                  : 'bg-white/50 hover:bg-white/70'
              }`}
            ></div>
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-8 z-30 hidden lg:flex flex-col items-center gap-2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/70 rounded-full animate-pulse"></div>
        </div>
        <span className="text-white/70 text-xs font-medium">Scroll</span>
      </div>
    </div>
  );
}