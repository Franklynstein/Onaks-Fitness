import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import TopSection from './components/TopSection'
import CoachingSection from './components/CoachingSection'
import StepsSection from './components/StepsSection'
import SignupFormSection from './components/SignupFormSection'
import BenefitsSection from './components/BenefitsSection'
import ResourcesSection from './components/ResourcesSection'
import TransformationSection from './components/TransformationSection'
import JourneySection from './components/JourneySection'
import ReviewsSection from './components/ReviewsSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'
import ProgramsPage from './components/ProgramsPage'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import Contact from './components/Contact'
import Ebook from './components/Ebook'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gray-50">
            <TopSection />
            <main>
              <CoachingSection />
              <StepsSection />
              <SignupFormSection />
              <BenefitsSection />
              <ResourcesSection />
              <TransformationSection />
              <JourneySection />
              <ReviewsSection />
              <FAQSection />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ebook" element={<Ebook />} />
      </Routes>
    </Router>
  )
}

export default App 