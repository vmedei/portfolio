/*
 * Textos fixos da interface em português e inglês.
 * O conteúdo das experiências fica em src/data/experiencias.ts, também nos dois idiomas.
 */

export type Idioma = "pt" | "en";

/** Texto nos dois idiomas, usado nos dados (experiências) */
export type Traduzivel = { pt: string; en: string };

/** Trecho de parágrafo; `destaque` deixa o trecho em negrito */
export type Trecho = { texto: string; destaque?: boolean };

export interface ItemTrajetoria {
    ano: string;
    titulo: string;
    descricao: string;
}

const pt = {
    nav: { inicio: "Início", sobre: "Sobre", experiencias: "Experiências", contato: "Contato", menu: "Abrir menu" },
    idioma: { rotulo: "Idioma", portugues: "Português", ingles: "English" },
    hero: {
        titulos: ["DESENVOLVEDOR WEB", "DESENVOLVEDOR FULLSTACK", "DESENVOLVEDOR FRONTEND", "DESENVOLVEDOR BACKEND"],
        frase: "Foco em resolver problemas com soluções inovadoras",
        curriculo: "Currículo",
        // Arquivo em public/ e nome com que ele é baixado
        curriculoArquivo: "/Vinicius Alves Medeiros.pdf",
        curriculoDownload: "Vinicius_Alves_Medeiros_Curriculo.pdf",
        contato: "Contato",
    },
    sobre: {
        rotulo: "SOBRE",
        foto: "Foto de Vinicius Medeiros",
        paragrafos: [
            [
                { texto: "Atuo há mais de " },
                { texto: "10 anos", destaque: true },
                { texto: " com tecnologia e criatividade, sendo os últimos 4 dedicados ao " },
                { texto: "desenvolvimento de sistemas web", destaque: true },
                { texto: "." },
            ],
            [
                { texto: "Nesse período, acumulei " },
                { texto: "experiência", destaque: true },
                { texto: " acadêmica e profissional com empreendedorismo, design, coleta e análise de dados, " },
                { texto: "gestão de equipe e projetos", destaque: true },
                { texto: ", além das tecnologias mais modernas do mercado." },
            ],
            [{ texto: "Quero saber como tudo isso começou?" }],
        ] as Trecho[][],
        botaoTrajetoria: "CONHEÇA MINHA TRAJETÓRIA",
        voltar: "Voltar",
    },
    trajetoria: [
        {
            ano: "1997",
            titulo: "Raízes",
            descricao: "Nascido em Natal, capital do Rio Grande do Norte, onde vivi grande parte da minha infância e adolescência. Desde cedo, fui apaixonado por filmes, música, história e tecnologia.",
        },
        {
            ano: "2012-2015",
            titulo: "Primeiros Passos",
            descricao: "Comecei a estudar Design Gráfico por conta própria, principalmente com revistas de Photoshop e CorelDRAW. Logo consegui meu primeiro freela! Fiz cursos de Design Gráfico e participei de bootcamps de Web Design, onde me desenvolvi como designer e criei meus primeiros projetos em HTML, CSS e JavaScript.",
        },
        {
            ano: "2018-2020",
            titulo: "Empreendedorismo",
            descricao: "Criei meu primeiro negócio: uma gráfica focada em comunicação visual e soluções em impressão digital. Atuei como designer, gerente e proprietário. Foi uma experiência enriquecedora, onde aprendi muito sobre criatividade, gestão, liderança e negócios.",
        },
        {
            ano: "2020-2021",
            titulo: "Pandemia e Universidade",
            descricao: "Apesar de próspera, a gráfica foi forçada a encerrar as atividades com a chegada da pandemia. Aproveitei o momento para refletir sobre minha trajetória e decidi iniciar a graduação em Tecnologia da Informação na Universidade Federal do Rio Grande do Norte (UFRN).",
        },
        {
            ano: "2022-2024",
            titulo: "Primeiras Experiências",
            descricao: "Comecei minha carreira em T.I como estagiário na Polícia Federal, atuando com suporte técnico. Lá, desenvolvi meu primeiro sistema web, criado para a ASPOFERN (Associação dos Servidores da Polícia Federal do RN), que reduziu o processamento de arquivos financeiros de 12 horas para menos de 30 segundos.",
        },
        {
            ano: "2024-2026",
            titulo: "Modernização de Sistemas",
            descricao: "Na Solução Tributos, comecei como desenvolvedor frontend e me tornei desenvolvedor fullstack pleno, liderando a migração do SIGEST para uma plataforma web de auditoria tributária usada por prefeituras de todo o Brasil. Em paralelo, desenvolvi na UFRN o Doama, sistema de gestão para bancos de leite humano do Rio Grande do Norte.",
        },
        {
            ano: "2025",
            titulo: "Reconhecimento Nacional",
            descricao: "Codesenvolvi o Senior Code AI, plataforma educacional com IA que ensina pensamento computacional a pessoas idosas. O projeto conquistou o 1º lugar no Prêmio Apps.Edu Nacional, no CBIE 2025.",
        },
        {
            ano: "2026 - Atualmente",
            titulo: "Desenvolvedor Web Fullstack",
            descricao: "Atuo no Instituto Metrópole Digital (IMD/UFRN) em uma aplicação de análise de desempenho de motoristas com mais de 10.000 usuários ativos, e na Superintendência de Tecnologia da Informação (STI/UFRN), onde lidero tecnicamente a migração da API principal do Multiprova de LoopBack 3 para NestJS, com deploy em Kubernetes.",
        },
    ] as ItemTrajetoria[],
    experiencias: {
        titulo: "Experiências",
        sobre: "SOBRE",
        videoSemSuporte: "Seu navegador não suporta vídeos.",
    },
    contato: {
        titulo: "Vamos Conversar?",
        texto: "Estou sempre aberto a novas oportunidades e colaborações.",
        direitos: "Todos os direitos reservados",
    },
    voltarAoTopo: "Voltar ao topo",
};

