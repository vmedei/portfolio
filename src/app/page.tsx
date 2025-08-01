"use client";

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experiencias from '@/components/Experiencias/Experiencias';
import Sobre from '@/components/Sobre/Sobre';
import Contato from '@/components/Contato/Contato';

export default function Home() {
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
            const experienciaSection = document.getElementById('experiencias');
            if (experienciaSection) {
                experienciaSection.getBoundingClientRect();
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
            offset: -100, // Offset para compensar o header fixo
            duration: 1.5,
        });
    };

    return (
        <div className="min-h-screen flex flex-col gap-10">
            <Header scrollToSection={scrollToSection} />
            
            <Hero scrollToSection={scrollToSection} />

            <Sobre />

            <Experiencias />

            <Contato />

            {/* Footer */}
            <footer className="footer footer-center p-10 bg-base-300 text-base-content">
                <div>
                    <p>Copyright © 2024 - Todos os direitos reservados</p>
                </div>
            </footer>
        </div>
    );
}