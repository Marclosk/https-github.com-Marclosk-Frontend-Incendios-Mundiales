import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#">Contacto</a>
          <a href="#">Términos y Condiciones</a>
          <a href="#">Política de Privacidad</a>
          <img className="logo" src="/images/logo-blanco.svg" alt="logo FireAlert" width={150}/>
          <p>© 2024 FireAlert Grupo 9. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;