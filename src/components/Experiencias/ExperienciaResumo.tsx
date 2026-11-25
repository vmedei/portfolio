"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { ExperienciaTexto } from "@/data/experiencias";
import ExperienciaCabecalho from "./ExperienciaCabecalho";

// Card de experiência sem mídia (imagens ou vídeo), usado para projetos mais recentes
export default function ExperienciaResumo({ experiencia }: { experiencia: ExperienciaTexto }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ ease: "easeOut" }}
            viewport={{ amount: 0.2 }}
        >
            <ExperienciaCabecalho meta={experiencia} />

            <div className="grid md:grid-cols-2 gap-4 md:gap-10">
                <div className="flex flex-col gap-4">
                    <div className="flex flex-wrap items-center gap-4">
                        <h3 className="text-2xl font-bold">{experiencia.titulo}</h3>
                        {experiencia.link && (
                            <a
                                href={experiencia.link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-sm btn-primary"
                            >
                                <ExternalLink className="w-4 h-4" />
                                {experiencia.link.label}
                            </a>
                        )}
                    </div>
                    <p className="text-base-content/80">{experiencia.resumo}</p>
                    <div className="flex flex-wrap gap-2">
                        {experiencia.tecnologias.map((tecnologia) => (
                            <span key={tecnologia} className="badge badge-outline">
                                {tecnologia}
                            </span>
                        ))}
                    </div>
                </div>

                <ul className="list-disc pl-5 flex flex-col gap-2 text-sm text-justify text-base-content/70">
                    {experiencia.destaques.map((destaque) => (
                        <li key={destaque}>{destaque}</li>
                    ))}
                </ul>
            </div>
            <div className="divider" />
        </motion.div>
    );
}
