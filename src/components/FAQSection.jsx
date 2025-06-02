import { useState } from 'react'

export default function FAQSection() {
  const [openQuestion, setOpenQuestion] = useState(null)

  const faqs = [
    {
      question: "What is online coaching, and how does it work?",
      answer: "Online coaching provides personalized fitness and nutrition guidance through digital platforms. You'll receive customized workout plans, nutrition advice, and regular check-ins via our app or messaging platform."
    },
    {
      question: "Who is this coaching for?",
      answer: "This coaching is for anyone committed to improving their fitness, whether you're a beginner or experienced. We work with clients looking to lose weight, build muscle, or improve overall fitness."
    },
    {
      question: "What makes your coaching different from others?",
      answer: "Our approach combines personalized attention, proven methods, and real-world experience. We focus on sustainable results through customized plans and consistent support."
    },
    {
      question: "Do I Need A Gym Membership To Follow Your Plans?",
      answer: "While a gym membership can be helpful, it's not required. We can create effective workout plans using minimal equipment or bodyweight exercises based on your available resources."
    },
    {
      question: "Are The Workout & Nutrition Plans Customised?",
      answer: "Yes, all plans are fully customized to your goals, lifestyle, and preferences. We take into account your current fitness level, schedule, and dietary needs."
    },
    {
      question: "How Often Do You Update My Plan?",
      answer: "Plans are regularly updated based on your progress and feedback. We typically review and adjust programs every 4-6 weeks or as needed."
    },
    {
      question: "How Much Does Coaching Cost?",
      answer: "Coaching packages vary based on the level of support and customization you need. Contact us for current pricing and available options."
    },
    {
      question: "Do You Offer Payment Plans?",
      answer: "Yes, we offer flexible payment plans to make coaching more accessible. We can discuss payment options that work for your budget."
    },
    {
      question: "Can I Cancel Anytime?",
      answer: "Yes, we offer flexible payment plans to make coaching more accessible. We can discuss payment options that work for your budget."
    },  
    {
      question: "How Fast Will I See Results?",
      answer: "Yes, we offer flexible payment plans to make coaching more accessible. We can discuss payment options that work for your budget."
    },
    {
      question: "Do You Guarantee Results?",
      answer: "Yes, we offer flexible payment plans to make coaching more accessible. We can discuss payment options that work for your budget."
    },
    {
      question: "What If I'm Not Seeing Progress?",
      answer: "Yes, we offer flexible payment plans to make coaching more accessible. We can discuss payment options that work for your budget."
    },
    {
      question: "How Do I Communicate With You During The Program?",
      answer: "Yes, we offer flexible payment plans to make coaching more accessible. We can discuss payment options that work for your budget."
    },
    {
      question: "Do I Get Check-Ins or Feedback?",
      answer: "Yes, we offer flexible payment plans to make coaching more accessible. We can discuss payment options that work for your budget."
    }
  ]

  const toggleQuestion = (index) => {
    setOpenQuestion(openQuestion === index ? null : index)
  }

  return (
    <section className="bg-[#151515] py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
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