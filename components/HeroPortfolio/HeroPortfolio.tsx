import Image from 'next/image'
import {YouTubePlaylist} from "@/components/HeroPortfolio/YouTubePlaylist";

export function HeroPortfolio() {
    return (
        <section id="portfolio" className="relative min-h-screen bg-red-400 px-20">
            <div className="mx-auto h-full flex flex-col justify-center">
                {/* Hero content */}
                <div className="pb-12 pt-50 md:pb-20 md:pt-40">
                    {/* Section header */}
                    <div className="pb-12 text-center">
                        <h2 className="mb-6 text-6xl font-lexend font-extralight">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Here's my stuff
                        </h2>
                        <div className="container mx-auto max-w-6xl mb-32">
                            <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-3">
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
                        <h4 className="mb-6 text-6xl font-lexend font-extralight">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            My Youtube channel
                        </h4>
                        <YouTubePlaylist/>
                    </div>
                </div>
            </div>
        </section>
    );
}
