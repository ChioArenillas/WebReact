import { useRouter } from 'next/router'
import React from 'react'

export default function Profile() {
    const router = useRouter()
    const {nombre, apellidos} = router.query
  return (
    <div>
      <h2>Pagina Profile</h2>
      <span>{nombre} {apellidos}</span>
    </div>
  )
}
