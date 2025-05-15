import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import layoutStyles from "../assets/styles/pageLayout.module.css";
import productStyles from "../assets/styles/producto.module.css";

export default function ProductoAjeno() {
  return (
    <div className={layoutStyles.wrapper}>
      <Header />

      <main className={layoutStyles.mainContent}>
        {/* englobador con fondo común */}
        <div className={productStyles.productoAjenoSection}>

          <div className={productStyles.productoAjenoContainer}>
            <div className={productStyles.productoAjenoImage}>
              <img src="LogoAnahuac.png" alt="Producto" />
            </div>
            <div className={productStyles.productoAjenoInfo}>
              <h1>Pepito Castillo Beckham</h1>
              <h3 className={productStyles.productoAjenoTitle}>Número de teléfono</h3>
              <h3 className={productStyles.productoAjenoTitle}>iPhone 13</h3>
              <p className={productStyles.productoAjenoPrice}>$7,500</p>
              <p className={productStyles.productoAjenoDescription}>
                iPhone 13, 128 GB, libre de fábrica, batería 85 %. Acepto
                efectivo o transferencia; mándame mensaje para coordinarnos.
              </p>
              <span className={productStyles.productoAjenoStock}>Stock: 1</span>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
