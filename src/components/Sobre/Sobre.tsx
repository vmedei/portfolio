import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Sobre() {
    return (
        <section className="flex flex-col md:flex-row gap-10 justify-center items-center" id="sobre">

            <Image src="/sobre/vinicius.png" alt="Profile" width={400} height={400} />

            <div className="md:w-1/2 p-4 flex flex-col gap-6">
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

            </div>

        </section>
    );
}