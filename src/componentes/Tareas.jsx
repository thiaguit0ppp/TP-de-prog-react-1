import { useState } from "react";

export default function Tareas(){
    let [estado, setEstado] = useState(0);
    let [prioridad, setPrioridad] = useState(0);

    const cambiarEstado = () => {
        console.log(estado);
        let nuevoEstado = estado==2 ? 0 : estado+1;
        setEstado(nuevoEstado);
    }

    const getContenidoBoton = (dato) => {
        if (dato == "color"){
            switch (estado){
                    case 0:
                    return "white";
                case 1:
                    return "#FFBF4A";
                case 2:
                    return "#4FFA00"; 
            }
        }
        if(dato == "texto"){
            switch (estado){
                case 0:
                    return "Pendiente";
                case 1:
                    return "En proceso";
                case 2:
                    return "Completada"; 
            }
        }
        console.error("dato no reconocido");
    }

   

    return (
        <div className="Tarea">
            <h2>Tarea</h2>
            <textarea name="tarea" id="tarea" cols="30" rows="10">Descripcionnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnnn</textarea>
            <div className="TareaPie">
                <div className="EstadoTarea">
                    <div className="Punto" style={{ backgroundColor: getContenidoBoton("color") }}></div>
                    <button style={{color: getContenidoBoton("color")}}onClick={cambiarEstado}>{getContenidoBoton("texto")}</button>
                </div>
                <div className="Dias">3 dias</div>
            </div>
        </div>
    )
}