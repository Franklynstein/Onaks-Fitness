import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CoachingSection from './components/CoachingSection'
import FeaturesSection from './components/FeaturesSection'
import ResourcesSection from './components/ResourcesSection'
import TestimonialsSection from './components/TestimonialsSection'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSection />
        <CoachingSection />
        <FeaturesSection />
        <ResourcesSection />
        <TestimonialsSection />
        <AboutSection />
      </main>
      <Footer />
    </div>
  )
}

export default App 