import React from 'react'

export default function Email(props) {
  return (
    <div>
      <span>Email:</span>
      <input type='email' value = {props.email}></input>
    </div>
  )
}
