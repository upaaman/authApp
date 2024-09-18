import React from 'react'
import SignupForm from "./../components/SignupForm"
import BallPart from '../components/BallPart'
import UntitledText from '../components/UntitledText'
const Signup = () => {
  return (
    <div className=' login-signup-page '>
     <UntitledText/>
      <SignupForm />
      <BallPart />
    </div>
  )
}

export default Signup