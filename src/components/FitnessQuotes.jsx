import React from 'react'

const FitnessQuotes = () => {
  const quotes = [
    {
      text: "The only bad workout is the one that didn't happen.",
      author: "Unknown"
    },
    {
      text: "Take care of your body. It's the only place you have to live.",
      author: "Jim Rohn"
    },
    {
      text: "Strength does not come from physical capacity. It comes from an indomitable will.",
      author: "Mahatma Gandhi"
    },
    {
      text: "The body achieves what the mind believes.",
      author: "Napoleon Hill"
    },
    {
      text: "Success is the sum of small efforts repeated day in and day out.",
      author: "Robert Collier"
    },
    {
      text: "Your body can stand almost anything. It's your mind you have to convince.",
      author: "Unknown"
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-elegant-dark via-elegant-gray to-elegant-dark">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Fitness <span className="gradient-text">Inspiration</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Words of wisdom to fuel your fitness journey
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {quotes.map((quote, index) => (
            <div
              key={index}
              className="elegant-card text-center group"
            >
              <svg
                className="w-8 h-8 text-accent-blue mb-4 mx-auto opacity-50 group-hover:opacity-100 transition-opacity"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-lg sm:text-xl text-gray-300 mb-4 font-medium italic">
                "{quote.text}"
              </p>
              <p className="text-sm text-gray-500 font-semibold">
                — {quote.author}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FitnessQuotes

