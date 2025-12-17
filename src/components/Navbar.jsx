import React, { useState, useEffect } from 'react'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-elegant-dark/95 backdrop-blur-md shadow-2xl border-b border-elegant-light/30'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-accent-blue to-accent-purple bg-clip-text text-transparent hover:from-accent-purple hover:to-accent-teal transition-all tracking-tight"
            >
              F3<span className="text-white">FITNESS</span>
            </button>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-white hover:text-accent-blue font-semibold transition-colors uppercase text-sm tracking-wide"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('training')}
              className="text-white hover:text-accent-blue font-semibold transition-colors uppercase text-sm tracking-wide"
            >
              Training
            </button>
            <button
              onClick={() => scrollToSection('gallery')}
              className="text-white hover:text-accent-blue font-semibold transition-colors uppercase text-sm tracking-wide"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection('register')}
              className="text-white hover:text-accent-blue font-semibold transition-colors uppercase text-sm tracking-wide"
            >
              Register
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-white hover:text-accent-blue font-semibold transition-colors uppercase text-sm tracking-wide"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-white hover:text-accent-blue focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden pb-4 bg-elegant-dark border-t border-elegant-light/30 shadow-lg">
            <div className="flex flex-col space-y-2 mt-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-white hover:text-accent-blue hover:bg-elegant-light font-semibold text-left px-4 py-3 transition-colors rounded-lg mx-2 uppercase text-sm tracking-wide"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('training')}
                className="text-white hover:text-accent-blue hover:bg-elegant-light font-semibold text-left px-4 py-3 transition-colors rounded-lg mx-2 uppercase text-sm tracking-wide"
              >
                Training
              </button>
              <button
                onClick={() => scrollToSection('gallery')}
                className="text-white hover:text-accent-blue hover:bg-elegant-light font-semibold text-left px-4 py-3 transition-colors rounded-lg mx-2 uppercase text-sm tracking-wide"
              >
                Gallery
              </button>
              <button
                onClick={() => scrollToSection('register')}
                className="text-white hover:text-accent-blue hover:bg-elegant-light font-semibold text-left px-4 py-3 transition-colors rounded-lg mx-2 uppercase text-sm tracking-wide"
              >
                Register
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-white hover:text-accent-blue hover:bg-elegant-light font-semibold text-left px-4 py-3 transition-colors rounded-lg mx-2 uppercase text-sm tracking-wide"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar

