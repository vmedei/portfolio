"use client";

import { Github, Linkedin, Mail, Code, Palette, Smartphone } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experiencia from '@/components/Experiencia/Experiencia';

export default function Home() {
    const [isExperienciaVisible, setIsExperienciaVisible] = useState(false);
    const lenisRef = useRef<Lenis | null>(null);

    useEffect(() => {
        // Inicializar Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            infinite: false,
        });

        lenisRef.current = lenis;

        // Função para atualizar o Lenis
        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        // Listener para scroll customizado
        const handleScroll = () => {
            const experienciaSection = document.getElementById('experiencia');
            if (experienciaSection) {
                const rect = experienciaSection.getBoundingClientRect();
                const isVisible = rect.top < window.innerHeight * 0.6;
                setIsExperienciaVisible(isVisible);
            }
        };

        // Adicionar o listener de scroll do Lenis
        lenis.on('scroll', handleScroll);
        handleScroll(); // Verificar estado inicial

        // Cleanup
        return () => {
            lenis.destroy();
        };
    }, []);

    // Função para scroll suave para seções específicas
    const scrollToSection = (target: string) => {
        lenisRef.current?.scrollTo(target, {
            offset: -80, // Offset para compensar o header fixo
            duration: 1.5,
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-300">
            <Header />
            
            <Hero scrollToSection={scrollToSection} />

            {/* Projetos */}
            <Experiencia isExperienciaVisible={isExperienciaVisible} />

            {/* About Section */}
            <section className="py-20" id="about">
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
            <section className="py-20 bg-base-200" id="contact">
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
            <footer className="footer footer-center p-10 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2024 - Todos os direitos reservados</p>
                </div>
            </footer>
        </div>
    );
}