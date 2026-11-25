"use client";

import { FiGithub } from 'react-icons/fi';
import { PiLinkedinLogo } from 'react-icons/pi';
import { MdOutlineEmail } from "react-icons/md";

const contatos = [
    { nome: "GitHub", href: "https://github.com/vmedei", Icone: FiGithub, externo: true },
    { nome: "LinkedIn", href: "https://linkedin.com/in/vmedei", Icone: PiLinkedinLogo, externo: true },
    { nome: "Email", href: "mailto:vinicius.m3deiros@gmail.com", Icone: MdOutlineEmail, externo: false },
];

export default function Contato() {
    return (
        <section className="h-screen flex flex-col items-center justify-between" id="contact">
            <div/>
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-8">Vamos Conversar?</h2>
                <p className="text-lg mb-8 text-base-content/70">
                    Estou sempre aberto a novas oportunidades e colaborações.
                </p>
                <div className="flex gap-6 justify-center">
                    {contatos.map(({ nome, href, Icone, externo }) => (
                        <div key={nome} className="tooltip" data-tip={nome}>
                            <a
                                href={href}
                                {...(externo ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                                className="block p-4 text-base-content/70 hover:text-base-content"
                                aria-label={nome}
                            >
                                <Icone className="w-6 h-6" />
                            </a>
                        </div>
                    ))}
                </div>
            </div>
            {/* Footer */}
            <footer className="footer p-10 bg-base-300 text-base-content">
                <div>
                    <p className='font-bold'>Vinicius Medeiros © {new Date().getFullYear()} - Todos os direitos reservados</p>
                    <p>CNPJ: 31.815.099/0001-03</p>
                </div>
            </footer>
        </section>
    );
} 