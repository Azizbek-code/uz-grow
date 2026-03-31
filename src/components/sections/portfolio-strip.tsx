'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight, MapPin, Square } from 'lucide-react'

const projects = [
  {
    name: 'Qulupnay majmuasi',
    location: 'Farg\'ona viloyati',
    area: '15 000 m²',
    crop: 'Qulupnay (Stellaq)',
    description: 'Zamonaviy avtomatlashtirilgan qulupnay issiqxonasi'
  },
  {
    name: 'Pomodor kompleksi',
    location: 'Toshkent viloyati',
    area: '8 000 m²',
    crop: 'Pomidor',
    description: 'Yil bo\'yi pomidor yetishtirish uchun issiqxona'
  },
  {
    name: 'Bodring fermasi',
    location: 'Jizzax viloyati',
    area: '5 000 m²',
    crop: 'Bodring',
    description: 'Golland uslubidagi yuqori texnologiyali issiqxona'
  },
  {
    name: 'Eksport markazi',
    location: 'Sirdaryo viloyati',
    area: '20 000 m²',
    crop: 'Aralash ekinlar',
    description: 'Eksportga mo\'ljallangan yirik agro-kompleks'
  },
  {
    name: 'Stellaq tizimi',
    location: 'Buxoro viloyati',
    area: '12 000 m²',
    crop: 'Qulupnay',
    description: 'Stellaq o\'stirish tizimi bilan jihozlangan issiqxona'
  },
  {
    name: 'Tomchi sug\'orish',
    location: 'Xorazm viloyati',
    area: '6 000 m²',
    crop: 'Sabzavotlar',
    description: 'Tomchi sug\'orish tizimi bilan jihozlangan kompleks'
  }
]

export default function PortfolioStrip() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length)
  }

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length)
  }

  const visibleProjects = [
    projects[currentIndex],
    projects[(currentIndex + 1) % projects.length],
    projects[(currentIndex + 2) % projects.length],
    projects[(currentIndex + 3) % projects.length]
  ]

  return (
    <section ref={ref} className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-green/50" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-4">
            Bizning loyihalarimiz
          </h2>
          <p className="text-xl text-cream/70 max-w-2xl mx-auto">
            O\'zbekiston bo\'ylab muvaffaqiyatli amalga oshirilgan 100+ loyiha
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevProject}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center text-gold hover:bg-gold/30 transition-colors duration-300 -translate-x-16"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextProject}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-gold/20 backdrop-blur-sm rounded-full flex items-center justify-center text-gold hover:bg-gold/30 transition-colors duration-300 translate-x-16"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleProjects.map((project, index) => (
              <motion.div
                key={`${project.name}-${index}`}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                {/* Card */}
                <div className="relative bg-dark-green/80 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 h-full overflow-hidden group-hover:border-gold/40 transition-all duration-300">
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="font-serif text-xl font-semibold text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                      {project.name}
                    </h3>
                    
                    {/* Meta Info */}
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-cream/70 text-sm">
                        <MapPin className="w-4 h-4 mr-2 text-gold" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-cream/70 text-sm">
                        <Square className="w-4 h-4 mr-2 text-gold" />
                        {project.area}
                      </div>
                    </div>

                    {/* Crop Type */}
                    <div className="inline-block px-3 py-1 bg-gold/20 text-gold text-sm rounded-full mb-4">
                      {project.crop}
                    </div>

                    {/* Description (shown on hover) */}
                    <motion.div
                      className="text-cream/80 text-sm leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.description}
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Progress Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gold w-8'
                    : 'bg-cream/30 hover:bg-cream/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
