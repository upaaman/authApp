import React from 'react'
import LoginForm from "../components/LoginForm"
import BallPart from '../components/BallPart'
import UntitledText from '../components/UntitledText'




const Login = () => {
  return (
    <div className=' login-signup-page '>

      {/*---------- the untitled text appeared at the top and bottom left is here---------- */}

      <UntitledText />

      {/*---------- login form component---------- */}

      <LoginForm />

      {/* -------------the right ball display section is here----------------- */}

      <BallPart />
    </div>
  )
}

export default Login