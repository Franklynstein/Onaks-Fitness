import { useState, useEffect } from 'react'
import client1 from '../assets/client1.png'
import client2 from '../assets/client2.png'
import review1 from '../assets/review/review_1.mov'
import review2 from '../assets/review/review_2.mov'
import review3 from '../assets/review/review_3.mov'

export default function ReviewsSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [itemsPerPage, setItemsPerPage] = useState(2)
  
  const reviews = [
    {
      image: client2,
      name: "Bayo, 25",
      text: "",
      video: review2
     
    },
    {
      image: client2,
      name: "Anjola, 21",
      text: "",
      video: review3
      
    },
    {
      image: client1,
      name: "Chris, 26",
      text: "",
      video: review1
    }
  ]

  useEffect(() => {
    const handleResize = () => {
      const newItemsPerPage = window.innerWidth >= 768 ? 2 : 1
      setItemsPerPage(newItemsPerPage)
      setCurrentSlide(0) // Reset to first slide on resize
    }

    handleResize() // Set initial value
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const totalSlides = Math.ceil(reviews.length / itemsPerPage)

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? totalSlides - 1 : prev - 1)
  }

  const getVisibleReviews = () => {
    const startIndex = currentSlide * itemsPerPage
    return reviews.slice(startIndex, startIndex + itemsPerPage)
  }

  return (
    <section className="bg-[#151515] py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12">
          <span className="text-white">Client's </span>
          <span className="text-[#00EB2B]">Review</span>
        </h2>

        <div className="relative">
          {/* Navigation Buttons */}
          {totalSlides > 1 && (
            <>
              <button 
                onClick={prevSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 p-3 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-white transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
              
              <button 
                onClick={nextSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 p-3 rounded-full transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-12">
            {getVisibleReviews().map((review, index) => (
              <div 
                key={index}
                className="bg-[#282828] rounded-2xl p-6 relative"
              >
                <div className="relative aspect-video mb-6">
                  <video 
                    src={review.video} 
                    className="w-full h-full object-cover rounded-lg"
                    preload="metadata"
                    muted
                  />
                  <button 
                    className="absolute inset-0 flex items-center justify-center"
                    onClick={(e) => {
                      const video = e.currentTarget.previousElementSibling;
                      video.controls = true;
                      video.play();
                      e.currentTarget.style.display = 'none';
                    }}
                  >
                    <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                  </button>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">- {review.name}</h3>
                <p className="text-gray-400">{review.text}</p>
              </div>
            ))}
          </div>

          {/* Dots */}
          {totalSlides > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    currentSlide === index ? 'bg-[#00EB2B]' : 'bg-gray-500'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
} 