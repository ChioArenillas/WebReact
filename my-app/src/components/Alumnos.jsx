import React, { useState } from 'react'

export default function AlumnoInfo(props) {
    const {nombreAlumno, emailAlumno, counterAlumnosPagados} = props

    const [pagado, setPagado] = useState(false)
    const pagarHandler = () =>{
        setPagado(true)
    }
  return (
    <div className='alumno'>
        <div >
            <span>Nombre alumno: {nombreAlumno}</span>
        </div>
        <div>
            <span>Email alumno: {emailAlumno}</span>
        </div>
        <div>
            {
                pagado ? <span>Si ha pagado</span>
                : <span>No ha pagado</span>
            }
        </div>
        <div>
            {
                !pagado ? <button onClick={pagarHandler} >Alumno paga</button>
                : null
            }
        </div>

      
    </div>
  )}
