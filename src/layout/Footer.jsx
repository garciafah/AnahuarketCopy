// src/components/Footer.jsx

import React, { useEffect } from "react";
import "../assets/styles/global.css";

export default function Footer() {
  useEffect(() => {
    let myLandbot;
    function initLandbot() {
      if (!myLandbot) {
        const s = document.createElement("script");
        s.type = "module";
        s.async = true;
        s.addEventListener("load", () => {
          myLandbot = new Landbot.Livechat({
            configUrl:
              "https://storage.googleapis.com/landbot.online/v3/H-2933254-7JTXZ1ZLO6ESXSMS/index.json",
          });
        });
        s.src = "https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs";
        const x = document.getElementsByTagName("script")[0];
        x.parentNode.insertBefore(s, x);
      }
    }

    window.addEventListener("mouseover", initLandbot, { once: true });
    window.addEventListener("touchstart", initLandbot, { once: true });

    return () => {
      window.removeEventListener("mouseover", initLandbot);
      window.removeEventListener("touchstart", initLandbot);
    };
  }, []);

  return (
    <footer className= "footerFull">
      <div className="footerContent">
        {/* Anahuarket */}
        
        <div>
          <h3>Anahuarket</h3>
          <p>Todos los derechos reservados - Anahuarket</p>
        </div>

        {/* Contáctanos */}
        <div>
          <h3>
            <a href="contacto.html">Contáctanos</a>
          </h3>
          <p>
            <a href="contacto.html">Llama al 9988776644 para más información</a>
          </p>
        </div>

        {/* Aquí se carga tu chatbot */}
      </div>
    </footer>
  );
}
