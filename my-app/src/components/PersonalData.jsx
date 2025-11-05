import React from 'react'

export default function PersonalData() {
  return (
    <div>
        <div>
        <span>Nombre:</span>
        <input type='text' value={'Mi nombre'}></input>
        </div>
        <div>
        <span>Apellidos:</span>
        <input type='text' value={'Mis apellidos'}></input>
        </div>
    </div>
  )
}

