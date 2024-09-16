import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        token: null,
        authenticated: false,
        user: {
            id: null,
            name: null,
            email: null,
            password: null,
        },
        totalUsers:[]
    },
    reducers: {
        signUpNewUser:(state,action)=>{
            // console.log(action.payload)
            state.totalUsers.push(action.payload)
        }
    },
});

export const { signUpNewUser} = authSlice.actions;
export default authSlice.reducer;
