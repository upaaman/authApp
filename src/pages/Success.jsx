import { useNavigate } from 'react-router-dom'

const Success = ({token}) => {
  const navigate=useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem('token')
    navigate('/')
  }
  return (
    <div className='success-container'>
      <div>Hey You logged in !!!</div>
      <div >Welcome <span className='welcome-name'>{token?.user_metadata?.name}</span></div>
      <div className='welcome-text'>You are logged in with  <span className='welcome-email'>{token?.user_metadata?.email}</span></div>
      <div className='logout-button' onClick={() => handleLogOut()} >LogOut</div>

    </div>
  )
}

export default Success