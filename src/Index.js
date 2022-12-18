import jwtDecode from "jwt-decode";
import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import { BrowserRouter as Router } from "react-router-dom";
import NoAutorizado from "./NoAutorizado";
import Login from "./Login";

function Index({ isVoter }) {
  if (isVoter !== "no encontrado") {
    return (
      <div>
        <div class="centro-pagina">
          <h1 className="perfil-h1">TuVuto existe gracias a:</h1>
          <img
            src="https://1.bp.blogspot.com/-H20vPz5KqTc/VfG941gGXJI/AAAAAAAAAT4/U_iA3lPuztU/s1600/127%2BMunicipalidad%2BDe%2BAte.jpg"
            class="colaboradores-img"
            alt=""
          ></img>
          <img
            src="https://yt3.ggpht.com/ipkdnIbhG8psH2zYsPASdMUhdZv1Dd1eirTydNz8emKYJ3FjI9I5ELhDNxbsmoQj95wlUJQFQQ=s900-c-k-c0x00ffffff-no-rj"
            class="colaboradores-img"
            alt=""
          ></img>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/a/aa/Onpelogo.jpg.png"
            class="colaboradores-img"
            alt=""
          ></img>
        </div>
      </div>
    );
  }

  return <Login />;
}

export default Index;
