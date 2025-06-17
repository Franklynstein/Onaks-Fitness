import React, { useState } from 'react';
import Footer from './Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Hero Section */}
      <div className="bg-[#161F17] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Contact Us</h1>
          <p className="text-sm text-gray-300">
            By accessing or using our website, services, content, and programs (collectively, the "Services"), you agree to be bound by the following Terms of Service. If you do not agree, please do not use our services.
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="bg-[#151515] w-full">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <form onSubmit={handleSubmit} className="bg-[#1B1B1B] rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="firstName" className="block text-sm text-gray-300 mb-2">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-[#282828] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00EB2B]"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm text-gray-300 mb-2">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-[#282828] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00EB2B]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label htmlFor="phone" className="block text-sm text-gray-300 mb-2">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#282828] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00EB2B]"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm text-gray-300 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#282828] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00EB2B]"
                />
              </div>
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="block text-sm text-gray-300 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full bg-[#282828] text-white rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00EB2B]"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white py-3 rounded-lg hover:opacity-90 transition-opacity"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      <Footer />
    </div>
  );
} 