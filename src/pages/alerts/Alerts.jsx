

import { useState } from 'react';
import AlertaIncendiosForm from '../../components/formulario/AlertaIncendiosForm';

const Alert = () => {
  const [alertas, setAlertas] = useState([]);

  const handleFormSubmit = (formData) => {
    setAlertas([...alertas, formData]);
    console.log('Alerta enviada:', formData);
  };

  return (

    <div className="Alert">
      <div className="main-text">
        <h1>Alerta de Incendios</h1>
      </div>
      <div className="container">
        <AlertaIncendiosForm onSubmit={handleFormSubmit} />
        <div className="alertas">
          <h2>Alertas Enviadas</h2>
          <ul>
            {alertas.map((alerta, index) => (
              <li key={index}>
                <strong>Nombre:</strong> {alerta.nombre} <br />
                <strong>Latitud:</strong> {alerta.latitud} <br />
                <strong>Longitud:</strong> {alerta.longitud}<br />
                <strong>Mas Informacion:</strong> {alerta.masInfo} 
                
              </li>
            ))}
          </ul>
        </div>
      </div>

    </div>
  );
};

export default Alert;
