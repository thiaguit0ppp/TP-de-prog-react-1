import Tareas from "./Tareas";
import axios from "axios";
import { useState, useEffect } from "react"

export default function Listado({ modificarEstado }) {
    const [tareas, setTareas] = useState([]);

    const actualizar = () => {
        const url = 'https://api-tareas.ctpoba.edu.ar/api/tareas';
        const config = {
            headers: { Authorization: "48354980" }
        };

        axios
        .get(url, config)
        .then((resp)=>{
            console.log(resp.data.tareas);
            setTareas(resp.data.tareas)
        })
        .catch((e)=>{
            console.error(e);
        })
    }

    useEffect(()=>{
        console.log("Se solicitan tareas:")
        actualizar();
        console.log(tareas);
    }
    ,[])
    return (
        <div className="Listado">
            {tareas.map(tarea => (
                <Tareas
                    nombre={tarea.nombre}
                    descripcion={tarea.descripcion}
                    estadoInicial={parseInt(tarea.estado)}
                    tipo={tarea.categoria}
                    prioridad={tarea.prioridad}
                    id = {tarea.id}
                    modificarEstado={modificarEstado}
                />
            ))}
        </div>
    )
}