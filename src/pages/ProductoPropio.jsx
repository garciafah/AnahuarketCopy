// src/pages/ProductoPropio.jsx
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import layoutStyles from "../assets/styles/pageLayout.module.css";
// importamos el módulo de producto ajeno
import productStyles from "../assets/styles/producto.module.css";

export default function ProductoPropio() {
  return (
    <div className={layoutStyles.wrapper}>
      <Header />

      <main className={layoutStyles.mainContent}>
        {/* aquí no mostramos la sección de usuario */}
        <section className={productStyles.productoAjenoSection}>
          <div className={productStyles.productoAjenoContainer}>
            {/* columna de imagen */}
            <div className={productStyles.productoAjenoImage}>
              <img src="LogoAnahuac.png" alt="Mi producto" />
            </div>

            {/* columna de info */}
            <div className={productStyles.productoAjenoInfo}>
              <h3>Nombre del Producto</h3>
              <h4 className={productStyles.productoAjenoPrice}>$1,234.00</h4>
              <p className={productStyles.productoAjenoDescription}>
                Aquí va la descripción de tu producto. Detalla características,
                estado, condiciones de entrega, etc.
              </p>
              <span className={productStyles.productoAjenoStock}>
                Stock: 5
              </span>

              {/* NUEVO BOTÓN para editar */}
              <button
                className={productStyles.productoAjenoEditButton}
              >
                EDITAR PRODUCTO
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
