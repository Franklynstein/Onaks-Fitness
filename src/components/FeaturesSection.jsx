export default function FeaturesSection() {
  const features = {
    weightLoss: [
      "Customized meal plans",
      "Weekly progress tracking",
      "Exercise programming",
      "Accountability check-ins"
    ],
    leanBulking: [
      "Muscle gain strategies",
      "Nutrition optimization",
      "Strength training programs",
      "Recovery protocols"
    ]
  }

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Weight Loss</h3>
            <ul className="space-y-4">
              {features.weightLoss.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Lean Bulking</h3>
            <ul className="space-y-4">
              {features.leanBulking.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-red-600 mr-2">•</span>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="text-center mt-12">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-200">
            Start Your Coaching Journey
          </button>
        </div>
      </div>
    </section>
  )
} 