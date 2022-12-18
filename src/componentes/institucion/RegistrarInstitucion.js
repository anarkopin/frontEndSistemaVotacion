function RegistrarInstitucion() {
  return (
    <div className="entidad-register">
      <h1 className="titulo-candidato">Agregar Entidad Estatal</h1>
      <form>
        <div className="derecha">
          <label>N° DNI</label>
          <div class="buscador">
            <img
              class="search-icon"
              src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDU2Ljk2NiA1Ni45NjYiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDU2Ljk2NiA1Ni45NjY7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggZD0iTTU1LjE0Niw1MS44ODdMNDEuNTg4LDM3Ljc4NmMzLjQ4Ni00LjE0NCw1LjM5Ni05LjM1OCw1LjM5Ni0xNC43ODZjMC0xMi42ODItMTAuMzE4LTIzLTIzLTIzcy0yMywxMC4zMTgtMjMsMjMgIHMxMC4zMTgsMjMsMjMsMjNjNC43NjEsMCw5LjI5OC0xLjQzNiwxMy4xNzctNC4xNjJsMTMuNjYxLDE0LjIwOGMwLjU3MSwwLjU5MywxLjMzOSwwLjkyLDIuMTYyLDAuOTIgIGMwLjc3OSwwLDEuNTE4LTAuMjk3LDIuMDc5LTAuODM3QzU2LjI1NSw1NC45ODIsNTYuMjkzLDUzLjA4LDU1LjE0Niw1MS44ODd6IE0yMy45ODQsNmM5LjM3NCwwLDE3LDcuNjI2LDE3LDE3cy03LjYyNiwxNy0xNywxNyAgcy0xNy03LjYyNi0xNy0xN1MxNC42MSw2LDIzLjk4NCw2eiIgZmlsbD0iIzAwMDAwMCIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K"
            />
            <input
              className="search"
              type="text"
              name="dni"
              placeholder="Buscar"
              required
            ></input>
            <br></br>
          </div>
          <label>Nombres</label>
          <input
            type="text"
            name="nombres"
            //value={}
            placeholder="Ingrese sus Nombres"
            required
          ></input>
          <br></br>
          <label>Apellidos</label>
          <input
            type="text"
            name="apellidos"
            //value={}
            placeholder="Ingrese sus Apellidos"
            required
          ></input>
          <label>Contraseña</label>
          <input
            type="text"
            name="apellidos"
            //value={}
            placeholder="Contraseña"
            required
          ></input>
        </div>
        <div className="izquierda">
          <label>Rol</label>
          <select name="" id="">
            <option value="">Votante</option>
            <option value="">Admin</option>
            <option value="">institucion</option>
          </select>
          <label>Cargo</label>
          <select name="" id="">
            <option value="">Cargo1</option>
            <option value="">Cargo2</option>
            <option value="">Cargo3</option>
          </select>
          <label>Entidad</label>
          <select name="" id="">
            <option value="">Entidad1</option>
            <option value="">Entidad2</option>
            <option value="">Entidad3</option>
          </select>
          <label>Confirmar Contraseña</label>
          <input
            type="text"
            name="apellidos"
            //value={}
            placeholder="Repita la Contraseña"
            required
          ></input>
        </div>
        <div className="entidad-inferior">
          <button className="boton-candidato" type="submit">
            Crear
          </button>
        </div>
      </form>
    </div>
  );
}

export default RegistrarInstitucion;
