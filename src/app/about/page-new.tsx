'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Globe, Target, Heart, Shield } from 'lucide-react'

const milestones = [
  {
    year: '2021',
    title: 'Kompaniya asos solindi',
    description: 'UZ-GROW O\'zbekistonda zamonaviy issiqxona texnologiyalarini joriy etish maqsadida tashkil etildi'
  },
  {
    year: '2022',
    title: 'Birinchi yirik loyiha',
    description: '15 gektar maydonda birinchi turnkey issiqxona kompleksi muvaffaqiyatli qurildi'
  },
  {
    year: '2023',
    title: 'Xalqaro hamkorlik',
    description: 'Gollandiya va Ispaniya yetakchi ishlab chiqaruvchilari bilan rasmiy hamkorlik shartnomalari imzolandi'
  },
  {
    year: '2024',
    title: 'Innovatsiya markazi',
    description: 'O\'zbekistonda birinchi zamonaviy issiqxona texnologiyalari tadqiqot markazi ochildi'
  },
  {
    year: '2025',
    title: 'Ekspansiyani boshlash',
    description: 'Markaziy Osiyo bozoriga chiqish va 100+ loyihani muvaffaqiyatli yakunlash'
  }
]

const values = [
  {
    icon: Target,
    title: 'Sifat',
    description: 'Har bir loyiha xalqaro standartlarga muvofiq bajariladi'
  },
  {
    icon: Heart,
    title: 'Ishonch',
    description: 'Mijozlarimiz bilan uzoq muddatli hamkorlik quramiz'
  },
  {
    icon: Globe,
    title: 'Innovatsiya',
    description: 'Eng yangi texnologiyalarni doimiy ravishda joriy etamiz'
  },
  {
    icon: Shield,
    title: 'Kafolat',
    description: 'Har bir qurilma uchun 5 yilgacha kafolat beramiz'
  },
  {
    icon: Users,
    title: 'Jamoaviylik',
    description: 'Barcha jarayonda birgalikda ishlaymiz'
  },
  {
    icon: Award,
    title: 'Professionalizm',
    description: 'Yuqori malakali mutaxassislar jamoasi'
  }
]

const team = [
  {
    name: 'Azizbek Karimov',
    position: 'Asoschi va Bosh direktor',
    description: '15+ yillik agro-injiniring tajribasi',
    image: '/images/team/ceo.jpg'
  },
  {
    name: 'Dilnoza Raximova',
    position: 'Texnik direktor',
    description: 'Issiqxona qurish bo\'yicha mutaxassis',
    image: '/images/team/cto.jpg'
  },
  {
    name: 'Jasur Aliyev',
    position: 'Loyihalar boshqaruvchisi',
    description: '100+ muvaffaqiyatli loyiha',
    image: '/images/team/pm.jpg'
  },
  {
    name: 'Gulnora Toshmatova',
    position: 'Marketing direktori',
    description: 'Xalqaro bozorlar bo\'yicha ekspert',
    image: '/images/team/marketing.jpg'
  }
]

export default function AboutPage() {
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
              <span className="block text-cream">Biz</span>
              <span className="block text-gold italic">haqimizda</span>
            </h1>
            <p className="text-xl md:text-2xl text-cream/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              UZ-GROW — O\'zbekistonda zamonaviy issiqxona texnologiyalari va agro-injiniring 
              sohasidagi yetakchi kompaniya. Bizning maqsadimiz — mahalliy qishloq xo\'jaligini 
              xalqaro darajaga ko\'tarish.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Bizning tariximiz
            </h2>
            <p className="text-xl text-cream/70 max-w-2xl mx-auto">
              4+ yillik rivojlanish yo\'lida qilingan muhim bosqichlar
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                className="flex items-center mb-12 last:mb-0"
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0 w-24 text-right pr-8">
                  <div className="font-serif text-2xl font-bold text-gold">
                    {milestone.year}
                  </div>
                </div>
                <div className="w-4 h-4 bg-gold rounded-full flex-shrink-0" />
                <div className="flex-grow ml-8">
                  <h3 className="font-serif text-xl font-semibold text-cream mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-cream/70 leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Bizning qadriyatlarimiz
            </h2>
            <p className="text-xl text-cream/70 max-w-2xl mx-auto">
              Bizning faoliyatimiz asosini tashkil etuvchi tamoyillar
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-16 h-16 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-cream mb-3">
                  {value.title}
                </h3>
                <p className="text-cream/70 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Bizning jamoamiz
            </h2>
            <p className="text-xl text-cream/70 max-w-2xl mx-auto">
              Kompaniya muvaffaqiyatining asosi — professional jamoa
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative mb-6">
                  <div className="aspect-square bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl overflow-hidden border border-gold/20 group-hover:border-gold/40 transition-all duration-300">
                    {/* Placeholder for team member image */}
                    <div className="w-full h-full flex items-center justify-center">
                      <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center">
                        <span className="text-gold text-2xl font-bold">
                          {member.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <h3 className="font-serif text-xl font-semibold text-cream mb-2 group-hover:text-gold transition-colors duration-300">
                  {member.name}
                </h3>
                <div className="text-gold text-sm font-medium mb-3">
                  {member.position}
                </div>
                <p className="text-cream/70 text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
