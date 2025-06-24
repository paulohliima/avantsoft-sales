# Teste Técnico Avantsoft - Front-End

### Realizado por Paulo Lima - Desenvolvedor Web Full-Stack Pleno

---

## 🚀 Tecnologias Utilizadas

- **[Next.js](https://nextjs.org/)** — Framework React com suporte a rotas de páginas e API (utilizado para simular os endpoints da API)
- **[React Hook Form](https://react-hook-form.com/)** — Manipulação de formulários
- **[Yup](https://github.com/jquense/yup)** — Validação de dados de formulários
- **[Styled Components](https://styled-components.com/)** — Estilização da aplicação
- **Context API** — Gerenciamento de estado global da aplicação
- **[Vercel](https://vercel.com/)** — Plataforma utilizada para o deploy da aplicação
- **[Jest](https://jestjs.io/pt-BR/)** — Plataforma utilizada para aplicação de testes

---

## 🧪 Como usar

Siga os passos abaixo para rodar o projeto localmente:

### 1. Clone o repositório

### 2. Instalar dependências -> ´npm install´

### 3. Executar bateria de testes -> ´npm run test´

### 4. Executar o projeto -> ´npm run dev´

### 5. aplicação estará disponível em -> http://localhost:3000

---

## 🔗 Link da aplicação em produção

**[Aplicação em Vercel](https://malga-checkout.vercel.app/)**

---

## 📝 Descrição do Desafio

Crie uma aplicação que:

- Permita adicionar clientes com as seguintes informações:

  - Nome completo
  - E-mail
  - Data de nascimento

- Liste os clientes com os campos que você considerar mais relevantes.

- Implemente uma autenticação simples para acesso à aplicação.

- Consuma a API de estatísticas para:

  - Exibir um gráfico com o total de vendas por dia
  - Destacar visualmente:
    - O cliente com maior volume de vendas
    - O cliente com maior média de valor por venda
    - O cliente com maior frequência de compras

- Adicione um campo visual que indique, para cada cliente, a primeira letra do alfabeto (a-z) que ainda **não** apareceu no nome completo desse cliente.

  - Caso todas as letras de a-z estejam presentes, exiba `-`.

- Ao consumir a API de listagem de clientes, considere que o endpoint pode retornar dados desorganizados, com duplicações, campos aninhados ou propriedades desnecessárias.
  - Realize o tratamento e normalização desses dados no front-end antes de exibi-los na interface.
