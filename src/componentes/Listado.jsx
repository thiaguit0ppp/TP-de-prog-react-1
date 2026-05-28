import Tareas from "./Tareas";

export default function Listado({ tareas, modificarEstado }) {
    return (
        <div className="Listado">
            {tareas.map(tarea => (
                <Tareas
                    nombre={tarea.nombre}
                    descripcion={tarea.descripcion}
                    estadoInicial={parseInt(tarea.estado)}
                    tipo={tarea.tipo}
                    id={tarea.id}
                    fecha={tarea.fecha}
                    modificarEstado={modificarEstado}
                />
            ))}
        </div>
    )
}