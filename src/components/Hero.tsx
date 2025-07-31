"use client";

import { Download, Mail } from 'lucide-react';
import AnimatedPath from '@/components/AnimatedPath';
import { pathD } from '@/data/pathD';

interface HeroProps {
    scrollToSection: (target: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
    return (
        <section className="hero h-screen" id="home">
            <div className="relative flex justify-between w-4/5 h-4/5">
                <div className="flex flex-col justify-around z-10">
                    <div>
                        <h1 className="md:text-5xl text-3xl font-bold">TECH LEAD & DESENVOLVEDOR FULL STACK</h1>
                        <h1 className="md:text-4xl text-2xl font-medium italic text-primary-content/70">Foco em resolver problemas com soluções inovadoras</h1>
                    </div>
                    <div className="flex md:flex-row flex-col gap-10">
                        <a 
                            href="/Vinicius Alves Medeiros.pdf" 
                            download="Vinicius_Alves_Medeiros_Curriculo.pdf"
                            className="btn btn-xl rounded-lg bg-primary/50 backdrop-blur-xs shadow-lg"
                        >
                            <Download className="w-4 h-4" />
                            Currículo
                        </a>
                        <button 
                            className="btn btn-xl rounded-lg bg-base-100/50 backdrop-blur-xs shadow-lg"
                            onClick={() => scrollToSection('#contact')}
                        >
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
    );
} 