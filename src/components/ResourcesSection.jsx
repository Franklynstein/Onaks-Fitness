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
    navigate(path);
  };

  return (
    <section className="bg-[#050505] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-4">
          <span className="text-white">Free </span>
          <span className="text-[#00EB2B]">Resources</span>
        </h2>
        <p className="text-gray-300 mb-12">
          Tools to get you started on your fitness journey - no strings attached.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {resources.map((resource, index) => (
            <div 
              key={index}
              onClick={() => handleResourceClick(resource.path)}
              className="bg-[#151515] rounded-2xl p-8 flex flex-col items-center justify-center aspect-square cursor-pointer hover:bg-[#1a1a1a] transition-colors duration-200"
            >
              <img 
                src={resource.icon} 
                alt={resource.alt}
                className="w-24 h-24 mb-4 bg-gradient-to-b from-[#00EB2B] to-[#00A0FB]"
                style={{ WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}
              />
              <h3 className="text-2xl font-bold text-white whitespace-pre-line text-center">
                {resource.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 