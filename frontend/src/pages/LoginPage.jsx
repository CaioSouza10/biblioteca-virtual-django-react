import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';
import toast from 'react-hot-toast';
import { loginUser } from '../services/apiService'; // <-- MUDANÇA

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      // MUDANÇA: Usa a função do serviço
      const data = await loginUser(username, password);
      
      login(data.token);
      toast.success('Login realizado com sucesso!');
      navigate('/');
    } catch (error) {
      toast.error(`Falha no login: ${error.message}`);
    }
  };

  return (
    <main className="form-container">
      <h2 className='texto'>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username" className='texto'>Nome de Usuário:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" className='texto'>Senha:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Entrar</button>
      </form>
    </main>
  );
}

export default LoginPage;