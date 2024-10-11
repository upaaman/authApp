import { useSelector } from 'react-redux';
import { useLogOutHook } from '../hooks/useLogOutHook';

const Success = () => {
  const user=useSelector(store=>store.auth.user);
  const {onLogOut}=useLogOutHook();

  const handleLogOut = () => {
    // --------------custom hook for logging out the user---------------
    onLogOut();
  }
  //---------------name and email of user shown with the redux state stored-------------------------- 
  return (
    <div className='success-container'>
      <div>Hey You logged in !!!</div>
      <div >Welcome <span className='welcome-name'>{user?.name}</span></div>
      <div className='welcome-text'>You are logged in with  <span className='welcome-email'>{user?.email}</span></div>
      <div className='logout-button' onClick={() => handleLogOut()} >LogOut</div>

    </div>
  )
}

export default Success