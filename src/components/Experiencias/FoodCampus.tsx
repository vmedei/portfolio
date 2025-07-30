"use client";

import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { FaJava } from "react-icons/fa";
import { SiReact, SiTailwindcss } from "react-icons/si";

export default function FoodCampus() {
    // Ícones das tecnologias
    const iconesFoodCampus = [
        { icon: SiReact, name: "React" },
        { icon: SiTailwindcss, name: "Tailwind" },
        { icon: FaJava, name: "Java" },
    ];

    const handleVisitSite = () => {
        window.open("https://foodcampusfrontend-production.up.railway.app/", "_blank");
    };

    return (
        <div className="grid md:grid-cols-2 gap-10 relative">
            {/* Imagem do FOODCAMPUS */}
            <div>
                <div className="relative group cursor-pointer">
                    <Image
                        src="/foodcampus/FoodCampus.svg"
                        alt="FoodCampus - Aplicativo de delivery"
                        width={800}
                        height={500}
                        className="object-cover rounded-lg w-full h-[400px]"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                        <a
                            href="https://foodcampus-project.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn btn-primary"
                        >
                            Ver Projeto
                        </a>
                    </div>
                </div>

                {/* Info do projeto FOODCAMPUS */}
                <div className="mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="flex items-center gap-4">
                            <h3 className="whitespace-nowrap text-2xl font-bold w-1/2">FoodCampus</h3>
                            <button
                                onClick={handleVisitSite}
                                className="btn btn-sm btn-primary "
                            >
                                <ExternalLink className="w-5 h-5" />
                                Visitar Site
                            </button>
                        </div>
                        <div className="flex gap-4">
                            {iconesFoodCampus.map((icone, index) => (
                                <div key={index} title={icone.name} className="tooltip" data-tip={icone.name}>
                                    <icone.icon
                                        className="h-6 w-6 text-base-content opacity-50 hover:opacity-100 transition-opacity duration-300"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="divider" />
                </div>
            </div>

            {/* Texto do FOODCAMPUS */}
            <div className="relative z-10">
                <div className="flex gap-8 h-full">
                    <p className="font-bold text-base-content/70">
                        SOBRE
                    </p>
                    <div className="flex flex-col gap-6 h-full w-full">
                        <p className="text-justify text-base-content/70">
                            <span className="font-bold text-base-content">Contexto: </span>
                            O FoodCampus foi um projeto acadêmico desenvolvido em duas semanas, com o objetivo de conectar vendedores ambulantes do campus a estudantes e frequentadores da universidade por meio de uma plataforma digital.
                        </p>

                        <p className="text-justify text-base-content/70">
                            <span className="font-bold text-base-content">Desafio e Solução: </span>
                            O desafio era criar uma solução completa em tempo limitado, atendendo tanto vendedores quanto consumidores. A plataforma inclui gerenciamento de produtos, agendamento de horários, reserva de pedidos e busca por proximidade, além de um mapa interativo com os setores do campus.
                        </p>

                        <p className="text-justify text-base-content/70">
                            <span className="font-bold text-base-content">Resultado: </span>
                            Projeto entregue com sucesso dentro do prazo, com interface fluida e funcionalidades robustas para ambos os perfis de usuário, simulando uma experiência real de compra e venda no ambiente universitário.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
} 