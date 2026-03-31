'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Send,
  Clock,
  Users,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

const contactInfo = [
  {
    icon: Phone,
    value: '+998 55 152 23 33',
    label: 'Telefon',
    description: 'Ish vaqti: 9:00 - 18:00'
  },
  {
    icon: Mail,
    value: 'uzgrrow@gmail.com',
    label: 'Email',
    description: '24/7 javob beramiz'
  },
  {
    icon: MapPin,
    value: 'Toshkent sh., Yangiho\'yot tumani, Fayzli MFY, Rayhon ko\'chasi 107-uy',
    label: 'Manzil',
    description: 'Ofis va namuna maydoni'
  }
]

const offices = [
  {
    city: 'Toshkent',
    address: 'Yangiho\'yot tumani, Fayzli MFY, Rayhon ko\'chasi 107-uy',
    phone: '+998 55 152 23 33',
    email: 'tashkent@uzgrow.uz',
    hours: 'Dushanba - Juma: 9:00 - 18:00'
  },
  {
    city: 'Farg\'ona',
    address: 'Farg\'ona sh., Markaziy ko\'cha 45-uy',
    phone: '+998 73 152 23 33',
    email: 'fargona@uzgrow.uz',
    hours: 'Dushanba - Juma: 9:00 - 18:00'
  },
  {
    city: 'Buxoro',
    address: 'Buxoro sh., Istiqlol ko\'chasi 23-uy',
    phone: '+998 65 152 23 33',
    email: 'buxoro@uzgrow.uz',
    hours: 'Dushanba - Juma: 9:00 - 18:00'
  }
]

const faq = [
  {
    question: 'Qancha vaqt ichida issiqxona quriladi?',
    answer: 'O\'rtacha 1 gektar issiqxona 3-4 oy ichida quriladi. Kattaroq loyihalar uchun vaqt 6-8 oygacha cho\'zilishi mumkin.'
  },
  {
    question: 'Qanday ekinlar yetishtirish mumkin?',
    answer: 'Biz issiqxonalarda qulupnay, pomidor, bodring, qalampir, baqlajon va boshqa ko\'plab sabzavot ekinlarini yetishtirish bo\'yicha tajribamiz bor.'
  },
  {
    question: 'Kafolat muddati qancha?',
    answer: 'Barcha qurilmalar va uskunalar uchun 5 yilgacha kafolat beramiz. Shuningdek, bepul texnik yordam va xizmat ko\'rsatamiz.'
  },
  {
    question: 'Investitsiyani qaytish muddati qancha?',
    answer: 'O\'rtacha investitsiya 2-3 yil ichida to\'liq qaytadi. Qulupnay va pomodor kabi yuqori rentabelli ekinlar uchun bu muddat 1.5-2 yilgacha qisqarishi mumkin.'
  }
]

