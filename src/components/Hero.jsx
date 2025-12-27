 function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 opacity-40"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: "2s"}}></div>

      <div className="relative z-10 text-center space-y-8 container mx-auto px-4">
        {/* Main heading with gradient */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-purple-500 bg-clip-text text-transparent animate-fade-in">
            Precious Oghenedoro Ayigbe
          </h1>
          
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="text-xl md:text-2xl font-bold text-white">Frontend Developer</span>
            <span className="text-2xl">👨‍💻</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 text-lg md:text-xl lg:text-2xl max-w-2xl mx-auto leading-relaxed">
          I build clean, responsive, and modern web interfaces with a focus on user experience and pixel-perfect design.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 my-8 max-w-md mx-auto">
          <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-4 hover:border-pink-500 transition">
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">5+</p>
            <p className="text-gray-400 text-sm mt-2">Projects</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-4 hover:border-pink-500 transition">
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">2+</p>
            <p className="text-gray-400 text-sm mt-2">Years</p>
          </div>
          <div className="bg-gray-800/50 backdrop-blur border border-gray-700 rounded-xl p-4 hover:border-pink-500 transition">
            <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">100%</p>
            <p className="text-gray-400 text-sm mt-2">Dedicated</p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#projects"
            className="group relative px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
          >
            <span className="relative flex items-center gap-2">
              View My Work
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </span>
          </a>
          
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-pink-400 text-pink-400 hover:bg-pink-400 hover:text-gray-900 font-bold rounded-lg transition-all duration-300"
          >
            Get In Touch
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="flex justify-center mt-12 animate-bounce">
          <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}

export default Hero;