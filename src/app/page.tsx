"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

// Components
import HeroSection from "@/components/sections/hero-section";
import StatsBar from "@/components/sections/stats-bar";
import ServicesSection from "@/components/sections/services-section";
import WhyUzGrowSection from "@/components/sections/why-uzgrow-section";
import PortfolioStrip from "@/components/sections/portfolio-strip";
import InvestorCTA from "@/components/sections/investor-cta";
import BlogPreview from "@/components/sections/blog-preview";
import ContactSection from "@/components/sections/contact-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-green-100 to-green-50 text-gray-900">
      {/* Animated Background */}
      <div
        className="fixed inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%2322c55e' stroke-width='0.5'%3E%3Cpath d='M0 30h60M30 0v60M15 0v60M45 0v60M0 15h60M0 45h60'/%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      {/* Hero Section */}
      <HeroSection />

      {/* Stats Bar */}
      <StatsBar />

      {/* Services Section */}
      <ServicesSection />

      {/* Why UZ-GROW Section */}
      <WhyUzGrowSection />

      {/* Portfolio Strip */}
      <PortfolioStrip />

      {/* Investor CTA */}
      <InvestorCTA />

      {/* Blog Preview */}
      <BlogPreview />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
}
