import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import ClientLayoutWrapper from "@/components/ui/client-layout-wrapper";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title:
    "UZ-GROW - O'zbekistonda zamonaviy issiqxona qurish va agro-injiniring xizmatlari",
  description:
    "UZ-GROW — issiqxona qurish, loyihalash va jihozlash bo'yicha professional kompaniya. Turnkey issiqxona qurish xizmati. 4+ yillik tajriba, 100+ muvaffaqiyatli loyiha.",
  keywords:
    "issiqxona qurish, turnkey issiqxona, agro-injiniring, issiqxona jihozlari, issiqxona loyiha, issiqxona texnologiyalari, O'zbekiston issiqxona",
  authors: [{ name: "UZ-GROW Team" }],
  creator: "UZ-GROW",
  publisher: "UZ-GROW",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://uz-grow.uz"),
  alternates: {
    canonical: "/",
    languages: {
      "uz-UZ": "/uz",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "UZ-GROW - O'zbekistonda zamonaviy issiqxona qurish",
    description:
      "UZ-GROW — issiqxona qurish, loyihalash va jihozlash bo'yicha professional kompaniya. Turnkey issiqxona qurish xizmati.",
    type: "website",
    locale: "uz_UZ",
    url: "https://uz-grow.uz",
    siteName: "UZ-GROW",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UZ-GROW - Zamonaviy issiqxona texnologiyalari",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "UZ-GROW - O'zbekistonda zamonaviy issiqxona qurish",
    description:
      "UZ-GROW — issiqxona qurish, loyihalash va jihozlash bo'yicha professional kompaniya.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
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
      className={`${cormorantGaramond.variable} ${dmSans.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col">
        <ClientLayoutWrapper>{children}</ClientLayoutWrapper>
      </body>
    </html>
  );
}
