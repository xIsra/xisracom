"use client";

import {useEffect, useState} from "react";

import Link from "next/link";
import Logo from "./logo";


export default function Header() {
    const [top, setTop] = useState<boolean>(true);

    // detect whether user has scrolled the page down by 10px
    const scrollHandler = () => {
        window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };

    useEffect(() => {
        scrollHandler();
        window.addEventListener("scroll", scrollHandler);
        return () => window.removeEventListener("scroll", scrollHandler);
    }, [top]);

    return (
        <header className="fixed z-30 w-full">
            <div className="mx-auto">
                <div
                    className="relative flex h-14 items-center justify-between gap-3 bg-gray-800/20 px-4 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit]">
                    {/* Site branding */}
                    <div className="flex flex-1 items-center">
                        <Logo/>
                    </div>

                    {/* Desktop sign in links */}
                    <ul className="hidden md:flex gap-4 items-center">
                        {/*<li>*/}
                        {/*    <Link*/}
                        {/*        href="#contact"*/}
                        {/*        className="btn shadow-none hover:bg-red-800"*/}
                        {/*    >*/}
                        {/*        Contact*/}
                        {/*    </Link>*/}
                        {/*</li>*/}
                    </ul>

                    {/* Mobile menu */}
                    <button
                        className="block md:hidden"
                        aria-label="Open Menu"
                        onClick={() => console.log("Open Menu")}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}
