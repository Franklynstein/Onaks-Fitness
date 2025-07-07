export default function CoachingSection() {
  return (
    <section className="bg-[#161F17] py-10 sm:py-20">
      <div className="max-w-4xl mx-auto px-[7vw] sm:px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2 sm:mb-4">
          1 - on - 1 Coaching
        </h2>
        <p className="text-[#A0A0A0] text-xs sm:text-sm text-gray-300 mb-4 sm:mb-8">
          Premium personalized coaching to help you
          <br className="block sm:hidden" /><span className="hidden sm:inline"> </span>
          achieve your fitness goals .
          <br className="block sm:hidden" /><span className="hidden sm:inline"> </span>
          Get a custom plan designed specifically for
          <br className="block sm:hidden" /><span className="hidden sm:inline"> </span>
          your body and lifestyle.
        </p>

                {/* <button 
          className="bg-[#00EB2B] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#00EB2B]/90 transition-colors"
          onClick={() => window.open('https://calendly.com/onaksfitness', '_blank')}
        >
          Book a Call
        </button> */}
      </div>
    </section>
  )
} 