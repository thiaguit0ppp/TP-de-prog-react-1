export default function Formulario(){
    return (
        <div className="Formulario">
            <h2>Crear nueva tarea</h2>
            <input type="text" placeholder="Nombre de la tarea" />
            <textarea name="descripcion" id="descripcion" cols="30" rows="10" placeholder="Descripcion de la tarea"></textarea>
            <button>Crear</button>
        </div>
    )
}