import { useSelector, useDispatch } from 'react-redux';
import { supabase } from '../supaBase/Client';


// --------------------when the user SIGNUP this hook is activated-------------------------

export const useSignupHook = () => {

    const onSignup = async ({ email, password, name }) => {
        // console.log("hi am logging the props",name)
        try {
            const { data, error } = await supabase.auth.signUp(
                {
                    email,
                    password,
                    options: {
                        emailRedirectTo: "https://google.com",
                        data: {
                            name,
                        }
                    }
                }
            )
            if (error) return error;
            // console.log(data)
            return data;
        } catch (error) {
            return error;
        }
    };

    return {
        onSignup,
    };
};