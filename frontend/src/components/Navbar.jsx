import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Nova Graf</h2>

      <ul>
        <li>Inicio</li>
        <li>Catálogo</li>
        <li>Nosotros</li>
        <li>Contacto</li>
        <li>Login</li>
      </ul>
    </nav>
  );
}

export default Navbar;
