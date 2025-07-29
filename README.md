# Biblioteca Virtual - Full Stack (Django + React)

Uma aplicação web completa de uma biblioteca virtual, desenvolvida para demonstrar habilidades full stack com Python/Django no backend e React no frontend.

![Screenshot da Aplicação](link_para_um_screenshot_seu)  <!-- Opcional, mas muito bom: tire um screenshot da sua aplicação e suba no GitHub para colocar o link aqui -->

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
```bash
# 1. Clone o repositório
git clone https://github.com/seu-nome/biblioteca-virtual-django-react.git
cd biblioteca-virtual-django-react/backend

# 2. Crie e ative o ambiente virtual
python -m venv venv
# No Windows: venv\Scripts\activate
# No macOS/Linux: source venv/bin/activate

# 3. Instale as dependências
pip install -r requirements.txt

# 4. Execute as migrações e inicie o servidor
python manage.py migrate
python manage.py runserver
```
O backend estará rodando em `http://127.0.0.1:8000`.

### Frontend
```bash
# Em um novo terminal, navegue para a pasta do frontend
cd biblioteca-virtual-django-react/frontend

# 1. Instale as dependências
npm install

# 2. Inicie o servidor de desenvolvimento
npm run dev
```
A aplicação estará acessível em `http://localhost:5173` (ou a porta que o Vite indicar).