import { Route, Routes } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Success from './pages/Success'
import NoPageFound from './pages/NoPageFound'
import  useIsLoggedInHook  from './hooks/useIsLoggedInHook '

const App = () => {

  // ----------------- cutom hooks which checks any user is logged in or not
const isLoggedIn=useIsLoggedInHook();


  // ------if there is any user logged in then show them the succes page 
  if (isLoggedIn) {
    return <Success />
  }
  else {
    // if the user is not logged in then show them these routes
    return <Routes>
      <Route path='/' element={<Signup />} />
      <Route path='/*' element={<NoPageFound />} />
      <Route path='/login' element={<Login />} />
    </Routes>
  }

}

export default App