import React from "react";

export default function ComponenteHijo(props) {
    const saludarAPadre = () => {
        props.saludarDesdeHijoFn('Saludos desde el hijo')
    }
    return (
        <div>
            <h2>Componente Hijo</h2>
            <div>
                <span>{props.saludoParam}</span>
            </div>
            <button onClick={saludarAPadre}>Saludar a padre</button>
            <button onClick={props.addRandomNumberToArrayExampleFn}>Add random number</button>
        </div>
    )
}