"use client";

import Image from "next/image";
import { SiPython, SiReact, SiTailwindcss } from "react-icons/si";


export default function PfAspofern() {
    // Ícones das tecnologias
    const iconesPfAspofern = [
        { icon: SiReact, name: "React" },
        { icon: SiTailwindcss, name: "Tailwind" },
        { icon: SiPython, name: "Python" },
    ];

    return (
        <div className="grid lg:grid-cols-2 gap-8">
            {/* Imagem do PF/Aspofern */}
            <div>
                <div className="group cursor-pointer">
                    <Image
                        src="/aspofern/PfAspofern.png"
                        alt="Aspofern - Sistema de gerenciamento de eventos"
                        width={800}
                        height={500}
                        className="object-cover rounded-lg w-full lg:h-[400px]"
                    />
                </div>

                {/* Info do projeto PF/Aspofern */}
                <div className="mt-4">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-2">
                        <h3 className="whitespace-nowrap text-2xl font-bold">Polícia Federal / Aspofern</h3>
                        <div className="flex gap-4">
                            {iconesPfAspofern.map((icone, index) => (
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

            {/* Texto do PF/Aspofern */}
            <div className="relative z-10">
                <div className="flex gap-4 h-full">
                    <p className="font-bold text-base-content/70">
                        SOBRE
                    </p>
                    <div className="flex flex-col gap-6 h-full w-full">
                        <p className="text-justify text-base-content/70">
                            <span className="font-bold text-base-content">Contexto: </span>
                            Sistema desenvolvido para a Associação dos Policiais Federais do Rio Grande do Norte, com foco em automatizar o processamento de dados financeiros por meio de scripts em Python.
                        </p>

                        <p className="text-justify text-base-content/70">
                            <span className="font-bold text-base-content">Desafio e Solução: </span>
                            A gestão financeira era realizada manualmente, o que demandava tempo e estava suscetível a erros. A solução foi a criação de um sistema que automatiza a coleta e o tratamento de dados de múltiplas fontes, aumentando a precisão e reduzindo o esforço operacional.
                        </p>

                        <p className="text-justify text-base-content/70">
                            <span className="font-bold text-base-content">Resultado: </span>
                            O sistema está em operação e reduziu drasticamente o tempo de execução de processos, que passaram de semanas para minutos. A automatização trouxe eficiência e modernização à gestão da associação.
                        </p>

                    </div>
                </div>
            </div>
        </div>
    );
} 