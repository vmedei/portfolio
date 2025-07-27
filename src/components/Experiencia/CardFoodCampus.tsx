import { ExternalLink } from "lucide-react";
import Image from "next/image";

interface CardFoodCampusProps {
    onOpenSwiper: (index: number) => void;
}

const CardFoodCampus = ({ onOpenSwiper }: CardFoodCampusProps) => {
    return (
        <div
            className="card bg-base-200 shadow-xl w-80 mx-auto hover:scale-110 md:origin-right transition-all duration-300 cursor-pointer group"
            onClick={() => onOpenSwiper(0)}
        >
            <div className="card-body text-center">
                <div className="relative h-40 flex">
                    <Image
                        src="/foodcampus/FoodCampus.svg"
                        alt="FoodCampus"
                        width={300}
                        height={200}
                        className="rounded-lg shadow-md group-hover:opacity-80 transition-opacity object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-base-100 opacity-50 rounded-full px-2 py-1 text-xs font-semibold text-primary-content">
                        <ExternalLink className="w-5 h-5" / >
                    </div>
                </div>
                
                <h3 className="card-title justify-center">FoodCampus</h3>
                <p>Plataforma de delivery para universitários</p>
            </div>
        </div>
    );
};

export default CardFoodCampus; 