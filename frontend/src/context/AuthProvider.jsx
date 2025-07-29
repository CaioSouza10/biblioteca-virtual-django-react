// frontend/src/context/AuthProvider.jsx

import { useState } from 'react';
// 1. Importa o contexto do nosso novo arquivo
import { AuthContext } from './auth-context'; 

// 2. O nome da função é o mesmo, mas agora este arquivo só exporta isso
function AuthProvider({ children }) {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));

  const login = (token) => {
    localStorage.setItem('authToken', token);
    setAuthToken(token);
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setAuthToken(null);
  };

  const value = {
    authToken,
    login,
    logout,
  };

  // 3. Usa o AuthContext importado para criar o provedor
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// 4. Exporta APENAS o componente como padrão
export default AuthProvider;