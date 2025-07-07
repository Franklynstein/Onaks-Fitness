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
      <div className="max-w-6xl mx-auto px-[7vw] sm:px-6 lg:px-8">
        <div className="flex flex-col md:grid md:grid-cols-2 gap-12 items-center">
          {/* Image on top for mobile */}
          <div className="relative flex justify-center order-1 md:order-none mb-8 md:mb-0">
            <img 
              src={iPhone13Pro} 
              alt="Coaching App Interface" 
              className="w-3/4 max-w-xs sm:w-full sm:max-w-xl scale-110"
            />
          </div>
          <div className="space-y-8 order-2 md:order-none w-full">
            <h2 className="text-2xl sm:text-4xl font-bold text-white text-center md:text-left">
              What You'll Get With<br />
              <span className="text-[#00EB2B]">1 - on - 1 Coaching</span>
            </h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0E4425] flex items-center justify-center mt-1">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="#00EB2B" strokeWidth="3" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                  </span>
                  <div>
                    <h3 className="text-base sm:text-xl font-bold text-white mb-1">{benefit.title}</h3>
                    <p className="text-xs sm:text-gray-300 sm:text-sm text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 