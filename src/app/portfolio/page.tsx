'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  MapPin, 
  Square, 
  Calendar, 
  Filter,
  Search,
  Eye,
  ArrowRight
} from 'lucide-react'

const categories = [
  { id: 'all', label: 'Barchasi' },
  { id: 'greenhouse', label: 'Issiqxona' },
  { id: 'equipment', label: 'Uskunalar' },
  { id: 'automation', label: 'Avtomatlashtirish' },
  { id: 'consulting', label: 'Konsalting' }
]

const projects = [
  {
    id: 1,
    title: 'Qulupnay majmuasi',
    category: 'greenhouse',
    location: 'Farg\'ona viloyati',
    area: '15 000 m²',
    year: '2025',
    crop: 'Qulupnay (Stellaq)',
    description: 'Zamonaviy avtomatlashtirilgan qulupnay issiqxonasi',
    image: '/images/portfolio/strawberry.jpg',
    featured: true
  },
  {
    id: 2,
    title: 'Pomodor kompleksi',
    category: 'greenhouse',
    location: 'Toshkent viloyati',
    area: '8 000 m²',
    year: '2024',
    crop: 'Pomidor',
    description: 'Yil bo\'yi pomidor yetishtirish uchun issiqxona',
    image: '/images/portfolio/tomato.jpg',
    featured: true
  },
  {
    id: 3,
    title: 'Bodring fermasi',
    category: 'greenhouse',
    location: 'Jizzax viloyati',
    area: '5 000 m²',
    year: '2024',
    crop: 'Bodring',
    description: 'Golland uslubidagi yuqori texnologiyali issiqxona',
    image: '/images/portfolio/cucumber.jpg',
    featured: false
  },
  {
    id: 4,
    title: 'Eksport markazi',
    category: 'greenhouse',
    location: 'Sirdaryo viloyati',
    area: '20 000 m²',
    year: '2025',
    crop: 'Aralash ekinlar',
    description: 'Eksportga mo\'ljallangan yirik agro-kompleks',
    image: '/images/portfolio/export.jpg',
    featured: true
  },
  {
    id: 5,
    title: 'Stellaq tizimi',
    category: 'automation',
    location: 'Buxoro viloyati',
    area: '12 000 m²',
    year: '2024',
    crop: 'Qulupnay',
    description: 'Stellaq o\'stirish tizimi bilan jihozlangan issiqxona',
    image: '/images/portfolio/stellaq.jpg',
    featured: false
  },
  {
    id: 6,
    title: 'Tomchi sug\'orish',
    category: 'equipment',
    location: 'Xorazm viloyati',
    area: '6 000 m²',
    year: '2023',
    crop: 'Sabzavotlar',
    description: 'Tomchi sug\'orish tizimi bilan jihozlangan kompleks',
    image: '/images/portfolio/irrigation.jpg',
    featured: false
  },
  {
    id: 7,
    title: 'Klimat nazorati',
    category: 'automation',
    location: 'Qashqadaryo viloyati',
    area: '10 000 m²',
    year: '2024',
    crop: 'Qalampir',
    description: 'To\'liq avtomatlashtirilgan iqlim nazorati tizimi',
    image: '/images/portfolio/climate.jpg',
    featured: true
  },
  {
    id: 8,
    title: 'Agro konsalting',
    category: 'consulting',
    location: 'Andijon viloyati',
    area: '3 000 m²',
    year: '2023',
    crop: 'Kartoshka',
    description: 'Hosildorlikni oshirish bo\'yicha kompleks konsalting',
    image: '/images/portfolio/consulting.jpg',
    featured: false
  }
]

