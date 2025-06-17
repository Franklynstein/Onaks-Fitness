import React from 'react';
import Footer from './Footer';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Hero Section */}
      <div className="bg-[#161F17] py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Terms Of Service</h1>
          <p className="text-gray-300">
            By accessing or using our website, services, content, and programs (collectively, the "Services"), you agree to be bound by the following Terms of Service. If you do not agree, please do not use our services.
          </p>
        </div>
      </div>

      {/* Terms Content */}
      <div className="bg-[#151515] w-full">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-12">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">1. Eligibility</h2>
              <p className="text-gray-300">
                You must be at least 18 years old or have permission from a legal guardian to use our Services. By using Onaks Fitness, you confirm you meet this requirement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use It</h2>
              <p className="text-gray-300">
                To deliver services, improve workouts, send updates and ensure a great experience. We never sell your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">3. Third-Party Sharing</h2>
              <p className="text-gray-300">
                Only shared with essential providers (like payment processors). No unauthorized access.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">4. Your Rights</h2>
              <p className="text-gray-300">
                You can access, correct, or request deletion of your data. Contact us any time at hello@onaksfitness.com
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">5. Cookies</h2>
              <p className="text-gray-300">
                We use cookies to analyze traffic and enhance user experience. You can opt out via browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">6. Policy Updates</h2>
              <p className="text-gray-300">
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