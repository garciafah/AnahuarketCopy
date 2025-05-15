import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import layoutStyles from "../assets/styles/pageLayout.module.css";
import styles from "../assets/styles/edit.module.css";

export default function EditarProducto() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // aquí harías tu lógica de envío…
    navigate("/perfil");
  };

  return (
    <div className={layoutStyles.wrapper}>
      <Header />
      <main className={layoutStyles.mainContent}>
        <div className={styles.editContainer}>
          <div className={styles.editLogoBackground} />
          <h2 className={styles.editTitle}>EDITAR PRODUCTO</h2>
          <form id="editForm" onSubmit={handleSubmit}>
            <label htmlFor="productImage" className={styles.editLabel}>
              IMAGEN DEL PRODUCTO
            </label>
            <input
              id="productImage"
              name="image"
              type="file"
              required
              className={styles.editInputField}
            />

            <label htmlFor="productName" className={styles.editLabel}>
              NOMBRE DEL PRODUCTO
            </label>
            <input
              id="productName"
              name="name"
              type="text"
              placeholder="Nombre de producto"
              required
              className={styles.editInputField}
            />

            <label htmlFor="productDesc" className={styles.editLabel}>
              DESCRIPCIÓN
            </label>
            <input
              id="productDesc"
              name="description"
              type="text"
              placeholder="Descripción"
              required
              className={styles.editInputField}
            />

            <label htmlFor="productPrice" className={styles.editLabel}>
              PRECIO
            </label>
            <input
              id="productPrice"
              name="price"
              type="number"
              placeholder="Precio"
              required
              className={styles.editInputField}
            />

            <label htmlFor="productQty" className={styles.editLabel}>
              CANTIDAD
            </label>
            <input
              id="productQty"
              name="quantity"
              type="number"
              placeholder="Cantidad"
              required
              className={styles.editInputField}
            />

            <label htmlFor="productCategory" className={styles.editLabel}>
              CATEGORÍA
            </label>
            <select
              id="productCategory"
              name="category"
              required
              className={styles.editSelectField}
            >
              <option value="" disabled selected>
                — Selecciona una categoría —
              </option>
              <option value="electronica">Electrónica</option>
              <option value="ropa">Ropa</option>
              <option value="hogar">Hogar</option>
              <option value="deporte">Deporte</option>
              <option value="otros">Otros</option>
            </select>

            <div className={styles.editButtons}>
              <Link to="/perfil">
                <button type="button" className={styles.editActionButton}>
                  CANCELAR
                </button>
              </Link>
              <button type="submit" className={styles.editActionButton}>
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
