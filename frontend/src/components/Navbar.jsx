import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

function Navbar() {
  const { authToken, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();      // Chama a função do contexto para limpar o token
    navigate('/'); // Redireciona para a página inicial
  };

  return (
    <header className="App-header">
      {/* Este container nos ajuda a centralizar e alinhar o conteúdo */}
      <div className="header-container">
        <h1>
          <Link to="/" className="header-link">Biblioteca Virtual</Link>
        </h1>
        <nav>
          {authToken ? (
            // Se o usuário ESTÁ logado
            <>
              <Link to="/">Livros</Link>
              <button onClick={handleLogout} className="logout-button">Logout</button>
            </>
          ) : (
            // Se o usuário NÃO ESTÁ logado
            <>
              <Link to="/">Livros</Link>
              <Link to="/login">Login</Link>
              <Link to="/register">Registrar</Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;