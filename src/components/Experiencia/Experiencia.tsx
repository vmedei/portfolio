import { useState } from "react";
import { motion } from "framer-motion";

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
        <section id="experiencia" className="py-20">
            <motion.div
                className="container mx-auto space-y-6 p-10 md:rounded-xl bg-base-300 shadow-lg"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                animate={isExperienciaVisible ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 50, scale: 0.95 }}
                transition={{ duration: 0.8 }}
                whileHover={{ 
                    scale: 1.02,
                    transition: { duration: 0.3 }
                }}
            >
                <div className="flex justify-between items-center gap-10">
                    <motion.h2 
                        className="md:text-3xl text-2xl font-bold"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isExperienciaVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        Experiências
                    </motion.h2>
                    <TecnologiasMarquee
                        gradientColor="#ebebeb"
                        screenWidth={window.innerWidth}
                    />
                </div>
                <div className="divider" />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Card Doama */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isExperienciaVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <CardDoama onOpenSwiper={openSwiper} />
                    </motion.div>

                    {/* Card Sigest */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isExperienciaVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <CardSigest onOpenVideoModal={openSigestModal} />
                    </motion.div>

                    {/* Card FoodCampus */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={isExperienciaVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                    >
                        <CardFoodCampus onOpenSwiper={openFoodCampusModal} />
                    </motion.div>
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
            </motion.div>
        </section>
    );
}

export default Experiencia;