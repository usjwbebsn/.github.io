const { useState } = React;

function App() {

  // 🔥 EDITA AQUÍ TUS CANALES
  const canales = [
    {
      nombre: "TVN",
      imagen: "https://via.placeholder.com/300x400?text=TVN",
      url: "AQUI_VA_TU_URL_EMBED"
    },
    {
      nombre: "Canal 13",
      imagen: "https://via.placeholder.com/300x400?text=Canal+13",
      url: "AQUI_VA_TU_URL_EMBED"
    },
    {
      nombre: "Mega",
      imagen: "https://via.placeholder.com/300x400?text=Mega",
      url: "AQUI_VA_TU_URL_EMBED"
    },
    // Duplica hasta tener tus 50 canales reales
  ];

  const [canalActivo, setCanalActivo] = useState(null);

  return (
    <>
      <div className="header">📺 TV Online</div>

      <div className="container">
        <div className="grid">
          {canales.map((canal, index) => (
            <div
              key={index}
              className="card"
              onClick={() => setCanalActivo(canal)}
            >
              <img src={canal.imagen} alt={canal.nombre} />
              <div className="card-title">{canal.nombre}</div>
            </div>
          ))}
        </div>
      </div>

      {canalActivo && (
        <div className="player">
          <iframe
            src={canalActivo.url}
            allowFullScreen
            allow="autoplay"
          ></iframe>

          <button
            className="close-btn"
            onClick={() => setCanalActivo(null)}
          >
            Cerrar
          </button>
        </div>
      )}
    </>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);