import jwtDecode, { InvalidTokenError } from "jwt-decode";
import { useEffect, useLayoutEffect, useState } from "react";
import Swal from "sweetalert2";
import Login from "../../Login";
import NoAutorizado from "../../NoAutorizado";
import axios from "axios";
import Card from "react-bootstrap/Card";

function FormVotar() {
  const [isVotante, setIsVotante] = useState("");
  const [candidatos, setCandidatos] = useState([]);
  const [dniCandidato, setDniCandidato] = useState("");
  const [votante, setVotante] = useState({});
  const [yaVoto, setYaVoto] = useState(false);
  const [votoExitoso, setVotoExitoso] = useState();
  const token = localStorage.getItem("access_token");
  const user = jwtDecode(token);

  useEffect(() => {
    if (user.user_type === "votante") {
      setIsVotante("votante");
      axios
        .get(
          "https://fastapi-production-00ea.up.railway.app/api/voto/votante",
          {
            headers: {
              Authorization: "Bearer " + token
            }
          }
        )
        .then((res) => {
          let voto_exist;
          if (res.data.voto_exitoso == true) {
            voto_exist = true;
            setYaVoto(voto_exist);
          } else if (res.data.voto_exitoso == false) {
            voto_exist = false;
            setYaVoto(voto_exist);
          }
          console.log(voto_exist);
          setYaVoto(voto_exist);
        })
        .catch((error) => {
          console.log(error);
        });

      if (yaVoto == false) {
        axios
          .get("https://fastapi-production-00ea.up.railway.app/api/candidato", {
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

        axios
          .get("https://fastapi-production-00ea.up.railway.app/api/votante/", {
            headers: {
              Authorization: "Bearer " + token
            }
          })
          .then((res) => {
            setVotante(res.data);
          })
          .catch((error) => {
            console.log(error);
          });
      } else if (yaVoto == true) {
        console.log("Esta ingrwesando aqui?");
        setVotoExitoso(true);
      }
    } else {
      window.location = "/login";
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    const axiosInstance = axios.create({
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    const formData = new FormData(e.target);
    axiosInstance
      .post(
        "https://fastapi-production-00ea.up.railway.app/api/voto/candidato",
        formData
      )
      .then((res) => {
        setVotoExitoso(true);
      })
      .catch((error) => {
        setVotoExitoso(true);
      });
  }

  return (
    <div className="d-flex justify-content-center">
      {votoExitoso ? (
        (Swal.fire({
          icon: "success",
          title: "Voto Exitoso",
          text: "gracias por apoyar este iniciativa de votaciones electronicas"
        }),
        (<p className="votaste">Ya votaste!</p>))
      ) : (
        <form onSubmit={handleSubmit}>
          {candidatos.map((elemento) => (
            <div className="carta" key={elemento.dni}>
              <Card className="carta-box" style={{}}>
                <Card.Body className="carta-body">
                  <input name="dni_candidato" value={elemento.dni}></input>
                  <div className="text-box">
                    <Card.Text className="carta-text">
                      {elemento.partido_politico}
                    </Card.Text>
                    <Card.Text className="carta-text">
                      {elemento.nombres}
                    </Card.Text>
                    <Card.Text className="carta-text">
                      {elemento.apellidos}
                    </Card.Text>
                  </div>
                  <button
                    className="carta-boton"
                    onClick={() => {}}
                    variant="dark"
                  >
                    Elegir Candidato
                  </button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </form>
      )}
    </div>
  );
}

export default FormVotar;
