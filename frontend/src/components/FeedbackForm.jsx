import { useState } from 'react';
import { useAuth } from '../context/useAuth';
import toast from 'react-hot-toast';
import { submitFeedback } from '../services/apiService'; // <-- MUDANÇA

function FeedbackForm({ bookId, onFeedbackSubmitted }) {
  const [nota, setNota] = useState(5);
  const [comentario, setComentario] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // <-- MUDANÇA
  const { authToken } = useAuth();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!authToken) {
      toast.error('Você precisa estar logado para deixar um feedback.');
      return;
    }

    setIsSubmitting(true); // <-- MUDANÇA
    try {
      // MUDANÇA: Usa a função do serviço
      await submitFeedback(bookId, { nota, comentario }, authToken);
      
      toast.success('Feedback enviado com sucesso!');
      setNota(5);
      setComentario('');
      if (onFeedbackSubmitted) {
        onFeedbackSubmitted();
      }
    } catch (error) {
      toast.error(`Falha ao enviar feedback: ${error.message}`);
    } finally {
      setIsSubmitting(false); // <-- MUDANÇA
    }
  };

  return (
    <div className="feedback-form-container">
      <h3>Deixe seu Feedback</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nota">Nota (1 a 5):</label>
          <input
            type="number"
            id="nota"
            value={nota}
            onChange={(e) => setNota(e.target.value)}
            min="1"
            max="5"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="comentario">Comentário:</label>
          <textarea
            id="comentario"
            value={comentario}
            onChange={(e) => setComentario(e.target.value)}
            rows="4"
            required
          />
        </div>
        {/* MUDANÇA: botão dinâmico */}
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Enviando...' : 'Enviar Feedback'}
        </button>
      </form>
    </div>
  );
}

export default FeedbackForm;