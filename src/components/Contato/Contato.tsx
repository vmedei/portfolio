"use client";

import { FiGithub } from 'react-icons/fi';
import { PiLinkedinLogo } from 'react-icons/pi';
import { MdOutlineEmail } from "react-icons/md";

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
        <section className="h-screen flex flex-col items-center justify-between" id="contact">
            <div/>
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Vamos Conversar?</h2>
                <p className="text-lg mb-8 text-base-content/70">
                    Estou sempre aberto a novas oportunidades e colaborações.
                </p>
                <div className="flex gap-6 justify-center">
                    <div className="tooltip" data-tip="GitHub">
                        <button 
                            onClick={() => handleContactClick('github')}
                            className="border-base-content/30 p-4  text-base-content/70 hover:cursor-pointer hover:text-base-content"
                            aria-label="GitHub"
                        >
                            <FiGithub className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="tooltip" data-tip="LinkedIn">
                        <button
                            onClick={() => handleContactClick('linkedin')}
                            className="border-base-content/30 p-4 text-base-content/70 hover:cursor-pointer hover:text-base-content"
                            aria-label="LinkedIn"
                    >
                        <PiLinkedinLogo className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="tooltip" data-tip="Email">
                        <button 
                            onClick={() => handleContactClick('email')}
                            className="border-base-content/30 p-4 text-base-content/70 hover:cursor-pointer hover:text-base-content"
                            aria-label="Email"
                    >
                        <MdOutlineEmail className="w-6 h-6" />
                        </button>
                    </div>
                </div>
            </div>
            {/* Footer */}
            <footer className="footer p-10 bg-base-300 text-base-content">
                <div>
                    <p className='font-bold'>Vinicius Medeiros © 2025 - Todos os direitos reservados</p>
                    <p>CNPJ: 31.815.099/0001-03</p>
                </div>
            </footer>
        </section>
    );
} 