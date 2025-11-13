import ChangePassword from '@/components/ChangePassword'
import UserDetails from '@/components/UserDetails'
import { useRouter } from 'next/router'
import React from 'react'

export default function Profile() {

  return (
    <div>
      <h1>Pagina Profile</h1>
      <UserDetails />
      <ChangePassword />
    </div>
  )
}
