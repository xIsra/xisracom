import Image from 'next/image'
import {YouTubePlaylist} from "@/components/HeroPortfolio/YouTubePlaylist";
import Link from "next/link";
import channelCover from './channel-cover.png'

export function HeroPortfolio() {
    return (
        <section id="portfolio" className="relative min-h-screen bg-red-400">
            <div className="mx-auto h-full flex flex-col justify-center">
                {/* Hero content */}
                <div className="py-24 md:py-32">
                    {/* Section header */}
                    <div className="pb-12 md:pb-16 text-center">
                        <h2
                            data-aos="fade-down"
                            data-aos-delay={50}
                            className="mb-6 text-6xl font-lexend font-extralight">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Here's my stuff
                        </h2>
                        <p
                            data-aos="fade-down"
                            data-aos-delay={200}
                            className="bg-gradient-to-bl from-primary-200 to-secondary-100 bg-clip-text text-transparent font-bold">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            I have a lot of projects that I've worked on. Here are some of them.
                        </p>
                        <div
                            data-aos="fade-down"
                            data-aos-delay={500}
                            className="container mx-auto max-w-6xl">
                            <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-2 lg:grid-cols-3">
                                <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                                    <Image src="/demo/code1.jpg" alt="awesome" width={600} height={400}
                                           className="object-cover w-full h-80"/>
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold">Awesome</h3>
                                        <p className="text-gray-700"></p>
                                    </div>
                                </div>
                                <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                                    <Image src="/demo/code1.jpg" alt="awesome" width={600} height={400}
                                           className="object-cover w-full h-80"/>
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold">Awesome</h3>
                                        <p className="text-gray-700"></p>
                                    </div>
                                </div>
                                <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                                    <Image src="/demo/code1.jpg" alt="awesome" width={600} height={400}
                                           className="object-cover w-full h-80"/>
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold">Awesome</h3>
                                        <p className="text-gray-700"></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="w-full h-px bg-gradient-to-r from-transparent via-black/25 to-transparent mb-12 md:mb-16"/>

                    <div className="relative pb-12 text-center">
                        {/* background cover image greyscale with a bit of blur */}
                        <div
                            className="absolute inset-0 bg-cover bg-center z-0 overflow-hidden">
                            <Image src={channelCover} alt="portfolio" layout="fill"
                                   className="object-cover filter blur-[3px] opacity-10"/>
                        </div>

                        <div className="relative z-10 py-24 lg:py-36">
                        <h2
                            data-aos="fade-down"
                            data-aos-delay={50}
                            className="mb-6 text-6xl font-lexend font-extralight">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            My Youtube channel
                        </h2>
                        <p
                            data-aos="fade-down"
                            data-aos-delay={200}
                            className="bg-gradient-to-bl from-primary-200 to-secondary-100 bg-clip-text text-transparent font-bold">
                            I have a YouTube channel where I post my adventures. <Link
                            href={'http://youtube.com/@israkouper'} className={'hover:text-gray-900 transition-colors'}>Check
                            it out!</Link>
                        </p>
                        <YouTubePlaylist/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
