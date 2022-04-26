import Lista from "./components/Lista/Lista";
import Tabla from "./components/Tabla/Tabla";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Lista />} />
				<Route path="/lista" element={<Lista />} />
				<Route path="/tabla" element={<Tabla />} />
			</Routes>
		</Router>
	);
}

export default App;
