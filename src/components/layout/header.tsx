"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">UZ</span>
            </div>
            <span className="text-xl font-bold text-gray-900">UZ-GROW</span>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition">
                <span>Kompaniya</span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  href="/about"
                  className="block py-2 px-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded"
                >
                  Biz haqimizda
                </Link>
                <Link
                  href="/mission"
                  className="block py-2 px-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded"
                >
                  Missiya, vizyon, qadriyatlar
                </Link>
                <Link
                  href="/history"
                  className="block py-2 px-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded"
                >
                  Tarix va asoschilar
                </Link>
                <Link
                  href="/international"
                  className="block py-2 px-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded"
                >
                  Xalqaro faoliyat
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition">
                <span>Yechimlar</span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  href="/plastic-greenhouse"
                  className="block py-2 px-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded"
                >
                  Plastik issiqxona
                </Link>
                <Link
                  href="/venlo-greenhouse"
                  className="block py-2 px-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded"
                >
                  Venlo issiqxonasi
                </Link>
                <Link
                  href="/semi-closed"
                  className="block py-2 px-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded"
                >
                  Yopiq issiqxona
                </Link>
                <Link
                  href="/photovoltaic"
                  className="block py-2 px-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded"
                >
                  Fotovoltai issiqxona
                </Link>
                <Link
                  href="/equipment"
                  className="block py-2 px-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded"
                >
                  Uskunalar
                </Link>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-green-600 transition">
                <span>Mijozlar</span>
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg p-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  href="/vegetable-growers"
                  className="block py-2 px-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded"
                >
                  Sabzavot yetishtiruvchilar
                </Link>
                <Link
                  href="/horticulturists"
                  className="block py-2 px-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded"
                >
                  Bog'dorchilar / O'simlikchilar
                </Link>
                <Link
                  href="/seed-growers"
                  className="block py-2 px-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded"
                >
                  Urug' yetishtiruvchilar
                </Link>
                <Link
                  href="/young-plants"
                  className="block py-2 px-3 text-gray-700 hover:bg-green-50 hover:text-green-600 rounded"
                >
                  O'smcha yetishtiruvchilar
                </Link>
              </div>
            </div>

            <Link
              href="/portfolio"
              className="text-gray-700 hover:text-green-600 transition"
            >
              Loyihalar
            </Link>
            <Link
              href="/news"
              className="text-gray-700 hover:text-green-600 transition"
            >
              Yangiliklar
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-green-600 transition"
            >
              Aloqa
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm">
              UZ
            </Button>
            <Button variant="outline" size="sm">
              RU
            </Button>
            <Button variant="outline" size="sm">
              EN
            </Button>
          </div>

          <button
            className="md:hidden p-2"
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

        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-2">
              <Link
                href="/about"
                className="text-gray-700 hover:text-green-600 py-2"
              >
                Biz haqimizda
              </Link>
              <Link
                href="/services"
                className="text-gray-700 hover:text-green-600 py-2"
              >
                Yechimlar
              </Link>
              <Link
                href="/portfolio"
                className="text-gray-700 hover:text-green-600 py-2"
              >
                Loyihalar
              </Link>
              <Link
                href="/news"
                className="text-gray-700 hover:text-green-600 py-2"
              >
                Yangiliklar
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 hover:text-green-600 py-2"
              >
                Aloqa
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
