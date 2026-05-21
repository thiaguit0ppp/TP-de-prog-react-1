import Listado from "./componentes/listado";
import SeccionBotones from "./componentes/seccionBotones";
import Formulario from "./componentes/Formulario";

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
  const [seccionCrear, setSeccionCrear] = useState(true);

  const cambiarSeccion = () => {
    setSeccionCrear(!seccionCrear);
  } 

  return (
    <div className="App">
      <h1 style={{color:"#fff"}}>Filtros</h1>
      <SeccionBotones mostrar={seccionCrear} f={cambiarSeccion} />
      {seccionCrear ? <Listado tareas = {tareas}/> : <Formulario />}
    </div>
  )
}