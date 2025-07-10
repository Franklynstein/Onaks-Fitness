import React from 'react';
import { useNavigate } from 'react-router-dom';
import Calculator from '../assets/Calculator.png'
import Barbell from '../assets/Barbell.png'

export default function ResourcesSection() {
  const navigate = useNavigate();

  const resources = [
    {
      icon: Calculator,
      title: "Calorie\nCalculator",
      alt: "Calculator Icon",
      path: "/calculator"
    },
    {
      icon: Barbell,
      title: "Free Workout\nProgram",
      alt: "Barbell Icon",
      path: "/workout"
    }
  ]

  const handleResourceClick = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  return (
    <section className="bg-[#050505] py-20">
      <div className="max-w-4xl mx-auto px-[7vw] sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">
          <span className="text-white">Explore Some of Our </span>
          <br className="block sm:hidden" />
          <span className="text-[#00EB2B]">Free Resources</span>
        </h2>
        <p className="text-xs text-[#AFAFAF] sm:text-gray-300 sm:text-base mb-8 sm:mb-12">
        No membership, no pressure, just high-quality fitness resources to get you started.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {resources.map((resource, index) => (
            <div 
              key={index}
              onClick={() => handleResourceClick(resource.path)}
              className="bg-[#151515] rounded-2xl p-4 sm:p-8 flex flex-col items-center justify-center w-full cursor-pointer hover:bg-[#1a1a1a] transition-colors duration-200"
            >
              <img 
                src={resource.icon} 
                alt={resource.alt}
                className="w-16 h-16 sm:w-24 sm:h-24 mb-2 sm:mb-4 bg-gradient-to-b from-[#00EB2B] to-[#00A0FB]"
                style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              />
              <h3 className="text-base sm:text-2xl font-bold text-white whitespace-pre-line text-center">
                {resource.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 