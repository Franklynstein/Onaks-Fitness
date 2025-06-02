import onaksFit from '../assets/Onaksfit.png'

export default function JourneySection() {
  return (
    <section className="bg-[#282828] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src={onaksFit} 
              alt="Fitness Transformation Result" 
              className="w-full rounded-2xl"
            />
          </div>
          
          <div className="space-y-8">
            <h2 className="text-4xl font-bold">
              <span className="text-white">MY </span>
              <span className="text-[#00EB2B]">FITNESS</span>
              <span className="text-white"> JOURNEY</span>
            </h2>

            <div className="space-y-6 text-white">
              <p>
                My fitness journey began when I hit <span className="text-[#00EB2B]">101kg</span> and 
                realized I needed to a change. Through dedication, 
                proper nutrition, and consistent training, 
                I lost <span className="text-[#00EB2B]">23kg</span> in just <span className="text-[#00EB2B]">7 months</span>
              </p>

              <p>
                This experience taught me what works and 
                what doesn't in the real world. I've since dedicated 
                to helping other achieve similar transformations 
                through personalized coaching
              </p>

              <p>
                I believe in sustainable approaches to fitness 
                that create lasting results - <span className="text-[#00EB2B]">no quick fixes</span>, 
                just proven methods that I've used myself and 
                with dozens of successful clients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 