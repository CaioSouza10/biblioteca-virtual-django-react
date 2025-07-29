// frontend/src/components/ProtectedRoute.jsx

import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

// Este componente recebe 'children' como prop.
// 'children' será o componente da página que queremos proteger.
function ProtectedRoute({ children }) {
  // Usamos nosso hook para verificar se existe um authToken.
  const { authToken } = useAuth();

  if (!authToken) {
    // Se NÃO houver token, o usuário não está logado.
    // Usamos o componente Navigate para redirecioná-lo para a página de login.
    return <Navigate to="/login" replace />;
  }

  // Se houver um token, o usuário está logado.
  // Renderizamos os 'children', ou seja, a página que ele estava tentando acessar.
  return children;
}

export default ProtectedRoute;