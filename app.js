const { useState, useEffect } = React;

function App() {

  const [canales, setCanales] = useState([]);
  const [nombre, setNombre] = useState("");
  const [url, setUrl] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [canalActual, setCanalActual] = useState("");

  // Cargar canales guardados
  useEffect(() => {
    const guardados = JSON.parse(localStorage.getItem("canales"));
    if (guardados) {
      setCanales(guardados);
      if (guardados.length > 0) {
        setCanalActual(guardados[0].url);
      }
    }
  }, []);

  // Guardar automáticamente
  useEffect(() => {
    localStorage.setItem("canales", JSON.stringify(canales));
  }, [canales]);

  const agregarCanal = () => {
    if (!nombre || !url) {
      alert("Completa nombre y URL");
      return;
    }

    const nuevo = { nombre, url };
    setCanales([...canales, nuevo]);
    setNombre("");
    setUrl("");
  };

  const eliminarCanal = (index) => {
    const copia = [...canales];
    copia.splice(index, 1);
    setCanales(copia);
  };

  const canalesFiltrados = canales.filter(c =>
    c.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="container">
      <h1>📺 Mi TV Personal</h1>

      <div className="form-section">
        <h3>Agregar Canal</h3>

        <input
          placeholder="Nombre del canal"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />

        <input
          placeholder="URL del canal (embed o m3u8)"
          value={url}
          onChange={e => setUrl(e.target.value)}
        />

        <button onClick={agregarCanal}>Agregar</button>
      </div>

      <input
        placeholder="Buscar canal..."
        value={busqueda}
        onChange={e => setBusqueda(e.target.value)}
      />

      {canalActual && (
        <div className="video-container">
          <iframe
            src={canalActual}
            allowFullScreen
            allow="autoplay"
          ></iframe>
        </div>
      )}

      <div className="grid">
        {canalesFiltrados.map((canal, index) => (
          <div key={index} className="card">
            <strong>{canal.nombre}</strong>
            <button onClick={() => setCanalActual(canal.url)}>Ver</button>
            <button onClick={() => eliminarCanal(index)}>Eliminar</button>
          </div>
        ))}
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);