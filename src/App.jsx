import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './redesign/home/HomePage'
import ProgramsPage from './components/ProgramsPage'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import Contact from './components/Contact'
import EbookPage from './redesign/ebook/EbookPage'
import CalorieCalculator from './components/CalorieCalculator'
import FreeWorkoutForm from './components/FreeWorkoutForm'
import Success from './components/Success'
import Admin from './components/Admin'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ebook" element={<EbookPage />} />
        <Route path="/calculator" element={<CalorieCalculator />} />
        <Route path="/workout" element={<FreeWorkoutForm />} />
        <Route path="/success" element={<Success />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App
