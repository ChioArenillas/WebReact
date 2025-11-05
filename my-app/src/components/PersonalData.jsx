import React from 'react'

export default function PersonalData(props) { //se pone props de propiedades normalmente, pero se le podría poner el nombre que queramos (por ej: data y abajo poner data.name, data.surname...)
    return (
        <div>
            <div>
                <span>Nombre:</span>
                <input type='text' value={props.name}></input>
            </div>
            <div>
                <span>Apellidos:</span>
                <input type='text' value={props.surname}></input>
            </div>
        </div>
    )
}

