import styles from "../assets/styles/session.module.css";

export default function Registro() {
  return (
    <div className={styles.loginWrapper}>
      <header className={styles.loginHeader}>
        <h1>REGÍSTRATE</h1>
      </header>

      <main className={styles.loginMain}>
        <div className={styles.loginLogoBackground} />

        <div className={styles.loginContainer}>
          <h2>¡¡BIENVENID@!!</h2>
          <form id="registroForm" action="/home">
            {/* Nombre */}
            <input
              type="text"
              placeholder="Nombre completo"
              required
              className={styles.loginInputField}
            />
            {/* Teléfono */}
            <input
              type="tel"
              placeholder="Teléfono"
              required
              className={styles.loginInputField}
            />
            {/* Correo */}
            <input
              type="email"
              placeholder="user@anahuac.mx"
              required
              className={styles.loginInputField}
            />
            {/* Contraseña */}
            <input
              type="password"
              placeholder="Contraseña"
              required
              className={styles.loginInputField}
            />

            <div className={styles.loginButtons}>
              <a href="/">
                <button
                  type="button"
                  id="LogInBtn"
                  className={styles.loginActionButton}
                >
                  LOG IN
                </button>
              </a>

              <button type="submit" className={styles.loginActionButton}>
                SIGUIENTE
              </button>
            </div>
          </form>
        </div>
      </main>

      <footer className={styles.loginFooter}>
        <p className={styles.loginNoteText}>
          Recuerda registrarte con tu correo institucional
        </p>
      </footer>
    </div>
  );
}
