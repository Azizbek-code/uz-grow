'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Download, TrendingUp, Globe, Shield } from 'lucide-react'

const investmentHighlights = [
  {
    icon: TrendingUp,
    value: '25-30%',
    description: 'Yillik rentabellik'
  },
  {
    icon: Globe,
    value: '2-3 yil',
    description: 'Investitsiyani qaytishi'
  },
  {
    icon: Shield,
    value: '5 yil',
    description: 'Kafolat muddati'
  }
]

export default function InvestorCTA() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-24 relative">
      {/* Background with grain texture */}
      <div className="absolute inset-0 bg-dark-green">
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-6xl font-bold text-cream mb-6">
              Yuqori rentabelli
              <span className="block text-gold">agro investitsiya</span>
            </h2>
            <p className="text-xl text-cream/70 leading-relaxed max-w-2xl mx-auto">
              O\'zbekistonning qishloq xo\'jaligi sektorida o\'sish potentsiali 
              va zamonaviy issiqxona texnologiyalari orqali barqaror daromad oling.
            </p>
          </motion.div>

          {/* Investment Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {investmentHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <highlight.icon className="w-8 h-8 text-gold" />
                </div>
                <div className="font-serif text-3xl font-bold text-gold mb-2">
                  {highlight.value}
                </div>
                <div className="text-cream/70">
                  {highlight.description}
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <button className="group relative inline-flex items-center space-x-3 px-8 py-4 bg-gold text-dark-green font-semibold rounded-full hover:bg-gold/90 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-gold/25">
              <Download className="w-5 h-5" />
              <span>PDF Prezentatsiya yuklab olish</span>
              <div className="absolute inset-0 rounded-full bg-gold opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
            </button>
          </motion.div>

          {/* Additional Info */}
          <motion.div
            className="mt-12 text-cream/60 text-sm"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <p>* Toʻliq maʼlumot uchun bizning investitsiya maslahatchimiz bilan bogʻlaning</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
