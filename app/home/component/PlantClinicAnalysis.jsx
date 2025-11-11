'use client';

import { useState } from 'react';
import { Camera, Upload, X, CheckCircle, AlertCircle } from 'lucide-react';

export default function PlantClinicAnalysis() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDiagnose = () => {
    setIsAnalyzing(true);
    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false);
    }, 2000);
  };

  const clearImage = () => {
    setSelectedImage(null);
  };

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="space-y-8">
            {/* Title */}
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-green-900 mb-6 leading-tight">
                Plant Clinic Analysis
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 rounded-full mb-6"></div>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              Upload a photo of your plant and get instant AI-powered diagnosis with treatment recommendations from our experts
            </p>

            {/* Features List */}
            <div className="space-y-4">
              <div className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-gray-700">Instant AI-powered plant disease detection</p>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-gray-700">Expert treatment recommendations</p>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors duration-300">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <p className="text-gray-700">24/7 available plant health analysis</p>
              </div>
            </div>

            {/* Upload Options */}
            {!selectedImage ? (
              <div className="space-y-4">
                {/* Drag & Drop Area */}
                <div
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  className={`border-3 border-dashed rounded-2xl p-8 text-center transition-all duration-300 ${
                    isDragging
                      ? 'border-green-500 bg-green-50'
                      : 'border-gray-300 bg-gray-50 hover:border-green-400 hover:bg-green-50/50'
                  }`}
                >
                  <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-600 mb-2">Drag and drop your plant photo here</p>
                  <p className="text-sm text-gray-500">or</p>
                </div>

                {/* Upload Button */}
                <label className="block">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <div className="group cursor-pointer inline-flex items-center gap-3 bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 hover:scale-105">
                    <Camera className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                    <span>Diagnose Your Plant</span>
                  </div>
                </label>
              </div>
            ) : (
              /* Image Preview & Actions */
              <div className="space-y-4">
                <div className="relative bg-gray-100 rounded-2xl overflow-hidden">
                  <img
                    src={selectedImage}
                    alt="Uploaded plant"
                    className="w-full h-64 object-cover"
                  />
                  <button
                    onClick={clearImage}
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-white transition-all duration-300 hover:scale-110"
                  >
                    <X className="w-5 h-5 text-gray-700" />
                  </button>
                </div>

                <button
                  onClick={handleDiagnose}
                  disabled={isAnalyzing}
                  className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-orange-700 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                >
                  {isAnalyzing ? (
                    <>
                      <div className="w-5 h-5 border-3 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Analyzing...</span>
                    </>
                  ) : (
                    <>
                      <AlertCircle className="w-5 h-5" />
                      <span>Start Diagnosis</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>

          {/* Right Image */}
          <div className="relative group">
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-72 h-72 bg-green-200/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-72 h-72 bg-orange-200/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-[1.02]">
              <img
                src="/69278c37f3cf59dff2e1e308234ce6beaca59398.jpg"
                alt="Lush green plants"
                className="w-full h-[500px] object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/40 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md px-6 py-3 rounded-full shadow-xl">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-gray-800">AI-Powered Analysis</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}