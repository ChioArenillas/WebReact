import { deleteUserById } from '@/api/userFetch'
import ChangePassword from '@/components/ChangePassword'
import UserDetails from '@/components/UserDetails'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export default function ProfilePage() {

  const router = useRouter()
  const { id } = router.query

  const deleteUser = () => {
    deleteUserById(id)
    router.back() //Al eliminar el usuario te devuelve a la pantalla anterior
  }

  return (
    <div>
      <h1>Pagina Profile</h1>
      <UserDetails userId={id} />
      <ChangePassword userId={id} />
      <div>
        <button onClick={deleteUser}>Eliminar usuario</button>
      </div>
      <Link href={{
          pathname:'/'
          }}>Home</Link>
    </div>
  )
}
