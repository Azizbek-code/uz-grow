"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function AnimatedHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "Bosh sahifa" },
    { href: "/services", label: "Xizmatlar" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/investor", label: "Investor" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Aloqa" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md py-2 shadow-lg"
            : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                <span className="text-white font-serif text-lg font-bold">
                  UG
                </span>
              </div>
              <span
                className={`text-2xl font-serif font-bold transition-colors ${
                  isScrolled ? "text-gray-900" : "text-green-600"
                }`}
              >
                UZ-GROW
              </span>
            </Link>

            <nav className="hidden lg:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-green-600 ${
                    isScrolled ? "text-gray-700" : "text-gray-700/80"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden lg:flex items-center space-x-4">
              <button
                className={`px-3 py-1 text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 border-gray-700/50 hover:text-green-600 hover:border-green-600"
                    : "text-gray-700 border-gray-700/50 hover:text-green-600 hover:border-green-600"
                } border rounded-full`}
              >
                UZ
              </button>
              <button
                className={`px-3 py-1 text-sm font-medium transition-colors ${
                  isScrolled
                    ? "text-gray-700 border-gray-700/50 hover:text-green-600 hover:border-green-600"
                    : "text-gray-700 border-gray-700/50 hover:text-green-600 hover:border-green-600"
                } border rounded-full`}
              >
                RU
              </button>
            </div>

            <button
              className={`lg:hidden p-2 transition-colors ${
                isScrolled ? "text-gray-700" : "text-gray-700"
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white lg:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <button
                className="absolute top-6 right-6 text-gray-700"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <Link
                href="/"
                className="text-4xl font-serif font-bold text-green-600"
              >
                UZ-GROW
              </Link>

              <nav className="flex flex-col items-center space-y-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="text-2xl text-gray-700 hover:text-green-600 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="flex space-x-4">
                <button className="px-4 py-2 text-gray-700 border border-gray-700/50 rounded-full hover:text-green-600 hover:border-green-600 transition-colors">
                  UZ
                </button>
                <button className="px-4 py-2 text-gray-700 border border-gray-700/50 rounded-full hover:text-green-600 hover:border-green-600 transition-colors">
                  RU
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
