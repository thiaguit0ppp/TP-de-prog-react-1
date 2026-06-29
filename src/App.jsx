import { Router, Route, Switch } from "wouter";

import Listado from "./componentes/listado";
import SeccionBotones from "./componentes/seccionBotones";
import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";
import Home from "./componentes/Home";
import NotFound from "./componentes/NotFound";
import Footer from "./componentes/Footer";

import React, { useState } from 'react';

import "./App.css";

const tareasIniciales = [
  {
    nombre: "Tarea 1",
    descripcion: "Descripcion de la tarea 1",
    estado: 0,
    tipo: 0,
    id: 1,
    fecha: "2024-06-30"
  },
  {
    nombre: "Tarea 2",
    descripcion: "Descripcion de la tarea 2",
    estado: 1,
    tipo: 1,
    id: 2,
    fecha: "2024-07-05"
  },
  {
    nombre: "Tarea 3",
    descripcion: "Descripcion de la tarea 3",
    estado: 2,
    tipo: 2,
    id: 3,
    fecha: "2024-07-10"
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

  const ordernar = (direccion) => {
    const ordenadas = [...tareas].sort((a, b) => {
      if (direccion === "mayor") {
        if (a.id < b.id) return -1;
        if (a.id > b.id) return 1;
        return 0;
      } else {
        if (a.id > b.id) return -1;
        if (a.id < b.id) return 1;
        return 0;
      }
    });
    setTareas(ordenadas);
  }

  const tareasFiltradas = tareas.filter(t => {
    if (filtroActivo === "todos") return true;
    return t.tipo == Number(filtroActivo);
  });

  return(
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/crear">
            <Formulario cambiarSeccion={cambiarSeccion} guardar={guardar}/>
          </Route>

          <Route path="/tareas">
            <SeccionBotones mostrar={seccionCrear} 
              f={cambiarSeccion} 
              filtro={filtrarTareas}
              ordenar={ordernar}
            />
            <Listado 
              tareas={tareasFiltradas} 
              modificarEstado={cambiarEstado}
            />
          </Route>
          
          <Route path="/">
            <Home />
          </Route>

          <Route>
            <NotFound />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </div>
  );

  if(seccionCrear){
    return (
      <div className="App">

        <SeccionBotones 
          mostrar={seccionCrear} 
          f={cambiarSeccion} 
          filtro={filtrarTareas}
          ordenar={ordernar}
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