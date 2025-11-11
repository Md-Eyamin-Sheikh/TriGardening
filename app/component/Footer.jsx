'use client';

import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-green-800 to-green-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-white rounded-full p-2 w-10 h-10 flex items-center justify-center shadow-lg">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-green-700" fill="currentColor">
                  <path d="M17,8C8,10,5.9,16.17,3.82,21.34L5.71,22L6.66,19.7C7.14,19.87,7.64,20,8,20C19,20,22,3,22,3C21,5,14,5.25,9,6.25C4,7.25,2,11.5,2,13.5C2,15.5,3.75,17.25,3.75,17.25C7,8,17,8,17,8Z" />
                </svg>
              </div>
              <span className="text-2xl font-bold">TriGardening</span>
            </div>
            <p className="text-white/80 text-base leading-relaxed">
              Your slogan goes here
            </p>
            <p className="text-white/70 text-sm leading-relaxed pt-2">
              Cultivating green spaces and nurturing nature's beauty. Your trusted partner for all gardening needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-white/80 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-white/80 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Contact
                </a>
              </li>
              <li>
                <a href="#shipping" className="text-white/80 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Shippings
                </a>
              </li>
              <li>
                <a href="#referral" className="text-white/80 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Referral Program
                </a>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-xl font-bold mb-6">Categories</h3>
            <ul className="space-y-3">
              <li>
                <a href="#plants" className="text-white/80 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Plants
                </a>
              </li>
              <li>
                <a href="#tools" className="text-white/80 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Tools
                </a>
              </li>
              <li>
                <a href="#fertilizers" className="text-white/80 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Fertilizers
                </a>
              </li>
              <li>
                <a href="#pesticides" className="text-white/80 hover:text-orange-400 transition-colors duration-300 flex items-center group">
                  <span className="w-0 group-hover:w-2 h-0.5 bg-orange-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                  Pesticides
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
            
            {/* Social Media Icons */}
            <div className="flex gap-3 mb-6">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-orange-500 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-orange-500 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-orange-500 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
              >
                <Twitter className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-orange-500 p-3 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg group"
              >
                <Youtube className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <a 
                href="mailto:supprot@trigardening.com" 
                className="flex items-center text-white/80 hover:text-orange-400 transition-colors duration-300 group"
              >
                <Mail className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm">supprot@trigardening.com</span>
              </a>
              
              <div className="pt-4 border-t border-white/20">
                <p className="text-lg font-semibold mb-2">Call Now</p>
                <a 
                  href="tel:+8801234567890" 
                  className="flex items-center text-white hover:text-orange-400 transition-colors duration-300 group text-lg font-medium"
                >
                  <Phone className="w-5 h-5 mr-3 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                  +8801234567890
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm text-center md:text-left">
              © {currentYear} TriGardening. All Rights Reserved
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#privacy" className="text-white/70 hover:text-orange-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#terms" className="text-white/70 hover:text-orange-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#cookies" className="text-white/70 hover:text-orange-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}