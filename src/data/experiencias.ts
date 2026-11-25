export interface ExperienciaMeta {
    organizacao: string;
    cargo: string;
    inicio?: string; // formato AAAA-MM
    fim?: string | null; // null = atual
    local?: string;
    destaque?: string;
}

export interface ExperienciaTexto extends ExperienciaMeta {
    titulo: string;
    resumo: string;
    destaques: string[];
    tecnologias: string[];
    link?: { label: string; url: string };
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
    tecnologias: ["NestJS", "TypeScript", "MongoDB", "RabbitMQ", "Redis", "AWS S3", "Nginx", "Kubernetes", "Helm", "Jest"],
};

export const seniorCodeAi: ExperienciaTexto = {
    titulo: "Senior Code AI",
    organizacao: "Projeto de pesquisa",
    cargo: "Desenvolvedor Full Stack e Engenheiro de IA",
    inicio: "2025-01",
    fim: "2025-12",
    local: "Remoto",
    destaque: "1º lugar no Prêmio Apps.Edu Nacional (CBIE 2025)",
    resumo: "Plataforma educacional com IA para pessoas idosas aprenderem pensamento computacional.",
    destaques: [
        "Codesenvolvi uma plataforma educacional full stack com IA que ensina pensamento computacional a pessoas idosas, em um ambiente de programação acessível e em português.",
        "Construí a plataforma completa, incluindo trilhas de aprendizagem, exercícios interativos, gestão de turmas e avaliação assistida por IA.",
        "Criei estratégias de engenharia de prompt para garantir respostas da IA consistentes e pedagogicamente adequadas a pessoas idosas sem formação técnica.",
    ],
    tecnologias: ["Next.js", "React", "Node.js", "Express", "TypeScript", "Prisma", "PostgreSQL", "Supabase", "Engenharia de prompt"],
    link: {
        label: "Ler o artigo",
        url: "https://sol.sbc.org.br/index.php/cbie_estendido/article/view/38924",
    },
};
