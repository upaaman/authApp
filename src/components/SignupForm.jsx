import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSignupHook } from '../hooks/useSignupHook';
import CommanButton from './CommanButton';
import GoogleSignInButton from './GoogleSignInButton';





const SignupForm = () => {
  const navigate = useNavigate();
  const { onSignup } = useSignupHook();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [password, setPassword] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const res = await onSignup({ email, password, name })
    if (res.message) {
      setError(res.message);
    } else {
      alert("Check your mail to confirm and then login!!")
    }
  }

  return (
    <div className='main'>
      <div className="container">
        <div className="form-container">
          <div className="form-content">
            <div className='title-section'>
              <h1 className='login-signup-title' >Create Account</h1>
              <p className='login-signup-title2' >Please enter your details to signup.</p>
            </div>
            {error !== null && <div className='error-text'>{error}</div>}
            <form className='form-data' onSubmit={handleFormSubmit}>
              <div>
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="text"
                  placeholder="Enter your name"
                  required
                  onChange={(e) => setName(e.target.value)} />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  required
                  onChange={(e) => setEmail(e.target.value)} />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="••••••••"
                  required
                  onChange={(e) => setPassword(e.target.value)} />
              </div>
              <div className="remember-forgot">
                <div className="remember">
                  <input type="checkbox" id="remember" />
                  <label htmlFor="remember">Remember for 30 days</label>
                </div>
              </div>
              <CommanButton title="Sign Up" />
              <GoogleSignInButton title="Sign Up" />
            </form>
            <p className="sign-up">Already have an account? <a onClick={() => navigate("/login")} href="#">Sign In</a></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignupForm