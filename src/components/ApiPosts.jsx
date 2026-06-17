import { useState, useEffect } from 'react';
import api from '../services/api';

const ApiPosts = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get('/posts?_limit=3');
        setPosts(response.data);
      // eslint-disable-next-line no-unused-vars
      } catch (err) {
        setError('Falha ao carregar os informativos da API.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p style={{ textAlign: 'center', marginTop: '2rem' }}>Carregando informativos acadêmicos...</p>;
  if (error) return <p className="error-msg" style={{ textAlign: 'center', marginTop: '2rem' }}>{error}</p>;

  return (
    <div style={{ marginTop: '3rem' }}>
      <h3 style={{ color: '#1f4d96', marginBottom: '1rem' }}>Mural de Avisos da Universidade (API Externa)</h3>
      <div className="events-grid">
        {posts.map(post => (
          <div key={post.id} className="event-card" style={{ borderLeftColor: '#fb9c03' }}>
            <h4 style={{ color: '#1f4d96', marginBottom: '0.5rem' }}>{post.title}</h4>
            <p style={{ fontSize: '0.9rem', color: '#666' }}>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApiPosts;