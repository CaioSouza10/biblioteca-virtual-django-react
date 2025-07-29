// frontend/src/App.jsx
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast'; 
import Navbar from './components/Navbar';
import BookListPage from './pages/BookListPage';
import BookDetailPage from './pages/BookDetailPage';
import ProtectedRoute from './components/ProtectedRoute';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* O Navbar agora é um componente separado e sempre visível */}
      <Navbar />
      
      {/* O Routes define a área onde o conteúdo da página irá mudar */}
      <Routes>
        {/* Cada Route mapeia uma URL para um componente de página */}
        <Route path="/" element={<BookListPage />} />
        {<Route path="/login" element={<LoginPage />} />}
        {<Route path="/register" element={<RegisterPage />} />}
        <Route path="/livros/:bookId" element={
            <ProtectedRoute>
              <BookDetailPage />
            </ProtectedRoute>
          } 
        />      
      </Routes>
    </div>
  );
}

export default App;