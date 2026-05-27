import Listado from "./componentes/listado";
import SeccionBotones from "./componentes/seccionBotones";
import Formulario from "./componentes/Formulario";

import React, { useState, useEffect } from 'react';

import "./App.css";

const tareasIniciales = [
  {
    nombre: "Tarea 1",
    descripcion: "Descripcion de la tarea 1",
    estado: 0,
    tipo:0,
    id: 1
  },
  {
    nombre: "Tarea 2",
    descripcion: "Descripcion de la tarea 2",
    estado: 1,
    tipo:1,
    id: 2
  },
  {
    nombre: "Tarea 3",
    descripcion: "Descripcion de la tarea 3",
    estado: 2,
    tipo:2,
    id: 3
  }
]

export default function App(){
  const [tareas, setTareas] = useState(tareasIniciales);
  const [seccionCrear, setSeccionCrear] = useState(true);

  const guardar = (newTarea) => {
    console.log("MEUVA TAREA;;",newTarea);
    let nuevasTareas = [...tareas];
    nuevasTareas.push(newTarea);
    console.log("despues del pusdddddddddddddddddddddsh",nuevasTareas);
    setTareas(nuevasTareas);
  }

  const cambiarEstado = (tareaCambiarId, newEstado) =>{
    console.log("idRecibido:", tareaCambiarId);
    const copiaTareas = tareas.map((tarea) =>
    tarea.id === tareaCambiarId
      ? { ...tarea, estado: newEstado }
      : tarea)
    console.log("copia:", copiaTareas)
    setTareas(copiaTareas);
  }

  const cambiarSeccion = () => {
    setSeccionCrear(!seccionCrear);
  } 

  useEffect(() => {
  console.log("estado actualizado:", tareas);
  }, [tareas]);

  if(seccionCrear){
    return (
    <div className="App">
      <h1 style={{color:"#fff"}}>Filtros</h1>
      <SeccionBotones mostrar={seccionCrear} f={cambiarSeccion} />
      <Listado tareas = {tareas} modificarEstado = {cambiarEstado}/>
    </div>
  )
  }else{
    return (
      <div className="App">
        <h1 style={{color:"#fff"}}>Crear tarea</h1>
        <SeccionBotones mostrar={seccionCrear} f={cambiarSeccion} />
        <Formulario guardar={guardar}/>
      </div>
    )
  }
}