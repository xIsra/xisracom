import React from "react";
import "./css/style.css";

import {Amatic_SC, Lexend} from "next/font/google";

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

export const metadata = {
    title: {
        template: 'xisra - %s',
        default: 'xisra.com',
    },
    description: "My personal website, blog and portfolio.",
    keywords: [],
    colorScheme: 'dark',
    themeColor: [
        {color: '#f3f4f6', media: '(prefers-color-scheme: light)'},
        {color: '#1a202c', media: '(prefers-color-scheme: dark)'},
    ],
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
            className={`${lexend.variable} ${amatic.variable} bg-gray-900 font-lexend tracking-tight text-gray-100 antialiased`}
            style={{
                background: 'linear-gradient(235deg, #FFFFFF 0%, #000F25 100%), linear-gradient(180deg, #6100FF 0%, #000000 100%), linear-gradient(235deg, #FFA3AC 0%, #FFA3AC 40%, #00043C calc(40% + 1px), #00043C 60%, #005D6C calc(60% + 1px), #005D6C 70%, #00C9B1 calc(70% + 1px), #00C9B1 100%), linear-gradient(125deg, #FFA3AC 0%, #FFA3AC 40%, #00043C calc(40% + 1px), #00043C 60%, #005D6C calc(60% + 1px), #005D6C 70%, #00C9B1 calc(70% + 1px), #00C9B1 100%);background-blend-mode: soft-light, screen, darken, normal'
            }}
        >

        <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">

            <Header/>

            <main className="grow">{children}</main>

            <Footer border={true}/>
        </div>

        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-73NVT9KEPK" />
        <Script src={'/gtag.js'} />
        </body>
        </html>
    );
}
