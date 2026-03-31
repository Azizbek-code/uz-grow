'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { CheckCircle, Award, TrendingUp, Shield } from 'lucide-react'

const reasons = [
  {
    icon: CheckCircle,
    title: 'To\'liq kafolat',
    description: 'Har bir loyiha uchun 5 yilgacha kafolat va texnik yordam'
  },
  {
    icon: Award,
    title: 'Xalqaro standartlar',
    description: 'Gollandiya va Ispaniya texnologiyalari asosida zamonaviy yechimlar'
  },
  {
    icon: TrendingUp,
    title: 'Yuqori rentabellik',
    description: 'Investitsiyangiz 2-3 yil ichida qaytishi va yuqori hosildorlik'
  },
  {
    icon: Shield,
    title: 'Energiya tejamkorlik',
    description: '30% gacha energiya tejab turadigan zamonaviy texnologiyalar'
  }
]

export default function WhyUzGrowSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-linear-to-br from-dark-green to-dark-green/90" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Abstract Greenhouse Pattern */}
            <div className="relative aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30">
              {/* Grid Pattern Overlay */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23c9a84c' stroke-width='0.5'%3E%3Cpath d='M0 20h40M20 0v40M10 0v40M30 0v40M0 10h40M0 30h40'/%3E%3C/g%3E%3C/svg%3E")`
                }}
              />
              
              {/* Floating Elements */}
              <motion.div
                className="absolute top-1/4 left-1/4 w-32 h-32 bg-gold/10 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-cream/10 rounded-full blur-xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              />
            </div>
          </motion.div>

          {/* Right Side - Content */}
          <div>
            <motion.div
              className="mb-12"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6">
                Nima uchun UZ-GROW?
              </h2>
              <p className="text-xl text-cream/70 leading-relaxed">
                Biz faqat issiqxona qurish emas, balki toʻliq agro-biznes yechimlari taklif etamiz. 
                Loyihalashdan boshlab toʻliq ishga tushirishgacha — 0 dan hosilgacha.
              </p>
            </motion.div>

            {/* Reasons List */}
            <div className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center">
                    <reason.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-cream mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-cream/70 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
