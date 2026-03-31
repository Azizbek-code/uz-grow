"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [step, setStep] = useState(1);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("uz-grow-intro");
    if (hasSeenIntro) {
      onComplete();
      return;
    }

    const step1Timer = setTimeout(() => {
      setStep(2);
      setTimeout(() => setShowTagline(true), 300);
    }, 1200);

    const step2Timer = setTimeout(() => {
      setStep(3);
    }, 2800);

    const step3Timer = setTimeout(() => {
      sessionStorage.setItem("uz-grow-intro", "seen");
      onComplete();
    }, 4000);

    return () => {
      clearTimeout(step1Timer);
      clearTimeout(step2Timer);
      clearTimeout(step3Timer);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-dark-green flex items-center justify-center overflow-hidden"
      >
        {/* Step 1 & 2: Logo Animation */}
        <motion.div
          className="relative z-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: step >= 1 ? 1 : 0,
            scale: step >= 1 ? 1 : 0.8,
            y: step === 3 ? -200 : 0,
          }}
          transition={{
            duration: step === 3 ? 0.8 : 0.6,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <svg
            width="200"
            height="80"
            viewBox="0 0 200 80"
            className="text-gold"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <motion.path
              d="M10 40 L30 20 L50 40 L70 20 L90 40"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
            />
            <motion.text
              x="100"
              y="45"
              fontSize="32"
              fontWeight="600"
              fill="currentColor"
              className="font-serif"
              initial={{ opacity: 0 }}
              animate={{ opacity: step >= 1 ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              UZ-GROW
            </motion.text>
          </svg>
        </motion.div>

        {/* Step 2: Tagline */}
        {step >= 2 && (
          <motion.div
            className="absolute z-10 mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: showTagline ? 1 : 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-cream text-lg font-light tracking-wide">
              O&apos;zbekistonda zamonaviy issiqxona
            </p>
          </motion.div>
        )}

        {/* Step 3: Split Screen Animation */}
        {step === 3 && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Left Panel */}
            <motion.div
              className="absolute left-0 top-0 w-1/2 h-full bg-dark-green"
              initial={{ x: 0 }}
              animate={{ x: "-100%" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            />
            {/* Right Panel */}
            <motion.div
              className="absolute right-0 top-0 w-1/2 h-full bg-dark-green"
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            />
            {/* Center Line */}
            <motion.div
              className="absolute left-1/2 top-0 w-0.5 h-full bg-gold"
              initial={{ scaleY: 1 }}
              animate={{ scaleY: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              style={{ transformOrigin: "center" }}
            />
          </motion.div>
        )}

        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%23c9a84c' stroke-width='0.5'%3E%3Cpath d='M0 30h60M30 0v60M15 0v60M45 0v60M0 15h60M0 45h60'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
