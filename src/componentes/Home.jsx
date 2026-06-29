import React from "react";
import "./../Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1 className="home-title">App de tareas</h1>
        <p className="home-subtitle">
          Organiza, prioriza y consulta tus tareas de forma rapida y sencilla.
        </p>
      </header>

      <section className="home-features">
        <div className="feature-card">
          <h3>Crear tareas</h3>
          <p>Define nuevas tareas con detalles claros y fechas límite.</p>
        </div>

        <div className="feature-card">
          <h3>Filtrar</h3>
          <p>Encuentra tareas por estado, prioridad o categoría.</p>
        </div>

        <div className="feature-card">
          <h3>Ordenar</h3>
          <p>Visualiza tus tareas según fechas o importancia.</p>
        </div>
      </section>

      <footer className="home-footer">
        <p>© 2026 Task Manager</p>
      </footer>
    </div>
  );
}