export default function CoachingSection() {
  return (
    <section className="bg-[#161F17] py-14 sm:py-24 font-['Plus_Jakarta_Sans']">
      <div className="max-w-3xl mx-auto px-[7vw] sm:px-6 lg:px-8 text-center">
        {/* Eyebrow pill */}
        <span className="inline-block px-4 py-1.5 mb-6 rounded-full border border-[#00EB2B]/40 bg-[#00EB2B]/10 text-[#00EB2B] text-xs font-bold tracking-[0.15em]">
          PERSONALISED COACHING
        </span>

        <h2 className="text-3xl sm:text-5xl font-extrabold text-white mb-5 leading-tight">
          1-1 <span className="text-[#00EB2B]">Coaching</span>
        </h2>

        {/* Gradient divider */}
        <div className="mx-auto mb-6 h-1 w-20 rounded-full bg-gradient-to-r from-[#00EB2B] to-[#00A0FB]" />

        <p className="text-[#B8C0B9] text-sm sm:text-lg max-w-xl mx-auto leading-relaxed">
          Premium personalised coaching built to help you reach your fitness goals,
          with a custom plan designed specifically for your body and lifestyle.
        </p>
      </div>
    </section>
  )
}