export default function ContactPage() {
  const heroRef = useRef(null)
  const heroInView = useInView(heroRef, { once: true })
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    projectType: '',
    area: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setSubmitStatus('success')
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitStatus('idle')
      setFormData({
        name: '',
        phone: '',
        email: '',
        message: '',
        projectType: '',
        area: ''
      })
    }, 3000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

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
              <span className="block text-cream">Biz bilan</span>
              <span className="block text-gold italic">bog\'laning</span>
            </h1>
            <p className="text-xl md:text-2xl text-cream/80 max-w-3xl mx-auto mb-12 font-light leading-relaxed">
              Loyihangiz uchun bepul maslahat oling va mutaxassislarimiz bilan 
              suhbat qiling. Biz har bir mijozga individual yondashuvni taklif etamiz.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Cards */}
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
              Aloqa ma\'lumotlari
            </h2>
            <p className="text-xl text-cream/70 max-w-2xl mx-auto">
              Biz bilan turli yo\'llar orqali bog\'lanishingiz mumkin
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="text-center group"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-20 h-20 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-gold/20 transition-colors duration-300">
                  <info.icon className="w-10 h-10 text-gold" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-cream mb-2">
                  {info.label}
                </h3>
                <p className="text-gold text-lg mb-2">
                  {info.value}
                </p>
                <p className="text-cream/60 text-sm">
                  {info.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 relative bg-dark-green/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Left Side - Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-serif text-3xl font-bold text-cream mb-8">
                Murojaat qoldiring
              </h2>

              {submitStatus === 'success' && (
                <motion.div
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center space-x-3"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span className="text-green-400">Xabaringiz muvaffaqiyatli yuborildi!</span>
                </motion.div>
              )}

              {submitStatus === 'error' && (
                <motion.div
                  className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center space-x-3"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <span className="text-red-400">Xatolik yuz berdi. Iltimos, qayta urinib ko\'ring.</span>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cream/70 text-sm font-medium mb-2">
                      Ismingiz *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-green/80 border border-gold/20 rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:border-gold/50 transition-colors duration-300"
                      placeholder="Ismingizni kiriting"
                    />
                  </div>

                  <div>
                    <label className="block text-cream/70 text-sm font-medium mb-2">
                      Telefon raqamingiz *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-dark-green/80 border border-gold/20 rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:border-gold/50 transition-colors duration-300"
                      placeholder="+998 XX XXX XX XX"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-cream/70 text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-dark-green/80 border border-gold/20 rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:border-gold/50 transition-colors duration-300"
                    placeholder="email@example.com"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-cream/70 text-sm font-medium mb-2">
                      Loyiha turi
                    </label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-green/80 border border-gold/20 rounded-lg text-cream focus:outline-none focus:border-gold/50 transition-colors duration-300"
                    >
                      <option value="">Loyiha turini tanlang</option>
                      <option value="greenhouse">Issiqxona qurish</option>
                      <option value="equipment">Uskunalar</option>
                      <option value="consulting">Konsalting</option>
                      <option value="other">Boshqa</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-cream/70 text-sm font-medium mb-2">
                      Maydon maydoni (m²)
                    </label>
                    <input
                      type="number"
                      name="area"
                      value={formData.area}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-dark-green/80 border border-gold/20 rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:border-gold/50 transition-colors duration-300"
                      placeholder="Masalan: 5000"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-cream/70 text-sm font-medium mb-2">
                    Xabaringiz *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-dark-green/80 border border-gold/20 rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:border-gold/50 transition-colors duration-300 resize-none"
                    placeholder="Loyiha haqida qisqacha ma'lumot..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gold text-dark-green font-semibold rounded-lg hover:bg-gold/90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>{isSubmitting ? 'Yuborilmoqda...' : 'Yuborish'}</span>
                </motion.button>
              </form>

              <p className="text-cream/60 text-sm mt-6 text-center">
                * Belgilangan maydonlarni to\'ldirish majburiy
              </p>
            </motion.div>

            {/* Right Side - Map and Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Map Placeholder */}
              <div className="bg-dark-green/60 backdrop-blur-sm border border-gold/20 rounded-2xl p-8 mb-8">
                <h3 className="font-serif text-xl font-semibold text-cream mb-6">
                  Ofisimiz manzili
                </h3>
                <div className="aspect-video bg-gradient-to-br from-gold/20 to-gold/5 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 text-gold mx-auto mb-4" />
                    <p className="text-cream/60">Xarita</p>
                  </div>
                </div>
                <div className="mt-6 space-y-3">
                  <div className="flex items-center text-cream/80">
                    <Clock className="w-5 h-5 mr-3 text-gold" />
                    <span>Ish vaqti: Dushanba - Juma, 9:00 - 18:00</span>
                  </div>
                  <div className="flex items-center text-cream/80">
                    <Users className="w-5 h-5 mr-3 text-gold" />
                    <span>Namuna maydoni mavjud</span>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-dark-green/60 backdrop-blur-sm border border-gold/20 rounded-2xl p-8">
                <h3 className="font-serif text-xl font-semibold text-cream mb-6">
                  Ko\'p so\'raladigan savollar
                </h3>
                <div className="space-y-4">
                  {faq.map((item, index) => (
                    <details key={index} className="group">
                      <summary className="flex items-center justify-between cursor-pointer text-cream font-medium hover:text-gold transition-colors duration-300">
                        <span>{item.question}</span>
                      </summary>
                      <div className="mt-2 pl-4 text-cream/70 text-sm leading-relaxed">
                        {item.answer}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offices Section */}
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
              Ofislarimiz
            </h2>
            <p className="text-xl text-cream/70 max-w-2xl mx-auto">
              O\'zbekiston bo\'ylab ofislarimiz
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                className="bg-dark-green/60 backdrop-blur-sm border border-gold/20 rounded-2xl p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="font-serif text-xl font-semibold text-cream mb-4">
                  {office.city}
                </h3>
                <div className="space-y-3">
                  <div>
                    <div className="text-cream/60 text-sm mb-1">Manzil</div>
                    <div className="text-cream/80">{office.address}</div>
                  </div>
                  <div>
                    <div className="text-cream/60 text-sm mb-1">Telefon</div>
                    <div className="text-gold">{office.phone}</div>
                  </div>
                  <div>
                    <div className="text-cream/60 text-sm mb-1">Email</div>
                    <div className="text-gold">{office.email}</div>
                  </div>
                  <div>
                    <div className="text-cream/60 text-sm mb-1">Ish vaqti</div>
                    <div className="text-cream/80">{office.hours}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
