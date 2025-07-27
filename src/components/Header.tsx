"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

interface HeaderProps {
    className?: string;
}

export default function Header({ className = "" }: HeaderProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleMenu = () => setIsMenuOpen((v) => !v);

    // Variantes para os links de navegação
    const navItemVariants = {
        hidden: { opacity: 0, y: -20 },
        visible: {
            opacity: 1,
            y: 0,
        },
        hover: {
            y: -2,
        },
    };

    // Variantes para o menu mobile
    const mobileMenuVariants = {
        hidden: {
            opacity: 0,
            height: 0,
        },
        visible: {
            opacity: 1,
            height: "auto",
        },
    };

    const navItems = [
        { href: "#home", label: "Início" },
        { href: "#about", label: "Sobre" },
        { href: "#projects", label: "Projetos" },
        { href: "#contact", label: "Contato" },
    ];

    return (
        <motion.header
            className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out  rounded-4xl
        ${isScrolled ? "bg-base-100/80 backdrop-blur-xs shadow-lg m-6" : "bg-transparent"}
        ${isMenuOpen ? "bg-white/80 backdrop-blur-xs shadow-lg p-6" : ""}
        ${className}
      `}
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <motion.div 
                        className="flex items-center space-x-4"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.2 }}
                        >
                            <Image
                                src="/logo.svg"
                                alt="Logo"
                                width={60}
                                height={60}
                            />
                        </motion.div>
                        <span className="text-xl">Vinicius Medeiros</span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <motion.nav 
                        className="hidden md:flex items-center space-x-8"
                        initial="hidden"
                        animate="visible"
                        transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
                    >
                        {navItems.map((item, index) => (
                            <motion.a
                                key={item.href}
                                href={item.href}
                                className="link link-hover"
                                variants={navItemVariants}
                                whileHover="hover"
                            >
                                {item.label}
                            </motion.a>
                        ))}
                    </motion.nav>

                    {/* Mobile Menu Button */}
                    <motion.button
                        className="md:hidden btn btn-ghost btn-sm"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 }}
                    >
                        <AnimatePresence mode="wait">
                            {isMenuOpen ? (
                                <motion.div
                                    key="close"
                                    initial={{ rotate: -90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: 90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <X className="w-5 h-5" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="menu"
                                    initial={{ rotate: 90, opacity: 0 }}
                                    animate={{ rotate: 0, opacity: 1 }}
                                    exit={{ rotate: -90, opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                >
                                    <Menu className="w-5 h-5" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.button>
                </div>

                {/* Mobile Navigation */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="md:hidden py-4 border-t border-base-300"
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="hidden"
                        >
                            <nav className="flex flex-col space-y-4">
                                {navItems.map((item, index) => (
                                    <motion.a
                                        key={item.href}
                                        href={item.href}
                                        className="link link-hover"
                                        onClick={() => setIsMenuOpen(false)}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.3, delay: index * 0.1 }}
                                        whileHover={{ x: 10 }}
                                    >
                                        {item.label}
                                    </motion.a>
                                ))}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    );
} 