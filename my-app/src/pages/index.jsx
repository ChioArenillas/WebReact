//En el indez se ponen las cosas generales que afectan a los componentes en total, en cada componente lo que afecta a ese propio componente

import PersonalData from "@/components/PersonalData";
import Email from "@/components/Email";
import Password from "@/components/Password";

import Counter from "@/components/ButtonClick";
import { setUserInfo } from "./api/user";

import Cart from "@/components/Cart";

import AlumnoInfo from "@/components/New";
import { useEffect, useState } from "react";

import React from 'react';
import { getAlumnos } from "./api/alumnos";

//hacer una petición al back para recibir la info de usuario
export const userInfo = setUserInfo()

export default function Home() {

  const [alumnos, setAlumnos] = useState([])
  const [counterAlumnosQuePagan, setCounterAlumnosQuePagan] = useState(0)
  const [todosPagados, setTodosPagados] = useState(false)

  const counterAlumnosPagados = () => {
    let counterAlumnosQuePaganAux = counterAlumnosQuePagan + 1
    setCounterAlumnosQuePagan(counterAlumnosQuePaganAux)
/*     if(counterAlumnosQuePaganAux >= alumnos.length) {
      setTodosPagados(true)
    } */
  }

  useEffect(() => {
    if(counterAlumnosQuePagan >= alumnos.length) {
      setTodosPagados(true)
    }
  }, [counterAlumnosQuePagan])

  useEffect(() => {
    let alumnosAux = getAlumnos()
    setAlumnos(alumnosAux)
  }, [])

  return (
    <>
{/*       <PersonalData name={userInfo.name} surname={userInfo.surname}/>
      <Email email={userInfo.email}/>
      <Password/>
      <Counter/>
      <Cart/>
 */}      <div>
        <h1>La mejor clase:</h1>
        <h3>Mis chavalitos y chavalitas</h3>
      </div>
      <div>
        {
          todosPagados ? <span>Todos los alumnos han pagado</span>
          :  <span>No todos los alumnos han pagado</span>
        }
      </div>
      <div>
        {
          alumnos.map(alumno => {
            return <AlumnoInfo key={alumno.id} 
            nombreAlumno={alumno.nombre} 
            emailAlumno={alumno.email} 
            counterAlumnosPagados={counterAlumnosPagados}/>
          })
        }
      </div>
    </>
  )
}

