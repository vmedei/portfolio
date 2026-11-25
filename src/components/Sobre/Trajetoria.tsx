import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";



interface TrajetoriaProps {
    onBack: () => void;
    scrollToSection: (target: string) => void;
}

export default function Trajetoria({ onBack, scrollToSection }: TrajetoriaProps) {
    const { t } = useLanguage();
    const timelineData = t.trajetoria;
    const containerVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut" as const,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.4,
                ease: "easeOut" as const
            }
        }
    };

    const handleClick = () => {
        onBack();

        // Delay para garantir que o componente de trajetória seja exibido
        setTimeout(() => {
            scrollToSection('#sobre');
        }, 500);
    }

    return (
        <motion.div
            className="w-full max-w-4xl mx-auto p-4 relative"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >

            <motion.div variants={itemVariants}>
                <ul className="timeline timeline-vertical">
                    {timelineData.map((item, index) => (
                        <motion.li key={index} variants={itemVariants}>
                            {index > 0 && <hr />}
                            <div className={`mb-10 ${index % 2 === 0 ? 'timeline-start md:text-end' : 'timeline-end md:text-start'}`}>
                                <time className="text-xs italic">{item.ano}</time>
                                <div className="font-black">{item.titulo}</div>
                                <div className="text-sm opacity-70">{item.descricao}</div>
                            </div>
                            <div className="timeline-middle">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    className="h-5 w-5"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            {index < timelineData.length - 1 && <hr />}
                        </motion.li>
                    ))}
                </ul>
            </motion.div>

            <div className="flex justify-center w-1/3 mx-auto bottom-5 sticky">

                <button
                    onClick={handleClick}
                    className="btn w-full bg-base-100/50 hover:bg-base-100/70 backdrop-blur-xs shadow-xl"
                >
                    <ArrowLeft className="w-4 h-4" />
                    {t.sobre.voltar}
                </button>
            </div>
        </motion.div>
    );
}