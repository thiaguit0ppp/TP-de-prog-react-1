import { Router, Route, Switch } from "wouter";
import axios from "axios"

import Listado from "./componentes/listado";
import SeccionBotones from "./componentes/seccionBotones";
import Formulario from "./componentes/Formulario";
import Header from "./componentes/Header";
import Home from "./componentes/Home";
import NotFound from "./componentes/NotFound";
import Footer from "./componentes/Footer";

import React, { useState, useEffect } from 'react';

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
  const [ordenActivo, setOrdenActivo] = useState('default')

  useEffect(()=>{
    const url = 'https://api-tareas.ctpoba.edu.ar/api'
    axios
    .get(url)
      .then((resp)=>{
        console.log(resp)
      })
    .catch((e)=>{
      console.error(e);
    })
  }, [])

  const guardar = (newTarea) => {
    setTareas(prev => [...prev, newTarea]);
  }

  const filtrarTareas = (tipo) => {
    setFiltroActivo(tipo);
  }

  const ordernar = (direccion) => {
    setOrdenActivo(direccion);
  }

  return(
    <div className="App">
      <Header />
      <Router>
        <Switch>
          <Route path="/crear">
            <Formulario guardar={guardar}/>
          </Route>

          <Route path="/tareas">
            <SeccionBotones mostrar={seccionCrear} 
              filtro={filtrarTareas}
              ordenar={ordernar}
            />
            <Listado 
              filtro={filtroActivo}
              orden={ordenActivo}
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
}