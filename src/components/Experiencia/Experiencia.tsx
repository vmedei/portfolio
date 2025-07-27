import { useState } from "react";

import CardDoama from "./CardDoama";
import CardSigest from "./CardSigest";
import CardFoodCampus from "./CardFoodCampus";
import ModalDoama from "./ModalDoama";
import ModalSigest from "./ModalSigest";
import ModalFoodCampus from "./ModalFoodCampus";
import TecnologiasMarquee from "./TecnologiasMarquee";

interface ExperienciaProps {
    isExperienciaVisible: boolean;
}

const Experiencia = ({ isExperienciaVisible }: ExperienciaProps) => {
    const [doamaModalOpen, setDoamaModalOpen] = useState(false);
    const [doamaModalIndex, setDoamaModalIndex] = useState(0);
    const [sigestModalOpen, setSigestModalOpen] = useState(false);
    const [foodCampusModalOpen, setFoodCampusModalOpen] = useState(false);

    const openSwiper = (index: number) => {
        setDoamaModalIndex(index);
        setDoamaModalOpen(true);
    };

    const closeDoamaModal = () => {
        setDoamaModalOpen(false);
    };

    const openSigestModal = () => {
        setSigestModalOpen(true);
    };

    const closeSigestModal = () => {
        setSigestModalOpen(false);
    };

    const openFoodCampusModal = () => {
        setFoodCampusModalOpen(true);
    };

    const closeFoodCampusModal = () => {
        setFoodCampusModalOpen(false);
    };

    return (
        <section id="experiencia" className="">
            <div className={`container mx-auto space-y-6 p-10 md:rounded-xl bg-base-300 transition-all duration-800 ease-in-out 
                md:${isExperienciaVisible ? 'max-w-3/5' : 'max-w-4/5'
                }`}>
                <div className="flex justify-between items-center gap-10">
                    <h2 className="text-3xl font-bold">Experiências</h2>
                    <TecnologiasMarquee
                        gradientColor="#ebebeb"
                    />
                </div>
                <div className="divider" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card Doama */}
                    <CardDoama onOpenSwiper={openSwiper} />

                    {/* Card Sigest */}
                    <CardSigest onOpenVideoModal={openSigestModal} />

                    {/* Card FoodCampus */}
                    <CardFoodCampus onOpenSwiper={openFoodCampusModal} />
                </div>

                {/* Modal Doama */}
                <ModalDoama
                    isOpen={doamaModalOpen}
                    onClose={closeDoamaModal}
                    swiperIndex={doamaModalIndex}
                />

                {/* Modal Sigest */}
                <ModalSigest
                    isOpen={sigestModalOpen}
                    onClose={closeSigestModal}
                />

                {/* Modal FoodCampus */}
                <ModalFoodCampus
                    isOpen={foodCampusModalOpen}
                    onClose={closeFoodCampusModal}
                />
            </div>
        </section>
    );
}

export default Experiencia;