const en: typeof pt = {
    nav: { inicio: "Home", sobre: "About", experiencias: "Experience", contato: "Contact", menu: "Open menu" },
    idioma: { rotulo: "Language", portugues: "Português", ingles: "English" },
    hero: {
        titulos: ["WEB DEVELOPER", "FULLSTACK DEVELOPER", "FRONTEND DEVELOPER", "BACKEND DEVELOPER"],
        frase: "Focused on solving problems with innovative solutions",
        curriculo: "Résumé",
        curriculoArquivo: "/Vinicius_Medeiros_Resume.pdf",
        curriculoDownload: "Vinicius_Medeiros_Resume.pdf",
        contato: "Contact",
    },
    sobre: {
        rotulo: "ABOUT",
        foto: "Photo of Vinicius Medeiros",
        paragrafos: [
            [
                { texto: "I have been working with technology and creativity for over " },
                { texto: "10 years", destaque: true },
                { texto: ", the last 4 of them dedicated to " },
                { texto: "web systems development", destaque: true },
                { texto: "." },
            ],
            [
                { texto: "Along the way, I built academic and professional " },
                { texto: "experience", destaque: true },
                { texto: " in entrepreneurship, design, data collection and analysis, " },
                { texto: "team and project management", destaque: true },
                { texto: ", and the most modern technologies on the market." },
            ],
            [{ texto: "Want to know how it all started?" }],
        ],
        botaoTrajetoria: "SEE MY JOURNEY",
        voltar: "Back",
    },
    trajetoria: [
        {
            ano: "1997",
            titulo: "Roots",
            descricao: "Born in Natal, capital of Rio Grande do Norte, Brazil, where I spent most of my childhood and teenage years. From an early age, I loved movies, music, history and technology.",
        },
        {
            ano: "2012-2015",
            titulo: "First Steps",
            descricao: "I started studying Graphic Design on my own, mostly through Photoshop and CorelDRAW magazines, and soon landed my first freelance job. I took Graphic Design courses and Web Design bootcamps, where I grew as a designer and built my first projects in HTML, CSS and JavaScript.",
        },
        {
            ano: "2018-2020",
            titulo: "Entrepreneurship",
            descricao: "I started my first business: a print shop focused on visual communication and digital printing. I worked as its designer, manager and owner. It was an enriching experience where I learned a lot about creativity, management, leadership and business.",
        },
        {
            ano: "2020-2021",
            titulo: "Pandemic and University",
            descricao: "Although it was doing well, the print shop had to close when the pandemic hit. I used that moment to rethink my path and started a degree in Information Technology at the Federal University of Rio Grande do Norte (UFRN).",
        },
        {
            ano: "2022-2024",
            titulo: "First Experiences",
            descricao: "I started my IT career as an intern at the Brazilian Federal Police, doing technical support. There I built my first web system, for ASPOFERN (the association of Federal Police employees in Rio Grande do Norte), which cut the processing of financial files from 12 hours to under 30 seconds.",
        },
        {
            ano: "2024-2026",
            titulo: "System Modernization",
            descricao: "At Solução Tributos, I started as a frontend developer and became a mid-level fullstack developer, leading the migration of SIGEST to a web platform for tax auditing used by municipalities across Brazil. At the same time, I built Doama at UFRN, a management system for human milk banks in Rio Grande do Norte.",
        },
        {
            ano: "2025",
            titulo: "National Recognition",
            descricao: "I co-developed Senior Code AI, an AI-powered educational platform that teaches computational thinking to older adults. The project won 1st place in the national Apps.Edu award at CBIE 2025.",
        },
        {
            ano: "2026 - Present",
            titulo: "Fullstack Web Developer",
            descricao: "I work at the Metrópole Digital Institute (IMD/UFRN) on a driver performance analytics application with over 10,000 active users, and at UFRN's IT Office (STI/UFRN), where I am the technical lead for migrating Multiprova's main API from LoopBack 3 to NestJS, deployed on Kubernetes.",
        },
    ],
    experiencias: {
        titulo: "Experience",
        sobre: "ABOUT",
        videoSemSuporte: "Your browser does not support video.",
    },
    contato: {
        titulo: "Let's Talk?",
        texto: "I'm always open to new opportunities and collaborations.",
        direitos: "All rights reserved",
    },
    voltarAoTopo: "Back to top",
};

export const ui = { pt, en };
