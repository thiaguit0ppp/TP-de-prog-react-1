import Tareas from "./Tareas";

export default function Listado({ tareas, modificarEstado }) {
    return (
        <div className="Listado">
            {tareas.map(tarea => (
                <>
                    {console.log("tarea que renderizo: ",tarea.id)}
                    <Tareas
                        key={tarea.id}
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