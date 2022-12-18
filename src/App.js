import "./styles.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import React, { useEffect, useState } from "react";
import jwtDecode from "jwt-decode";

export default function App() {
  return <Login className="col-6 login-container" />;
}
