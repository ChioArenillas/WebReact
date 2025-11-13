import React, { useState } from 'react'

export default function AnyadirFruta(props) {

  const { guardarFrutas } = props

  const [id, setId] = useState(0)
  const [nombre, setNombre] = useState('')
  const [precioKg, setPrecioKg] = useState(0)
  const [origen, setOrigen] = useState('')

  const changeIdHandler = (e) => {
    setId(e.target.value)
  }
  const changeNombreHandler = (e) => {
    setNombre(e.target.value)
  }
  const changePrecioKgHandler = (e) => {
    setPrecioKg(e.target.value)
  }
  const changeOrigenHandler = (e) => {
    setOrigen(e.target.value)
  }

  const guardar = () => {
      guardarFrutas({
      id: id,
      nombre: nombre,
      precioKg: precioKg,
      origen: origen
    })

  }

  return (
    <div>
      <div>
        <span>id:</span>
        <input type="number" value={id} onChange={changeIdHandler} />
      </div>
      <div>
        <span>Nombre:</span>
        <input type="text" value={nombre} onChange={changeNombreHandler} />
      </div>
      <div>
        <span>PrecioKg:</span>
        <input type="number" value={precioKg} onChange={changePrecioKgHandler} />
      </div>
      <div>
        <span>Origen:</span>
        <input type="text" value={origen} onChange={changeOrigenHandler} />
      </div>
      <br />
      <div>
        <button onClick={guardar}>Añadir Fruta</button>
      </div>
    </div>
  )
}
