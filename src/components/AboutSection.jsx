export default function AboutSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600">My Fitness Journey</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-300 h-80 rounded-lg flex items-center justify-center text-gray-500">
            Trainer Photo
          </div>
          <div className="space-y-4">
            <p className="text-gray-700">
              After struggling with my own weight and fitness journey, I discovered the power of proper nutrition and consistent training. My transformation from being overweight to becoming a certified personal trainer has given me unique insights into the challenges people face.
            </p>
            <p className="text-gray-700">
              I believe in a holistic approach to fitness that combines science-based nutrition, effective training methods, and sustainable lifestyle changes. My goal is to help you achieve lasting results while developing a healthy relationship with food and exercise.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 