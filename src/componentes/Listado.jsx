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
            query += `?categoria=${filtro}`
            multipleQuery = true;
        }
        if(orden!='default'){
            query += multipleQuery ? `&?orden=${orden}` : `?orden=${orden}`;
        }
        url = url + query;
        console.log("url:"+url, "filtro:"+filtro, "orden:"+orden);
        
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
    ,[filtro, orden])

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
                />
            ))}
        </div>
    )
}