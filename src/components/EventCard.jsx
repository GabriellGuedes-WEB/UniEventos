const EventCard = ({ event }) => {
  return (
    <div className="event-card">
      <span className="badge">{event.category}</span>
      <h3>{event.name}</h3>
      <p style={{ marginBottom: '1rem', color: '#555' }}>{event.description}</p>
      <span><strong>Data:</strong> {new Date(event.date + 'T00:00:00').toLocaleDateString('pt-BR')}</span>
      <span><strong>Local:</strong> {event.location}</span>
      <span><strong>Vagas Máximas:</strong> {event.maxParticipants}</span>
    </div>
  );
};

export default EventCard;