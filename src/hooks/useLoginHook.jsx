import { useSelector, useDispatch } from 'react-redux';
import { supabase } from '../supaBase/Client';
import { setUser } from '../redux/authSlice';
import { useNavigate } from 'react-router-dom';


export const useLoginHook = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate();


    const onLogin = async ({ email, password }) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            })
            if (error) return error
            dispatch(setUser(data.user))
            navigate('/success')
            return data
        } catch (error) {
            return error
        }
    };

    return {
        onLogin,
    };
};