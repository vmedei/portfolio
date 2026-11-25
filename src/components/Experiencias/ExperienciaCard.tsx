"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Experiencia } from "@/data/experiencias";
import { useMobile } from "@/contexts/MobileContext";
import ExperienciaCabecalho from "./ExperienciaCabecalho";
import ExperienciaMidia from "./ExperienciaMidia";
import { useLanguage } from "@/contexts/LanguageContext";

// Card de uma experiência, montado a partir de um item de src/data/experiencias.ts
export default function ExperienciaCard({ experiencia }: { experiencia: Experiencia }) {
    const { isMobile } = useMobile();
    const { secoes, tecnologias, link } = experiencia;
    const { t } = useLanguage();
    // Espaçamentos originais: experiências com carrossel são um pouco mais compactas abaixo da mídia
    const carrossel = experiencia.midia.tipo === "carrossel";

    return (
        <div>
            <div className="grid md:grid-cols-2 gap-2 md:gap-10 relative">
                {/* Mídia, título e tecnologias */}
                <motion.div
                    initial={{ opacity: 0, x: isMobile ? -5 : -50 }}
                    whileInView={{ opacity: 1, x: 0, transition: { ease: "easeOut" } }}
                    viewport={{ amount: 0.2 }}
                    className="flex flex-col items-center"
                >
                    <ExperienciaMidia midia={experiencia.midia} />

                    <div className={`${carrossel ? "mt-8" : "mt-4"} w-full`}>
                        <div className={`flex flex-col md:flex-row justify-between items-center ${carrossel ? "gap-2" : "gap-4"}`}>
                            <div className="flex items-center gap-4">
                                <h3 className="whitespace-nowrap text-2xl font-bold">{experiencia.titulo}</h3>
                                {link && (
                                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-primary">
                                        <ExternalLink className="w-5 h-5" />
                                        {link.label}
                                    </a>
                                )}
                            </div>
                            <div className="flex flex-wrap gap-4 justify-center md:justify-end">
                                {tecnologias.map(({ nome, icone: Icone }) => (
                                    <div key={nome} title={nome} className="tooltip" data-tip={nome}>
                                        <Icone className="h-6 w-6 text-base-content opacity-50 hover:opacity-100 transition-opacity duration-300" />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="divider" />
                </motion.div>

                {/* Seções do acordeão */}
                <motion.div
                    className="relative z-10"
                    initial={{ opacity: 0, x: isMobile ? 5 : 50 }}
                    whileInView={{ opacity: 1, x: 0, transition: { delay: 0.2, ease: "easeOut" } }}
                    viewport={{ amount: 0.2 }}
                >
                    <div className="flex gap-8 h-full">
                        <p className="hidden md:block font-bold text-base-content/70">{t.experiencias.sobre}</p>

                        <div className="flex flex-col w-full">
                            {/* Empresa, cargo, período e local ao lado de "SOBRE" / "ABOUT" */}
                            <div className="px-4">
                                <ExperienciaCabecalho meta={experiencia} />
                            </div>

                            <div className="join join-vertical w-full">
                                {secoes.map((secao, index) => (
                                    <div
                                        key={secao.titulo}
                                        className={`collapse collapse-arrow join-item border-base-300 ${index < secoes.length - 1 ? "border-b-2" : ""}`}
                                    >
                                        <input type="radio" name={`accordion-${experiencia.id}`} defaultChecked={index === 0} />
                                        <div className="collapse-title font-semibold">{secao.titulo}</div>
                                        <div className="collapse-content text-sm text-justify text-base-content/70">
                                            {secao.texto && <p>{secao.texto}</p>}
                                            {secao.itens && (
                                                <ul className="list-disc pl-5 flex flex-col gap-2">
                                                    {secao.itens.map((item) => (
                                                        <li key={item}>{item}</li>
                                                    ))}
                                                </ul>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
