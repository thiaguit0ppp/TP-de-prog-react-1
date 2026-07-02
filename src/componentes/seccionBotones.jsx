export default function SeccionBotones({mostrar, filtro, ordenar}) {

    return (
        <div className="SeccionBotones">
            <div className="Filtros">
                <button onClick={() => filtro(0)}>
                    <img src="../../casa.png" alt="Casa" />
                    Casa
                </button>

                <button onClick={() => filtro(2)}>
                    <img src="../../trabajo.png" alt="Trabajo" />
                    Trabajo
                </button>

                <button onClick={() => filtro(1)}>
                    <img src="../../jardin.png" alt="Jardin" />
                    Patio
                </button>

                <button onClick={() => filtro("todos")}>
                    <img src="../../todas.png" alt="Todas" />
                    Todas
                </button>

                <button onClick={() => ordenar("DESC")}>
                    <img src="../../flechaAbajo.png" alt="Ordenar" />
                    Menos importantes
                </button>

                <button onClick={() => ordenar("ASC")}>
                    <img src="../../flechaArriba.png" alt="Ordenar" />
                    Mas importantes
                </button>
            </div>

            
                <div 
                    className="LineaSeparadora"
                    style={{width: '50%'}}
                ></div>

                {/* <div className="Creacion">
                    <button onClick={f}>
                        <img src="../../public/new.png" alt="Crear" />
                        Crear
                    </button>
                </div> */}
        </div>
    )
}