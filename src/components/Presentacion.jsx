import { React, useState } from 'react'
const grupo = {
    titulo: 'Los Tatata',
    integrantes: [{
        nombre: 'Mercedes Marighetti',
        edad: 32
    },
    {
        nombre: 'Amnel Villaroel',
        edad: 38
    }],
}


const Presentacion = () => {

    const [nombre, setNombre] = useState()
    const [edad, setEdad] = useState()
    const otro = () => {
        setNombre(grupo.integrantes[1].nombre)
        setEdad(grupo.integrantes[1].edad)
    }

    return (
        <>
            <button onClick={otro}>←</button>
            <h1>{grupo.titulo}</h1>
            <h2>{grupo.integrantes[0].nombre}</h2>
            <em>{grupo.integrantes[0].edad} años</em>
            <br />
            <button onClick={otro}>→</button>
        </>
    )
}

export default Presentacion