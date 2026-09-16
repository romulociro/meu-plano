# Meu Plano — PWA do cardápio do Rômulo

Aplicativo web progressivo (PWA), em português, para Rômulo Ciro Maia Lima ver o plano alimentar e registrar o check-in de cada refeição no celular Android.

O plano da nutricionista Felipe Gadêlha (CRN6 19914, prescrito em 19/09/2025) está **embutido no app**. Não é preciso abrir o PDF no dia a dia.

Tudo roda no navegador: não há login, servidor nem analytics. Os check-ins ficam no `localStorage` deste aparelho.

## O que o app faz

- **Hoje:** lista café, almoço, lanche da tarde (2 opções) e jantar (2 opções). Em cada refeição você marca **Conforme o plano**, **Usou substituição** ou **Fora do plano**, com nota opcional. Dá para limpar o registro da refeição.
- **Plano:** cardápio completo, com substituições expansíveis por alimento.
- **Histórico:** calendário do mês, resumo da semana (%) e detalhe do dia.
- Datas no fuso **America/Sao_Paulo**.
- Instalável no Chrome Android (Adicionar à tela inicial) e usável offline depois da primeira visita.

## Rodar localmente

É um site estático feito com [Vite](https://vitejs.dev/).

```bash
npm install
npm run dev
```

Abra o endereço que o terminal mostrar (por padrão `http://localhost:43123`).

Para gerar os arquivos de publicação:

```bash
npm run build
```

Os arquivos prontos saem na pasta `dist/`. Para conferir o build:

```bash
npm run preview
```

Se quiser só abrir os arquivos gerados, sirva a pasta `dist` com qualquer servidor estático (abrir `index.html` direto no `file://` quebra o service worker e o manifesto).

## Publicar (GitHub Pages ou outro host estático)

1. Rode `npm run build`.
2. Envie o conteúdo de `dist/` para o host.

### GitHub Pages (pasta `/docs`)

1. `npm run build`
2. Copie `dist/` para `docs/` na raiz do repositório.
3. Em **Settings → Pages**, escolha a branch principal e a pasta `/docs`.

### GitHub Pages (GitHub Actions)

Crie `.github/workflows/pages.yml` com build (`npm ci` + `npm run build`) e deploy da pasta `dist`. Em Pages, use a origem **GitHub Actions**.

O Vite está com `base: './'`, então o app também funciona em subpasta (`https://usuario.github.io/nome-do-repo/`).

Netlify, Cloudflare Pages, Surge ou um bucket S3/CloudFront: aponte o publish directory para `dist`.

## Instalar no Android (Chrome)

1. Abra o site publicado no **Chrome**.
2. Toque no menu **⋮** → **Adicionar à tela inicial** (ou **Instalar app**, se aparecer o banner).
3. Confirme. O ícone **Meu Plano** abre em tela cheia, como um app.
4. Na primeira visita online o app guarda o visual e os arquivos. Depois você pode abrir sem internet e continuar registrando refeições (os dados ficam neste celular).

Os registros **não sincronizam** entre aparelhos. Se limpar os dados do site no Chrome, o histórico local some.

## Refeições do plano

- Café da manhã
- Almoço
- Lanche da tarde — opção 1 (whey e fruta) e opção 2 (cuscuz e frango)
- Jantar — opção 1 (arroz e frango) e opção 2 (sanduíche)

Quantidades e substituições são as do PDF original.

## Privacidade

Nada é enviado a um servidor. Os check-ins usam a chave `plano-romulo:checkins:v1` no `localStorage`.
