

function Perfil() {
  return (
    <div className="wrapper">
      <Header />

      <section className={styles.perfilSection}>
        <div className={styles.nombrePerfil}>
          <h1>Pepito Castillo Beckham</h1>
        </div>
        <div className={styles.botones}>
          <a href="historialCompras.html">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2z"
                />
                <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466" />
              </svg>
              Historial
            </button>
          </a>
          <button>Agregar Producto</button>
          <button>Editar Usuario</button>
        </div>
      </section>

      <main className={styles.mainGrid}>
        {[
          { src: "Images/iphone13.png", alt: "iPhone usado", text: "iPhone usado, excelente estado." },
          { src: "Images/galletas.png", alt: "Galletas", text: "Galletas caseras recién horneadas." },
          { src: "Images/audifonos.png", alt: "Audífonos", text: "Audífonos con micrófono incluidos." },
          { src: "Images/brownies.png", alt: "Brownies", text: "Brownies de chocolate, 6 piezas." },
          { src: "Images/laptop.png", alt: "Laptop", text: "Laptop HP usada en excelente estado." }
        ].map(({ src, alt, text }, i) => (
          <article key={i} className={styles.card}>
            <img src={src} alt={alt} className={styles.cardImgTop} />
            <div className={styles.cardBody}>
              <p className={styles.cardText}>{text}</p>
            </div>
          </article>
        ))}
      </main>

      <Footer />
    </div>
  );
}

export default Perfil;
