import { useContext } from "react";

import Lista from "./components/Lista/Lista";
import Tabla from "./components/Tabla/Tabla";
import Estado from "./components/Estado/Estado";
import Effects from "./components/Effect/Effects";
import References from "./components/References/References";
import Context from "./components/Context/Context";

import { themeContext } from "./components/Context/Theme";

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
		},
		{
			id: "al-06",
			nombre: "Juan",
			edad: "20",
			calificaciones: [4, 8, 7, 6]
		},
		{
			id: "al-06",
			nombre: "Juan",
			edad: "20",
			calificaciones: [4, 8, 7, 6]
		},
		{
			id: "al-06",
			nombre: "Juan",
			edad: "20",
			calificaciones: [4, 8, 7, 6]
		},
		{
			id: "al-06",
			nombre: "Juan",
			edad: "20",
			calificaciones: [4, 8, 7, 6]
		},
		{
			id: "al-06",
			nombre: "Juan",
			edad: "20",
			calificaciones: [4, 8, 7, 6]
		},
		{
			id: "al-06",
			nombre: "Juan",
			edad: "20",
			calificaciones: [4, 8, 7, 6]
		},
		{
			id: "al-06",
			nombre: "Juan",
			edad: "20",
			calificaciones: [4, 8, 7, 6]
		},
		{
			id: "al-06",
			nombre: "Juan",
			edad: "20",
			calificaciones: [4, 8, 7, 6]
		},
		{
			id: "al-06",
			nombre: "Juan",
			edad: "20",
			calificaciones: [4, 8, 7, 6]
		},
		{
			id: "al-06",
			nombre: "Juan",
			edad: "20",
			calificaciones: [4, 8, 7, 6]
		},
		{
			id: "al-06",
			nombre: "Juan",
			edad: "20",
			calificaciones: [4, 8, 7, 6]
		},
	]

	const { theme, toggleTheme } = useContext(themeContext);

	return (
		<div className={theme === 'light' ? 'App light-mode':'App dark-mode'}>
			<Router>
				<Routes>
					<Route path="/" element={<Lista alumnos={alumnos} />} />
					<Route path="/lista" element={<Lista alumnos={alumnos} />} />
					<Route path="/tabla" element={<Tabla alumnos={alumnos} />} />
					<Route path="/estado" element={<Estado />} />
					<Route path="/effects" element={<Effects />} />
					<Route path="/references" element={<References />} />
					<Route path="/context" element={<Context/>}/>
				</Routes>
			</Router>
		</div>

	);
}

export default App;
