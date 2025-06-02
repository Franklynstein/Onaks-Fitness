export default function StepsSection() {
  const steps = [
    {
      number: 1,
      title: "Complete The Form",
      description: "Make sure to complete the survey, so I can see what your goals are."
    },
    {
      number: 2,
      title: "Wait To Be Contacted",
      description: "Once you submit, I'll review your app and if it's a good fit I'll reach out to you via text."
    },
    {
      number: 3,
      title: "You Are All Set",
      description: "If you're a good fit I'll make sure that you have a spot to join Swole University!"
    }
  ]

  return (
    <section className="bg-[#050505] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-8">
          {steps.map((step) => (
            <div key={step.number} className="flex items-start gap-6 bg-[#151515] rounded-2xl p-6">
              <div className="flex-shrink-0 w-12 h-12 bg-[#C3C3C3] rounded-full flex items-center justify-center text-white font-bold text-xl">
                {step.number}
              </div>
              <div>
                <h3 className="text-white text-xl font-bold mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 