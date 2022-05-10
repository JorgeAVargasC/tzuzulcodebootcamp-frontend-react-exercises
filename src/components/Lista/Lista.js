import Navegacion from "../Navegacion/Navegacion";
import "./Lista.css";

const Lista = ({ alumnos }) => {

    return (
        <>
            <Navegacion />
            <div className="container">

                <h2>Lista de Alumnos</h2>
                <h3>Tarea - 1</h3>

                <div className="gridContainer">
                    {alumnos.map((alumno) => {
                        return (
                            <div key={alumno.id} className="card">
                                <p>{alumno.nombre}</p>
                                <p>{alumno.edad} años</p>
                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}

export default Lista;