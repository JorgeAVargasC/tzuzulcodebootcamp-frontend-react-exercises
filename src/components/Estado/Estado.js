import React from 'react'
import Navegacion from '../Navegacion/Navegacion'
import './Estado.css'

export default function Estado() {

    const [content, setContent] = React.useState({texto: ''})
    const [messages, setMessages] = React.useState([])

    const changeInput = (e) => {
        content.texto = e.target.value
        setContent({...content})
    }

    const sendMessage = () => {

        messages.push(content.texto)
        setMessages([...messages]) // Estoy pasandole un nuevo array
        content.texto = ''
        setContent({...content})
        // Reto: Explicar el reto
    }

    return (
        <>
            <Navegacion />
            <div className='container'>

                <h2>Envío de mensajes</h2>
                <h3>Tarea - 3</h3>
                {/* <p>{content}</p> */}
                <input className='input' type="text" value={content.texto} onChange={changeInput} />
                <button className='btn' onClick={sendMessage}>Enviar</button>

                <h3 className='stateMessages'>Mensajes</h3>
                <ul>
                    {messages.map((message,index) => <li key={index}>{message}</li>)}
                </ul>
            </div>
        </>
    )
}
