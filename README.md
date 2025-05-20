# Takeat Client

Takeat client é um serviço criado para o consumo do client takeat.

## Passos para Utilização

### 1. Baixar arquivos e instalar dependências

Após baixar o repositório e abrir na sua IDE, abra o terminal e execute o comando abaixo para instalar todas as dependências necessárias para o projeto:

```bash
npm install
```

### 2. Criar banco de dados

Antes de iniciar, crie um arquivo `.env` na raiz do projeto para declarar as variáveis de ambiente necessárias. Exemplo:

```env
VITE_BASE_URL=http://localhost:3333
VITE_EMAIL=sabor@tapioca.com
VITE_PASSWORD=tapioca123
```

- `VITE_BASE_URL` rota-base da api takeat api.
- `VITE_EMAIL` e-mail do restaurante do contexto.
- `VITE_PASSWORD` senha restaurante do contexto.


### 3. Rodar comandos do projeto

Projeto configurado. Rode para executar o projeto:

```bash
npm run dev
```
