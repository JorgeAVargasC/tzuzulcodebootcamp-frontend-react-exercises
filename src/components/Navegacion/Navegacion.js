import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navegacion.css'

const Navegacion = () => {
	return (
		<div className='navbar'>
			<div className='navbar-content'>
				<h2>JV</h2>
				<nav>
					<NavLink to="/lista" className='links' >Lista</NavLink>
					<NavLink to="/tabla" className='links' >Tabla</NavLink>
					<NavLink to="/estado" className='links' >Estado</NavLink>
				</nav>
			</div>
		</div>
	)
}

export default Navegacion