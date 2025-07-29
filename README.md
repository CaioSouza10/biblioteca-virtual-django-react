# Biblioteca Virtual - Full Stack (Django + React)

Uma aplicação web completa de uma biblioteca virtual, desenvolvida para demonstrar habilidades full stack com Python/Django no backend e React no frontend.


## Funcionalidades Implementadas

- **Autenticação de Usuários:** Sistema completo de registro e login com autenticação por token.
- **Catálogo de Livros:** Visualização de uma lista de livros com capas, títulos, autores e preços.
- **Página de Detalhes:** Rota protegida para detalhes completos do livro, incluindo resumo.
- **Sistema de Feedback:** Usuários logados podem adicionar comentários e notas (1 a 5) em cada livro.
- **Interface Reativa:** Construída como uma Single Page Application (SPA), com atualizações em tempo real sem recarregar a página.
- **Design Responsivo:** O layout se adapta a telas de desktop, tablets e celulares.

## Tecnologias Utilizadas

- **Backend:**
  - Python 3
  - Django
  - Django REST Framework (para a API)
  - Pillow (para manipulação de imagens)
- **Frontend:**
  - React
  - Vite (como ferramenta de build)
  - React Router (para roteamento)
  - React Context API (para gerenciamento de estado global)
  - React Hot Toast (para notificações)
- **Banco de Dados:**
  - SQLite 3 (em desenvolvimento)

## Como Executar o Projeto Localmente

### Pré-requisitos
- Python (versão 3.x)
- Node.js e npm

### Backend
O backend estará rodando em `http://127.0.0.1:8000`.

### Frontend
A aplicação estará acessível em `http://localhost:5173` (ou a porta que o Vite indicar).
