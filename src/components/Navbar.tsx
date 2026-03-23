import logo from "../assets/logo.png"; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Logo Realiza" className="logo-img" />
      </div>

      <ul>
        <li>Início</li>
        <li>Produto</li>
        <li>Empresa</li>
        <li className="nav-contato">Contato</li>
      </ul>
    </nav>
  );
}

export default Navbar;