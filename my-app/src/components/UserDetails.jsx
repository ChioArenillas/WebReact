import { getUsersById } from '@/api/userFetch'
import React, { useEffect, useState } from 'react'

export default function UserDetails({userId}) { //poner aquí el UserId es igual que hacer el destructuring de los props

  const [userLocal, setUserLocal] = useState({})

  useEffect(() => {
    let userAux = getUsersById(userId)
    setUserLocal(userAux)
  }, [])

  return (
    <div>
      <div>
        <h2>User Details</h2>
      </div>
      <br />
      <div>
        <span>Nombre: {userLocal?.nombre}</span>
      </div>
      <div>
        <span>Apellidos: {userLocal?.apellidos}</span>
      </div>
    </div>
  )
}
