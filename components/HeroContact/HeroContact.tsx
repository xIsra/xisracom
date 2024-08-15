'use client'


export function HeroContact() {
    return (
        <section id="contact" className="relative min-h-screen bg-gray-900">
            <div className="mx-auto max-w-4xl h-full flex flex-col justify-center">
                {/* Hero content */}
                <div className="pb-12 pt-50 md:pb-20 md:pt-40">
                    {/* Section header */}
                    <div className="pb-12 text-center md:pb-16">
                        <h2 className="mb-6 text-6xl font-lexend font-extralight">
                            {/* eslint-disable-next-line react/no-unescaped-entities */}
                            Contact me
                        </h2>
                        <p className="text-xl text-gray-600">
                            Im always happy to chat about new projects, ideas, or anything else.
                        </p>
                        <form>
                            <div className="grid grid-cols-1 gap-6 mt-8 sm:grid-cols-2">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-red-400">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        autoComplete="name"
                                        className="mt-1 block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-red-400">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        autoComplete="email"
                                        className="mt-1 block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <label htmlFor="subject" className="block text-sm font-medium text-red-400">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        className="mt-1 block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <div className="flex justify-between">
                                        <label htmlFor="message" className="block text-sm font-medium text-red-400">
                                            Message
                                        </label>
                                        <span className="text-sm text-red-400" id="message-max">
                                            Max. 500 characters
                                        </span>
                                    </div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={4}
                                        className="mt-1 block w-full px-3 py-2 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-pink-500 focus:border-pink-500 sm:text-sm"
                                        aria-describedby="message-max"
                                    />
                                </div>
                                <div className="sm:col-span-2">
                                    <button
                                        type={"submit"}
                                        className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-400 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 sm:text-sm"
                                    >
                                        Send message
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
);
}
