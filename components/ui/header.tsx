"use client";

import {useEffect, useState} from "react";

import Link from "next/link";
import Logo from "./logo";


function MenuList({className = ""}) {
    return <ul className={`hidden md:flex gap-1 items-center ${className}`}>
        <li>
            <Link
                href="#home"
                className="btn shadow-none hover:drop-shadow-lg hover:bg-red-400"
            >
                Home
            </Link>
        </li>
        <li>
            <Link
                href="#portfolio"
                className="btn shadow-none hover:drop-shadow-lg hover:bg-red-400"
            >
                My Stuff
            </Link>
        </li>
        <li>
            <Link
                href="#blog"
                className="btn shadow-none hover:drop-shadow-lg hover:bg-red-400"
            >
                Posts
            </Link>
        </li>
        <li>
            <Link
                href="#contact"
                className="btn shadow-none hover:drop-shadow-lg hover:bg-red-400"
            >
                Contact
            </Link>
        </li>
    </ul>;
}

export default function Header() {
    const [open, setOpen] = useState<boolean>(false);
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
        <header className="fixed z-30 w-full"

                data-aos="slide-down"
                data-aos-delay={300}>
            <div className="mx-auto">
                <div
                    className="relative flex h-14 items-center justify-between gap-3 bg-gray-800/20 px-4 shadow-lg shadow-black/[0.03] backdrop-blur-sm before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit]">
                    {/* Site branding */}
                    <div className="flex flex-1 items-center">
                        <Logo/>
                    </div>

                    {/* Desktop sign in links */}
                    <MenuList/>

                    {/* Mobile menu */}
                    <button
                        className="block md:hidden"
                        aria-label="Open Menu"
                        onClick={() => setOpen(!open)}
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

                    {/* Mobile menu */}
                    <div
                        className={`${
                            open ? "block" : "hidden"
                        } absolute top-14 inset-x-0 z-20 bg-gray-800/80 shadow-lg`}
                    >
                        <MenuList/>
                    </div>
                </div>
            </div>
        </header>
    );
}
