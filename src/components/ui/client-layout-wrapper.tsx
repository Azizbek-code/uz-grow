"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AnimatedHeader from "@/components/ui/animated-header";
import Footer from "@/components/layout/footer-new";
import LoadingScreen from "@/components/ui/loading-screen";

interface ClientLayoutWrapperProps {
  children: React.ReactNode;
}

export default function ClientLayoutWrapper({
  children,
}: ClientLayoutWrapperProps) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Initialize scroll animations after mount
    const initScrollAnimations = () => {
      const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      }, observerOptions);

      // Observe all elements with scroll-animate class
      const animatedElements = document.querySelectorAll(".scroll-animate");
      animatedElements.forEach((element) => {
        observer.observe(element);
      });
    };

    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", initScrollAnimations);
    } else {
      initScrollAnimations();
    }
  }, []);

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatedHeader />
        <main className="flex-1">{children}</main>
        <Footer />
      </motion.div>
    </>
  );
}
