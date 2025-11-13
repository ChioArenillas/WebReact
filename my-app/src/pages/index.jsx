//En el index se ponen las cosas generales que afectan a los componentes en total, en cada componente lo que afecta a ese propio componente
    /* 
    USEEFFECT
    useEffect(() => {
      }
    }, [])  
Puede darse de 3 formas:
    [Array] con el array comleto (cada vez que pasa por ese array), 
    [] con el array vacío (en este caso solo se da una vez, cuándo se inicializa el componente)
    o sin array (se realiza todo el tiempo, no hay condiciones).
*/ 
import styles from '@/styles/Home.module.css'

import PersonalData from "@/components/PersonalData";
import Email from "@/components/Email";
import Password from "@/components/Password";

import Counter from "@/components/ButtonClick";
import { setUserInfo } from "../api/user";

import Cart from "@/components/Cart";

import AlumnoInfo from "@/components/Alumnos";
import { useEffect, useState } from "react";

import React from 'react';
import { getAlumnos } from "../api/alumnos";

import ComponenteHijo from "@/components/Hijo";

//hacer una petición al back para recibir la info de usuario
export const userInfo = setUserInfo()

/* 
    return (
    <> 
      <PersonalData name={userInfo.name} surname={userInfo.surname}/>
      <Email email={userInfo.email}/>
      <Password/>
      <Counter/>
      <Cart/>
 */

/****************EJEMPLO ALUMNOS ******************

export default function Home() {

const [alumnos, setAlumnos] = useState([])
  const [counterAlumnosQuePagan, setCounterAlumnosQuePagan] = useState(0)
  const [todosPagados, setTodosPagados] = useState(false)

  const counterAlumnosPagados = () => {
    let counterAlumnosQuePaganAux = counterAlumnosQuePagan + 1
    setCounterAlumnosQuePagan(counterAlumnosQuePaganAux)
  }

  useEffect(() => {
    if(alumnos.length > 0 && counterAlumnosQuePagan >= alumnos.length) {
      setTodosPagados(true)
    } else {
      setTodosPagados(false)
    }
  }, [counterAlumnosQuePagan])

  useEffect(() => {
    let alumnosAux = getAlumnos()
    setAlumnos(alumnosAux)
  }, [])

    return (
    <>     
       <div>
        <h1>La mejor clase:</h1>
        <h3>Mis chavalitos y chavalitas</h3>
      </div>
      <div>
        {
          todosPagados ? 
          <div> <span>Todos los alumnos han pagado</span> </div>
          :  
          <div> <span>No todos los alumnos han pagado</span> </div>
        }
      </div>
      <div>
        {
          alumnos.map(alumno => {
            return <AlumnoInfo 
            key={alumno.id} 
            nombreAlumno={alumno.nombre} 
            emailAlumno={alumno.email} 
            counterAlumnosPagados={counterAlumnosPagados}/>
          })
        }
      </div>      
 */
  /*************** EJEMPLO SALUDO *******************/
/* 
export default function Home() {

  const [saludo, setSaludo] = useState('')
  const [saludoHijo, setSaludoHijo] = useState('')
  const [arrayExample, setArrayExample] = useState([1,2,3])

  const addRandomNumberToArrayExample = () => {
    let arrayAux = [...arrayExample]
    arrayAux.push(Math.random()*100)
    setArrayExample(arrayAux)
    console.log(arrayExample)
  }
  const saludar = (param1) => {
    setSaludo('Hola desde el Padre')
  }
  const saludarDesdeHijo = (mensajeDeSaludo) => {
    setSaludoHijo(mensajeDeSaludo)
  }

  return (
    <> 
      <div>
        <h1>Componente Padre</h1>
        <button onClick={saludar}>Saluda al hijo</button>
        <p>{saludoHijo}</p>
      </div>
      <hr />
      <div>
        <ComponenteHijo
        saludoParam={saludo}
        saludarDesdeHijoFn={saludarDesdeHijo}
        addRandomNumberToArrayExampleFn={addRandomNumberToArrayExample}
        />
      </div>
      <hr />
      {
        arrayExample.map(a => {
          return <p>{a}</p>
        })
      }
    </>
)}
 */


  /*************** EJEMPLO FRUTAS *******************/
/* 
import AnyadirFruta from '@/components/AnyadirFruta';
import Frutas from '@/components/Frutas';
import {getFrutas} from '../pages/api/apiFetch'

export default function Home() {

const [listaFrutas, setListaFrutas ] = useState ([])

const getFrutasFromApiFetch = () =>{
  let frutasAux = getFrutas()
  setListaFrutas(frutasAux)
}

const eliminarFruta = (id) => {
  let eliminarFrutaAux = [...listaFrutas]
  const nuevaListaFruta = eliminarFrutaAux.filter((fruta) => fruta.id != id)
  setListaFrutas(nuevaListaFruta)
}

const guardarFrutas = (frutaParam) => {
  let frutaAux =[...listaFrutas]
  frutaAux.push(frutaParam)
  setListaFrutas(frutaAux)
}

useEffect(() => {
  getFrutasFromApiFetch()
}, [])

  return (
    <div>
      <div>
        <h1>FRUTERIA</h1>
      </div>
      <div>
        {
          listaFrutas.map((fruta, index) => {
        return <Frutas
        key={index}
        id={fruta.id}
        nombre={fruta.nombre}
        precioKg={fruta.PrecioKg}
        origen={fruta.origen}
        eliminarFruta={eliminarFruta}
         />
          })
        }
      </div>
      <div>
        <br /><hr /> <br />
      </div>
      <div>
        <AnyadirFruta
        guardarFrutas={guardarFrutas} />
      </div>
    </div>
  )
}
 */
/*********************  EJEMPLO ALUMNOS **********************/

import Link from 'next/link';

export default function Home () {
  return(
    <>
    <h1>Gestor de Alumnos</h1>
    <ul>
      <li>
        <Link href={{
          pathname:'/ProfilePage',
        }}>Profile</Link>
      </li>
      <li>
        <Link href={{
          pathname:'/ContactPage'
          }}>Contacto</Link>
      </li>
    </ul>
    <hr />
    <p>Todos los alumnos</p>
  </>
  )
}