import React, { useEffect, useState } from "react";
import axios from "axios";

function Votar() {
  function FormVotar(e) {
    window.location = "/iniciar";
  }

  return (
    <button className="boton" value="Iniciar Proceso" onClick={FormVotar}>
      Iniciar Proceso
    </button>
  );
}

export default Votar;
