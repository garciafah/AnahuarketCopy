// src/pages/EditarPerfil.jsx

import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import layoutStyles from "../assets/styles/pageLayout.module.css";
import styles from "../assets/styles/edit.module.css";

export default function EditarPerfil() {
  const navigate = useNavigate();

  const handleSubmit = e => {
    e.preventDefault();
    // aquí iría tu lógica para guardar cambios…
    navigate("/perfil");
  };

  return (
    <div className={layoutStyles.wrapper}>
      <Header />

      <main className={layoutStyles.mainContent}>
        <div className={styles.editLogoBackground} />

        <div className={styles.editContainer}>
          <h2 className={styles.editTitle}>EDITAR PERFIL</h2>
          <form id="editForm" onSubmit={handleSubmit}>
            <label htmlFor="fullName" className={styles.editLabel}>
              NOMBRE COMPLETO
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              placeholder="Nombre completo"
              required
              className={styles.editInputField}
            />

            <label htmlFor="phone" className={styles.editLabel}>
              TELÉFONO
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              placeholder="Teléfono"
              required
              className={styles.editInputField}
            />

            <label htmlFor="password" className={styles.editLabel}>
              CONTRASEÑA
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Contraseña"
              required
              className={styles.editInputField}
            />

            <div className={styles.editButtons}>
              <Link to="/perfil">
                <button
                  type="button"
                  className={styles.editActionButton}
                >
                  CANCELAR
                </button>
              </Link>
              <button
                type="submit"
                className={styles.editActionButton}
              >
                GUARDAR
              </button>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
}
