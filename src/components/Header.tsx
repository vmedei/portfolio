"use client";

import { useState, useEffect } from "react";
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

    return (
        <header
            className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out
        ${isScrolled ? "bg-base-100/70 backdrop-blur-xs shadow-lg rounded-full m-6" : "bg-transparent"}
        ${className}
      `}
        >
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex items-center space-x-4 ">
                        <Image
                            src="/logo.svg"
                            alt="Logo"
                            width={60}
                            height={60}
                        />
                        <span className="text-xl">Vinicius Medeiros</span>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="link link-hover">Início</a>
                        <a href="#about" className="link link-hover">Sobre</a>
                        <a href="#projects" className="link link-hover">Projetos</a>
                        <a href="#contact" className="link link-hover">Contato</a>
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden btn btn-ghost btn-sm"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden py-4 border-t border-base-300">
                        <nav className="flex flex-col space-y-4">
                            <a href="#home" className="link link-hover" onClick={() => setIsMenuOpen(false)}>
                                Início
                            </a>
                            <a href="#about" className="link link-hover" onClick={() => setIsMenuOpen(false)}>
                                Sobre
                            </a>
                            <a href="#projects" className="link link-hover" onClick={() => setIsMenuOpen(false)}>
                                Projetos
                            </a>
                            <a href="#contact" className="link link-hover" onClick={() => setIsMenuOpen(false)}>
                                Contato
                            </a>
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
} 