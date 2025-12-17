import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FitnessQuotes from './components/FitnessQuotes'
import TrainingPrograms from './components/TrainingPrograms'
import GymGallery from './components/GymGallery'
import RegistrationForm from './components/RegistrationForm'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FitnessQuotes />
      <TrainingPrograms />
      <GymGallery />
      <RegistrationForm />
      <footer className="bg-elegant-dark text-white py-10 sm:py-12 text-center border-t border-elegant-light/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-gray-400 text-base sm:text-lg font-medium mb-2">
            © 2024 F3 Fitness. All rights reserved.
          </p>
          <p className="text-gray-500 text-sm sm:text-base">
            Designed and developed by <span className="text-accent-blue font-semibold">Santhosh Chandra</span>
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

