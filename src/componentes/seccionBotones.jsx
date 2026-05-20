export default function SeccionBotones(){
    return (
        <div className="SeccionBotones">
            <div className="Filtros">
                <button>
                    <img src="/img/casa.png" alt="Casa" />
                    Casa</button>
                <button>
                    <img src="/img/trabajo.png" alt="Trabajo" />
                    Trabajo</button>
                <button>
                    <img src="/img/jardin.png" alt="Jardin" />
                    Jardin</button>
                <button>
                    <img src="/img/todos.png" alt="Todos" />
                    Todos</button>
            </div>
            <div className="LineaSeparadora"
                style={{width: '50%'}}
            ></div>
            <div className="Creacion">
                <button>
                    <img src="/img/crear.png" alt="Crear" />
                    Crear</button>
            </div>
        </div>
    )
}