export default function PortfolioPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.crop.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const featuredProjects = filteredProjects.filter(project => project.featured)
  const regularProjects = filteredProjects.filter(project => !project.featured)

  return (
    <div className="min-h-screen bg-dark-green text-cream">
      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23c9a84c' stroke-width='0.3' opacity='0.5'%3E%3Cpath d='M0 60h120M60 0v120M30 0v120M90 0v120M0 30h120M0 90h120'/%3E%3C/g%3E%3C/svg%3E")`
          }}
        />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-8">
              <span className="block text-cream">Portfolio</span>
              <span className="block text-gold italic">loyihalar</span>
            </h1>
            <p className="text-xl md:text-2xl text-cream/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              O\'zbekiston bo\'ylab muvaffaqiyatli amalga oshirilgan 100+ loyiha. 
              Har bir loyiha bizning professionalizm va sifatimizning namunasidir.
            </p>

            {/* Search Bar */}
            <motion.div
              className="max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gold" />
                <input
                  type="text"
                  placeholder="Loyihalarni qidirish..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-dark-green/60 backdrop-blur-sm border border-gold/20 rounded-full text-cream placeholder-cream/50 focus:outline-none focus:border-gold/50 transition-colors duration-300"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-8 relative border-b border-gold/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gold text-dark-green'
                    : 'bg-dark-green/60 text-cream/70 hover:text-cream hover:bg-dark-green/80'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      {featuredProjects.length > 0 && (
        <section className="py-24 relative">
          <div className="container mx-auto px-6">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-4">
                Tanlangan loyihalar
              </h2>
              <p className="text-xl text-cream/70 max-w-2xl mx-auto">
                Eng yirik va muhim loyihalarimiz
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-dark-green/60 backdrop-blur-sm border border-gold/20 rounded-2xl overflow-hidden group-hover:border-gold/40 transition-all duration-300">
                    {/* Image */}
                    <div className="aspect-video relative overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                        <div className="text-center">
                          <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Square className="w-10 h-10 text-gold" />
                          </div>
                          <p className="text-cream/60 text-sm">Loyiha rasmi</p>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-serif text-2xl font-semibold text-cream group-hover:text-gold transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className="px-3 py-1 bg-gold/20 text-gold text-sm rounded-full">
                          {project.year}
                        </span>
                      </div>

                      <p className="text-cream/70 leading-relaxed mb-6">
                        {project.description}
                      </p>

                      {/* Meta Info */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="flex items-center text-cream/70 text-sm">
                          <MapPin className="w-4 h-4 mr-2 text-gold" />
                          {project.location}
                        </div>
                        <div className="flex items-center text-cream/70 text-sm">
                          <Square className="w-4 h-4 mr-2 text-gold" />
                          {project.area}
                        </div>
                      </div>

                      {/* Crop */}
                      <div className="flex items-center justify-between">
                        <span className="text-gold text-sm font-medium">
                          {project.crop}
                        </span>
                        <button className="inline-flex items-center space-x-2 text-gold hover:text-gold/80 transition-colors duration-300">
                          <span>Batafsil</span>
                          <ArrowRight className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Projects Grid */}
      <section className="py-24 relative bg-dark-green/50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-4">
              Barcha loyihalar
            </h2>
            <p className="text-xl text-cream/70 max-w-2xl mx-auto">
              {filteredProjects.length} ta loyiha topildi
            </p>
          </motion.div>

          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-dark-green/60 backdrop-blur-sm border border-gold/20 rounded-2xl overflow-hidden group-hover:border-gold/40 transition-all duration-300">
                    {/* Image */}
                    <div className="aspect-video relative overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-gold/20 to-gold/5 flex items-center justify-center">
                        <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center">
                          <Square className="w-8 h-8 text-gold" />
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-serif text-xl font-semibold text-cream group-hover:text-gold transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className="text-gold text-sm">
                          {project.year}
                        </span>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div className="flex items-center text-cream/70 text-sm">
                          <MapPin className="w-4 h-4 mr-2 text-gold" />
                          {project.location}
                        </div>
                        <div className="flex items-center text-cream/70 text-sm">
                          <Square className="w-4 h-4 mr-2 text-gold" />
                          {project.area}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-gold text-sm">
                          {project.crop}
                        </span>
                        <button className="p-2 text-gold hover:text-gold/80 transition-colors duration-300">
                          <Eye className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-cream/70 text-xl">
                Hech qanday loyiha topilmadi
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6">
              O\'zingizning loyihangizni boshlang
            </h2>
            <p className="text-xl text-cream/70 mb-8">
              Bizning portfolioimiz sizga bizning qobiliyatlarimiz haqida toʻliq tasavvur beradi. 
              Endi sizning navbatingiz.
            </p>
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gold text-dark-green font-semibold rounded-full hover:bg-gold/90 transition-all duration-300 transform hover:scale-105">
              <span>Bepul maslahat</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
