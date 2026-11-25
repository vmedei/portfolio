import type { ComponentType } from "react";
import { FaAws } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import {
    SiExpress,
    SiHelm,
    SiJest,
    SiKubernetes,
    SiLeaflet,
    SiMeta,
    SiMongodb,
    SiMui,
    SiMysql,
    SiNestjs,
    SiNginx,
    SiNodedotjs,
    SiPostgresql,
    SiPrisma,
    SiPython,
    SiRabbitmq,
    SiReact,
    SiRedis,
    SiSupabase,
    SiSvelte,
    SiSwagger,
    SiTailwindcss,
    SiTypescript,
} from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { BrainCircuit } from "lucide-react";
import type { Idioma } from "@/i18n/ui";

/*
 * Experiências exibidas no portfólio, na ordem em que aparecem (da mais recente para a mais antiga).
 *
 * Para adicionar uma experiência nova:
 * 1. Coloque as imagens (ou o vídeo) em public/<nome-do-projeto>/
 * 2. Copie um item da lista `experiencias` abaixo e troque os textos, as imagens e as tecnologias
 * 3. Escreva a versão em inglês no campo `en` (cargo, seções e, se quiser, o resto)
 * 4. Os ícones vêm do react-icons (https://react-icons.github.io/react-icons/); importe o que faltar no topo
 */

export interface Imagem {
    src: string;
    alt: string;
}

export interface Tecnologia {
    nome: string;
    icone: ComponentType<{ className?: string }>;
}

export type Midia =
    | { tipo: "carrossel"; imagens: Imagem[] }
    | { tipo: "imagem"; imagem: Imagem }
    | { tipo: "video"; src: string; poster: string };

export interface Secao {
    titulo: string;
    texto?: string;
    itens?: string[];
}

export interface ExperienciaMeta {
    organizacao: string;
    cargo: string;
    inicio?: string; // formato AAAA-MM
    fim?: string | null; // null = atual
    local?: string;
    destaque?: string;
}

/*
 * Textos da versão em inglês. O que não estiver aqui continua igual ao português
 * (nomes próprios, como "Solução Tributos" ou o título do projeto).
 * `alts` segue a mesma ordem das imagens da mídia.
 */
export interface ExperienciaEn {
    organizacao?: string;
    cargo: string;
    local?: string;
    destaque?: string;
    titulo?: string;
    linkLabel?: string;
    alts?: string[];
    secoes: Secao[];
}

export interface Experiencia extends ExperienciaMeta {
    id: string;
    titulo: string;
    link?: { label: string; url: string };
    midia: Midia;
    tecnologias: Tecnologia[];
    secoes: Secao[];
    en: ExperienciaEn;
}

const MESES: Record<Idioma, string[]> = {
    pt: ["jan", "fev", "mar", "abr", "mai", "jun", "jul", "ago", "set", "out", "nov", "dez"],
    en: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
};

function formatarMes(data: string, idioma: Idioma) {
    const [ano, mes] = data.split("-");
    const nome = MESES[idioma][Number(mes) - 1];
    return idioma === "en" ? `${nome} ${ano}` : `${nome}/${ano}`;
}

export function formatarPeriodo({ inicio, fim }: Pick<ExperienciaMeta, "inicio" | "fim">, idioma: Idioma = "pt") {
    if (!inicio) return "";
    const atual = idioma === "en" ? "present" : "atual";
    return `${formatarMes(inicio, idioma)} – ${fim ? formatarMes(fim, idioma) : atual}`;
}

