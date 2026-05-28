import Tareas from "./Tareas";

export default function Listado({ tareas, modificarEstado }) {
    console.log("tareas en listado: ", tareas);
    return (
        <div className="Listado">
            {tareas.map(tarea => (
                <>
                    {console.log("taredsadsdasdsaa que rendsadderizo: ",tarea.tipo)}
                    <Tareas
                        nombre={tarea.nombre}
                        descripcion={tarea.descripcion}
                        estadoInicial={parseInt(tarea.estado)}
                        tipo={tarea.tipo}
                        id={tarea.id}
                        modificarEstado={modificarEstado}
                    />
                </>
            ))}
        </div>
    )
}