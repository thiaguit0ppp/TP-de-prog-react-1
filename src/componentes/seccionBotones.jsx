export default function SeccionBotones({mostrar, f }){
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
                <button onClick={!mostrar ? f : undefined}>
                    <img src="/img/todos.png" alt="Todos" />
                    Todos</button>
            </div>
            {mostrar && <>
                <div className="LineaSeparadora"
                style={{width: '50%'}}
            ></div>
            <div className="Creacion">
                <button onClick={f}>
                    <img src="/img/crear.png" alt="Crear" />
                    Crear</button>
            </div>
            </>}
            
        </div>
    )
}