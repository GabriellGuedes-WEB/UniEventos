import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { EventContext } from '../context/EventContext';

const Cadastro = () => {
  const { addEvent } = useContext(EventContext);
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    date: '',
    location: '',
    category: '',
    maxParticipants: ''
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'O nome do evento é obrigatório.';
    if (!formData.description) newErrors.description = 'A descrição é obrigatória.';
    if (!formData.date) {
      newErrors.date = 'A data é obrigatória.';
    } else {
      const selectedDate = new Date(formData.date + 'T00:00:00');
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'A data não pode ser anterior ao dia atual.';
      }
    }
    if (!formData.location) newErrors.location = 'O local é obrigatório.';
    if (!formData.category) newErrors.category = 'A categoria é obrigatória.';
    if (!formData.maxParticipants || formData.maxParticipants <= 0) {
      newErrors.maxParticipants = 'O número de participantes deve ser maior que zero.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      addEvent(formData);
      alert('Evento cadastrado com sucesso!');
      navigate('/listagem');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="container">
      <div className="form-container">
        <h2 style={{ color: '#1f4d96', marginBottom: '1.5rem', textAlign: 'center' }}>Cadastrar Evento Acadêmico</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nome do Evento</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
            {errors.name && <span className="error-msg">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Descrição</label>
            <textarea name="description" rows="3" value={formData.description} onChange={handleChange}></textarea>
            {errors.description && <span className="error-msg">{errors.description}</span>}
          </div>

          <div className="form-group">
            <label>Data</label>
            <input type="date" name="date" value={formData.date} onChange={handleChange} />
            {errors.date && <span className="error-msg">{errors.date}</span>}
          </div>

          <div className="form-group">
            <label>Local</label>
            <input type="text" name="location" value={formData.location} onChange={handleChange} />
            {errors.location && <span className="error-msg">{errors.location}</span>}
          </div>

          <div className="form-group">
            <label>Categoria</label>
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="">Selecione...</option>
              <option value="Palestra">Palestra</option>
              <option value="Workshop">Workshop</option>
              <option value="Simpósio">Simpósio</option>
              <option value="Minicurso">Minicurso</option>
            </select>
            {errors.category && <span className="error-msg">{errors.category}</span>}
          </div>

          <div className="form-group">
            <label>Quantidade Máxima de Participantes</label>
            <input type="number" name="maxParticipants" value={formData.maxParticipants} onChange={handleChange} />
            {errors.maxParticipants && <span className="error-msg">{errors.maxParticipants}</span>}
          </div>

          <button type="submit" className="btn" style={{ width: '100%' }}>Confirmar Cadastro</button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;