import React from "react";
import "./../NotFound.css";

export default function NotFound() {
  return (
    <div className="notfound-container">
      <div className="notfound-content">
        <h1 className="notfound-code">404</h1>
        <h2 className="notfound-title">Página no encontrada</h2>
        <p className="notfound-text">
          La ruta que intentas acceder no existe o fue movida.
        </p>

        <a href="/" className="notfound-button">
          Volver al inicio
        </a>
      </div>
    </div>
  );
}