import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './redesign/home/HomePage'
import ProgramsRedesign from './redesign/programs/ProgramsRedesign'
import PrivacyPolicy from './components/PrivacyPolicy'
import TermsOfService from './components/TermsOfService'
import Contact from './components/Contact'
import EbookPage from './redesign/ebook/EbookPage'
import CalculatorPage from './redesign/calculator/CalculatorPage'
import FreeWorkoutForm from './components/FreeWorkoutForm'
import Success from './components/Success'
import Admin from './components/Admin'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<ProgramsRedesign />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/ebook" element={<EbookPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/workout" element={<FreeWorkoutForm />} />
        <Route path="/success" element={<Success />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default App
