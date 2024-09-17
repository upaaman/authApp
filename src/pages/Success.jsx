import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { setUserToNull } from '../redux/authSlice';

const Success = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();
  const user=useSelector(store=>store.auth.user);
  // console.log(user,"priting the redux data")

  const handleLogOut = () => {
    dispatch(setUserToNull());
    navigate('/')
  }

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