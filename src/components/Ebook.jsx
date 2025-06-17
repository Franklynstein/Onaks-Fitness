import React from 'react';
import Header from './Header';
import Footer from './Footer';
import onaksbehind from '../assets/onaksbehind.png';
import book2 from '../assets/book2.png';
import builder from '../assets/builder.png';
import onaksfat from '../assets/onaksfat.png';
import back from '../assets/back.png';
import bicep from '../assets/bicep.png';
import pdfback from '../assets/pdfback.jpg';
import Secure from '../assets/Secure.png';
import instant from '../assets/instant.png';
import pdf from '../assets/pdf.png';
import Vector from '../assets/Vector.png';
import Onaksbg from '../assets/Onaksbg.png';

export default function Ebook() {
  return (
    <div className="min-h-screen bg-[#050505] font-['Plus_Jakarta_Sans']">
      <Header />
      {/* Hero Section */}
      <div 
        className="relative bg-cover bg-[center_65%] pt-32 pb-0"
        style={{ backgroundImage: `url(${Onaksbg})` }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-white md:w-1/2">
              <h1 className="text-[64px] leading-tight font-bold mb-6">
                HOW I LOST <span className="text-[#00EB2B]">23KG</span><br />
                IN <span className="text-[#00EB2B]">7 MONTHS</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-xl">
                My complete transformation journey with all the strategies,
                challenges, and lessons learned along the way with actionble
                content
              </p>
              <button className="bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
                $9.99 - BUY NOW
              </button>
            </div>
            <div className="md:w-1/2 flex justify-end">
              <img 
                src={book2} 
                alt="Build Different Book" 
                className="w-[600px] h-auto transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="bg-[#050505] w-full py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <img 
              src={builder} 
              alt="Fitness Training" 
              className="w-full h-auto"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Before & After Section */}
      <div className="bg-[#151C16] w-full py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">See Before & After</h2>
          <div className="grid grid-cols-2 gap-4 rounded-2xl overflow-hidden">
            <div>
              <img 
                src={onaksfat} 
                alt="Before Transformation" 
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="bg-[#1B1B1B] rounded-xl flex items-center justify-center">
              <p className="text-2xl font-semibold text-white">See After ⊙</p>
            </div>
          </div>
        </div>
      </div>

      {/* What's Inside Section */}
      <div className="bg-[#050505] w-full py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-4">What's Inside</h2>
          <p className="text-gray-300 text-center mb-12">A complete 30-page guide divided into powerful session</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* The Breaking Point */}
            <div className="bg-[#1B1B1B] rounded-xl p-6">
              <div className="bg-gradient-to-r from-[#00A0FB] to-[#00A0FB] text-white text-center py-2 rounded-lg mb-6">
                The Breaking Point
              </div>
              <ul className="space-y-4 text-gray-300">
                <li>• My journey to 101kg</li>
                <li>• The moment I decided to change</li>
                <li>• My initial struggles and mistakes</li>
                <li>• Setting Realistic Goals</li>
                <li>• Finding my "why"</li>
              </ul>
            </div>

            {/* Nutrition Strategy */}
            <div className="bg-[#1B1B1B] rounded-xl p-6">
              <div className="bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white text-center py-2 rounded-lg mb-6">
                Nutrition Strategy
              </div>
              <ul className="space-y-4 text-gray-300">
                <li>• My exact meal plans and portions</li>
                <li>• Calorie targets and adjustments</li>
                <li>• Grocery shopping strategies</li>
                <li>• Meal prepping for success</li>
                <li>• Dealing with cravings and setbacks</li>
              </ul>
            </div>

            {/* The Workout Protocol */}
            <div className="bg-[#1B1B1B] rounded-xl p-6">
              <div className="bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white text-center py-2 rounded-lg mb-6">
                The Workout Protocol
              </div>
              <ul className="space-y-4 text-gray-300">
                <li>• Key exercises that drove results</li>
                <li>• How I tracked progress</li>
                <li>• Adapting when plateaus hit</li>
                <li>• Setting Realistic Goals</li>
                <li>• Recovery strategies</li>
              </ul>
            </div>

            {/* The Mental Game */}
            <div className="bg-[#1B1B1B] rounded-xl p-6">
              <div className="bg-gradient-to-r from-[#00A0FB] to-[#00A0FB] text-white text-center py-2 rounded-lg mb-6">
                The Mental Game
              </div>
              <ul className="space-y-4 text-gray-300">
                <li>• Building sustainable habits</li>
                <li>• Overcoming motivation slumps</li>
                <li>• Developing discipline</li>
                <li>• Maintaining social life while changing</li>
                <li>• Creating your new identity</li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <button className="w-full bg-[#00A0FB] text-white py-3 rounded-lg hover:opacity-90 transition-opacity">
              $9.99 - BUY NOW
            </button>
          </div>
        </div>
      </div>

      {/* My Personal Guarantee Section */}
      <div className="bg-[#050505] w-full py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-start gap-8">
            <div className="w-1/3">
              <img 
                src={bicep} 
                alt="Training Session" 
                className="w-full h-auto rounded-xl"
              />
            </div>
            <div className="flex-1">
              <h2 className="text-4xl font-bold text-white mb-6">
                My Personal <span className="text-[#00EB2B]">Guarantee</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Everything in this book is the exact system I used to lose 23kg in 7 months. No fluff, no theory - just real strategies that worked for me and can work for you too. I've shared all my struggles and victories to give you a complete blueprint for your own transformation journey
              </p>
              <div className="mt-6">
                <img 
                  src={back} 
                  alt="Transformation Result" 
                  className="w-full h-auto rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* What's You'll Learn Section */}
      <div className="bg-[#161F17] w-full py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-16 font-['Plus_Jakarta_Sans']">
            What You'll Learn
          </h2>
          <div className="space-y-6 max-w-2xl mx-auto">
            <div className="flex items-center gap-4">
              <img src={Vector} alt="Checkbox" className="w-6 h-6" />
              <div className="flex-1 bg-[#2E2E2E6B] border border-[#3D3D3D] rounded-lg p-4">
                <p className="text-xl text-gray-300 font-['Plus_Jakarta_Sans']">How to create a sustainable nutrition plan</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src={Vector} alt="Checkbox" className="w-6 h-6" />
              <div className="flex-1 bg-[#2E2E2E6B] border border-[#3D3D3D] rounded-lg p-4">
                <p className="text-xl text-gray-300 font-['Plus_Jakarta_Sans']">The exact workouts that drove my transformation</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src={Vector} alt="Checkbox" className="w-6 h-6" />
              <div className="flex-1 bg-[#2E2E2E6B] border border-[#3D3D3D] rounded-lg p-4">
                <p className="text-xl text-gray-300 font-['Plus_Jakarta_Sans']">How to overcome plateaus and setbacks</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src={Vector} alt="Checkbox" className="w-6 h-6" />
              <div className="flex-1 bg-[#2E2E2E6B] border border-[#3D3D3D] rounded-lg p-4">
                <p className="text-xl text-gray-300 font-['Plus_Jakarta_Sans']">Mental strategies for staying consistent</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <img src={Vector} alt="Checkbox" className="w-6 h-6" />
              <div className="flex-1 bg-[#2E2E2E6B] border border-[#3D3D3D] rounded-lg p-4">
                <p className="text-xl text-gray-300 font-['Plus_Jakarta_Sans']">How to maintain results after reaching your goal</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#050505] w-full py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            <div className="border border-[#1B1B1B] rounded-lg bg-[#0A0A0A]">
              <button className="w-full px-6 py-4 flex items-center justify-between text-white">
                <span className="text-lg">What is online coaching, and how does it work?</span>
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="border border-[#1B1B1B] rounded-lg bg-[#0A0A0A]">
              <button className="w-full px-6 py-4 flex items-center justify-between text-white">
                <span className="text-lg">Who is this coaching for?</span>
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="border border-[#1B1B1B] rounded-lg bg-[#0A0A0A]">
              <button className="w-full px-6 py-4 flex items-center justify-between text-white">
                <span className="text-lg">What makes your coaching different from others?</span>
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            <div className="border border-[#1B1B1B] rounded-lg bg-[#0A0A0A]">
              <button className="w-full px-6 py-4 flex items-center justify-between text-white">
                <span className="text-lg">How much does coaching cost?</span>
                <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Ready to Transform Section */}
      <div 
        className="relative bg-cover bg-center bg-black py-20"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${pdfback})` }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Body?
          </h2>
          <p className="text-gray-300 text-md mb-8 max-w-2xl mx-auto">
            Learn the exact system I used to drop from 101kg to 78kg and <br />
            discover how you can apply these strategies to your own journey.
          </p>
          <button className="bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white px-8 py-3 rounded-lg text-md font-semibold hover:opacity-90 transition-opacity mb-8">
            GET THE E-BOOK NOW - $9.99
          </button>
          <div className="flex items-center justify-center gap-8 text-[#00EB2B]">
            <div className="flex items-center gap-2">
              <img src={Secure} alt="Secure Payment" className="w-5 h-5" />
              <span>SECURE PAYMENT</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={instant} alt="Instant Download" className="w-5 h-5" />
              <span>INSTANT DOWNLOAD</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={pdf} alt="PDF Format" className="w-5 h-5" />
              <span>PDF FORMAT</span>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 