import React from 'react'

export default function PersonalData() {
    let name = "Chio"
    let surname = "Alvarez"
  return (
    <div>
      <h1>Name:</h1>
      <input placeholder={name}/>
      <h1>Surname:</h1>
      <input placeholder={surname}/>
    </div>
  )
}

