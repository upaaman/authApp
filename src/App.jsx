import React, { useEffect, useState } from 'react' 
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Success from './pages/Success'
import NoPageFound from './pages/NoPageFound'
import { useSelector } from 'react-redux'

const App = () => {
  const [token,setToken]=useState(null);


  if(token){
    localStorage.setItem('token',JSON.stringify(token))
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
      let data = JSON.parse(localStorage.getItem('token'))
      // console.log(data)
      setToken(data)
    }
    
  }, [])
  
  return (
    <div >
      <Routes>
        <Route path='/' element={<Signup/>} />
        <Route path='/*' element={<NoPageFound/>} />
        <Route path='/login'  element={<Login setToken={setToken}/>} />
       {token ? <Route path='/success' element={<Success token={token}/>} />:""}

      </Routes>
    </div>
  )
}

export default App