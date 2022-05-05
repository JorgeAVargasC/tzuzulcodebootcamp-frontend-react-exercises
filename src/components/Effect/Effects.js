import { useEffect, useState } from "react"
import Navegacion from "../Navegacion/Navegacion"

export default function Effects() {

	// Espacio para los hooks
	// Reto buscar una api

	const [change, setChange] = useState(false)

	useEffect(() => {
		console.clear()
		console.log('Componente renderizado')
	}, [change])

	return (
		<>
			<Navegacion/>
			<div className="container">
				<h2>Effects</h2>
				<h3>Tarea - 5</h3>
				<button onClick={()=> {setChange(!change)}} className="btn"> Efecto</button>
			</div>
		</>
	)
}
