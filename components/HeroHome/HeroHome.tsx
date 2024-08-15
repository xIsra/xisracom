'use client'
import {useEffect} from "react";
import AOS from "aos";
import Image from "next/image";
import me from './me-cut-transparent-small.png';
import {SocialLinksList} from "@/components/ui/social-links-list";


export function HeroHome() {
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
            {/*<img src={'/images/algae/algae-pool.jpg'} alt="algae pool"*/}
            {/*     className="absolute inset-0 object-cover w-full h-full opacity-40 filter blur-[4px]"/>*/}
            <div className="mx-auto max-w-7xl h-full flex flex-col justify-center">
                {/* Hero content */}
                {/*<div className="pb-12 pt-50 md:pb-20 md:pt-40">*/}
                <div className="">
                    {/* Section header */}
                    <div className="pb-12 text-center md:pb-16">
                        {/* avatar image*/}
                        <div
                            data-aos="zoom-y-out"
                            data-aos-delay={200}
                            className="mx-auto max-w-80 h-80 mb-5 rounded-full overflow-hidden border-4 border-white shadow-lg bg-red-400">
                            <Image
                                data-aos="zoom-y-out"
                                data-aos-delay={300}
                                src={me}
                                alt="avatar"
                            />
                        </div>
                        <h1
                            className="mb-6 text-6xl font-lexend font-extralight"
                            data-aos="zoom-y-out"
                            data-aos-delay={150}
                        >
                            Hi i&apos;m Isra!
                        </h1>
                        <div className="mx-auto max-w-3xl">
                            <p
                                className="mb-8 text-lg text-gray-400"
                                data-aos="zoom-y-out"
                                data-aos-delay={300}
                            >
                                Im a full stack developer with a passion for creation. I am always looking to learn new
                                things and improve my skills.
                                <br />
                                <span className="block mt-4 text-red-400">
                                    Feel free to reach out to me. I would love to hear from you!
                                </span>
                            </p>
                            <div
                                className="relative before:absolute before:inset-0 before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                                <div
                                    className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center sm:gap-2"
                                    data-aos="zoom-y-out"
                                    data-aos-delay={450}
                                >
                                    <a
                                        className="btn text-xl font-extralight w-full bg-red-50 text-gray-800 shadow hover:bg-red-100 sm:w-auto"
                                        href="#portfolio"
                                    >
                                        Check my stuff
                                    </a>
                                    <a
                                        className="btn group text-xl font-extralight w-full bg-red-400 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                                        href="#0"
                                    >
                                        <a href={'#contact'} className="relative inline-flex items-center">
                                            Contact me
                                            <span
                                                className="ml-1 tracking-normal text-red-50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                                        </a>
                                    </a>
                                </div>
                            </div>
                            <div className="flex justify-center mt-8">
                                <SocialLinksList/>
                            </div>
                        </div>
                    </div>
                    {/* Hero image */}
                </div>
            </div>
        </section>
    );
}
