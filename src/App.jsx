import React from 'react'

import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Success from './pages/Success'

const App = () => {
  return (
    <div >
      <Routes>
        <Route path='/' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/success' element={<Success/>} />

      </Routes>
    </div>
  )
}

export default App