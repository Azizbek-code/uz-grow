'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Calendar, ArrowRight } from 'lucide-react'

const blogPosts = [
  {
    category: 'Texnologiyalar',
    title: 'Zamonaviy issiqxona avtomatlashtirish tizimlari',
    excerpt: 'IoT texnologiyalari asosida issiqxona iqtisodiyotini avtomatlashtirish',
    date: '15 Mart, 2026',
    readTime: '5 daqiqa'
  },
  {
    category: 'Investitsiya',
    title: 'Issiqxona biznesining rentabelligi 2026',
    excerpt: 'Bozor tahlili va investitsiya imkoniyatlari ko\'rib chiqildi',
    date: '10 Mart, 2026',
    readTime: '7 daqiqa'
  },
  {
    category: 'Ekinlar',
    title: 'Qulupnay yetishtirish: Stellaq tizimining afzalliklari',
    excerpt: 'Golland uslubidagi qulupnay yetishtirish texnologiyalari',
    date: '5 Mart, 2026',
    readTime: '6 daqiqa'
  }
]

export default function BlogPreview() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-green/70" />
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-4">
            Blog va maqolalar
          </h2>
          <p className="text-xl text-cream/70 max-w-2xl mx-auto">
            Issiqxona texnologiyalari va agro-biznes boʻyicha soʻngi yangiliklar
          </p>
        </motion.div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              className="group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="relative bg-dark-green/60 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 h-full group-hover:border-gold/40 transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
                {/* Category */}
                <div className="inline-block px-3 py-1 bg-gold/20 text-gold text-sm rounded-full mb-4">
                  {post.category}
                </div>

                {/* Title */}
                <h3 className="font-serif text-xl font-semibold text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-cream/70 leading-relaxed mb-6">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex items-center justify-between text-cream/60 text-sm mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>

                {/* Read More Link */}
                <div className="flex items-center text-gold font-medium group-hover:text-gold/80 transition-colors duration-300">
                  <span>Batafsil</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <button className="inline-flex items-center space-x-2 px-6 py-3 border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold hover:text-dark-green transition-all duration-300 transform hover:scale-105">
            <span>Barcha maqolalar</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>
      </div>
    </section>
  )
}
