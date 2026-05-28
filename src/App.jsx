import Listado from "./componentes/listado";
import SeccionBotones from "./componentes/seccionBotones";
import Formulario from "./componentes/Formulario";

import React, { useState } from 'react';

import "./App.css";

const tareasIniciales = [
  {
    nombre: "Tarea 1",
    descripcion: "Descripcion de la tarea 1",
    estado: 0,
    tipo: 0,
    id: 1
  },
  {
    nombre: "Tarea 2",
    descripcion: "Descripcion de la tarea 2",
    estado: 1,
    tipo: 1,
    id: 2
  },
  {
    nombre: "Tarea 3",
    descripcion: "Descripcion de la tarea 3",
    estado: 2,
    tipo: 2,
    id: 3
  }
];

export default function App(){
  const [tareas, setTareas] = useState(tareasIniciales);
  const [seccionCrear, setSeccionCrear] = useState(true);
  const [filtroActivo, setFiltroActivo] = useState("todos");

  const guardar = (newTarea) => {
    setTareas(prev => [...prev, newTarea]);
  }

  const cambiarEstado = (tareaCambiarId, newEstado) =>{
    const actualizadas = tareas.map((tarea) =>
      tarea.id === tareaCambiarId
        ? { ...tarea, estado: newEstado }
        : tarea
    );
    setTareas(actualizadas);
  }

  const cambiarSeccion = () => {
    setSeccionCrear(!seccionCrear);
  } 

  const filtrarTareas = (tipo) => {
    setFiltroActivo(tipo);
  }

  // 🔑 FILTRO DERIVADO (esto reemplaza tu lógica rota)
  const tareasFiltradas = tareas.filter(t => {
    if (filtroActivo === "todos") return true;
    console.log("tarea tipo:", t.tipo, " filtroActivo: ", filtroActivo, " tipo filtroActivo: ", typeof filtroActivo);
    return t.tipo == Number(filtroActivo);
  });

  if(seccionCrear){
    return (
      <div className="App">
        <h1 style={{color:"#fff"}}>Filtros</h1>

        <SeccionBotones 
          mostrar={seccionCrear} 
          f={cambiarSeccion} 
          filtro={filtrarTareas}
        />

        <Listado 
          tareas={tareasFiltradas} 
          modificarEstado={cambiarEstado}
        />
      </div>
    )
  }else{
    return (
      <div className="App">
        <h1 style={{color:"#fff"}}>Crear tarea</h1>
        <Formulario cambiarSeccion={cambiarSeccion} guardar={guardar}/>
      </div>
    )
  }
}