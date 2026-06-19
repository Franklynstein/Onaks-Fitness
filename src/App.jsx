import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import TopSection from './components/TopSection'
import CoachingSection from './components/CoachingSection'
import VideoSection from './components/VideoSection'
import ConsultationCTA from './components/ConsultationCTA'
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
import CalorieCalculator from './components/CalorieCalculator'
import FreeWorkoutForm from './components/FreeWorkoutForm'
import Success from './components/Success'
import Admin from './components/Admin'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-gray-50">
            <Header />
            <TopSection />
            <main>
              <CoachingSection />
              <VideoSection />
              <ConsultationCTA variant="A" id="book-consultation" />
              <BenefitsSection />
              <ResourcesSection />
              <TransformationSection />
              <ConsultationCTA variant="A" />
              <JourneySection />
              <ReviewsSection />
              <ConsultationCTA variant="B" id="book-consultation-bottom" />
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
        <Route path="/calculator" element={<CalorieCalculator />} />
        <Route path="/workout" element={<FreeWorkoutForm />} />
        <Route path="/success" element={<Success />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App
