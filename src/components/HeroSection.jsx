import aynigaImage from '../assets/Ayniga.png'

export default function HeroSection() {
  return (
    <section className="h-[80vh] flex items-center">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-white font-['Certia']">
              Build <span className="text-[#00EB2B]">different</span>
            </h1>
            <p className="text-[14px] leading-[20px] tracking-[0px] text-[#FEFFF8] font-['Plus_Jakarta_Sans'] font-medium">
              Together, we'll transform your body with custom workout plans and 
              personalized coaching that gets results.
            </p>
            <button className="bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white px-8 py-3 rounded-lg font-medium text-[18px] font-['Plus_Jakarta_Sans'] transition-all duration-200 hover:opacity-90">
              Start Your Journey
            </button>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-xl">
            <div className="transform translate-y-[10%] scale-[0.8]">
              <img 
                src={aynigaImage} 
                alt="Fitness Transformation" 
                className="w-full h-full object-cover"
              /> 
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 