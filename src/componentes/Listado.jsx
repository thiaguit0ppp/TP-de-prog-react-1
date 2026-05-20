import Tareas from "./Tareas";

export default function Listado({ tareas }){
    console.log(tareas);
    return (
        <div className="Listado">
            {tareas.map(tarea => (
                <Tareas
                    nombre = {tarea.nombre}
                    descripcion = {tarea.descripcion}
                    estadoInicial = {tarea.estado}
                />
            ))}
        </div>
    )
}