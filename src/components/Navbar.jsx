import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { currentUser, logoutUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logoutUser();
    navigate('/auth');
  };

  return (
    <nav className="navbar">
      <h1>UniEventos</h1>
      {currentUser && (
        <div className="navbar-links">
          <Link to="/">Início</Link>
          <Link to="/cadastro">Cadastrar Evento</Link>
          <Link to="/listagem">Eventos</Link>
          <span style={{ color: '#ccc', marginLeft: '0.5rem', marginRight: '0.5rem' }}>|</span>
          <span style={{ color: '#fff', fontSize: '0.9rem' }}>Olá, {currentUser.name}</span>
          <button 
            onClick={handleLogout} 
            style={{ 
              background: 'transparent', 
              border: '1px solid #fb9c03', 
              color: '#fb9c03', 
              padding: '0.3rem 0.8rem', 
              borderRadius: '4px', 
              cursor: 'pointer',
              marginLeft: '0.5rem'
            }}>
            Sair
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;