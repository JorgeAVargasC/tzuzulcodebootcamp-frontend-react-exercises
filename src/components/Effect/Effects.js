import { useEffect, useState } from "react"
import Navegacion from "../Navegacion/Navegacion"
import "./Effects.css"

export default function Effects() {

	// Espacio para los hooks
	// const [change, setChange] = useState(false)	

	// useEffect(() => {
	// 	console.clear()
	// 	console.log('Componente renderizado')
	// }, [change])

	const [movies, setMovies] = useState([])

	useEffect(() => {
		fetch('http://gateway.marvel.com/v1/public/series?ts=1000&apikey=47c3899f8f90ab0ab219278594e36201&hash=1254ce32e767fa96d64accd9d27d5f36')
			.then(response => response.json())
			.then(myData => {
				setMovies(myData.data.results)
			})

	}, []) // Si se dejan las dependecnas vacias, se ejecuta una sola vez

	return (
		<>
			<Navegacion />
			<div className="container">
				<h2>Tarea - 5</h2>
				<h3>Consultar una API</h3>

				<div className="gridContainer">
					{movies.map(movie => (
						<a key={movie.id} href={movie.urls[0].url}>
							<div className="card">
								<img src={movie.thumbnail.path + '.' + movie.thumbnail.extension} alt={movie.title} />
								<p className="card-title">{movie.title}</p>
								<p className="card-text">{movie.startYear}</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</>
	)
}