// Devolve a experiência com os textos no idioma escolhido.
export function traduzirExperiencia(experiencia: Experiencia, idioma: Idioma): Experiencia {
    if (idioma === "pt") return experiencia;
    const { en } = experiencia;
    const alt = (indice: number, original: string) => en.alts?.[indice] ?? original;
    const { midia } = experiencia;

    return {
        ...experiencia,
        organizacao: en.organizacao ?? experiencia.organizacao,
        cargo: en.cargo,
        local: en.local ?? experiencia.local,
        destaque: en.destaque ?? experiencia.destaque,
        titulo: en.titulo ?? experiencia.titulo,
        link: experiencia.link && { ...experiencia.link, label: en.linkLabel ?? experiencia.link.label },
        midia:
            midia.tipo === "carrossel"
                ? { ...midia, imagens: midia.imagens.map((imagem, i) => ({ ...imagem, alt: alt(i, imagem.alt) })) }
                : midia.tipo === "imagem"
                  ? { ...midia, imagem: { ...midia.imagem, alt: alt(0, midia.imagem.alt) } }
                  : midia,
        secoes: en.secoes,
    };
}

export const experiencias: Experiencia[] = [
    {
        id: "meu-dindin",
        organizacao: "Projeto próprio",
        cargo: "Fundador e Desenvolvedor Fullstack",
        inicio: "2026-11",
        fim: null,
        local: "Natal, RN (Remoto)",
        titulo: "meu dindin",
        link: { label: "Visitar Site", url: "https://meu-dindin.online" },
        midia: {
            tipo: "carrossel",
            imagens: [
                { src: "/meu-dindin/inicio-claro.webp", alt: "meu dindin - Tela inicial com saldo, receitas e despesas do mês" },
                { src: "/meu-dindin/inicio-escuro.webp", alt: "meu dindin - Tela inicial no tema escuro" },
                { src: "/meu-dindin/whatsapp.webp", alt: "meu dindin - Assistente lançando gastos pelo WhatsApp" },
            ],
        },
        tecnologias: [
            { nome: "React", icone: SiReact },
            { nome: "TypeScript", icone: SiTypescript },
            { nome: "Tailwind", icone: SiTailwindcss },
            { nome: "PostgreSQL", icone: SiPostgresql },
            { nome: "Azure OpenAI", icone: VscAzure },
            { nome: "Meta (WhatsApp Cloud API)", icone: SiMeta },
        ],
        secoes: [
            { titulo: "Contexto", texto: "O meu dindin é um app de finanças pessoais em português, feito para quem já tentou controlar o dinheiro em planilha ou caderno e desistiu porque anotar dá trabalho. A pessoa lança e consulta gastos conversando com um assistente de IA, no app ou pelo WhatsApp, inclusive por mensagem de voz, e acompanha contas, cartões com fatura e parcelas, relatórios e o planejamento do mês por categoria." },
            { titulo: "Desafio e Solução", texto: "O desafio era construir sozinho um produto com dados financeiros pessoais, seguro e de acordo com a LGPD e o Marco Civil, com cobrança recorrente e um assistente que altera dados sem colocar a conta de ninguém em risco. A solução foi concentrar as regras no banco: PostgreSQL no Supabase com Row Level Security em todas as tabelas, verificação em duas etapas exigida também no servidor e funções com permissões fechadas por padrão. O assistente chama ferramentas que rodam com a permissão do próprio usuário, tem desfazer e só apaga dados depois de uma confirmação." },
            {
                titulo: "Meu papel",
                itens: [
                    "Concebi o produto e fiz o desenvolvimento de ponta a ponta: app em React com TypeScript, banco PostgreSQL com 42 migrações versionadas e 7 Edge Functions em Deno (assistente, WhatsApp, cobrança, conta, suporte e painel administrativo).",
                    "Construí o assistente de IA com 21 ferramentas (function calling), usando Azure OpenAI como provedor principal e Gemini de reserva, com troca automática entre modelos, transcrição de áudio e frases de teste para avaliar as respostas.",
                    "Integrei a WhatsApp Cloud API, a cobrança recorrente pelo Asaas com webhooks idempotentes, e-mails transacionais e monitoramento de erros sem dados pessoais.",
                    "Conduzi o desenvolvimento com agentes de IA (Claude Code), definindo as regras do projeto em AGENTS.md e validando cada entrega numa prévia separada antes de publicar em produção.",
                ],
            },
            { titulo: "Resultado", texto: "Sistema em produção, com centenas de usuários ativos, cerca de 440 testes automatizados (360 no backend e 80 no app), CI em cada mudança e publicação em duas etapas, da prévia à produção. Inclui documentação de privacidade (política, registro de operações de tratamento e plano de resposta a incidentes) e um design system próprio, com temas claro e escuro." },
        ],
        en: {
            organizacao: "Personal project",
            cargo: "Founder and Fullstack Developer",
            local: "Natal, Brazil (Remote)",
            linkLabel: "Visit Website",
            alts: [
                "meu dindin - Home screen with the month's balance, income and expenses",
                "meu dindin - Home screen in the dark theme",
                "meu dindin - Assistant logging expenses over WhatsApp",
            ],
            secoes: [
                { titulo: "Context", texto: "meu dindin is a personal finance app in Portuguese, built for people who have tried tracking their money in a spreadsheet or notebook and gave up because logging everything takes effort. People log and look up expenses by chatting with an AI assistant, in the app or on WhatsApp, voice messages included, and keep track of accounts, credit cards with statements and installments, reports and a monthly budget by category." },
                { titulo: "Challenge and Solution", texto: "The challenge was to build, on my own, a product that handles personal financial data: secure, compliant with Brazil's LGPD (data protection law) and Marco Civil da Internet, with recurring billing and an assistant that changes data without putting anyone's account at risk. The solution was to keep the rules in the database: PostgreSQL on Supabase with Row Level Security on every table, two-factor authentication also enforced on the server, and functions with permissions closed by default. The assistant calls tools that run with the user's own permissions, supports undo and only deletes data after a confirmation." },
                {
                    titulo: "My Role",
                    itens: [
                        "Conceived the product and built it end to end: a React app with TypeScript, a PostgreSQL database with 42 versioned migrations and 7 Edge Functions in Deno (assistant, WhatsApp, billing, account, support and admin panel).",
                        "Built the AI assistant with 21 tools (function calling), using Azure OpenAI as the main provider and Gemini as a fallback, with automatic model switching, audio transcription and test phrases to evaluate the answers.",
                        "Integrated the WhatsApp Cloud API, recurring billing through Asaas with idempotent webhooks, transactional emails and error monitoring without personal data.",
                        "Led development with AI agents (Claude Code), setting the project rules in AGENTS.md and checking every delivery on a separate preview before publishing to production.",
                    ],
                },
                { titulo: "Results", texto: "A production system with hundreds of active users, about 440 automated tests (360 in the backend and 80 in the app), CI on every change and a two-step release, from preview to production. It includes privacy documentation (policy, record of processing activities and incident response plan) and its own design system, with light and dark themes." },
            ],
        },
    },
    {
        id: "multiprova",
        organizacao: "Superintendência de Tecnologia da Informação (STI/UFRN)",
        cargo: "Desenvolvedor Web Fullstack",
        inicio: "2026-05",
        fim: null,
        local: "Natal, RN",
        titulo: "Multiprova",
        midia: {
            tipo: "carrossel",
            imagens: [
                { src: "/multiprova/multiprova_1.webp", alt: "Multiprova - Página inicial" },
                { src: "/multiprova/multiprova_2.webp", alt: "Multiprova - Criação de questão de múltipla escolha" },
            ],
        },
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
        secoes: [
            { titulo: "Contexto", texto: "O Multiprova é a plataforma de avaliações da UFRN, criada em 2011 na Escola de Ciências e Tecnologia para aplicar provas individualizadas e de correção rápida. Já soma mais de 1 milhão de provas respondidas, atende também o IFRN e está sendo integrado à nova Turma Virtual do SIGAA, em parceria com a STI/UFRN, para chegar a mais de 30 Instituições Federais de Ensino Superior." },
            { titulo: "Desafio e Solução", texto: "O desafio era preparar a plataforma para essa expansão: a API principal ainda rodava em LoopBack 3, framework sem suporte (EOL), e a migração não podia exigir janela de parada nem mudanças nos frontends React. A solução foi migrar a API para NestJS com TypeScript usando o padrão strangler fig, substituindo as rotas em fatias, com uma camada de compatibilidade do contrato HTTP e testes de contrato que comparam as respostas das duas APIs." },
            {
                titulo: "Meu papel",
                itens: [
                    "Liderei tecnicamente a migração da API principal do Multiprova de LoopBack 3 (EOL) para NestJS com TypeScript, usando strangler fig para migrar rotas em fatias sem janela de parada.",
                    "Desenhei a arquitetura da nova API (módulos desacoplados, guards, policies e repositórios sobre MongoDB), com integrações a RabbitMQ, Redis e AWS S3.",
                    "Garanti a transição sem mudanças nos frontends React com uma camada de compatibilidade do contrato HTTP e testes de contrato que comparam as duas APIs, com deploy em Kubernetes via Helm.",
                ],
            },
        ],
        en: {
            organizacao: "IT Superintendence (STI/UFRN)",
            cargo: "Fullstack Web Developer",
            local: "Natal, Brazil",
            alts: ["Multiprova - Home page", "Multiprova - Creating a multiple-choice question"],
            secoes: [
                { titulo: "Context", texto: "Multiprova is UFRN's assessment platform, created in 2011 at the School of Science and Technology to deliver individualized exams that are graded quickly. It has passed 1 million answered exams, also serves IFRN and is being integrated into SIGAA's new Virtual Class, in partnership with STI/UFRN, to reach more than 30 Brazilian federal higher education institutions." },
                { titulo: "Challenge and Solution", texto: "The challenge was to get the platform ready for this expansion: the main API still ran on LoopBack 3, an end-of-life framework, and the migration could not require downtime or changes to the React frontends. The solution was to migrate the API to NestJS with TypeScript using the strangler fig pattern, replacing routes in slices, with a compatibility layer for the HTTP contract and contract tests that compare the responses of both APIs." },
                {
                    titulo: "My Role",
                    itens: [
                        "Technical lead of the migration of Multiprova's main API from LoopBack 3 (EOL) to NestJS with TypeScript, using strangler fig to migrate routes in slices with no downtime.",
                        "Designed the architecture of the new API (decoupled modules, guards, policies and repositories on MongoDB), with RabbitMQ, Redis and AWS S3 integrations.",
                        "Ensured a transition with no changes to the React frontends through an HTTP contract compatibility layer and contract tests comparing both APIs, deployed on Kubernetes with Helm.",
                    ],
                },
            ],
        },
    },
    {
        id: "safepilot",
        organizacao: "Instituto Metrópole Digital (IMD/UFRN)",
        cargo: "Desenvolvedor Web Fullstack",
        inicio: "2026-02",
        fim: null,
        local: "Natal, RN (Remoto)",
        titulo: "SafePilot WEB",
        midia: {
            tipo: "carrossel",
            imagens: [
                { src: "/aioti/aioti_1.webp", alt: "SafePilot WEB - Tela Principal" },
                { src: "/aioti/aioti_2.webp", alt: "SafePilot WEB - Visualização de Mapas" },
                { src: "/aioti/aioti_4.webp", alt: "SafePilot WEB - Cards de usuários" },
                { src: "/aioti/aioti_3.webp", alt: "SafePilot WEB - Configurações" },
            ],
        },
        tecnologias: [
            { nome: "Leaflet", icone: SiLeaflet },
            { nome: "Material UI", icone: SiMui },
            { nome: "NestJS", icone: SiNestjs },
            { nome: "MongoDB", icone: SiMongodb },
            { nome: "RabbitMQ", icone: SiRabbitmq },
            { nome: "AWS S3", icone: FaAws },
            { nome: "Swagger", icone: SiSwagger },
            { nome: "Jest", icone: SiJest },
        ],
        secoes: [
            { titulo: "Contexto", texto: "Aplicação web voltada ao acompanhamento e análise de desempenho de motoristas, com mais de 10.000 usuários ativos. Desenvolvido no âmbito da UFRN, o projeto busca fornecer visualização e geolocalização precisas." },
            { titulo: "Desafio e Solução", texto: "O desafio envolveu a substituição de componentes legados e a evolução das APIs para suportar o alto volume de acessos. A solução foi o redesign completo do frontend com Material UI, criando uma arquitetura moderna e modular. No backend, as APIs foram aprimoradas com NestJS, MongoDB/Mongoose e mensageria via RabbitMQ." },
            { titulo: "Meu papel", texto: "Liderei o redesign completo do frontend, projetando e entregando uma biblioteca abrangente de componentes reutilizáveis, priorizando consistência visual, responsividade e acessibilidade. Trabalhei com recursos de visualização e geolocalização (Leaflet). Também atuei no desenvolvimento das APIs, armazenamento em AWS S3, exposição de endpoints com Swagger e garantia de cobertura via Jest." },
            { titulo: "Resultado", texto: "Entrega de uma base de código escalável, com padrões de UI e diretrizes de legibilidade estabelecidos para futuras iterações. A aplicação suporta perfeitamente os mais de 10.000 usuários ativos, oferecendo uma experiência fluida para análise de desempenho de motoristas." },
        ],
        en: {
            organizacao: "Metropole Digital Institute (IMD/UFRN)",
            cargo: "Fullstack Web Developer",
            local: "Natal, Brazil (Remote)",
            alts: ["SafePilot WEB - Main screen", "SafePilot WEB - Map view", "SafePilot WEB - User cards", "SafePilot WEB - Settings"],
            secoes: [
                { titulo: "Context", texto: "A web application for monitoring and analyzing driver performance, with more than 10,000 active users. Developed at UFRN, the project aims to provide accurate visualization and geolocation." },
                { titulo: "Challenge and Solution", texto: "The challenge involved replacing legacy components and evolving the APIs to handle a high volume of traffic. The solution was a complete frontend redesign with Material UI, creating a modern, modular architecture. On the backend, the APIs were improved with NestJS, MongoDB/Mongoose and messaging through RabbitMQ." },
                { titulo: "My Role", texto: "Led the complete frontend redesign, designing and delivering a comprehensive library of reusable components, with a focus on visual consistency, responsiveness and accessibility. Worked on visualization and geolocation features (Leaflet). Also worked on the APIs, AWS S3 storage, endpoint documentation with Swagger and test coverage with Jest." },
                { titulo: "Results", texto: "Delivered a scalable codebase, with UI patterns and readability guidelines in place for future iterations. The application smoothly supports its more than 10,000 active users, offering a fluid experience for driver performance analysis." },
            ],
        },
    },
    {
        id: "sigest",
        organizacao: "Solução Tributos",
        cargo: "Desenvolvedor Fullstack Pleno",
        inicio: "2024-07",
        fim: "2026-06",
        local: "Natal, RN (Remoto)",
        titulo: "SIGEST",
        link: { label: "Visitar Site", url: "https://solucaotributos.com.br" },
        midia: { tipo: "video", src: "/sigest/Sigest.mp4", poster: "/sigest/Sigest_1.webp" },
        tecnologias: [
            { nome: "React", icone: SiReact },
            { nome: "Next.js", icone: RiNextjsFill },
            { nome: "Tailwind", icone: SiTailwindcss },
            { nome: "Node.js", icone: SiNodedotjs },
            { nome: "MySQL", icone: SiMysql },
            { nome: "Python", icone: SiPython },
        ],
        secoes: [
            { titulo: "Contexto", texto: "O SIGEST é um sistema de contabilidade tributária focado na análise das transferências constitucionais realizadas pela União para estados e municípios. Sua principal função é realizar cálculos de auditoria a fim de identificar possíveis falhas nos repasses." },
            { titulo: "Desafio e Solução", texto: "O desafio consistia na migração completa de um sistema legado desenvolvido em Delphi 7 para uma plataforma web moderna. A solução entregou tempo médio de resposta até 8x mais rápido, além de responsividade, fluidez e manutenção da totalidade das funcionalidades originais." },
            { titulo: "Meu papel", texto: "Com atuação em liderança técnica na migração, desenvolvi e automatizei o processamento de dados, reduzindo o tempo médio de importação de 16 horas para poucos minutos. Implementei microsserviços e pipelines de CI/CD com GitHub Actions (build, testes e deploy em AWS), reduzindo o tempo de release de 2 horas para 10 minutos. Desenvolvi funcionalidades críticas para auditoria contábil, análise de repasses e tratamento de grandes volumes de dados fiscais, com integração a fontes públicas e privadas e regras contábeis por município." },
            { titulo: "Resultado", texto: "Sistema em produção com resultados mensuráveis: tempo de resposta até 8x mais rápido que o legado, importação de dados de 16 horas para poucos minutos e pipeline de release de 2 horas para 10 minutos. Os municípios passaram a contar com auditoria de repasses federais mais rápida, detecção automática de inconsistências e controle total sobre as transferências constitucionais." },
        ],
        en: {
            cargo: "Mid-level Fullstack Developer",
            local: "Natal, Brazil (Remote)",
            linkLabel: "Visit Website",
            secoes: [
                { titulo: "Context", texto: "SIGEST is a tax accounting system focused on analyzing the constitutional transfers made by Brazil's federal government to states and municipalities. Its main purpose is to run audit calculations to find possible errors in those transfers." },
                { titulo: "Challenge and Solution", texto: "The challenge was a complete migration of a legacy system built in Delphi 7 to a modern web platform. The solution delivered average response times up to 8x faster, along with responsiveness, fluidity and all of the original features." },
                { titulo: "My Role", texto: "As technical lead on the migration, I built and automated the data processing, cutting the average import time from 16 hours to a few minutes. I implemented microservices and CI/CD pipelines with GitHub Actions (build, tests and deploy to AWS), cutting release time from 2 hours to 10 minutes. I built critical features for accounting audits, transfer analysis and handling large volumes of tax data, integrating public and private sources and accounting rules for each municipality." },
                { titulo: "Results", texto: "A production system with measurable results: response times up to 8x faster than the legacy system, data imports down from 16 hours to a few minutes and the release pipeline down from 2 hours to 10 minutes. Municipalities now have faster audits of federal transfers, automatic detection of inconsistencies and full control over constitutional transfers." },
            ],
        },
    },
    {
        id: "senior-code-ai",
        organizacao: "Projeto de pesquisa",
        cargo: "Desenvolvedor Full Stack e Engenheiro de IA",
        inicio: "2025-01",
        fim: "2025-12",
        local: "Remoto",
        destaque: "1º lugar no Apps.edu, categoria Protótipos (CBIE 2025)",
        titulo: "Senior Code AI",
        midia: {
            tipo: "carrossel",
            imagens: [
                { src: "/seniorcodeai/certificado_cbie_2025.webp", alt: "Certificado de 1º lugar no Apps.edu (CBIE 2025)" },
                { src: "/seniorcodeai/premiacao_cbie_2025.webp", alt: "Cerimônia de premiação do CBIE 2025, em Curitiba" },
            ],
        },
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
        secoes: [
            { titulo: "Contexto", texto: "Plataforma educacional com IA para pessoas idosas aprenderem pensamento computacional." },
            {
                titulo: "Meu papel",
                itens: [
                    "Codesenvolvi uma plataforma educacional full stack com IA que ensina pensamento computacional a pessoas idosas, em um ambiente de programação acessível e em português.",
                    "Construí a plataforma completa, incluindo trilhas de aprendizagem, exercícios interativos, gestão de turmas e avaliação assistida por IA.",
                    "Criei estratégias de engenharia de prompt para garantir respostas da IA consistentes e pedagogicamente adequadas a pessoas idosas sem formação técnica.",
                ],
            },
            { titulo: "Reconhecimento", texto: "Classificado em 1º lugar na categoria Protótipos do Apps.edu, no XIV Congresso Brasileiro de Informática na Educação (CBIE 2025), em Curitiba-PR." },
        ],
        en: {
            organizacao: "Research project",
            cargo: "Full Stack Developer and AI Engineer",
            local: "Remote",
            destaque: "1st place at Apps.edu, Prototypes category (CBIE 2025)",
            alts: ["1st place certificate at Apps.edu (CBIE 2025)", "CBIE 2025 award ceremony in Curitiba"],
            secoes: [
                { titulo: "Context", texto: "An AI-powered educational platform that helps older adults learn computational thinking." },
                {
                    titulo: "My Role",
                    itens: [
                        "Co-developed a full stack AI-powered educational platform that teaches computational thinking to older adults, in an accessible programming environment in Portuguese.",
                        "Built the complete platform, including learning paths, interactive exercises, class management and AI-assisted assessment.",
                        "Designed prompt engineering strategies to keep the AI's answers consistent and pedagogically suited to older adults with no technical background.",
                    ],
                },
                { titulo: "Recognition", texto: "Ranked 1st in the Prototypes category of Apps.edu at the 14th Brazilian Congress on Computers in Education (CBIE 2025), in Curitiba, Brazil." },
            ],
        },
    },
    {
        id: "doama",
        organizacao: "Universidade Federal do Rio Grande do Norte",
        cargo: "Desenvolvedor Web Fullstack",
        inicio: "2024-02",
        fim: "2025-01",
        local: "Natal, RN",
        titulo: "Doama",
        midia: {
            tipo: "carrossel",
            imagens: [
                { src: "/doama/Doama_1.webp", alt: "Doama - Tela Principal" },
                { src: "/doama/Doama_2.webp", alt: "Doama - Dashboard" },
                { src: "/doama/Doama_5.webp", alt: "Doama - Dashboard" },
                { src: "/doama/Doama_4.webp", alt: "Doama - Tela Principal" },
                { src: "/doama/Doama_6.webp", alt: "Doama - Cadastro" },
            ],
        },
        tecnologias: [
            { nome: "Svelte", icone: SiSvelte },
            { nome: "Tailwind", icone: SiTailwindcss },
            { nome: "Node.js", icone: SiNodedotjs },
            { nome: "PostgreSQL", icone: SiPostgresql },
        ],
        secoes: [
            { titulo: "Contexto", texto: "O Doama foi desenvolvido com o objetivo de modernizar e simplificar a gestão de doadoras e doações de leite materno, com foco no uso por secretarias municipais de saúde. Criado na UFRN, o sistema oferece suporte a bancos de leite e profissionais da área, contribuindo para o controle eficiente desse recurso essencial à sobrevivência de recém-nascidos." },
            { titulo: "Desafio e Solução", texto: "O principal desafio era conceber uma plataforma intuitiva, segura e eficaz, capaz de integrar doadoras, profissionais de saúde e bancos de leite, garantindo a rastreabilidade das doações e o controle preciso do estoque. A solução foi um sistema web robusto, que permite o cadastro, o monitoramento e a comunicação entre todos os envolvidos no processo." },
            { titulo: "Meu papel", texto: "Como desenvolvedor fullstack bolsista da UFRN, fui responsável pelo desenvolvimento completo do sistema para gerenciamento de doadoras, doações e estoque de leite materno, com foco em usabilidade, acessibilidade e eficiência operacional. O sistema apoia bancos de leite em todo o estado, otimizando o trabalho de servidores e melhorando a logística de coleta e entrega." },
            { titulo: "Resultado", texto: "Projeto de alto impacto social: o sistema foi desenvolvido com êxito e está em fase de avaliação para adoção por diversos municípios. Os resultados esperados incluem otimização do trabalho de servidores, melhoria da logística de coleta e entrega, redução de desperdícios e benefício direto a mães e recém-nascidos." },
        ],
        en: {
            organizacao: "Federal University of Rio Grande do Norte",
            cargo: "Fullstack Web Developer",
            local: "Natal, Brazil",
            alts: ["Doama - Main screen", "Doama - Dashboard", "Doama - Dashboard", "Doama - Main screen", "Doama - Sign-up"],
            secoes: [
                { titulo: "Context", texto: "Doama was built to modernize and simplify the management of breast milk donors and donations, designed for municipal health departments. Created at UFRN, the system supports milk banks and health professionals, helping manage a resource that is essential to the survival of newborns." },
                { titulo: "Challenge and Solution", texto: "The main challenge was to design an intuitive, secure and effective platform that connects donors, health professionals and milk banks, ensuring donations can be traced and stock is tracked accurately. The solution was a robust web system for registration, monitoring and communication among everyone involved in the process." },
                { titulo: "My Role", texto: "As a fullstack developer on a UFRN scholarship, I was responsible for building the entire system for managing donors, donations and breast milk stock, with a focus on usability, accessibility and operational efficiency. The system supports milk banks across the state, streamlining the work of public servants and improving collection and delivery logistics." },
                { titulo: "Results", texto: "A project with high social impact: the system was successfully built and is being evaluated for adoption by several municipalities. Expected results include streamlined work for public servants, better collection and delivery logistics, less waste and a direct benefit to mothers and newborns." },
            ],
        },
    },
    {
        id: "pf-aspofern",
        organizacao: "Polícia Federal / ASPOFERN",
        cargo: "Desenvolvedor Fullstack",
        inicio: "2022-08",
        fim: "2024-07",
        local: "Natal, RN (Remoto)",
        titulo: "Polícia Federal / Aspofern",
        midia: { tipo: "imagem", imagem: { src: "/aspofern/PfAspofern.webp", alt: "Aspofern - Sistema de gerenciamento de eventos" } },
        tecnologias: [
            { nome: "React", icone: SiReact },
            { nome: "Tailwind", icone: SiTailwindcss },
            { nome: "Python", icone: SiPython },
        ],
        secoes: [
            { titulo: "Contexto", texto: "Sistema desenvolvido para a Associação dos Servidores da Polícia Federal do Rio Grande do Norte, com foco em automatizar o processamento de dados financeiros por meio de scripts em Python." },
            { titulo: "Desafio e Solução", texto: "A gestão financeira era realizada manualmente, o que demandava tempo e estava suscetível a erros. A solução foi a criação de um sistema que automatiza a coleta e o tratamento de dados de múltiplas fontes, aumentando a precisão e reduzindo o esforço operacional." },
            { titulo: "Meu papel", texto: "Como desenvolvedor fullstack freelancer, fui responsável pela criação completa do sistema web para processamento de dados financeiros. Desenvolvi funcionalidades para tratamento de arquivos Excel brutos com exportação de relatórios em CSV, focando em segurança e desempenho utilizando Python, Django, Tailwind e SQLite." },
            { titulo: "Resultado", texto: "O sistema está em operação e reduziu drasticamente o tempo de execução: processos que antes eram manuais e demoravam dias passaram a ser realizados em poucos minutos. A automatização trouxe eficiência e modernização à gestão da associação." },
        ],
        en: {
            organizacao: "Federal Police / ASPOFERN",
            cargo: "Fullstack Developer",
            local: "Natal, Brazil (Remote)",
            titulo: "Federal Police / Aspofern",
            alts: ["Aspofern - Event management system"],
            secoes: [
                { titulo: "Context", texto: "A system built for the Association of Federal Police Employees of Rio Grande do Norte, focused on automating financial data processing with Python scripts." },
                { titulo: "Challenge and Solution", texto: "Financial management was done by hand, which took time and was prone to errors. The solution was a system that automates collecting and processing data from multiple sources, improving accuracy and reducing operational effort." },
                { titulo: "My Role", texto: "As a freelance fullstack developer, I built the entire web system for processing financial data. I developed features for handling raw Excel files and exporting reports to CSV, with a focus on security and performance, using Python, Django, Tailwind and SQLite." },
                { titulo: "Results", texto: "The system is in operation and drastically reduced execution time: processes that used to be manual and took days now take a few minutes. The automation brought efficiency and modernization to the association's management." },
            ],
        },
    },
];
