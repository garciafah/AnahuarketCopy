


export default function ProductoAjeno() {
  return (
    <>
        <div className="nombreUsuario">
          <h2>Pepito Castillo Beckham</h2>
          <h3>Numero de telofono</h3>
        </div>
        <div className="producto">
          <div className="galeria">
            <div className="miniaturas">
              <img
                src="images/iphone13.png"
                alt="Miniatura 1"
                className="miniatura"
                onclick="cambiarImagen(this)"
              />
              <img
                src="images/iphone.jpg"
                alt="Miniatura 2"
                className="miniatura"
                onclick="cambiarImagen(this)"
              />
              <img
                src="images/iphone2.jpg"
                alt="Miniatura 3"
                className="miniatura"
                onclick="cambiarImagen(this)"
              />
            </div>
            <div className="imagenProducto">
              <img
                id="imagenPrincipal"
                src="images/images.jpg"
                alt="iPhone 13"
              />
            </div>
          </div>
          <div className="infoProducto">
            <h3>Iphone 13 - 7,500 $</h3>
            <p className="descripcion">
              iPhone 13, 128gb, Libre de fábrica , Batería 85% . Acepto efectivo
              o transferencia, mándame mensaje para coordinarnos.
            </p>
            <h5 className="stock">Stock: 1</h5>
          </div>
          
        </div>
    </>
  );
}
