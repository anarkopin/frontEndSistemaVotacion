import React, { useEffect, useState } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import axios from "axios";
import Swal from "sweetalert2";
import Index from "./Index";
import jwtDecode from "jwt-decode";
import { Link } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Registrar from "./componentes/votante/Registrar";
import Navigation from "./Navigation";

const Login = () => {
  const [isLoggedIn, setIsLoggedIn] = useState();
  const [isVoter, setIsVoter] = useState("no encontrado");
  const [isRegister, setIsRegister] = useState(false);

  const handleLogin = (event) => {
    // Prevenir que el formulario se envíe y se recargue la página
    event.preventDefault();
    if (isRegister == false) {
      // Extraer los datos del formulario
      const formData = new FormData(event.target);

      // Hacer una petición POST al endpoint de login del backend
      axios
        .post(
          "https://fastapi-production-00ea.up.railway.app/api/login/",
          formData
        )
        .then((response) => {
          // Si la petición fue exitosa, guardar el token en el almacenamiento local

          alert(response.data.access_token);
          localStorage.setItem(
            "access_token",
            response.data.access_token,
            Swal.fire({
              icon: "success",
              title: "Bienvenido",
              text: "tu verificacion fue un exito!!"
            })
          );
          setIsLoggedIn(true);
          window.location = "/";
        })
        .catch((error) => {
          // Si hubo un error, mostrar un mensaje al usuario
          alert(
            Swal.fire({
              icon: "error",
              title: "Tenemos Problemas",
              text: "revisa que introduciste bien los datos."
            })
          );
        });
    } else if (isRegister == true) {
      window.location = "/registrar";
    }
  };

  useEffect(() => {
    // Esta función se ejecutará cada vez que se modifique el localStorage
    const token = localStorage.getItem("access_token");
    console.log(token);
    if (!token) {
      setIsVoter("no encontrado");
    } else {
      // Aquí deberías validar si el token es de tipo votante
      const user = jwtDecode(token);
      console.log(user);
      if (user.user_type === "votante") {
        setIsVoter("votante");
      }

      if (user.user_type === "admin") {
        setIsVoter("admin");
      }

      if (user.user_type === "institucion") {
        setIsVoter("institucion");
      }
    }
  }, [localStorage]);

  if (isVoter !== "no encontrado") {
    return (
      <div>
        <Navigation isVoter={isVoter} />
      </div>
    );
  }

  if (isRegister) {
    return <Registrar />;
  }

  return (
    <body className="fondo">
      <div className="titulo">
        <img
          className="login-logo"
          src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Onpelogo.jpg.png"
          alt=""
        ></img>
        <div className="titulo-arriba">
          <h2 className="title-h2">TuVoto</h2>
        </div>
        <div className="titulo-abajo">
          <h1 className="title-h1">EJERCE TU PODER CIUDADANO</h1>
        </div>
      </div>
      <div className="login-box">
        <Form style={{}} onSubmit={handleLogin}>
          <h2 className="login-h1">Login</h2>
          <FormGroup>
            <Label className="login-label" for="username">
              Email
            </Label>
            <Input
              className="login-input"
              type="text"
              name="username"
              id="username"
              placeholder="Ingresa tu correo"
            />
          </FormGroup>
          <FormGroup>
            <Label className="login-label" for="password">
              Password
            </Label>
            <Input
              className="login-input"
              type="password"
              name="password"
              id="password"
              placeholder="Ingresa tu contraseña"
            />
          </FormGroup>
          <Button className="login-button">Ingresar</Button>

          <Button
            className="login-button"
            onClick={(e) => {
              setIsRegister(true);
            }}
          >
            Registrarse
          </Button>
        </Form>
      </div>
    </body>
  );
};

export default Login;
