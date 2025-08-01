import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Sobre() {

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768); // 768px é o breakpoint md do Tailwind
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    const imageVariants = {
        initial: {
            opacity: 0,
            x: isMobile ? 0 : -50,
            y: isMobile ? -50 : 0,
        },
        whileInView: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.2,
                ease: "easeOut" as const,
            }
        }
    };

    const textVariants = {
        initial: {
            opacity: 0,
            x: isMobile ? 0 : 50,
            y: isMobile ? -50 : 0,
        },
        whileInView: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.2,
                ease: "easeOut" as const,
                delay: 0.2
            }
        }
    };

    return (
        <section className="flex flex-col md:flex-row gap-10 justify-center items-center" id="sobre">

            <motion.div
                variants={imageVariants}
                initial="initial"
                whileInView="whileInView"
                viewport={{ amount: 0.3 }}
            >
                <Image src="/sobre/vinicius.png" alt="Profile" width={400} height={400} />
            </motion.div>

            <motion.div
                className="md:w-1/2 p-4 flex flex-col gap-6"
                variants={textVariants}
                initial="initial"
                whileInView="whileInView"
                viewport={{ amount: 0.3 }}
            >
                <p className="hidden md:block font-bold text-base-content/50">
                    SOBRE
                </p>

                <p className="text-justify text-2xl">
                    Atuo há mais de  <span className="font-bold">10 anos</span> com tecnologia e criatividade, sendo os últimos 5 totalmente focado em <span className="font-bold">desenvolvimento de sistemas web</span>.
                </p>

                <p className="text-justify text-2xl">
                    Nesse período, acumulei <span className="font-bold">experiência</span>  acadêmica e profissional com empreendedorismo, design, coleta e análise de dados, <span className="font-bold">gestão de equipe e projetos</span>, além das tecnologias mais modernas do mercado.
                </p>

                <p className="text-justify text-2xl">
                    Quero saber como tudo isso começou?
                </p>

                <div className="flex">
                    <button
                        className="btn btn-secondary"
                    >
                        CONHEÇA MINHA TRAGETÓRIA
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

            </motion.div>

        </section>
    );
}