import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import { API_BASE_URL } from '../config/api'

export default function CalorieCalculator() {
  const [formData, setFormData] = useState({
    gender: 'male',
    age: '',
    weight: '',
    height: '',
    activityLevel: 'sedentary',
    goal: 'maintain',
    weightUnit: 'kg',
    email: ''
  });

  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const activityLevels = {
    sedentary: 1.2, // Little or no exercise
    light: 1.375, // Light exercise 1-3 times/week
    moderate: 1.55, // Moderate exercise 3-5 times/week
    active: 1.725, // Heavy exercise 6-7 times/week
    veryActive: 1.9 // Very heavy exercise, physical job
  };

  const goalMultipliers = {
    lose: -500, // Calorie deficit for weight loss
    maintain: 0, // Maintain current weight
    gain: 500 // Calorie surplus for weight gain
  };

  const convertToKg = (weight, unit) => {
    return unit === 'lbs' ? weight * 0.453592 : weight;
  };

  const calculateBMR = () => {
    const { gender, age, weight, height, weightUnit } = formData;
    const weightInKg = convertToKg(parseFloat(weight), weightUnit);
    
    // Mifflin-St Jeor Equation
    if (gender === 'male') {
      return (10 * weightInKg) + (6.25 * height) - (5 * age) + 5;
    } else {
      return (10 * weightInKg) + (6.25 * height) - (5 * age) - 161;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    const bmr = calculateBMR();
    const tdee = bmr * activityLevels[formData.activityLevel];
    const dailyCalories = Math.round(tdee + goalMultipliers[formData.goal]);

    const calculationResults = {
      bmr: Math.round(bmr),
      tdee: Math.round(tdee),
      dailyCalories,
      userDetails: {
        ...formData
      }
    };

    try {
      const response = await fetch(`${API_BASE_URL}/api/send-calorie-results`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(calculationResults),
      });

      if (!response.ok) throw new Error('Failed to send email');

      setSubmitStatus({
        type: 'success',
        message: 'Your calorie calculation results have been sent to your email!'
      });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send results. Please try again.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-[#050505] font-['Plus_Jakarta_Sans']">
      <Header />
      <div className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-white mb-4">
              Calorie <span className="text-[#00EB2B]">Calculator</span>
            </h1>
            <p className="text-gray-300">
              Calculate your daily calorie needs and receive the results in your email
            </p>
          </div>

          <div className="bg-[#151515] rounded-2xl p-8 md:p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Email Input */}
              <div>
                <label className="block text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-[#1B1B1B] text-white rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#00EB2B]"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Gender Selection */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  className={`p-4 rounded-xl text-center ${
                    formData.gender === 'male' 
                      ? 'bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white' 
                      : 'bg-[#1B1B1B] text-gray-400'
                  }`}
                  onClick={() => handleInputChange({ target: { name: 'gender', value: 'male' } })}
                >
                  Male
                </button>
                <button
                  type="button"
                  className={`p-4 rounded-xl text-center ${
                    formData.gender === 'female' 
                      ? 'bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white' 
                      : 'bg-[#1B1B1B] text-gray-400'
                  }`}
                  onClick={() => handleInputChange({ target: { name: 'gender', value: 'female' } })}
                >
                  Female
                </button>
              </div>

              {/* Basic Info */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="block text-gray-300 mb-2">Age</label>
                  <div className="relative">
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleInputChange}
                      className="w-full bg-[#1B1B1B] text-white rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#00EB2B]"
                      placeholder="Years"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Weight</label>
                  <div className="relative">
                    <input
                      type="number"
                      name="weight"
                      value={formData.weight}
                      onChange={handleInputChange}
                      className="w-full bg-[#1B1B1B] text-white rounded-xl p-4 pr-24 focus:outline-none focus:ring-2 focus:ring-[#00EB2B]"
                      placeholder="Weight"
                      required
                    />
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 flex rounded-lg overflow-hidden">
                      <button
                        type="button"
                        className={`px-4 py-2 text-sm transition-colors ${
                          formData.weightUnit === 'kg'
                            ? 'bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white'
                            : 'bg-[#282828] text-gray-400 hover:bg-[#333]'
                        }`}
                        onClick={() => handleInputChange({ target: { name: 'weightUnit', value: 'kg' } })}
                      >
                        kg
                      </button>
                      <button
                        type="button"
                        className={`px-4 py-2 text-sm transition-colors ${
                          formData.weightUnit === 'lbs'
                            ? 'bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white'
                            : 'bg-[#282828] text-gray-400 hover:bg-[#333]'
                        }`}
                        onClick={() => handleInputChange({ target: { name: 'weightUnit', value: 'lbs' } })}
                      >
                        lbs
                      </button>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="block text-gray-300 mb-2">Height</label>
                  <div className="relative">
                    <input
                      type="number"
                      name="height"
                      value={formData.height}
                      onChange={handleInputChange}
                      className="w-full bg-[#1B1B1B] text-white rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#00EB2B]"
                      placeholder="cm"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Activity Level */}
              <div>
                <label className="block text-gray-300 mb-2">Activity Level</label>
                <select
                  name="activityLevel"
                  value={formData.activityLevel}
                  onChange={handleInputChange}
                  className="w-full bg-[#1B1B1B] text-white rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-[#00EB2B]"
                >
                  <option value="sedentary">Sedentary (Little or no exercise)</option>
                  <option value="light">Light (Exercise 1-3 times/week)</option>
                  <option value="moderate">Moderate (Exercise 3-5 times/week)</option>
                  <option value="active">Active (Exercise 6-7 times/week)</option>
                  <option value="veryActive">Very Active (Hard exercise & physical job)</option>
                </select>
              </div>

              {/* Goal */}
              <div>
                <label className="block text-gray-300 mb-2">Goal</label>
                <div className="grid grid-cols-3 gap-4">
                  <button
                    type="button"
                    className={`p-4 rounded-xl text-center ${
                      formData.goal === 'lose' 
                        ? 'bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white' 
                        : 'bg-[#1B1B1B] text-gray-400'
                    }`}
                    onClick={() => handleInputChange({ target: { name: 'goal', value: 'lose' } })}
                  >
                    Lose Weight
                  </button>
                  <button
                    type="button"
                    className={`p-4 rounded-xl text-center ${
                      formData.goal === 'maintain' 
                        ? 'bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white' 
                        : 'bg-[#1B1B1B] text-gray-400'
                    }`}
                    onClick={() => handleInputChange({ target: { name: 'goal', value: 'maintain' } })}
                  >
                    Maintain
                  </button>
                  <button
                    type="button"
                    className={`p-4 rounded-xl text-center ${
                      formData.goal === 'gain' 
                        ? 'bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white' 
                        : 'bg-[#1B1B1B] text-gray-400'
                    }`}
                    onClick={() => handleInputChange({ target: { name: 'goal', value: 'gain' } })}
                  >
                    Gain Weight
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className={`w-full bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white py-4 rounded-xl text-lg font-semibold transition-all ${
                  isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
                }`}
              >
                {isLoading ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Calculate & Send Results'
                )}
              </button>

              {submitStatus && (
                <div className={`mt-4 p-4 rounded-xl ${
                  submitStatus.type === 'success' 
                    ? 'bg-green-900/50 text-green-300' 
                    : 'bg-red-900/50 text-red-300'
                }`}>
                  {submitStatus.message}
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
} 