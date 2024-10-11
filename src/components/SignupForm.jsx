import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useSignupHook } from '../hooks/useSignupHook';
import CommanButton from './CommanButton';
import GoogleSignInButton from './GoogleSignInButton';
import InputCustom from './InputCustom';





const SignupForm = () => {
  const navigate = useNavigate();
  const { onSignup } = useSignupHook();
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const res = await onSignup({ email:formData.email, password:formData.password, name:formData.name })
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
              <InputCustom
                title="Name"
                name="name"
                type="text"
                placeholder="Enter your name"
                handleChange={handleChange}
              />
              <InputCustom
                title="Email"
                name="email"
                type="email"
                placeholder="Enter your mail"
                handleChange={handleChange}
              />
              <InputCustom
                title="Password"
                name="password"
                type="password"
                placeholder="••••••••••"
                handleChange={handleChange}
              />
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