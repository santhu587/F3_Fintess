import React from 'react'

const Modules = () => {
  const modules = [
    {
      id: 'pt',
      title: 'Personal Training (PT)',
      description: 'One-on-one personalized training sessions tailored to your specific goals.',
      features: [
        'Custom workout plans designed for you',
        'One-on-one sessions with expert trainers',
        'Nutrition guidance and meal planning',
        'Progress tracking and adjustments',
        'Flexible scheduling',
        'Goal-oriented approach',
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: 'primary',
    },
    {
      id: 'general',
      title: 'General Training',
      description: 'Group workouts and standard training programs for all fitness levels.',
      features: [
        'Group workout sessions',
        'Standard training schedule',
        'Affordable membership options',
        'Access to all gym facilities',
        'Community support and motivation',
        'Variety of workout classes',
      ],
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: 'secondary',
    },
  ]

  return (
    <section id="modules" className="section-padding bg-cult-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white mb-4 sm:mb-6 px-2">
            Our Training <span className="text-cult-orange">Modules</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto px-4 font-medium">
            Choose the training program that best fits your fitness goals and lifestyle
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {modules.map((module) => (
            <div
              key={module.id}
              className="cult-card group"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-cult-orange/20 text-cult-orange mb-6 sm:mb-8 group-hover:bg-cult-orange group-hover:text-white transition-all duration-300`}>
                {module.icon}
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-4 sm:mb-6">
                {module.title}
              </h3>
              
              <p className="text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg font-medium">
                {module.description}
              </p>

              <ul className="space-y-3 sm:space-y-4 mb-8 sm:mb-10">
                {module.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg
                      className="w-6 h-6 text-cult-orange mr-3 flex-shrink-0 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={3}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-base sm:text-lg text-gray-300 font-medium">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  const element = document.getElementById('register')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                  }
                }}
                className="btn-primary w-full"
              >
                Choose {module.title}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Modules

