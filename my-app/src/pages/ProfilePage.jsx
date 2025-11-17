import ChangePassword from '@/components/ChangePassword'
import UserDetails from '@/components/UserDetails'
import { useRouter } from 'next/router'
import React from 'react'

export default function ProfilePage() {

  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <h1>Pagina Profile</h1>
      <UserDetails userId={id} />
      <ChangePassword userId={id} />
    </div>
  )
}
