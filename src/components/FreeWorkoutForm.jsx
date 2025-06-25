import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

export default function FreeWorkoutForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    firstName: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});
    
    // Validate form
    const newErrors = {};
    if (!formData.email) newErrors.email = 'This field is required.';
    if (!formData.firstName) newErrors.firstName = 'This field is required.';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
      } else {
        setErrors({ submit: data.message });
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ 
        submit: 'Failed to submit. Please try again later.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050505]">
      <Header />
      <main className="flex-grow flex flex-col items-center px-4 py-12">
        {!isSuccess ? (
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold mb-6 text-white">Free Weekly Workout Program!</h1>
              <p className="text-lg text-gray-300">
                Enter your information below and I will shoot the workout program right over to your email!
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-white">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } px-3 py-2 text-lg shadow-sm focus:border-blue-500 focus:outline-none bg-[#151515] text-white`}
                />
                {errors.email && (
                  <p className="mt-1 text-red-500">{errors.email}</p>
                )}
              </div>

              <div>
                <label htmlFor="firstName" className="block text-lg font-medium text-white">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`mt-1 block w-full rounded-md border ${
                    errors.firstName ? 'border-red-500' : 'border-gray-300'
                  } px-3 py-2 text-lg shadow-sm focus:border-blue-500 focus:outline-none bg-[#151515] text-white`}
                />
                {errors.firstName && (
                  <p className="mt-1 text-red-500">{errors.firstName}</p>
                )}
              </div>

              {errors.submit && (
                <p className="text-red-500 text-center">{errors.submit}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white text-xl font-medium py-3 rounded-md hover:opacity-90 transition-opacity duration-200"
              >
                {isSubmitting ? 'Sending...' : 'Send Me My Workouts!'}
              </button>
            </form>
          </div>
        ) : (
          <div className="w-full max-w-2xl text-center">
            <h1 className="text-4xl font-bold mb-6 text-white">Free Weekly Workout Program!</h1>
            <p className="text-xl text-gray-300 mb-4">
              Success! Check Your Email For The Subject Title "Weekly Workouts" coming from Onaksfitness@gmail.com!
            </p>
            <p className="text-lg text-gray-400">
              If you don't see it at first, please be sure to check your junk or spam folder!
            </p>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
} 