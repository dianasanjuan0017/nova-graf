import Navbar from "../components/Navbar";
import "../styles/Home.css";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">
        <h1>Personaliza tu mundo con Nova Graf</h1>
        <p>Artículos personalizados para cada ocasión</p>
        <button>Ver catálogo</button>
      </section>

      <section className="categorias">
        <h2>Categorías</h2>

        <div className="cards">
          <div className="card">Playeras</div>
          <div className="card">Tazas</div>
          <div className="card">Gorras</div>
          <div className="card">Sudaderas</div>
        </div>
      </section>

      <section className="about">
        <h2>Sobre Nova Graf</h2>
        <p>
          Nos especializamos en la personalización de productos de alta calidad
          para empresas y clientes particulares.
        </p>
      </section>

      <footer className="footer">
        <p>Nova Graf © 2026</p>
      </footer>
    </>
  );
}

export default Home;
