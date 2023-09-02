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
    }, 
    {
        nombre: 'Amigo Imaginario que Rompe mi código',
        edad: 52
    }, 
    {
        nombre: 'Carlita la Piola que mejora el código',
        edad: 19
    }],
}


const Presentacion = () => {

    const [otro, setOtro] = useState(0)
    const increment = () => {
        otro < (grupo.integrantes.length - 1) ? setOtro(otro + 1) : setOtro(0);
      };
    /* const increment = () => {
         if (otro < (grupo.integrantes.length - 1)) {
              setOtro(otro + 1);
            } else {
                setOtro(0)
            }
        } */
        const decrement = () => {
            otro === 0 ? setOtro(grupo.integrantes.length - 1) : setOtro(otro - 1);
          };

        /* const decrement = () => {
            if (otro == 0) {
                 setOtro(grupo.integrantes.length - 1);
               } else {
                   setOtro(otro - 1)
               }
           } */
        

    return (
        <>
            <button onClick={decrement}>←</button>
            <h1>{grupo.titulo}</h1>
            <h2>{grupo.integrantes[otro].nombre}</h2>
            <p>{grupo.integrantes[otro].edad} años</p>
            <br />
            <button onClick={increment}>→</button>
        </>
    )
}

export default Presentacion