# AGENTS.md

Guia para assistentes de IA (Claude, Codex, Copilot e afins) que trabalham neste repositório.
É o portfólio pessoal do Vinicius Medeiros, publicado em https://www.vmedei.dev.

## Como falar com o Vinicius

- Escreva em **português** (mensagens, commits, descrição de PR, comentários no código e nomes de variáveis/componentes novos).
- Ele prefere receber **PRs prontos para merge**: build passando, lint limpo e, em toda mudança visual, **capturas de tela de desktop e de celular** (e dos dois idiomas quando o texto mudar).
- Commits curtos no estilo `feat: ...` / `fix: ...`, em português, descrevendo o que muda para quem visita o site.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**, exportado como site estático (`output: 'export'` em `next.config.ts`).
- **Tailwind CSS 4** + **daisyUI 5**, com o tema próprio `vmedei` definido em `src/app/globals.css`.
- Animações com **framer-motion** (e GSAP no logo), rolagem suave com **Lenis**, carrossel com **react-slick**, marquee com **react-fast-marquee**.
- Ícones: **react-icons** para tecnologias e **lucide-react** para ícones de interface.
- Alias de import: `@/*` aponta para `src/*`.

## Comandos

```bash
npm install          # o CI usa: npm ci --legacy-peer-deps
npm run dev          # http://localhost:6660
npm run build        # gera a pasta out/ (build estática)
npm run lint
```

Antes de abrir um PR, rode `npm run build` e `npm run lint`. O deploy é automático no GitHub Pages a cada push na `main` (`.github/workflows/deploy.yml`, Node 18), então **a `main` precisa sempre buildar**.

## Estrutura

```
src/
├── app/            layout.tsx (metadados, SEO, JSON-LD), page.tsx (monta as seções), globals.css (tema), robots.ts, sitemap.ts
├── components/     Header, Hero, SeletorIdioma, TecnologiasMarquee, Sobre/, Experiencias/, Contato/
├── contexts/       LanguageContext (idioma), MobileContext (isMobile < 768px)
├── data/           experiencias.ts (todas as experiências), pathD.ts (traçado do logo)
├── hooks/          useReduzirMovimento, useLenis
├── i18n/ui.ts      textos fixos da interface em pt e en
└── providers/      SmoothScrollProvider (Lenis + MotionConfig)
public/
├── <id-da-experiencia>/   imagens e vídeos de cada experiência, em WebP
├── sobre/                 foto do Sobre (vinicius.webp) e a versão PNG usada no Open Graph
├── Vinicius Alves Medeiros.pdf      currículo em português
└── Vinicius_Medeiros_Resume.pdf     currículo em inglês
```

## Regras do projeto

### Experiências são dados, não componentes

- Todas as experiências ficam em **`src/data/experiencias.ts`**, na ordem em que aparecem (da mais recente para a mais antiga).
- Um único componente desenha todas: **`ExperienciaCard`** (com `ExperienciaMidia` e `ExperienciaCabecalho`). **Não crie um componente por experiência**; se faltar algo, estenda o tipo `Experiencia` e o card.
- Para adicionar uma experiência:
  1. Coloque as imagens em `public/<id>/`, em **WebP** (o `id` do item é o nome da pasta).
  2. Copie um item da lista `experiencias` e troque textos, mídia (`carrossel`, `imagem` ou `video`) e tecnologias.
  3. Preencha o campo **`en`** com a versão em inglês (cargo, seções e, se houver, `alts` na mesma ordem das imagens).
  4. Datas no formato `AAAA-MM`; `fim: null` significa "atual". O período é formatado por `formatarPeriodo`.
- Para remover, apague o item e a pasta em `public/` correspondente.

### Site bilíngue (pt/en)

- Português é o padrão. O idioma é trocado pelo **toggle do daisyUI** (`SeletorIdioma`) no header; no celular ele fica **dentro do menu**.
- A escolha é salva no `localStorage` (chave `idioma`) pelo `LanguageContext`, que também atualiza o `lang` do `<html>`. Como o site é estático, o primeiro render é sempre em português.
- **Nunca escreva texto visível direto no JSX.** Textos da interface vão em `src/i18n/ui.ts` (o objeto `en` é tipado como `typeof pt`, então toda chave precisa existir nos dois idiomas) e são lidos com `const { t } = useLanguage()`. Textos de experiências vão no próprio item, no campo `en`.
- Isso vale também para `alt`, `aria-label`, `title` e tooltips.
- O currículo muda com o idioma (`hero.curriculoArquivo` em `ui.ts`). Se atualizar um PDF, mantenha o nome do arquivo ou ajuste o caminho nos dois idiomas.

### Visual

- Estilo **glassmorphism** sobre o tema monocromático: fundos translúcidos (`bg-base-100/50`, `bg-base-100/70`), `backdrop-blur-xs`/`backdrop-blur-md`, `shadow-lg`, cantos arredondados.
- Use os componentes e classes do **daisyUI** (`btn`, `toggle`, `collapse`, `tooltip`, `divider`, `loading`...) e as cores do tema (`base-100`, `base-content`, `primary`...), não cores fixas do Tailwind.
- **Ícones monocromáticos**: herdam a cor do texto (`text-base-content` com opacidade, `currentColor` em SVG). Nada de ícones ou logos coloridos.
- Ícones de tecnologia vêm do **react-icons** (normalmente `react-icons/si`); procure em https://react-icons.github.io/react-icons/ e importe no topo de `experiencias.ts`. Não adicione SVGs soltos em `public/icons/` para isso.
- Fonte Red Hat Display (carregada em `layout.tsx`). Breakpoint de celular: `md` (768px), o mesmo do `MobileContext`.
- Teste sempre em **desktop e celular**; o layout muda bastante (menu, carrossel sem setas, larguras fixas da mídia).

### Acessibilidade e movimento

- O site respeita **"reduzir movimento"** (`prefers-reduced-motion`):
  - `globals.css` zera animações e transições CSS;
  - `MotionConfig reducedMotion="user"` no `SmoothScrollProvider` tira os deslocamentos do framer-motion;
  - o Lenis não é iniciado e o marquee fica parado;
  - no Hero, use o hook **`useReduzirMovimento`** (ele só retorna `true` depois de montar, para não quebrar a hidratação).
- Qualquer animação nova precisa ter um comportamento sem movimento.
- Botões só com ícone precisam de `aria-label` (traduzido).

### Imagens e site estático

- Imagens novas em **WebP**. Use `next/image` (as imagens estão `unoptimized`, então otimize o arquivo antes de subir).
- A exceção é `public/sobre/vinicius.png`, usada no Open Graph/Twitter e no JSON-LD (algumas redes não leem WebP).
- Não há servidor: nada de API routes, `getServerSideProps`, middleware ou recursos que dependam de runtime do Next. Código que usa `window` roda em `useEffect` ou em componentes montados só no cliente (veja `ExperienciaMidia`).
- O domínio fica no `CNAME`; não remova.

## Checklist do PR

- [ ] `npm run build` e `npm run lint` passando
- [ ] Textos novos nos dois idiomas
- [ ] Funciona com "reduzir movimento" ligado
- [ ] Imagens novas em WebP
- [ ] Capturas de tela de desktop e celular na descrição do PR
- [ ] README atualizado se a estrutura ou o jeito de editar algo mudou
