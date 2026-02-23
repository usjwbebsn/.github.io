const { useState } = React;

function App() {

  // 🔥 EDITA AQUÍ TUS CANALES REALES
  const canales = [
    {
      nombre: "TVN",
      imagen: "https://via.placeholder.com/300x450?text=TVN",
      url: "AQUI_TU_URL_EMBED"
    },
    {
      nombre: "Canal 13",
      imagen: "https://via.placeholder.com/300x450?text=Canal+13",
      url: "AQUI_TU_URL_EMBED"
    },
    {
      nombre: "Mega",
      imagen: "https://via.placeholder.com/300x450?text=Mega",
      url: "AQUI_TU_URL_EMBED"
    }
    // Duplica hasta tus 50 canales
  ];

  const [busqueda, setBusqueda] = useState("");
  const [activo, setActivo] = useState(null);

  const filtrados = canales.filter(c =>
    c.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <>
      <div className="header">
        📺 StreamTV
        <input
          className="search"
          placeholder="Buscar canal..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />
      </div>

      <div className="container">
        <div className="grid">
          {filtrados.map((canal, index) => (
            <div
              key={index}
              className="card"
              onClick={() => setActivo(canal)}
            >
              <img src={canal.imagen} alt={canal.nombre} />
              <div className="overlay">{canal.nombre}</div>
            </div>
          ))}
        </div>
      </div>

      {activo && (
        <div className="player">
          <iframe
            src={activo.url}
            allowFullScreen
            allow="autoplay"
          ></iframe>

          <button
            className="close-btn"
            onClick={() => setActivo(null)}
          >
            Cerrar
          </button>
        </div>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);