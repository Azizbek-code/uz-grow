'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { 
  Building, 
  DraftingCompass, 
  Settings, 
  Lightbulb,
  Zap,
  Shield,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight
} from 'lucide-react'

const services = [
  {
    icon: Building,
    title: 'Turnkey Qurish',
    description: 'Loyihalashdan boshlab to\'liq ishga tushirishgacha bo\'lgan kompleks xizmat',
    features: [
      'Loyihalash va hujjatlashtirish',
      'Asoslar qurilishi',
      'Metal konstruksiyalar montaji',
      'Polikarbonat qoplam',
      'To\'liq jihozlash'
    ],
    image: '/images/services/turnkey.jpg'
  },
  {
    icon: DraftingCompass,
    title: 'Agro-Injiniring',
    description: 'Zamonaviy texnik yechimlar va loyihalash bo\'yicha maslahatlar',
    features: [
      'Texnik-iqtisodiy asoslash',
      '3D vizualizatsiya',
      'Klimat hisob-kitoblari',
      'Konstruktiv yechimlar',
      'Standartlarga muvofiqlik'
    ],
    image: '/images/services/engineering.jpg'
  },
  {
    icon: Settings,
    title: 'Zamonaviy Jihozlar',
    description: 'Energiya tejamkor avtomatlashtirilgan tizimlar va uskunalar',
    features: [
      'Isitish tizimlari',
      'Sovutish va ventilyatsiya',
      'Tomchilatib sug\'orish',
      'Avtomatlashtirish',
      'Yoritish tizimlari'
    ],
    image: '/images/services/equipment.jpg'
  },
  {
    icon: Lightbulb,
    title: 'Agro-Konsalting',
    description: 'Hosildorlikni oshirish va eksport yo\'nalishlari bo\'yicha konsalting',
    features: [
      'Ekin tanlash maslahati',
      'O\'g\'itlash sxemasi',
      'Kasalliklardan himoya',
      'Hosilni saqlash',
      'Eksport strategiyasi'
    ],
    image: '/images/services/consulting.jpg'
  }
]

const process = [
  {
    step: '01',
    title: 'Boshlang\'ich maslahat',
    description: 'Mijoz talablari va maydon sharoitlarini o\'rganish'
  },
  {
    step: '02',
    title: 'Loyihalash',
    description: 'Texnik yechimlar ishlab chiqish va 3D model yaratish'
  },
  {
    step: '03',
    title: 'Qurilish',
    description: 'Asoslar qurilishi va konstruksiyalar montaji'
  },
  {
    step: '04',
    title: 'Jihozlash',
    description: 'Zamonaviy uskunalar o\'rnatish va sozlash'
  },
  {
    step: '05',
    title: 'Ishga tushirish',
    description: 'Tizimlarni sinovdan o\'tkazish va to\'liq ishga tushirish'
  }
]

const advantages = [
  {
    icon: Zap,
    title: 'Tezlik',
    description: 'O\'rtacha qurilish muddati — 3-4 oy'
  },
  {
    icon: Shield,
    title: 'Kafolat',
    description: 'Har bir qurilma uchun 5 yilgacha kafolat'
  },
  {
    icon: TrendingUp,
    title: 'Rentabellik',
    description: '2-3 yil ichida investitsiyani to\'liq qaytishi'
  },
  {
    icon: Users,
    title: 'Qo\'llab-quvvatlash',
    description: '24/7 texnik yordam va maslahatlar'
  }
]

export default function ServicesPage() {
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
              <span className="block text-cream">Xizmatlar</span>
              <span className="block text-gold italic">va yechimlar</span>
            </h1>
            <p className="text-xl md:text-2xl text-cream/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              UZ-GROW kompaniyasi tomonidan taklif etiladigan toʻliq sikl agro-injiniring xizmatlari. 
              Loyihalashdan boshlab toʻliq ishga tushirishgacha — barchasini biz bajarishimiz mumkin.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Services */}
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
              Asosiy xizmatlarimiz
            </h2>
            <p className="text-xl text-cream/70 max-w-2xl mx-auto">
              Bizning toʻliq xizmatlar majmuasi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-dark-green/60 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 h-full group-hover:border-gold/40 transition-all duration-300">
                  <div className="flex items-start space-x-6">
                    {/* Icon */}
                    <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                      <service.icon className="w-8 h-8 text-gold" />
                    </div>

                    {/* Content */}
                    <div className="grow">
                      <h3 className="font-serif text-2xl font-semibold text-cream mb-3 group-hover:text-gold transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-cream/70 leading-relaxed mb-6">
                        {service.description}
                      </p>

                      {/* Features */}
                      <div className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="w-4 h-4 text-gold shrink-0" />
                            <span className="text-cream/70 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Ish jarayoni
            </h2>
            <p className="text-xl text-cream/70 max-w-2xl mx-auto">
              Loyihani qanday amalga oshiramiz
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

      {/* Advantages Section */}
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
              Nima uchun biz?
            </h2>
            <p className="text-xl text-cream/70 max-w-2xl mx-auto">
              Bizning afzalliklarimiz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((advantage, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <advantage.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-cream mb-3">
                  {advantage.title}
                </h3>
                <p className="text-cream/70 leading-relaxed">
                  {advantage.description}
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
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-6">
              Loyihangizni boshlang
            </h2>
            <p className="text-xl text-cream/70 mb-8">
              Mutaxassislarimiz sizga eng yaxshi yechimni taklif qilishlari uchun tayyor. 
              Bepul maslahat va loyiha hisob-kitobi.
            </p>
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gold text-dark-green font-semibold rounded-full hover:bg-gold/90 transition-all duration-300 transform hover:scale-105">
              <span>Bog\'lanish</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
