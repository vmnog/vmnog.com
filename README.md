# Blog com Next.js, MDX, shadcn-ui e TailwindCSS

Um template inicial com Next.js para o seu próximo blog ou site pessoal. Construído com:

- Next.js [App Router](https://nextjs.org/docs/app)
- Processamento de conteúdo com [Contentlayer](https://www.contentlayer.dev/)
- Escrita de posts com [MDX](https://mdxjs.com/)
- Componentes de UI com [shadcn-ui](https://ui.shadcn.com/)
- Estilização com [Tailwind CSS](https://tailwindcss.com/)

Este Starter é **fortemente** inspirado por [Lee Robinson](https://github.com/leerob/leerob.io).

👀 [Veja o Demo Ao Vivo](https://vmnog.com/)

## Como Começar

```bash
git clone https://github.com/vmnog/vmnog.com.git
cd vmnog.com

pnpm install

pnpm run dev
```

Seu novo site estará disponível em http://localhost:3000/

Posts do blog podem ser adicionados ao diretório `posts`, na pasta raiz.

Atualize o `WEBSITE_HOST_URL` ao publicar seu site. Esta configuração está em `/src/lib/constants.ts`

Certifique-se de atualizar o arquivo `sitemap.ts`, especificamente a constante `const routes` se adicionar mais páginas ao site.

---

Espero que você aproveite a utilização do nosso template para blog, e estamos ansiosos para ver as incríveis funcionalidades que você pode adicionar a ele!
