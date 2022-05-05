import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {Spin as Hamburger} from 'hamburger-react'
import './Navegacion.css'

const Navegacion = () => {

	// Dlecaración de la variable de estado
	const [navBarOpen, setNavBarOpen] = useState(false)

	return (
		<div className='navbar'>
			<div className='navbar-content'>
				<h2>JV</h2>
				<nav className={navBarOpen ? 'navlinks-mobile' : 'navlinks'} onClick={() => setNavBarOpen(false)}>
					{navBarOpen ? <h2>Menu</h2> : null}
					{navBarOpen ? <h3>Tarea - 4</h3> : null}

					<NavLink to="/lista" className='links' >Lista</NavLink>
					<NavLink to="/tabla" className='links' >Tabla</NavLink>
					<NavLink to="/estado" className='links' >Estado</NavLink>
					<NavLink to="/effects" className='links' >Effect</NavLink>
				</nav>
				<Hamburger
                    rounded
                    toggled={navBarOpen}   // false -> hamburger , true -> cross
                    toggle={setNavBarOpen} // setNavBarOpen(navBarOpen => !navBarOpen)
                    direction='left'
                    duration={0.6}
                />
			</div>
		</div>
	)
}

export default Navegacion