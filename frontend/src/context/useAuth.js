// frontend/src/context/useAuth.js
import { useContext } from 'react';
import { AuthContext } from './auth-context'; // Importa o contexto do arquivo ao lado

// Apenas cria e exporta o hook customizado.
export const useAuth = () => {
  return useContext(AuthContext);
};