import { Code, Palette, Smartphone } from "lucide-react";

interface ProjectsProps {
    isProjectsVisible: boolean;
}

const Projects = ({ isProjectsVisible }: ProjectsProps) => {
    return (
        <section id="projects" className="">
            <div className={`container mx-auto p-10 rounded-xl bg-base-300 transition-all duration-700 ease-in-out ${
                isProjectsVisible ? 'max-w-4/5' : 'max-w-3/5'
            }`}>
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold mb-4">Projetos</h2>
                    <p className="text-base-content/70 max-w-2xl mx-auto">
                        Alguns dos projetos que desenvolvi.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="card bg-base-200 shadow-xl">
                        <div className="card-body text-center">
                            <Code className="w-12 h-12 mx-auto mb-4 text-primary" />
                            <h3 className="card-title justify-center">Desenvolvimento</h3>
                            <p>Criação de aplicações web modernas e responsivas</p>
                        </div>
                    </div>

                    <div className="card bg-base-200 shadow-xl">
                        <div className="card-body text-center">
                            <Palette className="w-12 h-12 mx-auto mb-4 text-primary" />
                            <h3 className="card-title justify-center">Design</h3>
                            <p>Interfaces intuitivas e experiências de usuário excepcionais</p>
                        </div>
                    </div>

                    <div className="card bg-base-200 shadow-xl">
                        <div className="card-body text-center">
                            <Smartphone className="w-12 h-12 mx-auto mb-4 text-primary" />
                            <h3 className="card-title justify-center">Mobile</h3>
                            <p>Aplicações móveis nativas e híbridas</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Projects;