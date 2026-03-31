'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  TrendingUp, 
  Shield, 
  Globe, 
  Calculator,
  Download,
  CheckCircle,
  ArrowRight,
  Users,
  Target
} from 'lucide-react'

const investmentOpportunities = [
  {
    title: 'Issiqxona qurish',
    minInvestment: '$50,000',
    expectedReturn: '25-30%',
    paybackPeriod: '2-3 yil',
    riskLevel: 'Past',
    description: 'Zamonaviy issiqxona komplekslari qurish va eksportga yo\'naltirilgan ekinlar yetishtirish'
  },
  {
    title: 'Agro-texnologiya',
    minInvestment: '$100,000',
    expectedReturn: '30-35%',
    paybackPeriod: '2-2.5 yil',
    riskLevel: 'O\'rta',
    description: 'Yuqori texnologiyali uskunalar importi va lokal ishlab chiqarishni tashkil etish'
  },
  {
    title: 'Eksport markazi',
    minInvestment: '$500,000',
    expectedReturn: '35-40%',
    paybackPeriod: '3-4 yil',
    riskLevel: 'O\'rta',
    description: 'Yirik logistika va qayta ishlash markazi tashkil etish'
  },
  {
    title: 'Innovatsiya fondi',
    minInvestment: '$25,000',
    expectedReturn: '40-50%',
    paybackPeriod: '3-5 yil',
    riskLevel: 'Yuqori',
    description: 'Yangi texnologiyalar va startap loyihalarga investitsiya'
  }
]

const benefits = [
  {
    icon: TrendingUp,
    title: 'Yuqori rentabellik',
    description: 'O\'zbekiston qishloq xo\'jaligi sektori 25%+ yillik o\'sish ko\'rsatkichiga ega'
  },
  {
    icon: Shield,
    title: 'Hukumat qo\'llab-quvvatlashi',
    description: 'Investitsiyalarni kafolatlash va soliq imtiyozlari'
  },
  {
    icon: Globe,
    title: 'Eksport imkoniyatlari',
    description: 'Yaqin Sharq, Yevropa va Osiyo bozorlariga bepul kirish'
  },
  {
    icon: Users,
    title: 'Professionallar jamoasi',
    description: 'Xalqaro tajribaga ega mutaxassislar boshqaruvi'
  }
]

const process = [
  {
    step: '01',
    title: 'Boshlang\'ich maslahat',
    description: 'Investitsiya imkoniyatlari va risklarni o\'rganish'
  },
  {
    step: '02',
    title: 'Loyihani tanlash',
    description: 'Siz uchun eng mos loyihani tanlash va tahlil qilish'
  },
  {
    step: '03',
    title: 'Shartnoma',
    description: 'Investitsiya shartnomasini rasmiylashtirish'
  },
  {
    step: '04',
    title: 'Amalga oshirish',
    description: 'Loyihani amalga oshirish va jarayonni nazorat qilish'
  },
  {
    step: '05',
    title: 'Daromad',
    description: 'Muntazam daromad olish va investitsiyani qaytarish'
  }
]

const stats = [
  { value: '25-30%', label: 'Yillik rentabellik' },
  { value: '2-3 yil', label: 'Investitsiyani qaytishi' },
  { value: '5 yil', label: 'Kafolat muddati' },
  { value: '100+', label: 'Muvaffaqiyatli loyiha' }
]

