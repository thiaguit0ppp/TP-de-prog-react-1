import { React } from "react";
import { Link } from "wouter";
import "./../Header.css";

export default function Header() {
    return (
        <div className="Header">
            <Link className="Opcion" href="/">Inicio</Link>
            <Link className="Opcion" href="/tareas">Tareas</Link>
            <Link className="Opcion" href="/crear">Crear</Link>
        </div>
    );
}