import { useState } from "react";
import axios from "axios";

export default function Tareas({ nombre, descripcion, tipo, id,estadoInicial, prioridad, eliminar }) {
    const [estado, setEstado] = useState(estadoInicial);
    /*CON ESTE PARCER FUNCIOMNA Y NS PQ AYUDAAAAAAAA */
    estadoInicial = parseInt(estadoInicial);
    tipo = parseInt(tipo);
    prioridad = parseInt(prioridad);        

    const updateEstado = (nuevoEstado) =>{
        const url = `https://api-tareas.ctpoba.edu.ar/api/tareas/estado/${id}`;
        const config = {
            headers: { Authorization: '48354980' }
        }
        const tarea = {
            nombre: nombre,
            descripcion: descripcion,
            estado: nuevoEstado,
            tipo: tipo,
            prioridad: prioridad
        }

        axios.put(url, tarea, config)
        .then((resp)=>{
            console.log(resp)
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    const cambiarEstado = () => {
        let nuevoEstado = estado == 2 ? 0 : estado + 1;
        setEstado(nuevoEstado);
        updateEstado(nuevoEstado);
    }

    const getContenidoBoton = (dato) => {
        if (dato == "color") {
            switch (estado) {
                case 0:
                    return "white";
                case 1:
                    return "#FFBF4A";
                case 2:
                    return "#4FFA00";
            }
        }
        if (dato == "texto") {
            switch (estado) {
                case 0:
                    return "Pendiente";
                case 1:
                    return "En proceso";
                case 2:
                    return "Completada";
            }
        }
    }

    const getTipoTarea = () => {
        switch (tipo) {
            case 0:
                return "Casa";
            case 1:
                return "Patio";
            case 2:
                return "Trabajo";
            default:
                return "Error";
        }
    }

    const getPrioridad = () => {
        switch (prioridad) {
            case 1:
                return "Alta";
            case 2:
                return "Media";
            case 3:
                return "Baja";
            default:
                return "Sin prioridad";
        }
    }

    return (
        <div className="Tarea">
            <div className="TareaHeader">
                <h2>{nombre}</h2>
                <div className="TipoTarea">{getTipoTarea()}</div> {/* valor constante */}
            </div>

            <textarea readOnly cols="30" rows="10">{descripcion}</textarea>

            <div className="LineaSeparadora"></div>

            <div className="TareaPie">
                <div className="EstadoTarea">
                    <div className="Punto" style={{ backgroundColor: getContenidoBoton("color") }}></div>
                    <button style={{ color: getContenidoBoton("color") }} onClick={cambiarEstado}>
                        {getContenidoBoton("texto")}
                    </button>
                </div>

                <div className="Dias">{getPrioridad()}</div>
            </div>

            <button className="BotonEliminar" onClick={() => eliminar(id)}>
                Eliminar tarea
            </button>
        </div>
    )
}