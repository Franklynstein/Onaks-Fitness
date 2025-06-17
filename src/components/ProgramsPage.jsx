import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ebookImg from '../assets/ebookimg.png'

export default function ProgramsPage() {
  return (
    <div className="min-h-screen bg-[#050505]">
      <Header />
      {/* My Programs Section */}
      <section className="bg-[#161F17] mb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <h1 className="text-4xl font-bold text-white mb-4">My Programs</h1>
          <p className="text-gray-300 mb-2">
            Every program is based on methods that helped me transform from <span className="text-[#00EB2B]">10kg</span> to <span className="text-[#00EB2B]">78kg</span>.
          </p>
          <p className="text-[#00EB2B] italic">Real Experience. Real Results! Different</p>
        </div>
      </section>

      {/* Training Programs Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Training Programs</h2>
        <p className="text-gray-300 text-center mb-12">Curated Shopping Guide to take the guesswork out of nutrition</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Male Programs */}
          <div className="bg-[#1B1B1B] rounded-xl p-4">
            <div className="bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white text-center py-2 rounded-lg mb-4">
              MALE PROGRAMS
            </div>
            <div className="space-y-3">
              <label className="flex items-center cursor-pointer">
                <span className="text-white text-lg">Fat Loss Program</span>
                <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                  <span className="text-gray-400 mr-3 text-lg">$14.99</span>
                  <input type="radio" name="maleProgram" className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4" />
                </div>
              </label>
              <label className="flex items-center cursor-pointer">
                <span className="text-white text-lg">Muscle Building</span>
                <div className="flex items-center border  bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                  <span className="text-gray-400 mr-3 text-lg">$14.99</span>
                  <input type="radio" name="maleProgram" className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4" />
                </div>
              </label>
              <label className="flex items-center cursor-pointer">
                <span className="text-white text-lg">Body Recomposition</span>
                <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                  <span className="text-gray-400 mr-3 text-lg">$14.99</span>
                  <input type="radio" name="maleProgram" className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4" />
                </div>
              </label>
            </div>
            <button className="w-full bg-[#3D3D3D] text-white py-2 rounded-lg hover:bg-[#333] transition-colors mt-4">
              BUY NOW
            </button>
          </div>

          {/* Female Programs */}
          <div className="bg-[#1B1B1B] rounded-xl p-4">
            <div className="bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white text-center py-2 rounded-lg mb-4">
              FEMALE PROGRAMS
            </div>
            <div className="space-y-3">
              <label className="flex items-center cursor-pointer">
                <span className="text-white text-lg">Fat Loss Program</span>
                <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                  <span className="text-gray-400 mr-3 text-lg">$14.99</span>
                  <input type="radio" name="femaleProgram" className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4" />
                </div>
              </label>
              <label className="flex items-center cursor-pointer">
                <span className="text-white text-lg">Muscle Building</span>
                <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                  <span className="text-gray-400 mr-3 text-lg">$14.99</span>
                  <input type="radio" name="femaleProgram" className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4" />
                </div>
              </label>
              <label className="flex items-center cursor-pointer">
                <span className="text-white text-lg">Body Composition</span>
                <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                  <span className="text-gray-400 mr-3 text-lg">$14.99</span>
                  <input type="radio" name="femaleProgram" className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4" />
                </div>
              </label>
            </div>
            <button className="w-full bg-[#3D3D3D] text-white py-2 rounded-lg hover:bg-[#333] transition-colors mt-4">
              BUY NOW
            </button>
          </div>
        </div>

        {/* Glute Max Program */}
        <div className="bg-[#1B1B1B] rounded-xl p-8 relative overflow-hidden">
          <div className="relative z-10 text-center">
            <h3 className="text-xl font-bold text-white mb-4">NEW: GLUTE MAX PROGRAM</h3>
            <p className="text-gray-300 text-md mb-6">
              Specializes Training to glute development and lower body toning
            </p>
            <button className="bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white px-8 py-3 rounded-lg text-sm">
              $29.99 - LEARN MORE
            </button>
          </div>
          <div className="absolute inset-0 bg-black/50"></div>
        </div>
      </section>

      {/* Grocery Lists Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Grocery Lists</h2>
        <p className="text-gray-300 text-center mb-12">Curated Shopping Guide to take the guesswork out of nutrition</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Weight Loss Lists */}
          <div className="bg-[#1B1B1B] rounded-xl p-4">
            <div className="bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white text-center py-2 rounded-lg mb-4">
              Weight Loss
            </div>
            <div className="space-y-3">
              <label className="flex items-center cursor-pointer">
                <span className="text-white text-lg">Mid Weight Loss</span>
                <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                  <span className="text-gray-400 mr-3 text-lg">$14.99</span>
                  <input type="radio" name="weightLossProgram" className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4" />
                </div>
              </label>
              <label className="flex items-center cursor-pointer">
                <span className="text-white text-lg">Standard Weight Loss</span>
                <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                  <span className="text-gray-400 mr-3 text-lg">$14.99</span>
                  <input type="radio" name="weightLossProgram" className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4" />
                </div>
              </label>
              <label className="flex items-center cursor-pointer">
                <span className="text-white text-lg">Accelerated Weight Loss</span>
                <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                  <span className="text-gray-400 mr-3 text-lg">$14.99</span>
                  <input type="radio" name="weightLossProgram" className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4" />
                </div>
              </label>
            </div>
            <button className="w-full bg-[#3D3D3D] text-white py-2 rounded-lg hover:bg-[#333] transition-colors mt-4">
              BUY NOW
            </button>
          </div>

          {/* Bulking Lists */}
          <div className="bg-[#1B1B1B] rounded-xl p-4 flex flex-col h-full">
            <div>
              <div className="bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white text-center py-2 rounded-lg mb-4">
                Bulking
              </div>
              <div className="space-y-3">
                <label className="flex items-center cursor-pointer">
                  <span className="text-white text-lg">Lean Bulk</span>
                  <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                    <span className="text-gray-400 mr-3 text-lg">$14.99</span>
                    <input type="radio" name="bulkingProgram" className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4" />
                  </div>
                </label>
                <label className="flex items-center cursor-pointer">
                  <span className="text-white text-lg">Standard Bulk</span>
                  <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                    <span className="text-gray-400 mr-3 text-lg">$14.99</span>
                    <input type="radio" name="bulkingProgram" className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4" />
                  </div>
                </label>
              </div>
            </div>
            <div className="mt-auto pt-4">
              <button className="w-full bg-[#3D3D3D] text-white py-2 rounded-lg hover:bg-[#333] transition-colors">
                BUY NOW
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vegan Weight Loss */}
          <div className="bg-[#1B1B1B] rounded-xl p-4">
            <div className="bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white text-center py-2 rounded-lg mb-4">
              Weight Loss
            </div>
            <div className="text-[#00EB2B] mb-4">Vegan Options</div>
            <div className="space-y-3">
              <label className="flex items-center cursor-pointer">
                <span className="text-white text-lg">Vegan Mid</span>
                <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                  <span className="text-gray-400 mr-3 text-lg">$14.99</span>
                  <input type="radio" name="veganWeightLoss" className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4" />
                </div>
              </label>
              <label className="flex items-center cursor-pointer">
                <span className="text-white text-lg">Vegan Standard</span>
                <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                  <span className="text-gray-400 mr-3 text-lg">$14.99</span>
                  <input type="radio" name="veganWeightLoss" className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4" />
                </div>
              </label>
              <label className="flex items-center cursor-pointer">
                <span className="text-white text-lg">Vegan Accelerated</span>
                <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                  <span className="text-gray-400 mr-3 text-lg">$14.99</span>
                  <input type="radio" name="veganWeightLoss" className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4" />
                </div>
              </label>
            </div>
            <button className="w-full bg-[#3D3D3D] text-white py-2 rounded-lg hover:bg-[#333] transition-colors mt-4">
              BUY NOW
            </button>
          </div>

          {/* Vegan Bulking */}
          <div className="bg-[#1B1B1B] rounded-xl p-4 flex flex-col h-full">
            <div>
              <div className="bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white text-center py-2 rounded-lg mb-4">
                Bulking
              </div>
              <div className="text-[#00EB2B] mb-4">Vegan Options</div>
              <div className="space-y-3">
                <label className="flex items-center cursor-pointer">
                  <span className="text-white text-lg">Vegan Lean Bulk</span>
                  <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                    <span className="text-gray-400 mr-3 text-lg">$14.99</span>
                    <input type="radio" name="veganBulking" className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4" />
                  </div>
                </label>
                <label className="flex items-center cursor-pointer">
                  <span className="text-white text-lg">Vegan Standard Bulk</span>
                  <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                    <span className="text-gray-400 mr-3 text-lg">$14.99</span>
                    <input type="radio" name="veganBulking" className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4" />
                  </div>
                </label>
              </div>
            </div>
            <div className="mt-auto pt-4">
              <button className="w-full bg-[#3D3D3D] text-white py-2 rounded-lg hover:bg-[#333] transition-colors">
                BUY NOW
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Combination Packages Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <h2 className="text-4xl font-bold text-white text-center mb-4">Combination Packages</h2>
        <p className="text-center mb-12">
          Save with these complete <span className="text-[#00EB2B]">nutrition</span> + <span className="text-[#00EB2B]">training</span> bundle for maximum results
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Weight Loss Combo */}
          <div className="bg-[#1B1B1B] rounded-xl p-4">
            <div className="bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white text-center py-2 rounded-lg mb-4">
              Weight Loss Combo
            </div>
            <div className="space-y-3">
              <label className="flex items-center cursor-pointer">
                <span className="text-white text-lg">Weight Loss Grocery Lists</span>
                <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                  <span className="text-gray-400 mr-3 text-lg">$14.99</span>
                  <input type="radio" name="weightLossCombo" className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4" />
                </div>
              </label>
              <label className="flex items-center cursor-pointer">
                <span className="text-white text-lg">Weight Loss Training Program</span>
                <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                  <span className="text-gray-400 mr-3 text-lg">$14.99</span>
                  <input type="radio" name="weightLossCombo" className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4" />
                </div>
              </label>
            </div>
            <button className="w-full bg-[#3D3D3D] text-white py-2 rounded-lg hover:bg-[#333] transition-colors mt-4">
              BUY NOW
            </button>
          </div>

          {/* Muscle Building Combo */}
          <div className="bg-[#1B1B1B] rounded-xl p-4">
            <div className="bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white text-center py-2 rounded-lg mb-4">
              Muscle Building Combo
            </div>
            <div className="space-y-3">
              <label className="flex items-center cursor-pointer">
                <span className="text-white text-lg">Lean Bulking Grocery Lists</span>
                <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                  <span className="text-gray-400 mr-3 text-lg">$14.99</span>
                  <input type="radio" name="muscleBuildingCombo" className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4" />
                </div>
              </label>
              <label className="flex items-center cursor-pointer">
                <span className="text-white text-lg">Muscle Bulking Training Program</span>
                <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                  <span className="text-gray-400 mr-3 text-lg">$14.99</span>
                  <input type="radio" name="muscleBuildingCombo" className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4" />
                </div>
              </label>
            </div>
            <button className="w-full bg-[#3D3D3D] text-white py-2 rounded-lg hover:bg-[#333] transition-colors mt-4">
              BUY NOW
            </button>
          </div>
        </div>
      </section>

      {/* Transformation Ebook Section */}
      <section className="w-full bg-[#282828] py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white text-center mb-4">
            Transformation <span className="text-[#00EB2B]">Ebook</span>
          </h2>

          <div className="bg-[#1B1B1B] rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3">
                <img src={ebookImg} alt="Build Different Ebook" className="w-full h-auto" />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-white text-xl mb-4">
                  How I traveled from <span className="text-[#00EB2B]">101kg</span> to <span className="text-[#00EB2B]">78kg</span> within <span className="text-[#00EB2B]">7 months</span>
                </h3>
                <p className="text-gray-300 mb-6">
                  My complete transformation journey with all the strategies, challenges, and lessons learned along the way
                </p>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>• The Exact nutrition approach I followed</li>
                  <li>• My progressive workout strategy</li>
                </ul>
                <button className="bg-[#00A0FB] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                  $9.99 - BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
} 