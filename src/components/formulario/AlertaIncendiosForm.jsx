import { useState } from 'react';
import PropTypes from 'prop-types';
import './AlertaIncendiosForm.css'


const AlertaIncendiosForm = ({ onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [latitud, setLatitud] = useState('');
  const [longitud, setLongitud] = useState('');
  const [masInfo, setmasInfo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit({ nombre, telefono, latitud, longitud,masInfo });
    setNombre('');
    setTelefono('');
    setLatitud('');
    setLongitud('');
    setmasInfo('');
   
  };

  return (
    <div className="form-container">
      <h2>Formulario de Alerta de Incendios</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre:</label>
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="telefono">Teléfono:</label>
          <input
            type="text"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="latitud">Latitud:</label>
          <input
            type="text"
            id="latitud"
            value={latitud}
            onChange={(e) => setLatitud(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="longitud">Longitud:</label>
          <input
            type="text"
            id="longitud"
            value={longitud}
            onChange={(e) => setLongitud(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="masInfo">Más Información:</label>
          <input
            type="text"
            id="masInfo"
            value={masInfo}
            onChange={(e) => setmasInfo(e.target.value)}
          />
        </div>
        <button type="submit">Enviar Alerta</button>
      </form>
    </div>
  );
};

AlertaIncendiosForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AlertaIncendiosForm;
