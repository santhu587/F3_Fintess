import React, { useState } from 'react'

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    program: 'fat-loss',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // FormSubmit configuration - sends directly to owner's email
      const formDataToSend = new FormData()
      formDataToSend.append('name', formData.name)
      formDataToSend.append('email', formData.email)
      formDataToSend.append('phone', formData.phone)
      formDataToSend.append('program', formData.program)
      formDataToSend.append('_to', 'santhoshckm2001@gmail.com')
      formDataToSend.append('_subject', `New Registration: ${formData.name} - ${formData.program}`)
      formDataToSend.append('_template', 'table')
      formDataToSend.append('_message', `
        New Registration Details:
        
        Name: ${formData.name}
        Email: ${formData.email}
        Phone: ${formData.phone}
        Training Module: ${formData.module}
      `)

      const response = await fetch('https://formsubmit.co/ajax/santhoshckm2001@gmail.com', {
        method: 'POST',
        body: formDataToSend,
        headers: {
          'Accept': 'application/json'
        }
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus({
          type: 'success',
          message: 'Registration successful! We will contact you soon.',
        })
        setFormData({ name: '', email: '', phone: '', program: 'fat-loss' })
      } else {
        throw new Error('Submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitStatus({
        type: 'error',
        message: 'Failed to submit. Please try again or contact us directly.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="register" className="section-padding bg-gradient-to-br from-elegant-dark via-elegant-gray to-elegant-dark">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 sm:mb-6">
            Register <span className="gradient-text">Now</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 px-2 font-medium">
            Start your fitness journey today. Fill out the form below and we'll get in touch!
          </p>
        </div>

        <div className="elegant-card">
          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-lg border border-elegant-light/50 rounded-xl bg-elegant-gray text-white placeholder-gray-500 focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-lg border border-elegant-light/50 rounded-xl bg-elegant-gray text-white placeholder-gray-500 focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all"
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-lg border border-elegant-light/50 rounded-xl bg-elegant-gray text-white placeholder-gray-500 focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all"
              />
            </div>

            <div>
              <label htmlFor="program" className="block text-sm font-bold text-white mb-2 uppercase tracking-wide">
                Training Program *
              </label>
              <select
                id="program"
                name="program"
                value={formData.program}
                onChange={handleChange}
                required
                className="w-full px-4 sm:px-5 py-3 sm:py-4 text-base sm:text-lg border border-elegant-light/50 rounded-xl bg-elegant-gray text-white focus:ring-2 focus:ring-accent-blue focus:border-accent-blue transition-all"
              >
                <option value="fat-loss">🔥 Fat Loss</option>
                <option value="muscle-building">💪 Muscle Building</option>
                <option value="calisthenics">🤸 Calisthenics</option>
              </select>
            </div>

            {submitStatus && (
              <div
                className={`p-4 sm:p-5 rounded-xl text-base sm:text-lg font-medium ${
                  submitStatus.type === 'success'
                    ? 'bg-green-900/30 text-green-400 border border-green-600'
                    : submitStatus.type === 'error'
                    ? 'bg-red-900/30 text-red-400 border border-red-600'
                    : 'bg-blue-900/30 text-blue-400 border border-blue-600'
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Registration'}
            </button>
          </form>

          <div id="contact" className="mt-8 sm:mt-10 pt-8 sm:pt-10 border-t border-elegant-light/30">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">Contact Us</h3>
            <div className="space-y-3 text-base sm:text-lg text-gray-300">
              <p>
                <strong className="text-accent-blue">Email:</strong> <a href="mailto:info@f3fitness.com" className="hover:text-accent-blue transition-colors">info@f3fitness.com</a>
              </p>
              <p>
                <strong className="text-accent-blue">Trainer:</strong> <span className="text-white">Saleem Ahmed 💪🏻</span>
              </p>
              <p>
                <strong className="text-accent-blue">Phone:</strong> <a href="tel:+917892052961" className="hover:text-accent-blue transition-colors">+91 78920 52961</a>
              </p>
              <p>
                <strong className="text-accent-blue">WhatsApp:</strong> <a href="https://wa.me/917892052961" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Chat on WhatsApp
                </a>
              </p>
              <p>
                <strong className="text-accent-blue">Instagram:</strong> <a href="https://instagram.com/f3fitness" target="_blank" rel="noopener noreferrer" className="hover:text-accent-blue transition-colors inline-flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  @f3fitness
                </a>
              </p>
              <p>
                <strong className="text-accent-blue">Address:</strong> 12, 2nd Cross Rd, near Water tank, Stage 2, BTM 2nd Stage, BTM Layout, Bengaluru, Karnataka 560076
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RegistrationForm

