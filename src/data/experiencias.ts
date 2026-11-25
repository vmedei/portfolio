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

/*
 * Experiências exibidas no portfólio, na ordem em que aparecem (da mais recente para a mais antiga).
 *
 * Para adicionar uma experiência nova:
 * 1. Coloque as imagens (ou o vídeo) em public/<nome-do-projeto>/
 * 2. Copie um item da lista `experiencias` abaixo e troque os textos, as imagens e as tecnologias
 * 3. Os ícones vêm do react-icons (https://react-icons.github.io/react-icons/); importe o que faltar no topo
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

export interface Experiencia extends ExperienciaMeta {
    id: string;
    titulo: string;
    link?: { label: string; url: string };
    midia: Midia;
    tecnologias: Tecnologia[];
    secoes: Secao[];
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
                { src: "/aioti/aioti_1.png", alt: "SafePilot WEB - Tela Principal" },
                { src: "/aioti/aioti_2.png", alt: "SafePilot WEB - Visualização de Mapas" },
                { src: "/aioti/aioti_4.png", alt: "SafePilot WEB - Cards de usuários" },
                { src: "/aioti/aioti_3.png", alt: "SafePilot WEB - Configurações" },
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
        midia: { tipo: "video", src: "/sigest/Sigest.mp4", poster: "/sigest/Sigest_1.png" },
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
                { src: "/doama/Doama_1.jpg", alt: "Doama - Tela Principal" },
                { src: "/doama/Doama_2.jpg", alt: "Doama - Dashboard" },
                { src: "/doama/Doama_5.jpg", alt: "Doama - Dashboard" },
                { src: "/doama/Doama_4.jpg", alt: "Doama - Tela Principal" },
                { src: "/doama/Doama_6.jpg", alt: "Doama - Cadastro" },
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
    },
    {
        id: "pf-aspofern",
        organizacao: "Polícia Federal / ASPOFERN",
        cargo: "Desenvolvedor Fullstack",
        inicio: "2022-08",
        fim: "2024-07",
        local: "Natal, RN (Remoto)",
        titulo: "Polícia Federal / Aspofern",
        midia: { tipo: "imagem", imagem: { src: "/aspofern/PfAspofern.png", alt: "Aspofern - Sistema de gerenciamento de eventos" } },
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
    },
];
