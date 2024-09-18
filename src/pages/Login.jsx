import React from 'react'
import LoginForm from "../components/LoginForm"
import BallPart from '../components/BallPart'
import UntitledText from '../components/UntitledText'


const Login = () => {
  return (
    <div className=' login-signup-page '>
      <UntitledText />
      <LoginForm />
      <BallPart />
    </div>
  )
}

export default Login