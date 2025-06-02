import iPhone13Pro from '../assets/iPhone13Pro.png'

export default function BenefitsSection() {
  const benefits = [
    {
      title: "Workout Plans Made For You",
      description: "Whatever your experience level I'll create the plan fit for you to win!"
    },
    {
      title: "Your Own Meal Plan",
      description: "You'll get a customized meal plan based on your specific fitness goals"
    },
    {
      title: "We Track Your Progress Together",
      description: "Weekly check-ins to make sure that you're on track and progressing"
    },
    {
      title: "Continuous Communication",
      description: "Anytime, you'll have a direct place to chat with ya boy!"
    }
  ]

  return (
    <section className="bg-[#1B1B1B] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold text-white">
              What You'll Get With<br />
              <span className="text-[#00EB2B]">1 - on - 1 Coaching</span>
            </h2>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="text-xl font-bold text-white">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <img 
              src={iPhone13Pro} 
              alt="Coaching App Interface" 
              className="w-full max-w-xl scale-110"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 