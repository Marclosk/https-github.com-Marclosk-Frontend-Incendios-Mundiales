
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './components/navbar/navbar.css';

// Crea el root de tu aplicación
const container = document.getElementById('root');
const root = createRoot(container);

// Renderiza la aplicación usando createRoot
root.render(
  <Router>
    <App />
  </Router>
);
