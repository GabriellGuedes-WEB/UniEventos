import { useContext, useState } from 'react';
import { EventContext } from '../context/EventContext';
import EventCard from '../components/EventCard';

const Listagem = () => {
  const { events } = useContext(EventContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');

  const filteredEvents = events.filter(event => {
    const matchesName = event.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === '' || event.category === filterCategory;
    return matchesName && matchesCategory;
  });

  return (
    <div className="container">
      <h2 style={{ color: '#1f4d96', marginBottom: '1.5rem' }}>Grade de Eventos Cadastrados</h2>
      
      <div className="filters">
        <input 
          type="text" 
          placeholder="Buscar evento por nome..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select 
          value={filterCategory} 
          onChange={(e) => setFilterCategory(e.target.value)}
        >
          <option value="">Filtrar por Categoria</option>
          <option value="Palestra">Palestra</option>
          <option value="Workshop">Workshop</option>
          <option value="Simpósio">Simpósio</option>
          <option value="Minicurso">Minicurso</option>
        </select>
      </div>

      {filteredEvents.length === 0 ? (
        <p style={{ textAlign: 'center', color: '#666', marginTop: '3rem' }}>
          Nenhum evento registrado corresponde aos critérios de busca.
        </p>
      ) : (
        <div className="events-grid">
          {filteredEvents.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Listagem;