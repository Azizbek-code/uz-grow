"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Building, DraftingCompass, Settings, Lightbulb } from "lucide-react";

const services = [
  {
    icon: Building,
    title: "Turnkey Qurish",
    description:
      "Loyihalashdan boshlab to'liq ishga tushirishgacha bo'lgan kompleks xizmat",
    image: "/images/services/turnkey-greenhouse.jpg",
  },
  {
    icon: DraftingCompass,
    title: "Agro-Injiniring",
    description:
      "Zamonaviy texnik yechimlar va loyihalash bo'yicha maslahatlar",
    image: "/images/services/engineering.jpg",
  },
  {
    icon: Settings,
    title: "Zamonaviy Jihozlar",
    description: "Energiya tejamkor avtomatlashtirilgan tizimlar va uskunalar",
    image: "/images/services/equipment.jpg",
  },
  {
    icon: Lightbulb,
    title: "Agro-Konsalting",
    description:
      "Hosildorlikni oshirish va eksport yo'nalishlari bo'yicha konsalting",
    image: "/images/services/consulting.jpg",
  },
];

export default function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 relative bg-gradient-to-br from-green-50/50 to-green-100/50"
    >
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2322c55e' stroke-width='0.5'%3E%3Cpath d='M0 30h60M30 0v60M15 0v60M45 0v60M0 15h60M0 45h60'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nima qilamiz?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            To'liq sikl agro-injiniring yechimlari
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              whileHover={{
                y: -5,
                transition: { duration: 0.3, ease: [0.25, 0.1, 0.25, 1] },
              }}
            >
              {/* Card */}
              <div className="relative bg-white/80 backdrop-blur-sm border border-green-600/20 rounded-2xl overflow-hidden shadow-lg">
                {/* Image */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="w-full h-full bg-gradient-to-br from-green-100 to-green-50 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-600/10 rounded-full flex items-center justify-center mx-auto mb-2">
                        <service.icon className="w-8 h-8 text-green-600" />
                      </div>
                      <p className="text-gray-600 text-sm">{service.title}</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
