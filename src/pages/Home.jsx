import Footer from "../layout/Footer";
import Header from "../layout/Header";
import "../assets/styles/home.css";

function Home() {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <section className="products-grid">
          <a href="productoajeno.html">
            <article className="product-card">
              <div className="product-image">
                <img src="images/iphone13.png" alt="iPhone 13" />
              </div>
              <div className="product-info">
                <p className="seller">Pepito Castillo Beckham</p>
                <h2 className="product-title">iPhone 13</h2>
                <p className="price">$7,500.00</p>
              </div>
            </article>
          </a>
          <article className="product-card">
            <div className="product-image">
              <img src="images/boxers.png" alt="Boxers semi-nuevos" />
            </div>
            <div className="product-info">
              <p className="seller">Ermenegildo Zegna</p>
              <h2 className="product-title">Boxers semi-nuevos</h2>
              <p className="price">$7,500.00</p>
            </div>
          </article>
          <article className="product-card">
            <div className="product-image">
              <img src="images/nissanMarch.png" alt="Nissan March" />
            </div>
            <div className="product-info">
              <p className="seller">Benjardin Barona</p>
              <h2 className="product-title">Nissan March</h2>
              <p className="price">$90,000.00</p>
            </div>
          </article>
          <article className="product-card">
            <div className="product-image">
              <img src="images/correa.png" alt="Correa para perros" />
            </div>
            <div className="product-info">
              <p className="seller">Karla Camacho</p>
              <h2 className="product-title">Correa para perros</h2>
              <p className="price">$7,500.00</p>
            </div>
          </article>
          <article className="product-card">
            <div className="product-image">
              <img src="images/parrilla.png" alt="Parrilla para asados" />
            </div>
            <div className="product-info">
              <p className="seller">RobiGrill</p>
              <h2 className="product-title">Parrilla para asados</h2>
              <p className="price">$7,500.00</p>
            </div>
          </article>
          <article className="product-card">
            <div className="product-image">
              <img src="images/plumones.png" alt="Plumones" />
            </div>
            <div className="product-info">
              <p className="seller">Panchisco</p>
              <h2 className="product-title">Plumones</h2>
              <p className="price">$7,500.00</p>
            </div>
          </article>
        </section>
      </main>

      <Footer />
    </div>
  );
}
export default Home;
