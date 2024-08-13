'use client'
import {useEffect} from "react";
import AOS from "aos";

export default function HeroHome() {
    useEffect(() => {
        AOS.init({
            once: true,
            disable: "phone",
            duration: 700,
            easing: "ease-out-cubic",
        });
    });

    return (
        <section id="home" className="relative h-screen">
            {/*<PageIllustration />*/}
            <img src={'/images/algae/algae-pool.jpg'} alt="algae pool"
                 className="absolute inset-0 object-cover w-full h-full opacity-40 filter blur-[4px]"/>
            <div className="mx-auto max-w-7xl h-full flex flex-col justify-center">
                {/* Hero content */}
                {/*<div className="pb-12 pt-50 md:pb-20 md:pt-40">*/}
                <div className="">
                    {/* Section header */}
                    <div className="pb-12 text-center md:pb-16">
                        <h1
                            className="mb-6 text-6xl font-lexend font-extralight"
                            data-aos="zoom-y-out"
                            data-aos-delay={150}
                        >
                            Hi I'm Isra!
                        </h1>
                        <div className="mx-auto max-w-3xl">
                            <p
                                className="mb-8 text-lg text-gray-700"
                                data-aos="zoom-y-out"
                                data-aos-delay={300}
                            >
                                I'm a web developer with a passion for creating beautiful and functional websites.
                                I'm also an adventurer who loves to travel and explore new places.
                            </p>
                            <div
                                className="relative before:absolute before:inset-0 before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                                <div
                                    className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                                    data-aos="zoom-y-out"
                                    data-aos-delay={450}
                                >
                                    <a
                                        className="btn group text-xl font-extralight mb-4 w-full bg-gradient-to-t from-red-600 to-red-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                                        href="#0"
                                    >
                                        <a href={'#contact'} className="relative inline-flex items-center">
                                            Sign to our newsletter
                                            <span
                                                className="ml-1 tracking-normal text-red-50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                                        </a>
                                    </a>
                                    <a
                                        className="btn text-xl font-extralight w-full bg-red-50 text-gray-800 shadow hover:bg-red-100 sm:ml-4 sm:w-auto"
                                        href="#technology"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Hero image */}
                </div>
            </div>
        </section>
    );
}
