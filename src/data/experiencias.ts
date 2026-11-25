import type { ComponentType } from "react";
import { FaAws } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
    SiExpress,
    SiHelm,
    SiJest,
    SiKubernetes,
    SiMongodb,
    SiNestjs,
    SiNginx,
    SiNodedotjs,
    SiPostgresql,
    SiPrisma,
    SiRabbitmq,
    SiReact,
    SiRedis,
    SiSupabase,
    SiTypescript,
} from "react-icons/si";
import { BrainCircuit } from "lucide-react";

export interface ExperienciaMeta {
    organizacao: string;
    cargo: string;
    inicio?: string; // formato AAAA-MM
    fim?: string | null; // null = atual
    local?: string;
    destaque?: string;
}

export interface Tecnologia {
    nome: string;
    icone: ComponentType<{ className?: string }>;
}

export interface ExperienciaTexto extends ExperienciaMeta {
    titulo: string;
    resumo: string;
    destaques: string[];
    reconhecimento?: string;
    tecnologias: Tecnologia[];
    imagens: { src: string; alt: string }[];
}

const MESES = ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"];

function formatarMes(data: string) {
    const [ano, mes] = data.split("-");
    return `${MESES[Number(mes) - 1]}/${ano}`;
}

export function formatarPeriodo({ inicio, fim }: Pick<ExperienciaMeta, "inicio" | "fim">) {
    if (!inicio) return "";
    return `${formatarMes(inicio)} – ${fim ? formatarMes(fim) : "atual"}`;
}

export const metaExperiencias = {
    safePilot: {
        organizacao: "Instituto Metrópole Digital (IMD/UFRN)",
        cargo: "Desenvolvedor Web Fullstack",
        inicio: "2026-02",
        fim: null,
        local: "Natal, RN (Remoto)",
    },
    sigest: {
        organizacao: "Solução Tributos",
        cargo: "Desenvolvedor Fullstack Pleno",
        inicio: "2024-07",
        fim: "2026-06",
        local: "Natal, RN (Remoto)",
    },
    doama: {
        organizacao: "Universidade Federal do Rio Grande do Norte",
        cargo: "Desenvolvedor Web Fullstack",
        inicio: "2024-02",
        fim: "2025-01",
        local: "Natal, RN",
    },
    pfAspofern: {
        organizacao: "Polícia Federal / ASPOFERN",
        cargo: "Desenvolvedor Fullstack",
        inicio: "2022-08",
        fim: "2024-07",
        local: "Natal, RN (Remoto)",
    },
    foodCampus: {
        organizacao: "Projeto acadêmico (UFRN)",
        cargo: "Desenvolvedor Frontend",
    },
} satisfies Record<string, ExperienciaMeta>;

export const multiprova: ExperienciaTexto = {
    titulo: "Multiprova",
    organizacao: "Superintendência de Tecnologia da Informação (STI/UFRN)",
    cargo: "Desenvolvedor Web Fullstack",
    inicio: "2026-05",
    fim: null,
    local: "Natal, RN",
    resumo: "Migração da API principal do Multiprova de LoopBack 3 (fim de suporte) para NestJS.",
    destaques: [
        "Liderei tecnicamente a migração da API principal do Multiprova de LoopBack 3 (EOL) para NestJS com TypeScript, usando strangler fig para migrar rotas em fatias sem janela de parada.",
        "Desenhei a arquitetura da nova API (módulos desacoplados, guards, policies e repositórios sobre MongoDB), com integrações a RabbitMQ, Redis e AWS S3.",
        "Garanti a transição sem mudanças nos frontends React com uma camada de compatibilidade do contrato HTTP e testes de contrato que comparam as duas APIs, com deploy em Kubernetes via Helm.",
    ],
    tecnologias: [
        { nome: "NestJS", icone: SiNestjs },
        { nome: "TypeScript", icone: SiTypescript },
        { nome: "MongoDB", icone: SiMongodb },
        { nome: "RabbitMQ", icone: SiRabbitmq },
        { nome: "Redis", icone: SiRedis },
        { nome: "AWS S3", icone: FaAws },
        { nome: "Nginx", icone: SiNginx },
        { nome: "Kubernetes", icone: SiKubernetes },
        { nome: "Helm", icone: SiHelm },
        { nome: "Jest", icone: SiJest },
    ],
    imagens: [
        { src: "/multiprova/multiprova_1.webp", alt: "Multiprova - Página inicial" },
        { src: "/multiprova/multiprova_2.webp", alt: "Multiprova - Criação de questão de múltipla escolha" },
    ],
};

export const seniorCodeAi: ExperienciaTexto = {
    titulo: "Senior Code AI",
    organizacao: "Projeto de pesquisa",
    cargo: "Desenvolvedor Full Stack e Engenheiro de IA",
    inicio: "2025-01",
    fim: "2025-12",
    local: "Remoto",
    destaque: "1º lugar no Apps.edu, categoria Protótipos (CBIE 2025)",
    resumo: "Plataforma educacional com IA para pessoas idosas aprenderem pensamento computacional.",
    destaques: [
        "Codesenvolvi uma plataforma educacional full stack com IA que ensina pensamento computacional a pessoas idosas, em um ambiente de programação acessível e em português.",
        "Construí a plataforma completa, incluindo trilhas de aprendizagem, exercícios interativos, gestão de turmas e avaliação assistida por IA.",
        "Criei estratégias de engenharia de prompt para garantir respostas da IA consistentes e pedagogicamente adequadas a pessoas idosas sem formação técnica.",
    ],
    reconhecimento:
        "Classificado em 1º lugar na categoria Protótipos do Apps.edu, no XIV Congresso Brasileiro de Informática na Educação (CBIE 2025), em Curitiba-PR.",
    tecnologias: [
        { nome: "Next.js", icone: RiNextjsFill },
        { nome: "React", icone: SiReact },
        { nome: "Node.js", icone: SiNodedotjs },
        { nome: "Express", icone: SiExpress },
        { nome: "TypeScript", icone: SiTypescript },
        { nome: "Prisma", icone: SiPrisma },
        { nome: "PostgreSQL", icone: SiPostgresql },
        { nome: "Supabase", icone: SiSupabase },
        { nome: "Engenharia de prompt", icone: BrainCircuit },
    ],
    imagens: [
        { src: "/seniorcodeai/certificado_cbie_2025.webp", alt: "Certificado de 1º lugar no Apps.edu (CBIE 2025)" },
        { src: "/seniorcodeai/premiacao_cbie_2025.webp", alt: "Cerimônia de premiação do CBIE 2025, em Curitiba" },
    ],
};
