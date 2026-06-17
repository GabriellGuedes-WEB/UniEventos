import { Link } from 'react-router-dom';
import ApiPosts from '../components/ApiPosts';

const Home = () => {
  return (
    <div className="container">
      <div className="hero">
        <h2>Painel Universitário UniEventos</h2>
        <p style={{ marginBottom: '2rem', fontSize: '1.2rem', color: '#555' }}>
          Encontre e organize palestras, minicursos e workshops acadêmicos em um ambiente unificado e responsivo.
        </p>
        <Link to="/cadastro" className="btn">Cadastrar Novo Evento</Link>
      </div>
      <ApiPosts />
    </div>
  );
};

export default Home;