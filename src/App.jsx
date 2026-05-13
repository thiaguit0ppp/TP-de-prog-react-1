import Listado from "./componentes/listado";
import SeccionBotones from "./componentes/seccionBotones";

import "./App.css";

export default function App(){
  return (
    <div className="App">
      <h1 style={{color:"#fff"}}>Filtros</h1>
      <SeccionBotones />
      <Listado />
    </div>
  )
}