'use client'


export function HeroPortfolio() {
    return (
        <section id="portfolio" className="relative min-h-screen bg-red-400">
            <div className="mx-auto max-w-7xl h-full flex flex-col justify-center">
                {/* Hero content */}
                <div className="pb-12 pt-50 md:pb-20 md:pt-40">
                    {/* Section header */}
                    <div className="pb-12 text-center md:pb-16">
                        <h2 className="mb-6 text-6xl font-lexend font-extralight">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Here's my stuff
                        </h2>
                        <div className="container mx-auto max-w-6xl mb-16">
                            <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-3">
                                <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                                    <img src="/demo/code1.jpg" alt="awesome"
                                         className="object-cover w-full h-80"/>
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold">Awesome</h3>
                                        <p className="text-gray-700"></p>
                                    </div>
                                </div>
                                <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                                    <img src="/demo/code1.jpg" alt="awesome"
                                         className="object-cover w-full h-80"/>
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold">Awesome</h3>
                                        <p className="text-gray-700"></p>
                                    </div>
                                </div>
                                <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                                    <img src="/demo/code1.jpg" alt="awesome"
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
                        <div className="container mx-auto mb-16">
                            <div className="grid grid-cols-1 gap-4 mt-8 sm:grid-cols-3">
                                <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                                    <img src="/demo/code1.jpg" alt="awesome"
                                         className="object-cover w-full h-80"/>
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold">Awesome</h3>
                                        <p className="text-gray-700">This is a description of the project</p>
                                    </div>
                                </div>
                                <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                                    <img src="/demo/code1.jpg" alt="awesome"
                                         className="object-cover w-full h-80"/>
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold">Awesome</h3>
                                        <p className="text-gray-700">This is a description of the project</p>
                                    </div>
                                </div>
                                <div className="bg-gray-900 rounded-lg shadow-lg overflow-hidden">
                                    <img src="/demo/code1.jpg" alt="awesome"
                                         className="object-cover w-full h-80"/>
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold">Awesome</h3>
                                        <p className="text-gray-700">This is a description of the project</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
