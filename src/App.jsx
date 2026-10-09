import { useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import HomePage from './redesign/home/HomePage'
import ProgramsRedesign from './redesign/programs/ProgramsRedesign'
import EbookPage from './redesign/ebook/EbookPage'
import CalculatorPage from './redesign/calculator/CalculatorPage'
import FreeWorkoutPage from './redesign/free-workout/FreeWorkoutPage'
import PrivacyPolicyPage from './redesign/pages/PrivacyPolicyPage'
import TermsOfServicePage from './redesign/pages/TermsOfServicePage'
import ContactPage from './redesign/pages/ContactPage'
import SuccessPage from './redesign/pages/SuccessPage'
import NotFoundPage from './redesign/pages/NotFoundPage'
import LoginPage from './redesign/auth/LoginPage'
import SignupPage from './redesign/auth/SignupPage'
import ForgotPasswordPage from './redesign/auth/ForgotPasswordPage'
import ResetPasswordPage from './redesign/auth/ResetPasswordPage'
import AdminPage from './redesign/admin/AdminPage'

// Scroll to top on route change; scroll to the section when navigating to a hash.
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) { const t = setTimeout(() => el.scrollIntoView({ block: 'start' }), 60); return () => clearTimeout(t) }
    }
    window.scrollTo(0, 0)
  }, [pathname, hash])
  return null
}

function App() {
  return (
    <Router>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/programs" element={<ProgramsRedesign />} />
        <Route path="/ebook" element={<EbookPage />} />
        <Route path="/calculator" element={<CalculatorPage />} />
        <Route path="/workout" element={<FreeWorkoutPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  )
}

export default App
