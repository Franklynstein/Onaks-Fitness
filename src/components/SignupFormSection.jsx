import { useState } from 'react'

export default function SignupFormSection() {
  const [selectedGoal, setSelectedGoal] = useState(null)

  const goals = [
    { id: 'weight-loss', label: 'Weight Loss' },
    { id: 'build-muscle', label: 'Build muscle' },
    { id: 'healthy-lifestyle', label: 'Healthy lifestyle' }
  ]

  return (
    <section className="bg-[#050505] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-12">
          <span className="text-white">Sign up for my </span>
          <span className="text-[#00EB2B]">coaching</span>
          <span className="text-white"> here</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-white text-2xl mb-8">What is your primary fitness goal?</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {goals.map((goal, index) => (
              <button
                key={goal.id}
                className={`p-4 rounded-lg font-medium transition-all duration-200
                  ${index === 2 ? 'md:col-span-2' : ''}
                  ${selectedGoal === goal.id 
                    ? 'bg-[#C3C3C3] text-black border-2 border-[#C3C3C3]' 
                    : 'bg-[#1E271F] text-white border-2 border-transparent hover:border-[#C3C3C3]'
                  }`}
                onClick={() => setSelectedGoal(goal.id)}
              >
                {goal.label}
              </button>
            ))}
          </div>

          <div className="flex justify-between gap-4">
            <button className="px-8 py-3 rounded-lg bg-[#1E271F] text-white font-medium hover:bg-[#2a362c] transition-colors duration-200">
              Previous
            </button>
            <button className="px-8 py-3 rounded-lg bg-[#1E271F] text-white font-medium hover:bg-[#2a362c] transition-colors duration-200">
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 