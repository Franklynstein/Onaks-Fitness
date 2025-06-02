import onaksFat from '../assets/Onaksfat.png'

export default function TransformationSection() {
  return (
    <section className="bg-[#1B1B1B] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-white mb-12">
          Transformation Picture
        </h2>
        
        <div className="bg-[#151515] rounded-2xl p-8 max-w-2xl mx-auto">
          <div className="relative">
            <img 
              src={onaksFat} 
              alt="Before Transformation" 
              className="w-full rounded-lg"
            />
            <div className="absolute top-4 right-4 bg-[#1B1B1B] text-white px-6 py-2 rounded-full flex items-center gap-2">
              <span className="text-lg font-medium">See After</span>
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 