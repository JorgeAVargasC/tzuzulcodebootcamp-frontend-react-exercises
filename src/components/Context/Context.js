import React, { useState, createContext } from 'react'
import Productos from './Productos'
import Carrito from './Carrito'
import Navegacion from '../Navegacion/Navegacion'

export const CartContext = React.createContext()

export default function Context() {
    const [carrito, setCarrito] = useState([])

    // console.clear()
    // console.table(carrito);

    return (
        <>
            <Navegacion />
            <div className='container'>
                <h2>Context</h2>
                <h3>Ejemplo Carrito</h3>
                <CartContext.Provider value={{ carrito, setCarrito }}>

                    <Carrito carrito={carrito} />
                    <Productos />
                    {/* <button onClick={() => {setCarrito([...carrito, { name: "Producto" }])}}>Agregar al carrito</button> */}

                </CartContext.Provider>
            </div>
        </>
    )
} 