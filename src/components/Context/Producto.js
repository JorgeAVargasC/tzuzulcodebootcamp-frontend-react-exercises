import React, { useContext } from 'react'
import { CartContext } from './Context'

export default function Producto({ producto }) {

    const { carrito, setCarrito } = useContext(CartContext)

    const agregarAlCarrito = () => {
        setCarrito([...carrito, producto])
    }
    return (
        <div className='card'>
            <p>{producto.name}</p>
            <p>{producto.price}</p>
            <button className="btn" onClick={agregarAlCarrito}>Agregar al carrito</button>
        </div>
    )
}