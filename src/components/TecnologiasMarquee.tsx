import Marquee from 'react-fast-marquee';
import { 
    SiReact, 
    SiNextdotjs, 
    SiSvelte, 
    SiTailwindcss, 
    SiNodedotjs, 
    SiPostgresql, 
    SiMysql, 
    SiPython,
    SiDjango
} from 'react-icons/si';
import { FaJava, FaFigma } from 'react-icons/fa';
import { DiIllustrator, DiPhotoshop } from 'react-icons/di';
import { useState, useEffect } from 'react';

const iconesPadrao = [
    { icon: SiReact, name: "React" },
    { icon: SiNextdotjs, name: "Next.js" },
    { icon: SiSvelte, name: "Svelte" },
    { icon: SiTailwindcss, name: "Tailwind" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiPostgresql, name: "PostgreSQL" },
    { icon: SiMysql, name: "MySQL" },
    { icon: SiPython, name: "Python" },
    { icon: SiDjango, name: "Django" },
    { icon: FaJava, name: "Java" },
    { icon: DiIllustrator, name: "Illustrator" },
    { icon: DiPhotoshop, name: "Photoshop" },
    { icon: FaFigma, name: "Figma" },
];

interface TecnologiasMarqueeProps {
    icones?: typeof iconesPadrao;
    speed?: number;
    className?: string;
    gradientColor?: string;
}

const TecnologiasMarquee = ({ 
    icones = iconesPadrao, 
    gradientColor = "#FFF",
}: TecnologiasMarqueeProps) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768); // 768px é o breakpoint md do Tailwind
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);
    return (
        <Marquee
            speed={50}
            pauseOnHover={true}
            gradient={!isMobile}
            gradientColor={gradientColor}
        >
            {icones.map((icone, index) => {
                const IconComponent = icone.icon;
                return (
                    <div
                        key={index}
                        className="flex items-center justify-center mx-4 md:mx-8"
                    >
                        <IconComponent 
                            className="h-8 w-8 text-base-content opacity-50 hover:opacity-100 transition-opacity duration-300" 
                        />
                    </div>
                );
            })}
        </Marquee>
    );
};

export default TecnologiasMarquee; 