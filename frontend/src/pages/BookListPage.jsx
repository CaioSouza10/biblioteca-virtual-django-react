import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBooks } from '../services/apiService';

function BookListPage() {
  const [livros, setLivros] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getBooks()
      .then(data => {
        setLivros(data);
      })
      .catch(error => console.error("Erro ao buscar livros:", error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '50px' }}>Carregando livros...</p>;
  }

  return (
    <main>
      <h2>Livros Disponíveis</h2>
      <div className="lista-livros">
        {livros.map(livro => (
          <Link key={livro.id} to={`/livros/${livro.id}`} className="book-card-link">
            <div className="livro-card">
              <img
                src={livro.capa || 'https://via.placeholder.com/250x350'}
                alt={`Capa do livro ${livro.titulo}`}
                className="livro-card-capa"
              />
              <h3>{livro.titulo}</h3>
              <p><strong>Autor:</strong> {livro.autor}</p>
              <p className="preco">R$ {livro.preco}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}

export default BookListPage;