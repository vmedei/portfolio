"use client";

import { Github, Linkedin, Mail, Download, Code, Palette, Smartphone } from 'lucide-react';
import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import AnimatedPath from '@/components/AnimatedPath';
import { pathD } from '@/data/pathD';
import Projects from '@/components/Projects';
import LocomotiveScrollProvider from '@/components/LocomotiveScrollProvider';

export default function Home() {
    const [isProjectsVisible, setIsProjectsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                const rect = projectsSection.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight * 0.6;
                setIsProjectsVisible(isVisible);
            }
        };

        // Usar o evento de scroll nativo por enquanto
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Verificar estado inicial

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <LocomotiveScrollProvider>
            <div data-scroll-container className="min-h-screen bg-gradient-to-br from-base-100 to-base-300">
            <Header />
            {/* Hero Section */}
            <section id="home" data-scroll-section className="hero min-h-[75vh]">

                <div className="relative flex justify-between w-3/4 h-3/4">

                    <div className="flex flex-col justify-around z-10">
                        <div>
                            <h1 className="text-5xl font-bold">CRIO INTERFACES SIMPLES E MEMORÁVEIS</h1>
                            <h1 className="text-4xl font-medium italic text-primary-content/70">Transformando ideias em experiências digitais incríveis</h1>
                        </div>
                        <div className="flex gap-10">
                            <button className="btn btn-xl rounded-lg btn-primary">
                                <Download className="w-4 h-4" />
                                Currículo
                            </button>
                            <button className="btn btn-xl rounded-lg bg-base-100/50 backdrop-blur-xs shadow-lg">
                                <Mail className="w-4 h-4" />
                                Contato
                            </button>
                        </div>
                    </div>

                    <div className='absolute inset-0 opacity-10'>
                        <AnimatedPath pathD={pathD} />
                    </div>
                </div>
            </section>

            {/* Projetos */}
            <div id="projects" data-scroll-section>
                <Projects isProjectsVisible={isProjectsVisible} />
            </div>





            {/* About Section */}
            <section id="about" data-scroll-section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">Sobre Mim</h2>
                        <p className="text-base-content/70 max-w-2xl mx-auto">
                            Sou um desenvolvedor apaixonado por criar soluções inovadoras e experiências de usuário excepcionais.
                            Especializado em tecnologias modernas e sempre em busca de novos desafios.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="card bg-base-200 shadow-xl">
                            <div className="card-body text-center">
                                <Code className="w-12 h-12 mx-auto mb-4 text-primary" />
                                <h3 className="card-title justify-center">Desenvolvimento</h3>
                                <p>Criação de aplicações web modernas e responsivas</p>
                            </div>
                        </div>

                        <div className="card bg-base-200 shadow-xl">
                            <div className="card-body text-center">
                                <Palette className="w-12 h-12 mx-auto mb-4 text-primary" />
                                <h3 className="card-title justify-center">Design</h3>
                                <p>Interfaces intuitivas e experiências de usuário excepcionais</p>
                            </div>
                        </div>

                        <div className="card bg-base-200 shadow-xl">
                            <div className="card-body text-center">
                                <Smartphone className="w-12 h-12 mx-auto mb-4 text-primary" />
                                <h3 className="card-title justify-center">Mobile</h3>
                                <p>Aplicações móveis nativas e híbridas</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Contact Section */}
            <section id="contact" data-scroll-section className="py-20 bg-base-200">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-8">Vamos Conversar?</h2>
                    <div className="flex gap-6 justify-center">
                        <a href="#" className="btn btn-circle btn-outline">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="#" className="btn btn-circle btn-outline">
                            <Linkedin className="w-6 h-6" />
                        </a>
                        <a href="#" className="btn btn-circle btn-outline">
                            <Mail className="w-6 h-6" />
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer data-scroll-section className="footer footer-center p-10 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2024 - Todos os direitos reservados</p>
                </div>
            </footer>
            </div>
        </LocomotiveScrollProvider>
    );
}
