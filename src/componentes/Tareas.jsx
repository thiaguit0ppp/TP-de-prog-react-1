import { useState } from "react";

export default function Tareas({ nombre, descripcion, tipo, estadoInicial, id, modificarEstado }) {
    let [prioridad, setPrioridad] = useState(0);
    /*CON ESTE PARCER FUNCIOMNA Y NS PQ AYUDAAAAAAAA */
    estadoInicial = parseInt(estadoInicial);
    console.log("estado inicial parseado:", estadoInicial, " tipo: ", tipo);
    tipo = parseInt(tipo);
    
    const cambiarEstado = () => {
        let nuevoEstado = estadoInicial == 2 ? 0 : estadoInicial + 1;
        console.log("nuevo estado;", nuevoEstado);
        console.log("id e cambiar estado cuando la llamo ", id);
        modificarEstado(id, nuevoEstado);
    }

    const getContenidoBoton = (dato) => {
        console.log("hola", dato, "+", estadoInicial)
        if (dato == "color") {
            switch (estadoInicial) {
                case 0:
                    return "white";
                case 1:
                    return "#FFBF4A";
                case 2:
                    return "#4FFA00";
            }
        }
        if (dato == "texto") {
            switch (estadoInicial) {
                case 0:
                    return "Pendiente";
                case 1:
                    return "En proceso";
                case 2:
                    return "Completada";
            }
        }
        console.error("dato no reconocido:", dato, " estado: ", typeof estadoInicial, estadoInicial);
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
                <div className="Dias">3 dias</div>
            </div>
        </div>
    )
}