import React from "react";
import "../assets/styles/login-registro.css";

export default function Login() {
  return (
    <>
      <div className="wrapper">
        <header>
          <h1 className="InicioSesion">INICIAR SESIÓN</h1>
        </header>
        <main>
          <div className="fotoAnahuac" />
          <div className="containerLogin">
            <h2>¡¡BIENVENID@!!</h2>
            <form id="loginForm" action="/home">
              <input type="email" placeholder="user@anahuac.mx" required="" />
              <input type="password" placeholder="Contraseña" required="" />
              <div className="buttons">
                <a href="registro.html">
                  <button type="button" id="registerBtn">
                    REGISTRARSE
                  </button>
                </a>
                <button type="submit">SIGUIENTE</button>
              </div>
            </form>
          </div>
        </main>
        <footer>
          <p className="note">Recuerda ingresar con tu correo institucional</p>
        </footer>
      </div>
    </>
  );
}
