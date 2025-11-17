import Link from 'next/link'
import React from 'react'

export default function NuevaPagina() {
  return (
    <div>
      <h1>Pagina Contacto</h1>
      <Link href={{
          pathname:'/'
          }}>Home</Link>
    </div>
  )
}
