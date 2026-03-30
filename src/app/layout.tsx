import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "UZ-GROW - O'zbekistonda zamonaviy issiqxona qurish va agro-injiniring xizmatlari",
  description:
    "UZ-GROW — issiqxona qurish, loyihalash va jihozlash bo'yicha professional kompaniya. Turnkey issiqxona qurish xizmati.",
  keywords:
    "issiqxona qurish, turnkey issiqxona, agro-injiniring, issiqxona jihozlari, issiqxona loyiha",
  openGraph: {
    title: "UZ-GROW - O'zbekistonda zamonaviy issiqxona qurish",
    description:
      "UZ-GROW — issiqxona qurish, loyihalash va jihozlash bo'yicha professional kompaniya",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="uz"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
