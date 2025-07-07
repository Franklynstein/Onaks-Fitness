import { useState } from 'react'

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState(null)

  const faqs = [
    {
      question: "What is online coaching, and how does it work?",
      answer: "Online coaching is a personalized fitness and nutrition program delivered through digital platforms. Once you sign up, you’ll receive custom plans based on your goals, lifestyle, and fitness level. You’ll have ongoing support, progress tracking, and regular check-ins all done virtually, so you can follow the plan from anywhere in the world."
    },
    {
      question: "Who is this coaching for?",
      answer: "My coaching is for anyone ready to commit to improving their health, fitness, or body composition regardless of experience level. Whether you’re a beginner, an intermediate gym-goer, or someone returning to fitness after a break, I tailor each plan to your specific needs and goals."
    },
    {
      question: "What makes your coaching different from others?",
      answer: "I offer truly personalized support—not one-size-fits-all templates. You’ll get custom workout and nutrition plans based on your unique lifestyle, regular feedback, and real accountability. I also focus on educating you so you build long-term habits, not just short-term results."
    },
    {
      question: "Do I Need A Gym Membership To Follow Your Plans?",
      answer: "No, you don’t! Plans can be created for home workouts, gym sessions, or a mix of both depending on your preferences and access to equipment."
    },
    {
      question: "Are The Workout & Nutrition Plans Customised?",
      answer: "Yes, 100%. Every workout and nutrition plan is tailored to your goals, experience level, body type, lifestyle, and dietary needs. Nothing is generic."
    },
    {
      question: "How Often Do You Update My Plan?",
      answer: "Plans are reviewed and adjusted regularly based on your progress, feedback, and check-ins usually every 2 to 4 weeks. If something isn’t working, we pivot quickly to keep you on track."
    },
    {
      question: "How Much Does Coaching Cost?",
      answer: "Pricing varies based on the coaching package you select, as each offers different levels of support and customization to match your goals. We’ll go over all costs during your initial consultation."
    },
    {
      question: "Do You Offer Payment Plans?",
      answer: "Yes, flexible payment plans are available. I believe coaching should be accessible, so I offer options to fit different budgets."
    },
    {
      question: "Can I Cancel Anytime?",
      answer: "Yes, you’re free to cancel at any time, though I encourage you to stay committed to achieve meaningful results. Fitness progress takes time, and consistency is what truly drives success in your fitness journey."
    },  
    {
      question: "How Fast Will I See Results?",
      answer: "Results vary depending on your starting point, consistency, and goals. Many clients start seeing noticeable changes in 4–6 weeks, but sustainable transformation takes time and commitment."
    },
    {
      question: "Do You Guarantee Results?",
      answer: "No one can guarantee results 100%—your success depends on your effort. However I do guarantee full support, expert guidance, and a proven system designed to help you succeed."
    },
    {
      question: "What If I'm Not Seeing Progress?",
      answer: "If you’re not seeing progress, we’ll troubleshoot together. I’ll assess your feedback, tweak your plan, and provide the coaching you need to move forward. Plateaus are part of the journey and we’ll break through them."
    },
    {
      question: "How Do I Communicate With You During The Program?",
      answer: "You’ll have direct access to me through email, whatsapp or a coaching app or depending on your plan. I encourage open communication so you’re never stuck or unsure of your next step."
    },
    {
      question: "Do I Get Check-Ins or Feedback?",
      answer: "Absolutely! You’ll receive weekly or monthly check-ins where we review your progress, make any necessary adjustments, and keep you accountable.I’ll also give you personalized feedback to make sure you’re consistently moving toward your goals."
    }
  ]

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index)
  }

  return (
    <section className="bg-[#151515] py-20">
      <div className="max-w-3xl mx-auto px-[7vw] sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-white text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-[#282828] rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleQuestion(index)}
                className="w-full px-6 py-4 flex justify-between items-center text-left"
              >
                <span className="text-white font-medium">{faq.question}</span>
                <svg
                  className={`w-6 h-6 text-white transform transition-transform duration-200 ${
                    openQuestion === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openQuestion === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 