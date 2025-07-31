"use client";

import { SiGithub, SiLinkedin, SiMaildotru } from 'react-icons/si';

interface ContatoProps {
    scrollToSection?: (target: string) => void;
}

export default function Contato({ scrollToSection }: ContatoProps) {
    const handleContactClick = (type: string) => {
        switch (type) {
            case 'github':
                window.open('https://github.com/seu-usuario', '_blank');
                break;
            case 'linkedin':
                window.open('https://linkedin.com/in/seu-perfil', '_blank');
                break;
            case 'email':
                window.location.href = 'mailto:seu-email@exemplo.com';
                break;
            default:
                break;
        }
    };

    return (
        <section className="" id="contact">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Vamos Conversar?</h2>
                <p className="text-lg mb-8 text-base-content/70">
                    Estou sempre aberto a novas oportunidades e colaborações.
                </p>
                <div className="flex gap-6 justify-center">
                    <button 
                        onClick={() => handleContactClick('github')}
                        className="btn btn-circle btn-outline hover:btn-primary transition-all duration-300"
                        aria-label="GitHub"
                    >
                        <SiGithub className="w-6 h-6" />
                    </button>
                    <button 
                        onClick={() => handleContactClick('linkedin')}
                        className="btn btn-circle btn-outline hover:btn-primary transition-all duration-300"
                        aria-label="LinkedIn"
                    >
                        <SiLinkedin className="w-6 h-6" />
                    </button>
                    <button 
                        onClick={() => handleContactClick('email')}
                        className="btn btn-circle btn-outline hover:btn-primary transition-all duration-300"
                        aria-label="Email"
                    >
                        <SiMaildotru className="w-6 h-6" />
                    </button>
                </div>
            </div>
        </section>
    );
} 