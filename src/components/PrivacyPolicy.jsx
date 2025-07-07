import React from 'react';
import Footer from './Footer';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Hero Section */}
      <div className="bg-[#161F17] py-16 px-[7vw] sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-[#A0A0A0] text-gray-300 text-sm sm:text-base">
            Your privacy is important to us. Learn how we collect, use and protect your data
          </p>
        </div>
      </div>

      {/* Privacy Content */}
      <div className="bg-[#151515] w-full">
        <div className="max-w-4xl mx-auto px-[7vw] sm:px-6 lg:px-8 py-16">
          <div className="space-y-12">
            <section>
              <h2 className="text-lg sm:text-2xl font-bold text-white mb-4">1. Information We Collect</h2>
              <p className="text-[#A0A0A0] text-gray-300 text-sm sm:text-base">
                We collect personal data such as your name, email, health goals, and usage data to personalize your fitness experience.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-2xl font-bold text-white mb-4">2. How We Use It</h2>
              <p className="text-[#A0A0A0] text-gray-300 text-sm sm:text-base">
                To deliver services, improve workouts, send updates and ensure a great experience. We never sell your data.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-2xl font-bold text-white mb-4">3. Third-Party Sharing</h2>
              <p className="text-[#A0A0A0] text-gray-300 text-sm sm:text-base">
                Only shared with essential providers (like payment processors). No unauthorized access.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-2xl font-bold text-white mb-4">4. Your Rights</h2>
              <p className="text-[#A0A0A0] text-gray-300 text-sm sm:text-base">
                You can access, correct, or request deletion of your data. Contact us any time at hello@onaksfitness.com
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-2xl font-bold text-white mb-4">5. Cookies</h2>
              <p className="text-[#A0A0A0] text-gray-300 text-sm sm:text-base">
                We use cookies to analyze traffic and enhance user experience. You can opt out via browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-lg sm:text-2xl font-bold text-white mb-4">6. Policy Updates</h2>
              <p className="text-[#A0A0A0] text-gray-300 text-sm sm:text-base">
                We update this policy occasionally. Changes will be posted here with a new effective date.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
} 