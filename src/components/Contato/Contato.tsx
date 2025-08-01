"use client";

import { FiGithub } from 'react-icons/fi';
import { PiLinkedinLogo } from 'react-icons/pi';
import { SiMaildotru } from 'react-icons/si';

export default function Contato() {
    const handleContactClick = (type: string) => {
        switch (type) {
            case 'github':
                window.open('https://github.com/vmedei', '_blank');
                break;
            case 'linkedin':
                window.open('https://linkedin.com/in/vmedei', '_blank');
                break;
            case 'email':
                window.location.href = 'mailto:vinicius.m3deiros@gmail.com';
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
                        className="border border-base-content/30 rounded-sm p-2"
                        aria-label="GitHub"
                    >
                        <FiGithub className="w-6 h-6 text-base-content/70" />
                    </button>
                    <button
                        onClick={() => handleContactClick('linkedin')}
                        className="border border-base-content/30 rounded-sm p-2"
                        aria-label="LinkedIn"
                    >
                        <PiLinkedinLogo className="w-6 h-6 text-base-content/70" />
                    </button>
                    <button 
                        onClick={() => handleContactClick('email')}
                        className="border border-base-content/30 rounded-sm p-2"
                        aria-label="Email"
                    >
                        <SiMaildotru className="w-6 h-6 text-base-content/70" />
                    </button>
                </div>
            </div>
        </section>
    );
} 