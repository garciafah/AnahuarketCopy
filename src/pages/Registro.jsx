// src/components/Registro.jsx

import React from "react";
import styles from "../assets/styles/login-registro.module.css";

export default function Registro() {
  return (
    <div className={styles.wrapper}>
      <header>
        <h1 className={styles.InicioSesion}>REGÍSTRATE</h1>
      </header>

      <main>
        {/* Background “A” */}
        

        {/* Form container, same as login */}
        <div className={styles.loginContent}>
          <div className={styles.fotoAnahuac} />
          <div className={styles.containerLogin}>
            <h2>¡¡BIENVENID@!!</h2>
            <form id="registerForm" action="/home">
              <input type="text" placeholder="Nombre completo" required />
              <input type="email" placeholder="Correo institucional" required />
              <input type="tel" placeholder="Teléfono" required />
              <input type="password" placeholder="Contraseña" required />
              <div className={styles.buttons}>
                <button type="submit">SIGUIENTE</button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <footer>
        <p className={styles.note}>
          Recuerda registrarte con tu correo institucional
        </p>
      </footer>
    </div>
  );
}
