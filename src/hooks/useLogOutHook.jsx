import { useDispatch } from 'react-redux';
import {  setUserToNull } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';


export const useLogOutHook = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate();

    const onLogOut = async () => {
        try {
            dispatch(setUserToNull());
            navigate("/")
        } catch (error) {
            return error
        }
    };

    return {
        onLogOut,
    };
};