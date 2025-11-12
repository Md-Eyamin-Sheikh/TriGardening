'use client';

const categories = [
  {
    id: 1,
    icon: '/icon/icon1.png',
    title: 'Plants',
    description: 'Indoor & Outdoor Plants for every space',
    color: 'bg-white'
  },
  {
    id: 2,
    icon: '/icon/icon2.png',
    title: 'Medicine',
    description: 'Natural Plant Care Solutions',
    color: 'bg-white'
  },
  {
    id: 3,
    icon: '/icon/icon3.png',
    title: 'Equipment',
    description: 'Professional Gardening tools',
    color: 'bg-white'
  },
  {
    id: 4,
    icon: '/icon/icon4.png',
    title: 'Fertilizers',
    description: 'Safe & effective plant protection',
    color: 'bg-white'
  }
];

export default function ShopByCategory() {
  return (
    <section className="py-16 lg:py-24 bg-white" >
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-green-900 mb-4">
            Shop by Category
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
          {categories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div
                key={category.id}
                className="group relative rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, #F5F5DC, #F5F5DC)`,
                  animationDelay: `${index * 100}ms`
                }}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Animated Circle Background */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-200/30 to-transparent rounded-full blur-2xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700"></div>
                
                {/* Icon Container */}
                <div className="relative mb-6 flex justify-center">
                  <div className={`w-14 h-14 md:h-20 md:w-20 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center shadow-lg group-hover:shadow-2xl group-hover:scale-110 transition-all duration-500 group-hover:rotate-6`}>
                    <img src={category.icon} alt={category.title} className="w-8 h-8 md:h-10 md:w-10" />
                  </div>
                </div>

                {/* Content */}
                <div className="relative text-center space-y-3 ">
                  <h3 className="text-xl font-bold text-green-900 group-hover:text-green-700 transition-colors duration-300">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {category.description}
                  </p>
                </div>

                {/* Hover Arrow */}
                <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                  <svg className="w-6 h-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>

                {/* Bottom Border Animation */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-full"></div>
              </div>
            );
          })}
        </div>

        {/* View All Button */}
        {/* <div className="text-center mt-12">
          <button className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl hover:from-green-700 hover:to-green-800 transition-all duration-300 hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center gap-2">
              Browse All Categories
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div> */}
      </div>
    </section>
  );
}