import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Success from './pages/Success'
import NoPageFound from './pages/NoPageFound'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from './redux/authSlice'

const App = () => {
  const user = useSelector(store => store.auth.user)
  const dispatch = useDispatch();





  useEffect(() => {
    if (localStorage.getItem("userData")) {
      let data = JSON.parse(localStorage.getItem("userData"))
      dispatch(setUser(data));
    }
  }, [])


console.log(user)

  if (user.authenticated) {
    return <Success />
  }
  else {
    return <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/*' element={<NoPageFound />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  }

}

export default App