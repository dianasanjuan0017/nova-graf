import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Nova Graf</h2>

    <ul>
      <li><Link to="/">Inicio</Link></li>
      <li><Link to="/catalogo">Catálogo</Link></li>
      <li><Link to="/nosotros">Nosotros</Link></li>
      <li><Link to="/contacto">Contacto</Link></li>
      <li><Link to="/register">Registro</Link></li>
      <li><Link to="/login">Login</Link></li>
    </ul>

    </nav>
  );
}

export default Navbar;
