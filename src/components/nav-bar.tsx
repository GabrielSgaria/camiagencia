"use client";
import Link from "next/link";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Image from "next/image";
import { motion } from 'framer-motion'

export function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            closeMenu();
        }
    };
    return (
        <div className="z-50 relative">
            <div className="bg-transparent">
                <div
                    className={`container mx-auto flex flex-row items-center justify-between gap-8 py-6 text-lg px-8 sm:px-3 lg:px-10 ${isMenuOpen ? "flex-col pb-20" : "flex-row"
                        }`}
                >
                    <div className="flex h-9 w-9 items-center justify-center lg:hidden">
                        <DotsHorizontalIcon
                            onClick={handleMenuToggle}
                            className="size-8 text-marromCami hover:size-9 focus:outline-none lg:hidden"
                        />
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: -30, scale: 0.7 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.2 }}
                        className="w-36">

                        <Link href="/" onClick={closeMenu}>
                            <Image
                                width={900}
                                height={900}
                                quality={100}
                                priority={true}
                                src="/image/agencia-cami-2024.png"
                                alt="Logo Principal"
                            />
                        </Link>
                    </motion.div>

                    <div
                        className={`lg:flex lg:items-center lg:gap-8 ${isMenuOpen ? "flex" : "hidden"
                            }`}
                    >
                        <nav className="md:flex grow justify-center">
                            <div
                                className={`flex min-w-0 flex-row items-center justify-center text-base ${isMenuOpen ? "flex-col gap-16 " : "flex-row gap-9"
                                    }`}
                            >
                                <button className="h-10 hover:bg-marromCami/35 rounded-xl transition-all duration-200 text-marromCami font-semibold text-lg uppercase px-2"
                                    onClick={() => scrollToSection("about")}>
                                    Quem somos?
                                </button>
                                <button className="h-10 hover:bg-marromCami/35 rounded-xl transition-all duration-200 text-marromCami font-semibold text-lg uppercase px-2"
                                    onClick={() => scrollToSection("services")}>
                                    Metodologia
                                </button>
                                <button className="h-10 hover:bg-marromCami/35 rounded-xl transition-all duration-200 text-marromCami font-semibold text-lg uppercase px-2"
                                    onClick={() => scrollToSection("portfolio")}>
                                    Portfólio
                                </button>
                                <button className="h-10 hover:bg-marromCami/35 rounded-xl transition-all duration-200 text-marromCami font-semibold text-lg uppercase px-2"
                                    onClick={() => scrollToSection("questions")}>
                                    Perguntas frequentes
                                </button>

                            </div>
                        </nav>
                    </div>

                </div>
            </div>
        </div>
    );
}


