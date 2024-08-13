import LargeTestimonial from "@/components/large-testimonial";

export const metadata = {
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
};

import Hero from "@/components/hero-home";
import Cta from "@/components/cta";

export default function Home() {
    return (
        <>
            <Hero/>
            <Cta />
        </>
    );
}
