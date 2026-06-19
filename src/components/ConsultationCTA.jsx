export default function ConsultationCTA({ variant = 'A', id }) {
  const content = {
    A: {
      eyebrow: 'YOUR TRANSFORMATION STARTS HERE',
      heading: 'Ready to start your fat loss journey?',
      sub: "Let's build a plan around your body, your schedule, and your goals. One free call is all it takes to get started.",
      button: 'Book a Free Consultation',
    },
    B: {
      eyebrow: 'ONE CALL CAN CHANGE EVERYTHING',
      heading: 'The journey to your dream body all begins with one call',
      sub: 'No guesswork, no generic plans. Just a clear, personalised path to the results you actually want.',
      button: 'Book a Free Fat Loss Consultation Now',
    },
  }

  const c = content[variant] || content.A

  return (
    <section
      id={id}
      className="bg-[#050505] py-16 sm:py-24 font-['Plus_Jakarta_Sans'] scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto px-[7vw] sm:px-6 lg:px-8">
        <div className="relative p-[2px] rounded-3xl bg-gradient-to-r from-[#00EB2B] via-[#00C56B] to-[#00A0FB] overflow-hidden">
          {/* Glow accents */}
          <div className="absolute -top-24 -left-24 w-72 h-72 bg-[#00EB2B] opacity-20 blur-[100px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 bg-[#00A0FB] opacity-20 blur-[100px] rounded-full pointer-events-none" />

          <div className="relative bg-[#0E0E0E] rounded-3xl px-6 py-12 sm:px-14 sm:py-16 text-center">
            <p className="text-[#00EB2B] text-xs sm:text-sm font-bold tracking-[0.2em] mb-4">
              {c.eyebrow}
            </p>
            <h2 className="text-white text-3xl sm:text-5xl font-extrabold leading-tight mb-5 max-w-3xl mx-auto">
              {c.heading}
            </h2>
            <p className="text-gray-400 text-sm sm:text-lg mb-9 max-w-2xl mx-auto">
              {c.sub}
            </p>
            <button
              onClick={() =>
                window.open('https://calendly.com/onaksfitness/new-meeting', '_blank')
              }
              className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#00EB2B] to-[#00A0FB] text-white text-base sm:text-lg font-bold px-9 sm:px-12 py-4 sm:py-5 rounded-full hover:opacity-90 hover:scale-[1.03] transition-all duration-200 shadow-[0_8px_30px_rgba(0,235,43,0.25)] focus:outline-none"
            >
              {c.button}
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <p className="text-gray-500 text-xs sm:text-sm mt-6">
              100% free · No obligation · Takes 30 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
