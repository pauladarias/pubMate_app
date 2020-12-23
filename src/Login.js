import React from 'react'
import "./Login.css"
import Evenlonger from './evenlonger.png'
import Button from '@material-ui/core/Button'
import { auth, provider } from "./firebase"


export default function Login() {
 
  const signIn = () => {
   auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result)
      })
      .catch((error) => alert(error.message))

  }
  return (
    <div className="login">
      <div className="login__logo">
        <img
          src={Evenlonger}
          alt=""
        />
        <h1>pub mate</h1>
      </div>
      <Button onClick={signIn}>Sign In</Button>

    </div>
  )
}

