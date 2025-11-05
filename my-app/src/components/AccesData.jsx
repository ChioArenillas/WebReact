import React from 'react'

export default function AccessData() {
    let email = "chioalvarez@email.com"
    let password = "Ajr043&cG#"
  return (
    <div>
      <h1>Email:</h1>
      <input placeholder={email}/>
      <h1>Password:</h1>
      <input placeholder={password}/>
      <br></br>      <br></br>
      <button> "confirmar" </button>
    </div>
  )
}
