import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from "axios";

function Registrar() {
  const [dni, setDni] = useState("");
  const [persona, setPersona] = useState({});

  const axiosClient = axios.create({
    baseURL: "https://fastapi-production-00ea.up.railway.app"
  });

  useEffect(() => {
    console.log(dni);
    const getPerson = (dni) => {
      return axiosClient
        .get(`/api/votante_apto/${dni}`)
        .then((response) => {
          console.log(response.data);
          setPersona(response.data);
        })
        .catch((error) => {
          setPersona({ nombres: "Desconocido", apellidos: "Desconocido" });
        });
    };

    getPerson(dni);
  }, [dni]);

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
    <div className="register-box">
      <form onSubmit={BoxRegister}>
        <div className="register-1">
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
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="Ingrese un Correo Electronico"
            required
          ></input>
        </div>
        <div className="register-2">
          <label>Fecha de Emision</label>
          <input
            type="date"
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
            name="fecha_emision"
          ></input>
          <label>Fecha de Vencimiento</label>
          <input
            type="date"
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
            name="fecha_vencimiento"
          ></input>
          <label>Fecha de Nacimiento</label>
          <input
            type="date"
            pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
            name="fecha_nacimiento"
          ></input>
        </div>
        <div className="register-3">
          <label>Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="Ingrese su Contraseña"
            required
          ></input>
          <label>Confirmar Contraseña</label>
          <input
            type="password"
            name="password_confirmation"
            placeholder="Repita la Contraseña"
            required
          ></input>
        </div>
        <div className="register-inferior">
          <button className="botonr" type="submit">
            Registrar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Registrar;
