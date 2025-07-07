import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
import ebookImg from '../assets/ebok2.png'
import glutesessionImg from '../assets/Glutesession.png'
import grocerybgImg from '../assets/grocerybg.jpg'
import { createCheckoutSession } from '../utils/stripe'
import { API_BASE_URL } from '../config/api'

// Fallback product data when API is not available
const fallbackProducts = [
  { id: 'male-fat-loss', price: 1499, name: 'Male Fat Loss Program' },
  { id: 'male-muscle-building', price: 1499, name: 'Male Muscle Building Program' },
  { id: 'male-body-recomposition', price: 1499, name: 'Male Body Recomposition Program' },
  { id: 'female-fat-loss', price: 1499, name: 'Female Fat Loss Program' },
  { id: 'female-muscle-building', price: 1499, name: 'Female Muscle Building Program' },
  { id: 'female-body-recomposition', price: 1499, name: 'Female Body Recomposition Program' },
  { id: 'weight-loss-mid', price: 999, name: 'Mid Weight Loss Grocery List' },
  { id: 'weight-loss-extreme', price: 999, name: 'Extreme Weight Loss Grocery List' },
  { id: 'bulking-mid', price: 999, name: 'Mid Bulking Grocery List' },
  { id: 'bulking-extreme', price: 999, name: 'Extreme Bulking Grocery List' },
  { id: 'vegan-weight-loss', price: 999, name: 'Vegan Weight Loss Grocery List' },
  { id: 'vegan-bulking', price: 999, name: 'Vegan Bulking Grocery List' },
  { id: 'weight-loss-combo-grocery-lists', price: 1999, name: 'Weight Loss Combo - Grocery Lists' },
  { id: 'weight-loss-combo-training', price: 1999, name: 'Weight Loss Combo - Training' },
  { id: 'muscle-building-combo-grocery-lists', price: 1999, name: 'Muscle Building Combo - Grocery Lists' },
  { id: 'muscle-building-combo-training', price: 1999, name: 'Muscle Building Combo - Training' },
  { id: 'glute-max', price: 2999, name: 'Glute Max Program' },
  { id: 'transformation-ebook', price: 999, name: 'Transformation Ebook' }
]