export default function InvestorPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })

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
              <span className="block text-cream">Investorlar</span>
              <span className="block text-gold italic">uchun</span>
            </h1>
            <p className="text-xl md:text-2xl text-cream/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              O\'zbekistonning qishloq xo\'jaligi sektorida yuqori rentabelli investitsiya imkoniyatlari. 
              Biz bilan birgalikda barqaror daromad va uzoq muddatli hamkorlik quring.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gold text-dark-green font-semibold rounded-full hover:bg-gold/90 transition-all duration-300 transform hover:scale-105">
                <Download className="w-5 h-5" />
                <span>Investitsiya deklaratsiyasi</span>
              </button>
              <button className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold hover:text-dark-green transition-all duration-300 transform hover:scale-105">
                <span>Konsultatsiya</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative bg-dark-green/50 border-y border-gold/20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl md:text-4xl font-serif font-bold text-gold mb-2">
                  {stat.value}
                </div>
                <div className="text-cream/70 uppercase tracking-wide text-sm font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Opportunities */}
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
              Investitsiya imkoniyatlari
            </h2>
            <p className="text-xl text-cream/70 max-w-2xl mx-auto">
              Sizning byudjetingiz va maqsadlaringiz uchun mos loyihalar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investmentOpportunities.map((opportunity, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-dark-green/60 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 h-full group-hover:border-gold/40 transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="font-serif text-2xl font-semibold text-cream group-hover:text-gold transition-colors duration-300">
                      {opportunity.title}
                    </h3>
                    <span className={`px-3 py-1 text-xs font-medium rounded-full ${
                      opportunity.riskLevel === 'Past' ? 'bg-green-500/20 text-green-400' :
                      opportunity.riskLevel === 'O\'rta' ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {opportunity.riskLevel} risk
                    </span>
                  </div>

                  <p className="text-cream/70 leading-relaxed mb-6">
                    {opportunity.description}
                  </p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div>
                      <div className="text-cream/60 text-sm mb-1">Minimal investitsiya</div>
                      <div className="text-xl font-bold text-gold">{opportunity.minInvestment}</div>
                    </div>
                    <div>
                      <div className="text-cream/60 text-sm mb-1">Kutilayotgan daromad</div>
                      <div className="text-xl font-bold text-gold">{opportunity.expectedReturn}</div>
                    </div>
                    <div>
                      <div className="text-cream/60 text-sm mb-1">Qaytish muddati</div>
                      <div className="text-xl font-bold text-gold">{opportunity.paybackPeriod}</div>
                    </div>
                    <div>
                      <div className="text-cream/60 text-sm mb-1">Risk darajasi</div>
                      <div className="text-xl font-bold text-gold">{opportunity.riskLevel}</div>
                    </div>
                  </div>

                  <button className="w-full py-3 bg-gold/10 text-gold font-semibold rounded-lg hover:bg-gold/20 transition-colors duration-300">
                    Batafsil ma\'lumot
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
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
              Nima uchun biz bilan investitsiya qilish kerak?
            </h2>
            <p className="text-xl text-cream/70 max-w-2xl mx-auto">
              Bizning afzalliklarimiz va kafolatlarimiz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-cream mb-3">
                  {benefit.title}
                </h3>
                <p className="text-cream/70 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Investitsiya jarayoni
            </h2>
            <p className="text-xl text-cream/70 max-w-2xl mx-auto">
              Qanday qilib investitsiya qilish mumkin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-gold text-2xl font-bold">{step.step}</span>
                  </div>
                  {index < process.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gold/20" />
                  )}
                </div>
                <h3 className="font-serif text-lg font-semibold text-cream mb-2">
                  {step.title}
                </h3>
                <p className="text-cream/70 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative bg-dark-green/50">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-8">
              <Calculator className="w-12 h-12 text-gold" />
            </div>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6">
              Investitsiyangizni hisoblang
            </h2>
            <p className="text-xl text-cream/70 mb-8">
              Bizning bepul kalkulyatorimiz yordamida potensial daromadingizni hisoblang. 
              Faqat bir necha daqiqa ichida aniq natijalar oling.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gold text-dark-green font-semibold rounded-full hover:bg-gold/90 transition-all duration-300 transform hover:scale-105">
                <Calculator className="w-5 h-5" />
                <span>Kalkulyator</span>
              </button>
              <button className="inline-flex items-center space-x-2 px-8 py-4 border-2 border-gold text-gold font-semibold rounded-full hover:bg-gold hover:text-dark-green transition-all duration-300 transform hover:scale-105">
                <span>Expert maslahat</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
