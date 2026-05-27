import { useState } from "react";

export default function Formulario({ guardar }) {
    const [nombre, setNombre] = useState("");
    const [estado, setEstado] = useState(0);
    const [descripcion, setDescripcion] = useState("");
    const [fecha, setFecha] = useState("");

    const handlerSubmit = (e) => {
        e.preventDefault();

        let tarea = {
            nombre: nombre,
            descripcion: descripcion,
            estado: estado,
            fecha: fecha,
            id: (new Date()).getTime()
        }

        console.log(tarea)
        guardar(tarea);
    }

    return (
        <div className="Formulario">
            <h2>Crear nueva tarea</h2>
            <form onSubmit={handlerSubmit}>
                <input required
                    type="text"
                    placeholder="Nombre de la tarea"
                    onChange={(e) => setNombre(e.target.value)}
                    value={nombre}
                />

                <textarea required
                    cols="30"
                    rows="10"
                    placeholder="Descripcion de la tarea"
                    onChange={(e) => setDescripcion(e.target.value)}
                    value={descripcion}
                ></textarea>

                <select
                    required
                    onChange={(e) => setEstado(e.target.value)}
                    value={estado}
                >
                    <option>Estado de la tarea</option>
                    <option value="0">Pendiente</option>
                    <option value="1">En proceso</option>
                    <option value="2">Finalizada</option>
                </select>

                <select name="tipo">
                    <option value="">Seleccionar tipo</option>
                    <option value="casa">Casa</option>
                    <option value="patio">Patio</option>
                    <option value="trabajo">Trabajo</option>
                </select>

                <div className="botones">
                    <input
                        required
                        type="date"
                        onChange={(e) => setFecha(e.target.value)}
                        value={fecha}
                    />
                    <button type="submit">Crear</button>
                </div>
            </form>
        </div>
    )
}