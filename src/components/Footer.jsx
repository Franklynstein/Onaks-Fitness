import onaksLogo from '../assets/onaks-logo.svg'

export default function Footer() {
  return (
    <footer className="bg-[#151515] pt-20 pb-8 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-x-16 gap-y-12 mb-16 text-center">
          {/* Logo and CTA Section */}
          <div className="md:col-span-5 text-center">
            <img src={onaksLogo} alt="Onaks Fitness" className="h-16 w-auto mb-8 mx-auto" />
            <h3 className="text-[#AAAAAA] text-md text-white mb-4">Begin your journey now</h3>
            <h2 className="text-3xl font-bold text-white mb-8">Unlock the new you</h2>
            <button 
              className="bg-gradient-to-r from-[#00A0FB] to-[#00EB2B] text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity"
              onClick={() => {
                const signupForm = document.getElementById('signup-form')
                if (signupForm) {
                  signupForm.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                  })
                }
              }}
            >
              Start Your Journey
            </button>
          </div>

          {/* Spacer */}
          <div className="md:col-span-3" />

          {/* Get in touch Section */}
          <div className="md:col-span-2 text-center">
            <h4 className="text-white font-medium mb-6">Get in touch</h4>
            <div className="flex gap-6 justify-center">
              <a href="https://www.instagram.com/onaks_?igsh=dG84eDlkemJiZGtw" className="text-white hover:text-[#00EB2B] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="https://www.tiktok.com/@onaks_3?_t=ZN-8xmevES21zS&_r=1" className="text-white hover:text-[#00EB2B] transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Programs Section */}
          <div className="md:col-span-2 text-center">
            <h4 className="text-white font-medium mb-4">What are we About</h4>
            <ul className="space-y-2">
              <li><a href="/programs" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">Programs</a></li>
              <li><a href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="/terms-of-service" className="text-gray-400 hover:text-white transition-colors">Terms of service</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-gray-800 pt-8">
          <p className="text-gray-400">© 2025 ONAKS FITNESS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 