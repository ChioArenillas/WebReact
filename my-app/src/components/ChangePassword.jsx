import { modifyPassword } from '@/api/userFetch'
import React, { useState } from 'react'

export default function ChangePassword(userId) {

  const [password, setPassword] = useState('')
  const [confirmPassowrd, setPasswordConfirm] = useState('')
  const [error, setError] = useState(false)
  
  const onChangePasswordHandle = (e) => {
    setPassword(e.target.value)
  }
    const onChangeConfirmPasswordHandle = (e) => {
    setPasswordConfirm(e.target.value)
  }
  const changePassword = () => {
    if(password === confirmPassowrd){
      modifyPassword(userId, password)
      setError(false) 
    }else{
      setError(true)
    }
  }

  return (
    <div>
      <div>
        <h2>Change Password</h2>
      </div>
      <div>
        <label>New Password </label>
        <input 
          type="password"
          value={password}
          onChange={onChangePasswordHandle}
          />
      </div>
      <br />
      <div>
        <label>Confirm Password </label>
        <input 
        type="password"
        value={confirmPassowrd}
        onChange={onChangeConfirmPasswordHandle} />
      </div>
      <br />
      <div>
        <button onClick={changePassword}>Change Password</button>
      </div>
      <br />
      <div>
        {
          error ? 
            <div>
              <span>Error: Confirm Password is different</span>
            </div>
            :
              null
        }
      </div>
    </div>
  )
}
