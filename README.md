# UniEventos

## 📚 Sobre o Projeto

O **UniEventos** é uma aplicação web desenvolvida em React para gerenciamento de eventos universitários. O sistema permite cadastrar eventos, visualizar eventos cadastrados e consumir dados de uma API REST externa, simulando um cenário real de desenvolvimento frontend.

Este projeto foi desenvolvido como atividade acadêmica com foco na utilização de conceitos fundamentais do React, incluindo roteamento, gerenciamento de estado compartilhado, formulários controlados e integração com APIs.

---

## 🎯 Objetivos

* Implementar navegação entre páginas utilizando React Router.
* Desenvolver formulários controlados com validação.
* Compartilhar dados entre componentes através da Context API.
* Consumir dados de uma API REST.
* Aplicar boas práticas de componentização.
* Criar uma interface responsiva e amigável.

---

## 🚀 Funcionalidades

### Página Inicial

* Apresentação da plataforma.
* Navegação para as demais páginas.

### Cadastro de Eventos

* Cadastro de novos eventos.
* Validação dos campos obrigatórios.
* Armazenamento dos eventos em estado global.

### Listagem de Eventos

* Exibição dinâmica dos eventos cadastrados.
* Pesquisa por nome do evento.
* Filtro por categoria.

### Integração com API

* Consumo da API JSONPlaceholder.
* Exibição dos dados obtidos.
* Tratamento de carregamento e erros.

---

## 🛠️ Tecnologias Utilizadas

* React
* React Router DOM
* Context API
* Axios
* JavaScript (ES6+)
* HTML5
* CSS3
* Vite

---

## 🎨 Paleta de Cores

| Cor              | Hexadecimal |
| ---------------- | ----------- |
| Azul Principal   | #1f4d96     |
| Laranja Destaque | #fb9c03     |

---

## 📂 Estrutura do Projeto

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── EventCard.jsx
│   └── ApiPosts.jsx
│
├── pages/
│   ├── Home.jsx
│   ├── Cadastro.jsx
│   └── Listagem.jsx
│
├── context/
│   └── EventContext.jsx
│
├── services/
│   └── api.js
│
├── styles/
│   └── global.css
│
├── App.jsx
└── main.jsx
```

---

## ⚙️ Instalação

Clone o repositório:

```bash
git clone https://github.com/seu-usuario/unieventos.git
```

Entre na pasta do projeto:

```bash
cd unieventos
```

Instale as dependências:

```bash
npm install
```

---

## ▶️ Executando o Projeto

Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

A aplicação estará disponível em:

```text
http://localhost:5173
```

---

## 🌐 API Utilizada

JSONPlaceholder

```text
https://jsonplaceholder.typicode.com/posts
```

Utilizada para simular o consumo de uma API REST externa.

---

## 📋 Requisitos Atendidos

* ✅ Navegação com React Router
* ✅ Formulário controlado
* ✅ Validação de campos
* ✅ Renderização dinâmica de listas
* ✅ Gerenciamento de estado compartilhado
* ✅ Consumo de API REST
* ✅ CSS externo
* ✅ Responsividade
* ✅ Organização em componentes

---

## 📈 Organização do Projeto

O gerenciamento das tarefas foi realizado utilizando GitHub Projects no formato Kanban, contendo as etapas:

* To Do
* In Progress
* Done

---

## 👥 Integrantes

* Gabriell Pereira Pinto Guedes
* Nome do Integrante 2


---

## 📄 Licença

Projeto desenvolvido exclusivamente para fins acadêmicos.
