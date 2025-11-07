
import PersonalData from "@/components/PersonalData";
import Email from "@/components/Email";
import Password from "@/components/Password";
import Counter from "@/components/ButtonClick";
import { setUserInfo } from "./api/user";

import React from 'react'
import Cart from "@/components/Cart";

//hacer una petición al back para recibir la info de usuario
export const userInfo = setUserInfo()

export default function Home() {
  return (
    <>
      <PersonalData name={userInfo.name} surname={userInfo.surname}/>
      <Email email={userInfo.email}/>
      <Password/>
      <Counter/>
      <Cart/>
    </>
  )
}

