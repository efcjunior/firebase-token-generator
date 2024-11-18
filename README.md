Aqui está o **README.md** para o seu projeto, orientando os desenvolvedores a rodarem localmente:

---

# AppCheckFirebase

Este projeto é uma ferramenta para gerar tokens `App Check` e `Bearer` do Firebase, permitindo que desenvolvedores reutilizem esses tokens para desenvolvimento e testes.

## 🚀 Configuração do Ambiente Local

Siga os passos abaixo para rodar o projeto localmente:

### 1. Pré-requisitos

Certifique-se de ter os seguintes itens instalados no seu sistema:

- **Node.js** (versão 14 ou superior)
- **NPM** (gerenciador de pacotes do Node.js)
- **Git** (opcional, para clonar o repositório)

### 2. Clone o Repositório (opcional)

Se você ainda não clonou o projeto, execute:

```bash
git clone https://github.com/efcjunior/firebase-token-generator.git
cd firebase-token-generator
```

### 3. Instale as Dependências

No diretório do projeto, execute o seguinte comando para instalar as dependências:

```bash
npm install
```

### 4. Configure o Arquivo `.env`

1. Crie um arquivo `.env` na raiz do projeto.  
2. Copie o conteúdo do arquivo `.env example` como base.
3. Preencha as variáveis com os valores corretos, por exemplo:

```env
FIREBASE_API_KEY_DEV=SEU_API_KEY
FIREBASE_AUTH_DOMAIN=SEU_AUTH_DOMAIN
FIREBASE_PROJECT_ID=SEU_PROJECT_ID
FIREBASE_STORAGE_BUCKET=SEU_STORAGE_BUCKET
FIREBASE_MESSAGING_SENDER_ID=SEU_MESSAGING_SENDER_ID
FIREBASE_APP_ID=SEU_APP_ID
FIREBASE_MEASUREMENT_ID=SEU_MEASUREMENT_ID
RECAPTCHA_KEY=SUA_RECAPTCHA_KEY
USER_EMAIL=SEU_EMAIL
USER_PASSWORD=SUA_SENHA
```

> **Nota:** Nunca compartilhe o arquivo `.env` em repositórios públicos. Certifique-se de que ele está no `.gitignore`.

### 5. Execute o Projeto

Inicie o servidor local com o seguinte comando:

```bash
node server.js
```

O servidor estará disponível em:  
**http://localhost:3000**

---

## 🧪 Testando o Projeto

1. Abra o navegador e acesse:  
   **http://localhost:3000/index.html**

2. O aplicativo carregará os tokens `App Check` e `Bearer`, que serão exibidos na tela.

---

## 🛠️ Estrutura do Projeto

```plaintext
APP_CHECK_FIREBASE/
├── node_modules/        # Dependências instaladas
├── .env                 # Configurações do ambiente local (não versionado)
├── .env example         # Exemplo de arquivo .env
├── .gitignore           # Arquivos/diretórios ignorados pelo Git
├── index.html           # Interface do aplicativo
├── LICENSE              # Licença do projeto
├── package.json         # Dependências e metadados do projeto
├── package-lock.json    # Versões travadas das dependências
├── README.md            # Documentação do projeto
├── server.js            # Servidor Node.js
└── vercel.json          # Configuração para deploy no Vercel
```

---

## 🌐 Configurando no Vercel

1. Faça login no [Vercel](https://vercel.com/).
2. Importe este repositório para o Vercel.
3. Configure as **Environment Variables** com as mesmas chaves do arquivo `.env`.
4. Clique em **Deploy**.

---

## 🛠️ Dependências Principais

- **[Express.js](https://expressjs.com/)**: Framework backend para Node.js.
- **[dotenv](https://github.com/motdotla/dotenv)**: Gerenciamento de variáveis de ambiente.

---

## ✨ Funcionalidades

- Geração de tokens `App Check` e `Bearer` do Firebase.
- Configuração de chaves sensíveis através de variáveis de ambiente.
- Compatível para rodar localmente ou no Vercel.

---

Se precisar de ajuda, sinta-se à vontade para abrir uma issue no repositório! 🚀