export default function ProgramsPage() {
  const [selectedPrograms, setSelectedPrograms] = useState({
    maleProgram: '',
    femaleProgram: '',
    weightLossProgram: '',
    bulkingProgram: '',
    veganWeightLoss: '',
    veganBulking: '',
    weightLossCombo: '',
    muscleBuildingCombo: '',
  })
  
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/payment-plans`)
        if (!response.ok) {
          throw new Error('Failed to fetch products')
        }
        const data = await response.json()
        setProducts(data)
      } catch (err) {
        console.warn('API not available, using fallback data:', err.message)
        // Use fallback data instead of showing error
        setProducts(fallbackProducts)
        setError(null) // Clear any previous errors
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [])

  // Helper function to get product by ID
  const getProduct = (productId) => {
    return products.find(product => product.id === productId)
  }

  // Helper function to format price
  const formatPrice = (priceInCents) => {
    return `$${(priceInCents / 100).toFixed(2)}`
  }

  // Helper function to get product price or default
  const getProductPrice = (productId, defaultPrice = '$14.99') => {
    const product = getProduct(productId)
    return product ? formatPrice(product.price) : defaultPrice
  }

  const handleProgramSelect = (category, value) => {
    setSelectedPrograms(prev => ({
      ...prev,
      [category]: value
    }))
  }

  const handleBuyNow = async (section) => {
    try {
      let productId

      switch (section) {
        case 'male':
          productId = selectedPrograms.maleProgram
          break
        case 'female':
          productId = selectedPrograms.femaleProgram
          break
        case 'glute':
          productId = 'glute-max'
          break
        case 'weightLoss':
          productId = selectedPrograms.weightLossProgram
          break
        case 'bulking':
          productId = selectedPrograms.bulkingProgram
          break
        case 'veganWeightLoss':
          productId = selectedPrograms.veganWeightLoss
          break
        case 'veganBulking':
          productId = selectedPrograms.veganBulking
          break
        case 'weightLossCombo':
          productId = selectedPrograms.weightLossCombo
          break
        case 'muscleBuildingCombo':
          productId = selectedPrograms.muscleBuildingCombo
          break
        case 'ebook':
          productId = 'transformation-ebook'
          break
        default:
          throw new Error('Invalid section')
      }

      if (!productId && section !== 'glute' && section !== 'ebook') {
        alert('Please select a program first')
        return
      }

      // Check if API is available before attempting checkout
      try {
        await createCheckoutSession(productId)
      } catch (checkoutError) {
        console.warn('Checkout API not available:', checkoutError.message)
        alert('Payment system is currently unavailable. Please contact us directly to purchase this program.')
      }
    } catch (error) {
      console.error('Error initiating checkout:', error)
      alert('Failed to initiate checkout. Please try again.')
    }
  }

  // Show loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="text-white text-xl">Loading programs...</div>
      </div>
    )
  }

  // Show error state
  if (error) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center">
        <div className="text-red-500 text-xl">Error: {error}</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#101010]">
      <Header />
      {/* My Programs Section - full width */}
      <section className="bg-[#161F17] mb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-16">
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4 mt-8 sm:mt-0">My Programs</h1>
          {/* <p className="text-gray-300 mb-2">
            Every program is based on methods that helped me transform from <span className="text-[#00EB2B]">10kg</span> to <span className="text-[#00EB2B]">78kg</span>.
          </p> */}
          <p className="text-[#00EB2B] italic">Real Experience. Real Results!</p>
        </div>
      </section>
      {/* All other content with 7vw padding */}
      <div className="px-[7vw]">
        {/* Training Programs Section */}
        <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
          <h2 className="text-xl sm:text-3xl font-bold text-white text-center mb-4">Training Programs</h2>
          <p className="text-[#AAAAAA] text-gray-300 text-center mb-12">From Goals to Gains. Your Transformation Begins Here</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Male Programs */}
            <div className="bg-[#1B1B1B] rounded-xl p-4">
              <div className="bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white text-center py-2 rounded-lg mb-4">
                MALE PROGRAMS
              </div>
              <div className="space-y-3">
                <label className="flex items-center cursor-pointer">
                  <span className="text-[#AAAAAA] text-white text-lg">Fat Loss Program</span>
                  <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                    <span className="text-gray-400 mr-3 text-lg">{getProductPrice('male-fat-loss')}</span>
                    <input
                      type="radio"
                      name="maleProgram"
                      value="male-fat-loss"
                      checked={selectedPrograms.maleProgram === 'male-fat-loss'}
                      onChange={(e) => handleProgramSelect('maleProgram', e.target.value)}
                      className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4"
                    />
                  </div>
                </label>
                <label className="flex items-center cursor-pointer">
                  <span className="text-[#AAAAAA] text-white text-lg">Muscle Building</span>
                  <div className="flex items-center border  bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                    <span className="text-gray-400 mr-3 text-lg">{getProductPrice('male-muscle-building')}</span>
                    <input
                      type="radio"
                      name="maleProgram"
                      value="male-muscle-building"
                      checked={selectedPrograms.maleProgram === 'male-muscle-building'}
                      onChange={(e) => handleProgramSelect('maleProgram', e.target.value)}
                      className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4"
                    />
                  </div>
                </label>
                <label className="flex items-center cursor-pointer">
                  <span className="text-[#AAAAAA] text-white text-lg">Body Recomposition</span>
                  <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                    <span className="text-gray-400 mr-3 text-lg">{getProductPrice('male-body-recomposition')}</span>
                    <input
                      type="radio"
                      name="maleProgram"
                      value="male-body-recomposition"
                      checked={selectedPrograms.maleProgram === 'male-body-recomposition'}
                      onChange={(e) => handleProgramSelect('maleProgram', e.target.value)}
                      className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4"
                    />
                  </div>
                </label>
              </div>
              <button
                onClick={() => handleBuyNow('male')}
                className="w-full bg-[#3D3D3D] text-white py-2 rounded-lg hover:bg-[#333] transition-colors mt-4"
              >
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
                  <span className="text-[#AAAAAA] text-lg">Fat Loss Program</span>
                  <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                    <span className="text-gray-400 mr-3 text-lg">{getProductPrice('female-fat-loss')}</span>
                    <input
                      type="radio"
                      name="femaleProgram"
                      value="female-fat-loss"
                      checked={selectedPrograms.femaleProgram === 'female-fat-loss'}
                      onChange={(e) => handleProgramSelect('femaleProgram', e.target.value)}
                      className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4"
                    />
                  </div>
                </label>
                <label className="flex items-center cursor-pointer">
                  <span className="text-[#AAAAAA] text-lg">Muscle Building</span>
                  <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                    <span className="text-gray-400 mr-3 text-lg">{getProductPrice('female-muscle-building')}</span>
                    <input
                      type="radio"
                      name="femaleProgram"
                      value="female-muscle-building"
                      checked={selectedPrograms.femaleProgram === 'female-muscle-building'}
                      onChange={(e) => handleProgramSelect('femaleProgram', e.target.value)}
                      className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4"
                    />
                  </div>
                </label>
                <label className="flex items-center cursor-pointer">
                  <span className="text-[#AAAAAA] text-lg">Body Composition</span>
                  <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                    <span className="text-gray-400 mr-3 text-lg">{getProductPrice('female-body-composition')}</span>
                    <input
                      type="radio"
                      name="femaleProgram"
                      value="female-body-composition"
                      checked={selectedPrograms.femaleProgram === 'female-body-composition'}
                      onChange={(e) => handleProgramSelect('femaleProgram', e.target.value)}
                      className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4"
                    />
                  </div>
                </label>
              </div>
              <button
                onClick={() => handleBuyNow('female')}
                className="w-full bg-[#3D3D3D] text-white py-2 rounded-lg hover:bg-[#333] transition-colors mt-4"
              >
                BUY NOW
              </button>
            </div>
          </div>

          {/* Glute Max Program */}
          <div 
            className="bg-[#1B1B1B] rounded-xl p-8 relative overflow-hidden"
            style={{
              backgroundImage: `url(${glutesessionImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat'
            }}
          >
            <div className="relative z-10 text-center">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4">NEW: GLUTE MAX PROGRAM</h3>
              <p className="text-gray-300 text-md mb-6">
                Specializes Training to glute development and lower body toning
              </p>
              <button 
                onClick={() => handleBuyNow('glute')}
                className="bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white px-8 py-3 rounded-lg text-sm"
              >
                {getProductPrice('glute-max', '$29.99')} - BUY NOW
              </button>
            </div>
            <div className="absolute inset-0 bg-black/5"></div>
          </div>
        </section>
      </div>
      {/* Grocery Lists Section - moved outside px-[7vw] for full width background */}
      <div 
        className="mb-20 relative"
        style={{
          backgroundImage: `url(${grocerybgImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-[7vw] py-20 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-3xl font-bold text-white text-center mb-4">Grocery Lists</h2>
          <p className="text-gray-300 text-[#AAAAAA] text-center mb-12">Curated Shopping Guide to take the guesswork out of nutrition</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Weight Loss Lists */}
            <div className="bg-[#1B1B1B] rounded-xl p-4">
              <div className="bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white text-center py-2 rounded-lg mb-4">
                Weight Loss
              </div>
              <div className="space-y-3">
                <label className="flex items-center cursor-pointer">
                  <span className="text-[#AAAAAA] text-lg">Mid Weight Loss</span>
                  <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                    <span className="text-gray-400 mr-3 text-lg">{getProductPrice('weight-loss-mid')}</span>
                    <input
                      type="radio"
                      name="weightLossProgram"
                      value="weight-loss-mid"
                      checked={selectedPrograms.weightLossProgram === 'weight-loss-mid'}
                      onChange={(e) => handleProgramSelect('weightLossProgram', e.target.value)}
                      className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4"
                    />
                  </div>
                </label>
                <label className="flex items-center cursor-pointer">
                  <span className="text-[#AAAAAA] text-lg">Standard Weight Loss</span>
                  <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                    <span className="text-gray-400 mr-3 text-lg">{getProductPrice('weight-loss-standard')}</span>
                    <input
                      type="radio"
                      name="weightLossProgram"
                      value="weight-loss-standard"
                      checked={selectedPrograms.weightLossProgram === 'weight-loss-standard'}
                      onChange={(e) => handleProgramSelect('weightLossProgram', e.target.value)}
                      className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4"
                    />
                  </div>
                </label>
                <label className="flex items-center cursor-pointer">
                  <span className="text-[#AAAAAA] text-lg">Accelerated Weight Loss</span>
                  <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                    <span className="text-gray-400 mr-3 text-lg">{getProductPrice('weight-loss-accelerated')}</span>
                    <input
                      type="radio"
                      name="weightLossProgram"
                      value="weight-loss-accelerated"
                      checked={selectedPrograms.weightLossProgram === 'weight-loss-accelerated'}
                      onChange={(e) => handleProgramSelect('weightLossProgram', e.target.value)}
                      className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4"
                    />
                  </div>
                </label>
              </div>
              <button
                onClick={() => handleBuyNow('weightLoss')}
                className="w-full bg-[#3D3D3D] text-white py-2 rounded-lg hover:bg-[#333] transition-colors mt-4"
              >
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
                    <span className="text-[#AAAAAA] text-lg">Lean Bulk</span>
                    <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                      <span className="text-gray-400 mr-3 text-lg">{getProductPrice('lean-bulk')}</span>
                      <input
                        type="radio"
                        name="bulkingProgram"
                        value="lean-bulk"
                        checked={selectedPrograms.bulkingProgram === 'lean-bulk'}
                        onChange={(e) => handleProgramSelect('bulkingProgram', e.target.value)}
                        className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4"
                      />
                    </div>
                  </label>
                  {/* <label className="flex items-center cursor-pointer">
                    <span className="text-white text-lg">Standard Bulk</span>
                    <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                      <span className="text-gray-400 mr-3 text-lg">{getProductPrice('standard-bulk')}</span>
                      <input
                        type="radio"
                        name="bulkingProgram"
                        value="standard-bulk"
                        checked={selectedPrograms.bulkingProgram === 'standard-bulk'}
                        onChange={(e) => handleProgramSelect('bulkingProgram', e.target.value)}
                        className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4"
                      />
                    </div>
                  </label> */}
                </div>
              </div>
              <div className="mt-auto pt-4">
                <button
                  onClick={() => handleBuyNow('bulking')}
                  className="w-full bg-[#3D3D3D] text-white py-2 rounded-lg hover:bg-[#333] transition-colors"
                >
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
                  <span className="text-[#AAAAAA] text-lg">Vegan Mid</span>
                  <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                    <span className="text-gray-400 mr-3 text-lg">{getProductPrice('vegan-mid')}</span>
                    <input
                      type="radio"
                      name="veganWeightLoss"
                      value="vegan-mid"
                      checked={selectedPrograms.veganWeightLoss === 'vegan-mid'}
                      onChange={(e) => handleProgramSelect('veganWeightLoss', e.target.value)}
                      className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4"
                    />
                  </div>
                </label>
                <label className="flex items-center cursor-pointer">
                  <span className="text-[#AAAAAA] text-lg">Vegan Standard</span>
                  <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                    <span className="text-gray-400 mr-3 text-lg">{getProductPrice('vegan-standard')}</span>
                    <input
                      type="radio"
                      name="veganWeightLoss"
                      value="vegan-standard"
                      checked={selectedPrograms.veganWeightLoss === 'vegan-standard'}
                      onChange={(e) => handleProgramSelect('veganWeightLoss', e.target.value)}
                      className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4"
                    />
                  </div>
                </label>
                <label className="flex items-center cursor-pointer">
                  <span className="text-[#AAAAAA] text-lg">Vegan Accelerated</span>
                  <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                    <span className="text-gray-400 mr-3 text-lg">{getProductPrice('vegan-accelerated')}</span>
                    <input
                      type="radio"
                      name="veganWeightLoss"
                      value="vegan-accelerated"
                      checked={selectedPrograms.veganWeightLoss === 'vegan-accelerated'}
                      onChange={(e) => handleProgramSelect('veganWeightLoss', e.target.value)}
                      className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4"
                    />
                  </div>
                </label>
              </div>
              <button
                onClick={() => handleBuyNow('veganWeightLoss')}
                className="w-full bg-[#3D3D3D] text-white py-2 rounded-lg hover:bg-[#333] transition-colors mt-4"
              >
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
                    <span className="text-[#AAAAAA] text-lg">Vegan Lean Bulk</span>
                    <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                      <span className="text-gray-400 mr-3 text-lg">{getProductPrice('vegan-lean-bulk')}</span>
                      <input
                        type="radio"
                        name="veganBulking"
                        value="vegan-lean-bulk"
                        checked={selectedPrograms.veganBulking === 'vegan-lean-bulk'}
                        onChange={(e) => handleProgramSelect('veganBulking', e.target.value)}
                        className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4"
                      />
                    </div>
                  </label>
                  {/* <label className="flex items-center cursor-pointer">
                    <span className="text-white text-lg">Vegan Standard Bulk</span>
                    <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                      <span className="text-gray-400 mr-3 text-lg">{getProductPrice('vegan-standard-bulk')}</span>
                      <input
                        type="radio"
                        name="veganBulking"
                        value="vegan-standard-bulk"
                        checked={selectedPrograms.veganBulking === 'vegan-standard-bulk'}
                        onChange={(e) => handleProgramSelect('veganBulking', e.target.value)}
                        className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4"
                      />
                    </div>
                  </label> */}
                </div>
              </div>
              <div className="mt-auto pt-4">
                <button
                  onClick={() => handleBuyNow('veganBulking')}
                  className="w-full bg-[#3D3D3D] text-white py-2 rounded-lg hover:bg-[#333] transition-colors"
                >
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Combination Packages Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 px-[7vw] lg:px-8 mb-20">
        <h2 className="text-2xl sm:text-4xl font-bold text-white text-center mb-4">Combination Packages</h2>
        <p className="text-[#AAAAAA] text-center mb-12">
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
                <span className="text-[#AAAAAA] text-lg">Weight Loss Grocery Lists and Training Program</span>
                <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                  <span className="text-gray-400 mr-3 text-lg">{getProductPrice('weight-loss-combo-grocery-lists')}</span>
                  <input
                    type="radio"
                    name="weightLossCombo"
                    value="weight-loss-combo-grocery-lists"
                    checked={selectedPrograms.weightLossCombo === 'weight-loss-combo-grocery-lists'}
                    onChange={(e) => handleProgramSelect('weightLossCombo', e.target.value)}
                    className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4"
                  />
                </div>
              </label>
              {/* <label className="flex items-center cursor-pointer">
                <span className="text-white text-lg">Weight Loss Training Program</span>
                <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                  <span className="text-gray-400 mr-3 text-lg">{getProductPrice('weight-loss-combo-training-program')}</span>
                  <input
                    type="radio"
                    name="weightLossCombo"
                    value="weight-loss-combo-training-program"
                    checked={selectedPrograms.weightLossCombo === 'weight-loss-combo-training-program'}
                    onChange={(e) => handleProgramSelect('weightLossCombo', e.target.value)}
                    className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4"
                  />
                </div>
              </label> */}
            </div>
            <button
              onClick={() => handleBuyNow('weightLossCombo')}
              className="w-full bg-[#3D3D3D] text-white py-2 rounded-lg hover:bg-[#333] transition-colors mt-4"
            >
              BUY NOW
            </button>
          </div>

          {/* Lean Bulking Combo */}
          <div className="bg-[#1B1B1B] rounded-xl p-4">
            <div className="bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white text-center py-2 rounded-lg mb-4">
              Lean Bulking Combo
            </div>
            <div className="space-y-3">
              <label className="flex items-center cursor-pointer">
                <span className="text-[#AAAAAA] text-lg">Lean Bulking Grocery Lists and Training Program</span>
                <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                  <span className="text-gray-400 mr-3 text-lg">{getProductPrice('lean-bulking-grocery-lists')}</span>
                  <input
                    type="radio"
                    name="muscleBuildingCombo"
                    value="lean-bulking-grocery-lists"
                    checked={selectedPrograms.muscleBuildingCombo === 'lean-bulking-grocery-lists'}
                    onChange={(e) => handleProgramSelect('muscleBuildingCombo', e.target.value)}
                    className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4"
                  />
                </div>
              </label>
              {/* <label className="flex items-center cursor-pointer">
                <span className="text-white text-lg">Lean Bulking Training Program</span>
                <div className="flex items-center border bg-[#2E2E2E] border-[#2E2E2E] rounded-lg px-3 py-1.5 ml-auto">
                  <span className="text-gray-400 mr-3 text-lg">{getProductPrice('muscle-bulking-training-program')}</span>
                  <input
                    type="radio"
                    name="muscleBuildingCombo"
                    value="muscle-bulking-training-program"
                    checked={selectedPrograms.muscleBuildingCombo === 'muscle-bulking-training-program'}
                    onChange={(e) => handleProgramSelect('muscleBuildingCombo', e.target.value)}
                    className="form-radio text-[#00EB2B] bg-[#282828] border-[#00EB2B] h-4 w-4"
                  />
                </div>
              </label> */}
            </div>
            <button
              onClick={() => handleBuyNow('muscleBuildingCombo')}
              className="w-full bg-[#3D3D3D] text-white py-2 rounded-lg hover:bg-[#333] transition-colors mt-4"
            >
              BUY NOW
            </button>
          </div>
        </div>
      </section>

      {/* Transformation Ebook Section */}
      <section className="w-full bg-[#282828] py-12 px-[7vw]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center sm:block sm:text-left">
          <h2 className="text-2xl sm:text-4xl font-bold text-white text-center mb-4">
            Transformation <span className="text-[#00EB2B]">Ebook</span>
          </h2>

          <div className="bg-[#1B1B1B] rounded-xl p-8">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-full md:w-1/3 flex justify-center sm:justify-start">
                <img src={ebookImg} alt="Build Different Ebook" className="w-3/4 max-w-48 h-auto" />
              </div>
              <div className="w-full md:w-2/3">
                <h3 className="text-lg sm:text-xl text-white mb-4">
                  How I traveled from <span className="text-[#00EB2B]">101kg</span> to <span className="text-[#00EB2B]">78kg</span> within <span className="text-[#00EB2B]">7 months</span>
                </h3>
                <p className="text-gray-300 mb-6">
                  My complete transformation journey with all the strategies, challenges, and lessons learned along the way
                </p>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li>• The Exact nutrition approach I followed</li>
                  <li>• My progressive workout strategy</li>
                </ul>
                <button 
                  onClick={() => handleBuyNow('ebook')}
                  className="bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
                >
                  {getProductPrice('transformation-ebook', '$9.99')} - BUY NOW
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