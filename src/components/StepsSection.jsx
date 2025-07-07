export default function StepsSection() {
  const steps = [
    {
      number: 1,
      title: "Complete the form",
      description: "Make sure to complete the survey, so I can see what your goals are."
    },
    {
      number: 2,
      title: "Wait to be contacted",
      description: "Once you submit, I'll review your application  and if it's a good fit I'll reach out to you via text."
    },
    {
      number: 3,
      title: "You are all set",
      description: "Make sure to complete the survey, so I can see what your goals are."
    }
  ]

  return (
    <section className="bg-[#050505] py-20 sm:py-20 font-['Plus_Jakarta_Sans']">
      <div className="max-w-4xl mx-auto px-[7vw] sm:px-4 sm:px-6 lg:px-8">
        <div className="space-y-6 sm:space-y-8">
          {steps.map((step) => (
            <div
              key={step.number}
              className="p-[1.5px] rounded-2xl bg-gradient-to-r from-[#00EB2B] to-[#00A0FB]"
            >
              <div className="flex items-start gap-4 sm:gap-6 bg-[#151515] rounded-2xl p-5 sm:p-6">
                <div className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 bg-[#C3C3C3] rounded-full flex items-center justify-center text-black font-bold text-base sm:text-xl">
                  {step.number}
                </div>
                <div>
                  <h3 className="text-white text-base sm:text-xl font-bold mb-1 sm:mb-2">{step.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm leading-snug">{step.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 