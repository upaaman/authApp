import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Success from './pages/Success'
import NoPageFound from './pages/NoPageFound'
import  useIsLoggedInHook  from './hooks/useIsLoggedInHook '

const App = () => {
const isLoggedIn=useIsLoggedInHook();



  if (isLoggedIn) {
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