import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoPageFound = () => {
    const navigate = useNavigate();
    return (

        <div className='no-page-found'>
            <div className='no-page-found-text'>No Page Found</div>            
            <div>Go to signup page.</div>            
            <button className='no-page-found-button' onClick={() => navigate("/")}>Sign Up</button>
        </div>
    )
}

export default NoPageFound