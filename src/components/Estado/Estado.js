import React from 'react'
import Navegacion from '../Navegacion/Navegacion'
import './Estado.css'

export default function Estado() {

    const [content, setContent] = React.useState('')
    const [messages, setMessages] = React.useState([])

    const changeInput = (e) => {
        setContent(e.target.value)
    }

    const sendMessage = () => {

        messages.push(content)
        setMessages([...messages])
        setContent('')
        // Reto: Explicar el reto
    }

    return (
        <>
            <Navegacion />
            <div className='container'>

                <h2>Envío de mensajes</h2>
                <h3>Tarea - 3</h3>
                {/* <p>{content}</p> */}
                <input className='input' type="text" value={content} onChange={changeInput} />
                <button className='btn' onClick={sendMessage}>Enviar</button>

                <h3 className='stateMessages'>Mensajes</h3>
                <ul>
                    {messages.map(message => <li>{message}</li>)}
                </ul>
            </div>
        </>
    )
}
