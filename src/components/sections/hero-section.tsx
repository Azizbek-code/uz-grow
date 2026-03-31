"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

export default function HeroSection() {
  const scrollToNext = () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='120' height='120' viewBox='0 0 120 120' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2322c55e' stroke-width='0.3' opacity='0.5'%3E%3Cpath d='M0 60h120M60 0v120M30 0v120M90 0v120M0 30h120M0 90h120'/%3E%3C/g%3E%3C/svg%3E")`,
          animation: "slide 20s linear infinite",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
        >
          {/* Main Headline */}
          <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-bold leading-none mb-8">
            <span className="block text-gray-900">Zamonaviy</span>
            <span className="block text-green-600 italic">Issiqxona</span>
          </h1>

          {/* Subtext */}
          <motion.p
            className="text-xl md:text-2xl text-gray-700 max-w-3xl mx-auto mb-12 font-light leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          >
            O&apos;zbekistonda turnkey agro-injiniring va yuqori hosildorlik
            yechimlar
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <button className="px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-green-600/25">
              Loyiha hisoblash
            </button>
            <button className="px-8 py-4 border-2 border-gray-700 text-gray-700 font-semibold rounded-full hover:bg-gray-700 hover:text-white transition-all duration-300 transform hover:scale-105">
              Katalog yuklab olish
            </button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5, ease: [0.25, 0.1, 0.25, 1] }}
        onClick={scrollToNext}
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-gray-600 text-sm">Pastga suring</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown className="w-6 h-6 text-green-600" />
          </motion.div>
        </div>
      </motion.div>

      {/* Add custom animation */}
      <style jsx>{`
        @keyframes slide {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 120px 120px;
          }
        }
      `}</style>
    </section>
  );
}
