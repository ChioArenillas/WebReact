import React, { useState } from 'react'


export default function Password() {
  const [password, setPassword] = useState('') //primero con password se crea el valor, cuándo el valor cambia se hace el setpassword con la nueva
  const changePaswordHandler = (e) => { //con la nueva setpassword se crea el changePassword (la contraseña cambiada)
    console.log(e.target.value)
    setPassword(e.target.value)
  }
  return (
    <div>
      <span>Password:</span>
      <input type='password' value = {password} onChange={changePaswordHandler}></input> {/*Aquí se cambia el valor de la password por la nueva cambiada  */}
    </div>
  )
}
