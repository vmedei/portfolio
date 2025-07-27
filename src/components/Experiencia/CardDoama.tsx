import Image from "next/image";
import { doamaImages } from "@/data/imagensCarrossel";

interface CardDoamaProps {
    onOpenSwiper: (index: number) => void;
}

const CardDoama = ({ onOpenSwiper }: CardDoamaProps) => {
    return (
        <div
            className="card bg-base-200 shadow-xl w-80 mx-auto hover:scale-110 md:origin-left transition-all duration-300 cursor-pointer group"
            onClick={() => onOpenSwiper(0)}
        >
            <div className="card-body text-center">
                <div className="relative h-40 flex">
                    <Image
                        src="/doama/Doama_1.jpg"
                        alt="Doama"
                        width={300}
                        height={200}
                        className="rounded-lg shadow-md group-hover:opacity-80 transition-opacity object-cover"
                    />
                    {/* Indicador de múltiplas imagens */}
                    {doamaImages.length > 1 && (
                        <div className="absolute top-2 right-2 bg-base-100 opacity-50 rounded-full p-2 text-xs font-semibold">
                            +{doamaImages.length - 1}
                        </div>
                    )}
                </div>
                <h3 className="card-title justify-center">Doama</h3>
                <p>Sistema de gerenciamento de doações e doadoras de leite materno</p>
            </div>
        </div>
    );
};

export default CardDoama;
