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
        <div className="absolute inset-0 bg-[#161F17]/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="text-white md:w-1/2">
              <h1 className="text-[64px] leading-tight font-bold mb-6">
                HOW I LOST <span className="text-[#00EB2B]">23KG</span><br />
                IN <span className="text-[#00EB2B]">7 MONTHS</span>
              </h1>
              <p className="text-gray-300 text-lg mb-8 max-w-xl">
                My complete transformation journey with all the strategies,
                challenges, and lessons learned along the way with actionable
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

      {/* Reviews Section */}
      <div className="bg-[#050505] w-full py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-4 font-['Plus_Jakarta_Sans']">
            What Our <span className="text-[#00EB2B]">Readers</span> Say
          </h2>
          <p className="text-gray-300 text-center mb-12 text-lg">
            Real transformations from real people who used this ebook
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Review 1 - David M. */}
            <div className="bg-[#1B1B1B] rounded-xl p-6 border border-[#2E2E2E] hover:border-[#00EB2B]/30 transition-colors">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#00EB2B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">David M.</h3>
              <p className="text-[#00EB2B] text-sm mb-4">London, UK</p>
              <p className="text-gray-300 leading-relaxed">
                "I've tried keto, intermittent fasting, and even paid for expensive meal plans nothing lasted. What stood out in this ebook is how realistic and sustainable it is. The calorie banking strategy and workout split fit perfectly into my hectic job. I've dropped 9kg in 10 weeks without feeling miserable. Highly recommend it for anyone serious about change."
              </p>
            </div>

            {/* Review 2 - Sophie L. */}
            <div className="bg-[#1B1B1B] rounded-xl p-6 border border-[#2E2E2E] hover:border-[#00EB2B]/30 transition-colors">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#00EB2B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Sophie L.</h3>
              <p className="text-[#00EB2B] text-sm mb-4">Birmingham, UK</p>
              <p className="text-gray-300 leading-relaxed">
                "I've struggled with my weight since university and tried everything from expensive personal trainers to cutting out entire food groups. This ebook taught me how to approach weight loss without stress. The meal prep guide is genius! I've lost 17kg so far, but what's more amazing is how strong and energetic I feel. For the first time, this feels sustainable."
              </p>
            </div>

            {/* Review 3 - Jason M. */}
            <div className="bg-[#1B1B1B] rounded-xl p-6 border border-[#2E2E2E] hover:border-[#00EB2B]/30 transition-colors">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#00EB2B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Jason M.</h3>
              <p className="text-[#00EB2B] text-sm mb-4">Los Angeles, USA</p>
              <p className="text-gray-300 leading-relaxed">
                "This ebook was exactly what I needed. I travel a lot for work and always found it hard to stay consistent. The calorie banking strategy and the simple workout plan fit perfectly into my lifestyle. I'm down 20 pounds (9kg) and still going. More importantly, I feel fitter, sleep better, and have energy all day. I can't thank Onaks enough."
              </p>
            </div>

            {/* Review 4 - Daniel K. */}
            <div className="bg-[#1B1B1B] rounded-xl p-6 border border-[#2E2E2E] hover:border-[#00EB2B]/30 transition-colors">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#00EB2B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Daniel K.</h3>
              <p className="text-[#00EB2B] text-sm mb-4">Wolverhampton, UK</p>
              <p className="text-gray-300 leading-relaxed">
                "What I loved most was how adaptable it is. I still enjoy my weekend pub visits, but I now understand portion sizes and calorie banking. I've lost 8kg in 2.5 months, and my clothes fit better than ever. Plus, the workout plan is beginner friendly but still challenging. This is the first time weight loss hasn't felt like torture."
              </p>
            </div>

            {/* Review 5 - Michael O. */}
            <div className="bg-[#1B1B1B] rounded-xl p-6 border border-[#2E2E2E] hover:border-[#00EB2B]/30 transition-colors">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#00EB2B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Michael O.</h3>
              <p className="text-[#00EB2B] text-sm mb-4">Manchester, UK</p>
              <p className="text-gray-300 leading-relaxed">
                "I was skeptical at first, but this book delivers. The focus on systems over motivation is exactly what I needed. I adapted the meal plan to fit my lifestyle and dropped weight without feeling deprived. Best fitness investment I've ever made."
              </p>
            </div>

            {/* Review 6 - Grace A. */}
            <div className="bg-[#1B1B1B] rounded-xl p-6 border border-[#2E2E2E] hover:border-[#00EB2B]/30 transition-colors">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#00EB2B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Grace A.</h3>
              <p className="text-[#00EB2B] text-sm mb-4">Lagos, Nigeria</p>
              <p className="text-gray-300 leading-relaxed">
                "This ebook was the game changer I needed. As a busy mom, I always thought weight loss meant starving or doing extreme workouts. Onaks step-by-step approach made it simple. I lost 11kg in 3 months by following the meal prep strategy and daily step goals. I finally feel like myself again confident, strong, and proud."
              </p>
            </div>
          </div>

          {/* Additional Reviews for Mobile View */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Review 7 - Ethan R. */}
            <div className="bg-[#1B1B1B] rounded-xl p-6 border border-[#2E2E2E] hover:border-[#00EB2B]/30 transition-colors">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#00EB2B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Ethan R.</h3>
              <p className="text-[#00EB2B] text-sm mb-4">New York, USA</p>
              <p className="text-gray-300 leading-relaxed">
                "The most sustainable fitness guide I've ever used. The progressive workouts, calorie tracking tips, and mindset shifts work perfectly together."
              </p>
            </div>

            {/* Review 8 - Tolu A. */}
            <div className="bg-[#1B1B1B] rounded-xl p-6 border border-[#2E2E2E] hover:border-[#00EB2B]/30 transition-colors">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#00EB2B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Tolu A.</h3>
              <p className="text-[#00EB2B] text-sm mb-4">London, UK</p>
              <p className="text-gray-300 leading-relaxed">
                "I've lived in the UK most of my life and always struggled balancing my cultural foods with healthy eating. This ebook completely changed my mindset. I've learned how to enjoy the foods I love in the right portions while staying on track. I've already lost 6kg and I'm still on my weight loss journey. I feel stronger, more energetic, and for the first time, this actually feels sustainable."
              </p>
            </div>

            {/* Review 9 - Emeka O. */}
            <div className="bg-[#1B1B1B] rounded-xl p-6 border border-[#2E2E2E] hover:border-[#00EB2B]/30 transition-colors">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-[#00EB2B]" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <h3 className="text-white font-semibold text-lg mb-2">Emeka O.</h3>
              <p className="text-[#00EB2B] text-sm mb-4">Birmingham, UK</p>
              <p className="text-gray-300 leading-relaxed">
                "I used to think weight loss meant giving up everything I enjoyed, but this ebook showed me it's about balance, not restriction. I've already lost 8kg and I'm still on my journey. My energy levels are better, my clothes fit differently, and I feel like a different person mentally. This is hands down the most realistic and sustainable approach I've ever tried."
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <p className="text-gray-300 mb-6 text-lg">
              Join thousands who have transformed their lives
            </p>
            <button className="bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity">
              GET YOUR COPY NOW - $9.99
            </button>
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