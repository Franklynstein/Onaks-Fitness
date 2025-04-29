export default function HeroSection() {
  return (
    <section className="bg-[#2d3e50] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white">
              BUILD DIFFERENT
            </h1>
            <p className="text-xl text-gray-300">
              Transform your body and mind with personalized coaching and proven strategies.
            </p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-200">
              Start Your Journey
            </button>
          </div>
          <div className="bg-gray-700 h-80 rounded-lg flex items-center justify-center text-gray-400">
            Your Transformation Photo
          </div>
        </div>
      </div>
    </section>
  )
} 