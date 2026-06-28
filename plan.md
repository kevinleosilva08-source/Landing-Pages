Alterar o botão "Falar com Especialista / Falar agora" no header (`src/routes/index.tsx`, linhas ~119-129) para que ele role suavemente até a seção "Pronto para resolver sua questão de pensão alimentícia?" em vez de abrir o WhatsApp.

## Mudanças

1. Adicionar `id="cta-pensao"` na `<section>` do "Mid CTA" (a que contém o título "Pronto para resolver sua questão de pensão alimentícia?").
2. No botão do header:
   - Trocar `href={WHATSAPP_URL}` por `href="#cta-pensao"`.
   - Remover `onClick={openWhatsApp}`, `target="_blank"` e `rel="noopener noreferrer"`.
   - Manter todo o estilo atual (cores, ícone, responsividade dos textos).
3. Garantir scroll suave: o projeto já usa Tailwind v4; adicionar `scroll-behavior: smooth` no `html` via `src/styles.css` (se ainda não existir) para que o salto pelo `#cta-pensao` seja animado.

## Fora do escopo

- Não alterar os demais botões de WhatsApp da página.
- Não mexer no botão flutuante nem no rodapé.
