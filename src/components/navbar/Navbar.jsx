import {Link} from "react-router-dom"
import './navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-menu">
            <ul className="navbar-menu">
                <div className="navbar-logo">
                    <li>
                        <Link to="/"> 
                              <img className="navbar-logo" 
                              src="/images/logo.svg" alt="logo"/>
                        </Link>
                    </li>
                </div>  
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/tips">Tips</Link>
                    </li>
                    <li>
                      <Link to="/alerts">Alerts</Link>
                    </li>
            </ul>
      </div>
    </nav>
  );
};

export default Navbar
