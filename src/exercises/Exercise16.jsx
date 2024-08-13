// Exercise16.js
import EstadosMunicipios from "../components/EstadosMunicipios.jsx";

const Exercise16 = () => {
  return (
      <div>
          <h1>Exercise 16</h1>
          <div>
              <EstadosMunicipios corFundo={"blue"} />
              <EstadosMunicipios corFundo={"purple"} />
              <EstadosMunicipios corFundo={"green"} />
          </div>
      </div>
  );
};

export default Exercise16;

// Peço perdão pela cópia descarada, eu até entendi o funcionamento do useMemo mas não tive ideias de uso interessantes no momento da realização do exercício