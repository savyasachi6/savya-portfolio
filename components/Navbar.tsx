"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";


const NAV_LINKS = [
    { label: "Experience", href: "#experience" },
    { label: "Work",       href: "#work" },
    { label: "Skills",     href: "#skills" },
    { label: "Contact",    href: "#contact" },
];

/**
 * Floating Glass Pill Navbar
 * Skill: high-end-visual-design §5A — "Fluid Island" Nav
 * - Detached pill: mt-6, rounded-full, backdrop-blur
 * - Hamburger morph to X on mobile
 * - Staggered link reveal on menu open
 */
export const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handler = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", handler, { passive: true });
        return () => window.removeEventListener("scroll", handler);
    }, []);

    const closeMenu = () => setMenuOpen(false);

    return (
        <>
            {/* Floating pill nav */}
            <motion.header
                initial={{ y: -24, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="fixed top-0 left-0 right-0 z-[100] flex justify-center px-4 pt-5 pointer-events-none"
            >
                <nav
                    className="pointer-events-auto flex items-center gap-6 rounded-full border px-4 py-2.5 transition-all duration-500"
                    style={{
                        background: scrolled
                            ? "rgba(5,5,5,0.85)"
                            : "rgba(13,13,13,0.70)",
                        borderColor: scrolled
                            ? "rgba(255,255,255,0.08)"
                            : "rgba(255,255,255,0.05)",
                        backdropFilter: "blur(20px) saturate(180%)",
                        WebkitBackdropFilter: "blur(20px) saturate(180%)",
                        boxShadow: scrolled
                            ? "0 8px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.06)"
                            : "0 4px 16px rgba(0,0,0,0.2)",
                    }}
                >
                    {/* Logo */}
                    <a href="#" className="group relative flex items-center justify-center flex-shrink-0">
                        <motion.div
                            animate={{ y: [0, -3, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="relative overflow-hidden rounded-full h-8 w-8"
                            style={{
                                border: "1px solid rgba(255,107,53,0.3)",
                                boxShadow: "0 0 12px rgba(255,107,53,0.15)",
                            }}
                        >
                            <Image
                                src="/porfolio.webp"
                                alt="Savyasachi Thati"
                                fill
                                className="object-cover object-center"
                                priority
                            />
                        </motion.div>
                        <span
                            className="absolute -inset-2 -z-10 rounded-full opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-100"
                            style={{ background: "rgba(255,107,53,0.15)" }}
                        />
                    </a>

                    {/* Desktop links */}
                    <div className="hidden md:flex items-center gap-1">
                        {NAV_LINKS.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                className="group relative px-3 py-1.5 text-sm font-medium transition-colors duration-200"
                                style={{ color: "var(--text-secondary)" }}
                                onMouseEnter={(e) =>
                                    (e.currentTarget.style.color = "var(--text-primary)")
                                }
                                onMouseLeave={(e) =>
                                    (e.currentTarget.style.color = "var(--text-secondary)")
                                }
                            >
                                {item.label}
                                <span
                                    className="absolute bottom-0 left-3 right-3 h-[1px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                                    style={{ background: "var(--color-primary)" }}
                                />
                            </a>
                        ))}
                    </div>

                    {/* Hire Me CTA */}
                    <a
                        href="#contact"
                        className="hidden md:inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold transition-all duration-300 active:scale-95"
                        style={{
                            background: "var(--color-primary)",
                            color: "#000",
                        }}
                        onMouseEnter={(e) =>
                            (e.currentTarget.style.background = "hsl(18,100%,68%)")
                        }
                        onMouseLeave={(e) =>
                            (e.currentTarget.style.background = "var(--color-primary)")
                        }
                    >
                        Hire Me
                        <span
                            className="flex h-5 w-5 items-center justify-center rounded-full text-[10px] transition-transform duration-200 group-hover:translate-x-0.5"
                            style={{ background: "rgba(0,0,0,0.15)" }}
                        >
                            ↗
                        </span>
                    </a>

                    {/* Mobile hamburger */}
                    <button
                        className="relative flex h-8 w-8 md:hidden items-center justify-center rounded-full transition-colors duration-200"
                        style={{ color: "var(--text-secondary)" }}
                        onClick={() => setMenuOpen((o) => !o)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                    >
                        <span
                            className="absolute inset-0 rounded-full transition-opacity duration-200"
                            style={{
                                background: "rgba(255,255,255,0.05)",
                                opacity: menuOpen ? 1 : 0,
                            }}
                        />
                        {/* Hamburger → X morph */}
                        <motion.div
                            animate={menuOpen ? "open" : "closed"}
                            className="relative h-4 w-4"
                        >
                            <motion.span
                                variants={{
                                    closed: { rotate: 0, y: -4, opacity: 1 },
                                    open: { rotate: 45, y: 0, opacity: 1 },
                                }}
                                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                                className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 rounded-full"
                                style={{ background: "var(--text-primary)" }}
                            />
                            <motion.span
                                variants={{
                                    closed: { rotate: 0, y: 4, opacity: 1 },
                                    open: { rotate: -45, y: 0, opacity: 1 },
                                }}
                                transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
                                className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 rounded-full"
                                style={{ background: "var(--text-primary)" }}
                            />
                        </motion.div>
                    </button>
                </nav>
            </motion.header>

            {/* Mobile full-screen overlay */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        key="mobile-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[90] flex flex-col items-center justify-center"
                        style={{
                            background: "rgba(5,5,5,0.95)",
                            backdropFilter: "blur(32px)",
                            WebkitBackdropFilter: "blur(32px)",
                        }}
                        onClick={closeMenu}
                    >
                        <nav className="flex flex-col items-center gap-8" onClick={(e) => e.stopPropagation()}>
                            {NAV_LINKS.map((item, i) => (
                                <motion.a
                                    key={item.label}
                                    href={item.href}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: 16 }}
                                    transition={{
                                        delay: i * 0.07,
                                        duration: 0.5,
                                        ease: [0.32, 0.72, 0, 1],
                                    }}
                                    className="font-display text-4xl font-bold transition-colors duration-200"
                                    style={{ color: "var(--text-primary)" }}
                                    onClick={closeMenu}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.color = "var(--color-primary)")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.color = "var(--text-primary)")
                                    }
                                >
                                    {item.label}
                                </motion.a>
                            ))}
                            <motion.a
                                href="#contact"
                                initial={{ opacity: 0, y: 24 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.32, duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                                onClick={closeMenu}
                                className="mt-4 rounded-full px-8 py-3 text-lg font-bold"
                                style={{ background: "var(--color-primary)", color: "#000" }}
                            >
                                Hire Me
                            </motion.a>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
