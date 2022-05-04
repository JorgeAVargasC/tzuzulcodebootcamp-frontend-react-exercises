import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import {Spin as Hamburger} from 'hamburger-react'
import './Navegacion.css'

const Navegacion = () => {

	const [open, setOpen] = useState(false)

	return (
		<div className='navbar'>
			<div className='navbar-content'>
				<h2>JV</h2>
				<nav className={open ? 'navlinks-mobile' : 'navlinks'} onClick={() => setOpen(false)}>
					<NavLink to="/lista" className='links' >Lista</NavLink>
					<NavLink to="/tabla" className='links' >Tabla</NavLink>
					<NavLink to="/estado" className='links' >Estado</NavLink>
				</nav>
				<Hamburger
                    rounded
                    toggled={open}
                    toggle={setOpen}
                    direction='left'
                    duration={0.6}
                />
			</div>
		</div>
	)
}

export default Navegacion