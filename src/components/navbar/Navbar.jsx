import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <Link to="/">
                    <img
                        className="navbar-logo"
                        src="/images/logo.svg"
                        alt="logo"
                    />
                </Link>
            </div>
            <ul className="navbar-menu">
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
        </nav>
    );
};

export default Navbar;
