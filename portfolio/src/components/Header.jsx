import foto from "../assets/foto.jpg";

function Header() {
  return (
    <header>
      <img src={foto} alt="Foto de Renato Diniz" />
      <h1>Renato Diniz</h1>
      <p>Desenvolvedor em formação</p>
    </header>
  );
}

export default Header;
