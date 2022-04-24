import "./Lista.css";

const Lista =()=>{
    const alumnos = [
        {
            name:"Tzuzul",
            edad:23
        },
        {
            name:"Jorge",
            edad:22
        },
        {
            name:"Laura",
            edad:21
        },
    ]

    return(
        <div className="container">
            <h2>Lista de Alumnos</h2>
            <h3>Tarea - 1</h3>
            {
                alumnos.map((alumno,index)=>{
                    return(
                        <div key={index} className="card">
                            <p>{alumno.name}</p>
                            <p>{alumno.edad} años</p>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Lista;