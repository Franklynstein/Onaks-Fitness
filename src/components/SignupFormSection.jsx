import { useState } from 'react'

export default function SignupFormSection() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    goal: null,
    age: null,
    gender: null,
    occupation: '',
    inspiration: '',
    investment: null,
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    instagram: ''
  })

  const goals = [
    { id: 'weight-loss', label: 'Weight Loss' },
    { id: 'build-muscle', label: 'Build muscle' },
    { id: 'healthy-lifestyle', label: 'Healthy lifestyle' }
  ]

  const ageRanges = [
    { id: '18-25', label: '18-25' },
    { id: '26-35', label: '26-35' },
    { id: '36-45', label: '36-45' },
    { id: '46+', label: '46+' }
  ]

  const genders = [
    { id: 'male', label: 'Male' },
    { id: 'female', label: 'Female' },
    { id: 'other', label: 'Other' },
    { id: 'prefer-not-to-say', label: 'Prefer not to answer' }
  ]

  const investmentOptions = [
    { id: 'yes', label: 'Yes' },
    { id: 'no', label: 'No' }
  ]

  const handleNext = () => {
    if (currentStep < 10) {
      setCurrentStep(prev => prev + 1)
    }
  }

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1)
    }
  }

  const handleInputChange = (field) => (e) => {
    setFormData(prev => ({ ...prev, [field]: e.target.value }))
  }

  const getCurrentQuestion = () => {
    switch (currentStep) {
      case 1:
        return {
          question: "What is your primary fitness goal?",
          type: 'options',
          options: goals,
          value: formData.goal,
          onChange: (value) => setFormData(prev => ({ ...prev, goal: value }))
        }
      case 2:
        return {
          question: "How old are you?",
          type: 'options',
          options: ageRanges,
          value: formData.age,
          onChange: (value) => setFormData(prev => ({ ...prev, age: value }))
        }
      case 3:
        return {
          question: "What is your gender?",
          type: 'options',
          options: genders,
          value: formData.gender,
          onChange: (value) => setFormData(prev => ({ ...prev, gender: value }))
        }
      case 4:
        return {
          question: "What is your occupation?",
          type: 'text',
          value: formData.occupation,
          onChange: handleInputChange('occupation')
        }
      case 5:
        return {
          question: "What is inspiring you today to start the fitness journey?",
          type: 'textarea',
          value: formData.inspiration,
          onChange: handleInputChange('inspiration')
        }
      case 6:
        return {
          question: "Are you willing to invest financially in this 1:1 coaching experience",
          type: 'options',
          options: investmentOptions,
          value: formData.investment,
          onChange: (value) => setFormData(prev => ({ ...prev, investment: value }))
        }
      case 7:
        return {
          question: "Personal Information",
          type: 'name',
          firstName: formData.firstName,
          lastName: formData.lastName,
          onChange: {
            firstName: handleInputChange('firstName'),
            lastName: handleInputChange('lastName')
          }
        }
      case 8:
        return {
          question: "What is your phone number?",
          type: 'text',
          value: formData.phone,
          onChange: handleInputChange('phone')
        }
      case 9:
        return {
          question: "What is your email address?",
          type: 'email',
          value: formData.email,
          onChange: handleInputChange('email')
        }
      case 10:
        return {
          question: "What is your instagram handle?",
          type: 'text',
          value: formData.instagram,
          onChange: handleInputChange('instagram')
        }
      default:
        return null
    }
  }

  const currentQuestion = getCurrentQuestion()
  const isNextDisabled = () => {
    switch (currentQuestion.type) {
      case 'options':
        return !currentQuestion.value
      case 'text':
      case 'textarea':
        return !currentQuestion.value.trim()
      case 'name':
        return !currentQuestion.firstName.trim() || !currentQuestion.lastName.trim()
      default:
        return false
    }
  }

  const renderQuestionContent = () => {
    switch (currentQuestion.type) {
      case 'options':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {currentQuestion.options.map((option) => (
              <button
                key={option.id}
                className={`p-3 rounded-lg text-sm font-medium transition-all duration-200
                  ${option.id === 'prefer-not-to-sa' || option.id === 'healthy-lifestyle' ? 'md:col-span-2' : ''}
                  ${currentQuestion.value === option.id 
                    ? 'bg-[#C3C3C3] text-black border-2 border-[#C3C3C3]' 
                    : 'bg-[#1E271F] text-white border-2 border-transparent hover:border-[#C3C3C3]'
                  }`}
                onClick={() => currentQuestion.onChange(option.id)}
              >
                {option.label}
              </button>
            ))}
          </div>
        )
      case 'text':
      case 'email':
        return (
          <input
            type={currentQuestion.type}
            value={currentQuestion.value}
            onChange={currentQuestion.onChange}
            className="w-full p-3 rounded-lg text-sm bg-[#1E271F] text-white border-2 border-transparent focus:border-[#C3C3C3] outline-none mb-8"
            placeholder="Type here"
          />
        )
      case 'textarea':
        return (
          <textarea
            value={currentQuestion.value}
            onChange={currentQuestion.onChange}
            className="w-full p-3 rounded-lg text-sm bg-[#1E271F] text-white border-2 border-transparent focus:border-[#C3C3C3] outline-none mb-8 min-h-[100px]"
            placeholder="Type here"
          />
        )
      case 'name':
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <input
              type="text"
              value={currentQuestion.firstName}
              onChange={currentQuestion.onChange.firstName}
              className="w-full p-3 rounded-lg text-sm bg-[#1E271F] text-white border-2 border-transparent focus:border-[#C3C3C3] outline-none"
              placeholder="First Name"
            />
            <input
              type="text"
              value={currentQuestion.lastName}
              onChange={currentQuestion.onChange.lastName}
              className="w-full p-3 rounded-lg text-sm bg-[#1E271F] text-white border-2 border-transparent focus:border-[#C3C3C3] outline-none"
              placeholder="Last Name"
            />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <section className="bg-[#050505] py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold mb-12">
          <span className="text-white">Sign up for my </span>
          <span className="text-[#00EB2B]">coaching</span>
          <span className="text-white"> here</span>
        </h2>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-white text-xl mb-8">{currentQuestion.question}</h3>
          
          {renderQuestionContent()}

          <div className="flex justify-between gap-4">
            <button 
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                ${currentStep === 1 
                  ? 'bg-[#1E271F]/50 text-white/50 cursor-not-allowed' 
                  : 'bg-[#1E271F] text-white hover:bg-[#2a362c]'}`}
              onClick={handlePrevious}
              disabled={currentStep === 1}
            >
              Previous
            </button>
            <button 
              className={`px-6 py-2 rounded-lg text-sm font-medium transition-colors duration-200
                ${isNextDisabled()
                  ? 'bg-[#1E271F]/50 text-white/50 cursor-not-allowed' 
                  : 'bg-[#1E271F] text-white hover:bg-[#2a362c]'}`}
              onClick={handleNext}
              disabled={isNextDisabled()}
            >
              {currentStep === 10 ? 'Submit' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 