# API DE GERENCIAMENTO DE TAREFAS

## Descrição
Este é um projeto de aplicativo de lista de tarefas que permite aos usuários gerenciar suas tarefas diárias. A aplicação oferece uma API RESTful para interação, utilizando Node.js no backend, Express.js para gerenciamento de rotas, e PostgreSQL como banco de dados.

## Funcionalidades
### Autenticação de Usuários

- Cadastro de novos usuários.
- Login para autenticação.
- Geração de token JWT para controle de sessões.

### Gerenciamento de Tarefas

- Criação de novas tarefas.
- Listagem de todas as tarefas do usuário autenticado.
- Detalhamento de uma tarefa específica.
- Edição de informações de uma tarefa.
- Exclusão de tarefas.

## Cadastrar Tarefa

![Cadastrar](https://github.com/FrannAlves/Lista-de-Tarefas/blob/main/imagens/CADASTRAR%20TAREFA.png?raw=true)

## Listar Tarefas

![Listar](https://github.com/FrannAlves/Lista-de-Tarefas/blob/main/imagens/LISTAR%20TAREFAS.png?raw=true)

## Detalhar Tarefa

![Detalhar](https://github.com/FrannAlves/Lista-de-Tarefas/blob/main/imagens/DETALHAR%20TAREFAS.png?raw=true)

## Editar Tarefa

![Editar](https://github.com/FrannAlves/Lista-de-Tarefas/blob/main/imagens/ATUALIZAR%20TAREFA.png?raw=true)

## Excluir Tarefa

![Editar](https://github.com/FrannAlves/Lista-de-Tarefas/blob/main/imagens/DELETAR%20TAREFA.png?raw=true)

## Validação e Middleware

- Utilização de Joi para validação de dados nas requisições.
- Middleware para filtrar e autenticar usuários nas rotas.

## Tecnologias Utilizadas

- Node.js
- Express.js
- PostgreSQL (ou o banco de dados de sua escolha)
- JWT para autenticação
- Joi para validação de dados


## Pré-requisitos

Certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- PostgreSQL

## Configuração do Ambiente

1. Clone este repositório.
2. Configure as variáveis de ambiente. (Crie um arquivo `.env` seguindo o exemplo `.env.example`)
3. Instale as dependências usando `npm install`.
4. Execute os scripts do banco de dados para criar as tabelas.

## Como Executar
Execute o projeto com o comando:

`npm run dev`

## Contribuição
Sinta-se à vontade para criar pull requests e contribuir para o projeto.
