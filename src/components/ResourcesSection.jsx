import { Calculator, Dumbbell } from 'lucide-react'

export default function ResourcesSection() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Free Resources
          </h2>
          <p className="text-xl text-gray-600">
            Tools to get you started on your fitness journey — no strings attached.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <Calculator size={40} className="text-red-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Calorie Calculator</h3>
            <p className="text-gray-600">Calculate your daily calorie needs and macros</p>
          </div>
          <div className="bg-gray-50 p-8 rounded-lg">
            <Dumbbell size={40} className="text-red-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Free Workout Program</h3>
            <p className="text-gray-600">Get started with our beginner-friendly workout plan</p>
          </div>
        </div>

        <div className="text-center">
          <button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-md font-semibold transition-colors duration-200">
            Access Free Resources
          </button>
        </div>
      </div>
    </section>
  )
} 