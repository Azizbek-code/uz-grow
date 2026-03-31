'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Mail, MapPin, Send } from 'lucide-react'

export default function ContactSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const contactInfo = [
    {
      icon: Phone,
      value: '+998 55 152 23 33',
      label: 'Telefon'
    },
    {
      icon: Mail,
      value: 'uzgrrow@gmail.com',
      label: 'Email'
    },
    {
      icon: MapPin,
      value: 'Toshkent sh., Yangiho\'yot tumani, Fayzli MFY, Rayhon ko\'chasi 107-uy',
      label: 'Manzil'
    }
  ]

  return (
    <section ref={ref} className="py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-dark-green/80" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-cream mb-8">
              Biz bilan bogʻlaning
            </h2>
            <p className="text-xl text-cream/70 leading-relaxed mb-12">
              Loyihangiz uchun bepul maslahat oling va mutaxassislarimiz bilan 
              suhbat quring. Biz har bir mijozga individual yondashuvni taklif etamiz.
            </p>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                >
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-cream mb-1">
                      {info.label}
                    </h3>
                    <p className="text-cream/70 leading-relaxed">
                      {info.value}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Map Pin Animation */}
            <motion.div
              className="mt-12 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="relative">
                <motion.div
                  className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <MapPin className="w-8 h-8 text-gold" />
                </motion.div>
                <motion.div
                  className="absolute inset-0 bg-gold/20 rounded-full"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-dark-green/60 backdrop-blur-sm border border-gold/20 rounded-2xl p-8">
              <h3 className="font-serif text-2xl font-semibold text-cream mb-6">
                Murojaat qoldiring
              </h3>
              
              <form className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-cream/70 text-sm font-medium mb-2">
                    Ismingiz
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-dark-green/80 border border-gold/20 rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:border-gold/50 transition-colors duration-300"
                    placeholder="Ismingizni kiriting"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-cream/70 text-sm font-medium mb-2">
                    Telefon raqamingiz
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-dark-green/80 border border-gold/20 rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:border-gold/50 transition-colors duration-300"
                    placeholder="+998 XX XXX XX XX"
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-cream/70 text-sm font-medium mb-2">
                    Xabaringiz
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 bg-dark-green/80 border border-gold/20 rounded-lg text-cream placeholder-cream/50 focus:outline-none focus:border-gold/50 transition-colors duration-300 resize-none"
                    placeholder="Loyiha haqida qisqacha ma'lumot..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gold text-dark-green font-semibold rounded-lg hover:bg-gold/90 transition-all duration-300 transform hover:scale-105"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Send className="w-5 h-5" />
                  <span>Yuborish</span>
                </motion.button>
              </form>

              {/* Note */}
              <p className="text-cream/60 text-sm mt-6 text-center">
                * Murojaatingiz 24 soat ichida ko'rib chiqiladi
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
