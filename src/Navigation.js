import React, { useState } from "react";
import { Link, BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Login from "./Login";
import NoAutorizado from "./NoAutorizado";
import Index from "./Index";
import "./styles.css";
import Votar from "./componentes/votante/Votar";
import ReportarErrores from "./ReportarErrores";
import FormVotar from "./componentes/votar/FormVotar";
import Estadisticas from "./componentes/institucion/Estadisticas";
import Perfil from "./componentes/votante/Perfil";

const Navigation = ({ isVoter }) => {
  function logout() {
    // Elimina la entrada del almacenamiento local con la clave "access_token"
    localStorage.removeItem("access_token");
    // Redirige al usuario a la página de inicio de sesión
    window.location = "/login";
  }

  if (isVoter === "votante") {
    return (
      <div>
        <nav>
          <ul>
            <img
              class="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Onpelogo.jpg.png"
              alt=""
            ></img>
            <li>
              <NavLink to="/perfil">Perfil</NavLink>
            </li>
            <li>
              <NavLink to="/votar">Votar</NavLink>
            </li>

            <li className="ladito">
              <button className="leave" onClick={logout}>
                Cerrar sesión
              </button>{" "}
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/votar" element={<FormVotar />} />
          <Route path="/reportar" element={<ReportarErrores />} />
        </Routes>
      </div>
    );
  }

  if (isVoter === "admin") {
    return (
      <div>
        <nav>
          <ul>
            <img
              class="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Onpelogo.jpg.png"
              alt=""
            ></img>
            <li>
              <NavLink to="/votantes">Votantes</NavLink>
            </li>
            <li>
              <NavLink to="/candidatos">Candidatos</NavLink>
            </li>
            <li>
              <NavLink to="/institucion">Institucion</NavLink>
            </li>
            <li className="ladito">
              <button className="leave" onClick={logout}>
                Cerrar sesión
              </button>{" "}
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/votantes" element={<Perfil />} />
          <Route path="/candidatos" element={<FormVotar />} />
          <Route path="/institucion" element={<ReportarErrores />} />
        </Routes>
      </div>
    );
  }

  if (isVoter === "institucion") {
    return (
      <div>
        <nav>
          <ul>
            <img
              class="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Onpelogo.jpg.png"
              alt=""
            ></img>
            <li>
              <NavLink to="/estadisticas">Estadisticas</NavLink>
            </li>
            <li className="ladito">
              <button className="leave" onClick={logout}>
                Cerrar sesión
              </button>{" "}
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/estadisticas" element={<Estadisticas />} />
        </Routes>
      </div>
    );
  }

  return <Login />;
};

export default Navigation;
