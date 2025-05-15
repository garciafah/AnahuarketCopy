// src/pages/Home.jsx

import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import layoutStyles from "../assets/styles/pageLayout.module.css";
import homeStyles from "../assets/styles/main.module.css";

export default function Home() {
  return (
    <div className={layoutStyles.wrapper}>
      <Header />

      <main className={layoutStyles.mainContent}>
        <section className={homeStyles.productsGrid}>
          <a href="/producto-ajeno">
            <article className={homeStyles.productCard}>
              <div className={homeStyles.productImage}>
                <img src="images/iphone13.png" alt="iPhone 13" />
              </div>
              <div className={homeStyles.productInfo}>
                <p className={homeStyles.seller}>Pepito Castillo Beckham</p>
                <h2 className={homeStyles.productTitle}>iPhone 13</h2>
                <p className={homeStyles.price}>$7,500.00</p>
              </div>
            </article>
          </a>

          <article className={homeStyles.productCard}>
            <div className={homeStyles.productImage}>
              <img src="images/boxers.png" alt="Boxers semi-nuevos" />
            </div>
            <div className={homeStyles.productInfo}>
              <p className={homeStyles.seller}>Ermenegildo Zegna</p>
              <h2 className={homeStyles.productTitle}>Boxers semi-nuevos</h2>
              <p className={homeStyles.price}>$7,500.00</p>
            </div>
          </article>

          <article className={homeStyles.productCard}>
            <div className={homeStyles.productImage}>
              <img src="images/nissanMarch.png" alt="Nissan March" />
            </div>
            <div className={homeStyles.productInfo}>
              <p className={homeStyles.seller}>Benjardin Barona</p>
              <h2 className={homeStyles.productTitle}>Nissan March</h2>
              <p className={homeStyles.price}>$90,000.00</p>
            </div>
          </article>

          <article className={homeStyles.productCard}>
            <div className={homeStyles.productImage}>
              <img src="images/correa.png" alt="Correa para perros" />
            </div>
            <div className={homeStyles.productInfo}>
              <p className={homeStyles.seller}>Karla Camacho</p>
              <h2 className={homeStyles.productTitle}>Correa para perros</h2>
              <p className={homeStyles.price}>$7,500.00</p>
            </div>
          </article>

          <article className={homeStyles.productCard}>
            <div className={homeStyles.productImage}>
              <img src="images/parrilla.png" alt="Parrilla para asados" />
            </div>
            <div className={homeStyles.productInfo}>
              <p className={homeStyles.seller}>RobiGrill</p>
              <h2 className={homeStyles.productTitle}>Parrilla para asados</h2>
              <p className={homeStyles.price}>$7,500.00</p>
            </div>
          </article>

          <article className={homeStyles.productCard}>
            <div className={homeStyles.productImage}>
              <img src="images/plumones.png" alt="Plumones" />
            </div>
            <div className={homeStyles.productInfo}>
              <p className={homeStyles.seller}>Panchisco</p>
              <h2 className={homeStyles.productTitle}>Plumones</h2>
              <p className={homeStyles.price}>$7,500.00</p>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}
