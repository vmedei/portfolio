"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Idioma } from "@/i18n/ui";

// Bandeiras em SVG (os emojis de bandeira não aparecem no Windows)
function BandeiraBrasil() {
    return (
        <svg viewBox="0 0 20 20" className="w-full h-full" aria-hidden>
            <rect width="20" height="20" fill="#009C3B" />
            <polygon points="10,3 18,10 10,17 2,10" fill="#FFDF00" />
            <circle cx="10" cy="10" r="3.8" fill="#002776" />
            <path d="M6.4 9.3 Q10 8.2 13.6 10.4" stroke="#fff" strokeWidth="0.7" fill="none" />
        </svg>
    );
}

function BandeiraEUA() {
    return (
        <svg viewBox="0 0 20 20" className="w-full h-full" aria-hidden>
            <rect width="20" height="20" fill="#fff" />
            {[0, 2, 4, 6, 8, 10, 12].map((i) => (
                <rect key={i} y={i * (20 / 13)} width="20" height={20 / 13} fill="#B22234" />
            ))}
            <rect width="9" height={(20 / 13) * 7} fill="#3C3B6E" />
        </svg>
    );
}

const opcoes: { idioma: Idioma; Bandeira: () => React.JSX.Element }[] = [
    { idioma: "pt", Bandeira: BandeiraBrasil },
    { idioma: "en", Bandeira: BandeiraEUA },
];

// Seletor minimalista em vidro fosco (glassmorphism): duas bandeiras, a ativa em destaque
export default function SeletorIdioma({ className = "" }: { className?: string }) {
    const { idioma, setIdioma, t } = useLanguage();

    return (
        <div
            role="group"
            aria-label={t.idioma.rotulo}
            className={`inline-flex items-center gap-1 p-1 rounded-full border border-white/40 bg-white/25 backdrop-blur-md shadow-sm ${className}`}
        >
            {opcoes.map(({ idioma: opcao, Bandeira }) => {
                const ativo = idioma === opcao;
                const nome = opcao === "pt" ? t.idioma.portugues : t.idioma.ingles;
                return (
                    <button
                        key={opcao}
                        type="button"
                        onClick={() => setIdioma(opcao)}
                        aria-pressed={ativo}
                        aria-label={nome}
                        title={nome}
                        className={`w-7 h-7 rounded-full overflow-hidden transition-all duration-200 cursor-pointer ${
                            ativo
                                ? "ring-2 ring-white/80 shadow-md scale-100 opacity-100"
                                : "opacity-45 grayscale-[60%] scale-90 hover:opacity-80 hover:grayscale-0"
                        }`}
                    >
                        <Bandeira />
                    </button>
                );
            })}
        </div>
    );
}
