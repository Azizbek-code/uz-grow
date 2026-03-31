"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  const footerLinks = {
    services: [
      { href: "/services", label: "Turnkey Qurish" },
      { href: "/services", label: "Agro-Injiniring" },
      { href: "/services", label: "Zamonaviy Jihozlar" },
      { href: "/services", label: "Agro-Konsalting" },
    ],
    company: [
      { href: "/about", label: "Biz haqimizda" },
      { href: "/portfolio", label: "Portfolio" },
      { href: "/blog", label: "Blog" },
      { href: "/investor", label: "Investorlar uchun" },
    ],
    contact: [
      { icon: Phone, value: "+998 55 152 23 33" },
      { icon: Mail, value: "uzgrrow@gmail.com" },
      {
        icon: MapPin,
        value:
          "Toshkent sh., Yangiho'yot tumani, Fayzli MFY, Rayhon ko'chasi 107-uy",
      },
    ],
  };

  const socialLinks = [
    { href: "#", label: "Facebook" },
    { href: "#", label: "Instagram" },
    { href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-gray-900 border-t border-green-600/20">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-serif text-lg font-bold">
                  UG
                </span>
              </div>
              <span className="text-2xl font-serif font-bold text-white">
                UZ-GROW
              </span>
            </Link>

            <p className="text-gray-300 leading-relaxed mb-6">
              O\'zbekistonda zamonaviy issiqxona qurish va agro-injiniring
              xizmatlari. Loyihalashdan boshlab to\'liq ishga tushirishgacha — 0
              dan hosilgacha.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-green-600/10 rounded-full flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300"
                  aria-label={social.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.1 }}
                >
                  <span className="text-sm font-bold">{social.label[0]}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-xl font-semibold text-white mb-6">
              Xizmatlar
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-600 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-xl font-semibold text-white mb-6">
              Kompaniya
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-green-600 transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h3 className="font-serif text-xl font-semibold text-white mb-6">
              Aloqa
            </h3>
            <div className="space-y-4">
              {footerLinks.contact.map((contact, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <contact.icon className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-300 text-sm leading-relaxed">
                    {contact.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          className="border-t border-green-600/20 mt-12 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              &copy; 2026 UZ-GROW. Barcha huquqlar himoyalangan.
            </p>
            <div className="flex space-x-6 text-gray-400 text-sm">
              <Link
                href="/privacy"
                className="hover:text-green-600 transition-colors duration-300"
              >
                Maxfiylik siyosati
              </Link>
              <Link
                href="/terms"
                className="hover:text-green-600 transition-colors duration-300"
              >
                Foydalanish shartlari
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
