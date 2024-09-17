import { createSlice, current } from '@reduxjs/toolkit';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        
        user: {
            id: null,
            name: null,
            email: null,
            authenticated: false,
        },
    },
    reducers: {
        setUser:(state,action)=>{
            // console.log(action.payload)
            state.user.id=action.payload.id
            state.user.email=action.payload.email
            state.user.name=action.payload.identities[0].identity_data.name
            state.user.authenticated=true;
            // console.log(current(state.user))

        }
    },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
