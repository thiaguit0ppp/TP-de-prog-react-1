export default function Formulario(){
    return (
        <div className="Formulario">
            <h2>Crear nueva tarea</h2>
            <form>
                <input required type="text" placeholder="Nombre de la tarea" />
                <textarea required name="descripcion" id="descripcion" cols="30" rows="10" placeholder="Descripcion de la tarea"></textarea>
                <div className="botones">
                    <input required type="date" name="" id="" />
                    <button type="submit">Crear</button>
                </div>
            </form>
        </div>
    )
}