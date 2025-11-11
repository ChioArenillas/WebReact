
//BOTÓN SUMAR Y RESTAR
import { getUserInfo, setUserInfo, userInfo } from '@/pages/api/user'
import React, { useEffect, useState } from 'react'


export default function Counter() {
    const [clickState, setClick] = useState(0)
    const {userInfo, setUserInfo} = useState({})

    useEffect(() => {
      if(clickState > 10){
        console.log(`click >10`)
      }
    }, [clickState]) 

    const addClickCounter = (e) => {
        setClick(clickState +1)
    }
    const lessClickCounter = (e) => {
      if(clickState <= 0){
        setClick(0)
      } else {
        setClick(clickState -1)
      }
    }

  return (
    <>
      <button onClick={addClickCounter}>+</button>
      <button onClick={lessClickCounter} disabled={clickState<=0}>-</button> {/* disabled o hidden para ocultar o desmarcar si no se puede usar */}
      <p>Clicks: {clickState} </p>
    </>
  )
}





/* 
export default function Counter() {
    const [clickState, setClick] = useState(0)

    const userInfo = PutUserInfo(clickState)

    useEffect

    const addClickCounter = () => {
    }
    const lessClickCounter = () => {
    }

  return (
    <>
      <button onClick={addClickCounter}>+</button>
      <button onClick={lessClickCounter} disabled={clickState<=0}>-</button> {/* disabled o hidden para ocultar o desmarcar si no se puede usar 
      <p>Clicks: {clickState} </p>
      <hr/> //esto es una línea de división
      <div>
        <p>Nombre: {userInfo.name}</p>
        <p>Apellido: {userInfo.surname}</p>
        <p>Email: {userInfo.email}</p>
        <p>Click: {userInfo.clickCounter}</p>
      </div>
    </>
  )
}

 */

