"use client";

import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experiencia from '@/components/Experiencia/Experiencia';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

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
                const windowHeight = window.innerHeight;
                const triggerPoint = windowHeight * 0.7; // Trigger quando 70% da tela for visível
                const isVisible = rect.top < triggerPoint && rect.bottom > 0;
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

    const handleContactClick = () => {
        scrollToSection('#contact');
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-base-100 to-base-300">
            <Header />
            <Hero onContactClick={handleContactClick} />
            <Experiencia isExperienciaVisible={isExperienciaVisible} />
            <About />
            <Contact />
            <Footer />
        </div>
    );
}