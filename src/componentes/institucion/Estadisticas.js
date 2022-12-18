import axios from "axios";
import jwtDecode, { InvalidTokenError } from "jwt-decode";
import { useEffect, useLayoutEffect, useState } from "react";

function Estadisticas() {
  const token = localStorage.getItem("access_token");
  const user = jwtDecode(token);
  const [votos, setVotos] = useState();
  const [candidatos, setCandidatos] = useState([]);
  const [candidatoVoto, setCandidatoVoto] = useState();
  const [dni, setDni] = useState();

  useEffect(() => {
    axios
      .get("https://fastapi-production-00ea.up.railway.app/api/estadisticas/", {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then((res) => {
        setVotos(res.data.cantidad_votos);
      })
      .catch((error) => {});

    axios
      .get("https://fastapi-production-00ea.up.railway.app/api/candidatos/", {
        headers: {
          Authorization: "Bearer " + token
        }
      })
      .then((res) => {
        setCandidatos(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  function handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    console.log(typeof formData.get("dni_candidato"));
    const axiosInstance = axios.create({
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    axiosInstance
      .get(
        "https://fastapi-production-00ea.up.railway.app/api/estadisticas/candidato/" +
          dni
      )
      .then((res) => {
        setCandidatoVoto(res.data.cantidad_votos);
      })

      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="votos-box">
      <h1 className="titulo-voto">Votos totales, {votos}</h1>
      <div>
        <form onSubmit={handleSubmit}>
          {candidatos.map((elemento) => (
            <div className="candidato" key={elemento.dni}>
              <input
                className="dni-voto"
                value={elemento.dni}
                name="dni_candidato"
              />
              <h1>{elemento.nombres}</h1>
              <button
                className="boton-voto"
                onClick={(e) => {
                  setDni(elemento.dni);
                }}
              >
                Visualizar votos
              </button>
            </div>
          ))}
        </form>
        <h1 className="titulo-voto">{candidatoVoto}</h1>
      </div>
      <div id="grafico"></div>
    </div>
  );
}

export default Estadisticas;
