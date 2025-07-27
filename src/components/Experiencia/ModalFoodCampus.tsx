import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { SiReact, SiMysql, SiTailwindcss } from 'react-icons/si';
import { FaJava } from 'react-icons/fa';
import TecnologiasMarquee from "../TecnologiasMarquee";

interface ModalFoodCampusProps {
    isOpen: boolean;
    onClose: () => void;
}

const ModalFoodCampus = ({ isOpen, onClose }: ModalFoodCampusProps) => {
    // Ícones do FoodCampus usando React Icons
    const iconesFoodCampus = [
        { icon: SiReact, name: "React" },
        { icon: SiTailwindcss, name: "Tailwind" },
        { icon: SiMysql, name: "MySQL" },
        { icon: FaJava, name: "Java" },
    ];

    const handleVisitSite = () => {
        window.open("https://foodcampusfrontend-production.up.railway.app/", "_blank");
    };

    return (
        <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
            <div className="modal-box max-w-4xl p-8 relative">
                {/* Botão de fechar */}
                <button
                    onClick={onClose}
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-50 bg-base-100 opacity-70 hover:opacity-100"
                >
                    ✕
                </button>

                {/* Imagem única */}
                <div className="rounded-lg shadow-lg">
                    <Image
                        src="/foodcampus/FoodCampus_1.png"
                        alt="FoodCampus - Plataforma de Delivery"
                        width={300}
                        height={200}
                        className="rounded-lg w-full"
                        priority
                    />
                </div>




                {/* Info do projeto */}
                <div className="mt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="flex items-center gap-4 w-full">
                            <h3 className="whitespace-nowrap text-2xl font-bold w-1/2">FoodCampus</h3>
                            <button
                                onClick={handleVisitSite}
                                className="btn btn-sm btn-primary gap-2 hover:scale-105 transition-transform"
                            >
                                <ExternalLink className="w-5 h-5" />
                                Visitar Site
                            </button>
                        </div>
                        <TecnologiasMarquee
                            icones={iconesFoodCampus}
                        />

                    </div>
                    <div className="divider" />
                    <p className="text-base-content/70"> 
                    A plataforma facilita a conexão entre vendedores e estudantes nos limitrofes da UFRN
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

export default ModalFoodCampus; 