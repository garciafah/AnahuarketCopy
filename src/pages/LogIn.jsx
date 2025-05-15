import React from "react";
import styles from "../assets/styles/session.module.css";

export default function Login() {
  return (
    <div className={styles.loginWrapper}>
      <header className={styles.loginHeader}>
        <h1>INICIAR SESIÓN</h1>
      </header>

      <main className={styles.loginMain}>
        <div className={styles.loginLogoBackground} />

        <div className={styles.loginContainer}>
          <h2>¡¡BIENVENID@!!</h2>
          <form id="loginForm" action="/main">
            <input
              type="email"
              placeholder="user@anahuac.mx"
              required
              className={styles.loginInputField}
            />
            <input
              type="password"
              placeholder="Contraseña"
              required
              className={styles.loginInputField}
            />
            <div className={styles.loginButtons}>
              <a href="/registro">
                <button
                  type="button"
                  id="registerBtn"
                  className={styles.loginActionButton}
                >
                  REGISTRARSE
                </button>
              </a>
              <a href="/main">
                <button
                  type="submit"
                  id="SiguienteBtn"
                  className={styles.loginActionButton}
                >
                  SIGUIENTE
                </button>
              </a>
            </div>
          </form>
        </div>
      </main>

      <footer className={styles.loginFooter}>
        <p className={styles.loginNoteText}>
          Recuerda ingresar con tu correo institucional
        </p>
      </footer>
    </div>
  );
}
