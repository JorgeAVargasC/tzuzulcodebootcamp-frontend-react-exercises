import "./Tabla.css";

const Tabla = () => {
    const alumnos = [
        {
            nombre: "Tzuzul",
            calificaciones: [10, 10, 10, 10]
        },
        {
            nombre: "Jorge",
            calificaciones: [8, 7.5, 9, 10]
        },
        {
            nombre: "Laura",
            calificaciones: [9, 10, 9, 10]
        },
        {
            nombre: "Juan",
            calificaciones: [5, 3, 6, 6]
        }
    ]

    return (
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
                        alumnos.map((alumno, index) => {
                            return (
                                <tr key={index}>
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
    )
}

export default Tabla;