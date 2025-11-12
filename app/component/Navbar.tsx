'use client';

import { useState, useEffect } from 'react';
import { Search, ShoppingCart, User, Phone, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeLink, setActiveLink] = useState('#home');

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'backdrop-blur-md shadow-lg' : ''
    }`} style={{
      backgroundColor: scrolled ? '#2D5016E6' : '#2D5016'
    }}>
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-md group-hover:bg-white/30 transition-all duration-300"></div>
              <div className="relative bg-white rounded-full p-2.5 w-11 h-11 flex items-center justify-center shadow-lg transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#2D5016">
                  <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22L6.66,19.7C7.14,19.87,7.64,20,8,20C19,20,22,3,22,3C21,5,14,5.25,9,6.25C4,7.25,2,11.5,2,13.5C2,15.5,3.75,17.25,3.75,17.25C7,8,17,8,17,8Z" />
                </svg>
              </div>
            </div>
            <span className="text-white text-2xl font-bold tracking-tight group-hover:text-orange-300 transition-colors duration-300">
              TriGardening
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            <NavLink href="/" active={activeLink === '/'} onClick={() => setActiveLink('/')}>Home</NavLink>
            <NavLink href="/products" active={activeLink === '/products'} onClick={() => setActiveLink('/products')}>Products</NavLink>
            <NavLink href="/blog" active={activeLink === '/blog'} onClick={() => setActiveLink('/blog')}>Blog</NavLink>
            <NavLink href="/ai-chatbot" active={activeLink === '/ai-chatbot'} onClick={() => setActiveLink('/ai-chatbot')}>Plant Clinic</NavLink>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-3 lg:space-x-4">
            {/* Call Now Button */}
            <button className="hidden md:flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-5 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 group">
              <Phone className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              <span>Call Now</span>
            </button>

            {/* Search Bar */}
            <div className="hidden xl:flex items-center bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2.5 w-72 hover:bg-white/15 hover:border-white/40 transition-all duration-300 focus-within:bg-white focus-within:border-white group">
              {mounted && (
                <input
                  type="text"
                  placeholder="Search plants, tools"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-white placeholder-white/70 outline-none flex-1 text-sm focus:text-[#2D5016] focus:placeholder-[#2D5016]"
                />
              )}
              <button className="ml-2 hover:scale-110 transition-transform duration-200">
                <Search className="w-4 h-4 text-white/70 group-focus-within:text-[#2D5016]" />
              </button>
            </div>

            {/* Search Icon (Mobile/Tablet) */}
            <button className="xl:hidden text-white hover:text-orange-300 p-2 hover:bg-white/10 rounded-full transition-all duration-300">
              <Search className="w-5 h-5" />
            </button>

            {/* Cart Icon with Badge */}
            <button className="relative text-white hover:text-orange-300 p-2 hover:bg-white/10 rounded-full transition-all duration-300 group">
              <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              <span className="absolute -top-1 -right-1 bg-gradient-to-r from-orange-500 to-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold shadow-lg animate-pulse">
                3
              </span>
            </button>

            {/* User Icon */}
            <button className="text-white hover:text-orange-300 p-2 hover:bg-white/10 rounded-full transition-all duration-300 group">
              <User className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
            </button>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-all duration-300"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden overflow-hidden transition-all duration-300 ${
        mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <div className="px-4 pt-2 pb-4 space-y-1 backdrop-blur-md border-t border-white/10" style={{backgroundColor: '#2D5016CC'}}>
          <MobileNavLink href="/" active={activeLink === '/'} onClick={() => { setActiveLink('/'); setMobileMenuOpen(false); }}>
            Home
          </MobileNavLink>
          <MobileNavLink href="/products" active={activeLink === '/products'} onClick={() => { setActiveLink('/products'); setMobileMenuOpen(false); }}>
            Products
          </MobileNavLink>
          <MobileNavLink href="/blog" active={activeLink === '/blog'} onClick={() => { setActiveLink('/blog'); setMobileMenuOpen(false); }}>
            Blog
          </MobileNavLink>
          <MobileNavLink href="/ai-chatbot" active={activeLink === '/ai-chatbot'} onClick={() => { setActiveLink('/ai-chatbot'); setMobileMenuOpen(false); }}>
            Plant Clinic
          </MobileNavLink>
          
          {/* Mobile Search */}
          <div className="pt-3 pb-2">
            <div className="flex items-center bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-4 py-2.5 focus-within:bg-white focus-within:border-white group">
              {mounted && (
                <input
                  type="text"
                  placeholder="Search plants, tools"
                  className="bg-transparent text-white placeholder-white/70 outline-none flex-1 text-sm focus:text-[#2D5016] focus:placeholder-[#2D5016]"
                />
              )}
              <Search className="w-4 h-4 text-white/70 ml-2 group-focus-within:text-[#2D5016]" />
            </div>
          </div>

          {/* Mobile Call Button */}
          <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-5 py-3 rounded-full font-semibold shadow-lg mt-2">
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

function MobileNavLink({ href, children, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="block px-4 py-3 text-white font-medium hover:bg-white/10 hover:text-orange-300 rounded-lg transition-all duration-300"
    >
      {children}
    </a>
  );
}

function NavLink({ href, children, active, onClick }) {
  return (
    <a
      href={href}
      onClick={onClick}
      className={`relative px-4 py-2 text-white font-medium text-[15px] rounded-lg transition-all duration-300 group ${
        active ? 'text-orange-300' : 'hover:text-orange-300'
      }`}
    >
      <span className="relative z-10">{children}</span>
      <span className={`absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-all duration-300 ${
        active ? 'bg-white/10' : ''
      }`}></span>
      <span className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-orange-400 group-hover:w-3/4 transition-all duration-300 ${
        active ? 'w-3/4' : ''
      }`}></span>
    </a>
  );
}