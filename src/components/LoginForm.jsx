import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLoginHook } from '../hooks/useLoginHook';
import { setUser } from '../redux/authSlice';
import GoogleSignInButton from "./GoogleSignInButton"
import CommanButton from "./CommanButton"
import InputCustom from "./InputCustom"

const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { onLogin } = useLoginHook();
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
// ----------------when we submit our form with all the details and submit then we trigger SIGNUP HOOk --------------------------
    const handleFormSubmit = async (e) => {
        e.preventDefault();
        const res = await onLogin({ email: formData.email, password: formData.password });

        if (res.message) {
            setError(res.message)
        } else {
            dispatch(setUser({
                name: res.user.user_metadata.name,
                id: res.user.id,
                email: res.user.user_metadata.email,
                accessToken: res.session.access_token
            }));
        }

    }

    return (
        <div className='main'>
            <div className="container">
                <div className="form-container">
                    <div className="form-content">
                        <div className='title-section'>
                            <h1 className=' login-signup-title '>Welcome Back</h1>
                            <p className='login-signup-title2'>Welcome back! Please enter your details.</p>
                        </div>

                        {/* -------------------if there is any warning or error we display it here-------------------------- */}
                        {error !== null && <div className='error-text'>{error}</div>}

                        <form className='form-data' onSubmit={handleFormSubmit}>

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
                                <a href="#" className="forgot">Forgot password</a>
                            </div>
                            <CommanButton title="Sign In" />
                            <GoogleSignInButton title="Sign In" />
                        </form>
                        <p className="sign-up">Don't have an account? <a onClick={() => navigate("/")} href="#">Sign Up</a></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginForm