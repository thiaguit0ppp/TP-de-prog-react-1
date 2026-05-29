export default function SeccionBotones({mostrar, f, filtro, ordenar}) {

    return (
        <div className="SeccionBotones">
            <div className="Filtros">
                <button onClick={() => filtro(0)}>
                    <img src="../../public/casa.png" alt="Casa" />
                    Casa
                </button>

                <button onClick={() => filtro(2)}>
                    <img src="../../public/trabajo.png" alt="Trabajo" />
                    Trabajo
                </button>

                <button onClick={() => filtro(1)}>
                    <img src="../../public/jardin.png" alt="Jardin" />
                    Patio
                </button>

                <button onClick={() => filtro("todos")}>
                    <img src="../../public/todas.png" alt="Todas" />
                    Todas
                </button>

                <button onClick={() => ordenar("mayor")}>
                    <img src="../../public/flechaAbajo.png" alt="Ordenar" />
                    Mas viejo
                </button>

                <button onClick={() => ordenar("menor")}>
                    <img src="../../public/flechaArriba.png" alt="Ordenar" />
                    Mas nuevo
                </button>
            </div>

            {mostrar && <>
                <div 
                    className="LineaSeparadora"
                    style={{width: '50%'}}
                ></div>

                <div className="Creacion">
                    <button onClick={f}>
                        <img src="../../public/new.png" alt="Crear" />
                        Crear
                    </button>
                </div>
            </>}
            
        </div>
    )
}