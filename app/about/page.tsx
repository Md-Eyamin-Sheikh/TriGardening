export default function AboutPage() {
  const teamMembers = [
    {
      name: "Aminul Islam Sagor",
      role: "CEO & Gardening Expert",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&h=300&fit=crop",
      description: "With years of hands on gardening experience, Sagor leads Tijgardening with passion and expertise, ensuring our customers always get the best advice, experience and quality."
    },
    {
      name: "Marium Nipu",
      role: "Plant Care Specialist",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop",
      description: "From creative gardening blogs to personalized plant consultancy, Nipu helps our community learn, grow, and stay inspired."
    },
    {
      name: "Another Person",
      role: "Designation",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop",
      description: "With years of hands on gardening experience, Sagor leads Tijgardening with passion and expertise, ensuring our customers always get the best advice, experience and quality."
    }
  ];

  return (
    <div className="min-h-screen pt-16 sm:pt-20 lg:pt-20 bg-white">
      {/* Hero Section */}
      <div 
        className="relative h-[300px] sm:h-[400px] lg:h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1600&h=900&fit=crop')",
          backgroundBlendMode: "overlay",
          backgroundColor: "rgba(0,0,0,0.4)"
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
        <div className="text-center text-white px-4 sm:px-6 lg:px-8 z-10 relative max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 leading-tight">
            Your Trusted Partner in<br className="hidden sm:block" />Gardening
          </h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Cultivating expertise, growing communities, and nurturing your<br className="hidden sm:block" />
            green dreams for over a decade
          </p>
          <button 
            className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-white font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base"
            style={{ backgroundColor: "#F5A623" }}
          >
            Meet Our Team
          </button>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1600px] mx-auto">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-3 sm:mb-4"
            style={{ color: "#2D5016" }}
          >
            Meet Our Gardening Experts
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Our passionate team of horticulturists and plant specialists brings years of combined experience to help your garden flourish
          </p>

          {/* Team Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                className="rounded-lg p-6 sm:p-8 text-center shadow-sm hover:shadow-md transition-shadow"
                style={{ backgroundColor: "#F5F5DC" }}
              >
                <div className="mb-4 sm:mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 sm:w-32 sm:h-32 rounded-full mx-auto object-cover border-4 border-white shadow-md"
                  />
                </div>
                <h3 
                  className="text-lg sm:text-xl font-bold mb-2"
                  style={{ color: "#2D5016" }}
                >
                  {member.name}
                </h3>
                <p 
                  className="text-xs sm:text-sm font-semibold mb-3 sm:mb-4"
                  style={{ color: "#6B8E23" }}
                >
                  {member.role}
                </p>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Commitment Section */}
      <div 
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#F5F5DC" }}
      >
        <div className="max-w-[1600px] mx-auto">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4"
            style={{ color: "#2D5016" }}
          >
            Our Commitment to You
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            We&apos;re dedicated to providing you with the knowledge, tools, and support needed for gardening success
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="mb-3 sm:mb-4 flex justify-center">
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#2D5016" }}
                >
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 
                className="text-base sm:text-lg font-bold mb-2 sm:mb-3"
                style={{ color: "#2D5016" }}
              >
                Plant Clinic Analysis
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Get expert diagnosis for plant problems with our comprehensive AI analysis service. Upload photos and receive detailed treatment plans.
              </p>
            </div>

            <div className="text-center">
              <div className="mb-3 sm:mb-4 flex justify-center">
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#2D5016" }}
                >
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
              </div>
              <h3 
                className="text-base sm:text-lg font-bold mb-2 sm:mb-3"
                style={{ color: "#2D5016" }}
              >
                Expert Blog Content
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                Access weekly articles, seasonal guides, and in-depth tutorials written by our certified horticulturists and plant specialists.
              </p>
            </div>

            <div className="text-center sm:col-span-2 lg:col-span-1">
              <div className="mb-3 sm:mb-4 flex justify-center">
                <div 
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#2D5016" }}
                >
                  <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
                  </svg>
                </div>
              </div>
              <h3 
                className="text-base sm:text-lg font-bold mb-2 sm:mb-3"
                style={{ color: "#2D5016" }}
              >
                Satisfaction Guarantee
              </h3>
              <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                We stand behind our advice and products. If you&apos;re not completely satisfied, we&apos;ll work with you until we find the right solution.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div 
        className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8"
        style={{ backgroundColor: "#6B8E23" }}
      >
        <div className="max-w-[1400px] mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4 text-white">
            Join Our TriGardening Community
          </h2>
          <p className="text-center text-white mb-8 sm:mb-12 max-w-2xl mx-auto text-sm sm:text-base opacity-90 leading-relaxed">
            We&apos;re dedicated to providing you with the knowledge, tools, and support needed for gardening success
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#2D5016" }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Facebook Community Forum</h3>
                  <p className="text-white text-xs sm:text-sm opacity-90 leading-relaxed">
                    Connect with 10,000+ gardeners across the Bangladesh. Ask questions, share tips, and celebrate your growing journey.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: "#2D5016" }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-1 sm:mb-2">Trigardening Youtube Channel</h3>
                  <p className="text-white text-xs sm:text-sm opacity-90 leading-relaxed">
                    Join us on YouTube for quick gardening tips, tricks and guides to grow smarter.
                  </p>
                </div>
              </div>

              <div className="pt-2 sm:pt-4">
                <button 
                  className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base"
                  style={{ backgroundColor: "#F5F5DC", color: "#2D5016" }}
                >
                  Join Our Community
                </button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <img
                src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=600&h=400&fit=crop"
                alt="Garden path"
                className="rounded-2xl shadow-lg w-full max-w-md h-64 sm:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-[1400px] mx-auto">
          <h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-3 sm:mb-4"
            style={{ color: "#2D5016" }}
          >
            Get In Touch
          </h2>
          <p className="text-center text-gray-600 mb-8 sm:mb-12 text-sm sm:text-base leading-relaxed">
            Have questions? We&apos;re here to help you grow your gardening knowledge
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#6B8E23" }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base" style={{ color: "#2D5016" }}>Phone</h3>
                  <p className="text-gray-600 text-sm sm:text-base">01712-452342</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#6B8E23" }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base" style={{ color: "#2D5016" }}>Facebook Page</h3>
                  <p className="text-gray-600 text-sm sm:text-base">fb.com/gardening.tri</p>
                </div>
              </div>

              <div className="flex items-center gap-3 sm:gap-4">
                <div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: "#6B8E23" }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-sm sm:text-base" style={{ color: "#2D5016" }}>Whatsapp</h3>
                  <p className="text-gray-600 text-sm sm:text-base">01712-452342</p>
                </div>
              </div>
            </div>

            <div 
              className="rounded-2xl p-4 sm:p-6 md:p-8"
              style={{ backgroundColor: "#F5F5DC" }}
            >
              <form className="space-y-3 sm:space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-gray-800 border border-gray-300 focus:outline-none focus:ring-2 text-sm sm:text-base"
                    style={{ focusRing: "#2D5016" }}
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 text-sm sm:text-base"
                    style={{ focusRing: "#2D5016" }}
                  />
                </div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 text-sm sm:text-base"
                  style={{ focusRing: "#2D5016" }}
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-gray-800 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 text-sm sm:text-base resize-none"
                  style={{ focusRing: "#2D5016" }}
                />
                <button
                  type="submit"
                  className="w-full py-2.5 sm:py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity text-sm sm:text-base"
                  style={{ backgroundColor: "#6B8E23" }}
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}