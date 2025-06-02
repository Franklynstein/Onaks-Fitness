import onaksLogo from '../assets/onaks-logo.svg'
import Ayniga from '../assets/Ayniga.png'
import Background from '../assets/Background.png'
import Frame6 from '../assets/Frame6.png'

export default function TopSection() {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={Background} 
          alt="Gym Background" 
          className="w-full h-full object-cover"
        />
        <img 
          src={Frame6} 
          alt="Overlay" 
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content Container */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 h-full">
        {/* Logo */}
        <img 
          src={onaksLogo} 
          alt="Onaks Fitness" 
          className="h-16 w-auto mb-12"
        />

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-[calc(100%-8rem)]">
          {/* Text Content */}
          <div>
            <h1 className="text-6xl font-bold text-white mb-6">
              Build <span className="text-[#00EB2B]">different</span>
            </h1>
            <p className="text-white text-lg mb-8 max-w-xl">
              Together, We'll transform your body with custom workout plans and personalized coaching that get results
            </p>
            <button className="bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity">
              Start Your Journey
            </button>
          </div>

          {/* Image */}
          <div className="absolute bottom-0 right-0 lg:right-24 -mb-32 z-0">
            <img 
              src={Ayniga} 
              alt="Fitness Trainer" 
              className="w-full max-w-[50%] lg:max-w-[70%] h-auto object-contain ml-auto translate-x-[-50%]"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 