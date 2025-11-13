import React, { useEffect, useState } from 'react'


export default function Frutas(props) {
  const {id, nombre, precioKg, origen, eliminarFruta} = props

  const eliminarHandler = () => {
    eliminarFruta(id)
  }

  return (
    <div>
      <span>Id: {id} </span>
      <span>Nombre de Fruta: {nombre} </span>
      <span>Precio Kg: {precioKg} </span>
      <span>Origen: {origen} </span>
      <button onClick={eliminarHandler}>Eliminar</button>
    </div>
  )
}
