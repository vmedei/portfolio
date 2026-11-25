import { ExternalLink } from "lucide-react";
import { FiGithub } from "react-icons/fi";

interface LinkProjetoProps {
    href: string;
    label: string;
    tipo?: "site" | "repositorio";
}

export default function LinkProjeto({ href, label, tipo = "site" }: LinkProjetoProps) {
    const Icone = tipo === "repositorio" ? FiGithub : ExternalLink;

    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-sm ${tipo === "site" ? "btn-primary" : "btn-outline"}`}
        >
            <Icone className="w-4 h-4" aria-hidden />
            {label}
        </a>
    );
}
