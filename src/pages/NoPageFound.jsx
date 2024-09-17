import React from 'react'
import { useNavigate } from 'react-router-dom'

const NoPageFound = () => {
    const navigate = useNavigate();
    return (

        <div>
            <div>No Page Found</div>
            <button onClick={() => navigate("/")}>Sign Up</button>
        </div>
    )
}

export default NoPageFound