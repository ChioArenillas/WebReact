
import PersonalData from "@/components/PersonalData";
import Email from "@/components/Email";
import Password from "@/components/AccesData";

import React from 'react'

//hacer una petición al back para recibir la info de usuario
const getUserInfo = () => {
    return{
        name: 'Chio',
        surname: 'Alvarez',
        email: 'chioalvarez@email.com',
    }
}
const userInfo = getUserInfo()

export default function Home() {
  return (
    <>
      <PersonalData name={userInfo.name} surname={userInfo.surname}/>
      <Email email={userInfo.email}/>
      <Password/>
    </>
  )
}

//MINUTO 52
