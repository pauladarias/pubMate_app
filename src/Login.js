import React from 'react'
import "./Login.css"
import Evenlonger from './evenlonger.png'
import Button from '@material-ui/core/Button'

export default function Login() {
  const signIn = () => {

  }
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src={Evenlonger}
          alt=""
        />
      </div>
      <Button >Sign In</Button>

    </div>
  )
}
