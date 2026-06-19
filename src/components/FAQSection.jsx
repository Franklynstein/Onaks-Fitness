import { useState } from 'react'

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState(null)

  const faqs = [
    {
      question: "Who is my coaching for?",
      answer: "My coaching is for anyone who’s serious about losing fat and actually keeping it off. Whether you’re just starting out, been going to the gym for years but not seeing results, or you’ve lost weight before and want to do it properly this time, I tailor everything to where you’re at right now and where you want to get to."
    },
    {
      question: "What makes my coaching different from others?",
      answer: "I lost 23kg entirely on my own, no coach, just figuring out what actually works. Everything I teach comes from real experience, not a textbook. You’re not getting a generic plan, you’re getting what genuinely moves the needle for fat loss."
    },
    {
      question: "What is online coaching, and how does it work?",
      answer: "Online coaching is a personalized fitness and nutrition program delivered through digital platforms. Once you sign up, you’ll receive custom plans based on your goals, lifestyle, and fitness level. You’ll have ongoing support, progress tracking, and regular check-ins all done virtually, so you can follow the plan from anywhere in the world."
    },
    {
      question: "Are the workout and nutrition plans customised?",
      answer: "100%. Every plan is built specifically for you, your schedule, your food preferences, your starting point."
    },
    {
      question: "Do you guarantee results?",
      answer: "I guarantee that I'll give you everything you need to succeed. The results depend on you showing up and doing the work. If you're consistent, the results will come."
    },
    {
      question: "Do I get check-ins or feedback?",
      answer: "Yes, regular check-ins are built into the programme. We track your weight, measurements, and how you're feeling so we can keep adjusting and keep you moving forward."
    },
    {
      question: "How fast will I see results?",
      answer: "Results vary depending on your starting point, consistency, and goals. Many clients start seeing noticeable changes in 4–6 weeks, but sustainable transformation takes time and commitment."
    },
    {
      question: "Can I cancel anytime?",
      answer: "Yes, you’re free to cancel at any time, though I encourage you to stay committed to achieve meaningful results. Fitness progress takes time, and consistency is what truly drives success in your fitness journey."
    },
    {
      question: "How do I communicate with you during the program?",
      answer: "You’ll have direct access to me through email, whatsapp or a coaching app depending on your plan. I encourage open communication so you’re never stuck or unsure of your next step."
    },
    {
      question: "How much does coaching cost?",
      answer: "Pricing is based on the level of support you need. The best way to find out what’s right for you is to apply and we’ll go from there."
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
                  className={`w-6 h-6 text-white flex-shrink-0 ml-4 transform transition-transform duration-200 ${
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
