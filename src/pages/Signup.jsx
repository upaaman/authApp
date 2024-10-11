import React from 'react'
import SignupForm from "./../components/SignupForm"
import BallPart from '../components/BallPart'
import UntitledText from '../components/UntitledText'
const Signup = () => {
  return (
    <div className=' login-signup-page '>

    {/*---------- the untitled text appeared at the top and bottom left is here---------- */}

    <UntitledText />

    {/*---------- signup form component---------- */}

    <SignupForm />

    {/* -------------the right ball display section is here----------------- */}

    <BallPart />
  </div>
  )
}

export default Signup