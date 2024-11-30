import CardWidget from "./CardWidget";
import "../Styles/navbar.css";

function Navbar() {
  return (
    <header className="header">
      <a href="/" className="logo">
        Materos
      </a>

      <nav className="navbar">
        <a href="/">Productos</a>
        <a href="/">Nosotros</a>
        <a href="/">Contacto</a>
      </nav>
      <CardWidget />
    </header>
  );
}

export default Navbar;
