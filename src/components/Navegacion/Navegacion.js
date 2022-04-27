import React from 'react'
import { Link } from 'react-router-dom'
import './Navegacion.css'

const Navegacion = () => {
	return (
		<div className='navbar'>
			<h2>JV</h2>
			<nav>				
				<Link to="/lista" className='links'>Lista</Link>
				<Link to="/tabla" className='links'>Tabla</Link>
			</nav>
		</div>
	)
}

export default Navegacion