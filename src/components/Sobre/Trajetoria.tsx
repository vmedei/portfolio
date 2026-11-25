import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

interface TimelineItem {
    year?: string;
    title: string;
    description: string;
}

const timelineData: TimelineItem[] = [
    {
        year: "1997",
        title: "Raízes",
        description: "Nascido em Natal, capital do Rio Grande do Norte, onde vivi grande parte da minha infância e adolescência. Desde cedo, fui apaixonado por filmes, música, história e tecnologia.",
    },
    {
        year: "2012-2015",
        title: "Primeiros Passos",
        description: "Comecei a estudar Design Gráfico por conta própria, principalmente com revistas de Photoshop e CorelDRAW. Logo consegui meu primeiro freela! Fiz cursos de Design Gráfico e participei de bootcamps de Web Design, onde me desenvolvi como designer e criei meus primeiros projetos em HTML, CSS e JavaScript.",
    },
    {
        year: "2018-2020",
        title: "Empreendedorismo",
        description: "Criei meu primeiro negócio: uma gráfica focada em comunicação visual e soluções em impressão digital. Atuei como designer, gerente e proprietário. Foi uma experiência enriquecedora, onde aprendi muito sobre criatividade, gestão, liderança e negócios.",
    },
    {
        year: "2020-2021",
        title: "Pandemia e Universidade",
        description: "Apesar de próspera, a gráfica foi forçada a encerrar as atividades com a chegada da pandemia. Aproveitei o momento para refletir sobre minha trajetória e decidi iniciar a graduação em Tecnologia da Informação na Universidade Federal do Rio Grande do Norte (UFRN).",
    },
    {
        year: "2022-2024",
        title: "Primeiras Experiências",
        description: "Comecei minha carreira em T.I como estagiário na Polícia Federal, atuando com suporte técnico. Lá, desenvolvi meu primeiro sistema web, criado para a ASPOFERN (Associação dos Servidores da Polícia Federal do RN), que reduziu o processamento de arquivos financeiros de 12 horas para menos de 30 segundos.",
    },
    {
        year: "2024-2026",
        title: "Modernização de Sistemas",
        description: "Na Solução Tributos, comecei como desenvolvedor frontend e me tornei desenvolvedor fullstack pleno, liderando a migração do SIGEST para uma plataforma web de auditoria tributária usada por prefeituras de todo o Brasil. Em paralelo, desenvolvi na UFRN o Doama, sistema de gestão para bancos de leite humano do Rio Grande do Norte.",
    },
    {
        year: "2025",
        title: "Reconhecimento Nacional",
        description: "Codesenvolvi o Senior Code AI, plataforma educacional com IA que ensina pensamento computacional a pessoas idosas. O projeto conquistou o 1º lugar no Prêmio Apps.Edu Nacional, no CBIE 2025.",
    },
    {
        year: "2026 - Atualmente",
        title: "Desenvolvedor Web Fullstack",
        description: "Atuo no Instituto Metrópole Digital (IMD/UFRN) em uma aplicação de análise de desempenho de motoristas com mais de 10.000 usuários ativos, e na Superintendência de Tecnologia da Informação (STI/UFRN), onde lidero tecnicamente a migração da API principal do Multiprova de LoopBack 3 para NestJS, com deploy em Kubernetes.",
    },
];


interface TrajetoriaProps {
    onBack: () => void;
    scrollToSection: (target: string) => void;
}

export default function Trajetoria({ onBack, scrollToSection }: TrajetoriaProps) {
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
                                {item.year && <time className="text-xs italic">{item.year}</time>}
                                <div className="font-black">{item.title}</div>
                                <div className="text-sm opacity-70">{item.description}</div>
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
                    Voltar
                </button>
            </div>
        </motion.div>
    );
}