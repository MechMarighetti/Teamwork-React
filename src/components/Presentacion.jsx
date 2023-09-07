import { React, useState } from 'react'
const grupo = {
    titulo: 'Los Tatata',
    integrantes: [{
        nombre: 'Mercedes Marighetti',
        edad: 32,
        email:'mercedesmarighetti@gmail.com'
    },
    {
        nombre: 'Amnel Villaroel',
        edad: 38,
        email:'amvillaroel@gmail.com'
    }, 
    {
        nombre: 'Asbel Gonzalez',
        edad: 28,
        email:'asbel.gonzalez95@gmail.com'
    }, 
    {
        nombre: 'Alan Medina',
        edad: 30,
        email:'alan_2095@hotmail.com'
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
        <><div className='center'>
            <button onClick={decrement}>←</button>
            <h1>{grupo.titulo}</h1>
            <h2>{grupo.integrantes[otro].nombre}</h2>
            <p>{grupo.integrantes[otro].edad} años</p>
            <p>Contacto: {grupo.integrantes[otro].email}</p>
            <br />
            <button onClick={increment}>→</button>
        </div>
        </>
    )
}

export default Presentacion