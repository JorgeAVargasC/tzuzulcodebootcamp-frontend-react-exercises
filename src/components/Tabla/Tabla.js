import Navegacion from "../Navegacion/Navegacion";
import "./Tabla.css";

const Tabla = ({ alumnos }) => {

    return (
        <>
            <Navegacion />
            <div className="container">
                <h2>Tabla de Calificaciones</h2>
                <h3>Tarea - 2</h3>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Git</th>
                            <th>React</th>
                            <th>Cloud</th>
                            <th>Python</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alumnos.map((alumno) => {
                                return (
                                    <tr key={alumno.id}>
                                        <td>{alumno.nombre}</td>
                                        {
                                            alumno.calificaciones.map((calificacion, index) => {
                                                return (
                                                    <td key={index}>{calificacion}</td>
                                                )
                                            })
                                        }
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                    <tfoot>
                        <tr>
                            <th>Nombre</th>
                            <th>Git</th>
                            <th>React</th>
                            <th>Cloud</th>
                            <th>Python</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </>
    )
}

export default Tabla;