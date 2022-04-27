import Lista from "./components/Lista/Lista";
import Tabla from "./components/Tabla/Tabla";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {

	const alumnos = [
		{
			id: "al-01",
			nombre: "Tzuzul",
			edad: "23",
			calificaciones: [10, 10, 10, 10]
		},
		{
			id: "al-02",
			nombre: "Jorge",
			edad: "22",
			calificaciones: [8, 7.5, 9, 10]
		},
		{
			id: "al-03",
			nombre: "Laura",
			edad: "21",
			calificaciones: [9, 10, 9, 10]
		},
		{
			id: "al-04",
			nombre: "Juan",
			edad: "20",
			calificaciones: [4, 8, 7, 6]
		},
		{
			id: "al-05",
			nombre: "Pedro",
			edad: "19",
			calificaciones: [7, 2, 9, 5]
		}
	]

	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Lista alumnos={alumnos} />} />
					<Route path="/lista" element={<Lista alumnos={alumnos} />} />
					<Route path="/tabla" element={<Tabla alumnos={alumnos} />} />
				</Routes>
			</Router>
		</div>

	);
}

export default App;
