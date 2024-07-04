import { useState } from 'react';
import PropTypes from 'prop-types';
import './AlertaIncendiosForm.css'


const AlertaIncendiosForm = ({ onSubmit }) => {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [latitud, setLatitud] = useState('');
  const [longitud, setLongitud] = useState('');
  const [masInfo, setMasInfo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      onSubmit({ nombre, telefono, latitud, longitud, masInfo });
      setNombre('');
      setTelefono('');
      setLatitud('');
      setLongitud('');
      setMasInfo('');
    }
  };

  const isFormValid = () => {
    return nombre && telefono && latitud && longitud && masInfo;
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
            onChange={(e) => setMasInfo(e.target.value)}
          />
        </div>
        <button className="submit" type="submit" disabled={!isFormValid()}>Enviar Alerta</button>
      </form>
    </div>
  );
};

AlertaIncendiosForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default AlertaIncendiosForm;
