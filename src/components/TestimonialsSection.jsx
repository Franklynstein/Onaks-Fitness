export default function TestimonialsSection() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-24 h-24 rounded-full bg-gray-300 flex items-center justify-center text-gray-500">
              Profile
            </div>
            <div className="text-center md:text-left">
              <blockquote className="text-2xl font-semibold text-gray-900 mb-4">
                "Onaks helped me lose 15kg in just 4 months!"
              </blockquote>
              <p className="text-gray-600">– Sarah, 34</p>
              <p className="text-gray-500 mt-2">Full-time mom and fitness enthusiast</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-200">
            See More Results
          </button>
        </div>
      </div>
    </section>
  )
} 