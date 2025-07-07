import onaksLogo from '../assets/onaks-logo.svg'
import Ayniga from '../assets/Ayniga.png'
import Background from '../assets/Background.png'
import Frame6 from '../assets/Frame6.png'
import Secure from '../assets/Secure.png'
import instant from '../assets/instant.png'
import pdf from '../assets/pdf.png'

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
        {/* Main Content */}
        <div className="flex flex-col items-start justify-center h-full lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:h-[calc(100%-8rem)]">
          {/* Mobile: Hero Image left-aligned and overlapping text */}
          <div className="w-full lg:hidden relative flex items-start" style={{ minHeight: '20rem' }}>
            <img 
              src={Ayniga} 
              alt="Fitness Trainer" 
              className="absolute left-0 w-[30rem] h-[30rem] object-contain rounded-2xl mb-6 mt-6 shadow-xl pointer-events-none select-none z-0"
              style={{ marginLeft: -80, top: '10%' }}
            />
          </div>
          {/* Text Content */}
          <div className="w-full flex flex-col items-start text-left mt-[10vh] lg:mt-0 lg:items-start lg:text-left px-[7vw] relative z-10">
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4">
              Build <span className="text-[#00EB2B]">Different</span>
            </h1>
            <p className="text-white text-base sm:text-lg mb-8 max-w-xl">
              Together, We'll transform your body with custom workout plans and personalized coaching that get results
            </p>
            <button 
              className="w-full sm:w-auto bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white px-8 py-3 rounded-xl font-medium hover:opacity-90 transition-opacity mb-6 text-left"
              onClick={() => {
                const signupForm = document.getElementById('signup-form')
                if (signupForm) {
                  signupForm.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  })
                }
              }}
            >
              Start Your Journey
            </button>

            {/* Secure Payment Info - Smaller Version */}
            {/* <div className="flex items-center gap-4 text-[#00EB2B] text-sm">
              <div className="flex items-center gap-1.5">
                <img src={Secure} alt="Secure Payment" className="w-3 h-3" />
                <span>SECURE PAYMENT</span>
              </div>
              <div className="flex items-center gap-1.5">
                <img src={instant} alt="Instant Download" className="w-3 h-3" />
                <span>INSTANT DOWNLOAD</span>
              </div>
              <div className="flex items-center gap-1.5">
                <img src={pdf} alt="PDF Format" className="w-3 h-3" />
                <span>PDF FORMAT</span>
              </div>
            </div> */}
          </div>

          {/* Desktop: Image on the right */}
          <div className="hidden lg:block absolute bottom-0 right-0 lg:right-24 -mb-32 z-0">
            <img 
              src={Ayniga} 
              alt="Fitness Trainer" 
              className="w-full max-w-[50%] lg:max-w-[70%] h-auto object-contain ml-auto lg:translate-x-[-50%]"
            />
          </div>
        </div>
      </div>
    </section>
  )
} 