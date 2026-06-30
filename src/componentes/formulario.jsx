import { useState } from "react";
import axios from "axios";

export default function Formulario({ cambiarSeccion, guardar }) {
    const [nombre, setNombre] = useState("");
    const [estado, setEstado] = useState(0);
    const [descripcion, setDescripcion] = useState("");
    const [tipo, setTipo] = useState("");
    const [prioridad, setPrioridad] = useState("");

    const handlerSubmit = (e) => {
        e.preventDefault();

        let tarea = {
            nombre: nombre,
            descripcion: descripcion,
            estado: estado,
            categoria: tipo,
            prioridad: prioridad
        }

        const url = 'https://api-tareas.ctpoba.edu.ar/api/tareas'
        const config = {
            headers: { Authorization: '48354980' }
        }

        axios
        .post(url, tarea, config)
            .then((resp)=>{
                console.log( resp.data)
            })
            .catch((e)=>{
                console.log(e);
            })
    }

    return (
        <div className="Formulario">
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

                <select
                    required
                    onChange={(e) => setTipo(e.target.value)}
                    value={tipo}
                >
                    <option>Seleccionar tipo</option>
                    <option value="0">Casa</option>
                    <option value="1">Patio</option>
                    <option value="2">Trabajo</option>
                </select>

                <div className="botones">
                    <select
                        required
                        onChange={(e) => setPrioridad(e.target.value)}
                        value={prioridad}
                    >
                        <option value="">Seleccionar prioridad</option>
                        <option value="1">Alta</option>
                        <option value="2">Media</option>
                        <option value="3">Baja</option>
                    </select>

                    <button
                        type="button"
                        className="cerrar"
                        style={{ backgroundColor: "#a83232", color: "#ffffff" }}
                        onClick={cambiarSeccion}
                    >
                        Cerrar
                    </button>

                    <button type="submit">Crear</button>
                </div>
            </form>
        </div>
    )
}