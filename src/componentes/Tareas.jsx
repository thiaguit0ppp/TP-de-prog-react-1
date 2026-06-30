import { useState } from "react";

export default function Tareas({ nombre, descripcion, tipo, estadoInicial, prioridad, id, modificarEstado }) {

    /*CON ESTE PARCER FUNCIOMNA Y NS PQ AYUDAAAAAAAA */
    estadoInicial = parseInt(estadoInicial);
    tipo = parseInt(tipo);
    prioridad = parseInt(prioridad);

    const cambiarEstado = () => {
        let nuevoEstado = estadoInicial == 2 ? 0 : estadoInicial + 1;
        modificarEstado(id, nuevoEstado);
    }

    const getContenidoBoton = (dato) => {
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
        </div>
    )
}