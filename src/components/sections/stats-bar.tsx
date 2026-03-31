"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: "4+", label: "Yil tajriba" },
  { value: "100+", label: "Loyiha" },
  { value: "12", label: "Viloyat" },
  { value: "100%", label: "Kafolat" },
];

export default function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [counters, setCounters] = useState({ 0: 0, 1: 0, 2: 0, 3: 0 });

  useEffect(() => {
    if (isInView) {
      const targetValues = [4, 100, 12, 100];
      const intervals: NodeJS.Timeout[] = [];

      targetValues.forEach((target, index) => {
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;

        const interval = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(interval);
          }
          setCounters((prev) => ({ ...prev, [index]: Math.floor(current) }));
        }, duration / steps);

        intervals.push(interval);
      });

      return () => intervals.forEach(clearInterval);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="py-16 bg-green-600/10 backdrop-blur-sm border-y border-green-600/20"
    >
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="text-4xl md:text-5xl font-serif font-bold text-green-600 mb-2">
                {index === 0 && `${counters[index]}+`}
                {index === 1 && `${counters[index]}+`}
                {index === 2 && counters[index]}
                {index === 3 && `${counters[index]}%`}
              </div>
              <div className="text-gray-700 uppercase tracking-wide text-sm font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
