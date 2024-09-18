import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useLoginHook } from '../hooks/useLoginHook';
import { setUser } from '../redux/authSlice';
import GoogleSignInButton from "./GoogleSignInButton"
import CommanButton from "./CommanButton"



const LoginForm = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { onLogin } = useLoginHook();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const res = await onLogin({ email, password });

        if (res.message) {
            setError(res.message)
        } else {
            // console.log(res)
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
                        {error && <div>{error}</div>}
                        <form className='form-data' onSubmit={handleFormSubmit}>

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
                                    minLength={8}
                                    required
                                    onChange={(e) => setPassword(e.target.value)} />
                            </div>
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