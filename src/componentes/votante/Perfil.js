import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import jwtDecode from "jwt-decode";

function Perfil() {
  const [dni, setDni] = useState("");
  const [persona, setPersona] = useState({});
  const token = localStorage.getItem("access_token");
  const user = jwtDecode(token);

  const axiosClient = axios.create({
    baseURL: "https://fastapi-production-00ea.up.railway.app"
  });

  useEffect(() => {
    console.log(dni);
    const getPerson = (dni) => {
      axios
        .get("https://fastapi-production-00ea.up.railway.app/api/votante/", {
          headers: {
            Authorization: "Bearer " + token
          }
        })
        .then((res) => {
          setPersona(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getPerson(dni);
  }, []);

  function handleRegistrar() {
    // Elimina la entrada del almacenamiento local con la clave "access_token"
    // Redirige al usuario a la página de inicio de sesión
    window.location = "/login";
  }

  const BoxRegister = (event) => {
    // Prevenir que el formulario se envíe y se recargue la página
    event.preventDefault();

    // Extraer los datos del formulario
    const formData = new FormData(event.target);
    console.log(formData.get("fecha_nacimiento"));
    // Hacer una petición POST al endpoint de login del backend
    axios
      .post(
        "https://fastapi-production-00ea.up.railway.app/api/votante/",
        formData
      )
      .then((response) => {
        // Si la petición fue exitosa, guardar el token en el almacenamiento local
        alert(
          Swal.fire({
            icon: "success",
            title: "Registrado Correctamente",
            text: "se logro crear un usuario con tus datos"
          })
        );

        handleRegistrar();
      })
      .catch((error) => {
        console.log(error);
        // Si hubo un error, mostrar un mensaje al usuario
        alert(
          Swal.fire({
            icon: "error",
            title: "Tenemos Problemas",
            text: "revisa que introduciste bien los datos."
          })
        );
      });
  };

  return (
    <div className="perfil-box">
      <form onSubmit={BoxRegister}>
        <div className="">
          <h1>Tu Perfil</h1>
          <label>N° DNI</label>
          <input
            onChange={(e) => {
              setDni(e.target.value);
            }}
            type="text"
            name="dni"
            placeholder="Ingrese su DNI"
            required
          ></input>

          <label>Nombres</label>
          <input
            type="text"
            name="nombres"
            value={persona.nombres}
            placeholder="Ingrese sus Nombres"
            required
          ></input>
          <label>Apellidos</label>
          <input
            type="text"
            name="apellidos"
            value={persona.apellidos}
            placeholder="Ingrese sus Apellidos"
            required
          ></input>
        </div>

        <div className="perfil-inferior">
          <button className="botonp" type="submit">
            Modificar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Perfil;
