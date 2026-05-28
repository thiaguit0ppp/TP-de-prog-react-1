export default function SeccionBotones({mostrar, f, filtro, ordenar}) {

    return (
        <div className="SeccionBotones">
            <div className="Filtros">
                <button onClick={() => filtro(0)}>
                    <img src="/img/casa.png" alt="Casa" />
                    Casa
                </button>

                <button onClick={() => filtro(2)}>
                    <img src="/img/trabajo.png" alt="Trabajo" />
                    Trabajo
                </button>

                <button onClick={() => filtro(1)}>
                    <img src="/img/jardin.png" alt="Jardin" />
                    Patio
                </button>

                <button onClick={() => ordenar("mayor")}>
                    <img src="/img/ordenar.png" alt="Ordenar" />
                    Ordenar por ID (Mayor)
                </button>

                <button onClick={() => ordenar("menor")}>
                    <img src="/img/ordenar.png" alt="Ordenar" />
                    Ordenar por ID (Menor)
                </button>
            </div>

            {mostrar && <>
                <div 
                    className="LineaSeparadora"
                    style={{width: '50%'}}
                ></div>

                <div className="Creacion">
                    <button onClick={f}>
                        <img src="/img/crear.png" alt="Crear" />
                        Crear
                    </button>
                </div>
            </>}
            
        </div>
    )
}