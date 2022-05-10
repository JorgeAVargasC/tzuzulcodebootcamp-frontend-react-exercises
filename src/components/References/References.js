import React from 'react'
import Navegacion from '../Navegacion/Navegacion'
import { useRef } from 'react'

export default function References() {

    const input = useRef()

    const sendMessage = () => {
        console.log(input.current.value)
    }

    return (
        <>
            <Navegacion />
            <div className="container">
                <h2>useRef</h2>
                <h3>Ejemplo</h3>
                <input className="input" type="text" ref={input}></input>
                <button className="btn" onClick={sendMessage}>Enviar</button>
            </div>
        </>
    )
}
