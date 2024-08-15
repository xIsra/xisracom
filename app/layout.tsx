import React from "react";
import "./css/style.css";

import {Amatic_SC, Lexend, Yesteryear} from "next/font/google";

import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import Script from "next/script";

const lexend = Lexend({
    subsets: ["latin"],
    variable: "--font-lexend",
    display: "swap",
});

const amatic = Amatic_SC({
    subsets: ['latin', "hebrew"],
    variable: "--font-amatic",
    display: "swap",
    style: 'normal',
    weight: "700",
});

const yesteryear = Yesteryear({
    subsets: ['latin'],
    variable: "--font-yesteryear",
    display: "swap",
    style: 'normal',
    weight: "400",
});

export const metadata = {
    title: {
        template: 'xIsra - %s',
        default: 'xIsra.com',
    },
    description: "I'm Israel Kouperman, a software engineer, designer, and adventurer. I'm passionate about creating software, designing experiences, and exploring the world.",
    keywords: ['xisra', 'blog', 'portfolio', 'personal', 'website', 'developer', 'designer', 'engineer', 'software', 'adventure', 'vlog', 'app'],
    colorScheme: 'light dark',
    themeColor: '#ec407a',
    icons: {
        icon: '/favicon.ico', // Default favicon
        shortcut: '/favicon-16x16.png', // Shortcut icon (optional)
        apple: '/apple-touch-icon.png', // Apple touch icon
        other: [
            {
                rel: 'icon',
                url: '/favicon-32x32.png',
                sizes: '32x32',
                type: 'image/png',
            },
            {
                rel: 'icon',
                url: '/android-chrome-192x192.png',
                sizes: '192x192',
                type: 'image/png',
            },
            {
                rel: 'icon',
                url: '/android-chrome-512x512.png',
                sizes: '512x512',
                type: 'image/png',
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
        <html lang="en" className={`scroll-smooth`}>
        <body
            className={`${lexend.variable} ${amatic.variable} ${yesteryear.variable} bg-gray-950 font-lexend tracking-tight text-gray-100 antialiased`}
        >

        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">

            <Header/>

            <main className="grow">{children}</main>

            <Footer border={true}/>
        </div>

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-73NVT9KEPK"/>
        <Script src={'/gtag.js'}/>
        </body>
        </html>
    );
}
