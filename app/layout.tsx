import React from 'react';
import './css/style.css';

import { Lexend, Yesteryear } from 'next/font/google';

import Header from '@/components/ui/header';
import Footer from '@/components/ui/footer';
import Script from 'next/script';
import { Metadata, Viewport } from 'next';

const lexend = Lexend({
  subsets: ['latin'],
  variable: '--font-lexend',
  display: 'swap',
});

const yesteryear = Yesteryear({
  subsets: ['latin'],
  variable: '--font-yesteryear',
  display: 'swap',
  style: 'normal',
  weight: '400',
});

export const viewport: Viewport = {
  themeColor: '#ec407a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: '%s - xisra',
    default: 'Israel Kouperman - Dev with attitude',
  },
  description:
    "I'm Isra, a web developer, digital creator, and adventurer. I'm passionate about the web and the whole world.",
  keywords: [
    'xisra',
    'blog',
    'portfolio',
    'personal',
    'website',
    'developer',
    'programming',
    'adventure',
    'vlog',
    'coding',
  ],
  robots: 'index, follow',
  category: 'website',
  // colorScheme: 'light dark',
  themeColor: '#ec407a',
  icons: {
    icon: process.env.HOST + '/favicon.ico', // Default favicon
    shortcut: process.env.HOST + '/favicon-16x16.png', // Shortcut icon (optional)
    apple: process.env.HOST + '/apple-touch-icon.png', // Apple touch icon
    other: [
      {
        rel: 'icon',
        url: process.env.HOST + '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: process.env.HOST + '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        rel: 'icon',
        url: process.env.HOST + '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  },
  openGraph: {
    siteName: 'xisra.com',
    title: 'Israel Kouperman - Dev with attitude',
    description:
      "I'm Isra, a web developer, digital creator, and adventurer. I'm passionate about the web and the whole world.",
    type: 'website',
    url: 'https://xisra.com',
    images: [
      {
        url: process.env.HOST + '/og-image.jpg',
        width: 1200,
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`scroll-smooth`}>
      <body
        className={`${lexend.variable} ${yesteryear.variable} bg-gray-950 font-lexend tracking-tight text-gray-100 antialiased`}
      >
        {/* <AnimateOnScrollLoader /> */}
        <div className='flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip'>
          <Header />

          <main className='grow'>{children}</main>

          <Footer border={true} />
        </div>

        <Script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-73NVT9KEPK'
        />
        <Script src={'/gtag.js'} />
      </body>
    </html>
  );
}
