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

function App() {
  return (
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
  )
}

export default App 