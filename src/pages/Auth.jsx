import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const { loginUser, registerUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    if (isLogin) {
      const result = loginUser(email, password);
      if (result.success) {
        navigate('/');
      } else {
        setError(result.message);
      }
    } else {
      const result = registerUser(name, email, password);
      if (result.success) {
        alert('Cadastro realizado com sucesso! Faça o login.');
        setIsLogin(true);
        setPassword('');
      } else {
        setError(result.message);
      }
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
    setPassword('');
    setName('');
  };

  return (
    <div className="container" style={{ display: 'flex', justifyContent: 'center', marginTop: '10vh' }}>
      <div className="form-container" style={{ width: '100%', maxWidth: '400px', borderTop: '5px solid var(--blue-primary)' }}>
        <h2 style={{ color: '#1f4d96', textAlign: 'center', marginBottom: '1.5rem' }}>
          {isLogin ? 'Entrar no Sistema' : 'Criar Conta'}
        </h2>
        
        {error && <div className="error-msg" style={{ marginBottom: '1rem', textAlign: 'center' }}>{error}</div>}
        
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <div className="form-group">
              <label>Nome Completo</label>
              <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
            </div>
          )}
          <div className="form-group">
            <label>E-mail</label>
            <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="form-group">
            <label>Senha</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          
          <button type="submit" className="btn" style={{ width: '100%', marginTop: '1rem', backgroundColor: isLogin ? 'var(--orange-accent)' : 'var(--blue-primary)' }}>
            {isLogin ? 'Entrar' : 'Cadastrar'}
          </button>
        </form>
        
        <div style={{ textAlign: 'center', marginTop: '1.5rem', fontSize: '0.9rem', color: '#666' }}>
          {isLogin ? (
            <>Não tem uma conta? <span onClick={toggleForm} style={{ color: 'var(--orange-accent)', fontWeight: 'bold', cursor: 'pointer' }}>Cadastre-se</span></>
          ) : (
            <>Já possui conta? <span onClick={toggleForm} style={{ color: 'var(--blue-primary)', fontWeight: 'bold', cursor: 'pointer' }}>Fazer Login</span></>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;