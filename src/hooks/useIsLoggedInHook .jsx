import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


const useIsLoggedInHook = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const user=useSelector(state=>state.auth.user)

    useEffect(() => {
        // Simulating token checking
        const token = localStorage.getItem('userData');
        if (token) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, [user]); 

    return isLoggedIn;
};

export default useIsLoggedInHook;