import Tareas from "./Tareas";
import axios from "axios";
import { useState, useEffect } from "react"

export default function Listado({ filtro, orden }) {
    const [tareas, setTareas] = useState([]);

    const actualizar = () => {
        let url = 'https://api-tareas.ctpoba.edu.ar/api/tareas';
        const config = {
            headers: { Authorization: "48354980" }
        };
        
        let multipleQuery = false;
        let query = '';
        if(filtro!='todos'){
            query = `?categoria=${filtro}`
        }
        
        url = url + query;
        console.log("url:"+url, "filtro:"+filtro);
        
        axios
        .get(url, config)
        .then((resp)=>{
            console.log(resp.data.tareas);
            let tareasFiltradas = ordenarTareas(resp.data.tareas, orden);
            console.log("Tareas filtradas: ", tareasFiltradas);
            setTareas(tareasFiltradas);
        })
        .catch((e)=>{
            console.error(e);
        })
    }

    const eliminar = (id) => {
        const url = `https://api-tareas.ctpoba.edu.ar/api/tareas/${id}`;
        const config = {
            headers: { Authorization: "48354980" }
        };

        axios
        .delete(url, config)
        .then((resp)=>{
            console.log(resp);
            let tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
            setTareas(tareasActualizadas);
        })
        .catch((e)=>{
            console.error(e);
        })
    }

    const ordenarTareas = (tareas, orden) => {
        if(orden == 'default'){
            return tareas;  
        }
        if(orden == 'ASC'){
            return [...tareas].sort((a, b) => a.prioridad - b.prioridad);
        }
        if(orden == 'DESC'){
            return [...tareas].sort((a, b) => b.prioridad - a.prioridad);
        }
    }

    useEffect(()=>{
        console.log("Se solicitan tareas:")
        actualizar();
        console.log("Se solicitan tareas con filtro: "+filtro+" y orden: "+orden);
        console.log(tareas);
    }
    ,[filtro])

    useEffect(()=>{
        console.log("Se ordenan tareas: "+orden);
        let tareasOrdenadas = ordenarTareas(tareas, orden);
        setTareas(tareasOrdenadas);
    }
    ,[orden])

    return (
        <div className="Listado">
            {tareas.map(tarea => (
                <Tareas
                    key={tarea.id}
                    id={tarea.id}
                    nombre={tarea.nombre}
                    descripcion={tarea.descripcion}
                    estadoInicial={parseInt(tarea.estado)}
                    tipo={tarea.categoria}
                    prioridad={tarea.prioridad}
                    eliminar={eliminar}
                />
            ))}
        </div>
    )
}