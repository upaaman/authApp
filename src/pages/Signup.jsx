import React from 'react'
import SignupForm from "./../components/SignupForm"
const Signup = () => {
  return (
    <div className=' flex '>
      <div className='absolute flex gap-2 text-md font-semibold items-center justify-center left-6 top-6'> <div className='w-2 h-2 rounded-full bg-black'></div> Untitled UI </div>
      <SignupForm />
      <div className='w-[50%] h-[100vh] flex  items-center justify-center bg-[#f3f4f8] '>
        <div className='w-[190px] h-[190px]   bg-[#623eba] rounded-full'></div>
        <div className='h-[50vh] w-[50%]  absolute backdrop-blur-lg bg-white/30  bottom-0 '></div>
      </div>

      <div className='absolute bottom-8 left-7 text-gray-300 text-sm'>Untitled Ui 2077</div>

    </div>
  )
}

export default Signup