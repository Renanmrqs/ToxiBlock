# 🛡 ToxiBlock

Extensão de navegador que analisa os comentários de qualquer página da web e aplica um blur nos que forem identificados como ofensivos. Se quiser ver o comentário mesmo assim, é só clicar nele para revelar o texto. Tem botões de ligar e desligar o filtro caso necessário.

## Como funciona

1. A extensão captura todos os comentários da página
2. Envia cada um para a [SentimentAI API](https://sentimentai-api.onrender.com/docs) analisar
3. Se o comentário for ofensivo, aplica blur
4. Clique no comentário embaçado para revelar o texto
5. Use o popup da extensão para ligar ou desligar o filtro

## Tecnologias

- JavaScript puro
- HTML e CSS
- Chrome Extensions API (Manifest V3)
- [SentimentAI](https://github.com/Renanmrqs/SentimentAI) — API própria feita com FastAPI e hospedada no Render

## Como instalar localmente

1. Clone o repositório
```bash
git clone https://github.com/Renanmrqs/ToxiBlock.git
```
2. Abra o Chrome e acesse `chrome://extensions/`
3. Ative o **Modo do Desenvolvedor** no canto superior direito
4. Clique em **Carregar sem compactação** e selecione a pasta do projeto
5. A extensão vai aparecer na barra do navegador

> A API pode demorar alguns segundos para responder na primeira requisição pois está hospedada no plano gratuito do Render.

## Próximos passos

- [✅] Retreinar o modelo com dataset específico para comentários tóxicos
- [✅] Suporte para páginas com carregamento dinâmico (YouTube, Twitter) (Apenas youtube)
- [ ] Publicar na Chrome Web Store