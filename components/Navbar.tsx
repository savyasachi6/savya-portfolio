"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export const Navbar: React.FC = () => {
    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 left-0 right-0 z-50 flex h-20 items-center justify-between border-b border-border/5 bg-black/30 px-6 backdrop-blur-md md:px-12"
        >
            <div className="flex items-center">
                <a href="#" className="group relative flex items-center justify-center">
                    <motion.div
                        animate={{ y: [0, -4, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="relative overflow-hidden rounded-full border border-primary/20 h-10 w-10 md:h-12 md:w-12 shadow-[0_0_15px_rgba(255,107,53,0.15)]"
                    >
                        <Image
                            src="/porfolio.webp"
                            alt="Savyasachi Thati"
                            fill
                            className="object-cover object-center"
                        />
                    </motion.div>
                    <span className="absolute -inset-2 -z-10 rounded-full bg-primary/0 blur transition-colors group-hover:bg-primary/20"></span>
                </a>
            </div>

            <div className="hidden md:flex items-center space-x-8">
                {["Experience", "Work", "Skills", "Contact"].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="group relative text-sm font-medium text-text-muted transition-colors hover:text-text-primary"
                    >
                        {item}
                        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                    </a>
                ))}
            </div>

            <div className="flex items-center">
                <Button variant="outline" size="sm" onClick={() => window.location.href = '#contact'}>
                    Hire Me
                </Button>
            </div>
        </motion.nav>
    );
};
