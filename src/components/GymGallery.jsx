import React from 'react'

const GymGallery = () => {
  const galleryImages = [
    {
      id: 1,
      src: '/images/gym-1.png',
      alt: 'F3 Fitness Gym - Training Area',
      title: 'Main Training Floor'
    },
    {
      id: 2,
      src: '/images/gym-2.png',
      alt: 'F3 Fitness Gym - Equipment Zone',
      title: 'Premium Equipment'
    },
    {
      id: 3,
      src: '/images/gym-3.png',
      alt: 'F3 Fitness Gym - Workout Space',
      title: 'Strength Training Zone'
    }
  ]

  return (
    <section id="gallery" className="section-padding bg-gradient-to-br from-elegant-dark via-elegant-gray to-elegant-dark">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            Our <span className="gradient-text">Facility</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto">
            State-of-the-art equipment and spacious training areas designed for your success
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative overflow-hidden rounded-xl bg-elegant-gray border border-elegant-light/30 hover:border-accent-blue transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="w-full h-64 sm:h-80 overflow-hidden bg-elegant-gray relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-elegant-dark/90 via-elegant-dark/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="text-white font-bold text-lg sm:text-xl mb-2">
                    {image.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 text-base sm:text-lg">
            Visit us to experience our world-class facilities in person
          </p>
        </div>
      </div>
    </section>
  )
}

export default GymGallery

