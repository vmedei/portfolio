import Image from "next/image";
import { SiNextdotjs, SiNodedotjs, SiReact, SiTailwindcss, SiMysql, SiPython } from 'react-icons/si';
import TecnologiasMarquee from "./TecnologiasMarquee";

interface ModalSigestProps {
    isOpen: boolean;
    onClose: () => void;
}

// Ícones do Sigest usando React Icons
const iconesSigest = [
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiReact, name: "React" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiMysql, name: "MySQL" },
    { icon: SiPython, name: "Python" },
];

const ModalSigest = ({ isOpen, onClose }: ModalSigestProps) => {
    return (
        <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
            <div className="modal-box max-w-4xl w-full p-8 relative">
                {/* Botão de fechar */}
                <button
                    onClick={onClose}
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-10 bg-base-100 opacity-50 hover:opacity-80"
                >
                    ✕
                </button>

                {/* Container do vídeo responsivo */}
                <div className="relative w-full h-0 pb-[56.25%]">
                    {isOpen && (
                        <iframe
                            className="absolute top-0 left-0 w-full h-full rounded-lg shadow-lg"
                            src="/sigest/Sigest.mp4"
                            title="Sigest - Demonstração"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    )}
                </div>

                {/* Info do projeto */}
                <div className="mt-6">
                    <div className="flex justify-between items-end gap-10">
                        <h3 className="whitespace-nowrap text-2xl font-bold">Sigest - Sistema Integrado</h3>
                        <TecnologiasMarquee
                            icones={iconesSigest}
                        />
                        
                    </div>
                    <div className="divider"/>
                    <p className="text-base-content/70">
                        Sistema completo de gestão de transferências tributárias
                    </p>
                </div>
            </div>

            {/* Backdrop */}
            <div className="modal-backdrop" onClick={onClose}>
                <button>close</button>
            </div>
        </div>
    );
};

export default ModalSigest;
