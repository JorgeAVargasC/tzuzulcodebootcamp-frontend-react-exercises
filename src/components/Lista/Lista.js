import Navegacion from "../Navegacion/Navegacion";
import "./Lista.css";

const Lista = ({ alumnos }) => {

    return (
        <>
            <Navegacion />
            <div className="container">

                <h2>Lista de Alumnos</h2>
                <h3>Tarea - 1</h3>
                {
                    alumnos.map((alumno, index) => {
                        return (
                            <div key={alumno.id} className="card">
                                <p>{alumno.nombre}</p>
                                <p>{alumno.edad} años</p>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Lista;