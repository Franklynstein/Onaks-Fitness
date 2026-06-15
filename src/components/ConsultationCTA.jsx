export default function ConsultationCTA({ bgClass = 'bg-[#050505]' }) {
  return (
    <section className={`${bgClass} py-16 sm:py-20 font-['Plus_Jakarta_Sans']`}>
      <div className="max-w-4xl mx-auto px-[7vw] sm:px-6 lg:px-8 text-center">
        <div className="p-[1.5px] rounded-2xl bg-gradient-to-r from-[#00EB2B] to-[#00A0FB] inline-block w-full max-w-2xl mx-auto">
          <div className="bg-[#151515] rounded-2xl px-6 py-10 sm:px-10 sm:py-12">
            <h2 className="text-white text-2xl sm:text-4xl font-bold mb-4">
              Ready to start your transformation?
            </h2>
            <p className="text-gray-300 text-sm sm:text-base mb-8 max-w-xl mx-auto">
              Book a free consultation and let's build a plan tailored to your goals.
            </p>
            <button
              onClick={() => window.open('https://calendly.com/onaksfitness/new-meeting', '_blank')}
              className="bg-gradient-to-r from-[#00EB2B] to-[#00A0FB] text-white text-base sm:text-lg font-bold px-10 py-4 rounded-full hover:opacity-90 transition-opacity focus:outline-none"
            >
              Book a Free Consultation
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
