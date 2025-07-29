// A URL base da nossa API. Fica em um só lugar!
const BASE_URL = 'http://127.0.0.1:8000/api';

/**
 * Uma função auxiliar para fazer requisições fetch,
 * tratando a conversão para JSON e erros básicos.
 * @param {string} endpoint - O endpoint da API a ser chamado (ex: '/livros/').
 * @param {object} options - As opções da requisição fetch (method, headers, body).
 */
async function request(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;
  
  const response = await fetch(url, options);

  if (!response.ok) {
    // Se a resposta não for OK, tenta pegar os detalhes do erro do corpo da resposta.
    const errorData = await response.json().catch(() => ({})); // Pega o JSON ou um objeto vazio
    throw new Error(errorData.detail || `Erro na requisição: ${response.statusText}`);
  }
  
  // Se a resposta for OK mas não tiver corpo (ex: status 204), retorna null.
  if (response.status === 204) {
    return null;
  }

  return response.json();
}

// --- Funções Específicas para Cada Endpoint ---

// Busca a lista de todos os livros
export const getBooks = () => {
  return request('/livros/');
};

// Busca os detalhes de um único livro
export const getBookDetails = (bookId) => {
  return request(`/livros/${bookId}/`);
};

// Faz o login do usuário
export const loginUser = (username, password) => {
  return request('/login/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  });
};

// Registra um novo usuário
export const registerUser = (username, email, password) => {
    return request('/register/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
    });
};

// Envia um novo feedback para um livro
export const submitFeedback = (bookId, { nota, comentario }, token) => {
  return request(`/livros/${bookId}/feedback/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Token ${token}`,
    },
    body: JSON.stringify({ nota, comentario }),
  });
};