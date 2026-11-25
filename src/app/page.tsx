"use client";

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Experiencias from '@/components/Experiencias/Experiencias';
import Sobre from '@/components/Sobre/Sobre';
import Contato from '@/components/Contato/Contato';
import { ArrowUp } from 'lucide-react';
import { useSmoothScroll } from '@/providers/SmoothScrollProvider';

export default function Home() {
    const { scrollTo } = useSmoothScroll();

    // Scroll suave para seções específicas (Lenis é inicializado no SmoothScrollProvider)
    const scrollToSection = (target: string) => {
        scrollTo(target, {
            offset: -100, // Offset para compensar o header fixo
            duration: 1.5,
        });
    };

    return (
        <div className="min-h-screen flex flex-col gap-10">
            <Header scrollToSection={scrollToSection} />
            
            <Hero scrollToSection={scrollToSection} />

            <Sobre scrollToSection={scrollToSection} />

            <Experiencias />

            <Contato />

            <button onClick={() => scrollToSection('#home')} aria-label='Voltar ao topo' className='btn btn-circle bg-base-100/50 hover:bg-base-100/70 backdrop-blur-xs fixed bottom-5 right-5 hidden md:flex'>   
                <ArrowUp className="w-4 h-4" />
            </button>

        </div>
    );
}