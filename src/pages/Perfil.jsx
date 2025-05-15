// src/pages/Perfil.jsx
import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import layoutStyles from "../assets/styles/pageLayout.module.css";
import perfilStyles from "../assets/styles/perfil.module.css";

export default function Perfil() {
  const products = [
    {
      src: "Images/iphone13.png",
      alt: "iPhone",
      text: "iPhone usado, excelente estado.",
    },
    {
      src: "Images/galletas.png",
      alt: "Galletas",
      text: "Galletas caseras recién horneadas.",
    },
    {
      src: "Images/audifonos.png",
      alt: "Audífonos",
      text: "Audífonos con micrófono incluidos.",
    },
    {
      src: "Images/brownies.png",
      alt: "Brownies",
      text: "Brownies de chocolate, 6 piezas.",
    },
    {
      src: "Images/laptop.png",
      alt: "Laptop",
      text: "Laptop HP usada en excelente estado.",
    },
  ];

  return (
    <div className={layoutStyles.wrapper}>
      <Header />

      <main className={layoutStyles.mainContent}>
        {/* Sección de encabezado */}
        <section className={perfilStyles.perfilSection}>
          <div className={perfilStyles.perfilName}>
            <h1>Pepito Castillo Beckham</h1>
          </div>

          <div className={perfilStyles.perfilButtons}>
            {/* Usa perfilStyles.perfilButton */}
            <Link to="/agregar-producto" className={perfilStyles.perfilButton}>
              AGREGAR PRODUCTO
            </Link>
            <Link to="/editar-usuario" className={perfilStyles.perfilButton}>
              EDITAR USUARIO
            </Link>
          </div>
        </section>

        {/* Grid de productos */}
        <section className={perfilStyles.perfilGrid}>
          {products.map(({ src, alt, text }, i) => (
            <article key={i} className={perfilStyles.perfilCard}>
              <div className={perfilStyles.perfilCardImage}>
                <img src={src} alt={alt} />
              </div>
              <div className={perfilStyles.perfilCardBody}>
                <p className={perfilStyles.perfilCardText}>{text}</p>
              </div>
            </article>
          ))}
        </section>
      </main>

      <Footer />
    </div>
  );
}
