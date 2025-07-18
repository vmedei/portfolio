# Implementação do Locomotive Scroll

## Instalação

Para instalar o Locomotive Scroll, execute o seguinte comando:

```bash
npm install locomotive-scroll
```

## O que foi implementado

### 1. Hook Personalizado (`src/hooks/useLocomotiveScroll.ts`)
- Gerencia a inicialização e destruição do Locomotive Scroll
- Configurações otimizadas para desktop, tablet e smartphone
- Cleanup automático quando o componente é desmontado

### 2. Tipos TypeScript (`src/types/locomotive-scroll.d.ts`)
- Definições de tipos para melhor suporte ao TypeScript
- Interface completa para as opções de configuração

### 3. Integração na Página Principal
- Container principal com `data-scroll-container`
- Seções marcadas com `data-scroll-section`
- Event listener personalizado para detectar visibilidade dos projetos

## Configurações Aplicadas

```javascript
{
  smooth: true,        // Scroll suave ativado
  multiplier: 1,       // Velocidade normal do scroll
  lerp: 0.1,          // Interpolação suave
  smartphone: {
    smooth: true,
    multiplier: 1,
    lerp: 0.1,
  },
  tablet: {
    smooth: true,
    multiplier: 1,
    lerp: 0.1,
  }
}
```

## Como usar

1. **Instale a dependência**: `npm install locomotive-scroll`
2. **O scroll suave será aplicado automaticamente** após a instalação
3. **Para adicionar animações específicas**, use os atributos:
   - `data-scroll` - Para elementos individuais
   - `data-scroll-speed` - Para controlar velocidade
   - `data-scroll-direction` - Para direção da animação

## Exemplo de uso adicional

```tsx
// Para animar um elemento específico
<div data-scroll data-scroll-speed="2">
  Este elemento se move mais rápido
</div>

// Para animação com direção
<div data-scroll data-scroll-direction="horizontal">
  Este elemento se move horizontalmente
</div>
```

## Benefícios

- ✅ Scroll mais suave e natural
- ✅ Performance otimizada
- ✅ Suporte completo para dispositivos móveis
- ✅ Integração perfeita com React/Next.js
- ✅ TypeScript support
- ✅ Cleanup automático de memória 