import Listado from "./componentes/listado";
import SeccionBotones from "./componentes/seccionBotones";

import { useState } from "react";

import "./App.css";

const tareasIniciales = [
  {
    nombre: "Tarea 1",
    descripcion: "Descripcion de la tarea 1",
    estado: 0,
  },
  {
    nombre: "Tarea 2",
    descripcion: "Descripcion de la tarea 2",
    estado: 1,
  },
  {
    nombre: "Tarea 3",
    descripcion: "Descripcion de la tarea 3",
    estado: 2,
  }
]

export default function App(){
  const [tareas, setTareas] = useState(tareasIniciales);

  return (
    <div className="App">
      <h1 style={{color:"#fff"}}>Filtros</h1>
      <SeccionBotones />
      <Listado 
        tareas = {tareas}
      />
    </div>
  )
}