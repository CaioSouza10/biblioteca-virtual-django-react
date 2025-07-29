// frontend/src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Importe o BrowserRouter
import  AuthProvider  from './context/AuthProvider.jsx'; 
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Envolva toda a aplicação com o BrowserRouter */}
    <BrowserRouter>
    {/* 2. Envolva o App com o AuthProvider */}
      {/* Agora, toda a aplicação App e seus filhos têm acesso ao contexto. */}
      <AuthProvider>
        <App />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
)