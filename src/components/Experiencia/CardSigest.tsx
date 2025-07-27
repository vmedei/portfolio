import Image from "next/image";

interface CardSigestProps {
    onOpenVideoModal: () => void;
}

const CardSigest = ({ onOpenVideoModal }: CardSigestProps) => {
    return (
        <div
            className="card bg-base-200 shadow-xl w-80 mx-auto hover:scale-110 transition-all duration-300 cursor-pointer group"
            onClick={onOpenVideoModal}
        >
            <div className="card-body text-center">
                <div className="relative h-40 flex">
                    <Image
                        src="/sigest/Sigest_1.png"
                        alt="Sigest"
                        width={300}
                        height={200}
                        className="rounded-lg shadow-md group-hover:opacity-80 transition-opacity object-cover"
                    />
                    {/* Badge indicando que é vídeo */}
                    <div className="absolute top-2 right-2 bg-base-100 opacity-50 rounded-full px-2 py-1 text-xs font-semibold text-primary-content">
                        VÍDEO
                    </div>
                </div>
                <h3 className="card-title justify-center">Sigest</h3>
                <p>Sistema integrado de gestão de transferências tributárias</p>
            </div>
        </div>
    );
};

export default CardSigest;
