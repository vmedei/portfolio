import Image from "next/image";
import Slider from "react-slick";

// Import Slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { SiNodedotjs, SiPostgresql, SiSvelte, SiTailwindcss } from 'react-icons/si';
import { doamaImages } from "@/data/imagensCarrossel";
import TecnologiasMarquee from "../TecnologiasMarquee";

interface ModalDoamaProps {
    isOpen: boolean;
    onClose: () => void;
    swiperIndex: number;
}

const ModalDoama = ({ isOpen, onClose, swiperIndex }: ModalDoamaProps) => {
    // Configurações do React Slick
    const sliderSettings = {
        dots: true,
        infinite: doamaImages.length > 1,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: swiperIndex,
        centerMode: true,
    };

    // Ícones do Doama usando React Icons
    const iconesDoama = [
        { icon: SiSvelte, name: "Svelte" },
        { icon: SiTailwindcss, name: "Tailwind" },
        { icon: SiNodedotjs, name: "Node.js" },
        { icon: SiPostgresql, name: "PostgreSQL" },
    ];

    return (
        <div className={`modal ${isOpen ? 'modal-open' : ''}`}>
            <div className="modal-box max-w-4xl p-8 relative overflow-hidden">
                {/* Botão de fechar */}
                <button
                    onClick={onClose}
                    className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 z-50 bg-base-100 opacity-70 hover:opacity-100"
                >
                    ✕
                </button>

                <Slider {...sliderSettings}>
                    {doamaImages.map((imagem, index) => (
                        <div key={index} className="p-4">
                            <div className="rounded-lg shadow-lg">
                                <Image
                                    src={imagem.src}
                                    alt={`${imagem.alt}`}
                                    width={800}
                                    height={500}
                                    className="object-contain rounded-lg"
                                    priority={index === 0}
                                />
                            </div>
                        </div>
                    ))}
                </Slider>

                {/* Info do projeto */}
                <div className="mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                        <h3 className="whitespace-nowrap text-2xl font-bold w-1/2">Doama</h3>
                        <TecnologiasMarquee
                            icones={iconesDoama}
                        />
                    </div>
                    <div className="divider"/>
                    <p className="text-base-content/70">
                        Sistema completo de gerenciamento de doações e doadoras de leite materno
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

export default ModalDoama;
