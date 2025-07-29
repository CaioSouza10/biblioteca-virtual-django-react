import { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import { getBookDetails } from '../services/apiService'; // <-- MUDANÇA
import FeedbackForm from '../components/FeedbackForm';

function BookDetailPage() {
  const { bookId } = useParams();
  const { authToken } = useAuth();
  const [livro, setLivro] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchBookDetails = useCallback(() => {
    setLoading(true);
    getBookDetails(bookId) // <-- MUDANÇA
      .then(data => {
        setLivro(data);
      })
      .catch(error => {
        console.error("Erro ao buscar detalhes do livro:", error);
        setLivro(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [bookId]);

  useEffect(() => {
    fetchBookDetails();
  }, [fetchBookDetails]);

  if (loading) {
    return <p style={{ textAlign: 'center', marginTop: '50px' }}>Carregando...</p>;
  }

  if (!livro) {
    return <p style={{ textAlign: 'center', marginTop: '50px' }}>Livro não encontrado!</p>;
  }

  return (
    <>
      <main className="book-detail-container">
        <img src={livro.capa || 'https://via.placeholder.com/300x450'} alt={`Capa de ${livro.titulo}`} className="book-detail-cover" />
        <div className="book-detail-info">
          <h1>{livro.titulo}</h1>
          <h2>por {livro.autor}</h2>
          <p className="book-detail-price">R$ {livro.preco}</p>
          <h3>Resumo</h3>
          <p>{livro.resumo}</p>
          <Link to="/" className="back-link">← Voltar para a lista</Link>
        </div>
      </main>
      <section className="feedbacks-section">
        <h2>Feedbacks dos Leitores</h2>
        {authToken && (
          <FeedbackForm 
            bookId={bookId} 
            onFeedbackSubmitted={fetchBookDetails} 
          />
        )}
        {livro.feedbacks && livro.feedbacks.length > 0 ? (
          <div className="feedbacks-list">
            {livro.feedbacks.map(feedback => (
              <div key={feedback.id} className="feedback-card">
                <p className="feedback-author"><strong>{feedback.usuario}</strong></p>
                <p className="feedback-rating">Nota: {feedback.nota}/5</p>
                <p className="feedback-comment">{feedback.comentario}</p>
                <small className="feedback-date">
                  {new Date(feedback.criado_em).toLocaleDateString('pt-BR')}
                </small>
              </div>
            ))}
          </div>
        ) : (
          <p>Ainda não há feedbacks para este livro. Seja o primeiro a comentar!</p>
        )}
      </section>
    </>
  );
}

export default BookDetailPage;