
# Mundo Quântico
Mundo Quântico é uma página web inspirada no livro Livro Didático: Projetos de Física e Computação Quântica para o Ensino Fundamental, desenvolvido pela equipe UESB-QuIIN. A plataforma apresenta histórias com imagens ilustrativas e projetos didáticos voltados para aplicação em sala de aula, oferecendo uma abordagem interativa e acessível ao ensino de conceitos da física e computação quântica.

## Clonando o repositório

```bash
git clone https://github.com/RafaelSd0/quantica.git
cd quantica
```
## Requisitos

- Node.js 18+
- npm (ou yarn)

## Instalação

```bash
npm install
```
## Ambiente de desenvolvimento

```bash
npm run dev
```

## Descrição Técnica
O projeto foi desenvolvido com JavaScript utilizando o framework Next.js. A aplicação possui uma página principal com links de navegação para outras seções do site. Foi implementado o sistema de rotas dinâmicas usando o App Router, com o padrão experimento/[name] em pastas para geração de páginas dinâmicas com base em parâmetros de URL. Os dados utilizados no site estão centralizados em uma constante JavaScript, funcionando como fonte de conteúdo para as páginas reutilizáveis.
